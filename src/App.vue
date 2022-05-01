<template>
  <div class="background"> 
    
    <div class="black-bg" v-if="modalClick==true" @click="modalClick=false">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>내용</p>
      </div>
    
    </div>
    
    <div class="navigationbar">
      <a v-for="(nb,i) in navigation" :key="i" @click="modalClick=true">{{navigation[i]}}</a>
    </div>
  
    <div class ="big-box">
      <thebar/>
      <div class="mini-box">
        <div v-for="(lb,i) in listbox" :key="i">
          <div class="list-box">
            <h6>
              {{listbox[i].id}} | {{listbox[i].types}} | {{listbox[i].title}} | {{listbox[i].sport}} | {{listbox[i].region}} | {{listbox[i].date}} | 조회수 : {{listbox[i].visit}} | 댓글수 : {{listbox[i].comment}} 
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import list from './assets/list.js';
import Thebar from './components/Commbar.vue';

export default {
  name: 'App',
  
  data(){
    return{
      navigation : ['Home', 'Community', 'Gym Rent', 'Matching'],
      listbox : list,
      dis : 20,
      modalClick : false,
    }
  },

  components: {
    Thebar,
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
  background: #eee;
  height: 100vh;
  overflow: auto;
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
  border : 1px solid;
  border-radius: 5px;
  color:  white;
  padding: 1%;
  margin : 1%;
  /* transition : all 0.5s; */
}
.navigationbar a:hover{
  background : blue;
}

.list-box {
  border: 1px solid black;
  background: white;
  border-radius: 20px;
  margin: 2%;
}

h6 {
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  width: 90%;
}

.mini-box {
  box-sizing: border-box;
  background : ivory;
  margin-top : 5%;
  width : 90%;
  padding : auto;
  border-radius: 5px;
  margin-left: 5%;
  border : 1px solid;
  overflow: hidden;
  float:left
}

.big-box {
  box-sizing: border-box;
  background: rgb(231, 231, 214);
  margin-top: 5%;
  width : 90%;
  height: 80vh;
  padding : 10px;
  margin-left : 5%;
  border : 1px solid;
  overflow: hidden;
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
