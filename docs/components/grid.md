---
title: Grid 网格系统
---

# 网格系统

通过基础的 24 分栏，迅速简便地创建布局。
<br>
<br>


<ClientOnly>
<y-grid></y-grid>
</ClientOnly>


#### 代码展示

```html
<h3>基础布局</h3>
<y-row class="demo-row">
    <y-col span="24" class="demo-col"></y-col>
</y-row>
<y-row class="demo-row">
    <y-col span="12" class="demo-col"></y-col>
    <y-col span="12" class="demo-col-light"></y-col>
</y-row>
<y-row class="demo-row">
    <y-col span="8" class="demo-col"></y-col>
    <y-col span="8" class="demo-col-light"></y-col>
    <y-col span="8" class="demo-col"></y-col>
</y-row>
<y-row class="demo-row">
    <y-col span="6" class="demo-col"></y-col>
    <y-col span="6" class="demo-col-light"></y-col>
    <y-col span="6" class="demo-col"></y-col>
    <y-col span="6" class="demo-col-light"></y-col>
</y-row>
<y-row class="demo-row">
    <y-col span="4" class="demo-col"></y-col>
    <y-col span="4" class="demo-col-light"></y-col>
    <y-col span="4" class="demo-col"></y-col>
    <y-col span="4" class="demo-col-light"></y-col>
    <y-col span="4" class="demo-col"></y-col>
    <y-col span="4" class="demo-col-light"></y-col>
</y-row>
```

```html
<h3>设置 gutter</h3>
<y-row class="demo-row" gutter="20">
    <y-col span="8">
        <div class="demo-col">8</div>
    </y-col>
    <y-col span="8">
        <div class="demo-col-light">8</div>
    </y-col>
    <y-col span="8">
        <div class="demo-col">8</div>
    </y-col>
</y-row>
<y-row class="demo-row" gutter="20">
    <y-col span="6">
        <div class="demo-col">6</div>
    </y-col>
    <y-col span="6">
        <div class="demo-col-light">6</div>
    </y-col>
    <y-col span="6">
        <div class="demo-col">6</div>
    </y-col>
    <y-col span="6">
        <div class="demo-col-light">6</div>
    </y-col>
</y-row>

```

```html
<h3>设置 offset</h3>
<y-row class="demo-row" gutter="20">
    <y-col span="8">
        <div class="demo-col">8</div>
    </y-col>
    <y-col span="8" offset="8">
        <div class="demo-col-light">offset 8 & gutter 20</div>
    </y-col>
</y-row>
<y-row class="demo-row">
    <y-col span="8">
        <div class="demo-col">8</div>
    </y-col>
    <y-col span="8" offset="8">
        <div class="demo-col-light">offset 8</div>
    </y-col>
</y-row>
<y-row class="demo-row">
    <y-col span="6" offset="6">
        <div class="demo-col">6</div>
    </y-col>
    <y-col span="6" offset="6">
        <div class="demo-col-light">offset 6</div>
    </y-col>
</y-row>
<y-row class="demo-row">
    <y-col span="2" offset="6">
        <div class="demo-col">2</div>
    </y-col>
    <y-col span="2" offset="6">
        <div class="demo-col-light">2</div>
    </y-col>
    <y-col span="2" offset="6">
        <div class="demo-col">2</div>
    </y-col>
</y-row>
```
```html
<h3>对齐方式</h3>
<y-row class="demo-row" gutter="10">
    <y-col span="6">
        <div class="demo-col">6</div>
    </y-col>
    <y-col span="6">
        <div class="demo-col-light">6</div>
    </y-col>
    <y-col span="6">
        <div class="demo-col">6</div>
    </y-col>
</y-row>
<y-row class="demo-row" gutter="10" align="center">
    <y-col span="6">
        <div class="demo-col">6</div>
    </y-col>
    <y-col span="6">
        <div class="demo-col-light">6</div>
    </y-col>
    <y-col span="6">
        <div class="demo-col">6</div>
    </y-col>
</y-row>
<y-row class="demo-row" align="center">
    <y-col span="6" class="demo-col"></y-col>
    <y-col span="6" class="demo-col-light"></y-col>
    <y-col span="6" class="demo-col"></y-col>
</y-row>
<y-row class="demo-row" align="right">
    <y-col span="6" class="demo-col"></y-col>
    <y-col span="6" class="demo-col-light"></y-col>
    <y-col span="6" class="demo-col"></y-col>
</y-row>
```

```css
* {
    box-sizing: border-box;
}
.demo-row {
    margin-top: 20px;
}
.demo-col, .demo-col-light {
    height: 36px;
    border-radius: 4px;
    text-align: center;
    line-height: 36px;
}
.demo-col {
    background: #409EFF;
}
.demo-col-light {
    background: #72B0F1;
}
```