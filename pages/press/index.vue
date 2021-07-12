
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        p.inline-block.neodgm.text-4xl
          | 보도 자료

    article.p-4.max-w-6xl.m-auto
      h1.lv1.text-2xl.mb-2
        | 최신 뉴스
      ul.grid.grid-cols-1.gap-4(class='lg:grid-cols-2')
        li(v-for='news in newses')
          a.group.block.rounded-lg.p-4.border.border-gray-200.transition(:href='news.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg')
            dl.items-center
              .flex.justify-between.flex-col(class="lg:flex-row lg:items-center")
                div
                  p.leading-6.font-medium(class='group-hover:text-white')
                    | {{ news.title }}
                  p.text-sm.font-medium.text-gray-700(class='group-hover:text-green-200' v-if="news.publisher")
                    | {{ news.publisher }}
                  p.text-sm.font-medium.text-gray-700(class='group-hover:text-green-200')
                    | {{ news.releasedAt }}

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      newses: [
        {
          title: '미성년자 이용 불가 사태, <마인크래프트>로 온라인 작품 전시회 개최한다',
          releasedAt: '2021-07-12',
          url: 'https://cafe.naver.com/minecraftgame/1819898'
        }
      ]
    }
  }
})
</script>

<style lang="postcss">
</style>
