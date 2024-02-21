<script>


import ProjectPageContainer from "@/components/Container/ProjectPage/ProjectPageContainer.vue";
import {ThreeContentType} from "@/composables/ThreeContentType";

export default {
  name: "BobyView",
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
                        project-name="Boby"
                        project-team="4 Game Designers, 2 Game Programmers, 4 Game Artists / 10 Game Programmers"
                        project-timeline="November 2022 to January 2023"
                        project-video-src="Projects/Boby/BobySplash.jpg"
                        :project-tags=" ['Internship', 'Web', 'Game Design', 'Agile', 'Javascript']"
                        :project-key-points=" ['Internship as Gameplay Programmer and Game designer',
'Create an Casual-Web-Arcade game in pure Javascript for all platforms',
'Work in Agile and Scrum organization',
'Work with UI/UX designers and Development departments',
'Design gamification for software'

]"
                          :project-additional-content-srcs="['Projects/Boby/BobyScreenshot01.jpg','Projects/Boby/BobyTuto.jpg',
                          'Projects/Boby/BobyMainMenu.jpg','Projects/Boby/BobyEndMenu.jpg']"
                            :project-additional-content-types="[ThreeContentType.Picture,ThreeContentType.Picture,
                            ThreeContentType.Picture,ThreeContentType.Picture,]"
                          :project-first-content-is-picture="true"
:has-two-column-of-additional-visual-content="true">
  <div>
    Boby is a start-up developing a ERP (Enterprise Resource Planning),
    a <span class="bold-content">Web application</span> for the companies in the construction industry. Here, its<a class="text-link text-content" target="_blank" href="https://boby.net/"> website</a>.
    As an <span class="bold-content">intern</span>, my job was to bring gamification within the application. At the beginning, I established the <span class="bold-content">gamification</span> strategy that could be best implemented in Boby, regarding their users.
    Most of my time was then dedicated to developing a <span class="bold-content">web casual arcade video game</span> and integrating it into the application without library nor package. It was really a challenge to create a functional game on all platforms and for all users who mostly play very little to video games.
  </div>
  <div>
    In an <span class="bold-content">Agile</span> and <span class="bold-content">Scrum</span> organization, I worked with the developers and took part in daily code review, sprint planning and software retrospectives.
    I also collaborated with the UI/UX designers to produce designs in line with my game and to integrate assets to the application.
    At the end of each sprint, I <span class="bold-content">presented</span> my work in progress in front of the different teams and leaders of the company.

  </div>
  <div class="text-italic">
    “Paul created a scene in our company to produce a video game.
    He demonstrated great autonomy and a keen sense of rigor.
    We were impressed by his ability to adapt: In order to follow our technological constraints,
    he had to develop the game in a language he did not know and yet carried out his mission perfectly.
    Also, Paul worked to write quality code. He did not hesitate to rewrite his code to make it as maintainable and scalable as possible.
    Finally, sociable and in a good mood, he was able to integrate perfectly into our team. Come back whenever you want Paul! ”  Guillaume Harari CTO of Boby.
  </div>


</project-page-container>
</template>

<style scoped>
.text-link{
  text-decoration: underline;
  text-decoration-color: white;
  text-decoration-thickness: 2px;

  color: white;
}

.text-italic{
  font-family: MyItalic;
}
</style>