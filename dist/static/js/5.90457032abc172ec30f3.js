webpackJsonp([5],{r7pC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=n("NYxO");i.default.use(o.a);var s={data:function(){return{}},store:new o.a.Store({state:{count:1,status:"嘻嘻",todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},mutations:{increment:function(t){t.count++}},getters:{doneTodos:function(t){return t.todos.filter(function(t){return t.done})},getTodoById:function(t){return function(e){return t.todos.find(function(t){return t.id===e})}}}}),computed:{count:function(){return this.$store.state.count}},created:function(){},methods:{increment:function(){this.$store.commit("increment")}}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"div0"}),this._v(" "),e("div",{staticClass:"div1"}),this._v(" "),e("div",{staticClass:"div2"}),this._v(" "),e("div")])}]};var c=n("VU/8")(s,r,!1,function(t){n("zcP0")},"data-v-edb64cfa",null);e.default=c.exports},zcP0:function(t,e){}});