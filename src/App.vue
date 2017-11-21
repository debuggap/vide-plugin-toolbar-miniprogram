<template>
  <div class="miniprogram" style="z-index:999">
    <el-form ref="form" :model="form" label-position="left" label-width="100px">
      <el-form-item label="小程序转换:">
        <el-radio v-model="form.type" label="w2a">微信转支付宝</el-radio>
      </el-form-item>
      <el-form-item label="项目路径:">
        <el-input v-model="form.src" >
      </el-form-item>
      <el-form-item label="转换日志:">
        <div class="transform-logs">
          <h3 v-if="form.dist">输出项目路径：{{form.dist}}</h3>
          <div v-for="log in logs">
            <div>{{log.file}}<span v-if="log.row">:{{log.row}}:{{log.column}}</span></div>
            <div class="tips" v-if="log.type === 'tips'">{{log.message}}</div>
            <div class="error" v-else-if="log.type === 'error'">{{log.message}}</div>
            <div v-else>
              <div class="before">- {{log.before}}</div>
              <div class="after">+ {{log.after}}</div>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="cancel">取消</el-button>
        <el-button class="transform-btn" type="primary" @click="transform">转换</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
let transformMiniprogram = require('transform-miniprogram')
import {Form, FormItem, Input, Radio} from 'element-ui'

export default {
  props: ['callback'],
  data () {
    return {
      form: {
        type: 'w2a',
        src: '',
        dist: ''
      },
      logs: null
    }
  },
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-radio': Radio
  },
  methods: {
    cancel () {
      this.callback()
    },
    transform () {
      transformMiniprogram(this.form, (err, logs) => {
        if (err) {
          alert(err.message)
        } else {
          console.log(logs)
          this.logs = logs
        }
      })
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
  
  .transform-logs{
    height:300px;
    background-color: #272822;
    overflow:auto;
  }
  
  .tips{
    color:#eb9e05;
  }
  
  .error{
    color:rgb(181,0,0);
  }
  
  .before{
    color:rgb(181,0,0);
  }
  
  .after{
    color:rgb(22,165,4);
  }
  
  .transform-btn {
    float:right
  }
}
</style>
