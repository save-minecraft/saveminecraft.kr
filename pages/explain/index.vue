
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        p.inline-block.neodgm.text-4xl 셧다운제와 마인크래프트
      p.text-2xl.mt-4 현재 마인크래프트를 둘러싸고 일어나고 있는 일을 설명합니다.

    article.p-4.max-w-6xl.m-auto
      h1.lv1.text-2xl.mb-2 어쩌다 마인크래프트는 성인 게임이 되었나요?
      p 지난해 10월 21일, 마인크래프트의 개발사 Mojang Studios는 Java Edition의 계정 시스템을 Microsoft 계정으로 올해 안에 통합할 것을 예고하였습니다.
      p Minecraft: Java Edition이 사용하던 Mojang 계정은 기존부터 2차인증, 적절하지 않은 인증 토큰 인증방식으로 인해, 보안적으로 취약한 설계를 가지고 있었습니다.
      p 이에 따라, Mojang Studios는 계정 해킹등의 문제를 인지하고, 이를 강화하기 위하여 이를 모두 Microsoft 계정으로 이관하기로 결정하였습니다.
      .mt-8
      h2.lv1.text-xl.mb-2 콘솔 네트워크 서비스, Xbox Live 그리고 셧다운제
      p Microsoft는 기존부터 자사의 콘솔 및 게임 서비스를 Xbox Live로 통합하고 있었고, 이는 Minecraft 또한 이 방침을 따라 Microsoft의 게임 플랫폼 시스템인 Xbox Live로 통합될 예정이었습니다.
      p 그러나, 한국의 경우 미성년자에게는 새로운 Xbox Live에서 계정을 만들 수가 없게 됩니다.
      p.mt-2 한국에서는 2011년 11월 20일에 일부로 셧다운제를 시행하게 됩니다. Microsoft, Sony 그리고 Nintendo 등의 국제적인 개발자들은, 다른 나라에서는 한번도 보지 못한 정책에 어떻게 대처할지 난관에 빠집니다. 글로벌 게임 서비스 대다수가 이러한 발상에 대해서는 고려하지 않고 만들어 졌기 때문이었습니다.
      p 입법 당시에서도 게임 운영사가 이를 쉽게 구현할 수 없다는 점에서 문제가 되었으나, 입법 당시에는 이를 "이미 온라인 서비스에는 본인인증을 필수로 구현하게 되어있으니, 이를 구현하는 것은 쉽다." 라고 일방적인 태도를 보였습니다.
      p.mt-2 이러한 난관에 빠지자, Nintendo는 한국 기종의 Nintendo Network 미대응 그리고 Nintendo Switch Online 18세 이하 가입 불가, Sony는 PlayStation Network 18세 이하 가입 불가, 그리고
        span.font-bold Xbox Live가 한국 사용자 18세 이하 가입 불가하도록 하는 조치
        | 를 통해, 대부분의 해외 인터넷 게임 사업자는 울며 겨자먹기로 미성년자는 네트워크 서비스를 이용할 수 없게 차단 하는 방식으로 변경되었습니다.
      p.mt-8
      h2.lv1.text-xl.mb-1 Xbox Live로 인한 후 폭풍
      p 2020년 12월 이후 가입한 Minecraft 계정은 기본적으로 Microsoft 계정으로 생성하도록 되어있습니다. 그러나, 한국에서는 미성년자의 Xbox Live 가입이 전혀 불가능 하기 때문에, 이는 가입하더라도, Xbox Live를 사용 할 수 없다는 메세지만 뜰 뿐 런쳐에서 게임을 다운로드 할 수도 없는 상태가 되어버립니다.
      p 이에 따라 Mojang Studios는 Minecraft 공식 홈페이지에,
        span &nbsp;
        span.font-bold 대한민국에 거주하고 있는 플레이어의 경우, 19세 이상이어야만 마인크래프트를 구매하거나 플레이 할 수 있습니다.
        | 라고 표기까지 되어있는 상황입니다.
      p.mt-8
      h2.lv1.text-xl.mb-1 우리 마인크래프트 공간 및 단체 9곳의 공동 성명문과 공론화
      p 현재 우리들의 마인크래프트 공간 및 국내 마인크래프트 관련 단체 9곳은 함께
        | &nbsp;
        a.text-blue-500(href="https://cafe.naver.com/minecraftgame/1817994") 공동 성명문을 대표 발의
        | 하고, 청와대 국민 청원, 국회 국민 동의 청원을 게재하였습니다.
      p 한국 마인크래프트의 답답한 현실을 널리 퍼트려 주시고, 공론화 해 주세요. 게이머들이 한마음 한 뜻으로 의견을 모은다면, 이 암울한 상황을 타개할 수 있을 것입니다.
      .mt-12
      div.text-lg
        p.font-semibold.text-center 잘못된 게임 규제, 그 중에서 셧다운제를 폐지하는 것이 모든 정상화의 첫걸음이 아닐까 싶습니다.
        p.text-center 마인크래프트 뿐만이 아니라 모든 게임과 게이머를 위해, 이 위기를 기회 삼아 이 어처구니 없는 사건의 정상화를 위해 노력해 주셨으면 합니다.
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  head () {
    const title = '셧다운제, 그리고 마인크래프트'
    const description = '저희가 셧다운제 폐지를 위해 나아가는 이유를 알려드립니다.'

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
