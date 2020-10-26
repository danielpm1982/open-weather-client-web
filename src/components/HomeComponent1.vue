<template>
  <div class="centralImages">
    <div class="imgRow">
      <div class="imgDiv" @click="click('vuejs')">
        <img id="vuejs" alt="vuejs-image" src="../assets/vuejs.png" />
      </div>
      <div class="imgDiv" @click="click('nodejs-npm')">
        <img id="nodejs-npm" alt="nodejs-npm-image" src="../assets/nodejs-npm.png" />
      </div>
      <div class="imgDiv" @click="click('electronjs')">
        <img id="electronjs" alt="electronjs-image" src="../assets/electronjs.png" />
      </div>
      <div class="imgDiv" @click="click('ts')">
        <img id="ts" alt="ts-image" src="../assets/ts.png" />
      </div>
    </div>
    <div class="imgRow2">
      <div class="imgDiv" @click="click('vuejs')">
        <img id="vuejs" alt="vuejs-image" src="../assets/vuejs.png" />
      </div>
      <div class="imgDiv" @click="click('nodejs-npm')">
        <img id="nodejs-npm" alt="nodejs-npm-image" src="../assets/nodejs-npm.png" />
      </div>
    </div>
    <div class="imgRow3">
      <div class="imgDiv" @click="click('electronjs')">
        <img id="electronjs" alt="electronjs-image" src="../assets/electronjs.png" />
      </div>
      <div class="imgDiv" @click="click('ts')">
        <img id="ts" alt="ts-image" src="../assets/ts.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'HomeComponent1',
    methods:{
      click(elementId: string){
        switch(elementId){
          case 'vuejs': this.$router.push('/vuejs'); break;
          case 'nodejs-npm': this.$router.push('/nodejs-npm'); break;
          case 'electronjs': this.$router.push('/electronjs'); break;
          case 'ts': this.$router.push('/ts');
        }
      }
    }
  })
</script>
<style scoped>
  div.centralImages{
    width: 80%;
    margin: 1em auto 2em auto;
    display: table;
  }
  div.imgRow{
    display: table-row;
  }
  div.imgRow2{
    display: none;
  }
  div.imgRow3{
    display: none;
  }
  div.imgDiv{
    display: table-cell;
    margin: 0em 1em 0em 1em;
  }
  div.imgDiv:hover{
    background-color:white;
  }
  img#vuejs, img#nodejs-npm, img#electronjs, img#ts{
    width: 150px;
  }
  img#nodejs-npm{
    width: 190px;
  }
  img#ts{
    padding-left: 0.3em;
  }
  @media screen and (max-width: 851px) {
    div.imgRow{
      display: none;
    }
    div.imgRow2{
      display: table-row;
    }
    div.imgRow3{
      display: table-row;
    }
    div.centralImages{
      width: 80%;
      margin: 0em auto -0.5em auto;
    }
    img#vuejs, img#nodejs-npm, img#electronjs, img#ts{
      width: 80px;
    }
    img#nodejs-npm{
      width: 110px;
    }
  }
</style>
