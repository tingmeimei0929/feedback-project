<template>
    <div class="main">
        <navHeader></navHeader>
            <div class="container">
                <div class="sort">
                    <ul class="sortName">
                        <router-link to="/NoPurchase" tag="li">未购买，如何购买</router-link>
                        <router-link to="/Purchase" tag="li">已购买，如何使用</router-link>
                        <router-link to="/Message" tag="li">请上传的您的问题</router-link>
                    </ul>
                </div>
                <div class="main-content">
                    <router-view></router-view>
                </div>
            </div>
        <navFooter></navFooter>
    </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
    name: "Main",
    data() {
        return {

        };
    },
    components: {
        navHeader,
        navFooter
    },
    methods:{
        goNoPurchase() {
            this.$router.push({
                path: '/NoPurchase'
            })
        },
        goPurchase() {
            this.$router.push({
                path: '/Purchase'
            })
        },
        goMessage() {
            this.$router.push({
                path: '/Message'
            })
        }
    }
};
</script>

<style lang="scss" scoped>
@import url('../assets/scss/main.scss');

</style>