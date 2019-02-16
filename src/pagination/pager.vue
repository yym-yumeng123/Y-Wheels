<template>
    <div class="y-pager">
        <span v-for="(page,index) in pages" :key="index">
            {{ page }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'ElementPager',
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

</style>


