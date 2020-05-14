<template>
  <div>
    <div>自定义组件</div>
      <div :style="{fontSize: postFontSize + 'em'}" >
        <blogpost 
         v-for="post in posts"
                  v-bind:key = 'post.id'
                  v-bind:post = 'post'
                  v-on:parentFunction = "customParentFunction"
                  ></blogpost>
      </div>
      <input type="text" v-model="searchText">
    </div>
</template>
<script>
import blogpost from "@/components/blogpost.vue";
export default {
  data(){
    return{
      posts: [
        {id:1, title: 'My journey with Me',content:'...content'},
        {id:2, title: 'Blogging with Vue',content:'...content'},
        {id:3, title: 'My vue is so fun',content:'...content'}
      ],
      count1:0,
      title:'',
      postFontSize:1,
      searchText:''
    }
  },
   components:{
      blogpost
    },
    // mounted(){
    //   console.log(this.postFontSize)
    // }
    methods:{
      customParentFunction(msg){

        this.postFontSize +=  + 0.1
        console.log(this.postFontSize)
      },
      searchText(e){
        console.log(e.target.value)
      }
    }
}
</script>

