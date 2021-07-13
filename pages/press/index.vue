
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
          a.group.block.rounded-lg.p-4.bg-gray-200.transition(:href='news.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg')
            dl.items-center
              .flex.justify-between.flex-col(class="lg:flex-row lg:items-center")
                div
                  p.leading-6.font-medium(class='group-hover:text-white')
                    | {{ news.title }}
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200' v-if="news.publisher")
                    | {{ news.publisher }}
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200')
                    | {{ $dayjs(news.releasedAt).format('YYYY년 MM월 DD일') }}

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      newses: [
        {
          title: "'마인크래프트'로 만드는 셧다운제 폐지 청원 전시회 열려",
          publisher: '아이뉴스24',
          releasedAt: '2021-07-12',
          url: 'https://news.naver.com/main/read.naver?mode=LSD&mid=shm&sid1=105&oid=031&aid=0000610005'
        },
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
