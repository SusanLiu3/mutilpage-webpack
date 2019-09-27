

import Vue from 'vue'
import Index from './index.vue'
require('../../css/index.css')
new Vue({
    el:'#app',
    components:{
        'index':Index
    },
    render:function(h){
     return h(Index)   
    }
})