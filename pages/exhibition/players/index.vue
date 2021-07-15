
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
          i.fas.fa-arrow-down.mr-2.cursor-pointer.animate-bounce(@click="toggleDevMode()")
          | 현재까지&nbsp;
          span.font-bold {{ totalPlayers.length }}
          | 명이 함께 해 주셨습니다.
          i.fas.fa-arrow-down.ml-2.cursor-pointer.animate-bounce(@click="")

        ul.mt-6.grid.grid-cols-2.justify-between.gap-4(class='sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5' v-if='totalPlayers.length > 0')
          li(v-for='player in totalPlayers')
            .group.block.rounded-lg.transition(class="hover:scale-110 hover:bg-green-600")
              .inline-flex.flex-row.h-10.p-1.px-2.content-center.place-items-center
                img.rounded-sm.h-full.mr-4(:src='"https://crafatar.com/avatars/"+player.uuid+"?overlay"')
                p.text-lg.lv1.max-w-full.truncate(class="group-hover:text-green-200") {{ player.name }}
              template(v-if='devMode')
                p.text-sm.text-gray-500 {{ player.uuid }}

        .mt-4(v-else)
          p.lv1.text-center.text-xl.mt-2
            | 아무도 접근하지 않았습니다.

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      totalPlayers: [],
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
    this.loadTotalPlayers()

    setInterval(() => {
      this.loadTotalPlayers()
    }, 10000)
  },
  methods: {
    comma (num: string) {
      return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    async loadTotalPlayers () {
      const data = await this.$axios.get('/v1/exhibition/players/total')
      this.totalPlayers = data.data
    },
    toggleDevMode () {
      this.devMode = !this.devMode
    }
  }
})
</script>

<style lang="postcss">
  .no-kerning {
    font-kerning: none;
  }
</style>
