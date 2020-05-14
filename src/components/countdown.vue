<template>
  <div>
    <button @click="clickHandle"></button>
    <div>{{title}}</div>
  </div>
</template>
<script>
export default {
  props: ['btnName','post','title'],
  methods:{
    clickHandle(){
      this.$emit('update:count')
    }
  }
}
</script>

