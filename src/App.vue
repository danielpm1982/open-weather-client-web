<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/current-weather" exact v-if="isLogged">Current Weather</router-link>
      <router-link to="/about" exact>About</router-link>
      <router-link to="/login" exact v-if="!isLogged">Login</router-link>
      <router-link to="/logout" exact v-if="isLogged">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  export default Vue.extend({
    name: 'App',
    computed:{
      ...mapGetters(['isLogged'])
    }
  })
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #nav {
    padding: 30px;
  }
  #nav a{
    margin-left: 1em;
    text-decoration: none;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  a:link{
    color: white;
  }
  a:visited{
    color: white;
  }
  a:focus{
    color: white;
  }
  a:hover{
    color: lightskyblue;;
  }
  @media screen and (max-width: 851px) {
    #nav {
      padding: 20px 0px 20px 0px;
      width: 100%;
      font-size: 0.8em;
    }
    #nav a{
      margin-right: 0.5em;
      margin-left: 0.5em;
    }
  }
</style>


This is the main component of this app, into which all views will be injected,
according to the current selected route. Other than these views and their
respective subcomponents, this main component also displays a nav bar with
router links for the user to select and change the actual route (and view) to
another one.

The router links "Login", "Logout" and "Current Weather" will be shown according 
to the state of "isLogged" property at the Vuex store. If the user is not logged, 
the Login route option will appear and the Logout and Current Weather will not, 
and, if the user is already logged, the Logout option and Current Weather will 
appear but the Login option will not.

View-links are conditionally shown according to the login state.
