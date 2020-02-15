<template>
    <div class="home">
        Hello world!
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    name: 'Home',
    components: {
        HelloWorld
    }
};
</script>
<style lang="less">
.home {
    width: 100%;
    height: 100%;
    font-size: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
