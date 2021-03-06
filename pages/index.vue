
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
            p.lv1.text-2xl.no-kerning 07.22
            p.lv1.text-2xl.no-kerning ~07.24

        div.flex.justify-end.mt-4
          nuxt-link.btn.bg-green-600.text-white(to="/exhibition" class="hover:bg-green-800") 자세히 알아보기
            i.fas.fa-arrow-right.ml-2

    article.p-4.max-w-6xl.m-auto.mt-4

      h2.lv1.text-2xl.mb-1 어쩌다 마인크래프트는 성인 게임이 되었나요?
      p.mb-4 셧다운제로 인해, Xbox Live가 성인화 되며, 성인 게임이 되었습니다.
      nuxt-link.btn.bg-green-600.text-white(to="/explain" class="hover:bg-green-800") 자세히 알아보기
        i.fas.fa-arrow-right.ml-2

    .mt-4
    article.p-4.max-w-6xl.m-auto
      h2.lv1.text-2xl.mb-1 현재 진행 중인 청원
      ul.grid.grid-cols-1.gap-4(class='md:grid-cols-2')
        li(v-for='petition in petitions')
          a.group.block.rounded-lg.p-4.bg-gray-200.transition(:href='petition.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg')
            dl.items-center
              div
                p.leading-6.font-medium(class='group-hover:text-white')
                  i.fas.fa-edit.mr-2
                  | {{ petition.title }}
                p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200') {{ petition.url.includes('president') ? "청와대 국민 청원" : "국회 국민 청원" }}

                div.mt-4(class='group-hover:text-green-200' v-if="petition.signed")
                  div.inline-block(class='group-hover:text-green-100')
                    span.text-xl {{ comma(petition.signed.current) }}
                    | &nbsp;
                    span ({{ (petition.signed.current * 100 / petition.signed.goal).toFixed(1) }}%)
                  div.inline-block.text-gray-500(class='group-hover:text-green-200')
                    .inline-block.ml-1 /
                    .inline-block.ml-1 {{ comma(petition.signed.goal) }}

                  div.mt-1.h-auto
                    progress.bg-grey-200.h-1.m-0(style="width: 100%;" max="100" :value="(petition.signed.current * 100 / petition.signed.goal)")

                  p.text-sm.mt-1
                    span.font-semibold 마지막 업데이트: {{ $dayjs(petition.lastUpdate).fromNow() }}
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
                picture.h-16
                  source(:srcset='sponsor.img.dark' media='(prefers-color-scheme: dark)' v-if='sponsor.img.dark')
                  img.h-16.m-auto(:src='sponsor.img.light')
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
            a.btn.bg-green-600.text-white.text-sm(v-if="currentSponsor && currentSponsor.url" :href='currentSponsor ? currentSponsor.url : "#"' class="hover:bg-green-800") 홈페이지 접속
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
          description: '우리들의 마인크래프트 공간은 30만 회원이 가입한 국내 최대 마인크래프트 커뮤니티로, 현재 셧다운제 폐지 운동의 최전선에 서있습니다.',
          url: 'https://cafe.naver.com/minecraftgame'
        },
        {
          img: {
            light: '/assets/sponsors/goldbigdragon/logo.svg'
          },
          name: '김태룡 카페',
          description: '김태룡 카페는 \'배운 만큼 가르치자\' 슬로건 아래, 마인크래프트 내 스크립팅, 프로그래밍, 모델링 등 다양한 질문과 답변이 오가는 소형 커뮤니티 카페입니다.',
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
          description: '마모커에서는 마인크래프트 BE의 대표적인 창작 기능들, 애드온과 리소스팩을 연구해보고 모델링을 만들어 자신의 창작물에 놀라움을 넣어볼 수 있는 재능을 익혀갈 수 있는 커뮤니티입니다\n',
          img: {
            light: '/assets/sponsors/bemc/logo.svg'
          },
          url: 'https://band.us/@bemc'
        },
        {
          name: '마인이메이터 유저 센터 (마유센)',
          description: '마인크래프트에 기반한 애니메이션 제작 프로그램인 마인이메이터를 활용해 애니메이션, 만화, 캐릭터 등을 제작하는 창작 커뮤니티입니다.',
          url: 'http://cafe.naver.com/minecenter1',
          img: {
            light: '/assets/sponsors/mineimator-user-center/light.svg',
            dark: '/assets/sponsors/mineimator-user-center/dark.svg'
          }
        },
        {
          name: '미씩몹 코리아',
          description: '마인크래프트에 롤플레잉적 요소를 가미하는 기술적인 부분에서의 커뮤니티로, 셧다운제 폐지 청원에 함께 하고 있습니다.',
          url: 'https://discord.gg/Ffq2ewUhQT',
          img: {
            light: '/assets/sponsors/mythicmobs-korea/light.svg',
            dark: '/assets/sponsors/mythicmobs-korea/dark.svg'
          }
        },
        {
          name: "Builder's Factory",
          description: '한국과 해외를 이어주는 대표적인 디자인 커뮤니티이며, 셧다운제 관련 정보와 이슈를 해외에 조달하고 온라인 집회를 주도하고 있습니다.',
          img: {
            light: '/assets/sponsors/builders-factory/light.svg',
            dark: '/assets/sponsors/builders-factory/dark.svg'
          },
          url: 'https://discord.gg/fGMHuM9RNV'
        },
        {
          name: 'GBF Studio',
          description: '마인크래프트를 도구로 삼아 새로운 예술의 지평을 열고자 하는 GBF Studio 입니다. 이번 전시회를 통해 많은 분들이 마인크래프트의 예술적 가치를 알아가셨으면 좋겠습니다.',
          img: {
            light: '/assets/sponsors/gbf-studio/light.svg',
            dark: '/assets/sponsors/gbf-studio/dark.svg'
          },
          url: 'https://www.youtube.com/channel/UCLrPGVuzySG2D997kknpa7Q'
        },
        {
          name: 'HK Dev',
          description: '한국의 대표적인 마인크래프트 관련 디스코드 개발자 커뮤니티이고, 셧다운제 폐지를 위해 여러 커뮤니티와 협력하고 있습니다.',
          img: {
            light: '/assets/sponsors/hk-dev/light.svg',
            dark: '/assets/sponsors/hk-dev/dark.svg'
          },
          url: 'https://discord.gg/hkdev'
        },
        {
          name: "Pixel Creator's Place",
          description: '한국 마인크래프트 Pixel Art와 모델링 분야 전문 커뮤니티입니다. 셧다운제 폐지를 위해 진행되는 전시회에서 마인크래프트 모델링과 Pixel 부문 참여 독려와 자료 지원을 맡고 있습니다. 많은 어린 유저 분들이 성인인증 철회와 더불어 Pixel Art&모델링에 많은 관심을 가져주셨으면 하는 바람입니다.',
          img: {
            light: '/assets/sponsors/pixel-creators-place/light.svg'
          },
          url: 'https://discord.gg/pQjME4Y'
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
  head () {
    const title = 'saveminecraft.kr'
    const description = '마인크래프트 미성년자 이용 불가 사태의 배경이자 모든 게이머를 불편하게 하는 셧다운제의 폐지를 요구합니다.'
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
  async mounted () {
    await this.updatePetitions()

    setInterval(() => {
      this.updatePetitions()
    }, 60000)
  },
  methods: {
    showSponsor (sponsor: SponsorInterface) {
      // umm?
      this.currentSponsor = sponsor
      this.openSponsorModal = true
    },
    comma (num: string) {
      return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    async updatePetitions () {
      const data = await this.$axios.get('/v1/petitions')
      this.petitions = data.data
    }
  }
})
</script>

<style lang="postcss">
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  progress {
    appearance: none;
    -webkit-appearance: none;
    @apply bg-gray-300;
  }
  progress[value]::-webkit-progress-bar {
    @apply bg-gray-300;
  }
  progress[value]::-webkit-progress-value {
    @apply bg-gray-700;
  }
  progress[value]::-moz-progress-bar {
    @apply bg-gray-700;
  }

  @media (prefers-color-scheme: dark) {
    progress {
      @apply bg-gray-700;
    }
    progress[value]::-webkit-progress-bar {
      @apply bg-gray-700;
    }
    progress[value]::-webkit-progress-value {
      @apply bg-gray-300;
    }
    progress[value]::-moz-progress-bar {
      @apply bg-gray-300;
    }
  }

  .no-kerning {
    font-kerning: none;
  }

</style>
