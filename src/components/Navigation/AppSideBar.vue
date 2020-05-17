<template>
  <div class="appSidebar">
    <div class="brand">
      Connect <span>4</span>
    </div>

    <ul class="sideMenu">
      <li @click="onClickNewGame">New Game</li>
      <li @click="onClickQuitGame">Quit Game</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AppSideBar',
  data () {
    return {

    }
  },

  methods: {
    onClickNewGame () {
      this.EventBus.$emit('PlayAgain')
    },

    onClickQuitGame () {
      this.EventBus.$emit('quitGame')
    }
  }
}
</script>
<style>

.sideMenu {
  margin-top: 30px;
}
.sideMenu li {
  list-style-type: none;
  padding: 15px 10px;
  background: #000;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
}
</style>