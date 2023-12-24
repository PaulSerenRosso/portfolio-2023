<template>
  <three-scene  container-id="_canvasContainer"></three-scene>
  <three-js-group-object obj-tag="TestPictureRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="TestPictureRoot" :three-transform-responsive-property-group="this.threePictureContainerResponsivePropertyGroup" :original-size-obj-x="1.89" :original-size-obj-y="1"></three-responsive-transform>
    <three-picture-container :levitated-movement-length="0" :levitated-movement-frequency="0.5"
                             :three-basic-responsive-property-group=this.threePictureContainerResponsivePropertyGroup
                             src-picture="logo.png"  picture-object-tag="TestPicture"
                               ></three-picture-container>
  <three-js-group-object obj-tag="TestSecondPictureRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="TestSecondPictureRoot" :three-transform-responsive-property-group="this.threeSecondPictureContainerResponsivePropertyGroup" :original-size-obj-x="1" :original-size-obj-y="1"></three-responsive-transform>
  <three-picture-container :is-debug-ratio="true" :levitated-movement-length="0" :levitated-movement-frequency="0.5"
                           :three-basic-responsive-property-group=this.threeSecondPictureContainerResponsivePropertyGroup
                           src-picture="logo.png"  picture-object-tag="TestSecondPicture"
                             ></three-picture-container>

  <div id="_testText">blablabla fdqsfd qsfdqsfqsdfq fhdlsqhf qdsjfhdqskfl h fhdljkqshf lkjqsdhf hlqdsf</div>
  <div id="_testouille">hihi</div>
  <three-js-html-position-linker   :three-basic-responsive-property-group=this.threeSecondPictureContainerResponsivePropertyGroup
                                   html-element-id-name="_testouille"
                                   :offset-html-position-y=10 ></three-js-html-position-linker>
  <three-js-group-object obj-tag="TestVideoRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="TestVideoRoot" :three-transform-responsive-property-group="this.threeVideoContainerResponsivePropertyGroup" :original-size-obj-x="1.89" :original-size-obj-y="1"></three-responsive-transform>
  <three-video-container  :levitated-movement-length="0.4" :levitated-movement-frequency="0.4 " :three-basic-responsive-property-group=this.threeVideoContainerResponsivePropertyGroup video-object-tag="TestVideo" srcVideo="testVideo.mp4"
                          :offset-html-position-y=0
  > </three-video-container>


  <three-js-group-object obj-tag="C# logoRoot" parent-obj-tag="currentScene" ></three-js-group-object>
  <three-responsive-transform current-obj-tag="C# logoRoot" :three-transform-responsive-property-group="this.threeTextContainerResponsivePropertyGroup" :original-size-obj-x="1.89" :original-size-obj-y="1"></three-responsive-transform>
  <three-text-container :is-debug-ratio="true" background-color="green"  text-used="C#" text-object-tag="C# logo"
                         :three-text-responsive-property-group="this.threeTextContainerResponsivePropertyGroup"
                       :levitated-movement-frequency="0.4" :levitated-movement-length="0.4"
  ></three-text-container>
  <three-background-particles></three-background-particles>
  <!--





  <three-js-html-position-linker dynamic-object-name="Test"
                              html-element-id-name="_titleVideo"
                              :offset-html-position-x=100
                              :offset-html-position-y=100 ></three-js-html-position-linker>

  <p id="_titleVideo"> je suis le titre de la video </p>

