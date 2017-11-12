<template>
  <div class="miniprogram" style="z-index:999">
    <el-form ref="form" :model="form" label-position="left" label-width="100px">
      <el-form-item label="小程序转换:">
        <el-radio v-model="form.type" label="w2a">微信转支付宝</el-radio>
      </el-form-item>
      <el-form-item label="项目路径:">
        <el-input v-model="form.src" >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="transform">转换</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {Form, FormItem, Input, Radio} from 'element-ui'

export default {
  data () {
    return {
      form: {
        type: 'w2a',
        src: '/Volumes/ext/weixin/aaa/'
      }
    }
  },
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-radio': Radio
  },
  methods: {
    transform () {
      alert(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.miniprogram {
  width:600px;
  height:500px;
  position: absolute;
  left: 50%;
  margin-left: -300px;
  top: 50%;
  margin-top: -250px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
