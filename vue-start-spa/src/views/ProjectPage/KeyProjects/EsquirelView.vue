<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "EsquirelView",
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
                        project-name="Esquirel"
                        project-team="10 Game Programmers / 4 Game Designers, 2 Game Programmers, 4 Game Artists"
                        project-timeline="November 2022 to January 2023"
                        project-video-src="Projects/Esquirel/EsquirelTrailer.mp4"
                        :project-tags="['Unity', 'C#', 'Network', 'Lead', 'Architecture', 'Tools' ]"
                        :project-key-points="
                        ['Develop online MOBA in Unity',
'Lead team of programmers during R&D researches',
'Create a stable network architecture, opened to changes',
'Create an ability system for enhancing integration',
'Set up Cloud Service for accelerating design balancing.',
'Integrate the fog of war',
]"
                          :project-additional-content-srcs="['Projects/Esquirel/EsquirelScreenshot01.jpg','Projects/Esquirel/EsquirelScreenshot02.jpg',
                          'Projects/Esquirel/EsquirelArchitectureView.mp4','Projects/Esquirel/EsquirelRemoteConfig.jpg']"
                            :project-additional-content-types="[ThreeContentType.Picture,ThreeContentType.Picture, ThreeContentType.Video,ThreeContentType.Picture]"
                          :project-first-content-is-picture="false"
:has-two-column-of-additional-visual-content="true">
  <div>
    Esquirel is a  <span class="bold-content">2v2 MOBA</span>. The players play  <span class="bold-content">squirrels</span> and fight for collecting nuts around <span class="bold-content">control points</span>.
    The importance of the <span class="bold-content">vision</span> is the key of the victory.
    The fog of war, the bushes, wards or even the Squirels’ abilities push the players to <span class="bold-content">ambush</span> and be careful regarding their enemies’ positions.
    The universe in <span class="bold-content">hand paint</span> was inspired by Robin hood.
  </div>

  <div>
    The projects was divided in two parts. On the one hand, two weeks of <span class="bold-content">R&D with 10 programmers</span>.
    I made <span class="bold-content">researches</span> on the network in Unity using Photon, created a Moba <span class="bold-content">architecture</span> then <span class="bold-content">leaded</span> the development of a basic Moba prototype.
    On the other hand, the programming class was spread into pairs. Each pair was assigned game designers and artists. Then, from the prototype made, I created a unique experience, in my case Esquirel, in less than 2 months.
    As the production period was quite short, we decided to work by <span class="bold-content">iterations</span> from a prototype in order to have the best fun and functional game as possible.
    To reduce the developpement cost, the <span class="bold-content">bezier curve</span> principle was used in various ways in our game.
  </div>
  <div>
    We were proud to be the class<span class="bold-content"> major</span> of our promotion with Esquirel.
    See the players have fun and fight intensely for victory, it’s a feeling that I will never forget.
  </div>


</project-page-container>
</template>

<style scoped>

</style>