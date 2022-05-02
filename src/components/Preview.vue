<template>
    <div class="list-box">
        <h5 class="left">
            {{list[i].id}} | {{list[i].title}}
        </h5>
        <h6 class="right">
            조회수: {{list[i].visit}} | 댓글수: {{list[i].comment}}
        </h6>
    </div>
</template>

<script>
export default {
    name: 'Post-Preview',
    props : {
        list : Array,
        i : Array,
    },
}
</script>

<style>
.list-box {
    border: 1px solid black;
    background: white;
    border-radius: 20px;
    margin: 2%;
}

.left {
    margin-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    width: 90%;
}
.right {
    margin-right: 10px;
    white-space: nowrap;
    text-align: right;
}
</style>