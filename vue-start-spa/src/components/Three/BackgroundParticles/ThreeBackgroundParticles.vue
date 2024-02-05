<script >
import {
  BufferAttribute,
  BufferGeometry, Clock,
  Color,
  Points,
  ShaderMaterial,
  Vector3
} from "three";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {
  ThreeBackgroundParticlesResponsiveProperty
} from "@/composables/ResponsiveProperty/ThreeBackgroundParticlesResponsiveProperty";
import {
  addRemoveAtSceneChangedResponsiveListener, addRemoveAtSceneChangedUpdateListener, getThreeTagObject
} from "@/composables/StoreHelper";
import {
  getRandomNormalizedVector2,
  randomFloat,
  randomInt,
} from "@/composables/Math";
import {ThreeBackgroundTypeParticleData} from "@/composables/ThreeBackgroundTypeParticleData";
export default {
  name: "ThreeBackgroundParticles",
  data() {
    return{
      threeBackgroundParticlesResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBackgroundParticlesResponsiveProperty(100),
          new ThreeBackgroundParticlesResponsiveProperty(100),
          new ThreeBackgroundParticlesResponsiveProperty(100),
          new ThreeBackgroundParticlesResponsiveProperty(100),
      ),
      threeBackgroundTypeParticleDatas:[
          new ThreeBackgroundTypeParticleData( 20,new Color(0.69, 0.109, 0.105),0.2,1),
        new ThreeBackgroundTypeParticleData( 15,new Color(0.070,0.09,0.23),0.25,0.75),
        new ThreeBackgroundTypeParticleData( 10,new Color( 0.227, 0.226, 0.54),0.3,0.5)],

      currentProperty:null,
      particles:null,
      particleMaterial:null,
      particlesPosition:null,
      particlesId:null, // type
      particlesElevationAngle:null,
      particlesPolarAngle:null,
      particlesDirectionChangeTimer:null,
      particlesDirection:null,
      particlesSize:null,
      particlesColor:null,
      particlesSystem:null,
      radius:new Vector3(0,0,1),
      originZ: 0,
      originCameraZ: 0.9,
      camera: {},
      clock :null,

    }
  },
  functional:true,
  render() {
    return null;
  },
  mounted() {
    this.initParticles();

  },
  methods:
      {
        initParticles(){

          this.clock = new Clock();
          this.camera = getThreeTagObject("currentCamera");
          this.originZ = new Vector3(0,0,this.originCameraZ).unproject(this.camera).z;

          addRemoveAtSceneChangedResponsiveListener(this.tryCreateParticles);
          addRemoveAtSceneChangedResponsiveListener(this.refreshRadius);
          addRemoveAtSceneChangedUpdateListener(this.updateParticlePosition);
          this.particleMaterial = new ShaderMaterial({

            vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;

          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

            gl_PointSize = size*-mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
            fragmentShader: `
          varying vec3 vColor;

          void main() {


      float distance = length(gl_PointCoord - vec2(0.5, 0.5));
       if (distance > 0.5) {
        discard;
      }
      else
      {
        gl_FragColor = vec4(vColor,1);
      }

          }
        `,

          });
          this.refreshRadius();
          this.createParticles();
          console.log("test particles");
        },
        tryCreateParticles(){
          if(!this.$store.state.responsiveEventHandler.deviceHasChanged) return;
          this.createParticles();
        },
        createParticles(){

          this.currentProperty = this.threeBackgroundParticlesResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId];
          this.particles = new BufferGeometry();
          this.particlesPosition = new Float32Array(this.currentProperty.particlesCount*3);
          this.particlesColor = new Float32Array(this.currentProperty.particlesCount*3);
          this.particlesSize = new Float32Array(this.currentProperty.particlesCount);
          this.particlesId = [];
          this.particlesId = [];
          this.particlesElevationAngle = [];
          this.particlesPolarAngle= [];
          this.particlesDirectionChangeTimer= [];
          this.particlesDirections= [];


          for (let i = 0; i < this.currentProperty.particlesCount; i++) {

            this.particlesPolarAngle.push(randomFloat(0,Math.PI*2));
            this.particlesElevationAngle.push(randomFloat(0,Math.PI));
            this.particlesId.push(randomInt(0,this.threeBackgroundTypeParticleDatas.length-1));
            this.particlesDirections.push(getRandomNormalizedVector2());
            this.particlesDirectionChangeTimer.push(randomFloat(0,this.threeBackgroundTypeParticleDatas[this.particlesId[i]].directionChangeTime));
            this.setParticlePosition(i);
            this.particlesSize[i] = this.threeBackgroundTypeParticleDatas[this.particlesId[i]].size;
            const color = this.threeBackgroundTypeParticleDatas[this.particlesId[i]].color;
            this.particlesColor[i * 3] = color.r;
            this.particlesColor[i * 3 + 1] = color.g;
           this.particlesColor[i * 3 + 2] = color.b;



          }

          this.particles.setAttribute(
              'position',
              new BufferAttribute(this.particlesPosition, 3)
          );
          this.particles.setAttribute('size', new BufferAttribute(this.particlesSize, 1));
          this.particles.setAttribute('color', new BufferAttribute(this.particlesColor, 3));
          const scene = getThreeTagObject("currentScene");

          scene.remove(this.particleSystem);
          this.particleSystem = new Points(this.particles, this.particleMaterial);

         scene.add(this.particleSystem);

        },
        convertSphericalToCartesian(polarAngle,elevationAngle){
            return new Vector3(
                this.radius.x*Math.sin(elevationAngle)*Math.sin(polarAngle),
                this.radius.y*Math.cos(elevationAngle),
                this.radius.z*Math.sin(elevationAngle)*Math.cos(polarAngle)

                )
        },
        setParticlePosition(index){
          const pos = this.convertSphericalToCartesian(this.particlesPolarAngle[index], this.particlesElevationAngle[index]);
          this.particlesPosition[index * 3] = pos.x;
          this.particlesPosition[index * 3 + 1] = pos.y;
          this.particlesPosition[index * 3 + 2] = this.originZ+pos.z;

        },
        updateParticlePosition(){

         let delta =  this.clock.getDelta()
          for (let i = 0; i < this.currentProperty.particlesCount; i++) {

            if(this.checkParticleTimer(i, delta)){
               this.particlesDirections[i] = getRandomNormalizedVector2();
            }
            if(this.particlesElevationAngle[i]>=Math.PI || this.particlesElevationAngle[i] <= 0){
              this.particlesDirections[i].y *= -1;
              this.particlesPolarAngle[i] += Math.PI;
            }
            this.particlesPolarAngle[i] += this.particlesDirections[i].x*this.threeBackgroundTypeParticleDatas[this.particlesId[i]].speed*delta;
            this.particlesElevationAngle[i] += this.particlesDirections[i].y*this.threeBackgroundTypeParticleDatas[this.particlesId[i]].speed*delta;

            this.setParticlePosition(i);
          }

          this.particles.getAttribute('position').needsUpdate = true;
        },
        checkParticleTimer(index, delta){
          if(this.particlesDirectionChangeTimer[index]>=this.threeBackgroundTypeParticleDatas[this.particlesId[index]].directionChangeTime){
            this.particlesDirectionChangeTimer[index] = 0;
            return true;
          }
          else {
            this.particlesDirectionChangeTimer[index] += delta
            return false;
          }
        },
        refreshRadius(){
         var newRadius = new Vector3(-1,-1,this.originCameraZ)
              .unproject(this.camera);

          this.radius.setX(Math.abs(newRadius.x));
          this.radius.setY(Math.abs(newRadius.y));


        }
      }

}
</script>


<style scoped>

</style>

