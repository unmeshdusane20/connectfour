webpackJsonp([1],{Bxpw:function(e,r){},NHnr:function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=i("7+uW"),t={name:"Grids",props:["players"],data:function(){return{grid:{rows:6,cols:7,matrix:[],gameStarted:!1,nextTurn:1},selectedPlayer:null}},methods:{drawBoard:function(){for(var e=0;e<this.grid.rows;e++){this.grid.matrix[e]=[];for(var r=0;r<this.grid.cols;r++)this.grid.matrix[e][r]={value:0,row:e,col:r,hover:!1,click:!1,player:null}}},onHoverCell:function(e,r){for(var i=[],a=0;a<this.grid.matrix.length;a++)0==this.grid.matrix[a][r.col].value&&i.push(this.grid.matrix[a][r.col]);var t=i[i.length-1],l=this.grid.matrix[t.row].slice(0);l[t.col].hover=!0,this.$set(this.grid.matrix,t.row,l)},onMouseLeave:function(e){for(var r=0;r<this.grid.matrix.length;r++)for(var i=this.grid.matrix[r],a=0;a<i.length;a++)1==this.grid.matrix[r][a].hover&&(this.grid.matrix[r][a].hover=!1)},checkWinner:function(e){var r=this,i=e.col,a=e.row;console.log(e),e.col<=3&&r.grid.matrix[a][i].value==e.value&&r.grid.matrix[a][i+1].value==e.value&&r.grid.matrix[a][i+2].value==e.value&&r.grid.matrix[a][i+3].value==e.value&&console.log("win move"),e.col>=3&&r.grid.matrix[a][i].value==e.value&&r.grid.matrix[a][i-1].value==e.value&&r.grid.matrix[a][i-2].value==e.value&&r.grid.matrix[a][i-3].value==e.value&&console.log("win move"),console.log(e),e.row<=2&&r.grid.matrix[a][i].value==e.value&&r.grid.matrix[a+1][i].value==e.value&&r.grid.matrix[a+2][i].value==e.value&&r.grid.matrix[a+3][i].value==e.value&&console.log("win row move top-bottom"),e.row>=3&&r.grid.matrix[a][i].value==e.value&&r.grid.matrix[a-1][i].value==e.value&&r.grid.matrix[a-2][i].value==e.value&&r.grid.matrix[a-3][i].value==e.value&&console.log("win row move bottom-top"),e.col<=3&&e.row<=2&&r.grid.matrix[a][i].value==e.value&&r.grid.matrix[a+1][i+1].value==e.value&&r.grid.matrix[a+2][i+2].value==e.value&&r.grid.matrix[a+3][i+3].value==e.value&&console.log("win diagonal move top - down"),e.col>=3&&e.row<=2&&r.grid.matrix[a][i].value==e.value&&r.grid.matrix[a+1][i-1].value==e.value&&r.grid.matrix[a+2][i-2].value==e.value&&r.grid.matrix[a+3][i-3].value==e.value&&console.log("win diagonal move top - down minus")},togglePlayer:function(){this.selectedPlayer.index?this.selectedPlayer={index:0,player:this.players[0]}:this.selectedPlayer={index:1,player:this.players[1]}},onClickCell:function(e,r){for(var i=[],a=0;a<this.grid.matrix.length;a++)0==this.grid.matrix[a][r.col].value&&i.push(this.grid.matrix[a][r.col]);var t=i[i.length-1],l=this.grid.matrix[t.row].slice(0);l[t.col].value=this.grid.nextTurn,l[t.col].hover=!1,l[t.col].player=this.selectedPlayer,this.$set(this.grid.matrix,t.row,l),this.grid.nextTurn=1==this.grid.nextTurn?2:1,this.checkWinner(t),this.togglePlayer()},initializePlayer:function(){this.selectedPlayer={index:0,player:this.players[0]}},initialize:function(){this.gameStarted=!0,this.initializePlayer(),this.drawBoard()}},created:function(){this.initialize()}},l={render:function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"gridWrapper"},[i("div",{staticClass:"grids"},e._l(e.grid.matrix,function(r,a,t){return i("div",{key:a,staticClass:"row"},e._l(r,function(r,a,l){return i("div",{key:a,staticClass:"cell",class:{empty:0==r.value,"hover-true":r.hover,red:1==r.value,green:2==r.value},attrs:{"data-value":r.value,"data-row":t,"data-col":l},on:{mouseover:function(i){return e.onHoverCell(i,r)},mouseleave:function(i){return e.onMouseLeave(i,r)},click:function(i){return e.onClickCell(i,r)}}})}),0)}),0),e._v(" "),i("div",{staticStyle:{background:"#fff",color:"#000"}},[e._v(e._s(e.selectedPlayer))])])},staticRenderFns:[]};var o={name:"app",components:{Grids:i("VU/8")(t,l,!1,function(e){i("Bxpw")},null,null).exports,Players:i("VU/8")(null,null,!1,null,null,null).exports},data:function(){return{grids:{row:6,col:7,gameSettings:{started:!1,clear:!1}},players:[{name:"Player1"},{name:"Player2"}]}}},n={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"app",attrs:{id:"app"}},[r("div",{staticClass:"appBody"},[r("Grids",{attrs:{players:this.players}})],1)])},staticRenderFns:[]},s=i("VU/8")(o,n,!1,null,null,null).exports;i("x9ll");a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:s},template:"<App/>"})},x9ll:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.b8c2feedf9498b0f59db.js.map