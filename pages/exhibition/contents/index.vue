
<template lang="pug">
  div
    .my-10.mx-2.p-4.text-center
      .drop-shadow
        p.inline-block.neodgm.text-4xl 전시 내용

    .mt-4
    div.p-4.max-w-6xl.m-auto.text-center
      p 이번 셧다운제 폐지 청원 전시회에서는, 여러 마인크래프트 커뮤니티에서 참여하여 주신 마인크래프트
      p 그리고 게임의 가치를 보여줄 수 있는 작품들을 한 곳에 모아 전시하였습니다.

      .mt-8
      ul.grid.grid-cols-2.gap-4(class='lg:grid-cols-4')
          .group.block.rounded-lg.p-4.bg-gray-200.transition(@click='openExhibit(exhibit)' v-for='exhibit in exhibits' class='hover:bg-green-500 hover:border-transparent hover:shadow-lg')
            .flex.justify-between.flex-col.h-full.cursor-pointer
              div
                img.h-10(:src="exhibit.img" v-if="exhibit.img")
                p.leading-6.font-medium(class='group-hover:text-white') {{ exhibit.title }}
              div
                p.text-sm.font-medium.text-gray-500(class='group-hover:text-green-200') {{ exhibit.createdBy }}

    modal(v-show="openModal" @close="openModal = !openModal")
      template(#header)
        h1.text-lg.font-bold {{ modal.title }}
        p.mt-2(v-if='modal.subtitle')
          span.font-bold.mr-1 부제:
          | {{ modal.subtitle }}
        p.text-sm.mt-4
          span.font-bold.mr-1 제작자:
          | {{ modal.createdBy }}
      template(#body)
        template(v-if="modal && modal.description" v-for="line in splitLines(modal.description)")
          p.text-sm.mt-2 {{ line ? line : "&nbsp;" }}

      template(#footer)
        .flex.justify-between.mt-4
          div
            a.btn.bg-green-600.text-white.text-sm(v-if="modal && modal.url" :href='modal ? modal.url : "#"' class="hover:bg-green-800")
              | {{ modal.urlText ? modal.urlText : "설명 웹페이지 접속" }}
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
      notice: '',
      exhibits: [
        {
          title: '시즌레스 오브제 모빌',
          createdBy: '라플레팀',
          description: `아기가 모빌이 흔들리거나 소리를 내는 것을 보고 관심을 가지는 장난감중 하나로 일반적으로 아기용 침대에 누워서 천장에 달려있는 모빌을 바라보는 것을 빗대어 마인크래프트라는 게임에 접목시켜보았습니다. 
아기들이 모빌을 보고 자란듯이 많은 아이들은 해외든 국내에서든 마인크래프트란 게임으로 다양한 활동과 보이는 방송에서 많이 접하고 자유로운 게임속에서 꿈도 펼쳐보고 어린나이에 현실에서는 접하지 못할 건축이나 많은 분야를 경험해보면서 상상력도 풍부해진다고합니다.
이러한 좋은 활동에 교육용으로 쓰는 해외와는 다르게 19세 미만의 아이들은 못하게 한다는 것에 저희 라플레 팀도 한마음 한뜻으로 빠르게 기획하여 작업기간 이틀만에 완성해 올립니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1819142'
        },
        {
          title: 'AD - 206',
          createdBy: '애드지',
          description: 'AD - 206은 상상 속에 있는 미래형 우주선입니다.\nAD - 206 이름 뜻은 ADG에 AD를 가져와 뒤에 숫자를 붙여 만든 이름입니다.',
          url: 'https://cafe.naver.com/minecraftgame/1819626'
        },
        {
          title: '아기자기한 펫들',
          createdBy: '적월',
          description: '그동안 만든 아기자기한 펫들을 전시하였습니다',
          url: 'https://cafe.naver.com/minecraftgame/1818789'
        },
        {
          title: '서울특별시',
          createdBy: 'SEOUL Team',
          description: `서울에 있는 일부 건축물이 제작되여 있습니다. 외관은 아직 다 완성이 된 것이 아닌, 일부만 되어 있고 전시 건물은 총 5개 [서울특별시청-서울시도서관-서울광장, 63빌딩, 청와대, 서울역, kbs 본관&별관, 청계천 일부구간] 등이 있습니다.
비록 게시글에 있는 모두를 전시하지 못 했지만 전시된 건물이라도 이쁘게 보셨으면 좋겠습니다!`,
          url: 'https://cafe.naver.com/minecraftgame/1819313'
        },
        {
          title: '0 사향(CivetKitty)',
          createdBy: '바윗돌 깨뜨려',
          description: '한국 동요를 바탕으로 만든 작품입니다. 바윗덩어리가 점점 더 작은 낱알들로 쪼개지는 것을 표현한 가사에서 영감을 받아서 마인크래프트에 있는 돌 절단기 아이템으로 조합법을 추가했습니다.\n서바이벌 환경에서의 실용성도 고려하여 피스톤을 이용한 자동화까지 염두를 하고 설계하였습니다.',
          url: 'https://cafe.naver.com/minecraftgame/1819242'
        },
        {
          title: '도화 걷길',
          createdBy: '블록을 쌓는 사람들',
          description: `경의선 숲길을 모티브로 하여 제작한 폐철도공원입니다. 도심에서 느낄 수 있는 자연의 공간, 쉼터의 공간을 표현하였습니다.  구역마다 다른 컨셉, 다른 표현을 통해 길을 걸으며 새로운 분위기를 느낄 수 있도록 만들어 보았습니다. 낮과 밤, 새벽의 시간마다 달라지는 공원의 색다른 풍경들을 감상해보세요. 코로나로 인해 외부활동을 자제하여야 하는 요즘, 이 작품을 감상하시며 조금이라도 산책을 하는 기분이 들으셨으면 좋겠습니다.
원활한 감상을 위해서는 seus ptgi e12나 ptgi e 계열 쉐이더[고사양이므로 성능이 안좋은 컴퓨터에서는 작동이 어려울 수 있습니다.]와 24 이상의 렌더 거리를 권장해드립니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1820021'
        },
        {
          title: '컨테이너선 Los Angeles',
          createdBy: '사비나루',
          description: ` 머스크사의 Triple E Class와 HMM의 알헤시라스를 모티브로 제작한 창작 컨테이너선입니다. 세계의 핏줄처럼 코로나 시대에도 끊임없이 화물을 나르는 화물선을 표현하였습니다. 드넓은 바다를 항해하는 초대형 컨테이너선의 이곳저곳을 감상해 보세요. 현대 물류의 정점을 찍은 컨테이너선, 이 컨테이너선을 감상하면서 자유로운 미래를 꿈꿀 수 있으시면 좋겠습니다. 
원활한 감상을 위해서는 SEUS PTGI E12 셰이더와 16 이상의 렌더 거리를 설정하는것을 권장합니다. (저사양의 컴퓨터에서는 해당 셰이더의 작동이 어려울 수 있습니다.)`,
          url: 'https://cafe.naver.com/minecraftgame/1819978'
        },
        {
          title: '베르세르크',
          createdBy: '하드테일',
          description: `만화 베르세르크에 등장하는 "가츠"라는 남자 주인공의 동상 건축입니다.
얼마전 만화작가님의 서거를 추모하기 위해 만화의 일부분을 입체적으로 건축하여 작가님의 추모 기념비로 제작 해 보았습니다.
명암과 마인크래프트 블럭들을 이용한 표현 방법이 이 동상건축의 관전포인트가 되겠습니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1819693'
        },
        {
          title: '공주열차',
          createdBy: '디코',
          description: '기차는 사람이나 사물을 옮기기 위해 만들어진 이동수단입니다.​ 이 역할을 확장하여 사람이 먹고살며 이동하는 큰 기차를 만들어 보게 되었습니다.\n외부로는 기차의 로망이라 할수있는 증기기관차로 표현하였고, 내부로는 기차속의 편의사항을 확대하여 사람들이 먹고, 자고, 생활을 하는 공간을 표현했습니다.',
          url: 'https://cafe.naver.com/minecraftgame/1820016'
        },
        {
          title: '몰락한 드래곤',
          createdBy: '보라곰탱이',
          description: '리그오브 레전드의 몰락 컨셉을 사용하여 만든 드래곤입니다',
          url: 'https://cafe.naver.com/minecraftgame/1820206'
        },
        {
          title: '만유인력, 몬테카를로 방법, 자연선택',
          createdBy: '냉동펭귄',
          description: `수학적인 부분들을 마인크래프트로 표현하고 시각화한 작품들입니다. 사실 수학을 별로 좋아하진 않지만, 책에서 읽은 흥미로운 내용들을 이해하고 직접 구현해보고 싶었습니다.
중학교 2학년이라는 어린 나이로 이러한 작품들을 만들 수 있었던 이유는 마인크래프트가 누구나 간편하게 다룰 수 있는 엔진 이상의 역할을 했기 때문인 것 같습니다`,
          url: 'https://cafe.naver.com/minecraftgame/1818997'
        },
        {
          title: 'Cage of Heaven',
          createdBy: '여우비',
          description: '갇혀있는 현실속에서 자유로워지고 싶어하는 마음을 표현하고자 새장모양으로 작품을 제작하게 되었습니다. 상상속의 아이디어를 마크로 통해 표현함으로써 창의력을 키울수 있어서 좋았습니다.',
          url: 'https://cafe.naver.com/minecraftgame/1820019'
        },
        {
          title: '테마파크',
          createdBy: '메갓',
          description: `마인크래프트로 여러 컨셉들을 리소스팩으로 테마파크 식으로 제작했습니다.
리소스팩을 이용한 다양한 테마를 만들어 기존 마크보다 더 눈을 즐겁게 할수있습니다`,
          url: 'https://cafe.naver.com/minecraftgame/1819670'
        },
        {
          title: '실생활 물건들',
          createdBy: '미초',
          description: '우리가 흔히들 사용하는 스마트폰과 같은 물건들을 보다 정교하고 세세하게 표현하고 싶어서 만들었습니다.\n마크를 통하여 세상을 조금 더 세세하게 바라보자는 계기로 해상도가 높고 디테일 한 작품을 표현하고 싶어 차근차근 천천히 만들었던 모델링들을 올려보았습니다.',
          url: 'https://cafe.naver.com/minecraftgame/1819303'
        },
        {
          title: '경매장 플러그인 외 2종',
          createdBy: '일천',
          description: `경매장 플러그인 - 다수의 유저간의 거래를 도와주는 플러그인입니다.
랜덤PvP플러그인 - 랜덤PvP라는 컨텐츠에 사용되었던 플러그인입니다. 매 판마다 다양한 변수가 존재해 재미를 줄 수 있습니다.
직업 플러그인 - 마인크래프트에 없었던 다양한 직업들을 추가해 주는 플러그인입니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1819008'
        },
        {
          title: '인천 송도 센트럴파크',
          createdBy: '심플',
          description: `요즈음 코로나19 팬데믹으로 인하여 국내여행조차 힘든 상황에도 송도 센트럴파크의 멋진 광경을 즐길 수 있도록 마인크래프트를 메타버스로 활용하여 인천 송도 센트럴파크를 마인크래프트 내에 구현하였습니다.
센트럴파크의 산책로를 거닐며 자연과 주변 고층건물들의 조화를 중심으로 관람하시는 것을 추천드립니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1819159'
        },
        {
          title: '메이플스토리 블랙헤븐',
          createdBy: '심플',
          description: `이 작품은 '메이플스토리'라는 게임의 '블랙헤븐'이라는 스토리를 건축으로 재현한 작품입니다.
두 함대가 격렬히 전투하는 모습을 3차원 구조로 구현하여 보다 현장감을 느낄 수 있게 하였습니다.
두 세력 간 색감이 대비되도록 제작하였으니 이를 중심으로 관람하시는 것을 추천드립니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1819880'
        },
        {
          title: '무릉선향도',
          createdBy: '감튀',
          description: `동양 철학인 도교에 등장하는 무릉도원을 현대적으로 재 해석한 작품입니다.
제목에서도 알 수 있듯 여러 동양화들에서 모티프를 얻어 제작했으며 작품자체도 한 폭의 그림처럼 보여지게 의도하여 제작했습니다.
팬데믹 상황으로 인해 활동이 제한된 시대에서 많은 분들이 메타버스에서 건축된 무릉도원으로 인해 답답한 일상에 조금이나마 환기를 하실 수 있으면 좋겠습니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1820185'
        },
        {
          title: 'The origin of creation: Dam coast',
          createdBy: '김치 보이즈',
          description: `"어느 바다의 한가운데, 바다를 가로막는 거대한 벽으로 둘러싸인 도시가 있다.  그리고 세상에 존재하는 대부분의 지식, 부, 사상, 아름다움, 꿈, 열정, 사랑은 그곳에 있다. "
3명의 한국인 마인크래프트 건축가로 구성된 김치 보이즈가 1년 5개월 동안 영혼과 열정을 쏟은 최대의 프로젝트이자 3번째로 대중에게 공개한 작품입니다.
제작 초기에 작품의 컨셉과 구성을 설정하고 시작하지 않았고, 제작 과정에서 3인이 즉흥적으로 떠올린 아이디어들을 있는 그대로 과감하게 표현하며 진행된 작품입니다.
"창조의 기원 : 댐 코스트"는 1년 5개월간의 그들의 즉흥적인 발상들이 모여서 만들어진 하나의 거대한 작품이자 세계입니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1819755'
        },
        {
          title: '전사의 검 / 드래곤',
          createdBy: 'BONI',
          description: `마인크래프트에서 창작이라 한다면 중세 , 판타지 , 모던 등 여러 장르가 있습니다 전 그중에도 판타지적인 부분을 만들어보았습니다. 제목에도 직설적으로 나와있는 듯이 우리가 쉽게 알고 접할 수 있는 것을 제작하였습니다.
드래곤이라는 쉽게 접할 수 있는 상상속 괴물을 표현하였으며 가장 쉽게 만들고 접할 수 있는 무기를 제작하였습니다.`,
          url: 'https://cafe.naver.com/minecraftgame/1819895'
        },
        {
          title: '안압지(동궁과 월지)',
          createdBy: '시호',
          description: `신라의 대표 궁궐 건축물인 동궁과 월지를 복원모형, 조감도등을 참고하여 제작한 작품입니다. 현재의 동궁과 월지는 1,3,5호 건물만 복원이 된 채 관광지로 많은 사람들이 놀러가곤하죠.
그렇지만 마인크래프트에서는 동궁과 월지를 복원함에 따라 신라의 멋을 느껴 보실 수 있습니다!
시원한 호숫가에서 시원한 바람, 시원한 물, 멋진 건축물 등을 보면서 스트레스를 풀어보는건 어떨까요?`,
          url: 'https://cafe.naver.com/minecraftgame/1818814'
        },
        {
          title: '103 전동차',
          createdBy: '철도청',
          description: '1964년에서부터 1984년까지 생산된, 일본 국철 시대의 살아있는 증인입니다. 당시 전후 복구로 늘어나는 통근 수요를 감당하기 위해 개발되었으며, 전성기때에는 일본 주요 도시 한복판을 누볐으며, 생산이 종료된지 25년이 지난 지금도 여러 시골 노선에선 현역으로 달리고 있답니다.',
          url: 'https://cafe.naver.com/minecraftgame/1819549'
        },
        {
          title: '205계 전동차',
          createdBy: '철도청',
          description: '103계 전동차의 전력효율을 개선한 201계 전동차가 출시되었으나, 단가가 비싸서 상용화되지 못했습니다. 국철은 싸면서도 전력 소모가 적은 차를 원했고, 1985년, 강철에서 스테인레스 차체를 사용하여 차량을 경량화하고, 전력 효율을 개선하여 차량 단가를 휙기적으로 줄이면서도 전력 효율을 높인 국철의 마지막 걸작으로 평가받습니다. 지금도 많은 차량이 현역으로 다니고 있으며, 일부 차량은 더 오래 다닐 목적으로 수선도 받았다고 합니다.',
          url: 'https://cafe.naver.com/minecraftgame/1819549'
        },
        {
          title: '207계 전동차',
          createdBy: '철도청',
          description: '민영화된 JR 니시니혼서 사철과 속도를 위해 승부하기 만들어진 차로, 통근형 차량 최초로 광폭형 차체가 적용되었으며, 최고 속도도 120km/h로 당시에도 지금에도 높은편에 속하는 차입니다. 하지만 모종의 사고로 인해 생산이 중지되었으며 현재는 그 이전에 생산된 차를 지속적으로 사용중입니다.',
          url: 'https://cafe.naver.com/minecraftgame/1819549'
        },
        {
          title: '323계 전동차',
          createdBy: '철도청',
          description: '비교적 최근인 2016년 12월, 기존 오사카 순환선에 다니던 낡은 103계와 201계 차량을 대차하기 위하여 만든 차량입니다. 가장 최근에 제작된 차량으로 차량 내에는 LCD 모니터가 탑재되어 있으며, 통근형 차량치고는 특이하게 4도어가 아닌 3도어 차량을 채택하고 있습니다. 이는 오사카 순환선에 스크린도어 설치를 위해 차량 규격을 통일하기 위해서 해당 차량을 3도어 차량으로 제작한 것입니다.',
          url: 'https://cafe.naver.com/minecraftgame/1819549'
        }
      ],
      modal: {
        title: '',
        createdBy: '',
        description: '',
        url: '',
        urlText: ''
      },
      openModal: false
    }
  },
  head () {
    const title = '전시 내용'
    const description = '셧다운제 폐지 청원 전시회에 전시되는 마인크래프트 커뮤니티에서 제작한 콘텐츠들을 소개합니다'

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
    splitLines (string: string) {
      return string.split('\n')
    },
    openExhibit (exhibit: any) {
      console.log('open exhibit', exhibit)

      this.modal.title = exhibit.title
      this.modal.description = exhibit.description
      this.modal.createdBy = exhibit.createdBy
      this.modal.url = exhibit.url
      this.openModal = true
    }
  }
})
</script>

<style lang="postcss">
</style>
