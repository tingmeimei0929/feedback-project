<template>
    <div class="content">
        <el-steps :active="active" align-center finish-status="success">
            <el-step title="步骤1" description=""></el-step>
            <el-step title="订阅问题" description=""></el-step>
            <el-step title="账号修改问题" description=""></el-step>
        </el-steps>
        <div class="reveal">
            <div v-if="active==1" class="step active1">
                <h2 v-if="user">欢迎{{ suername }}登录FT中文网！</h2>
                <h2 v-if="!user">请<a href="">点击此处</a>登录</h2>
            </div>
            <div v-if="active==2" class="step">
                <div class="stencil">
                    <h2>如何阅读FT中文网付费产品？</h2>
                    <h3>在任何设备上，您都可以通过点击付费文章，找到订阅入口。同时，您也可以通过以下方式订阅：</h3>
                    <ol class="list-style-decimal">
                        <li>在iOS APP内，点击底部导航栏“我的FT” - 顶部“会员订阅”一栏，找到订阅入口。</li>
                        <li>在安卓APP内，点击右下角“设置” - “会员中心”，找到订阅入口。</li>
                        <li>在PC网页端，您可以打开FT中文网（ftchinese.com），点击顶部导航栏“工具” - “会员中心”，找到订阅入口。</li>
                        <li>在移动网页端，您可以打开FT中文网（ftchinese.com），点击左上角的图标，在弹出的做侧边栏中，点击“会员中心”，找到订阅入口。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>是否有针对机构订阅的服务？</h2>
                    <ol class="list-style-none">
                        <li>请发送邮件至<span>subscriber.service@ftchinese.com</span></li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如果我没有登录FT中文网，就在iOS设备上购买了订阅服务，如何跨平台阅读所购内容？</h2>
                    <ol class="list-style-none">
                        <li>请发送订阅截图、iOS账号、FT中文网注册邮箱和您的联系方式至<span>subscriber.service@ftchinese.com</span>，我们的客服人员会尽快和您绑定苹果账号和FT中文网账号，实现跨平台阅读。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>标准会员与高端会员的区别？</h2>
                    <ol class="list-style-decimal">
                        <li>标准会员权益：精选深度分析；中英双语内容；金融英语速读训练；英语原声电台；无限浏览7日前所有历史文章（近8万篇）</li>
                        <li>高端会员权益：享受“标准会员”所有权益；编辑精选，总编/各版块主编每周五为您推荐本周必读资讯，分享他们的思考与观点；FT中文网年度论坛门票2张，价值3999元/张 （不含差旅与食宿）</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如何升级我的会员服务？</h2>
                    <ol class="list-style-none">
                        <li>对于已经是FT中文网标准会员的读者，可以进入“会员订阅”（iOS APP）或“会员中心”（网页端和安卓APP）页面，直接点击订阅“FT中文网高端会员”，系统会根据您的使用时间，自动计算出差价，在您支付剩余款项后，为您升级会员权益。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如何降级我的会员服务？</h2>
                    <ol class="list-style-none">
                        <li>很抱歉。目前我们不支持降级会员服务。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我可以退订并退款吗？</h2>
                    <ol class="list-style-none">
                        <li>本产品未虚拟内容服务，一经订阅概不退款，请您理解。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我的会员服务从何时开始计费？</h2>
                    <ol class="list-style-none">
                        <li>在您确定订阅并付款后，我们的服务和计费即日生效。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>在哪里可以查阅我的订阅的内容？</h2>
                    <ol class="list-style-none">
                        <li>在FT中文网的产品首页，您可以查阅当天的付费内容。如果需要查阅全部内容，进入顶部导航栏“独家”和“编辑精选”板块，独享付费用户专属内容。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>会员订阅内容何时发布？</h2>
                    <ol class="list-style-none">
                        <li>FT中文网每个工作日更新，为您奉上高质量的商业财经资讯。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>会员订阅内容是否支持离线阅读？</h2>
                    <ol class="list-style-decimal">
                        <li>iOS APP在Wi-Fi坏境下，会为您自动缓存首页文章，方便离线阅读。</li>
                        <li>安卓 APP可以点击首页上方的“下载”按钮，缓存最近一个更新日的全部文章。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我的会员订阅内容有几种语言切换？</h2>
                    <ol class="list-style-none">
                        <li>您可以选择中（简体/繁體）、英文阅读FT中文网内容。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>FT中文网所有文章都有中、英文对照吗？</h2>
                    <ol class="list-style-none">
                        <li>FT中文网部分内容未中文原创文章。没有对应的英文。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我听到的音频，是机器还是人声阅读？</h2>
                    <ol class="list-style-none">
                        <li>您可以在“每日英语”板块内，找到纯正人声阅读的英国《金融时报》文章和电台内容。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如果我已经订阅了英国《金融时报》或FT.com，是否可以免费获得FT中文网标准会员或高端会员权益？</h2>
                    <ol class="list-style-none">
                        <li>抱歉，我们暂不能为您提供此项服务。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我的订阅何时到期？</h2>
                    <ol class="list-style-decimal">
                        <li>在iOS APP内，您可以点击底部导航栏“我的FT” - 顶部“会员订阅” 一栏，找到订阅到期日。</li>
                        <li>在安卓APP内，您可以点击右下角“设置” - “会员中心”，找到订阅到期日。</li>
                        <li>在电脑网页端，您可以打开FT中文网（ftchinese.com），点击导航栏“工具” - “会员中心”，找到订阅到期日。</li>
                        <li>在移动网页端，您可以打开FT中文网（ftchinese.com），点击左上角的图标，在弹出的左侧栏中，点击“会员中心”，找到订阅到期日。</li>
                    </ol>
                </div>
            </div>
            <div v-if="active==3" class="step">
                <div class="stencil">
                    <h2>如何修改我的登录密码？</h2>
                    <ol class="list-style-none">
                        <li>您可以在网页端打开网页<a href="http://user.ftchinese.com/setting">http://user.ftchinese.com/setting</a>，修改您的密码。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我应该使用哪个邮箱，作为FT中文网付费产品账户？</h2>
                    <ol class="list-style-none">
                        <li>我们建议您使用常用邮箱，注册并订购FT中文网会员服务，便于接收邮件、找回密码等。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我可以将登录邮箱和密码分享给他人吗？</h2>
                    <ol class="list-style-none">
                        <li>根据用户协议，付费账号仅限本人使用。我们建议您妥善保管自己的账号和密码，避免财产遭受损失。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我可以修改注册邮箱吗？</h2>
                    <ol class="list-style-none">
                        <li>您可以在网页端打开<a href="http://user.ftchinese.com/setting">http://user.ftchinese.com/setting</a>，修改您的注册邮箱。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>是否支持跨平台登录？</h2>
                    <ol class="list-style-none">
                        <li>支持。使用FT中文网注册账户登录，您就能在不同平台上畅读FT中文网付费内容。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>我可以调整阅读字号吗？</h2>
                    <ol class="list-style-decimal">
                        <li>在iOS APP内，您可以在底部“我的FT”一栏中，选择“字号设置”，调整字号大小。</li>
                        <li>在安卓APP内，您可以在底部“设置”中，调整字号大小。</li>
                        <li>在网页端，您需要通过设置您的浏览器，调整字号大小。</li>
                    </ol>
                </div>
                <div class="stencil">
                    <h2>如何联系客服</h2>
                    <ol class="list-style-none">
                        <li>您可以通过邮箱<span>subscriber.service@ftchinese.com</span>,联系我们的客服人员。</li>
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
    name: "Purchase",
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