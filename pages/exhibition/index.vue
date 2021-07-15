
<template lang="pug">
  div
    .bg-yellow-100
      .p-4.max-w-6xl.m-auto
        creative
        div.flex.justify-end.gap-4
          div.inline-block.text-center
            p.lv1.text-xl 셧다운제 폐지 청원
            p.text-6xl.lv1 전시회

          div.inline-block.text-right
            p.lv1.text-lg.no-kerning 2021.
            p.lv1.text-2xl.no-kerning 07.16
            p.lv1.text-2xl.no-kerning ~07.18

    .bg-gray-100(v-if="isOpen")
      .p-4.max-w-6xl.m-auto
        p.lv1.text-center.text-xl
          | 현재까지&nbsp;
          span.font-bold {{ playerCount }}
          | 명이 함께 해 주셨습니다.

        .mt-4(v-if="currentlyPlaying.length > 0")
          ul.grid.grid-cols-2.justify-between.gap-4(class='md:grid-cols-4 lg:grid-cols-5')
            li(v-for='player in currentlyPlaying')
              .group.block.rounded-lg.h-8.p-1.px-2.transition(class="hover:scale-110 hover:bg-green-800")
                .inline-flex.flex-row.h-full.content-center.place-items-center
                  img.rounded-sm.h-full.mr-4(:src='"https://crafatar.com/avatars/"+player.uuid+"?overlay"')
                  p.text-lg.lv1.max-w-full.truncate(class="group-hover:text-green-200") {{ player.name }}
    .bg-gray-100.py-4(v-else)
      .text-center
        p.lv1.text-lg
          | 2021년 7월 16일 오후 1시에 전시회 개장 예정입니다.
          i.fas.fa-arrow-down.ml-2.cursor-pointer.animate-bounce(@click="setItOpen()")

    .mt-4
    div.p-4.max-w-6xl.m-auto.text-center
      p.lv1.text-lg 접속 주소
      p.mt-2
        span.neodgm.text-4xl saveminecraft.kr
        span.text-blue-500.cursor-pointer.ml-2(@click="copyString('saveminecraft.kr', '서버주소 란')") 복사

      .mt-8
      p.font-bold 24시간, 전시회 운영 기간 중 무중단으로 운영됩니다.
      p.text-sm 일부 국가에서는 접속이 불가할 수 있습니다.

      .mt-4
      nuxt-link.display-block.btn.bg-green-600.text-white.text-sm(to="/exhibition/how-to-join" class="hover:bg-green-800") 어떻게 접속하나요?
        i.fas.fa-arrow-right.ml-2

      .mt-8
      hr.hr.border-gray-200
      .mt-8

      .grid.grid-cols-2.gap-4
        .flex.justify-between.flex-col.h-full
          div.mb-8
            h2.lv1.text-xl 전시회 주제
            p.mt-4 마인크래프트 또는 게임의 가치를 보여줄 수 있는 작품
            p.text-sm.mt-1 (예. 건축물, 리소스, 플러그인)

          div
            nuxt-link.btn.bg-green-600.text-white.text-sm(to="/exhibition/contents" class="hover:bg-green-800") 전시회 내용 안내
        .flex.justify-between.flex-col.h-full
          div.mb-8
            h2.lv1.text-xl 궁금하신 점이 있으신가요?
            p.mt-4 우측 하단 채널톡 버튼으로 운영본부로 연락 주시면 감사하겠습니다.
            p.text-sm.mt-1
              span.font-bold 운영시각: 10:00 ~ 18:00

          div
            a.btn.bg-green-600.text-white.text-sm(href="https://oms.channel.io" class="hover:bg-green-800") 상담 요청

    .mt-8
    .p-4.max-w-6xl.m-auto.text-center(v-if="!isOpen")
      p.lv1.text-2xl 아직 전시회장이 준비되지 않았습니다.
      p.lv1.text-lg.mt-2 2021년 7월 16일에 다시 찾아주세요!
    .p-4.max-w-6xl.m-auto.text-center(v-else)
      p.lv1.text-2xl 여기에 방명록 추가

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      playerCount: null,
      currentlyPlaying: [

      ],
      isOpen: false
    }
  },
  mounted () {
    this.checkHasOpened()

    this.loadPlayerCount()
    this.loadCurrentlyPlaying()

    setInterval(() => {
      this.loadCurrentlyPlaying()
    }, 10000)
  },
  methods: {
    comma (num: string) {
      return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    setItOpen () {
      this.isOpen = true
    },
    checkHasOpened () {
      this.isOpen = new Date().getTime() >= 1626408000000
    },
    async loadPlayerCount () {
      const data = await this.$axios.get('/v1/exhibition/players/totalCount')
      this.playerCount = data.data.data
    },
    async loadCurrentlyPlaying () {
      const data = await this.$axios.get('/v1/exhibition/players/current')
      this.currentlyPlaying = data.data
    },
    async copyString (string: string, destination?: string) {
      if (process.client) {
        await navigator.clipboard.writeText(string)
        alert(`클립보드에 복사가 완료되었습니다. ${navigator.platform.includes('Mac') ? 'Cmd' : 'Ctrl'}+V 로 ${destination !== undefined ? destination : '원하는 곳'}에 붙여 넣으세요.`)
      }
    }
  }
})
</script>

<style lang="postcss">
  .no-kerning {
    font-kerning: none;
  }
</style>
