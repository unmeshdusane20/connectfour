<template>
  <div class="overlay-panel text-center">
    <audio controls autoplay style="display: none" ref="audio">
       <source src="@/assets/media/Fantasy_Game_Background.mp3" type="audio/mpeg">
    </audio>
    <span class="animate__animated animate__bounce forever animate__repeat-1 brand">
      Connect <span>4</span>
    </span>

    <h1 class="overlay-panel-title">Welcome</h1>

    <nav class="menu">
      <ul>
        <li class="animate__animated animate__bounce" @click="onClickNewGame">New Game</li>
        <li>Help</li>
        <li>About</li>
      </ul>
    </nav>

    <div class="start-card" v-if="showPlayer">
      <h2 class="text-uppercase">Player details</h2>

      <div class="d-flex player-info">
        <div class="form-control-wrap">
          <label>Player 1</label>
          <input type="text" class="form-control"  v-model="players[0].name" name="player1">
        </div>
        <div class="fw-700">V/S</div>
        <div class="form-control-wrap">
          <label>Player 2</label>
          <input type="text" class="form-control" v-model="players[1].name" name="player2">
        </div>
      </div>
      <button class="btn" @click="onClickStartGame">Start Game</button>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Welcome',
  props: ['gameSettings'],
  data () {
    return {
      showPlayer: false,
      players: [{
          name: 'player1',
          color: '#fff'
      }, {
        name: 'player2',
        color: '#cc4433'
      }]

    }
  },

  methods: {
    onClickStartGame () {
      this.showPlayer = false
      var players = this.players
      this.EventBus.$emit("start-game", {
          start: true,
          players: players
      })
    },

    onClickNewGame () {
      this.$refs.audio.play()
      this.showPlayer = true
    }
  }
}
</script>
<style>
  .overlay-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.9)
  }

  .overlay-panel .brand {
    margin: 50px 0 0;
    display: inline-block;
  }

  .overlay-panel-title {
    margin: 50px 0 0;
  }

  .menu {
    text-align: center;
    list-style-type: none;
    margin: 50px 0 0;
  }

  .menu li {
    padding: 15px 5px;
    margin: 10px 0;
    font-size: 30px;
    text-transform: uppercase;
    color: #ff0;
    cursor: pointer;
    background: rgba(0,0,0,0.8);
    opacity: 0.7;
  }

  .menu li:hover {
    opacity: 1;
  }



  .start-card {
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
  }

  .start-card h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .player-info {
    margin-bottom: 30px;
  }

  .player-info .form-control-wrap {
    width: 50%    ;
    margin: 0 10px;
  }
</style>