<template>
    <div>
        <h2>
            sub modules
        </h2>
        <h2>
            {{message}}
        </h2>
    </div>
</template>
<script>
export default {
    name:'HelloWorld',
    data(){
        return {
            message:'this is subcomponent message'
        }
    }
}
</script>

