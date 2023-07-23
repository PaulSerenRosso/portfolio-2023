<template>

  <div ref="canvasContainer" id="_canvasContainer"></div>

  <video id="video" playsinline webkit-playsinline muted loop autoplay
         src="../assets/testVideo.mp4" style="display: none;"></video>
  <img id="testImg"
         src="../assets/logo.png" style="display: none;">
  <img id="_textureParticle"
       src="../assets/triangleParticleAlphaMap.png" style="display: none;">
  <div id="_testBackground">

 </div>
  <div id="_testContainerText">  <div id="_testTitle"> test text </div>
  <div id="_testText">blablabla fdqsfd qsfdqsfqsdfq fhdlsqhf qdsjfhdqskfl h fhdljkqshf lkjqsdhf hlqdsf</div>
  </div>

</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import {MathUtils} from "three";
export default {
  mounted() {

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }


/*
    const loader = new GLTFLoader();
    loader.load( 'path/to/model.glb', function ( gltf ) {
      scene.add( gltf.scene );
    }, undefined, function ( error ) {

      console.error( error );

    } );
*/
    const container = document.getElementById("_canvasContainer");
    const scene = new THREE.Scene();
    var axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );
    scene.fog = new THREE.FogExp2('#F5FCFFFF', 0.2);
// trop foncé à moitié
    // très lentement cela flotte juste et cela accelère avec un scroll
    //déplacement pour particle différent
    // lots de rotation trois lots
    // lots de tailles au moins 6 lots
    // lots de vitesse differents

    //  rotations random départ
    const atmosphereLight = new THREE.AmbientLight('#b21c1b', 0.1);
    const light = new THREE.DirectionalLight("white", 1);
    light.castShadow = true;
    const pointLight = new THREE.PointLight("#ffbf6f", 0);
    pointLight.distance = 5
    const hemisphereLight = new THREE.HemisphereLight('#FFF07C','#53d8fb',1 );
    const rectLight = new THREE.RectAreaLight("#ffc477",500, 52,50);
    light.position.set(1,1,1);
    const spotLight = new THREE.SpotLight('white', 1.0, 25, Math.PI/4, 0.5, 1);

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 20);
   camera.rotation.x = -Math.PI/10;
    const renderer = new THREE.WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,alpha: true });

    renderer.shadowMap.enabled = true;
    renderer.setSize(container.clientWidth, container.clientHeight);
     container.appendChild(renderer.domElement);
    const composer = new EffectComposer( renderer );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const redMaterial = new THREE.MeshPhongMaterial( { color: '#b21c1b', shininess: 300, fog: false } );
    const whiteMaterial = new THREE.MeshPhongMaterial( { color: '#ffffff', shininess: 300, fog: false} )
    const grayMaterial = new THREE.MeshPhongMaterial( { color: '#262626', shininess: 300,fog: false } )
    const cube = new THREE.Mesh( geometry, redMaterial );
    const geometryPlane = new THREE.BoxGeometry( 10, 1, 10 );
    const geometryEm = new THREE.BoxGeometry( 1, 2, 1 );
    const materialEmmisive = new THREE.MeshPhongMaterial( { emissiveIntensity:'2',emissive:'white',fog: false } );
    const cubeEmis = new THREE.Mesh( geometry, whiteMaterial );
    const plane = new THREE.Mesh( geometryPlane, grayMaterial );
plane.position.y = -2;
plane.position.z = -5;
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1,40,40), redMaterial );
    camera.position.y = 1;
    camera.position.z = 5;
    const materialLine = new THREE.LineBasicMaterial( { color: 0x00ff00, fog:false } );
    const points = [];
    points.push( new THREE.Vector3( - 1, 0, -1 ) );
    points.push( new THREE.Vector3( 0, 1, 1 ) );
    points.push( new THREE.Vector3( 1, 0, 0 ) );

    const bufferGeometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( bufferGeometry, materialLine );
    //Get your video element:
    const video = document.getElementById('video');
    video.onloadeddata = function () {
      video.play();
    }
    const videoTexture = new THREE.VideoTexture(video);
    const videoMaterial =  new THREE.MeshBasicMaterial( {map: videoTexture, side: THREE.FrontSide, toneMapped: false, fog:false} );
    const screen = new THREE.PlaneGeometry(1, 1);
    const videoScreen = new THREE.Mesh(screen, videoMaterial);

    const textureLoader = new THREE.TextureLoader();
    const image = document.getElementById('testImg').src;

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
    videoScreen.rotation.y = Math.PI/5;
    videoScreen.rotation.y = -Math.PI/5;
    sphere.rotation.x = -Math.PI/5;
    sphere.position.set(-1,1,0);
    pointLight.position.set(0,0,0.5);
    scene.add(videoScreen);
    scene.add(plane);
    scene.add( line );
    scene.add(sphere);
    scene.add(atmosphereLight);
    scene.add( cube );
    scene.add(pointLight);
    scene.add(light);

   // scene.add(hemisphereLight);

    rectLight.position.set(0,1,0.5);rectLight.lookAt(plane.position);
    cubeEmis.position.set(-2,0.25,0);
    scene.add(cubeEmis);
    scene.add(rectLight);
    const renderPass =  new RenderPass( scene, camera );
    composer.addPass(renderPass);


    renderer.setClearColor(0xffffff, 0);
    class Resizer {
      constructor(container, camera, renderer, cube) {
        this.setSize(container, camera, renderer, cube);
        window.addEventListener("resize",()=>{this.setSize(container, camera, renderer, cube)})
      }
      setSize(container, camera, renderer, cube) {
        camera.aspect = container.clientWidth/container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth,container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        let test = new THREE.Vector3(0,-0.5,0.5).unproject(camera);

        console.log(test);
        cube.position.copy(test);
      }

    }
    const resizer = new Resizer(container, camera, renderer, cube);
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame( ()=>animate() );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      composer.render( scene, camera );
      particleMesh.rotation.y += 0.001;


      particleMesh.position.y = Math.sin(clock.getElapsedTime()*2)*0.1;


  }
animate();
}}
</script>

<style>

#_canvasContainer
{
  top: 0%;
  left: 0%;
  position: absolute;
width: 100%;
  height: 200%;
  z-index: -1;

}
#_testTitle
{
  position: absolute;
  width: 100%;
  height: 20%;
  text-align: center;
  color: #b21c1b;
  font-size: 3em;
  font-family: MyBold;

}
#_testBackground
{
  position: fixed;
  width: 100%;
  top: 0%;
  left: 0%;
  height: 100%;
  z-index: -2;
  background-size: cover;
  background-attachment: fixed;
  background: rgb(245,252,255);
  background: linear-gradient(0deg, rgba(245,252,255,1) 0%, rgba(127,166,181,1) 100%)
}

#_testContainerText
{
  position: absolute;
  top: 50%;
  width: 20%;
  height: 70%;
  left: 60%;
  background-color: white;
  background-size: cover;
  border-radius: 10px;
}

#_testText
{
  position: absolute;
  top: 10%;
  width: 100%;
  height: 20%;
  text-align: center;
  color: #262626;
  font-size: 2em;
  font-family: MyRegular;
}

@font-face {
  font-family: MyBold;
  src: url(../assets/fonts/Merriweather-Bold.ttf);
}
@font-face {
  font-family: MyRegular;
  src: url(../assets/fonts/Merriweather-Regular.ttf);
}

</style>


