<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "JabView",
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
                        project-name="Jab"
                        project-team="4 Game Designers, 2 Game Programmers, 6 Game Artists"
                        project-timeline="February 2023 to June 2023"
                        project-video-src="Projects/Jab/JabTrailer.mp4"
                        :project-tags="   ['Mobile','Unity', 'Tools', 'AI', 'Lead', 'C#' ]"
                        :project-key-points="
                        ['Create a window tool to easily read and edit the boss’ behavior',
 'Work on a mobile game',
'Work as Lead Programmer',
'Design and implement juicy UI',
'Experience Pair programming workflow',
'Develop copy paste tool of behavior tree to accelerate boss production.'
]"
                          :project-additional-content-srcs="['Projects/Jab/JabBehaviourTreeTool.mp4','Projects/Jab/JabCopyPaste.mp4',
                          'Projects/Jab/JabGame.mp4','Projects/Jab/JabMenu.mp4']"
                            :project-additional-content-types="[ThreeContentType.Video, ThreeContentType.Video,
                            ThreeContentType.Video,ThreeContentType.Video]"
                         :has-two-column-of-additional-visual-content="true"
                          :project-first-content-is-picture="false">
  <div>
    Jab is a <span class="bold-content">mobile fighting sport game</span> with a completely crazy atmosphere.
    The player does one fight after another against a boss until he/she wins the tournament.
    To win a fight, the player must gain the favors of the public by <span class="bold-content">taunting</span> and <span class="bold-content">hitting</span> the boss represented by a <span class="bold-content">gauge</span> of the Hype inspired of the tug of war.
    The player can move within a <span class="bold-content">radial grid</span> around the boss.
    At last, each boss has a unique ability or behavior and a <span class="bold-content">weak moment</span> that the player must find for <span class="bold-content">stunning</span> the boss in order to gain an advantage.

  </div>

  <div>
    For the creation of the boss, I am very proud of the tools we set up.
    First, we developed the boss’ behavior based on a behavior tree architecture for a better flexibility and readability.
    Then, from this architecture, we created a window tool to edit and visualize the behavior pieces of the boss’ trees.
    Later, we developed a copy paste tool, to copy a common part of a boss tree to another in order to accelerate the production of bosses.
    Both were designed and used by the programmers and designers.

  </div>
  <div>
    On the other hand, thanks to the mobile platform of our game I learnt how to make juicy UI responsive, to use a profiler and set up other graphics optimization.
    Finally, we worked a lot in pair programming for designing the code architecture and handling technical problematics.
  </div>

</project-page-container>
</template>

<style scoped>

</style>