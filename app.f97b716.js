webpackJsonp([1],[function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var a=i(1),n=s(a),o=i(3),m=s(o);new n["default"]({el:"body",components:{App:m["default"]}})},,function(e,t){e.exports='<section class=page-home> <div class=page-home-header> <div class=page-home-toggle :class="{ \'page-home-toggle--on\': menuVisible }" @click="menuVisible = !menuVisible"> <span></span> </div> </div> <ul class=page-home-list :class="{ \'is-mobile\': isMobile, \'page-home-list--active\': menuVisible }"> <li v-for="item in navs" class=page-home-listitem> <a :href=item.link target=_blank>{{ item.name }}</a> </li> </ul> <div class=page-home-content :class="{ \'page-home-content--drop\': menuVisible }"> <div class=page-home-jumbotron> <div class=page-home-logo :class="{ \'logo-animate\': logoAnimateReady }"> <img src=http://fuss10.elemecdn.com/0/74/990b3ea94b25f060856452d4e0556jpeg.jpeg alt=""> <p class=page-home-title>mint-ui</p> <p></p> </div> <p class=page-home-desc :class="{ \'logo-animate\': descAnimateReady }">基于 vue.js 的移动端 UI 框架</p> <div class=page-home-buttons> <a href=/docs class=page-home-button v-show=descAnimateReady transition=enter target=_blank>开始使用</a> <a href=/mint-ui class=page-home-button v-show=descAnimateReady transition=enter target=_blank>查看示例</a> </div> <div class=page-home-gitbtn> <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=star&count=true" frameborder=0 scrolling=0 width=80px height=20px v-show=descAnimateReady transition=enter v-el:test></iframe> <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=fork&count=true" frameborder=0 scrolling=0 width=80px height=20px v-show=descAnimateReady transition=enter></iframe> </div> </div> </div> </section>'},function(e,t,i){var s,a;i(5),s=i(4),a=i(2),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"app",data:function(){return{navs:[{name:"Docs",link:"/docs"},{name:"Demos",link:"/mint-ui"},{name:"Github",link:"https://github.com/mint-ui/mint-ui"}],isMobile:!1,menuVisible:!1,logoAnimateReady:!1,descAnimateReady:!1}},compiled:function(){var e=this;this.isMobile=document.body.clientWidth<=500;var t=new Image;t.src="http://fuss10.elemecdn.com/0/74/990b3ea94b25f060856452d4e0556jpeg.jpeg",t.addEventListener("load",function(){e.logoAnimateReady=!0,setTimeout(function(){e.descAnimateReady=!0},500)})}}},function(e,t){}]);
//# sourceMappingURL=app.f97b716.js.map