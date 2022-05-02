// 쓰지는 않았지만 혹시 필요할 수도 있으니
<template>
    <nav class="navigationbar">
        <a v-for="(nb,i) in navigation" :key="i" @click="modalClick=true">{{navigation[i]}}</a>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return{
            navigation : ['Home', 'Community', 'Gym Rent', 'Matching'],
        }
    }
}
</script>

<style>
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
</style>