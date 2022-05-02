<template>
  <div class="background"> 
    <button>운동의 부족</button>
    <div class="black-bg" v-if="modalClick==true" @click="modalClick=false">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>내용</p>
      </div>
    </div>
    
    <div class="navigationbar">
      <a v-for="(nb,i) in navigation" :key="i" @click="modalClick=true">{{navigation[i]}}</a>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>



export default {
  name: 'App',
  
  data(){
    return{
      navigation : ['Home', 'Community', 'Gym Rent', 'Matching'],
      dis : 20,
      modalClick : false,
    }
  },
  components: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin : 0;
  padding: 0;
  box-sizing: border-box;
}

.background {
  background: lightcyan;
  height: 100vh;
  overflow: auto;
}

button {
  color: black;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  transition: auto;
  display: flex;
}

.navigationbar {
  background : rgb(20, 20, 207);
  padding: 1.5%;
  border : 1px solid;
  border-radius: 10px;
  /*margin-right: 5%;*/
  overflow: auto;
}

.navigationbar a { 
  box-sizing: border-box;
  background-color: rgb(80, 173, 235);
  border : 1px solid black;
  border-radius: 5px;
  padding: 1%;
  margin : 1%;
  /* transition : all 0.5s; */
}

.navigationbar a:hover{
  background : blue;
}

.black-bg{
  width : 100%; height : 100%;
  background : rgba(0,0,0,0.5);
  position : fixed; padding : 20px;
}

.white-bg{
  width : 100%; background : white;
  border-radius : 8px;
  padding : 1%;
}

</style>