
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

    .bg-gray-100(v-if="isOpen && !isMaintenance")
      .p-4.max-w-6xl.m-auto
        p.lv1.text-center.text-xl
          | 현재까지&nbsp;
          span.font-bold {{ playerCount }}
          | 명이 함께 해 주셨습니다.

        .mt-4(v-if="currentlyPlaying.length > 0")
          p.lv1.text-center.text-lg.mt-1
            | 현재&nbsp;
            span.font-bold {{ currentlyPlaying.length }}
            | 명이 함께 해 주시고 계십니다.

          ul.mt-4.grid.grid-cols-2.justify-between.gap-4(class='md:grid-cols-4 lg:grid-cols-5')
            li(v-for='player in currentlyPlaying')
              .group.block.rounded-lg.h-8.p-1.px-2.transition(class="hover:scale-110 hover:bg-green-600")
                .inline-flex.flex-row.h-full.content-center.place-items-center
                  img.rounded-sm.h-full.mr-4(:src='"https://crafatar.com/avatars/"+player.uuid+"?overlay"')
                  p.text-lg.lv1.max-w-full.truncate(class="group-hover:text-green-200") {{ player.name }}

        .mt-4(v-else)
          p.lv1.text-center.text-xl.mt-2
            | 온라인인 플레이어가 없습니다.

        .flex.justify-end.gap-4.mt-4
          nuxt-link.btn.bg-green-600.p-0.text-white(to="/exhibition/players" class="hover:bg-green-800 hover:translate-x-1") 모든 플레이어 보기
            i.fas.fa-arrow-right.ml-2

    .bg-gray-100.py-4(v-else-if="isMaintenance")
      .text-center
        p.lv1.text-lg
          //-
            | 2021년 7월 16일 오후 3시에 전시회 개장 예정입니다.
          | 발견된 서버 안정성 문제로 인해, 2021년 7월 17일 오후 3시에 전시회 재 개장 예정입니다.
          i.fas.fa-arrow-down.ml-2.cursor-pointer.animate-bounce(@click="setItOpen()")

    .bg-gray-100.py-4(v-else)
      .text-center
        p.lv1.text-lg
          | 2021년 7월 16일 오후 3시에 전시회 개장 예정입니다.
          i.fas.fa-arrow-down.ml-2.cursor-pointer.animate-bounce(@click="setItOpen()")

    .bg-yellow-500.text-black.mt-4.mb-4
      .p-6.max-w-6xl.m-auto.text-center
        p.text-2xl.mb-2
          i.fas.fa-exclamation-triangle.mr-2
          span.font-bold 공지
        p 서버의 문제를 해결하기 위해 점검중에 있습니다.
        p 점검완료는 7월 17일 15시 예정입니다. 찾아주셔서 감사드립니다.
        p 쾌적한 전시회가 되도록 최선을 다하겠습니다.

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
      nuxt-link.display-block.btn.bg-green-600.text-white.text-sm(to="/exhibition/how-to-join" class="hover:bg-green-800 hover:translate-x-1") 어떻게 접속하나요?
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
            nuxt-link.btn.bg-green-600.text-white.text-sm(to="/exhibition/contents" class="hover:bg-green-800 hover:translate-x-1") 전시회 내용 안내
        .flex.justify-between.flex-col.h-full
          div.mb-8
            h2.lv1.text-xl 궁금하신 점이 있으신가요?
            p.mt-4 우측 하단 채널톡 버튼으로 운영본부로 연락 주시면 감사하겠습니다.
            p.text-sm.mt-1
              span.font-bold 운영시각: 10:00 ~ 18:00

          div
            a.btn.bg-green-600.text-white.text-sm(href="https://oms.channel.io" class="hover:bg-green-800 hover:translate-x-1") 상담 요청

    .mt-8
    .p-4.max-w-6xl.m-auto.text-center(v-if="!isOpen")
      p.lv1.text-3xl 아직 전시회장이 준비되지 않았습니다.
      p.lv1.text-lg.mt-2 2021년 7월 16일에 다시 찾아주세요!
    .p-4.max-w-6xl.m-auto.text-center(v-else)
      p.lv1.text-2xl 방명록
      p 전시회장 내에서 작성한 방명록입니다.

      .mt-4
      template(v-if="guestbooks.length > 0")
        .grid.grid-cols-1.gap-4(class='md:grid-cols-2 lg:grid-cols-3')
          .group.block.rounded-lg.p-4.bg-gray-200.transition.cursor-pointer(@click='goDevMode()' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg' v-for='guestbook in guestbooks')
            .flex.justify-between.flex-col.h-full
              div
                img.inline-block.h-6.rounded-sm.h-full.mr-4(:src='"https://crafatar.com/avatars/"+guestbook.player.uuid+"?overlay"')
                span.lv1.text-xl {{ guestbook.player.name }}
              div.mt-4
                .font-medium.text-gray-500(class='group-hover:text-green-200' v-if="guestbook.content" v-for="line in splitLines(guestbook.content)")
                  p.text-sm {{ line ? line : "&nbsp;" }}
                template(v-if="developerMode")
                  p.text-xs.mt-1.text-gray-700 {{ guestbook.uuid }}

        .flex.justify-end.gap-4.mt-4
          nuxt-link.btn.bg-green-600.p-0.text-white(to="/exhibition/guestbooks" class="hover:bg-green-800 hover:translate-x-1") 모든 방명록 보기
            i.fas.fa-arrow-right.ml-2
      template(v-else)
        p.text-xl.lv1 방명록이 비어있습니다
        p 서버에 접속해 방명록을 적어보세요.

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      playerCount: null,
      currentlyPlaying: [],
      guestbooks: [],
      isOpen: false,
      isMaintenance: false,
      developerMode: false,
      devModeCount: 0
    }
  },
  head () {
    const title = '셧다운제 폐지 청원 전시회'
    const description = '셧다운제 폐지를 위한 전시회가 7월 16일 오후 3시부터 시작됩니다!'

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
  },
  mounted () {
    this.checkHasOpened()

    this.loadPlayerCount()
    this.loadCurrentlyPlaying()
    this.loadGuestbooks()

    setInterval(() => {
      this.loadCurrentlyPlaying()
      this.loadGuestbooks()
    }, 10000)
  },
  methods: {
    comma (num: string) {
      return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    setItOpen () {
      // 이거 개발용 function이예요....
      this.isOpen = false
      this.isMaintenance = false
      this.developerMode = true
    },
    goDevMode () {
      this.devModeCount++
      if (this.devModeCount > 10) {
        this.developerMode = true
      }
    },
    checkHasOpened () {
      this.isOpen = new Date().getTime() >= 1626415200000
      this.isMaintenance = new Date().getTime() < 1626501600000
    },
    async loadPlayerCount () {
      const data = await this.$axios.get('/v1/exhibition/players/totalCount')
      this.playerCount = data.data.data
    },
    async loadCurrentlyPlaying () {
      const data = await this.$axios.get('/v1/exhibition/players/current')
      this.currentlyPlaying = data.data
    },
    async loadGuestbooks () {
      const data = await this.$axios.get('/v1/exhibition/guestbooks?limit=12')
      this.guestbooks = data.data
    },
    async copyString (string: string, destination?: string) {
      if (process.client) {
        await navigator.clipboard.writeText(string)
        alert(`클립보드에 복사가 완료되었습니다. ${navigator.platform.includes('Mac') ? 'Cmd' : 'Ctrl'}+V 로 ${destination !== undefined ? destination : '원하는 곳'}에 붙여 넣으세요.`)
      }
    },
    splitLines (string: string) {
      return string.split('\n')
    }
  }
})
</script>

<style lang="postcss">
  .no-kerning {
    font-kerning: none;
  }
</style>
