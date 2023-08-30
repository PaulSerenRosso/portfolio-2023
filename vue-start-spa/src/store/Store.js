import {createStore} from 'vuex'
import * as THREE from "three";
import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import {Vector3} from "three";


   export const store = createStore({
        state () {
            return {
                devicePlateformId:1,
                allDynamicObjectsOfTheCurrentScene : [],
                camera:null,
            }
        },
        mutations: {
            initDeviceId()
            {
                store.commit('setDevice');
                window.addEventListener('resize', ()=>store.commit('setDevice'));
            },
            setDevice(state)
            {

                if(window.innerWidth < 768)
                {
                    state.devicePlateformId = 0;
                }
                else if(window.innerWidth < 992)
                {
                    state.devicePlateformId = 1;
                }
                else if(window.innerWidth < 1200)
                {
                    state.devicePlateformId = 2;
                }
                else
                {
                    state.devicePlateformId = 3;
                }

            },
            addScene(state, obj)
            {
               this.scene.add(obj);
               // creation animation

            },
            addDynamicObject(state, obj)
            {
                state.allDynamicObjectsOfTheCurrentScene.push(obj);
                obj.startPosition = new Vector3(obj.cameraStartPosition.x,
                    obj.cameraStartPosition.y, obj.cameraStartPosition.z)
                    .unproject(state.camera);

                if(obj.onStartPositionChanged !== undefined)
                    obj.onStartPositionChanged(obj);

            },
            createNewScene(state)
            {
                this.scene = new THREE.Scene();
                state.allDynamicObjectsOfTheCurrentScene = [];
                state.allResponsiveObjectsOfTheCurrentScene = [];
                },
            updateAllDynamicObjectsScene(state)
            {
                state.allDynamicObjectsOfTheCurrentScene.forEach((item)=> {
                    item.startPosition = new Vector3(item.cameraStartPosition.x, item.cameraStartPosition.y, item.cameraStartPosition.z)
                        .unproject(state.camera);
                    if(item.onStartPositionChanged !== undefined)
                    item.onStartPositionChanged(item);

                });
            },
            initNewScene(state, arg)
            {
                class Resizer {
                    constructor(container, camera, renderer) {
                        this.setSize(container, camera, renderer);
                        window.addEventListener("resize",()=>{this.setSize(container, camera, renderer)})
                    }
                    setSize(container, camera, renderer) {
                        camera.aspect = container.clientWidth/container.clientHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(container.clientWidth,container.clientHeight);
                        renderer.setPixelRatio(window.devicePixelRatio);
                     store.commit('updateAllDynamicObjectsScene');

                    }
                }

                var axesHelper = new THREE.AxesHelper( 1 );

                this.scene.add( axesHelper );
                this.scene.fog = new THREE.FogExp2('#F5FCFFFF', 0.2);
                const light = new THREE.DirectionalLight("white", 1);
                light.castShadow = true;
                light.position.set(1,1,1);
                state.camera = new THREE.PerspectiveCamera(75, arg.sceneContainer.clientWidth / arg.sceneContainer.clientHeight, 1, 20);
                state.camera.rotation.x = -Math.PI/10;
                const renderer = new THREE.WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,alpha: true });
                renderer.shadowMap.enabled = true;

                renderer.setSize(arg.sceneContainer.clientWidth, arg.sceneContainer.clientHeight);
                arg.sceneContainer.appendChild(renderer.domElement);
                state.camera.position.y = 1;
                state.camera.position.z = 5;
                const atmosphereLight = new THREE.AmbientLight('#b21c1b', 0.1);
                this.scene.add(atmosphereLight);
                this.scene.add(light);

                const composer = new EffectComposer( renderer );
                const renderPass =  new RenderPass( this.scene, state.camera );
                composer.addPass(renderPass);
                const resizer = new Resizer(arg.sceneContainer, state.camera, renderer);
                const clock = new THREE.Clock();
                renderer.setClearColor(0xffffff, 0);
                const animate= () => {
                    requestAnimationFrame( ()=>animate() );
                    //   cube.rotation.x += 0.01;
                    // cube.rotation.y += 0.01;
                    state.allDynamicObjectsOfTheCurrentScene.forEach(function (item) {

                        item.obj.position.set(item.startPosition.x,
                            item.startPosition.y+Math.sin(clock.getElapsedTime()*item.movementFrequency)
                            *item.movementLength, item.startPosition.z);

                    });
                    composer.render();
                    // particleMesh.rotation.y += 0.001;
                    // particleMesh.position.y = Math.sin(clock.getElapsedTime()*2)*0.1;
                }
                animate();

            }
        }
    })

