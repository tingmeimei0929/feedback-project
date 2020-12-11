<template>
    <div class="content">
        <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="message-form">
            <el-form-item label="用户信息" prop="username">
                <el-input v-model="ruleForm.username" class="enterDesc"></el-input>
            </el-form-item>
            <el-form-item label="商户订单号" prop="singleNumber">
                <el-input v-model="ruleForm.singleNumber" class="enterDesc" placeholder="请输入您的商户订单号"></el-input>
                <small class="prompt">如果您使用支付宝支付，请打开手机支付宝，点击“我的” - “订单”，找到商户订单号(FT开头)，并将商户订单号和您的手机号发送至客服邮箱。</small>
                <small class="prompt">如果您使用微信支付，请打开手机微信，在信息流中点击“微信支付” - 找到并点击订购FT中文网的订单，找到商户单号，将商户单号和您的手机号发送至客服邮箱。</small>
            </el-form-item>
            <el-form-item label="联系方式" prop="contactInfo">
                <el-input v-model="ruleForm.contactInfo" class="enterDesc" placeholder="请输入您的联系方式"></el-input>
            </el-form-item>
            <el-form-item label="留言" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc" class="enterDesc"></el-input>
            </el-form-item>
            <el-form-item label="上传" prop="fileList">
                <el-upload  class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click="onSubmit" style="margin-left:100px;">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <!-- <div class="customerService">
            <h3>客服联系方式</h3>
            <p>邮箱：subscriber.service@ftchinese.com</p>
            <p>电话：010-xxxxxxxx</p>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            ruleForm: {
                username: '',
                singleNumber: '',
                contactInfo: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                //如果通过校验开始登录
                if (valid) {
                    this.axios.post('', {
                        userName: this.ruleForm.username,
                    }).then(res => {
                        alert("登录成功")
                    }).catch(err => {
                        alert("登录失败")
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>