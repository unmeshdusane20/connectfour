<template>
  <div id="app" class="app">
    <div class="appBody">
      <!-- <players :players="players"></players> -->
      <Grids :players="players"></Grids>
    </div>
  </div>
</template>

<script>
import grids from './components/Grids/Grids'
import Players from './components/Players/Players'
export default {
  name: 'app',
  components: {
    'Grids': grids,
    'Players': Players
  },
  data () {
    return {
      grids: {
        row: 6,
        col: 7,
        gameSettings: {
          started: false,
          clear: false
        }
      },
      players: [{
          name: 'Player1'
        }, {
          name: 'Player2'
        }]
      }
  }
}
</script>
