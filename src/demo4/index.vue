<template>
  <div>
    <alertbox>Something bad happened.</alertbox>
    <div ref="head"></div>
    <!-- <router-link to="/demo1">demo1</router-link> -->
    <router-link :to="{name :'demo1',params:{useId: 123}}">params</router-link>
  </div>
</template>
<script>
import alertbox from "@/components/alertbox.vue";
export default {
  components: {
    alertbox,
  },
  mounted() {
    // console.log(this.$refs.head)
    // this.$refs.head.innerHTML = "helloword";
  },
};
</script>
