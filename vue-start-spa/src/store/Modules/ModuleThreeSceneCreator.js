import {StoreModule} from "@/store/StoreModule";
import {AxesHelper, Clock, FogExp2, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import createEventHandler from "@/composables/EventHandler";


export  const moduleThreeSceneCreator =
    new StoreModule(
        { onCreateSceneHandler:null,},
        {},{},
        {
            createNewScene(context) {
                this.scene = new Scene();
                context.commit("addThreeObjectTag", {tag:"currentScene", obj:this.scene});
                context.state.onCreateSceneHandler = createEventHandler();
            },
            initNewScene(context, sceneContainer,)
            {
                function setSize() {
                    this.camera.aspect = sceneContainer.clientWidth/sceneContainer.clientHeight;
                    this.camera.updateProjectionMatrix();
                    renderer.setSize(sceneContainer.clientWidth,sceneContainer.clientHeight);
                    renderer.setPixelRatio(window.devicePixelRatio);
                }

                var axesHelper = new AxesHelper( 1 );
                this.scene.add( axesHelper );
                this.scene.fog = new FogExp2('#F5FCFFFF', 0.2);
                this.camera = new PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 1, 20);
                context.commit("addThreeObjectTag",{tag:"currentCamera", obj:this.camera})
                this.camera.rotation.x = -Math.PI/10;
                const renderer = new WebGLRenderer({antialias: true, logarithmicDepthBuffer: true,alpha: true, });
                setSize();
                context.onWindowResizeHandler.addListener(setSize);
                sceneContainer.appendChild(renderer.domElement);
                this.camera.position.y = 1;
                this.camera.position.z = 5;
                const composer = new EffectComposer( renderer );
                const renderPass =  new RenderPass( this.scene, this.camera );
                composer.addPass(renderPass);
                renderer.setClearColor(0xffffff, 0);
                context.rootState.updateLoopHandler.onUpdateHandler.addEventListener(animate);
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
                }}
        })