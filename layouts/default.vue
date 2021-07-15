<template lang="pug">
  div
    header.p-4.max-w-6xl.m-auto
      nav.flex.justify-between.items-center
        nuxt-link(to="/")
          p.text-2xl.neodgm saveminecraft.kr
        ul.flex.justify-end.gap-6
          li
            nuxt-link(to="/exhibition") 전시회
          li
            nuxt-link(to="/press") 보도 자료

    .bg-yellow-500.text-black.mt-4.mb-4(v-if="isIE")
      .p-6.max-w-6xl.m-auto.text-center
        p.text-2xl.mb-2
          i.fas.fa-exclamation-triangle.mr-2
          span.font-bold 잠시만요!
        p 이 브라우저에서는 saveminecraft.kr 의 일부 기능이 정상적으로 동작하지 않을 수 있습니다.
        p 다른 브라우저를 이용해서 접속해 주세요.

    nuxt

    footer.p-4.max-w-6xl.m-auto.mt-6.mb-6
      div.items-center(class="lg:flex lg:justify-between")
        div
          p.font-light &copy; saveminecraft.kr
          p.text-sm Minecraft는 Mojang AB의 상표이며, saveminecraft.kr 은 Mojang AB의 공식 사이트가 아닙니다.
        div.text-sm.mt-2(class="md:mt-0")
            nuxt-link.text-blue-500.mr-2(to="/privacy") 개인정보 처리방침
            nuxt-link.text-blue-500.mr-2(to="/acknowledgements") 오픈소스
            a.text-blue-500(href="https://github.com/save-minecraft") GitHub
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isIE: false
    }
  },
  mounted () {
    this.isIE = navigator.userAgent.includes('Trident')
  },
  methods: {
    comma (num) {
      return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
})

if (process.client) {
  (function () {
    // eslint-disable-next-line no-var
    var w = window
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function () {})('ChannelIO script included twice.')
    }

    // eslint-disable-next-line no-var
    var ch = function () {
      ch.c(arguments)
    }

    ch.q = []
    ch.c = function (args) {
      ch.q.push(args)
    }
    w.ChannelIO = ch
    function l () {
      if (w.ChannelIOInitialized) {
        return
      }
      w.ChannelIOInitialized = true

      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js'
      s.charset = 'UTF-8'

      const x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
    }
    if (document.readyState === 'complete') {
      l()
    } else if (window.attachEvent) {
      window.attachEvent('onload', l)
    } else {
      window.addEventListener('DOMContentLoaded', l, false)
      window.addEventListener('load', l, false)
    }
  })()

  // eslint-disable-next-line no-undef
  ChannelIO('boot', {
    pluginKey: 'cd2d567f-b307-4bc9-9678-b52d94f22963'
  })
}
</script>

<style lang="postcss">
html {
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  word-break: keep-all;
}

.neodgm {
  font-family: 'NeoDGM Pro', sans-serif;
}
.lv1 {
  font-family: 'Nexon Level1 Gothic', sans-serif;
}

@media (prefers-color-scheme: dark) {
  html {
    @apply bg-black;
  }
  body {
    @apply text-gray-300;
  }
  .bg-white {
    background-color: rgba(7, 9, 15, var(--tw-bg-opacity));
  }
  .bg-gray-100 {
    @apply bg-gray-900;
  }
  .bg-gray-200 {
    @apply bg-gray-800;
  }
  .hover\:bg-gray-200 {
    @apply hover:bg-gray-800;
  }
  .bg-yellow-100 {
    background-color: rgb(20, 20, 0);
  }
}

.btn {
  @apply font-bold py-2 px-4 rounded transition;
}
</style>
