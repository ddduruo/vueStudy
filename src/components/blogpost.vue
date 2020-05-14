<template>
  <div class="blog-post">
    <h3 >{{post.title}}</h3>
    <button @click="sendDataToParent">Enlarge text</button>
    <div v-html="post.content"></div>
  </div>
</template>
<script>
// /21321332
export default {
  name:"blockpost",
  props:['post'],
  data(){
    return{
      // postFontSize: 1
    }
  },
  methods:{
    sendDataToParent(){
      this.$emit('parentFunction')
    }
  }
}
</script>

