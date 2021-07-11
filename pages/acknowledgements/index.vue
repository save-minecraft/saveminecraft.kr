
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        p.inline-block.neodgm.text-4xl
          | 오픈소스 프로젝트

    article.p-4.max-w-6xl.m-auto
      h1.lv1.text-2xl.mb-2
        | 사용된 오픈소스 프로젝트
      ul.grid.grid-cols-1.gap-4(class='md:grid-cols-2 lg:grid-cols-3')
        li(v-for='project in projects')
          a.group.block.rounded-lg.p-4.border.border-gray-200.transition(:href='project.url' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg')
            dl.items-center
              .flex.justify-between.flex-col(class="lg:flex-row lg:items-center")
                div
                  p.leading-6.font-medium(class='group-hover:text-white')
                    i.mr-2(:class='project.icon ? "fab fa-"+project.icon : "far fa-file-code"')
                    | {{ project.name }}
                  p.text-sm.font-medium.text-gray-700(class='group-hover:text-green-200')
                    | {{ project.license }}

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
        }
      ]
    }
  }
})
</script>

<style lang="postcss">
</style>
