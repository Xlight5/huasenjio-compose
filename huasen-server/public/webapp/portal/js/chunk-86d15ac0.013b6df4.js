(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-86d15ac0"],{"0159":function(e,t,i){"use strict";i.r(t);var s=i("2f62"),a=i("dc92"),o={name:"DialogForm",components:{HsDialog:i("af63").a},props:{formData:{type:Object,default:()=>({name:"杭州",area:"1"})},formMap:{type:Array,default:()=>[{label:"输入框示例",key:"name",type:"input"},{label:"下拉选择",key:"area",type:"select",selectOptions:[{label:"滨江区",value:1},{label:"萧山区",value:2}]}]},formRule:{type:Object,default:()=>({name:[{required:!0,message:"必填项",trigger:"blur"}]})}},methods:{comfirmDialog(){this.$refs.form.validate(e=>{e&&this.$emit("comfirmForm")})},closeDialog(){this.$refs.form.resetFields(),this.$emit("cancelForm")},resetFormFields(){this.$refs.form.resetFields()}}},l=(i("8c0b"),i("2877")),r=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("HsDialog",e._g(e._b({staticClass:"dialog-form",on:{comfirmDialog:e.comfirmDialog,closeDialog:e.closeDialog,close:e.closeDialog}},"HsDialog",e.$attrs,!1),e.$listeners),[i("el-form",{ref:"form",staticClass:"form-group",attrs:{model:e.formData,rules:e.formRule,"label-position":"top"}},e._l(e.formMap,(function(t,s){return i("el-form-item",{key:s,attrs:{label:t.label,prop:t.key}},["input"===t.type?i("el-input",{model:{value:e.formData[t.key],callback:function(i){e.$set(e.formData,t.key,i)},expression:"formData[item.key]"}}):e._e(),"select"===t.type?i("el-select",{attrs:{"popper-append-to-body":!1},model:{value:e.formData[t.key],callback:function(i){e.$set(e.formData,t.key,i)},expression:"formData[item.key]"}},e._l(t.selectOptions,(function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1):e._e(),"textarea"===t.type?i("el-input",{attrs:{type:"textarea",autosize:{minRows:t.minRows}},model:{value:e.formData[t.key],callback:function(i){e.$set(e.formData,t.key,i)},expression:"formData[item.key]"}}):e._e()],1)})),1)],1)}),[],!1,null,"2a330af3",null).exports,n={name:"CustomWallpaperDrawer",components:{HsDrawer:i("f8b1").a},data:()=>({show:!1,activeName:"1",bg:"",sliderFilter:0,sliderLightness:0,pures:[{color:"#FFFFFF",background:"#9CA3AF"},{color:"#FFFFFF",background:"#F87171"},{color:"#FFFFFF",background:"#FBBF24"},{color:"#FFFFFF",background:"#34D399"},{color:"#FFFFFF",background:"#60A5FA"},{color:"#FFFFFF",background:"#A78BFA"}],wallpaperImages:[{headerFontColor:"#FFFFFF",background:i("a13d")},{headerFontColor:"#FFFFFF",background:i("6e73")},{headerFontColor:"#FFFFFF",background:i("aee4")},{headerFontColor:"#000000",background:i("63cd")},{headerFontColor:"#FFFFFF",background:i("0a8c")},{headerFontColor:"#000000",background:i("bd9f")}]}),computed:{...Object(s.d)(["user","themeConfig"]),displayPure(){let e=this.themeConfig.pure?this.themeConfig.pure:[];return[...this.pures.concat(e)]},displayWallpaperImages(){let e=this.themeConfig.wallpaper?this.themeConfig.wallpaper:[];return[...this.wallpaperImages.concat(e)]}},mounted(){this.bg=this.user.config.bg,this.sliderFilter=this.user.config.bgFilter,this.sliderLightness=this.user.config.bgLightness},methods:{...Object(s.c)(["commitAll"]),changeFilter(e){this.initCustomStyle({user:{config:{bgFilter:e}}})},changeShadow(e){this.initCustomStyle({user:{config:{bgLightness:e}}})},beforeUpload(e){return e.size<=2097152?this.TOOL.getBase64(e,e=>{this.initCustomStyle({user:{config:{bg:e}}})}):this.$tips("error","图片大小已超过 2MB",null,2e3),!1},changeBg(e,t){this.initCustomStyle({user:{config:{bg:"pick"==t?e:e.background}}})},initCustomStyle(e){this.commitAll(e),this.$store.dispatch("snapshoot"),this.$store.dispatch("initLocalUserInfo")}}},c=(i("872e"),{name:"HomeRecord",components:{DialogForm:r,CustomWallpaperDrawer:Object(l.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("HsDrawer",e._g(e._b({},"HsDrawer",e.$attrs,!1),e.$listeners),[i("div",{staticClass:"custom-wallpaper-drawer"},[i("el-collapse",{staticClass:"collapse",attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-collapse-item",{attrs:{name:"1"}},[i("template",{slot:"title"},[i("div",{staticClass:"title"},[e._v("基础设置")])]),i("div",{staticClass:"collapse-content"},[i("section",{staticClass:"other"},[i("div",[e._v("纯色背景")]),i("ul",[e._l(e.displayPure,(function(t,s){return i("li",{key:s,style:{backgroundColor:t.background},on:{click:function(i){return e.changeBg(t)}}})})),i("li",[i("el-color-picker",{attrs:{size:"mini"},on:{change:function(t){return e.changeBg(t,"pick")}},model:{value:e.bg,callback:function(t){e.bg=t},expression:"bg"}})],1)],2)]),i("section",{staticClass:"other"},[i("div",[e._v("背景模糊度")]),i("el-slider",{staticClass:"w-px-380 pl-px-8",attrs:{"show-tooltip":!1,min:0,max:10,step:.5},on:{change:e.changeFilter},model:{value:e.sliderFilter,callback:function(t){e.sliderFilter=t},expression:"sliderFilter"}})],1),i("section",{staticClass:"other"},[i("div",[e._v("遮罩浓度")]),i("el-slider",{staticClass:"w-px-380 pl-px-8",attrs:{"show-tooltip":!1,min:0,max:1,step:.1},on:{change:e.changeShadow},model:{value:e.sliderLightness,callback:function(t){e.sliderLightness=t},expression:"sliderLightness"}})],1)])],2),i("el-collapse-item",{attrs:{name:"2"}},[i("template",{slot:"title"},[i("div",{staticClass:"title"},[e._v("图片背景")])]),i("div",{staticClass:"collapse-content"},[i("ul",{staticClass:"image"},e._l(e.displayWallpaperImages,(function(t,s){return i("li",{key:s,style:{backgroundImage:"url("+t.background+")"},on:{click:function(i){return e.changeBg(t)}}},[i("div",{staticClass:"setting"},[e._v(" 立即设置 ")])])})),0)])],2),i("el-collapse-item",{attrs:{name:"3"}},[i("template",{slot:"title"},[i("div",{staticClass:"title"},[e._v("自定义上传")])]),i("div",{staticClass:"collapse-content flex justify-center items-center"},[i("el-upload",{staticClass:"upload py-px-10",attrs:{accept:".png,.jpg,.git","before-upload":e.beforeUpload,action:"",drag:""}},[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[e._v("拖拽上传 · "),i("em",[e._v("点击上传")])])])],1)],2)],1)],1)])}),[],!1,null,"047973aa",null).exports},data:()=>({isEditMode:!1,isDeleteMode:!1,showForm:!1,showCustom:!1,title:"",formData:{name:"",url:"",remark:""},formMap:[{key:"name",label:"站点名称",type:"input"},{key:"url",label:"站点链接",type:"input"},{key:"remark",label:"备注",type:"textarea",minRows:4}],formRule:{name:[{validator:Object(a.a)(["isNoEmpty::必填项","isChinese::请输入汉字/英文/数字"]),trigger:"blur"}],url:[{validator:Object(a.a)(["isNoEmpty::必填项","isUrl::请输入正确的网址"]),trigger:"blur"}]}}),computed:{...Object(s.d)(["user","config"])},methods:{...Object(s.c)(["commitAll"]),openAddMode(){this.title="添加网站",this.isEditMode=!1,this.isDeleteMode=!1,this.showForm=!0},openEditMode(){this.isEditMode=!this.isEditMode},openDeleteMode(){this.isDeleteMode=!this.isDeleteMode},handleEdit(e,t){this.title="编辑网站",this.showForm=!0,this.$nextTick(()=>{this.formData=Object.assign(this.formData,e)})},openSimpleMode(){this.handleCommit({user:{config:{simpleMode:!this.user.config.simpleMode}}})},handleDelete(e){let t=[...this.user.records];t.map((i,s)=>{i.id==e.id&&t.splice(s,1)}),this.handleCommit({user:{records:t}})},save(){let e=[...this.user.records],t=Object.assign({id:"",name:"",url:"",remark:""},{...this.formData});if(this.isEditMode)for(let i=0;i<e.length;i++)e[i].id==t.id&&(e[i]=t);else t.id=this.TOOL.getUid(16,8),e.push(t);this.handleCommit({user:{records:e}}),this.cancel()},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.resetFormFields(),this.showForm=!1},handleCommit(e){0!==Object.keys(e).length&&(this.commitAll(e),this.$store.dispatch("snapshoot"))},handleCopy(){let{records:e,config:t}=this.$store.state.user,i={records:e,config:t};this.TOOL.copyTextToClip(JSON.stringify(i),"已复制到剪贴板，请立即粘贴保存！")},async handleRecovery(){try{let e;if(e=navigator.clipboard&&window.isSecureContext?await navigator.clipboard.readText():prompt("请粘贴之前拷贝保存的数据进行恢复"),!e)return;let t=JSON.parse(e),{records:i,config:s}=t;if(!Array.isArray(i))throw new Error;if("[object Object]"!==Object.prototype.toString.call(s))throw new Error;this.handleCommit({user:{records:i,config:s}}),this.$tips("success","数据恢复成功","top-right",2e3,()=>{window.location.reload()})}catch(e){this.$tips("error","恢复数据失败","top-right",2e3)}},openCustomWallpaper(){this.showCustom=!0}}}),d=(i("df9f"),Object(l.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"rightMenu",rawName:"v-rightMenu"}],staticClass:"home-record"},[i("header",[e._m(0),i("ul",[i("li",{on:{click:e.openAddMode}},[i("i",{staticClass:"iconfont icon-tianjia"}),i("span",{staticClass:"sm:hidden"},[e._v("添加")])]),i("li",{class:{active:e.isEditMode},on:{click:e.openEditMode}},[i("i",{staticClass:"iconfont icon-md-settings"}),i("span",{staticClass:"sm:hidden"},[e._v("编辑")])]),i("li",{class:{active:e.isDeleteMode},on:{click:e.openDeleteMode}},[i("i",{staticClass:"iconfont icon-md-trash"}),i("span",{staticClass:"sm:hidden"},[e._v("管理")])]),i("li",{on:{click:e.handleCopy}},[i("i",{staticClass:"iconfont icon-md-cut"}),i("span",{staticClass:"sm:hidden"},[e._v("拷贝")])]),i("li",{on:{click:e.handleRecovery}},[i("i",{staticClass:"iconfont icon-md-sync"}),i("span",{staticClass:"sm:hidden"},[e._v("恢复")])]),i("li",{on:{click:e.openCustomWallpaper}},[i("i",{staticClass:"iconfont icon-md-happy"}),i("span",{staticClass:"sm:hidden"},[e._v("墙纸")])]),i("li",{on:{click:e.openSimpleMode}},[i("i",{staticClass:"iconfont icon-md-qr-scanner"}),i("span",{staticClass:"sm:hidden"},[e._v("全屏")])])])]),i("main",{directives:[{name:"rightMenu",rawName:"v-rightMenu"}]},[i("ul",{directives:[{name:"balance",rawName:"v-balance"}]},e._l(e.user.records,(function(t,s){return i("li",{key:t+"-"+s,staticClass:"record-item"},[e.isEditMode?i("a",{staticClass:"pointer text",class:{"edit-mode":e.isEditMode},on:{click:function(i){return e.handleEdit(t,s)}}},[e._v(" 点击编辑 ")]):i("a",{staticClass:"inherit-text text",attrs:{href:t.url,target:"_blank"}},[e._v(" "+e._s(t.name)+" ")]),e.isDeleteMode?i("i",{staticClass:"iconfont icon-md-close-circle delete-icon",on:{click:function(i){return e.handleDelete(t)}}}):e._e()])})),0)]),e.showForm?i("DialogForm",{ref:"dialogForm",attrs:{visible:e.showForm,width:"400",buttons:{comfirm:"确 认",cancel:"取 消"},title:e.title,formData:e.formData,formMap:e.formMap,formRule:e.formRule},on:{"update:visible":function(t){e.showForm=t},comfirmForm:e.save,cancelForm:e.cancel}}):e._e(),e.showCustom?i("CustomWallpaperDrawer",{attrs:{title:"个性墙纸",visible:e.showCustom,direction:"rtl",size:435},on:{"update:visible":function(t){e.showCustom=t}}}):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[this._v(" 自定义网站 "),t("i",{staticClass:"iconfont icon-md-attach"})])}],!1,null,"17fc46fc",null));t.default=d.exports},"0a8c":function(e,t,i){e.exports=i.p+"img/5.4eeaa603.jpeg"},"2b6f":function(e,t,i){},"5d93":function(e,t,i){},"63cd":function(e,t,i){e.exports=i.p+"img/4.ad66b67a.jpeg"},"6e73":function(e,t,i){e.exports=i.p+"img/2.977220e4.jpeg"},"872e":function(e,t,i){"use strict";i("2b6f")},"8c0b":function(e,t,i){"use strict";i("b8da")},a13d:function(e,t,i){e.exports=i.p+"img/1.4746c6ae.jpeg"},b8da:function(e,t,i){},bd9f:function(e,t,i){e.exports=i.p+"img/6.f79ffc44.jpeg"},df9f:function(e,t,i){"use strict";i("5d93")}}]);