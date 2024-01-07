<script>
// le component animation englobe le panel text
// un component panel text avec le inline et la couleur et le contenu, et un possibilité d'ajouter des classes
// un component de plus qui a le component panel text pour chaque variations

export default {
  name: "PanelText",
  props:{
    isRed:Boolean,
    isInLine:Boolean,
  },
  data(){
    return{
      textElement:this.$refs.textElement,
    }
  },
}
</script>

<template>
  <div ref="textElement" :class="{  'inline-text':this.isInLine,'black-text':!this.isRed, 'red-text':this.isRed  }"> <slot> </slot></div>
</template>

<style scoped>

.inline-text{
  display: inline;
  margin-left: 0%;
}
.black-text{
  color:#424242;
}
.red-text{
  color:#b21c1b;
}

</style>