
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        p.inline-block.neodgm.text-4xl 오픈소스 프로젝트

    article.p-4.max-w-6xl.m-auto
      h1.lv1.text-2xl.mb-2 사용된 오픈소스 프로젝트
      ul.grid.grid-cols-1.gap-4(class='md:grid-cols-2 lg:grid-cols-3')
        li(v-for='project in projects')
          a.group.block.rounded-lg.p-4.bg-gray-200.transition(:href='project.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg')
            dl.items-center
              .flex.justify-between.flex-col(class="lg:flex-row lg:items-center")
                div
                  p.leading-6.font-medium(class='group-hover:text-white')
                    i.mr-2(:class='project.icon ? "fab fa-"+project.icon : "far fa-file-code"')
                    | {{ project.name }}
                  p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200') {{ project.license }}

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      projects: [
        {
          name: 'Vue.js',
          license: 'MIT License',
          url: 'https://github.com/vuejs/vue',
          icon: 'vuejs'
        },
        {
          name: 'nuxt.js',
          license: 'MIT License',
          url: 'https://github.com/nuxt/nuxt.js'
        },
        {
          name: 'TypeScript',
          license: 'MIT License',
          url: 'https://github.com/microsoft/TypeScript'
        },
        {
          name: 'Node.js',
          license: 'Node.js License',
          url: 'https://github.com/nodejs/node',
          icon: 'node-js'
        },
        {
          name: 'ESLint',
          license: 'MIT License',
          url: 'https://github.com/eslint/eslint',
          icon: 'js'
        },
        {
          name: 'TailwindCSS',
          license: 'MIT License',
          url: 'https://github.com/tailwindlabs/tailwindcss'
        },
        {
          name: 'PostCSS',
          license: 'MIT License',
          url: 'https://github.com/postcss/postcss'
        },
        {
          name: 'PUG',
          license: 'MIT License',
          url: 'https://github.com/pugjs/pug'
        },
        {
          name: 'Sass',
          license: 'MIT License',
          url: 'https://github.com/sass/sass',
          icon: 'sass'
        },
        {
          name: 'Fastify',
          license: 'MIT License',
          url: 'https://github.com/fastify/fastify'
        },
        {
          name: 'Axios',
          license: 'MIT License',
          url: 'https://github.com/axios/axios'
        },
        {
          name: 'OpenJDK',
          license: 'GNU GPLv2',
          url: 'https://openjdk.java.net/',
          icon: 'java'
        },
        {
          name: 'Neo둥근모 Pro',
          license: 'SIL Open Font License',
          url: 'https://github.com/Dalgona/neodgm-pro'
        },
        {
          name: 'NEXON Lv.1 Gothic',
          license: 'SIL Open Font License',
          url: 'http://levelup.nexon.com/font/index.aspx?page=1'
        },
        {
          name: 'Pretendard',
          license: 'SIL Open Font License',
          url: 'https://github.com/orioncactus/pretendard'
        },
        {
          name: 'Spigot API',
          license: 'GNU General Public License v3',
          url: 'https://hub.spigotmc.org/stash/projects/SPIGOT'
        },
        {
          name: 'Paper',
          license: 'GNU GPLv3 or MIT License',
          url: 'https://github.com/PaperMC/Paper'
        },
        {
          name: 'Prisma 2',
          license: 'Apache 2.0 License',
          url: 'https://github.com/prisma/prisma'
        }
      ]
    }
  },
  head () {
    const title = '오픈소스 프로젝트'
    const description = 'saveminecraft.kr 그리고 전시회를 구축하기 위해 사용된 오픈소스 프로젝트입니다.'

    return {
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:site_name', name: 'og:site_name', content: 'saveminecraft.kr' },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:content', name: 'og:content', content: description },
        { hid: 'og:url', name: 'og:url', content: 'https://saveminecraft.kr' }
      ]
    }
  }
})
</script>

<style lang="postcss">
</style>
