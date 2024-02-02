import {StoreModule} from "@/store/StoreModule";
import {AxesHelper, Color, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import createEventHandler from "@/composables/EventHandler";
import {lerp} from "@/composables/Math";

const languageColor ="rgb(129,80,213)";
const specialityColor="rgb(75,173,204)";
const unityColor ="rgb(89,168,77)";
const unrealColor="rgb(231,108,80)";
const webColor="rgb(173,61,61)";
const plateformColor="rgb(76,97,203)";
const internshipColor="rgb(74,171,136)";
const communicationColor="rgb(175,90,172)";
const gameDesignColor="rgb(96,96,96)";
export  const moduleThreeSceneCreator =
    new StoreModule(
        { onCreateSceneHandler:null,cameraYScroll: 0, onCameraYScrollHandler:null,
            textsColor:{
                "C#":languageColor,
                "UE5":unrealColor,
                "Unity":unityColor,
                "Network":specialityColor,
                "Javascript":languageColor,
                "C++":languageColor,
                "Tools":specialityColor,
                "Vue.js":webColor,
                "Three.js":webColor,
                "Perforce":unrealColor,
                "Physics":specialityColor,
                'Lead':communicationColor,
                "Architecture":specialityColor,
                "AI":specialityColor,
                "Agile":communicationColor,
                "Steam":plateformColor,
                "Mobile":plateformColor,
                "Blueprints":unrealColor,
                "Web":webColor,
                "Internship":internshipColor,
                "Game Design":gameDesignColor,
                "3C" :specialityColor,
                "Optimization" :specialityColor,
                "HLSL" :languageColor,
                "Tech-Art":specialityColor,
                'UI/UX':gameDesignColor,



            },
        },
        {


        },{},
        {
            initThreeSceneCreator(context){
                function updateScrollCamera( context){
                        context.state.cameraYScroll = window.scrollY/window.innerHeight*2;
                        context.state.onCameraYScrollHandler.raiseEvent();

                }
                context.state.onCameraYScrollHandler = createEventHandler();
                context.rootState.updateLoopHandler.onUpdateHandler.addEventListener( ()=>updateScrollCamera(context));
                window.onbeforeunload = () => {
                    window.scrollTo({top:0, left:0, behavior:"instant"});
                }

            },
            createNewScene(context) {
                this.scene = new Scene();
                context.state.cameraYScroll = window.scrollY;
                context.commit("addThreeObjectTag", {tag:"currentScene", obj:this.scene});
                if( context.state.onCreateSceneHandler !== null)
                {
                    context.state.onCreateSceneHandler.raiseEvent();
                }
                context.rootState.threeSceneCreator.onCreateSceneHandler = createEventHandler();
            },
            initNewScene(context, sceneContainer)
            {
                context.state.onCameraYScrollHandler = createEventHandler();
                context.state.cameraYScroll = 0;
                function setSize() {
                    camera.aspect = sceneContainer.clientWidth/sceneContainer.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(sceneContainer.clientWidth,sceneContainer.clientHeight);
                    renderer.setPixelRatio(window.devicePixelRatio);
                }

                var axesHelper = new AxesHelper( 1 );
                this.scene.add( axesHelper );
                const camera = new PerspectiveCamera(20, sceneContainer.clientWidth / sceneContainer.clientHeight, 1, 20);
                context.commit("addThreeObjectTag",{tag:"currentCamera", obj:camera})
                const renderer = new WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,alpha: true  });
                setSize();

                context.rootState.responsiveEventHandler.onWindowResizeHandler.addEventListener(setSize);
                sceneContainer.appendChild(renderer.domElement);

                const composer = new EffectComposer( renderer );
                const renderPass =  new RenderPass( this.scene, camera );
                composer.addPass(renderPass);
                renderer.setClearColor(0xffffff, 0);

                const animate= () => {
                    /*
                    for(var key in state.allDynamicObjectsOfTheCurrentScene) {
                        var value = state.allDynamicObjectsOfTheCurrentScene[key];
                        value.obj.position.set(value.startPosition.x,
                            value.startPosition.y+Math.sin( (value.randomStartMovement+clock.getElapsedTime())*value.movementFrequency)
                            *value.movementLength, value.startPosition.z);

                    }
                    for(var index in state.allDynamicObjectsOfTheCurrentScene) {
                        var onThreeUpdate = state.allDynamicObjectsOfTheCurrentScene[index];
                        onThreeUpdate();
                    }
                    */


                    composer.render();
                    // particleMesh.rotation.y += 0.001;
                    // particleMesh.position.y = Math.sin(clock.getElapsedTime()*2)*0.1;
                }
                context.rootState.updateLoopHandler.onUpdateHandler.addEventListener(animate);
}
        })