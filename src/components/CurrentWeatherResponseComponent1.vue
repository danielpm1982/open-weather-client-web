<template>
    <div>
        <div class="centralImageWeatherResponse">
            <img id="weatherResponse" alt="weather-response-image" src="../assets/weather.png" />
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'CurrentWeatherResponseComponent1',
    })
</script>
<style scoped>
    div.centralImageWeatherResponse{
        width: 30%;
        margin: 1em auto 2em auto;
    }
    img#weatherResponse{
        width: 120px;
    }
    @media screen and (max-width: 851px) {
        div.centralImageWeatherResponse{
            width: 50%;
            margin: 0.5em auto 0em auto;
        }
        img#weatherResponse{
            width: 70px;
        }
    }
</style>
