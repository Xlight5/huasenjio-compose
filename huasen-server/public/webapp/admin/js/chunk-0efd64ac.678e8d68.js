(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0efd64ac"],{"15f6":function(t,e,i){"use strict";i.r(e);var s=i("2909"),n=(i("4de4"),i("caad"),i("2532"),i("b0c0"),i("159b"),i("a434"),i("d81d"),i("b76a")),c=i.n(n),a={name:"SiteSelector",components:{HsDrawer:i("1feb").a,Draggable:c.a},props:{currentColumn:{type:Object,default:function(){}}},data:function(){return{searchText:"",selectSites:[],selectSiteIndex:[],sites:[]}},computed:{displaySites:function(){var t=this;return this.sites.filter((function(e){return e.name.includes(t.searchText)}))}},watch:{selectSiteIndex:function(){this.handleSelectSite()},sites:function(){this.handleSelectSite()},currentColumn:{handler:function(t,e){try{this.selectSiteIndex=Array.isArray(JSON.parse(t.siteStore))?Object(s.a)(JSON.parse(t.siteStore)):[]}catch(t){this.selectSiteIndex=[]}},deep:!0,immediate:!0}},mounted:function(){this.querySite()},methods:{querySite:function(){var t=this;this.API.findSiteByList({},{notify:!1}).then((function(e){t.sites=e.data}))},handleSelectSite:function(){var t=this,e=[];this.selectSiteIndex.forEach((function(i){t.sites.some((function(t){if(t._id===i)return e.push(t),!0}))})),this.selectSites=e},getSelectStatus:function(t){return this.selectSiteIndex.includes(t._id)},imgUrl:function(t){return t.icon?t.icon:i("4101")},selectSite:function(t){var e=t._id,i=this.selectSiteIndex.indexOf(e);-1===i?this.selectSiteIndex.push(e):this.selectSiteIndex.splice(i,1)},save:function(){var t=this,e=this.selectSites.map((function(t){return t._id}));this.API.updateColumn({_id:this.currentColumn._id,siteStore:JSON.stringify(e)}).then((function(e){t.$emit("save")}))},cancel:function(){this.$emit("cancel"),this.$emit("update:visible",!1)},remove:function(t,e){var i=this.selectSiteIndex.indexOf(t._id);-1!==i&&this.selectSiteIndex.splice(i,1)}}},r=(i("d1fb"),i("2877")),l=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("HsDrawer",t._g(t._b({},"HsDrawer",t.$attrs,!1),t.$listeners),[i("div",{staticClass:"site-selector"},[i("div",{staticClass:"site-selector-main"},[i("div",{staticClass:"selected"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[t._v("已选择")])]),i("ul",{staticClass:"site-list"},[i("Draggable",{attrs:{filter:".no-drap",animation:"400"},model:{value:t.selectSites,callback:function(e){t.selectSites=e},expression:"selectSites"}},[i("transition-group",t._l(t.selectSites,(function(e,s){return i("li",{key:e._id,staticClass:"site-item drag-item"},[i("i",{staticClass:"el-icon-rank pointer"}),i("div",{staticClass:"name text no-drap"},[t._v(t._s(t._f("emptyTip")(e.name)))]),i("div",{staticClass:"description text no-drap"},[t._v(t._s(t._f("emptyTip")(e.description)))]),i("i",{staticClass:"el-icon-delete pointer remove no-drap",on:{click:function(i){return t.remove(e,s)}}})])})),0)],1)],1)]),i("div",{staticClass:"selecting"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[t._v("待选择")]),i("el-input",{attrs:{placeholder:"请输入网址名称","suffix-icon":"el-icon-search"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),i("ul",{staticClass:"site-group"},t._l(t.displaySites,(function(e){return i("li",{key:e._id,staticClass:"site",class:{active:t.getSelectStatus(e)},on:{click:function(i){return t.selectSite(e)}}},[i("div",{staticClass:"icon-group"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy"}],attrs:{src:t.imgUrl(e)}})]),i("div",{staticClass:"text-group"},[i("div",{staticClass:"name text",attrs:{title:e.name}},[t._v(t._s(t._f("emptyTip")(e.name)))]),i("div",{staticClass:"description text",attrs:{title:e.description}},[t._v(t._s(t._f("emptyTip")(e.description)))])])])})),0)])]),i("div",{staticClass:"site-selector-footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.save}},[t._v("确定配置")]),i("el-button",{attrs:{type:"warning",plain:""},on:{click:t.cancel}},[t._v("取消修改")])],1)])])}),[],!1,null,"1ee98b40",null);e.default=l.exports},c1f8:function(t,e,i){},d1fb:function(t,e,i){"use strict";i("c1f8")}}]);