<template>
  <div class="y-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
    <span
      class="y-pager-nav prev"
      :class="{disabled: currentPage === 1}"
      @click="onClickPage(currentPage - 1)"
    >
      <y-icon name="left"></y-icon>
    </span>
    <template v-for="(page,index) in pages">
      <template v-if="page === currentPage">
        <span class="y-pager-item active" :key="index">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <y-icon class="y-pager-separtor" name="dots" :key="index">...</y-icon>
      </template>
      <template v-else>
        <span class="y-pager-item other" :key="index" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span
      class="y-pager-nav next"
      :class="{disabled: currentPage === totalPage}"
      @click="onClickPage(currentPage + 1)"
    >
      <y-icon name="right"></y-icon>
    </span>
  </div>
</template>

<script>
import YIcon from "../icon/icon";

export default {
  name: "ElementPager",
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
  computed: {
    pages() {
      let pages = [
        1,
        this.totalPage,
        this.currentPage,
        this.currentPage - 1,
        this.currentPage - 2,
        this.currentPage + 1,
        this.currentPage + 2
      ];
      // 过滤 -1. 0
      let filterPage = pages.filter(n => {
        return n >= 1 && n <= this.totalPage;
      });
      // 排序数组并去重
      let u = unique(filterPage.sort((a, b) => a - b));
      // 插入 ...
      let u2 = u.reduce((prev, current, index, array) => {
        if (array[index + 1] !== undefined && array[index + 1] - u[index] > 1) {
          prev.push(current);
          prev.push("...");
        } else {
          prev.push(current);
        }
        return prev;
      }, []);
      return u2;
    }
  },
  methods: {
    onClickPage(n) {
      // 边界情况判断
      if (n >= 1 && n <= this.totalPage) {
        this.$emit("update:currentPage", n);
      }
    }
  }
};

function unique(array) {
  const object = {};
  array.map(number => {
    object[number] = true;
  });

  return Object.keys(object).map(n => parseInt(n, 10));
}
</script>

<style lang="scss" scoped>
@import "var";
$width: 20px;
$height: 20px;
$font-size: 12px;
.y-pager {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &.hide {
    display: none;
  }
  &.separtor {
    width: $width;
    font-size: $font-size;
  }
  &-item {
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    align-items: center;
    font-size: $font-size;
    min-width: $width;
    height: $height;
    margin: 0 4px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $border-bottom-color;
    }
    &.active {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: $width;
    height: $height;
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    font-size: $font-size;
    &.disabled {
      cursor: not-allowed;
    }
  }
}
</style>


