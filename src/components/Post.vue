<template>
    <div class ="big-box">
        <div class="mini-box">
            <div class="title"> {{list[0].title}} </div>
            <h6 class="author"> {{list[0].types}} | {{list[0].id}} </h6>
            <div class="content">
                <button class="edit">수정</button>
                <button class="delete">삭제</button>
                <body> {{list[0].content}} </body>
            </div>
            <div class="mini-box">
            <!-- <div class="mini-box" v-for="(c,i) in comment" :key="i"> -->
                <div class="name"> 작성자 | 내용 </div>
                
            </div>

        </div>
    </div>
</template>

<script>
import list from '/Users/USER/My Documents/학교/캡스톤/comm/src/assets/list';

export default {
    name: 'The-Post',
    data(){
        return{
            list : list,
            //comment,
        }
    },
}
</script>

<style>
.title{
    box-sizing: border-box;
    border: 1px solid black;
    background: white;
    border-radius: 20px;
    margin: 2%;
    margin-bottom: 0%;
}
h6{
    margin-right: 3%;
    float: right;
    text-align: right;
}
.content{
    box-sizing: border-box;
    margin-top : 2%;
    width : 90%;
    padding : auto;
    border-radius: 5px;
    margin-left: 5%;
    border : 1px solid;
    overflow: hidden;
    float: left;
}

body{
    margin: 10px;
    margin-top: 5%;
    text-align: left;
}

button.edit{
    float: right;
    padding: 1px;
    margin: 2px;
}
button.delete{
    float: right;
    padding: 1px;
    margin: 2px;
}
.name{
    text-align: left;
    margin-left: 1%;
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
    float: left;
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