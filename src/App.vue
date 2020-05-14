<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
     
  
    //  socket.addEventListener('open', function (event) {
    // socket.send('Hello Server!');
    // });
  }
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
