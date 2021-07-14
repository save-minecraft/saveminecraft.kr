
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        h1.inline-block.neodgm.text-4xl 전시회 접속 방법

    .mt-4
    div.p-4.max-w-6xl.m-auto
      h2.lv1.text-2xl 준비물
      p.text-sm 클릭하면 준비물에 대한 더 자세한 설명을 볼 수 있습니다.

      .mt-4
      .grid.grid-cols-1.gap-4(class='lg:grid-cols-2')
        .group.block.rounded-lg.p-4.bg-gray-200.transition.cursor-pointer(@click='openPrerequisite(req)' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg' v-for='req in prerequisites')
          .flex.justify-between.flex-col.h-full
            div
              p.leading-6.font-medium(class='group-hover:text-white')
                i.mr-2(v-if='req.iconClass' :class='req.iconClass')
                | {{ req.name }}
            div.mt-2
              p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200' v-if="req.caveat") {{ req.caveat }}

    div.p-4.max-w-6xl.m-auto
      //-
        TODO: 여기에 마인크래프트 인 게임에서 어떻게 해야 하는 지 작성

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
          caveat: '2012년 이후에 나온 컴퓨터는 대부분 Minecraft: Java Edition을 구동하기 위한 최소사양을 만족합니다. (클릭하여 자세히 보기)',
          description: '3세대 Intel Core 또는 AMD A8 APU 이상 및 OpenGL 4.4 이상을 지원하는 그래픽 카드',
          urlText: '최소사양 확인하기 (영문)',
          url: 'https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-System-Requirements-'
        },
        {
          name: '원활한 인터넷 연결',
          iconClass: 'fas fa-plug',
          caveat: '한국 내에서 접속을 권장합니다.',
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
