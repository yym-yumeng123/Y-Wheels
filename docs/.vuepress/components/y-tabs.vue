<template>
    <div>
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

        <h3>选项卡不可点击</h3>
        <p><code>disabled</code> 属性可以设置某项不可点击</p>
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
    </div>
</template>

<script>
import YTabs from "../../../src/tabs/tabs";
import YTabsHead from "../../../src/tabs/tabs-head";
import YTabsItem from "../../../src/tabs/tabs-item";
import YTabsBody from "../../../src/tabs/tabs-body";
import YTabsPane from "../../../src/tabs/tabs-pane";
export default {
    components: {
        YTabs,YTabsHead,YTabsItem,YTabsBody,YTabsPane
    },
    data () {
        return {
            selected: 'sports'
        }
    }
}
</script>

