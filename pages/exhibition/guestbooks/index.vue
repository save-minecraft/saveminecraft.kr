
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

    .bg-gray-100
      .p-4.max-w-6xl.m-auto
        p.lv1.text-center.text-xl
          | 현재까지&nbsp;
          span.font-bold {{ guestbooks.length }}
          | 분께서 방명록을 남겨 주셨습니다.
          i.fas.fa-arrow-down.ml-2.cursor-pointer.animate-bounce(@click="toggleDevMode()")

    .p-4.max-w-6xl.m-auto
      .mt-4
      template(v-if="guestbooks.length > 0")
        .grid.grid-cols-1.gap-4(class='md:grid-cols-2 lg:grid-cols-3')
          .group.block.rounded-lg.p-4.bg-gray-200.transition.cursor-pointer(class='hover:bg-green-500 hover:border-transparent hover:shadow-lg' v-for='guestbook in guestbooks')
            .flex.justify-between.flex-col.h-full.text-center
              div
                img.inline-block.h-6.rounded-sm.h-full.mr-4(:src='"https://crafatar.com/avatars/"+guestbook.player.uuid+"?overlay"')
                span.lv1.text-xl {{ guestbook.player.name }}
              div.mt-4
                .font-medium.text-gray-500(class='group-hover:text-green-200' v-if="guestbook.content" v-for="line in splitLines(guestbook.content)")
                  p.text-sm {{ line ? line : "&nbsp;" }}
                template.mt-2(v-if="devMode")
                  p.text-xs.mt-1.text-gray-700 {{ guestbook.uuid }}

      template.text-center(v-else)
        p.text-xl.lv1 방명록이 비어있습니다
        p 서버에 접속해 방명록을 적어보세요.

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      guestbooks: [],
      devMode: false
    }
  },
  head () {
    const title = '셧다운제 폐지 청원 전시회 참여자'
    const description = '셧다운제 폐지를 위한 청원 전시회에 함께해주신 분들 입니다.'

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
    this.getGuestbooks()

    setInterval(() => {
      this.getGuestbooks()
    }, 10000)
  },
  methods: {
    comma (num: string) {
      return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    async getGuestbooks () {
      const data = await this.$axios.get('/v1/exhibition/guestbooks')
      this.guestbooks = data.data
    },
    toggleDevMode () {
      this.devMode = !this.devMode
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
