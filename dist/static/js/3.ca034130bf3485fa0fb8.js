webpackJsonp([3,9],{"T+/8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={components:{socialSign:t("dZXH").default},name:"login",data:function(){return{loginForm:{email:"admin",password:"111111"},loginRules:{email:[{required:!0,trigger:"blur",validator:function(e,n,t){["admin","editor"].indexOf(n.trim())>=0?t():t(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(e,n,t){n.length<6?t(new Error("密码不能小于6位")):t()}}]},loading:!1,showDialog:!1}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("LoginByUsername",e.loginForm).then(function(){e.loading=!1,e.$router.push({path:"/"})}).catch(function(){e.loading=!1})})}},created:function(){},destroyed:function(){}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:e.loginForm,rules:e.loginRules,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),t("el-form-item",{attrs:{prop:"email"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{iconClass:"collection_fill"}})],1),e._v(" "),t("el-input",{attrs:{name:"email",type:"text",autoComplete:"on",placeholder:"邮箱"},model:{value:e.loginForm.email,callback:function(n){e.$set(e.loginForm,"email",n)},expression:"loginForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{iconClass:"lock_fill"}})],1),e._v(" "),t("el-input",{attrs:{name:"password",type:"password",autoComplete:"on",placeholder:"密码"},nativeOn:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(n){n.preventDefault(),e.handleLogin(n)}}},[e._v("\n        登录\n      ")])],1)],1)],1)},staticRenderFns:[]};var r=t("VU/8")(i,o,!1,function(e){t("hQjo")},null,null);n.default=r.exports},Umb6:function(e,n){},dZXH:function(e,n,t){"use strict";function i(e,n,t,i){var o=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,s=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-t/2+o,a=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-i/2+r,c=window.open(e,n,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+t+", height="+i+", top="+a+", left="+s);window.focus&&c.focus()}Object.defineProperty(n,"__esModule",{value:!0});var o={name:"social-signin",methods:{wechatHandleClick:function(e){this.$store.commit("SET_AUTH_TYPE",e);i("https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect")+"&response_type=code&scope=snsapi_login#wechat_redirect",e,540,540)},tencentHandleClick:function(e){this.$store.commit("SET_AUTH_TYPE",e);i("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),e,540,540)}}},r={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(n){e.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("icon-svg",{staticClass:"icon",attrs:{"icon-class":"weixin"}})],1),e._v(" 微信\n  ")]),e._v(" "),t("div",{staticClass:"sign-btn",on:{click:function(n){e.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("icon-svg",{staticClass:"icon",attrs:{"icon-class":"QQ"}})],1),e._v(" QQ\n  ")])])},staticRenderFns:[]};var s=t("VU/8")(o,r,!1,function(e){t("Umb6")},"data-v-10b795de",null);n.default=s.exports},hQjo:function(e,n){}});