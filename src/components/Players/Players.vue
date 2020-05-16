<template>
  <div class="players d-flex">
      <PlayerCard class="flex-grow-1" :pInfo="player" v-for="player in players">
    </PlayerCard>
  </div>
</template>
<script>
import Player from './Player'
export default {
  name: 'Players',
  components: {
    'PlayerCard': Player
  },
  props: ['players'],
  data () {
    return {

    }
  }
}
</script>
<style>
  .players {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>