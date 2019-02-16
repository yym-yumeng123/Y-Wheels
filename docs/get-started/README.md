---
title: 快速上手
---

# 快速上手

### 开始使用

1. 添加 `css` 样式

使用本框架前, 请在 `css` 中开启 `border-box`
```css
*, *::after, *::before{box-sizing: border-box;}
```

2. 引入 `ymwheels`

```js
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

```html
<tempalte>
    <div>
        <y-button>按钮</y-button>
    </div>
</template>
```
