<template>
    <div>
        <h3>我是Index 页面 </h3>
        <p>{{msg}}</p>
        <detail></detail>
    </div>
</template>
<script>
import Detail from '../components/detail.vue'
export default {
    data(){
        return {
            msg:'hello world'
        }
    },
    components:{
        'detail':Detail
    }
    
}
</script>
<style scoped>

</style>