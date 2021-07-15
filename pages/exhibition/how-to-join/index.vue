
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        h1.inline-block.neodgm.text-4xl 어떻게 접속하나요?

    .mt-4
    div.p-4.max-w-6xl.m-auto
      h2.lv1.text-2xl 준비물
      p.text-sm 클릭하면 준비물에 대한 더 자세한 설명을 볼 수 있습니다.

      .mt-4
      .grid.grid-cols-1.gap-4(class='lg:grid-cols-3')
        .group.block.rounded-lg.p-4.bg-gray-200.transition.cursor-pointer(@click='openPrerequisite(req)' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg' v-for='req in prerequisites')
          .flex.justify-between.flex-col.h-full
            div
              p.leading-6.font-medium(class='group-hover:text-white')
                i.mr-2(v-if='req.iconClass' :class='req.iconClass')
                | {{ req.name }}
            div.mt-2
              p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200' v-if="req.caveat") {{ req.caveat }}

    div.p-4.max-w-6xl.m-auto
      h2.lv1.text-2xl 1. 마인크래프트 런처를 다운로드 받아 실행니다.
      p 마인크래프트를 실행하기 위해서는 마인크래프트 공식 홈페이지에서 런처를 다운로드 받아 컴퓨터에 실행 해야 합니다.
      p 자신의 컴퓨터 환경에 맞는 런처를 다운받아 실행 해 주세요.

      .mt-4
      a.btn.bg-green-600.text-white.text-sm(href='https://www.minecraft.net/ko-kr/download' class="hover:bg-green-800")
        i.fas.fa-download.mr-2
        | 런처 다운로드

      .mt-8
      h2.lv1.text-2xl 2. 실행 된 마인크래프트 런처에 마인크래프트 계정을 통해 로그인 합니다.
      p.text-sm.mt-2
        | 일부 마인크래프트 사용자 분들 (Microsoft 계정)으로 이관 또는 신규 가입한 경우, 성인인증이 필요할 수도 있습니다. 이 경우,
        a.text-blue-500(href="https://www.xbox.com/ko-KR/verifyage") Xbox Live 성인 인증 페이지
        | 에서 성인인증을 진행해 주세요.

      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/install_001.png")

      .mt-8
      h2.lv1.text-2xl 3. 마인크래프트 버전을 (1.16.5) 으로 설정합니다.

      h3.text-xl.mt-4 1. 설치 설정을 클릭합니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/install_003.png")

      h3.text-xl.mt-4 2. New Installation을 클릭합니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/install_004.png")

      h3.text-xl.mt-4 3. 버전을 release 1.16.5 로 설정합니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/install_005.png")

      h3.text-xl.mt-4 4. 플레이를 클릭하여 런처 메인 화면으로 다시 돌아갑니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/install_006.png")

      h3.text-xl.mt-4 5. 좌측 하단의 버전 부분을 (대부분, 최신 릴리즈 라고 적혀있습니다.) 클릭합니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/install_007.png")

      h3.text-xl.mt-4 6. 새로 만든 설정을 클릭하고, 플레이를 누릅니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/install_008.png")

      .mt-8
      h2.lv1.text-2xl 4. 마인크래프트가 실행 하고, 멀티플레이어 (Multiplayer) 버튼을 누릅니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/ingame_001.png")

      .mt-8
      h2.lv1.text-2xl 5. 직접 접속을 누른 후, saveminecraft.kr 을 입력합니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/ingame_002.png")
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/ingame_003.png")

      .mt-8
      h2.lv1.text-2xl 6. 서버 참여하기를 누릅니다.
      img.mt-2.max-w-56.m-auto(src="/assets/how-to-join/images/ingame_004.png")

      .mt-8
      h2.lv1.text-2xl 7. 전시장을 즐깁니다.

      //-
        TODO: 여기에 마인크래프트 버전 설정 방법과 인 게임에서 어떻게 해야 하는 지 상세하게 작성

    modal(v-show="openModal" @close="openModal = !openModal")
      template(#header)
        h1.text-lg.font-bold {{ modal.title }}
      template(#body)
        template(v-if="modal && modal.description" v-for="line in splitLines(modal.description)")
          p.text-sm {{ line ? line : "&nbsp;" }}

      template(#footer)
        .flex.justify-between
          div
            a.btn.bg-green-600.text-white.text-sm(v-if="modal && modal.url" :href='modal ? modal.url : "#"' class="hover:bg-green-800")
              | {{ modal.urlText ? modal.urlText : "홈페이지 접속" }}
              i.fas.fa-arrow-right.ml-2

          div
            .btn.bg-red-700.text-white.text-sm.cursor-pointer(class="hover:bg-red-800" @click="openModal = false")
              i.fas.fa-times.mr-2
              | 닫기

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      prerequisites: [
        {
          name: 'Minecraft: Java Edition 계정',
          iconClass: 'fas fa-user-circle',
          caveat: '만약 계정이 없어 가입을 해야 하거나, MS 계정으로 이관 이후에 가입 했다면, 성인인증을 위해 본인 명의의 휴대전화가 필요합니다.',
          description: 'Minecraft: Java Edition은 정가 30,000원 입니다.\n\n적절한 결제 방법을 찾을 수 없는 경우, 주변 편의점에서 Minecraft 리딤 카드를 구매해 Minecraft 공식 홈페이지에서 게임과 교환 할 수 있습니다.\n\n현재 셧다운제 영향으로 인하여, 마인크래프트 Java Edition 계정이 없는 경우, 성인인증을 위한 본인 명의의 휴대전화 또는 아이핀 계정이 필요합니다.',
          urlText: '계정 만들기',
          url: 'https://www.minecraft.net/ko-kr/store/minecraft-java-edition'
        },
        {
          name: 'Minecraft를 돌릴 수 있는 최소사양을 만족하는 컴퓨터',
          iconClass: 'fas fa-desktop',
          caveat: '2012년 이후에 나온 컴퓨터는 대부분 Minecraft: Java Edition을 구동하기 위한 최소사양을 만족합니다.',
          description: '3세대 Intel Core 또는 AMD A8 APU 이상 및 OpenGL 4.4 이상을 지원하는 그래픽 카드',
          urlText: '최소사양 확인하기 (영문)',
          url: 'https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-System-Requirements-'
        },
        {
          name: '원활한 인터넷 연결',
          iconClass: 'fas fa-plug',
          caveat: '원활한 셧다운제 폐지 청원 전시회 경험을 위해, 한국 내에서 접속을 권장하며, 일부 국가에서는 접속이 불가능 할 수도 있습니다.',
          description: '셧다운제 폐지 청원 전시회 서버는 대한민국에서 운영 중이며, 시스템 보호를 위해 특수한 네트워크를 사용하고 있기에 일부 국가에서 접속이 불가능 할 수도 있습니다.'
        }
      ],
      modal: {
        title: '',
        description: '',
        url: '',
        urlText: ''
      },
      openModal: false
    }
  },
  head () {
    const title = '어떻게 접속하나요?'
    const description = '셧다운제 폐지 청원 전시회에 접속하는 방법을 여기서 확인 하실 수 있습니다.'

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
  methods: {
    openPrerequisite (req: any) {
      this.openModal = true
      this.modal.title = req.name
      this.modal.description = req.description || ' '
      this.modal.urlText = req.urlText
      this.modal.url = req.url
    },
    splitLines (string: string) {
      return string.split('\n')
    }
  }
})
</script>

<style lang="postcss">
</style>
