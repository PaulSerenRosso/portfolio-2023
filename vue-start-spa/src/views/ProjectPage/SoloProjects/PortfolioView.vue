<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "PortfolioView",
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
                        project-name="Portfolio"
                        project-team="Me"
                        project-timeline="September 2023 to February 2024"
                        project-video-src="Projects/Portfolio/PortfolioSplash.jpg"
                        :project-tags="['Web', 'Javascript', 'Vue.js', 'Three.js','UI/UX']"
                        :project-key-points="
                        ['Design and develop 3d website using Three.js',
'Use Vue.js framework for components architecture',
'Optimize website for working for all platforms and browsers.',
'Make the 2D and 3D assets responsive for all plateforms',
'Create shaders in GLSL for rendering particles and simulate lighting and shadows.'

]"
    :has-two-column-of-additional-visual-content="true"
            :without-paragraph="true"
                          :project-additional-content-srcs="['Projects/Portfolio/PortfolioComponentPage.jpg',
                          'Projects/Portfolio/PortfolioScreenPropsProjectPage.jpg','Projects/Portfolio/PortfolioThreejs.jpg',
                          'Projects/Portfolio/PortfolioResponsiveProperty.jpg']"
                            :project-additional-content-types="[ThreeContentType.Picture, ThreeContentType.Picture,
                            ThreeContentType.Picture, ThreeContentType.Picture]"
                          :project-first-content-is-picture="true">

</project-page-container>
</template>

<style scoped>

</style>