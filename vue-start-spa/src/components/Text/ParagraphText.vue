<script >


import PanelText from "@/components/Text/PanelText.vue";

export default{
  name: "ParagraphText",
  components: {PanelText},
  props:{
    isRed:Boolean,
    isInLine:Boolean,
  },

}
</script>

<template>
<panel-text ref :is-red="this.isRed" class-to-add="paragraphText" :is-in-line="this.isInLine"> </panel-text>
</template>

<style scoped>
.paragraphText
{
  text-align: left;
  font-size: 1em;
  text-indent: 10%;
  margin-top: 20px;
  font-family: MyRegular;
}
</style>