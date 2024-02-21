<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "BubbleView",
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
                        project-name="Bubble"
                        project-team="Me"
                        project-timeline="April 2023, 1 week"
                        project-video-src="Projects/Bubbles/BubblesTrailer.mp4"
                        :project-tags="  ['UE5', 'HLSL','Tech-Art']"
                        :project-key-points="
                       ['Implement shader in HLSL in Unreal engine from effects references',
'Develop SDF (signed distance field) and raymarching algorithms for creating deformation and merging effects.',
'Organize material parameters for better readability.',
'Use the HSV model for getting a result closer to the bubble effect.'
]"
    :has-two-column-of-additional-visual-content="true"
    :without-paragraph="true"
                          :project-additional-content-srcs="['Projects/Bubbles/BubblesSplash.jpg',
                          'Projects/Bubbles/BubblesMaterialView.mp4',
                          'Projects/Bubbles/BubblesMaterialInstance.jpg']"
                            :project-additional-content-types="[ThreeContentType.Picture,
                             ThreeContentType.Video,ThreeContentType.Picture]"
                          :project-first-content-is-picture="false">

</project-page-container>
</template>

<style scoped>

</style>