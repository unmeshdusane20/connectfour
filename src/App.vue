<template>
  <div id="app" class="app">
      <AppSideBar :gamesettings="gameSettings" v-if="gameSettings.newgame"></AppSideBar>

      <div v-if="gameSettings.newgame" class="appSidePanel">
        <players :players="players"></players>
        <Grids :players="players"></Grids>
        <Winner v-if="winner.isWinner" :winner="winner"></Winner>
      </div>

      <Welcome v-if="!gameSettings.newgame" :gameSettings="gameSettings"></Welcome>
  </div>
</template>

<script>
import AppSideBar from './components/Navigation/AppSideBar'
import Welcome from './components/Players/Welcome'
import grids from './components/Grids/Grids'
import Players from './components/Players/Players'
import Winner from './components/Players/Winner'
export default {
  name: 'app',
  components: {
    'Grids': grids,
    'Players': Players,
    'Winner': Winner,
    'AppSideBar': AppSideBar,
    'Welcome': Welcome
  },
  data () {
    return {
      grids: {
        row: 6,
        col: 7
      },

      gameSettings: {
        newgame: false
      },
      winner: {
        isWinner: false,
        player: null
      },
      players: null
    }
  },
  methods: {
    onWinnerDeclare (cell) {
      console.log(cell)
      if(cell != null) {
        this.winner = {
          isWinner: true,
          player: cell.player
        }
      }
    },

    resetGame () {
      this.winner = {
        isWinner: false,
        player: null
      }
    },

    onStartGame (item) {
      this.gameSettings.newgame = item.start
      this.players = item.players
    },


    onQuitGame () {
      this.gameSettings.newgame = false
      this.players = null
    }

  },

  created () {
    this.EventBus.$on("PlayAgain", this.resetGame)
    this.EventBus.$on("onWinnerDeclare", this.onWinnerDeclare)
    this.EventBus.$on("start-game", this.onStartGame)
    this.EventBus.$on("quitGame", this.onQuitGame)
  },

  beforeDestroy(){
    this.EventBus.$off("PlayAgain", this.resetGame)
    this.EventBus.$off("onWinnerDeclare", this.onWinnerDeclare)
    this.EventBus.$off("start-game", this.onStartGame)
    this.EventBus.$off("quitGame", this.onQuitGame)
  }
}
</script>
