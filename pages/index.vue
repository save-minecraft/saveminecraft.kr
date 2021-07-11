
<template lang="pug">
  div
    .drop-shadow.my-10.mx-2.p-4.text-center
      p.inline-block.neodgm.creative-gradient
        | let us be
        | creative

    article.p-4.max-w-6xl.m-auto
      //-
        p.text-xl.text-center
          | 셧다운제, 이제는 멈춰야 합니다.
        .mt-6

      h2.lv1.text-2xl.mb-1
        | 어쩌다 마인크래프트는 성인 게임이 되었나요?
      p.mb-4 셧다운제로 인해, Xbox Live가 성인화 되며, 성인 게임이 되었습니다.
      nuxt-link.btn.bg-green-600.text-white(to="/explain" class="hover:bg-green-800")
        | 자세히 알아보기
        i.fas.fa-arrow-right.ml-2

    .mt-4
    article.p-4.max-w-6xl.m-auto
      h2.lv1.text-2xl.mb-1 현재 진행중인 청원
      p.mb-4 청원...

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
          .group.cursor-pointer.block.rounded-lg.p-4.transition(@click='showSponsor(sponsor)' class="hover:scale-110")
            dl.items-center.align-middle
              template(v-if='sponsor.img && sponsor.img.light && sponsor.img.dark')
                picture.h-10
                  source(:srcset='sponsor.img.dark' media='(prefers-color-scheme: dark)')
                  img.h-10.m-auto(:src='sponsor.img.light')
              template(v-else)
                p.text-xl.lv1.text-center {{ sponsor.name }}

    modal(v-show="openSponsorModal" @close="openSponsorModal = !openSponsorModal")
      template(#header)
        h1.text-lg.font-bold {{ currentSponsor ? currentSponsor.name : "불러오는 중" }}
      template(#body)
        p.text-sm {{ currentSponsor && currentSponsor.description ? currentSponsor.description : "" }}

        div(v-if="currentSponsor && currentSponsor.url")
          .mt-4
          a.btn.bg-green-600.text-white.text-sm(:href='currentSponsor ? currentSponsor.url : "#"' class="hover:bg-green-800")
            | 홈페이지 접속
            i.fas.fa-arrow-right.ml-2

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
      sponsors: [
        {
          img: {
            light: '/assets/sponsors/ourmc/ourmc_light.svg',
            dark: '/assets/sponsors/ourmc/ourmc_dark.svg'
          },
          name: '우리 마인크래프트 공간',
          description: '국내 대규모 마인크래프트 커뮤니티',
          url: 'https://cafe.naver.com/minecraftgame'
        },
        {
          name: '김태룡 카페',
          description: '---',
          url: 'https://cafe.naver.com/goldbigdragon'
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
          description: '당신이 어떠한 서버를 운영하던, 최고의 DDoS 방어 성능을 자랑합니다.',
          url: 'https://packet.stream'
        },
        {
          img: {
            light: '/assets/sponsors/stella-it/logo_light.svg',
            dark: '/assets/sponsors/stella-it/logo_dark.svg'
          },
          name: 'Stella IT',
          description: '합리적인 가격에 고성능 인프라를 제공하는 Stella IT 입니다.',
          url: 'https://stella-it.com'
        }
      ],
      currentSponsor: {},
      openSponsorModal: false
    }
  },
  mounted () {

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
  :root {
    --looping-rainbow: linear-gradient(to right, #fc450e, #ffcf73, #fffb77, #cfff72, #b5ffec, #a8ffff, #e3ddff, #a8ffff, #b5ffec, #cfff72, #fffb77, #ffcf73, #fc450e);
  }
  .creative-gradient {
    font-size: 5em;

    background-image: var(--looping-rainbow);
    background-size: 200%;
    background-position: 0;

    animation: creative-gradient-move-right 5s ease-in-out infinite;

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 700px) {
    .creative-gradient {
      font-size: 4em;
    }
  }
  @media (max-width: 550px) {
    .creative-gradient {
      font-size: 3em;
    }
  }
  @media (max-width: 450px) {
    .creative-gradient {
      font-size: 2em;
    }
  }

  .drop-shadow {
    filter: drop-shadow(0 .07em .2rem rgba(127,127,127,1));
  }
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  @keyframes creative-gradient-move-right {
    0% { background-position: 0%; }
    25% { background-position: 100%; }
    50% { background-position: 100%; }
    75% { background-position: 0%; }
    100% { background-position: 0%; }
  }
</style>
