<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "BoidsView",
  computed: {
    ThreeContentType() {
      return ThreeContentType
    }
  },
  components: {ProjectPageContainer},

}
</script>

<template>
<project-page-container
    :project-is-solo-project="true"
                        project-name="Boids"
                        project-team="Me"
                        project-timeline="March 2022, 3 weeks"
                        project-video-src="Projects/Boids/BoidsTrailer.mp4"
                        :project-tags=" ['Unity', 'Optimization','AI', 'C#']"
                        :project-key-points="
                        ['Create a prototype of RTS units using multithreading with Unity Jobs.',
'Optimize units’ behavior using Data-oriented Paradigm and by dividing the arena into smaller cubic areas for faster treatments.',
'Implements navmeshes for each movement mode.',
'Use Boids Algorithm for moving organically units.',
'Create configuration units tool from a document regrouping the game design needs.'
]"
    :has-two-column-of-additional-visual-content="true"
                          :without-paragraph="true"
                          :project-additional-content-srcs="['Projects/Boids/BoidsSplash.jpg',
                          'Projects/Boids/BoidsJobs.jpg','Projects/Boids/BoidsSO.mp4',
                          'Projects/Boids/BoidsGridisolation.jpg']"
                            :project-additional-content-types="[ThreeContentType.Picture,ThreeContentType.Picture,
                             ThreeContentType.Video,ThreeContentType.Picture]"
                          :project-first-content-is-picture="false">
</project-page-container>
</template>

<style scoped>

</style>