<template>
    <div class="centralImageLogin">
        <img id="login" alt="login-image" src="../assets/login.png" />
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'LoginComponent1'
  })
</script>
<style scoped>
    div.centralImageLogin{
        width: 80%;
        margin: 2em auto 2em auto;
    }
    img#login{
        width: 100px;
    }
    @media screen and (max-width: 851px) {
        div.centralImageLogin{
            width: 80%;
            margin: 0.5em auto 0.5em auto;
        }
        img#login{
            width: 80px;
        } 
    }
</style>
