(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{344:function(r,t,e){"use strict";e.r(t);e(23),e(17),e(22),e(36),e(21),e(37);var n=e(6),c=(e(76),e(77),e(87));function o(object,r){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(object,r).enumerable}))),t.push.apply(t,e)}return t}var l={data:function(){return{randoms:[],currentPlayer:0,hidden:!1}},computed:function(r){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(r,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(source,t))}))}return r}({},Object(c.b)(["playerNum","cardNum"])),mounted:function(){this.choiceNumber()},methods:{choiceNumber:function(){var r=this.playerNum*this.cardNum;console.log("_totalChoiceNum - ",r);for(var i=0;i<r;i++)for(;;){var t=Math.floor(101*Math.random())+0;if(!this.randoms.includes(t)){this.randoms.push(t);break}}console.log(this.randoms)},nextPlayer:function(){this.currentPlayer++,this.hidden=!0}}},d=e(71),v=e(143),f=e.n(v),y=e(342),h=e(340),m=e(296),O=e(341),component=Object(d.a)(l,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-container",[r.hidden?e("v-row",[e("v-col",{attrs:{cols:"12",align:"center"}},[r._v("\n      プレイヤー"+r._s(r.currentPlayer+1)+"\n      "),e("br"),r._v("\n      番号を確認します。\n      CHECK NUMBER を押してください\n      "),e("v-col",{attrs:{cols:"12",align:"center"}},[e("v-btn",{attrs:{dark:"",color:"orange accent-4"},on:{click:function(t){r.hidden=!1}}},[r._v("\n          "+r._s("CHECK NUMBER")+"\n        ")])],1)],1)],1):e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",align:"center"}},[r._v("\n      プレイヤー"+r._s(r.currentPlayer+1)+"\n      "),e("br"),r._v("\n      表示された数字を1枚ずつ紙にメモしてください。\n    ")]),r._v(" "),e("v-col",{attrs:{cols:"12",align:"center"}},r._l(r.cardNum,(function(t){return e("p",{key:t,staticClass:"display-2 secondary--text"},[r._v("\n        "+r._s(r.randoms[r.currentPlayer*r.cardNum+t-1])+"\n      ")])})),0),r._v(" "),e("v-col",{attrs:{cols:"12",align:"center"}},[e("v-btn",{attrs:{dark:"",color:"orange accent-4"},on:{click:function(t){r.currentPlayer<r.playerNum-1?r.nextPlayer():r.$router.push("selectQuestion")}}},[r._v("\n        "+r._s(r.currentPlayer<r.playerNum-1?"NEXT PLAYER":"NEXT SETTING")+"\n      ")])],1)],1),r._v(" "),e("v-row",{staticClass:"mt-12",attrs:{justify:"center",align:"center"}},[e("v-btn",{attrs:{dark:"",color:"grey"},on:{click:function(t){return r.$router.push("/")}}},[r._v("\n      BACK\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:y.a,VCol:h.a,VContainer:m.a,VRow:O.a})}}]);