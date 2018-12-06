# Y-Wheels  - 一个个人Vue UI组件

[![Build Status](https://travis-ci.org/yym-yumeng123/Y-Wheels.svg?branch=master)](https://travis-ci.org/yym-yumeng123/Y-Wheels)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架, 希望对你有用

## 开始使用

1. 添加 `css` 样式
    使用本框架前, 请在 `css` 中开启 `border-box`
    ```
        *, *::after, *::before{box-sizing: border-box;}
    ```
    你还需要设置默认默认颜色等变量 (后续改为 scss 变量)
    ```
        // 兼容性: IE15 及以上浏览器支持, chrome & firefox 支持
        :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
2. 安装 `vue-element-ym`
    ```
        npm install --save vue-element-ym
    ```

3. 引入 `vue-element-ym`
    ```
        import { Button, ButtonGroup, Icon} from vue-element-ym'
        import 'vue-element-ym/dist/index.css'

        export default {
            name: 'app',
            components: {
                'g-button': Button,
                'g-icon': Icon
            }
        }
    ```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

