import {createStore} from 'vuex'

import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import {
    AmbientLight,
    AxesHelper, Clock,
    DirectionalLight,
    FogExp2, PCFSoftShadowMap,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer
} from "three";
import {degToRad} from "@/composables/Math";


   export const store = createStore({
        state () {
            return {
                devicePlateformId:1,
                allDynamicObjectsOfTheCurrentScene : {},
                camera:null,
                allResponsivePropertyGroup: [],
            }
        },
        mutations: {
            initDeviceId()
            {
                store.commit('setDevice');
                window.addEventListener('resize', ()=>store.commit('setDevice'));

            },
            addResponsivePropertyGroup(state, responsivePropertyGroup)
            {
                state.allResponsivePropertyGroup.push(responsivePropertyGroup);
                console.log( responsivePropertyGroup);
                responsivePropertyGroup.raiseOnMediaQueryMatches(state.devicePlateformId);
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

                for (var index in state. allResponsivePropertyGroup) {
                    var value = state. allResponsivePropertyGroup[index];
                    value.raiseOnMediaQueryMatches(state.devicePlateformId);
                }
            },
            addChildObjectToDynamicObject(state, obj)
            {
                obj.onAdded(state.allDynamicObjectsOfTheCurrentScene[obj.dynamicParentObjectName].obj);
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

               store.commit("updateDynamicObjectScene",obj);


            },
            createNewScene(state)
            {
                this.scene = new Scene();
                state.allDynamicObjectsOfTheCurrentScene = [];
                state.allResponsiveObjectsOfTheCurrentScene = [];
                },
            updateDynamicObjectScale(state, obj)
            {
                const startPointForMeasuringSize = new Vector3(-1,0,obj.cameraStartPosition.z).unproject(state.camera);
                const endPointForMeasuringSize = (new Vector3(obj.cameraStartSize.x,obj.cameraStartSize.y,obj.cameraStartPosition.z).unproject(state.camera));

                obj.startSize = new Vector3(endPointForMeasuringSize.x-startPointForMeasuringSize.x,
                    endPointForMeasuringSize.y-startPointForMeasuringSize.y,obj.cameraStartSize.z);
                const maxScaleX = obj.startSize.x/obj.obj.geometry.parameters.width;
                const maxScaleY = obj.startSize.y/obj.obj.geometry.parameters.height;
                const maxScale = Math.min(maxScaleX, maxScaleY);

                obj.obj.scale.set(maxScale, maxScale, obj.cameraStartSize.z)

            },
            updateDynamicObjectScene(state, obj) {
                obj.startPosition = new Vector3(obj.cameraStartPosition.x,
                    obj.cameraStartPosition.y, obj.cameraStartPosition.z)
                    .unproject(state.camera);

                store.commit("updateDynamicObjectScale", obj);
                if(obj.onStartPositionChanged.length != 0)
                {
                    console.log(obj);
                    obj.onStartPositionChanged.forEach((item) =>
                    {
                        item(obj);
                    });
                }
            },
            updateAllDynamicObjectsScene(state)
            {
                for(var key in state.allDynamicObjectsOfTheCurrentScene) {
                    var value = state.allDynamicObjectsOfTheCurrentScene[key];
                    store.commit("updateDynamicObjectScene",value);
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

                //this.scene.add( axesHelper );
                this.scene.fog = new FogExp2('#F5FCFFFF', 0.2);
                const light = new DirectionalLight("white", 1);
                light.castShadow = true;

                light.shadow.bias = -0.004;
                light.add(axesHelper);

                light.position.set(1.5,1,2);
                state.camera = new PerspectiveCamera(75, arg.sceneContainer.clientWidth / arg.sceneContainer.clientHeight, 1, 20);
                state.camera.rotation.x = -Math.PI/10;
                const renderer = new WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,alpha: true, });
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.type = PCFSoftShadowMap;
                renderer.setSize(arg.sceneContainer.clientWidth, arg.sceneContainer.clientHeight);
                arg.sceneContainer.appendChild(renderer.domElement);
                state.camera.position.y = 1;
                state.camera.position.z = 5;
               // const atmosphereLight = new AmbientLight('#b21c1b', 0.1);
             //   this.scene.add(atmosphereLight);
                this.scene.add(light);

                const composer = new EffectComposer( renderer );
                const renderPass =  new RenderPass( this.scene, state.camera );
                composer.addPass(renderPass);
                new Resizer(arg.sceneContainer, state.camera, renderer);
                const clock = new Clock();
                renderer.setClearColor(0xffffff, 0);
                const animate= () => {
                    requestAnimationFrame( ()=>animate() );
                    //   cube.rotation.x += 0.01;
                    // cube.rotation.y += 0.01;
                    for(var key in state.allDynamicObjectsOfTheCurrentScene) {
                        var value = state.allDynamicObjectsOfTheCurrentScene[key];
                        value.obj.position.set(value.startPosition.x,
                            value.startPosition.y+Math.sin( (value.randomStartMovement+clock.getElapsedTime())*value.movementFrequency)
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

