<template>
  <div class="gridWrapper">
    <audio controls style="display: none" ref="cellclickaudio">
       <source src="@/assets/media/cell-click.wav">
    </audio>

    <div class="grids">
      <div class="row" v-for="(row, rowKey, rowindex) in grid.matrix" :key="rowKey">
        <div class="cell animate__animated animate__tada"
        @mouseover="onHoverCell($event, cell)"
        @mouseleave="onMouseLeave($event, cell)"
        @click="onClickCell($event, cell)"
        :style="{
          background: (cell.hover && cell.value == 0) ?
                        selectedPlayer.player.color :
                          (cell.player ? cell.player.player.color : ''),
          opacity: cell.hover ? 0.8 : 1
        }"
        :class="{
          'empty': cell.value == 0,
          'animate__animated animate__jello' : cell.value == 1 || cell.value == 2
        }"
        :data-value="cell.value"
        :data-row="rowindex"
        :data-col="index"
        v-for="(cell, colKey, index) in row" :key="colKey">
        </div>
      </div>
    </div>
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
        selectedPlayer: null,
        isWinner: false
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

      onHoverCell(event, item) {
        var column = [];
        for(var i=0; i<this.grid.matrix.length; i++){
          if(this.grid.matrix[i][item.col].value == 0)
            column.push(this.grid.matrix[i][item.col]);
        }

        var _last = column[column.length-1]
        //make a copy of the row
        const newRow = this.grid.matrix[_last.row].slice(0)
        // update the value
        newRow[_last.col].hover = true
        // update it in the grid
        this.$set(this.grid.matrix, _last.row, newRow)
      },

      onMouseLeave(event) {
        var column = [];
        for(var i=0; i < this.grid.matrix.length; i++){
          var row = this.grid.matrix[i]
          for (var col = 0; col < row.length; col++) {
            if(this.grid.matrix[i][col].hover == true)
              this.grid.matrix[i][col].hover = false
          }
        }
      },


      // check wiiing cell on click
      checkWinner (item) {
        var _that = this
        var col = item.col
        var row = item.row

        var winner = null

        // check horizontal probability of winning
        function checkHorizontal () {
          // check left-right
          console.log(item)
          var isWinner = false

          if(item.col <= 3) {
            if((_that.grid.matrix[row][col].value == item.value) &&
              (_that.grid.matrix[row][col+1].value == item.value) &&
              (_that.grid.matrix[row][col+2].value == item.value) &&
              (_that.grid.matrix[row][col+3].value == item.value)) {
              console.log("win move")
              isWinner = true
            }
          }

          // check right-left
          if(item.col >= 3) {
            if((_that.grid.matrix[row][col].value == item.value) &&
              (_that.grid.matrix[row][col-1].value == item.value) &&
              (_that.grid.matrix[row][col-2].value == item.value) &&
              (_that.grid.matrix[row][col-3].value == item.value)) {
              console.log("win move")
              isWinner = true
            }
          }

          return isWinner

        }


        // check vertical probability of winning
        function checkVertical () {
          // check top-bottom
          console.log(item)
          var isWinner = false

          if(item.row <= 2) {
            if((_that.grid.matrix[row][col].value == item.value) &&
              (_that.grid.matrix[row+1][col].value == item.value) &&
              (_that.grid.matrix[row+2][col].value == item.value) &&
              (_that.grid.matrix[row+3][col].value == item.value)) {
              console.log("win row move top-bottom")
              isWinner = true
            }
          }

          // check bottom-top
          if(item.row >= 3) {
            if((_that.grid.matrix[row][col].value == item.value) &&
              (_that.grid.matrix[row-1][col].value == item.value) &&
              (_that.grid.matrix[row-2][col].value == item.value) &&
              (_that.grid.matrix[row-3][col].value == item.value)) {
              console.log("win row move bottom-top")
              isWinner = true
            }
          }
          return isWinner
        }

        function checkDiagonal () {
          // check diagonal right down
          var isWinner = false

          if(item.col <= 3 && item.row <=2) {
            if((_that.grid.matrix[row][col].value == item.value) &&
              (_that.grid.matrix[row+1][col+1].value == item.value) &&
              (_that.grid.matrix[row+2][col+2].value == item.value) &&
              (_that.grid.matrix[row+3][col+3].value == item.value)) {
              console.log("win diagonal move top - down")
              isWinner = true
            }
          }

          // check diagonal left down
          if(item.col >= 3 && item.row <=2) {
            if((_that.grid.matrix[row][col].value == item.value) &&
              (_that.grid.matrix[row+1][col-1].value == item.value) &&
              (_that.grid.matrix[row+2][col-2].value == item.value) &&
              (_that.grid.matrix[row+3][col-3].value == item.value)) {
              console.log("win diagonal move top - down minus")
              isWinner = true
            }
          }

          return isWinner
        }


        return checkHorizontal() || checkVertical() || checkDiagonal()
      },



      // toggle current player to other
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

      // click handler for cell
      onClickCell(event, item) {
        this.$refs.cellclickaudio.play()
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
        var isWinner = this.checkWinner(_last)
        if(isWinner) {
          this.EventBus.$emit('onWinnerDeclare', _last)
          return true
        }


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
        console.log("init")
        this.gameStarted = true
        this.initializePlayer ()
        this.drawBoard ()
      }

    },

    created () {
      this.initialize ()
      this.EventBus.$on("PlayAgain", this.initialize)
    },

    beforeDestroy () {
      this.EventBus.$off("PlayAgain", this.initialize)
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
    /*box-shadow: 0 0 10px 0 #000;*/
    border: 2px solid #000;
  }
  .cell {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 5px;
    background: #000;
    transition: background 0.4s ease;
  }
</style>