<template>
    <div>
        <h3>基础用法</h3>
        <p>通过<code>position</code> 属性来设置弹出方向<code>left / right / bottom</code></p>
        <hr>
        <y-popover>
            <y-button>上方弹出</y-button>
            <template slot="content">
                看我在上面
            </template>
        </y-popover>
        <y-popover position="bottom">
            <y-button>下方弹出</y-button>
            <template slot="content">
                看我在下面
            </template>
        </y-popover>
        <y-popover position="left">
            <y-button>左边弹出</y-button>
            <template slot="content">
                看我在左边
            </template>
        </y-popover>
        <y-popover position="right">
            <y-button>右边弹出</y-button>
            <template slot="content">
                看我在右边
            </template>
        </y-popover>

        <h3>嵌套操作</h3>
        <y-popover position="right">
            <y-button>弹出Tabs</y-button>
            <template slot="content">
                <y-tabs :selected="sports">
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
            </template>
        </y-popover>

        <h3>触发方式改为hover</h3>
        <y-popover trigger="hover">
            <y-button>上方弹出</y-button>
            <template slot="content">
                弹出内容
            </template>
        </y-popover>
    </div>
</template>

<script>
import YButton from '../../../src/button/button'
import YPopover from '../../../src/popover/popover'

import YTabs from "../../../src/tabs/tabs";
import YTabsHead from "../../../src/tabs/tabs-head";
import YTabsItem from "../../../src/tabs/tabs-item";
import YTabsBody from "../../../src/tabs/tabs-body";
import YTabsPane from "../../../src/tabs/tabs-pane";
export default {
    components: {
        YPopover,YButton,YTabs,YTabsHead,YTabsItem,YTabsBody,YTabsPane
    }
}
</script>

<style>
</style>


