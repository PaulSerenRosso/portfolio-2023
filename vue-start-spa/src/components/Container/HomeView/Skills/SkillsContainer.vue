<script>


import MacroContainer from "@/components/Container/MacroContainer.vue";

export default {
  name: "SkillsContainer",
  components: {MacroContainer}

}
</script>

<template>
  <macro-container ref="macroContainer"  resize-event-key="skillsMacroContainer" :height-desktop="1" :height-mobile="1" :height-large-desktop="1" :height-tablet="1">
  </macro-container>
</template>

<style scoped>

</style>