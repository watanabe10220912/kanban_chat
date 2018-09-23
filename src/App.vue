<template>
<div>
<h1>
    Hello Vue!
</h1>
<HelloWorld>
</HelloWorld>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
    name:'app',
    components:{
        HelloWorld
    }
}
</script>
