---
title: Toast 消息弹出
---


<ClientOnly>
<y-toast></y-toast>
</ClientOnly>


#### 代码展示

```html
<h3>基础用法</h3>
<y-button @click="showToastTop">上方弹出</y-button>
<y-button @click="showToastMiddle">中间弹出</y-button>
<y-button @click="showToastBottom">下方弹出</y-button>

<h3>设置弹出时间</h3>
<y-button @click="onClickTime">autoClose 1s</y-button>

<h3>设置关闭按钮</h3>
<y-button @click="onClickToast">closeButton</y-button>

<h3>使用 HTML 片段 </h3>
<y-button @click="onClickHtml">enableHtml</y-button>
```

```js
<script>
export default {
    components: {
        YButton
    },
    methods: {
        showToastTop() {
            this.$toast('top')
        },
        showToastMiddle() {
            this.$toast('middle', {
                position:'middle'
            })
        },
        showToastBottom() {
            this.$toast('bottom', {
                position:'bottom'
            })
        },
        onClickTime () {
            this.$toast('我设置了时间关闭', {
                autoClose : 1
            })
        },
        onClickToast () {
            this.$toast('今天是个好日子', {
                closeButton: {
                    text: '是的',
                    callback: () => {
                        console.log('天气真好')
                    }
                }
            })
        },
        onClickHtml () {
            this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                enableHtml: true
            })
        }
    }
}
</script>
```