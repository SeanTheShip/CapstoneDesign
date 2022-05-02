<template>
    <nav>
        <Dropdown title="유형" :items="Types"/>
        <Dropdown title="필터" :items="Filters"/>
        <Dropdown title="정렬" :items="Sort" />
    </nav>
</template>

<script>
import Dropdown from './dropdown.vue';

export default {
    
    name: 'the-commbar',
    components: { 
        Dropdown,
    },

    data () {
        return {
            Types: [
                {
                    title: '일반',
                    link: '#'
                },
                {
                    title: '정보',
                    link: '#'
                },
                {
                    title: '매칭',
                    link: '#'
                },
                {
                    title: '리뷰',
                    link: '#'
                }
            ],
            Filters: [
                {
                    title: '종목',
                    // sport list
                    link: '#'
                },
                {
                    title: '지역',
                    // region list
                    link: '#'
                }
            ],
            Sort: [
                {
                    title: '인기순',
                    link: '#'
                },
                {
                    title: '등록순',
                    link: '#'
                },
                {
                    title: '댓글순',
                    link: '#'
                }
            ],
        }
    }
}
</script>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(116, 112, 112);
    }
    nav .menu-item {
        color: white;
        padding: 10px 20px;
        position: relative;
        text-align: center;
        border-bottom: 3px solid transparent;
        display: flex;
        transition: 0.4s;
    }
    nav .menu-item.active,
    nav .menu-item:hover {
        background-color: #444;
        border-bottom-color: red;
    }
    nav .menu-item a {
        color: inherit;
        text-decoration: none;
    }
</style>