<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <button @click="testRequest">get Test Request</button>
        {{ testData }}
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { testRequest } from '@api/test';
export default {
    name: 'Home',
    data() {
        return {
            testData: null
        };
    },
    components: {
        HelloWorld
    },
    methods: {
        testRequest() {
            testRequest().then(resolve => {
                this.testData = resolve;
            });
        }
    }
};
</script>