<div id="_testContainerText">  <div id="_testTitle"> test text </div>
<div id="_testText">blablabla fdqsfd qsfdqsfqsdfq fhdlsqhf qdsjfhdqskfl h fhdljkqshf lkjqsdhf hlqdsf</div>
</div>
 -->

  </template>

  <script >

  import ThreeScene from '../components/Three/ThreeScene.vue'
  import ThreeJsHtmlPositionLinker from "@/components/Three/ThreeJsHtmlPositionLinker.vue";
  import ThreeVideoContainer from "@/components/Three/Video/ThreeVideoContainer.vue";
  import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
  import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
  import {Vector3} from "@/composables/Vector3";
  import ThreePictureContainer from "@/components/Three/Picture/ThreePictureContainer.vue";
  import ThreeTextContainer from "@/components/Three/Text/ThreeTextContainer.vue";
  import {ThreeTextResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeTextResponsiveProperty";
  import ThreeJsGroupObject from "@/components/Three/ThreeJsGroupObject.vue";
  import ThreeResponsiveTransform from "@/components/Three/ThreeResponsiveTransform.vue";
  import {Vector2} from "@/composables/Vector2";
  import ThreeBackgroundParticles from "@/components/Three/BackgroundParticles/ThreeBackgroundParticles.vue";

    export default {


      // eslint-disable-next-line vue/no-unused-components
  components:{
    ThreeBackgroundParticles,
    ThreeTextContainer,
    ThreeResponsiveTransform,
    ThreeJsGroupObject,
    ThreePictureContainer,
    ThreeVideoContainer,
    ThreeScene,
    ThreeJsHtmlPositionLinker
  },
      data(){
    return{
      threeVideoContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0.5,0.5),
              0,
              new Vector3(0.5,0.5,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.25,0.25,0.9),
              60,
              new Vector3(0.2,0.2,1)),
      ),
      threePictureContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0.5,0.5),
              0,
              new Vector3(0.5,0.5,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(1,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
      ),
      threeSecondPictureContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0,0.5),
              0,
              new Vector3(0.2,0.2,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0,0.5,0.5),
              0,
              new Vector3(0.5,0.5,1)),
          new ThreeBasicResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.2,0.2,1)),
      ),
      threeTextContainerResponsivePropertyGroup:new ResponsivePropertyGroup(
          new ThreeTextResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.2,0.2,1), 50),
          new ThreeTextResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.2,0.2,1), 250),
          new ThreeTextResponsiveProperty(
              new Vector3(0.25,0.5,0.5),
              60,
              new Vector3(0.25,0.5,0.5), 50),
          new ThreeTextResponsiveProperty(
              new Vector3(0.75,0.5,0.5),
              10,
              new Vector3(0.2,0.2,1), 250)),
    }
      },
  /*
    const loader = new GLTFLoader();
    loader.load( 'path/to/model.glb', function ( gltf ) {
      scene.add( gltf.scene );
    }, undefined, function ( error ) {

      console.error( error );

    } );
  */



  // trop foncé à moitié
    // très lentement cela flotte juste et cela accelère avec un scroll
    //déplacement pour particle différent
    // lots de rotation trois lots
    // lots de tailles au moins 6 lots
    // lots de vitesse differents

    //  rotations random départ
  /*
    const pointLight = new THREE.PointLight("#ffbf6f", 0);
    pointLight.distance = 5
    const hemisphereLight = new THREE.HemisphereLight('#FFF07C','#53d8fb',1 );
    const rectLight = new THREE.RectAreaLight("#ffc477",500, 52,50);

    const spotLight = new THREE.SpotLight('white', 1.0, 25, Math.PI/4, 0.5, 1);


    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const redMaterial = new THREE.MeshPhongMaterial( { color: '#b21c1b', shininess: 300, fog: false } );
    const whiteMaterial = new THREE.MeshPhongMaterial( { color: '#ffffff', shininess: 300, fog: false} )
    const grayMaterial = new THREE.MeshPhongMaterial( { color: '#262626', shininess: 300,fog: false } )
    const cube = new THREE.Mesh( geometry, redMaterial );
    const geometryPlane = new THREE.BoxGeometry( 10, 1, 10 );
    const geometryEm = new THREE.BoxGeometry( 1, 2, 1 );
    const materialEmmisive = new THREE.MeshPhongMaterial( { emissiveIntensity:2,emissive:'white',fog: false } );
    const cubeEmis = new THREE.Mesh( geometry, whiteMaterial );
    const plane = new THREE.Mesh( geometryPlane, grayMaterial );
  plane.position.y = -2;
  plane.position.z = -5;
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1,40,40), redMaterial );

    const materialLine = new THREE.LineBasicMaterial( { color: 0x00ff00, fog:false } );
    const points = [];
    points.push( new THREE.Vector3( - 1, 0, -1 ) );
    points.push( new THREE.Vector3( 0, 1, 1 ) );
    points.push( new THREE.Vector3( 1, 0, 0 ) );

    const bufferGeometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( bufferGeometry, materialLine );
    //Get your video element:


    const textureLoader = new THREE.TextureLoader();
    const image = (document.getElementById('testImg')).src;

    const texture = textureLoader.load(image, (texture) => {
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const imageScreen = new THREE.Mesh(
          new THREE.PlaneGeometry(1,1,1,1), material);
      imageScreen.rotation.y = -Math.PI/5;
      imageScreen.position.set(1,1,1);
      scene.add(imageScreen);
    });
    const assignSRGB = ( texture ) => {

      texture.colorSpace = THREE.SRGBColorSpace;

    };
    const textureParticle = document.getElementById('_textureParticle').src;
    const particleSprite = textureLoader.load( textureParticle, assignSRGB );
    const particlesMaterial = new THREE.PointsMaterial(
        {
         alphaMap:particleSprite, alphaTest:0.01,  size:0.2,transparent: true, color: '#262626', fog : true
        }
    )

    const particleCount= 500;
    const particlesGeometry = new THREE.BufferGeometry;
    const posArray = new Float32Array(particleCount*3);
    for (let i = 0; i < particleCount; i++) {
      posArray[i] =  MathUtils.randFloatSpread( 8);
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3));
    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    window.addEventListener('scroll',OnScroll)
    let prevScrollTop = 0;
    function OnScroll()
    {
      const scrollPosition = window.scrollY; // Current scroll position
      const scrollDirection = getScrollDirection();
      // Perform any actions based on the event data
      console.log('Current scroll position:', scrollPosition);
      console.log('Scroll direction:', scrollDirection);
      prevScrollTop = window.scrollY;
    }
    // simple animation au moment de start du site
    // trigger à un certain point du site
    // animation scrolling continue
    function getScrollDirection() {
      if (window.scrollY> prevScrollTop) {
        return 'down';
      } else if (window.scrollY < prevScrollTop) {
        return 'up';
      } else {
        return 'none';
      }
    }
    scene.add(particleMesh);

    cube.receiveShadow = true;
    cube.castShadow = true;
    sphere.receiveShadow = true;
    sphere.castShadow = true;

    sphere.rotation.x = -Math.PI/5;
    sphere.position.set(-1,1,0);
    pointLight.position.set(0,0,0.5);

    scene.add(plane);
    scene.add( line );
    scene.add(sphere);

    scene.add( cube );
    scene.add(pointLight);

   // scene.add(hemisphereLight);

    rectLight.position.set(0,1,0.5);rectLight.lookAt(plane.position);
    cubeEmis.position.set(-2,0.25,0);
    scene.add(cubeEmis);
    scene.add(rectLight);
    const renderPass =  new RenderPass( scene, camera );
    composer.addPass(renderPass);




  */
  }
  </script>

  <style>

  #_testTitle
  {
  position: absolute;
  width: 100%;
  height: 20%;
  text-align: center;
  color:  #b21c1b;
  font-size: 3em;
  font-family: MyBold;
  }

  #_testContainerText
  {
  position: absolute;
  top: 50%;
  width: 20%;
  height: 70%;
  left: 60%;
  background-size: cover;
  border-radius: 10px;
  }
  #threeTextCanvas{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    width: 50%;

    font-family: MyBlack;
  }
  #_testText
  {
  position: absolute;
  top: 100%;
    left: 0%;
  width: 100%;
  height: 20%;
  text-align: center;
  color:#424242;
  font-size: 2em;
  font-family: MyRegular;
  }


  </style>


