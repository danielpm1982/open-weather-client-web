<template>
    <div class="centralImageOpenWeather">
        <img id="openWeather" alt="open-weather-image" src="../assets/openWeather.png" />
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'CurrentWeatherComponent1',
  })
</script>
<style scoped>
    div.centralImageOpenWeather{
        width: 80%;
        margin: 0.5em auto 0em auto;
    }
    img#openWeather{
      width: 300px;
    }
    @media screen and (max-width: 851px) {
      div.centralImageOpenWeather{
        width: 90%;
        margin: -0.5em auto -1em auto;
      }
      img#openWeather{
        width: 170px;
      }
    }
</style>
