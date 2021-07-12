<template lang="pug">
  .drop-shadow.my-10.mx-2.p-4.text-center
    p.inline-block.neodgm.creative-gradient
      | let us be
      | creative
</template>

<script></script>

<style lang="postcss">
  :root {
    --looping-rainbow: linear-gradient(to right, #fc450e, #ffcf73, #fffb77, #cfff72, #b5ffec, #a8ffff, #e3ddff, #a8ffff, #b5ffec, #cfff72, #fffb77, #ffcf73, #fc450e);
  }

  .creative-gradient {
    font-size: 5em;

    /**
     * Improvision of linear-gradient can not be animated.
     *
     * creating rainbow linear-gradient with double the size,
     * and move the background position around
     */
    background-image: var(--looping-rainbow);
    background-size: 200%;
    background-position: 0;

    animation: creative-gradient-move-right 5s ease-in-out infinite;

    /**
     * TODO: Requires IE Fallback.
     * Even in 2021,
     * we need to support IE because it is SOUTH KOREA.
     *
     * (Add :facepalm: here)
     */
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

  @keyframes creative-gradient-move-right {
    0% { background-position: 0%; }
    25% { background-position: 100%; }
    50% { background-position: 100%; }
    75% { background-position: 0%; }
    100% { background-position: 0%; }
  }
</style>
