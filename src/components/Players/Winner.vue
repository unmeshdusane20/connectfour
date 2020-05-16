<template>
  <div class="winner-card">
    <span class="winner-icon material-icons">
      emoji_events
    </span>
    <h1>Congratulations</h1>
    <h2>...{{ winner ? winner.player.player.name : ''}} Won...</h2>

    <button class="btn" @click="playAgain">Play Again</button>
  </div>
</template>
<script>
export default {
  name: 'Winner',
  props: ['winner'],
  methods: {
    playAgain () {
      this.EventBus.$emit('PlayAgain')
    }
  }
}
</script>
<style>
  .winner-card {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    left: 50%;
    margin-left: -150px;
    z-index: 10;
    background: #fff;
    text-align: center;
    color: #000;
  }

  .winner-card h1 {
    font-size: 40px;
    color: #f00;
    margin: 20px 0;
  }

  .winner-card h2 {
    font-size: 30px;
    margin: 10px 0;
  }
  .winner-icon {
    font-size: 12 0px;
    color: #ffff00;
  }
</style>