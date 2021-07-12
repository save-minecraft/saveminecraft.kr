
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
            p.lv1.text-lg 2021.
            p.lv1.text-2xl 07.16
            p.lv1.text-2xl ~07.18

        div.flex.justify-end.mt-4
          nuxt-link.btn.bg-green-600.text-white(to="/exhibition" class="hover:bg-green-800")
            | 자세히 알아보기
            i.fas.fa-arrow-right.ml-2

    article.p-4.max-w-6xl.m-auto.mt-4

      h2.lv1.text-2xl.mb-1
        | 어쩌다 마인크래프트는 성인 게임이 되었나요?
      p.mb-4 셧다운제로 인해, Xbox Live가 성인화 되며, 성인 게임이 되었습니다.
      nuxt-link.btn.bg-green-600.text-white(to="/explain" class="hover:bg-green-800")
        | 자세히 알아보기
        i.fas.fa-arrow-right.ml-2

    .mt-4
    article.p-4.max-w-6xl.m-auto
      h2.lv1.text-2xl.mb-1 현재 진행중인 청원
      ul.grid.grid-cols-1.gap-4(class='md:grid-cols-2')
        li(v-for='petition in petitions')
          a.group.block.rounded-lg.p-4.border.border-gray-200.transition(:href='petition.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg')
            dl.items-center
              .flex.justify-between.flex-col(class="lg:flex-row lg:items-center")
                div
                  p.leading-6.font-medium(class='group-hover:text-white')
                    i.fas.fa-edit.mr-2
                    | {{ petition.title }}
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200')
                    | {{ petition.url.includes('president') ? "청와대 국민 청원" : "국회 국민 청원" }}

                div.mt-4(class='group-hover:text-green-200' v-if="petition.signed")
                  div.text-xl.inline-block(class='group-hover:text-green-100') {{ petition.signed.current }}
                  div.inline-block.text-gray-700(class='group-hover:text-green-200')
                    .inline-block.ml-1 /
                    .inline-block.ml-1 {{ petition.signed.goal }}

                  p.mt-2
                    span.font-semibold 마지막 업데이트:
                    |
                    | {{ $dayjs(petition.lastUpdate).fromNow() }}
                div.mt-4(v-else)
                  div 청원 정보를 가져오는 중...
    //-
      .bg-yellow-500.text-black.mt-4.mb-4
        .p-6.max-w-6xl.m-auto
          p.text-2xl.mb-2
            i.fas.fa-exclamation-triangle.mr-2
            | Test 12
          p 이 것은 테스트 경고 입니다.

    article.p-4.max-w-6xl.m-auto
      h2.lv1.text-2xl.mb-1 함께하고 있는 단체들
      p.mb-2 마인크래프트의 미래를 위해 함께 힘을 합쳐주고 있는 단체들입니다.
      ul.grid.grid-cols-1.gap-4(class='sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4')
        li(v-for='sponsor in sponsors')
          .group.cursor-pointer.block.rounded-lg.p-4.transition(@click='showSponsor(sponsor)' class="hover:scale-110 hover:bg-gray-200")
            dl.items-center.align-middle
              template(v-if='sponsor.img && sponsor.img.light')
                picture.h-10
                  source(:srcset='sponsor.img.dark' media='(prefers-color-scheme: dark)' v-if='sponsor.img.dark')
                  img.h-10.m-auto(:src='sponsor.img.light')
              template(v-else)
                p.text-xl.lv1.text-center {{ sponsor.name }}

    modal(v-show="openSponsorModal" @close="openSponsorModal = !openSponsorModal")
      template(#header)
        h1.text-lg.font-bold {{ currentSponsor ? currentSponsor.name : "불러오는 중" }}
      template(#body)
        p.text-sm {{ currentSponsor && currentSponsor.description ? currentSponsor.description : "" }}

      template(#footer)
        .flex.justify-between
          div
            a.btn.bg-green-600.text-white.text-sm(v-if="currentSponsor && currentSponsor.url" :href='currentSponsor ? currentSponsor.url : "#"' class="hover:bg-green-800")
              | 홈페이지 접속
              i.fas.fa-arrow-right.ml-2

          div
            .btn.bg-red-700.text-white.text-sm.cursor-pointer(class="hover:bg-red-800" @click="openSponsorModal = false")
              i.fas.fa-times.mr-2
              | 닫기

</template>

<script lang="ts">
import Vue from 'vue'

interface SponsorInterface {
  img: {
    light: string;
    dark?: string;
  };

}

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      petitions: [
        {
          title: '셧다운제를 폐지하고, 마인크래프트 성인 게임화를 막아주세요.',
          url: 'https://www1.president.go.kr/petitions/599533'
        },
        {
          title: '셧다운제 폐지를 위한 청원',
          url: 'https://petitions.assembly.go.kr/status/onGoing/C5578E6BB4646038E054A0369F40E84E'
        }
      ],
      sponsors: [
        {
          img: {
            light: '/assets/sponsors/ourmc/ourmc_light.svg',
            dark: '/assets/sponsors/ourmc/ourmc_dark.svg'
          },
          name: '우리들의 마인크래프트 공간',
          description: '한국의 대표적인 대규모 마인크래프트 커뮤니티로, 첫 성명문을 발표한 한국 마인크래프트 단체 9곳 중 하나입니다.',
          url: 'https://cafe.naver.com/minecraftgame'
        },
        {
          img: {
            light: '/assets/sponsors/goldbigdragon/logo.svg'
          },
          name: '김태룡 카페',
          description: '한국의 대표적인 대규모 프로그래밍 커뮤니티로, 첫 성명문을 발표한 한국 마인크래프트 단체 9곳 중 하나입니다.',
          url: 'https://cafe.naver.com/goldbigdragon'
        },
        {
          img: {
            light: '/assets/sponsors/korea-minecraft-forum/logo.svg'
          },
          name: '한국 마인크래프트 포럼',
          description: '한국의 대표적인 대규모 마인크래프트 커뮤니티로, 셧다운제 폐지 청원 전시회 프로젝트에 참여하고 있습니다.',
          url: 'https://www.koreaminecraft.net/'
        },
        {
          name: '마인크래프트 BE 모두의 커뮤니티',
          description: '---'
        },
        {
          name: '마인이메이터 유저 센터',
          description: '---'
        },
        {
          name: '미씩몹 코리아',
          description: '---'
        },
        {
          name: "Builder's Factory",
          description: '---'
        },
        {
          name: 'GBF Studio',
          description: '---'
        },
        {
          name: 'HK Dev',
          description: '---'
        },
        {
          name: "Pixel Creator's Place",
          description: '---'
        },
        {
          img: {
            light: '/assets/sponsors/packet.stream/logo-black.svg',
            dark: '/assets/sponsors/packet.stream/logo-white.svg'
          },
          name: 'Packetstream',
          description: '네트워크 가속 및 DDoS 보안 서비스를 제공하는 업체로, 이번 셧다운제 폐지 청원 전시회의 인프라를 담당합니다.',
          url: 'https://packet.stream'
        },
        {
          img: {
            light: '/assets/sponsors/stella-it/logo_light.svg',
            dark: '/assets/sponsors/stella-it/logo_dark.svg'
          },
          name: 'Stella IT',
          description: 'VPS 및 DDoS 보안 서비스를 제공하는 업체로, 이번 셧다운제 폐지 청원 전시회의 소프트웨어 개발과 인프라 운용을 담당합니다.',
          url: 'https://stella-it.com'
        }
      ],
      currentSponsor: {},
      openSponsorModal: false
    }
  },
  async mounted () {
    const data = await this.$axios.get('/v1/petitions')
    this.petitions = data.data
  },
  methods: {
    showSponsor (sponsor: SponsorInterface) {
      // umm?
      this.currentSponsor = sponsor
      this.openSponsorModal = true
    }
  }
})
</script>

<style lang="postcss">
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
</style>
