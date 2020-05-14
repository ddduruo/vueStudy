<template>
  <div>
    吧啦啦啦啦啦啦啦fffffffffgg11111
    <div>
      {{msg}}
    </div>
    <div>
      {{aDouble}}
    </div>
    <div @click="say('hello')">
      点击我
    </div>
    <div class='static'
      :class= '{"active": isActive, "text-danger": hasError}'
    ></div>
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      //data一定要有return 是全局变量的定义
      msg:'hello andi',
      a:2,
      isActive: true,
      hasError: false
    }
  },
  computed :{ 
    aDouble(){
      return this.a * 2
    }
  },
  methods:{
    say(h){
      alert(h)
    }
  },
  beforeCreate(){
    
  },
  mounted(){
    alert(this.$route.params.useId)
  }
}
</script>
