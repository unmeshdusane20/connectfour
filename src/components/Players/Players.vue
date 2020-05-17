<template>
  <div class="players d-flex">
      <PlayerCard class="flex-grow-1" :pInfo="player" v-for="player in players">
    </PlayerCard>
    <span class="v-s">V/S</span>
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

  .players .v-s {
    border-radius: 50%;
    position: absolute;
    left: 48%;
    top: 10px;
    font-size: 20px;
    width: 50px;
    text-align: center;
    line-height: 48px;
    height: 50px;
    background: #ff0;
  }
</style>