<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";

export default {
  name: "EsquirelView",
  components: {ProjectPageContainer},

}
</script>

<template>
<project-page-container project-name="Esquirel"
                        project-team="4 Game Designers, 2 Game Programmers, 4 Game Artists / 10 Game Programmers"
                        project-timeline="November 2022 to January 2023"
                        project-video-src="testVideo.mp4"
                        :project-tags="['Unity', 'C#', 'Lead', 'Network', 'Architecture', 'Tools']"
                        :project-key-points="
                        ['Architecture thinking with UML diagrams',
                        'Ability System',
                        'Board & Tile System',
                        'State Machines',
                        'UI Programmation',
                        'Lead Programmer']">
  <div>
    We were proud to be the class major of our promotion with
    this project. That's also the game in which players were litteraly shouting
    of fun during their playtests and that's a feeling that cannot be forgotten.
  </div>

  <div>
   <span class="bold-content"> Jungle Dunk</span>, is all about being a mischievous little monkey, running around and stealing as many fruits
    as possible with your gang. Two teams of four players face each other for 6 minutes,
    with their only objective being to dunk as many fruits as possible in the central volcano.
    But other than that, there are no rules. Jungle Dunk matches are a chockfull of sneaky tactics,
    clever synergies and above all, pure chaos!

  </div>
    <div>
      I learned so much with this project. On the technical side on
      Unreal Engine and the network programming. And on the management side,
      I achieved to execute my view on a project workflow. A lot of iterations and tests,
      slow but constant progress and great team communication..
  </div>

</project-page-container>
</template>

<style scoped>

</style>