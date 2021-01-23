(this["webpackJsonpspacex-launch-program"]=this["webpackJsonpspacex-launch-program"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(4),c=a.n(s),r=(a(16),a(1)),i=a.n(r),u=a(5),o=a(6),m=a(7),d=a(10),p=a(9),f=a(8),h=a.n(f),E=(a(3),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={loading:!0,launch_year:[],filters:{launch_year:"",launch_success:"",land_success:""},radio_buttons:!1},e.addFilter=function(t){var a=e.state.filters;"launch_year"===t.target.name?(a.launch_year=t.target.value,e.setState({filters:a})):"launch_success"===t.target.name?(a.launch_success=t.target.value,e.setState({filters:a})):(a.land_success=t.target.value,e.setState({filters:a})),e.applyFilter(),document.getElementById("reset-filter").style.display="block"},e.applyFilter=function(){var t="https://api.spaceXdata.com/v3/launches?limit=100";void 0!==e.state.filters.launch_success&&""!==e.state.filters.launch_success&&(t=t+"&launch_success="+e.state.filters.launch_success),void 0!==e.state.filters.launch_year&&""!==e.state.filters.launch_year&&(t=t+"&launch_year="+e.state.filters.launch_year),void 0!==e.state.filters.land_success&&""!==e.state.filters.land_success&&(t=t+"&land_success="+e.state.filters.land_success),console.log(t),fetch(t,{method:"GET",dataType:"JSON",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){return e.json()})).then((function(t){return e.setState({datas:t})}))},e.clearFilters=function(){h()(".filter_buttons").prop("checked",!1),window.location.reload(),document.getElementById("reset-filter").style.display="none"},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,l,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],"https://api.spaceXdata.com/v3/launches?limit=100",e.next=4,fetch("https://api.spaceXdata.com/v3/launches?limit=100");case 4:return n=e.sent,e.next=7,n.json();case 7:for(l=e.sent,a=l,s=0;s<l.length;s++)t.push(l[s].launch_year),c=t.filter((function(e,a){return t.indexOf(e)===a})),this.setState({launch_year:c,loading:!1,datas:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container",id:"spacex"},l.a.createElement("h1",null,"SpacEx Launch programs"),l.a.createElement("div",{className:"data-container"},l.a.createElement("div",{className:"col-filter float-left"},l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"col name"},"Filter"),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"reset-btn",id:"reset-filter",onClick:function(t){return e.clearFilters(t)}},"Reset Filters"))),l.a.createElement("div",{className:"year-filter"},l.a.createElement("p",{align:"center",style:y},"Launch Year"),l.a.createElement("span",{style:b}),this.state.loading||!this.state.launch_year?l.a.createElement("div",null,"Loading..."):this.state.launch_year.map((function(t){return l.a.createElement("label",{key:"key"+t},l.a.createElement("input",{type:"radio",name:"launch_year",key:"launch_year"+t,value:t,onClick:function(t){return e.addFilter(t)},className:"filter_buttons"}),l.a.createElement("span",{style:_},t))}))),l.a.createElement("div",{className:"launch-filter"},l.a.createElement("p",{align:"center",style:g},"Successful Launch"),l.a.createElement("span",{style:b}),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"launch_success",value:"true",onClick:function(t){return e.addFilter(t)},className:"filter_buttons"}),l.a.createElement("span",{style:_},"True")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"launch_success",value:"false",onClick:function(t){return e.addFilter(t)},className:"filter_buttons"}),l.a.createElement("span",{style:_},"False"))),l.a.createElement("div",{className:"land-filter"},l.a.createElement("p",{align:"center",style:v},"Successful Landing"),l.a.createElement("span",{style:b}),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"land_success",value:"true",onClick:function(t){return e.addFilter(t)},className:"filter_buttons"}),l.a.createElement("span",{style:_},"True")),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"land_success",value:"false",onClick:function(t){return e.addFilter(t)},className:"filter_buttons"}),l.a.createElement("span",{style:_},"False"))))),l.a.createElement("div",{className:"col-data float-left"},l.a.createElement("div",{className:"data"},this.state.loading||!this.state.datas?l.a.createElement("div",null,"Loading..."):this.state.datas.length>0?this.state.datas.map((function(e,t){return l.a.createElement("div",{className:"card float-left",key:t},l.a.createElement("div",{key:t,className:"card-details"},l.a.createElement("img",{src:e.links.mission_patch_small,alt:"alt_image",style:k}),l.a.createElement("p",{style:x},e.mission_name),l.a.createElement("p",{style:N},l.a.createElement("b",null,"Mission Ids:")),0===e.mission_id.length?l.a.createElement("li",{style:N},"None"):e.mission_id.map((function(e,t){return l.a.createElement("li",{style:N,key:t},e)})),l.a.createElement("p",{style:N},l.a.createElement("b",null,"Launch Year:"),e.launch_year),null==e.launch_success?l.a.createElement("p",{style:N},l.a.createElement("b",null,"Successful Launch:")," Details not available"):!0===e.launch_success?l.a.createElement("p",{style:N},l.a.createElement("b",null,"Successful Launch:")," True"):l.a.createElement("p",{style:N},l.a.createElement("b",null,"Successful Launch:")," False"),null==e.rocket.first_stage.cores[0].land_success?l.a.createElement("p",{style:N},l.a.createElement("b",null,"Successful Landing:")," Details not available"):!0===e.rocket.first_stage.cores[0].land_success?l.a.createElement("p",{style:N},l.a.createElement("b",null,"Successful Landing:")," True"):l.a.createElement("p",{style:N},l.a.createElement("b",null,"Successful Landing:")," False")))})):l.a.createElement("div",null,"No data available for the applied filter")))),l.a.createElement("div",{className:"dev-details"},"Developed by: Chaturima M"))}}]),a}(n.Component)),y={padding:"0px",margin:"0px",color:"#7f7f7f"},g={padding:"0px",margin:"0px",color:"#7f7f7f"},v={padding:"0px",margin:"0px",color:"#7f7f7f"},_={color:"#000",margin:"12px",outline:"none",border:"none",borderRadius:"3px",fontSize:"20px",textAlign:"center"},b={display:"block",borderBottom:"2px solid #cad0d2",width:"50%",margin:"auto"},k={width:"60%",backgroundColor:"#f2f2f2",margin:"20px",marginBottom:"0px"},x={color:"#485097",fontWeight:"600",textAlign:"left",marginLeft:"22px",width:"60%",wordWrap:"break-word"},N={textAlign:"left",marginLeft:"22px",padding:"0px"};var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.def32ac4.chunk.js.map