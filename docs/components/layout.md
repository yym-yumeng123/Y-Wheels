---
title: Layout 布局
---

# 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<y-layout>` 外层容器

`<y-header>` 顶栏容器

`<y-sider>` 侧边栏容器

`<y-content>` 主要区域容器

`<y-footer>` 底栏容器

:::tip
以上组件采用了 `flex` 布局，使用前请确定目标浏览器是否兼容。此外，`<y-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<y-layout>`。
:::


<ClientOnly>
<y-layout></y-layout>
</ClientOnly>


#### 代码展示

```html
<y-layout class="layout">
    <y-header class="header">header</y-header>
    <y-content class="main">content</y-content>
</y-layout>
```
```html
<y-layout class="layout">
    <y-header class="header">header</y-header>
    <y-content class="main">content</y-content>
    <y-footer class="footer">footer</y-footer>
</y-layout>
```
```html
<y-layout>
    <y-header class="header">header</y-header>
    <y-layout>
        <y-sider class="sider">sider</y-sider>
        <y-content class="main">content</y-content>
    </y-layout>
    <y-footer class="footer">footer</y-footer>
</y-layout>
```
```html
<y-layout>
    <y-sider class="sider">sider</y-sider>
    <y-layout>
        <y-header class="header">header</y-header>
        <y-content class="main">content</y-content>
        <y-footer class="footer">footer</y-footer>
    </y-layout>
</y-layout>
```