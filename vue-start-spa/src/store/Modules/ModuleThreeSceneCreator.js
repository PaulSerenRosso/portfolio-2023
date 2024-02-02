import {StoreModule} from "@/store/StoreModule";
import {AxesHelper, Color, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import createEventHandler from "@/composables/EventHandler";
import {lerp} from "@/composables/Math";

export  const moduleThreeSceneCreator =
    new StoreModule(
        { onCreateSceneHandler:null,cameraYScroll: 0, onCameraYScrollHandler:null,
            textsColor:{
                "C#":"rgba(255,0,0,1)",
                "UE5":"rgba(0,0,255,1)",
                "Unity":"rgba(0,255,0,1)",
                "Network":"rgba(255,0,0,1)",
                "Javascript":"rgba(255,0,0,1)",
                "C++":"rgba(255,0,0,1)",
                "Tools":"rgba(0,0,255,1)",
                "Vue.js":"rgba(255,0,0,1)",
                "Three.js":"rgba(255,0,0,1)",
                "Perforce":"rgba(255,0,0,1)",
                "Physics":"rgba(255,0,0,1)",
                'Lead':"rgba(255,0,0,1)",
                "Architecture":"rgba(255,0,0,1)",
                "AI":"rgba(255,0,0,1)",
                "Agile":"rgba(255,0,0,1)",
                "Steam":"rgba(255,0,0,1)",
                "Mobile":"rgba(255,0,0,1)",
                "Blueprints":"rgba(255,0,0,1)",
                "Web":"rgba(255,0,0,1)",
                "Intership":"rgba(255,0,0,1)",
                "Game Design":"rgba(255,0,0,1)"



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