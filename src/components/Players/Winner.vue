<template>
  <div class="winner-card">
    <audio controls style="display: none" ref="winneraudio">
       <source src="@/assets/media/winner.wav">
    </audio>

    <span class="winner-icon material-icons">
      emoji_events
    </span>
    <h1 class="text-uppercase fw-600">Congratulations</h1>
    <h2  class="text-capitalize winner fw-700">{{ winner.isWinner ? winner.player.player.name : ''}}</h2>
    <p class="p-text text-capitalize tag-line">"Winner Winner Chiken Dinner"</p>
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
  },

  created () {
    controls.log(this.$refs)
  },

  mounted () {
    this.$refs.winneraudio.play()
    console.log(this.$refs)
  }
}
</script>
<style>
  .winner-card {
    position: absolute;
    border-radius: 10px;
    padding: 20px;
    width: 50%;
    z-index: 10;
    background: #fff;
    text-align: center;
    color: #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .winner-card h1 {
    font-size: 30px;
    color: #f00;
    margin: 20px 0 5px;
    text-transform: uppercase;
  }

  .winner-card h2 {
    font-size: 30px;
    margin: 10px 0 20px;
  }

  .winner-card .p-text{
    font-size: 16px;
  }

  .winner-icon {
    font-size: 120px;
    color: #ffff00;
  }

  .winner {
    font-weight: 700;
  }



  .tag-line {
    font-weight: 600;
    color: #f00;
    margin-bottom: 20px;
  }


</style>