webpackJsonp([7,70,71],{"1Mgu":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},props:["ruleForm"],data:function(){return{TEST_STATUS:{0:"Passed",1:"Failed",2:"Block",3:"N/A"}}},created:function(){},methods:{}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",[t._v(t._s(t.ruleForm.name))])]),t._v(" "),a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"预期结果",prop:"expect_result"}},[a("span",[t._v(t._s(t.ruleForm.expect_result))])]),t._v(" "),a("el-form-item",{attrs:{label:"实际结果",prop:"actual_result"}},[a("span",[t._v(t._s(t.ruleForm.actual_result))])]),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("span",[t._v(t._s(t.TEST_STATUS[t.ruleForm.status]))])]),t._v(" "),a("el-form-item",{attrs:{label:"开发",prop:"action_user"}},[a("span",[t._v(t._s(t.ruleForm.action_user))])]),t._v(" "),a("el-form-item",{attrs:{label:"测试时间",prop:"test_time"}},[a("span",[t._v(t._s(t.ruleForm.test_time))])])],1)],1)},i=[],r={render:o,staticRenderFns:i},n=r,l=a("VU/8"),c=l(s,n,!1,null,null,null);e.default=c.exports},"5S43":function(t,e,a){"use strict";function s(t){a("ijti")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),i=a.n(o),r=a("EMlb"),n=a("nSkA"),l=a("Xoog"),c=a.n(l),u=a("1n3Z"),d=a("0xDb"),m=a("TDrc"),_=a("6HvL"),p=a("3oPl"),h=a("M34/"),f=a("6d/X"),v=a("1Mgu"),g=a("vMJZ"),b=a("QmSG"),w=a("NYxO"),k={components:{VueMarkdown:c.a,BackToTop:u.a,addBug:m.default,addTest:_.default,showBug:f.default,showTest:v.default,editTest:h.default,editBug:p.default},data:function(){return{route_path:this.$route.path.split("/"),pid:this.$route.params.id,ticketData:{},commentData:{},commentForm:{project:"",create_user:localStorage.getItem("username"),content:""},rowdata:{status:"",start_time:"",end_time:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},BackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"50px","line-height":"45px",background:"#a2fdff"},Project_Status:{1:"已指派",2:"处理中",3:"待测试",4:"测试中",5:"已测试",6:"待上线",7:"已上线"},Bug_Status:{0:"新建",1:"打开",2:"关闭",3:"已修复",4:"暂不处理",5:"重新打开"},Test_Status:{0:"Passed",1:"Failed",2:"Block",3:"N/A"},showinput:!1,addBugFrom:!1,addTestFrom:!1,bugData:[],testData:[],bugquery:{project__id:"",test_id:"",id:""},testquery:{project__id:"",status:"",id:""},commentquery:{project__id:""},showBugForm:!1,showTestForm:!1,editBugForm:!1,editTestForm:!1,sendpeople:!1,sendgroup:!1,users:[],selectBug:{},selectTest:{},errortime:!1,apiurl:b.apiUrl,enclosureData:[],viewproject_btn_add_testbug:!1}},computed:i()({},Object(w.b)(["role","elements"])),created:function(){this.viewproject_btn_add_testbug=this.elements["查看任务-添加修改测试用例bug"],this.bugquery.project__id=this.testquery.project__id=this.commentquery.project__id=this.commentForm.project=this.pid,this.fetchData(),this.fetchBugData(),this.fetchTestData(),this.CommentData(),this.getProjectUsers(),this.fetchEnclosureData()},methods:{fetchData:function(){var t=this;Object(r.k)(null,this.pid).then(function(e){t.ticketData=e.data,t.rowdata.start_time=e.data.start_time,t.rowdata.end_time=e.data.end_time})},getDialogStatus:function(t){this.addBugFrom=t,this.addTestFrom=t,this.editBugForm=t,this.editTestForm=t,this.fetchBugData(),this.fetchTestData()},CommentData:function(){var t=this;Object(r.l)(this.commentquery).then(function(e){t.commentData=e.data}),this.commentForm.content=""},fetchBugData:function(){var t=this;Object(r.h)(this.bugquery).then(function(e){t.bugData=e.data})},fetchTestData:function(){var t=this;Object(r.o)(this.testquery).then(function(e){t.testData=e.data})},submitForm:function(t){var e=this;this.patchForm(),this.commentForm.content||(this.commentForm.content="默认回复"),Object(r.w)(this.commentForm).then(function(t){if(3===e.ticketData.status){var a={action_user:"edwin",title:"【任务需要测试】"+e.ticketData.name,message:"地址: "+window.location.href};Object(n.h)(a)}if(e.CommentData(),e.sendpeople){var s={action_user:e.ticketData.create_user+","+e.ticketData.follow_user.join(),title:"【任务有新回复】"+e.ticketData.name,message:"操作人: "+e.commentForm.create_user+"\n内容: "+e.commentForm.content+"\n地址: "+window.location.href};Object(n.h)(s)}if(e.sendgroup){var o={action_user:"ITDept_SkypeID",title:"【任务有新回复】"+e.ticketData.name,message:"操作人: "+e.commentForm.create_user+"\n内容: "+e.commentForm.content+"\n地址: "+window.location.href};Object(n.h)(o)}}).catch(function(){e.$message({type:"error",message:"提交有误"})})},patchForm:function(){var t=this;this.rowdata.status||(this.rowdata.status=this.ticketData.status),Object(r.r)(this.pid,this.rowdata).then(function(e){t.$message({message:"恭喜你，编辑成功",type:"success"}),t.fetchData(),t.showinput=!1}).catch(function(e){t.$message.error("计划结束时间必须大于开始时间！"),console.log(e)})},imgAdd:function(t,e){var a=this.$refs.md,s=new FormData;s.append("username",this.username),s.append("file",e),s.append("create_time",Object(d.a)(e.lastModified)),s.append("type",e.type),s.append("archive",this.route_path[1]),Object(n.i)(s).then(function(e){a.$imglst2Url([[t,e.data.file]])})},showBug:function(t,e){t?this.showBugForm=!0:this.editBugForm=!0,this.selectBug=e},showTest:function(t,e){t?this.showTestForm=!0:this.editTestForm=!0,this.selectTest=e},clicktestTable:function(t){this.bugquery.test_id=t.id,this.fetchBugData()},getProjectUsers:function(){var t=this,e={groups__name:"ITDept"};Object(g.f)(e).then(function(e){t.users=e.data})},showAllBug:function(){this.bugquery.test_id="",this.fetchBugData()},changeProjectstatus:function(){"2"===this.rowdata.status&&(this.rowdata.start_time=Object(d.b)())},changeProjectendtime:function(){var t=new Date(this.rowdata.start_time),e=new Date(this.rowdata.end_time),a=t.getTime();e.getTime()<a?(this.$message.error("计划结束时间必须大于开始时间！"),this.errortime=!0):this.errortime=!1},fetchEnclosureData:function(){var t=this,e={project__id:this.pid};Object(r.m)(e).then(function(e){t.enclosureData=e.data})},showAllTest:function(){this.testquery.status="",this.fetchTestData()},changeTeststatus:function(){this.fetchTestData()}}},D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:17}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"title"},[t._v(t._s(t.ticketData.name))]),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),a("div",{staticClass:"appendInfo"},[a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[t._v("\n                              创建时间：")]),t._v(t._s(t._f("parseDate")(t.ticketData.create_time)))]),t._v(" "),a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("\n                              发起人：")]),t._v(t._s(t.ticketData.create_user))]),t._v(" "),a("a",{staticClass:"ticketinfo action_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("指派人：")]),t._v(" "),t._l(t.ticketData.action_user,function(e){return a("el-tag",{key:e,staticStyle:{"margin-right":"3px"},attrs:{size:"mini"}},[t._v(t._s(e)+"\n                ")])})],2),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("类型：")]),t._v(" "),a("a",[t._v(t._s(t.ticketData.type))]),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("当前状态：")]),t._v(" "),a("el-tag",[t._v("\n                "+t._s(t.Project_Status[t.ticketData.status])+"\n              ")])],1),t._v(" "),a("div",{staticClass:"appendInfo"},[a("span",{staticClass:"han"},[t._v("任务开始时间：")]),t._v(" "),t.ticketData.start_time?a("a",{staticClass:"ticketinfo"},[t._v(t._s(t.ticketData.start_time))]):a("a",{staticClass:"ticketinfo"},[t._v("未设置")]),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("计划结束时间：")]),t._v(" "),t.ticketData.end_time?a("a",{staticClass:"ticketinfo"},[t._v(t._s(t.ticketData.end_time))]):a("a",{staticClass:"ticketinfo"},[t._v("未设置")])]),t._v(" "),7!=t.ticketData.status?a("div",{staticClass:"appendInfo"},[a("span",{staticClass:"han"},[t._v("操作：")]),t._v(" "),a("a",{staticClass:"action"},[a("el-select",{attrs:{filterable:"",placeholder:"更新任务状态"},on:{change:t.changeProjectstatus},model:{value:t.rowdata.status,callback:function(e){t.$set(t.rowdata,"status",e)},expression:"rowdata.status"}},t._l(t.Project_Status,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),t._v(" "),"2"!==t.rowdata.status||t.ticketData.end_time?t._e():a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"设置计划结束时间",disable:"have_endtime"},on:{change:t.changeProjectendtime},model:{value:t.rowdata.end_time,callback:function(e){t.$set(t.rowdata,"end_time",e)},expression:"rowdata.end_time"}})],1)]):t._e()]),t._v(" "),a("vue-markdown",{attrs:{source:t.ticketData.content}}),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),t.enclosureData.length>0?a("div",[a("ul",t._l(t.enclosureData,function(e){return e.file?a("li",{key:e.id,staticStyle:{"list-style":"none"}},[a("i",{staticClass:"fa fa-paperclip"}),t._v(" "),a("a",{attrs:{href:t.apiurl+"/upload/"+e.file,download:e.file}},[t._v(t._s(e.file.split("/")[1]))])]):t._e()}))]):t._e()],1),t._v(" "),7!=t.ticketData.status?a("div",[a("el-form",{ref:"content",staticClass:"demo-ruleForm",attrs:{model:t.commentForm,"label-width":"90px"}},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-form-item",{attrs:{label:"问题处理",prop:"content"}},[a("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:t.toolbars},on:{imgAdd:t.imgAdd},model:{value:t.commentForm.content,callback:function(e){t.$set(t.commentForm,"content",e)},expression:"commentForm.content"}}),t._v(" "),a("a",{staticClass:"tips"},[t._v(" Tip：截图可以直接 Ctrl + v 粘贴到问题处理里面")])],1),t._v(" "),a("el-form-item",{attrs:{label:"通知个人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择通知人"},model:{value:t.ticketData.follow_user,callback:function(e){t.$set(t.ticketData,"follow_user",e)},expression:"ticketData.follow_user"}},t._l(t.users,function(t){return a("el-option",{key:t.id,attrs:{value:t.username}})})),t._v(" "),a("el-checkbox",{model:{value:t.sendpeople,callback:function(e){t.sendpeople=e},expression:"sendpeople"}},[t._v("发送通知")])],1),t._v(" "),a("el-form-item",{attrs:{label:"通知技术部",prop:"action_user"}},[a("el-checkbox",{model:{value:t.sendgroup,callback:function(e){t.sendgroup=e},expression:"sendgroup"}},[t._v("发送通知")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1):t._e(),t._v(" "),t.commentData.length>0?a("el-card",{staticClass:"ticketcomment"},[t._v("\n          处理历史记录\n          "),t._l(t.commentData,function(e){return a("div",{key:e.id},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-row",[a("el-col",{attrs:{span:1}},[a("el-button",{staticClass:"commentuser",attrs:{type:"primary",plain:""}},[t._v(t._s(e.create_user))])],1),t._v(" "),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"dialog-box"},[a("span",{staticClass:"bot"}),t._v(" "),a("span",{staticClass:"top"}),t._v(" "),a("div",{staticClass:"comment"},[a("vue-markdown",{attrs:{source:e.content}}),t._v(" "),a("p",{staticClass:"commenttime"},[t._v("处理时间："+t._s(t._f("parseDate")(e.create_time)))])],1)])])],1)],1)})],2):t._e()],1),t._v(" "),a("el-col",{attrs:{span:7}},[t.viewproject_btn_add_testbug||"super"===t.role?a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"right-title"},[t._v("测试用例")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:t.showAllTest}},[t._v("all")]),t._v(" "),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{placeholder:"请选择状态筛选"},on:{change:t.changeTeststatus},model:{value:t.testquery.status,callback:function(e){t.$set(t.testquery,"status",e)},expression:"testquery.status"}},t._l(Object.keys(t.Test_Status),function(e){return a("el-option",{key:e,attrs:{label:t.Test_Status[e],value:e}})})),t._v(" "),t.viewproject_btn_add_testbug||"super"===t.role?a("el-button",{staticClass:"card-head-btn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){t.addTestFrom=!0}}}):t._e()],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.testData,stripe:"",height:"350"},on:{"row-click":t.clicktestTable}},[a("el-table-column",{attrs:{prop:"id",label:"Id",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showTest(!1,e.row)}}},[a("i",{staticClass:"fa fa-hashtag"}),t._v(t._s(e.row.id)+"\n                  ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showTest(!0,e.row)}}},[t._v(t._s(e.row.name))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini"}},[t._v(t._s(t.Test_Status[e.row.status]))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"开发",width:"80"}})],1)],1):t._e(),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"right-title"},[t._v("关联bug")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:t.showAllBug}},[t._v("all")]),t._v(" "),t.viewproject_btn_add_testbug||"super"===t.role?a("el-button",{staticClass:"card-head-btn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){t.addBugFrom=!0}}}):t._e()],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.bugData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"Id",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return t.viewproject_btn_add_testbug||"super"===t.role?[a("div",{attrs:{slot:"reference"},slot:"reference"},[t.viewproject_btn_add_testbug||"super"===t.role?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showBug(!1,e.row)}}},[a("i",{staticClass:"fa fa-hashtag"}),t._v(t._s(e.row.id)+"\n                  ")]):a("a",[a("i",{staticClass:"fa fa-hashtag"}),t._v(t._s(e.row.id))])],1)]:void 0}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showBug(!0,e.row)}}},[t._v(t._s(e.row.name))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini"}},[t._v(t._s(t.Bug_Status[e.row.status]))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"开发",width:"80"}})],1)],1)],1)],1)],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",content:"一路向西"}},[a("back-to-top",{attrs:{transitionName:"fade",customStyle:t.BackToTopStyle,visibilityHeight:300,backPosition:50}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.addBugFrom},on:{"update:visible":function(e){t.addBugFrom=e}}},[a("add-bug",{attrs:{project:t.ticketData.pid},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.addTestFrom},on:{"update:visible":function(e){t.addTestFrom=e}}},[a("add-test",{attrs:{project:t.ticketData.pid},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.editBugForm},on:{"update:visible":function(e){t.editBugForm=e},close:t.fetchBugData}},[a("edit-bug",{attrs:{ruleForm:t.selectBug},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.editTestForm},on:{"update:visible":function(e){t.editTestForm=e},close:t.fetchTestData}},[a("edit-test",{attrs:{ruleForm:t.selectTest},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.showBugForm},on:{"update:visible":function(e){t.showBugForm=e},close:t.fetchBugData}},[a("show-bug",{attrs:{ruleForm:t.selectBug}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.showTestForm},on:{"update:visible":function(e){t.showTestForm=e},close:t.fetchTestData}},[a("show-test",{attrs:{ruleForm:t.selectTest}})],1)],1)},F=[],y={render:D,staticRenderFns:F},x=y,T=a("VU/8"),C=s,j=T(k,x,!1,C,null,null);e.default=j.exports},"6d/X":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xoog"),o=a.n(s),i={components:{VueMarkdown:o.a},props:["ruleForm"],data:function(){return{Bug_Nice:{0:"低",1:"中",2:"高"},Bug_Status:{0:"新建",1:"打开",2:"关闭",3:"已修复",4:"暂不处理",5:"重新打开"}}},created:function(){},methods:{}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",[t._v(t._s(t.ruleForm.name))])]),t._v(" "),a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"严重程度",prop:"degree"}},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:t.ruleForm.degree,callback:function(e){t.$set(t.ruleForm,"degree",e)},expression:"ruleForm.degree"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优先级",prop:"nice"}},[a("span",[t._v(t._s(t.Bug_Nice[t.ruleForm.nice]))])]),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("span",[t._v(t._s(t.Bug_Status[t.ruleForm.status]))])]),t._v(" "),a("el-form-item",{attrs:{label:"开发",prop:"action_user"}},[a("span",[t._v(t._s(t.ruleForm.action_user))])]),t._v(" "),a("el-form-item",{attrs:{label:"测试时间",prop:"test_time"}},[a("span",[t._v(t._s(t.ruleForm.test_time))])]),t._v(" "),a("el-form-item",{attrs:{label:"关闭时间",prop:"end_time"}},[a("span",[t._v(t._s(t.ruleForm.end_time))])]),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("vue-markdown",{attrs:{source:t.ruleForm.desc}})],1)],1)],1)},n=[],l={render:r,staticRenderFns:n},c=l,u=a("VU/8"),d=u(i,c,!1,null,null,null);e.default=d.exports},ZRNC:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".editticket{margin:50px;width:80%}.title{font-size:28px;font-weight:700;padding-left:10px}.right-title{font-size:20px;font-weight:600;padding-left:10px}.card-head-btn{float:right;padding:3px 0}.appendInfo{padding:5px;margin:5px}.action{margin:5px}.han{margin-left:5px}.content{margin:20px 5px}.ticketcomment{margin-top:20px;background-color:rgba(48,250,81,.17)}.ticketcomment .dialog-box{position:relative;left:100px;margin-left:-30px}.ticketcomment .dialog-box span{width:0;height:0;font-size:0;overflow:hidden;position:absolute}.ticketcomment .dialog-box span.bot{border-width:16px;border-style:solid dashed dashed;border-color:transparent rgba(48,250,81,.38) transparent transparent;top:10px;left:-30px}.ticketcomment .dialog-box .comment{border:1px solid rgba(255,164,186,.62);padding:6px;margin-bottom:10px;min-height:50px}.ticketcomment .dialog-box .comment .commenttime{float:right}",""])},ijti:function(t,e,a){var s=a("ZRNC");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("e2422404",s,!0)}});