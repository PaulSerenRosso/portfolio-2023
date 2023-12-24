import {StoreModule} from "@/store/StoreModule";
import {AxesHelper, Clock, FogExp2, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import createEventHandler from "@/composables/EventHandler";
import {moduleThreeObjectTagHandler} from "@/store/Modules/ModuleThreeObjectTagHandler";


export  const moduleThreeSceneCreator =
    new StoreModule(
        { onCreateSceneHandler:null,cameraYScroll: 0, onCameraYScrollHandler:null},
        {

        },{},
        {
            initThreeSceneCreator(context){
                function updateScrollCamera( context){
                    context.state.cameraYScroll = window.scrollY/window.innerHeight*2;
                    context.state.onCameraYScrollHandler.raiseEvent();

                }
                window.addEventListener('scroll', ()=>updateScrollCamera(context));
            },
            createNewScene(context) {
                this.scene = new Scene();

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
                this.scene.fog = new FogExp2('#F5FCFFFF', 0.2);
                const camera = new PerspectiveCamera(30, sceneContainer.clientWidth / sceneContainer.clientHeight, 1, 20);
                context.commit("addThreeObjectTag",{tag:"currentCamera", obj:camera})
                const renderer = new WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,alpha: true, });

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