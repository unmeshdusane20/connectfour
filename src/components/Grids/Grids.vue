<template>
  <div class="gridWrapper">
    <div class="grids">
      <div class="row" v-for="(row, rowKey, rowindex) in grid.matrix" :key="rowKey">
        <div class="cell"
        @click="onClickCell($event, cell)"
        :class="{
          'empty': cell.value == 0,
          'hover-true': cell.hover,
          'red': cell.value == 1,
          'green': cell.value == 2 }" :data-value="cell.value" :data-row="rowindex" :data-col="index"
        v-for="(cell, colKey, index) in row" :key="colKey">
        </div>
      </div>
    </div>
    <div>{{selectedPlayer}}</div>
  </div>
</template>
<script>
  export default {
    name: 'Grids',
    props: ['players'],
    data () {
      return {
        grid: {
          rows: 6,
          cols: 7,
          matrix: [],
          gameStarted: false,
          nextTurn: 1
        },
        selectedPlayer: null
      }
    },

    methods: {

      // draw grid
      drawBoard () {
        for (var row=0; row< this.grid.rows; row++){
          this.grid.matrix[row] = []
          for (var col=0; col< this.grid.cols; col++){
            this.grid.matrix[row][col] = {
              value: 0,
              row: row,
              col: col,
              hover: false,
              click: false,
              player: null
            }
          }
        }
      },

      // check wiiing cell on click
      checkWinner (item) {

      },

      togglePlayer () {
        var _this = this
        if(this.selectedPlayer.index) {
          this.selectedPlayer = {
            index: 0,
            player: _this.players[0]
          }
        } else {
          this.selectedPlayer = {
            index: 1,
            player: _this.players[1]
          }
        }
      },


      onClickCell(event, item) {
        var column = [];
        for(var i=0; i<this.grid.matrix.length; i++){
          if(this.grid.matrix[i][item.col].value == 0)
            column.push(this.grid.matrix[i][item.col]);
        }

        var _last = column[column.length-1]
        //make a copy of the row
        const newRow = this.grid.matrix[_last.row].slice(0)
        // update the value
        newRow[_last.col].value = this.grid.nextTurn
        newRow[_last.col].hover = false
        newRow[_last.col].player = this.selectedPlayer
        // update it in the grid
        this.$set(this.grid.matrix, _last.row, newRow)
        this.grid.nextTurn = this.grid.nextTurn == 1 ? 2 : 1

        //check winner from current cell
        this.checkWinner(_last)

        // toggle selected player if winner not found
        this.togglePlayer()

      },

      initializePlayer () {
        this.selectedPlayer = {
          index: 0,
          player: this.players[0]
        }
      },

      initialize () {
        this.gameStarted = true
        this.initializePlayer ()
        this.drawBoard ()
      }

    },

    created () {
      this.initialize ()
    }
  }
</script>
<style>
  .grids {
    background: #7367F0;
      margin: 0 auto;
      display: inline-block;
      font-size: 0;
      border-radius: 10px;
  }
  .cell {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 5px;
  }
</style>