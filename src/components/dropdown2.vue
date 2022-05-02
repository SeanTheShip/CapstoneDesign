<template>
    <div class="container" id="app">
        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dropdown
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li v-for="item in menuItems" key="item" v-bind:class="{'dropdown-submenu': item.children}" ref="dropdown-submenu">
                    <a class="test" tabindex="-1" href="#">{{item.name}}<span class="caret" v-if="item.children"></span></a>
                    <ul class="dropdown-menu" v-if="item.children">
                        <li v-for="child in item.children" :key="child"><a tabindex="-1" href="#" @click="setSelectedItem(child.name)">{{child.name}}</a></li>
                    </ul>
                </li>  
            </ul>
        </div>
    </div>
</template>
    
<script>
var app = new Vue({
    el: '#app',
    data: {
        menuItems: [
        {
            name: 'Item 1',
            children: [{name: 'Subitem 1'},{name: 'Subitem 2'},{name: 'Subitem 3'}]
        },
        {
            name: 'Item 2'
        }
        ],
        selectedDropdown: 'None'
    },
    methods: {
        setSelectedItem(item) {
            this.selectedDropdown = item;
        }
    },
    ready: function() {
        $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
        });    
    }
})
</script>

<style>
    .dropdown-submenu {
    position: relative;
}

.dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -1px;
}
</style>