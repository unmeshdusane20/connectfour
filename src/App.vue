<template>
  <div id="app" class="app">
      <div class="appSidebar">
        <div class="brand">
          Connect <span>4</span>
        </div>
      </div>
      <div class="appSidePanel">
        <players :players="players"></players>
        <Grids :players="players"></Grids>
        <Winner v-if="winner.isWinner" :winner="winner"></Winner>
      </div>

  </div>
</template>

<script>
import grids from './components/Grids/Grids'
import Players from './components/Players/Players'
import Winner from './components/Players/Winner'
export default {
  name: 'app',
  components: {
    'Grids': grids,
    'Players': Players,
    'Winner': Winner
  },
  data () {
    return {
      grids: {
        row: 6,
        col: 7
      },
      winner: {
        isWinner: false,
        player: null
      },
      players: [{
          name: 'Unmesh 1',
          color: '#ff0000'
        }, {
          name: 'Unmesh 2',
          color: '#00ff00'
        }]
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
    }
  },

  created () {
    this.EventBus.$on("PlayAgain", this.resetGame)
    this.EventBus.$on("onWinnerDeclare", this.onWinnerDeclare)
  },

  beforeDestroy(){
    this.EventBus.$off("PlayAgain", this.resetGame)
    this.EventBus.$off("onWinnerDeclare", this.onWinnerDeclare)
  }
}
</script>
