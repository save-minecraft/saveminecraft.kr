<template lang="pug">
  div
    header.p-4.max-w-6xl.m-auto
      nav.flex.justify-between.items-center
        nuxt-link(to="/")
          p.text-2xl.neodgm saveminecraft.kr
        ul.flex.justify-end.gap-4
          li
            nuxt-link(to="/exhibition") 전시회
          li
            a(href="https://cafe.naver.com/minecraftgame/1817994") 성명문

    nuxt

    footer.p-4.max-w-6xl.m-auto.mt-6
      div.items-center(class="md:flex md:justify-between")
        div
          p.font-light &copy; saveminecraft.kr
          p.text-sm Minecraft는 Mojang AB의 상표이며, saveminecraft.kr 은 Mojang AB의 공식 사이트가 아닙니다.
        div
          nuxt-link.text-blue-500.mr-2(to="/privacy") 개인정보 처리방침
          nuxt-link.text-blue-500(to="/acknowledgements") 오픈소스
</template>

<script>
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
  .bg-gray-200 {
    @apply bg-gray-800;
  }
  .bg-yellow-100 {
    background-color: rgb(20, 20, 0);
  }
}

.btn {
  @apply font-bold py-2 px-4 rounded transition;
}
</style>
