<template>
  <div class="player" :style="{background: pInfo.color}">
    <span class="playerName">{{pInfo.name}}</span>
  </div>
</template>
<script>
export default {
  name: 'Player',
  props: ['pInfo'],
  data () {
    return {

    }
  }
}
</script>
<style>
.player {
  padding: 15px;
  background: #fff;
  display: inline-block;
  margin: 0 5px;
  font-size: 20px;
  text-align: center;
}

.playerName {
  padding: 20px 30px;
  background: #fff;
}
</style>