webpackJsonp([1],{"9Kcc":function(t,e){},FGUr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{"enter-active-class":"animated tada"}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},s,!1,function(t){i("iOHS")},null,null).exports,o=i("/ocq"),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[i("div",{staticClass:"swiper-wrapper"},t._l(t.sildes,function(t,e){return i("div",{key:t.id,staticClass:"swiper-slide"},[i("router-link",{attrs:{to:"/page/"+t.id}},[i("img",{attrs:{src:t.path,alt:""}})])],1)}),0),t._v(" "),i("div",{staticClass:"swiper-pagination"})]),t._v(" "),i("h2",[t._v("推荐视频")]),t._v(" "),i("div",{attrs:{id:"recommend"}},t._l(t.commendLesson,function(e,a){return i("router-link",{key:e.id,attrs:{to:{params:{lessonId:e.id},name:"Page"}}},[i("img",{attrs:{src:e.preview,alt:""}}),t._v(" "),i("i",{staticClass:"iconfont icon-bofang"}),t._v(" "),i("span",{staticClass:"time"},[t._v("22:56")]),t._v(" "),i("span",{staticClass:"title"},[t._v(t._s(e.title))])])}),1),t._v(" "),i("a",{staticClass:"more",attrs:{href:""}},[t._v("MORE >")]),t._v(" "),i("h2",[t._v("热门视频")]),t._v(" "),i("div",{staticClass:"today"},[i("div",{staticClass:"pic"},t._l(t.hotLesson,function(t,e){return i("router-link",{key:t.id,attrs:{to:{params:{lessonId:t.id},name:"Page"}}},[i("img",{attrs:{src:t.preview,alt:""}})])}),1)]),t._v(" "),i("div",{staticStyle:{height:"100px"}}),t._v(" "),i("ul",{attrs:{id:"bottom"}},[i("li",{staticClass:"cur"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"iconfont icon-shouyeshouye"}),t._v(" "),i("span",[t._v("首页")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/video"}},[i("i",{staticClass:"iconfont icon-icon02"}),t._v(" "),i("span",[t._v("视频")])])],1)])])},staticRenderFns:[]};var c=i("VU/8")({name:"Home",mounted:function(){var t=this;this.$http.get("http://video.silence.oeg/api/commendLesson/4").then(function(e){t.commendLesson=e.data.data}),this.$http.get("http://video.silence.oeg/api/hotLesson/4").then(function(e){t.hotLesson=e.data.data})},data:function(){return{commendLesson:[],hotLesson:[],sildes:[{id:1,path:"static/images/1.jpg"},{id:2,path:"static/images/2.jpg"},{id:3,path:"static/images/3.jpg"}],swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:50}}}},r,!1,function(t){i("FGUr")},"data-v-998372bc",null).exports,d={name:"Video",data:function(){return{tag:[],lessons:[],swiperOption:{pagination:{el:".swiper-pagination"},slidesPerView:4,paginationClickable:!0,spaceBetween:30,freeMode:!0}}},watch:{$route:function(t,e){this.loadData()}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$http.get("http://video.silence.oeg/api/tags").then(function(e){t.tag=e.data.data});var e=this.$route.params.tid?this.$route.params.tid:0;this.$http.get("http://video.silence.oeg/api/lesson/"+e).then(function(e){200!=e.status&&200!=e.data.code?alert("获取视频失败,请稍后再试"):t.lessons=e.data.data})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[i("div",{staticClass:"swiper-wrapper"},t._l(t.tag,function(e,a){return i("div",{key:e.id,staticClass:"swiper-slide"},[i("router-link",{attrs:{to:{params:{tid:e.id},name:"Video"}}},[t._v(t._s(e.name))])],1)}),0)]),t._v(" "),i("ul",{attrs:{id:"videolist"}},t._l(t.lessons,function(e,a){return i("li",{key:e.id},[i("router-link",{staticClass:"pic",attrs:{to:"/page/"+e.id}},[i("img",{attrs:{src:e.preview,alt:""}}),t._v(" "),i("span",[t._v("08:26")]),t._v(" "),i("i",{staticClass:"iconfont icon-bofang"})]),t._v(" "),i("router-link",{staticClass:"title",attrs:{to:"/page/"+e.id}},[t._v(t._s(e.title))])],1)}),0),t._v(" "),i("ul",{attrs:{id:"bottom"}},[i("li",{staticClass:"cur"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"iconfont icon-shouyeshouye"}),t._v(" "),i("span",[t._v("首页")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/video"}},[i("i",{staticClass:"iconfont icon-icon02"}),t._v(" "),i("span",[t._v("视频")])])],1)])])},staticRenderFns:[]};var p=i("VU/8")(d,l,!1,function(t){i("izBg")},"data-v-2a9009a9",null).exports,u={name:"Page",data:function(){return{current:{},videos:[]}},mounted:function(){var t=this,e=this.$route.params.lessonId;this.$http.get("http://video.silence.oeg/api/videos/"+e).then(function(e){200!=e.status&&200!=e.data.code?alert("获取视频失败,请稍后再试"):(t.videos=e.data.data,t.current=t.videos[0])})},methods:{play:function(t){this.current=this.videos[t]},back:function(){this.$router.back()}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("video",{attrs:{src:t.current.path,controls:"controls"}}),t._v(" "),i("h1",[t._v("10 导航条样式的设置")]),t._v(" "),i("ul",{attrs:{id:"list"}},t._l(t.videos,function(e,a){return i("li",{key:e.id,class:{cur:t.current.id===e.id},on:{click:function(e){return t.play(a)}}},[i("a",[t._v(t._s(e.title))])])}),0),t._v(" "),i("a",{staticClass:"iconfont back",on:{click:t.back}},[t._v("")])])},staticRenderFns:[]};var m=i("VU/8")(u,v,!1,function(t){i("9Kcc")},"data-v-09995a60",null).exports;a.default.use(o.a);var h=new o.a({routes:[{path:"/",name:"Home",component:c},{path:"/video/:tid?",name:"Video",component:p},{path:"/page/:lessonId",name:"Page",component:m}]}),f=(i("wNQb"),i("7QTg")),_=i.n(f),g=i("mtWM"),w=i.n(g);a.default.use(_.a),w.a.interceptors.request.use(function(t){return t.timeout=6e3,t.headers["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8",t}),a.default.prototype.$http=w.a,a.default.config.productionTip=!1,new a.default({el:"#app",router:h,components:{App:n},template:"<App/>"})},iOHS:function(t,e){},izBg:function(t,e){},wNQb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3721ebf7ca00765267c0.js.map