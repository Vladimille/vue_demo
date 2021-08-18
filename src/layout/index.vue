<template>
    <div class="app-wrapper">
        <Header :header_text="'网页头部'"></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../views/head.vue'
import Main from '../views/main.vue'
import Footer from '../views/foot.vue'
export default {
    name: 'Layout',
    components: {
        Header,
        Main,
        Footer
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.app-wrapper{
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
</style>