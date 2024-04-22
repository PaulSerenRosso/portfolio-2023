<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "INRSView",
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
                        project-name="It's not Rocket Science !"
                        project-team="4 Game Designers, 2 Game Programmers"
                        project-timeline="October 2023 to January 2024"
                        project-video-src="Projects/INRS/INRSSplash.jpg"
                        :project-tags="['Steam','UE5', 'Blueprints', 'Physics','Perforce','C++']"
                        :project-key-points="
                        ['Working on shipping the project to Steam',
'Set up and use Perforce as versioning software',
'Create a clean Blueprints architecture',
'Entirely create elastic rope algorithm',
'Handle Unreal engine physics',
'Simplify the game designers work by using data assets'
]"
    :has-two-column-of-additional-visual-content = "true"
                          :project-additional-content-srcs="['Projects/INRS/INRSScreenshot01.jpg','Projects/INRS/INRSScreenshot01.jpg',
                          'Projects/INRS/INRSRope.mp4','Projects/INRS/INRSMerge.mp4']"
                            :project-additional-content-types="[ThreeContentType.Picture,ThreeContentType.Picture,
                             ThreeContentType.Video, ThreeContentType.Video]"
                          :project-first-content-is-picture="true">
  <div>
    It’s not Rocket Science is <span class="bold-content">a party game </span> where 2 teams of 2 players compete.
    Their goal is to make the highest rocket, then launch it in order to be the first to reach the finish line.
    There are various ways to <span class="bold-content">cooperate </span> or to <span class="bold-content"> sabotage </span> the other team.
    It is a <span class="bold-content">physic-based</span> game, so there is a lot of chaos;
    stacking blocks for building the rocket or controlling the rocket in the space will be more difficult than expected.
  </div>

  <div>
    It was my first project in <span class="bold-content">Unreal engine 5</span>using for the main part the <span class="bold-content">blueprints</span>.
    I learnt a lot about, the blueprints and the engine logics, how to make them clean as well as their architecture.
    Then, with my team, we set up and used <span class="bold-content">Perforce</span> for our project,
    it was really interesting to have another approach of versioning than Git.
    The physics was a big challenge for us,
    recreating completely the principle of an <span class="bold-content"> elastic rope </span> for the controller needs,
    or handling the generation of mesh for the rocket’s creation.
  </div>
  <div>
    At last, we were working on shipping the project to <span class="bold-content">Steam </span>.
    I implemented the Steam SDK, and the steam achievements for our game.
  </div>


</project-page-container>
</template>

<style scoped>

</style>