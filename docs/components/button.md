---
title: Button 按钮
---

# 按钮

常用的操作按钮。

---

<ClientOnly>
<y-button></y-button>
</ClientOnly>

#### 代码展示

```html
<y-button>普通按钮</y-button>

<y-button icon="download">icon按钮</y-button>
<y-button icon="download" icon-position="right">icon在右</y-button>
<h3>不可点击</h3>
<y-button disabled>不可点击</y-button>

<y-button loading>loading状态</y-button>
<y-button loading disabled>loading状态</y-button>
<y-button icon="settings" :loading="loading1" @click="loading1 = !loading1">
    点击loading
</y-button>

<y-button-group>
    <y-button icon="left">上一页</y-button>
    <y-button>更多</y-button>
    <y-button icon="right" icon-position="right" @click="xx">下一页</y-button>
</y-button-group>

```
``` js
<script>
    export defalut {
        data () {
            return {
                loading1: false,
            }
        }
    }
</script>
```

---

### Button属性

| 参数 | 说明 | 类型 | 可选值 | 默认值
| ------ | ------ | ------ | ------ | ------ |
| icon | 添加图标 | String | --- | --- |
| iconPosition | 图标在左或者在右 | String | left / right | left |
| disabled | 不可点击 | Boolean| --- | false |
| loading | 是否加载中状态 | Boolean | --- | false |

