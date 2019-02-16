<template>
    <div class="y-pager">
        <template v-for="(page,index) in pages">
            <template v-if="page === currentPage">
                <span class="y-pager-item active" :key="index">{{page}}</span>
            </template>
            <template v-else-if="page === '...'">
                <y-icon class="y-pager-separtor" name="dots" :key="index">...</y-icon>
            </template>
            <template v-else>
                <span class="y-pager-item other" :key="index">{{page}}</span>
            </template>
        </template>
    </div>
</template>

<script>
import YIcon from '../icon/icon'

export default {
    name: 'ElementPager',
    components: {
        YIcon
    },
    props: {
        totalPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        hideIfOnePage: {
            type: Boolean,
            default: true
        }
    },
    data () {
        let pages = [1, this.totalPage, this.currentPage, this.currentPage -1, this.currentPage -2, this.currentPage + 1, this.currentPage + 2]
        // 排序数组并去重
        let u = unique(pages.sort((a, b) => a - b))
        // 插入 ...
        let u2 = u.reduce((prev, current, index, array) => {
            if (array[index+1] !== undefined && array[index+1] - u[index] > 1) {
                prev.push(current)
                prev.push('...')
            } else {
                prev.push(current)
            }
            return prev
        }, [])
        return {
            pages: u2
        }
    }
}

function unique(array) {
    const object = {}
    array.map((number) => {
        object[number] = true
    })

    return Object.keys(object).map((n) => parseInt(n, 10))
}
</script>

<style lang="scss" scoped>
@import 'var';
.y-pager {
    display: flex;
    justify-content: center;
    align-items: center;
    &.separtor {
        width: 20px;
        font-size: 12px;
    }
    &-item {
        border: 1px solid #e1e1e1;
        border-radius: $border-radius;
        padding: 0 4px;
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        min-width: 20px;
        height: 20px;
        margin: 0 4px;
        cursor: pointer;

        &.active, &:hover {
            border-color: $border-bottom-color;
        }
        &.active {
            cursor: default;
        }
    }
    
}
</style>


