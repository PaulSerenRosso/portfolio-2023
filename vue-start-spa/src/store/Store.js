import {createStore} from 'vuex'

import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import {
    AmbientLight,
    AxesHelper, Clock,
    DirectionalLight,
    FogExp2,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer
} from "three";


   export const store = createStore({
        state () {
            return {
                devicePlateformId:1,
                allDynamicObjectsOfTheCurrentScene : {},
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
            addEventToDynamicObject(state,obj)
            {

                state.allDynamicObjectsOfTheCurrentScene[obj.dynamicObjectName].onStartPositionChanged.push(obj.onStartPositionChanged)
                obj.onStartPositionChanged(state.allDynamicObjectsOfTheCurrentScene[obj.dynamicObjectName]);
            },
            addDynamicObject(state, obj)
            {
                state.allDynamicObjectsOfTheCurrentScene[obj.objectName] = obj;
                console.log(obj.objectName)
                console.log(state.allDynamicObjectsOfTheCurrentScene[obj.objectName]);
                obj.startPosition = new Vector3(obj.cameraStartPosition.x,
                    obj.cameraStartPosition.y, obj.cameraStartPosition.z)
                    .unproject(state.camera);

                if(obj.onStartPositionChanged.length != 0)
                {
                    obj.onStartPositionChanged.forEach((item) =>
                    {
                        item(obj);
                    });
                }


            },
            createNewScene(state)
            {
                this.scene = new Scene();
                state.allDynamicObjectsOfTheCurrentScene = [];
                state.allResponsiveObjectsOfTheCurrentScene = [];
                },
            updateAllDynamicObjectsScene(state)
            {
                for(var key in state.allDynamicObjectsOfTheCurrentScene) {
                    var value = state.allDynamicObjectsOfTheCurrentScene[key];
                    value.startPosition = new Vector3(value.cameraStartPosition.x, value.cameraStartPosition.y, value.cameraStartPosition.z)
                        .unproject(state.camera);
                    if(value.onStartPositionChanged.length != 0)
                    {
                        value.onStartPositionChanged.forEach((item) =>
                        {
                            item(value);
                        });
                    }
                }
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

                var axesHelper = new AxesHelper( 1 );

                this.scene.add( axesHelper );
                this.scene.fog = new FogExp2('#F5FCFFFF', 0.2);
                const light = new DirectionalLight("white", 1);
                light.castShadow = true;
                light.position.set(1,1,1);
                state.camera = new PerspectiveCamera(75, arg.sceneContainer.clientWidth / arg.sceneContainer.clientHeight, 1, 20);
                state.camera.rotation.x = -Math.PI/10;
                const renderer = new WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,alpha: true });
                renderer.shadowMap.enabled = true;

                renderer.setSize(arg.sceneContainer.clientWidth, arg.sceneContainer.clientHeight);
                arg.sceneContainer.appendChild(renderer.domElement);
                state.camera.position.y = 1;
                state.camera.position.z = 5;
                const atmosphereLight = new AmbientLight('#b21c1b', 0.1);
                this.scene.add(atmosphereLight);
                this.scene.add(light);

                const composer = new EffectComposer( renderer );
                const renderPass =  new RenderPass( this.scene, state.camera );
                composer.addPass(renderPass);
                const resizer = new Resizer(arg.sceneContainer, state.camera, renderer);
                const clock = new Clock();
                renderer.setClearColor(0xffffff, 0);
                const animate= () => {
                    requestAnimationFrame( ()=>animate() );
                    //   cube.rotation.x += 0.01;
                    // cube.rotation.y += 0.01;
                    for(var key in state.allDynamicObjectsOfTheCurrentScene) {
                        var value = state.allDynamicObjectsOfTheCurrentScene[key];
                        value.obj.position.set(value.startPosition.x,
                            value.startPosition.y+Math.sin(clock.getElapsedTime()*value.movementFrequency)
                            *value.movementLength, value.startPosition.z);
                    }

                    composer.render();
                    // particleMesh.rotation.y += 0.001;
                    // particleMesh.position.y = Math.sin(clock.getElapsedTime()*2)*0.1;
                }
                animate();

            }
        }
    })

