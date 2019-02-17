<template>
    <div>
        <h3>页面布局预览</h3>
        <y-layout class="layout">
            <y-header class="header">header</y-header>
            <y-content class="main">content</y-content>
        </y-layout>
        <br>
        <y-layout class="layout">
            <y-header class="header">header</y-header>
            <y-content class="main">content</y-content>
            <y-footer class="footer">footer</y-footer>
        </y-layout>
        <br>
        <y-layout>
            <y-header class="header">header</y-header>
            <y-layout>
                <y-sider class="sider">sider</y-sider>
                <y-content class="main">content</y-content>
            </y-layout>
            <y-footer class="footer">footer</y-footer>
        </y-layout>
        <br>
        <y-layout>
            <y-sider class="sider">sider</y-sider>
            <y-layout>
                <y-header class="header">header</y-header>
                <y-content class="main">content</y-content>
                <y-footer class="footer">footer</y-footer>
            </y-layout>
        </y-layout>
        <br>

    </div>
</template>

<script>
import YLayout from '../../../src/layout/layout'
import YHeader from '../../../src/layout/header'
import YContent from '../../../src/layout/content'
import YFooter from '../../../src/layout/footer'
import YSider from '../../../src/layout/sider'
export default {
    components: {
        YLayout,YHeader,YContent,YFooter,YSider
    }
}
</script>

<style scoped>

.header, .main, .footer {
    text-align: center;
}
.header, .footer {
    min-height: 50px;
    background: #409EFF;
}
.main {
    min-height: 200px;
    background: #72B0F1;
}
.sider {
    width: 200px;
    background: #3BA4C4;
}
</style>
