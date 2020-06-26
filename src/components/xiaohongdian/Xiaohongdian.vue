<template>
  <div class="xiaohongdian" :style="styleObj">2</div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#fff'
    },
    offset: {
      type: Number,
      default: 7.5
    },
    fontsize: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      styleObj: {
        width: this.width + 'px',
        height: this.width + 'px',
        color: this.color,
        right: -this.offset + 'px',
        top: -this.offset + 'px',
        lineHeight: this.width + 'px',
        fontSize: this.fontsize + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.xiaohongdian
  position absolute
  right -7.5px
  top -7.5px
  width 15px
  height 15px
  border-radius 50%
  text-align center
  line-height 15px
  font-size 9px
  color #fff
  background-color rgba(255, 89, 24, 1)
</style>