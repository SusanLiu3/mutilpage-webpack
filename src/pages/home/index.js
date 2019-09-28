
import Vue from 'vue'
import Index from './index.vue'


console.log('哈哈',Index)
new Vue({
    el:'#app',
    components:{
        'index':Index
    },
    render:function(h){
        return h(Index)
    }
})