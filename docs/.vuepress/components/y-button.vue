<template>
    <div>
        <h3>普通按钮</h3>
        <y-button>普通按钮</y-button>

        <h3>icon 按钮</h3>
        <y-button icon="download">icon按钮</y-button>
        <y-button icon="download" icon-position="right">icon在右</y-button>

        <h3>不可点击</h3>
        <y-button disabled>不可点击</y-button>

        <h3>加载状态</h3>
        <y-button loading>loading状态</y-button>
        <y-button loading disabled>loading状态</y-button>
        <y-button icon="settings" :loading="loading1" @click="loading1 = !loading1">
            点击loading
        </y-button>

        <h3>按钮组</h3>
        <y-button-group>
            <y-button icon="left">上一页</y-button>
            <y-button>更多</y-button>
            <y-button icon="right" icon-position="right" @click="xx">下一页</y-button>
        </y-button-group>

        <br>
        
        <pre>
            <code>
                {{content}}
            </code>
        </pre>
    </div>
</template>

<script>
import YButton from '../../../src/button/button'
import YButtonGroup from '../../../src/button/button-group'
export default {
    components: {
        YButton,
        YButtonGroup
    },
    data () {
        return {
            loading1: false,
            content: `
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
            `
        }
    }
}
</script>

