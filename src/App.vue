<template>
  <Navbar :logox="logo_src" :altx="app_name"/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import  Footer  from "./components/Footer.vue";

export default {
  components: {Navbar, Footer},
  data(){
    return{
      logo_src: '/img/logo.png',
      app_name: 'Make your Sandub'
    }
  }
  
}
</script>

<style>

*{
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container{
  margin: 50px;
  height: 250px;
}

h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
}

</style>
