<template>
    <div class ="big-box">
        <commbar/>
        <div class="mini-box">
            <div v-for="(lb,i) in list" :key="i" @click="modalClick = !modalClick; list[i].visit++">
                <preview :list="list" :i="i"/>
            </div>
        </div>
    </div>
</template>

<script>
// C:\Users\USER\Documents\학교\캡스톤
import list from '/Users/USER/My Documents/학교/캡스톤/comm/src/assets/list';
import preview from './Preview.vue';
import commbar from './Commbar.vue';

export default {
    name: 'CommunityPage',

    data(){
        return{
            list : list,
        }
    },
    components: {
        commbar,
        preview,
    },
}

</script>

<style>
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

</style>