<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "MemoryOfHopeView",
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
    :project-is-solo-project="false"
    :has-two-column-of-additional-visual-content="true"
                        project-name="Memory of Hope"
                        project-team="1 Game Designer, 2 Game Programmers, 6 Game Artists"
                        project-timeline="February 2022 to June 2023"
                        project-video-src="Projects/MemoryOfHope/MemoryOfHopeTrailer.mp4"
                        :project-tags="['Unity', 'C#','Physics', '3C', 'Tools', 'Lead']"
                        :project-key-points="
                        ['Develop physic based controller',
'Design the player Controller split in action scripts',
'Work as Lead Programmer',
'Program the Puzzle System',
'Develop Boss using State Machines',
'Create Event System (Dialogue and Cinematic)',


]"
                          :project-additional-content-srcs="['Projects/MemoryOfHope/MOHScreenshot01.jpg','Projects/MemoryOfHope/MOHScreenshot02.jpg',
                          'Projects/MemoryOfHope/MOHListenertrigger.jpg','Projects/MemoryOfHope/MOHDialogue.jpg']"
                            :project-additional-content-types="[ThreeContentType.Picture, ThreeContentType.Picture,
                            ThreeContentType.Picture, ThreeContentType.Picture]"
                          :project-first-content-is-picture="false">
  <div>
    Memory of Hope, is a <span class="bold-content">Zelda-like</span> game in which the player plays as an <span class="bold-content">Artificial Intelligence</span> designed to replace the daughter of a researcher troubled by <span class="bold-content">grief</span>.
    She will evolve in Lazarus, an abandoned virtual world, with the hope of finding Hope's memory, which has been kept there for years.
    Throughout his exploration of Lazarus, the player will activate Memorial Modules which will inform him aboutHope's <span class="bold-content"> past</span>,
    and give him access to <span class="bold-content">powers</span> allowing him to progress through the simulation.

  </div>

</project-page-container>
</template>

<style scoped>

</style>