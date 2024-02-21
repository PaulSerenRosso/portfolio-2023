<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "DeepLearningView",
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
                        project-name="Deep learning"
                        project-team="Me"
                        project-timeline="March 2023, 1 week"
                        project-video-src="Projects/DeepLearning/DeepLearningTrailer.mp4"
                        :project-tags="  ['Unity', 'AI', 'C#']"
                        :project-key-points="
                      ['Develop AI cars trained to realize the best race using Machine Learning',
'Use the Long Short Term Memory model to get the memory of cars’ mistakes.',
'Make a concise and clear presentation on how works my AI cars',
'Create an algorithm of mutation and selection in order to gain the best AI performance',
'Program the representation of the AI’s behavior for improving the analytics of it.'
]"
    :without-paragraph="true"
    :has-two-column-of-additional-visual-content="true"
                          :project-additional-content-srcs="['Projects/DeepLearning/DeepLearningSplash.jpg',
                          'Projects/DeepLearning/DeepLearningLSTM.jpg','Projects/DeepLearning/DeepLearningSO.mp4',
                          'Projects/DeepLearning/DeepLearningScreenshotSO.jpg']"
                            :project-additional-content-types="[ThreeContentType.Picture,
                             ThreeContentType.Picture,ThreeContentType.Video,ThreeContentType.Picture]"
                          :project-first-content-is-picture="false">


</project-page-container>
</template>

<style scoped>

</style>