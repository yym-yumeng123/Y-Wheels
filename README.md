# Y-Wheels  - 一个个人Vue UI组件

[![Build Status](https://travis-ci.org/yym-yumeng123/Y-Wheels.svg?branch=master)](https://travis-ci.org/yym-yumeng123/Y-Wheels)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架, 希望对你有用

### 安装

#### npm 安装

推荐使用 `npm` 的方式安装，它能更好地和 `webpack` 打包工具配合使用。

```
npm i ymwheels
```

### 开始使用

1. 添加 `css` 样式

使用本框架前, 请在 `css` 中开启 `border-box`
```
*, *::after, *::before{box-sizing: border-box;}
```

2. 引入 `ymwheels`
```
import {YButton,YButtonGroup,YIcon} from 'ymwheels'  // 引入 组件
import 'ymwheels/dist/ymwheels.css'  // 引入样式

export default {
    name: 'app',
    components: {  // 注册组件
        YButton,
        YButtonGroup,
        YIcon
    }
}
```

3. 使用
```
<tempalte>
    <div>
        <y-button>按钮</y-button>
    </div>
</template>
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

