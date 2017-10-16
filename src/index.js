import App from './App.vue'
import path from 'path'
export default ({editor, store, view, packageInfo, baseClass}) => {
  let isCreated = false
  // add item to toolbar
  store.dispatch('toolbar/addItem', {
    name: 'vide-plugin-toolbar-miniprogram',
    desc: 'transform mini program between alipay and wechat',
    key: 'videPluginToolbarMiniprogramItem',
    icon: '',
    func: 'videPluginToolbarMiniprogram:click'
    // longTap: 'videPluginToolbarMiniprogram:longTap'//工具栏按钮支持长按事件
  })
  // return execute class
  return class videPluginToolbarMiniprogram extends baseClass {
    click () {
      if (isCreated) {
        this.$destroy()
        isCreated = false
      } else {
        isCreated = true
        let stylePath = path.join(packageInfo.path, './dist/index.css')
        this.$mount({app: App, stylePath})
      }
    }
    $clean () {
      store.dispatch('toolbar/deleteItem', 'videPluginToolbarMiniprogramItem')
    }
  }
}
