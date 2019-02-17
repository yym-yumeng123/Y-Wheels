---
title: Tabs 标签页
---

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。


<ClientOnly>
<y-tabs></y-tabs>
</ClientOnly>


#### 代码展示

```html
<h3>基础用法</h3>
<y-tabs :selected="selected">
    <y-tabs-head>
        <y-tabs-item name="sports">运动</y-tabs-item>
        <y-tabs-item name="food">食物</y-tabs-item>
        <y-tabs-item name="shift">衣服</y-tabs-item>
        <y-tabs-item name="shoes">鞋子</y-tabs-item>
    </y-tabs-head>
    <y-tabs-body>
        <y-tabs-pane name="sports">运动系列的内容</y-tabs-pane>
        <y-tabs-pane name="food">食物系列的内容</y-tabs-pane>
        <y-tabs-pane name="shift">衣服系列的内容</y-tabs-pane>
        <y-tabs-pane name="shoes">鞋子系列的内容</y-tabs-pane>
    </y-tabs-body>
</y-tabs>
```

```html
<h3>选项卡不可点击</h3>
<y-tabs :selected="selected">
    <y-tabs-head>
        <y-tabs-item name="sports" disabled>运动</y-tabs-item>
        <y-tabs-item name="food">食物</y-tabs-item>
        <y-tabs-item name="shift">衣服</y-tabs-item>
        <y-tabs-item name="shoes">鞋子</y-tabs-item>
    </y-tabs-head>
    <y-tabs-body>
        <y-tabs-pane name="sports">运动系列的内容</y-tabs-pane>
        <y-tabs-pane name="food">食物系列的内容</y-tabs-pane>
        <y-tabs-pane name="shift">衣服系列的内容</y-tabs-pane>
        <y-tabs-pane name="shoes">鞋子系列的内容</y-tabs-pane>
    </y-tabs-body>
</y-tabs>
```
```js{5}
<script>
    export default {
        data () {
            return {
                selected: 'sports'
            }
        }
    }
</script>
```