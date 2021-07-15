
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        p.inline-block.neodgm.text-4xl 보도 자료

    article.p-4.max-w-6xl.m-auto
      h1.lv1.text-2xl.mb-2 saveminecraft.kr 소식
      ul.grid.grid-cols-1.gap-4(class='lg:grid-cols-2')
          a.group.block.rounded-lg.p-4.bg-gray-200.transition(:href='news.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg' v-for='news in press')
              .flex.justify-between.flex-col.h-full
                div
                  p.leading-6.font-medium(class='group-hover:text-white') {{ news.title }}
                div
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200' v-if="news.publisher") {{ news.publisher }}
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200') {{ $dayjs(news.releasedAt).format('YYYY년 MM월 DD일') }}

      .mt-8
      hr.hr.border-gray-500
      .mt-8

      h1.lv1.text-2xl.mb-2 최신 뉴스
      .grid.grid-cols-1.gap-4(class='lg:grid-cols-2')
          a.group.block.rounded-lg.p-4.bg-gray-200.transition(:href='news.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg' v-for='news in newses')
              .flex.justify-between.flex-col.h-full
                div
                  p.leading-6.font-medium(class='group-hover:text-white') {{ news.title }}
                div
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200' v-if="news.publisher") {{ news.publisher }}
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200') {{ $dayjs(news.releasedAt).format('YYYY년 MM월 DD일') }}

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      press: [
        {
          title: '[보도자료] 미성년자 이용 불가 사태, <마인크래프트>로 온라인 작품 전시회 개최한다',
          releasedAt: '2021-07-12',
          publisher: '우리 마인크래프트 공간',
          url: 'https://cafe.naver.com/minecraftgame/1819898'
        },
        {
          title: '[보도자료] 대표적 교육용 게임 <마인크래프트>, 올해부턴 성인용… ‘만 18세 미만’ 이용 제한에 발목',
          releasedAt: '2021-07-02',
          publisher: '우리 마인크래프트 공간',
          url: 'https://cafe.naver.com/minecraftgame/1818027'
        }
      ],
      newses: [
        {
          title: '마인크래프트 속 셧다운 폐지 청원 전시회 열린다',
          publisher: '전자신문',
          releasedAt: '2021-07-12',
          url: 'https://www.etnews.com/20210712000176'
        },
        {
          title: '셧다운제 폐지 청원, 마인크래프트 게임 속 전시회로 연다',
          publisher: '매일경제',
          releasedAt: '2021-07-12',
          url: 'https://www.mk.co.kr/news/it/view/2021/07/670252/'
        },
        {
          title: "미성년자 이용 불가 사태, '마인크래프트'로 온라인 작품 전시회 개최한다",
          publisher: '디스이즈게임',
          releasedAt: '2021-07-12',
          url: 'https://www.thisisgame.com/webzine/game/nboard/225/?n=128426'
        },
        {
          title: "'마인크래프트' 유저 모임 '우마공', '마크' 활용한 셧다운제 폐지 청원 전시회 16일 온라인 개최",
          publisher: '게임포커스',
          releasedAt: '2021-07-12',
          url: 'http://gamefocus.co.kr/detail.php?number=119420'
        },
        {
          title: '셧다운제 폐지 청원, 마인크래프트로 한다...전시회 개최',
          publisher: '테크M',
          releasedAt: '2021-07-12',
          url: 'https://www.techm.kr/news/articleView.html?idxno=85890'
        },
        {
          title: "'마인크래프트'로 만드는 셧다운제 폐지 청원 전시회 열려",
          publisher: '아이뉴스24',
          releasedAt: '2021-07-12',
          url: 'http://www.inews24.com/view/1384421'
        }
      ]
    }
  },
  head () {
    const title = '보도 자료'
    const description = 'saveminecraft.kr 에서 제공하는 보도 자료 및 관련 언론보도 내용입니다.'

    return {
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:site_name', name: 'og:site_name', content: 'saveminecraft.kr' },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:url', name: 'og:url', content: 'https://saveminecraft.kr' }
      ]
    }
  }
})
</script>

<style lang="postcss">
</style>
