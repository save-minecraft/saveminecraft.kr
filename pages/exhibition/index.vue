
<template lang="pug">
  div
    div.bg-yellow-100
      div.p-4.max-w-6xl.m-auto
        creative
        div.flex.justify-end.gap-4
          div.inline-block.text-center
            p.lv1.text-xl 셧다운제 폐지 청원
            p.text-6xl.lv1 전시회

          div.inline-block.text-right
            p.lv1.text-lg.no-kerning 2021.
            p.lv1.text-2xl.no-kerning 07.16
            p.lv1.text-2xl.no-kerning ~07.18
    .mt-4
    div.p-4.max-w-6xl.m-auto
      h1.neodgm.text-3xl.text-center Under Construction
      p.text-center This page is under construction...
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default'
})
</script>

<style lang="postcss">
  .no-kerning {
    font-kerning: none;
  }
</style>
