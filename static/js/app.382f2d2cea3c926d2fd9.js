webpackJsonp([0],{"2Et/":function(e,t,a){e.exports=a.p+"static/media/winner.886592b.wav"},"3uhy":function(e,t){},"3yR0":function(e,t){},CNRJ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"appSidebar"},[this._m(0),this._v(" "),t("ul",{staticClass:"sideMenu"},[t("li",{on:{click:this.onClickNewGame}},[this._v("New Game")]),this._v(" "),t("li",{on:{click:this.onClickQuitGame}},[this._v("Quit Game")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"brand"},[this._v("\n    Connect "),t("span",[this._v("4")])])}]};var r=a("VU/8")({name:"AppSideBar",data:function(){return{}},methods:{onClickNewGame:function(){this.EventBus.$emit("PlayAgain")},onClickQuitGame:function(){this.EventBus.$emit("quitGame")}}},n,!1,function(e){a("WJq4")},null,null).exports,s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"overlay-panel text-center"},[i("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{controls:"",autoplay:""}},[i("source",{attrs:{src:a("nScR"),type:"audio/mpeg"}})]),e._v(" "),e._m(0),e._v(" "),i("h1",{staticClass:"overlay-panel-title"},[e._v("Welcome")]),e._v(" "),i("nav",{staticClass:"menu"},[i("ul",[i("li",{staticClass:"animate__animated animate__bounce",on:{click:e.onClickNewGame}},[e._v("New Game")]),e._v(" "),i("li",[e._v("Help")]),e._v(" "),i("li",[e._v("About")])])]),e._v(" "),e.showPlayer?i("div",{staticClass:"start-card"},[i("h2",{staticClass:"text-uppercase"},[e._v("Player details")]),e._v(" "),i("div",{staticClass:"d-flex player-info"},[i("div",{staticClass:"form-control-wrap"},[i("label",[e._v("Player 1")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.players[0].name,expression:"players[0].name"}],staticClass:"form-control",attrs:{type:"text",name:"player1"},domProps:{value:e.players[0].name},on:{input:function(t){t.target.composing||e.$set(e.players[0],"name",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"fw-700"},[e._v("V/S")]),e._v(" "),i("div",{staticClass:"form-control-wrap"},[i("label",[e._v("Player 2")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.players[1].name,expression:"players[1].name"}],staticClass:"form-control",attrs:{type:"text",name:"player2"},domProps:{value:e.players[1].name},on:{input:function(t){t.target.composing||e.$set(e.players[1],"name",t.target.value)}}})])]),e._v(" "),i("button",{staticClass:"btn",on:{click:e.onClickStartGame}},[e._v("Start Game")])]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"animate__animated animate__bounce forever animate__repeat-1 brand"},[this._v("\n    Connect "),t("span",[this._v("4")])])}]};var l=a("VU/8")({name:"Welcome",props:["gameSettings"],data:function(){return{showPlayer:!1,players:[{name:"player1",color:"#fff"},{name:"player2",color:"#cc4433"}]}},methods:{onClickStartGame:function(){this.showPlayer=!1;var e=this.players;this.EventBus.$emit("start-game",{start:!0,players:e})},onClickNewGame:function(){this.$refs.audio.play(),this.showPlayer=!0}}},s,!1,function(e){a("RmcF")},null,null).exports,o={name:"Grids",props:["players"],data:function(){return{grid:{rows:6,cols:7,matrix:[],gameStarted:!1,nextTurn:1},selectedPlayer:null,isWinner:!1}},methods:{drawBoard:function(){for(var e=0;e<this.grid.rows;e++){this.grid.matrix[e]=[];for(var t=0;t<this.grid.cols;t++)this.grid.matrix[e][t]={value:0,row:e,col:t,hover:!1,click:!1,player:null}}},onHoverCell:function(e,t){for(var a=[],i=0;i<this.grid.matrix.length;i++)0==this.grid.matrix[i][t.col].value&&a.push(this.grid.matrix[i][t.col]);var n=a[a.length-1],r=this.grid.matrix[n.row].slice(0);r[n.col].hover=!0,this.$set(this.grid.matrix,n.row,r)},onMouseLeave:function(e){for(var t=0;t<this.grid.matrix.length;t++)for(var a=this.grid.matrix[t],i=0;i<a.length;i++)1==this.grid.matrix[t][i].hover&&(this.grid.matrix[t][i].hover=!1)},checkWinner:function(e){var t,a=this,i=e.col,n=e.row;return function(){console.log(e);var t=!1;return e.col<=3&&a.grid.matrix[n][i].value==e.value&&a.grid.matrix[n][i+1].value==e.value&&a.grid.matrix[n][i+2].value==e.value&&a.grid.matrix[n][i+3].value==e.value&&(console.log("win move"),t=!0),e.col>=3&&a.grid.matrix[n][i].value==e.value&&a.grid.matrix[n][i-1].value==e.value&&a.grid.matrix[n][i-2].value==e.value&&a.grid.matrix[n][i-3].value==e.value&&(console.log("win move"),t=!0),t}()||function(){console.log(e);var t=!1;return e.row<=2&&a.grid.matrix[n][i].value==e.value&&a.grid.matrix[n+1][i].value==e.value&&a.grid.matrix[n+2][i].value==e.value&&a.grid.matrix[n+3][i].value==e.value&&(console.log("win row move top-bottom"),t=!0),e.row>=3&&a.grid.matrix[n][i].value==e.value&&a.grid.matrix[n-1][i].value==e.value&&a.grid.matrix[n-2][i].value==e.value&&a.grid.matrix[n-3][i].value==e.value&&(console.log("win row move bottom-top"),t=!0),t}()||(t=!1,e.col<=3&&e.row<=2&&a.grid.matrix[n][i].value==e.value&&a.grid.matrix[n+1][i+1].value==e.value&&a.grid.matrix[n+2][i+2].value==e.value&&a.grid.matrix[n+3][i+3].value==e.value&&(console.log("win diagonal move top - down"),t=!0),e.col>=3&&e.row<=2&&a.grid.matrix[n][i].value==e.value&&a.grid.matrix[n+1][i-1].value==e.value&&a.grid.matrix[n+2][i-2].value==e.value&&a.grid.matrix[n+3][i-3].value==e.value&&(console.log("win diagonal move top - down minus"),t=!0),t)},togglePlayer:function(){this.selectedPlayer.index?this.selectedPlayer={index:0,player:this.players[0]}:this.selectedPlayer={index:1,player:this.players[1]}},onClickCell:function(e,t){this.$refs.cellclickaudio.play();for(var a=[],i=0;i<this.grid.matrix.length;i++)0==this.grid.matrix[i][t.col].value&&a.push(this.grid.matrix[i][t.col]);var n=a[a.length-1],r=this.grid.matrix[n.row].slice(0);if(r[n.col].value=this.grid.nextTurn,r[n.col].hover=!1,r[n.col].player=this.selectedPlayer,this.$set(this.grid.matrix,n.row,r),this.grid.nextTurn=1==this.grid.nextTurn?2:1,this.checkWinner(n))return this.EventBus.$emit("onWinnerDeclare",n),!0;this.togglePlayer()},initializePlayer:function(){this.selectedPlayer={index:0,player:this.players[0]}},initialize:function(){console.log("init"),this.gameStarted=!0,this.initializePlayer(),this.drawBoard()}},created:function(){this.initialize(),this.EventBus.$on("PlayAgain",this.initialize)},beforeDestroy:function(){this.EventBus.$off("PlayAgain",this.initialize)}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gridWrapper"},[i("audio",{ref:"cellclickaudio",staticStyle:{display:"none"},attrs:{controls:""}},[i("source",{attrs:{src:a("nRGj")}})]),e._v(" "),i("div",{staticClass:"grids"},e._l(e.grid.matrix,function(t,a,n){return i("div",{key:a,staticClass:"row"},e._l(t,function(t,a,r){return i("div",{key:a,staticClass:"cell animate__animated animate__tada",class:{empty:0==t.value,"animate__animated animate__jello":1==t.value||2==t.value},style:{background:t.hover&&0==t.value?e.selectedPlayer.player.color:t.player?t.player.player.color:"",opacity:t.hover?.8:1},attrs:{"data-value":t.value,"data-row":n,"data-col":r},on:{mouseover:function(a){return e.onHoverCell(a,t)},mouseleave:function(a){return e.onMouseLeave(a,t)},click:function(a){return e.onClickCell(a,t)}}})}),0)}),0)])},staticRenderFns:[]};var u=a("VU/8")(o,c,!1,function(e){a("3uhy")},null,null).exports,v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"player",style:{background:this.pInfo.color}},[t("span",{staticClass:"playerName"},[this._v(this._s(this.pInfo.name))])])},staticRenderFns:[]};var m={name:"Players",components:{PlayerCard:a("VU/8")({name:"Player",props:["pInfo"],data:function(){return{}}},v,!1,function(e){a("3yR0")},null,null).exports},props:["players"],data:function(){return{}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"players d-flex"},[this._l(this.players,function(e){return t("PlayerCard",{staticClass:"flex-grow-1",attrs:{pInfo:e}})}),this._v(" "),t("span",{staticClass:"v-s"},[this._v("V/S")])],2)},staticRenderFns:[]};var p={name:"Winner",props:["winner"],methods:{playAgain:function(){this.EventBus.$emit("PlayAgain")}},created:function(){controls.log(this.$refs)},mounted:function(){this.$refs.winneraudio.play(),console.log(this.$refs)}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"winner-card"},[i("audio",{ref:"winneraudio",staticStyle:{display:"none"},attrs:{controls:""}},[i("source",{attrs:{src:a("2Et/")}})]),e._v(" "),i("span",{staticClass:"winner-icon material-icons"},[e._v("\n    emoji_events\n  ")]),e._v(" "),i("h1",{staticClass:"text-uppercase fw-600"},[e._v("Congratulations")]),e._v(" "),i("h2",{staticClass:"text-capitalize winner fw-700"},[e._v(e._s(e.winner.isWinner?e.winner.player.player.name:""))]),e._v(" "),i("p",{staticClass:"p-text text-capitalize tag-line"},[e._v('"Winner Winner Chiken Dinner"')]),e._v(" "),i("button",{staticClass:"btn",on:{click:e.playAgain}},[e._v("Play Again")])])},staticRenderFns:[]};var g={name:"app",components:{Grids:u,Players:a("VU/8")(m,d,!1,function(e){a("CNRJ")},null,null).exports,Winner:a("VU/8")(p,h,!1,function(e){a("VTxJ")},null,null).exports,AppSideBar:r,Welcome:l},data:function(){return{grids:{row:6,col:7},gameSettings:{newgame:!1},winner:{isWinner:!1,player:null},players:null}},methods:{onWinnerDeclare:function(e){console.log(e),null!=e&&(this.winner={isWinner:!0,player:e.player})},resetGame:function(){this.winner={isWinner:!1,player:null}},onStartGame:function(e){this.gameSettings.newgame=e.start,this.players=e.players},onQuitGame:function(){this.gameSettings.newgame=!1,this.players=null}},created:function(){this.EventBus.$on("PlayAgain",this.resetGame),this.EventBus.$on("onWinnerDeclare",this.onWinnerDeclare),this.EventBus.$on("start-game",this.onStartGame),this.EventBus.$on("quitGame",this.onQuitGame)},beforeDestroy:function(){this.EventBus.$off("PlayAgain",this.resetGame),this.EventBus.$off("onWinnerDeclare",this.onWinnerDeclare),this.EventBus.$off("start-game",this.onStartGame),this.EventBus.$off("quitGame",this.onQuitGame)}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app",attrs:{id:"app"}},[e.gameSettings.newgame?a("AppSideBar",{attrs:{gamesettings:e.gameSettings}}):e._e(),e._v(" "),e.gameSettings.newgame?a("div",{staticClass:"appSidePanel"},[a("players",{attrs:{players:e.players}}),e._v(" "),a("Grids",{attrs:{players:e.players}}),e._v(" "),e.winner.isWinner?a("Winner",{attrs:{winner:e.winner}}):e._e()],1):e._e(),e._v(" "),e.gameSettings.newgame?e._e():a("Welcome",{attrs:{gameSettings:e.gameSettings}})],1)},staticRenderFns:[]},y=a("VU/8")(g,f,!1,null,null,null).exports,_=new i.a;a("x9ll");i.a.prototype.EventBus=_,i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:y},template:"<App/>"})},RmcF:function(e,t){},VTxJ:function(e,t){},WJq4:function(e,t){},nRGj:function(e,t,a){e.exports=a.p+"static/media/cell-click.9d7f99b.wav"},nScR:function(e,t,a){e.exports=a.p+"static/media/Fantasy_Game_Background.2efc9b5.mp3"},x9ll:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.382f2d2cea3c926d2fd9.js.map