<template>
    <div class="content">
        <el-steps :active="active" align-center finish-status="success" >
            <el-step title="步骤1" description=""></el-step>
            <el-step title="步骤2" description=""></el-step>
            <el-step title="步骤3" description=""></el-step>
        </el-steps>
        <div class="reveal">
            <div v-if="active==1" class="step active1">
                <h2 v-if="user">欢迎{{ suername }}登录FT中文网！</h2>
                <h2 v-if="!user">请<a href="">点击此处</a>登录</h2>
            </div>
            <div v-if="active==2" class="step">
                <div class="stencil">
                    <h2>如果我是注册用户，如何解锁付费内容？</h2>
                    <ol class="list-style-decimal">
                        <li>您需要成为我们的付费会员，即标准会员或高端会员，才能阅读付费内容。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如何支付会员费？</h2>
                    <ol class="list-style-decimal">
                        <li>在iOS APP，请根据苹果系统引导，在程序内完成支付</li>
                        <li>在网页端或安卓APP内，可使用微信支付宝完成支付</li>
                        <li>请<a href="https://www.ftacademy.cn/subscription.html">点击此处</a>查看会员订阅方式</li>
                    </ol>
                </div>
            </div>
            <div v-if="active==3" class="step">
                <div class="stencil">
                    <h2>我已经支付了款项，但是仍然无法阅读付费文章？</h2>
                    <h3>您可以进行如下尝试：</h3>
                    <ol class="list-style-decimal">
                        <li>关闭FT中文网APP，在重新打开。</li>
                        <li>退出您的FT账号，再重新登录。</li>
                        <li>检查您目前使用的账号，是否和您购买使用的账号一致。</li>
                    </ol>
                    <ol class="list-style-desc">
                        <li>如果上述方式不能解决您的问题，请您按一下步骤，将所需信息发送至<span>subscriber.service@ftchinese.com</span>，我们的客服人员将会尽快协助您解决问题</li>
                        <li>在iOS APP内，请点击下方“我的FT”- 顶部 “我的会员订阅”，截屏您的订阅状态，将图片和您的联系方式发送至客服邮箱。</li>
                        <li>在网页端或安卓APP内，</li>
                        <li>如果您使用支付宝支付，请打开手机支付宝，点击“我的” - “订单”，找到商户订单号(FT开头)，并将商户订单号和您的手机号发送至客服邮箱。</li>
                        <li>如果您使用微信支付，请打开手机微信，在信息流中点击“微信支付” - 找到并点击订购FT中文网的订单，找到商户单号，将商户单号和您的手机号发送至客服邮箱。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>服务到期后，如何续订FT中文网会员服务？</h2>
                    <ol class="list-style-decimal">
                        <li>在iOS APP内订购的FT中文网付费会员服务，如果在权益到期前未取消订阅，苹果中国将会为您自动续订。</li>
                        <li>在网页端或安卓APP内订购的FT中文网付费会员服务，需要您在权益到期后，在“会员中心”手动续订会员服务。</li>
                        <li>在安卓APP内，点击右下角“设置” - “会员中心”，找到订阅入口。</li>
                        <li>在网页端，您可以打开FT中文网（ftchinese.com）， 点击导航栏“工具” - “会员中心”，找到订阅入口。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如何查看我的订单信息？</h2>
                    <ol class="list-style-decimal">
                        <li>如果您是在iOS APP内买的FT中文网付费会员服务，请在您的苹果账号绑定的邮箱里，查收由苹果中国为您提供的订单信息。</li>
                        <li>在安卓APP内，您可以点击右下角“设置” - “会员中心”，查看您的订单信息。</li>
                        <li>在电脑网页端，您可以打开FT中文网（ftchinese.com）， 点击导航栏“工具” - “会员中心”，查看您的订单信息。</li>
                        <li>在移动网页端，您可以打开FT中文网（ftchinese.com），点击左上角的图标，在弹出的左侧边栏中，点击“会员中心”，查看您的订单信息。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如何获得发票？</h2>
                    <ol class="list-style-decimal">
                        <li>如果您在iOS APP内购买FT中文网会员，苹果中国将为您提供对应订单的收据。请在完成购买后，注意查收您苹果账号绑定的邮箱，获取电子收据（特别提示：非增值税发票）。</li>
                        <li>如果您在网页端或安卓APP内购买FT中文网会员，请发送您的FT中文网注册邮箱、发票抬头、公司税号和手机号码（用于接收电子发票提取短信），致subscriber.service@ftchinese.com，我们的客服人员会尽快为您开具电子发票。</li>
                    </ol>
                </div>
            </div>
            <div class="btn">
                <el-button @click="pre" v-if="active>1" class="pre">上一步</el-button>
                <el-button @click="next" v-if="active<3">下一步</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NoPurchase",
    data() {
        return {
            active: 1
        }
    },
    methods: {
        next() {
            if (this.active++ > 2){
                this.active = 1;
            }
        },
        pre() {
            if (this.active-- < 2) {
                this.active = 1;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>