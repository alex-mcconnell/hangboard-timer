(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),l=a(1),i=a(3),m=a(4),o=a(6),u=a(5),g=a(7),p=a(8),d=a.n(p),v=a(11),T=(a(21),function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],s=t[1],c=function(){var e=window.document,t=e.documentElement,a=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,n=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?(n.call(e),s(!1)):(a.call(t),s(!0))};return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue-grey darken-2",id:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"brand-logo blue-grey-text text-darken-4"},"Hangboard"),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement("a",{className:"modal-trigger",href:"#settings"},r.a.createElement("i",{className:"material-icons blue-grey-text text-darken-4"},"settings"))),r.a.createElement("li",null,r.a.createElement("a",{className:"modal-trigger",onClick:function(){return c()},onKeyDown:function(){return c()}},r.a.createElement("i",{className:"material-icons blue-grey-text text-darken-4"},a?"fullscreen_exit":"fullscreen")))))))}),S=a(2),f=(a(22),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hangTime:0,restTime:0,breakTime:0,hangsPerSet:0,totalSets:0},a.resetSettings=function(){var e=a.props.initSettings;a.setState(Object(l.a)({},e))},a.changeSettings=function(e,t){var n=parseInt(e.target.value,10)||0;e.target.value=n,a.setState(Object(S.a)({},t,n))},a.formatSeconds=function(e){e.target.value?e.target.value*=1:e.target.value=0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("timer")?this.setState(Object(l.a)({},JSON.parse(localStorage.getItem("timer")).settings)):this.resetSettings()}},{key:"render",value:function(){var e=this,t=this.state,a=t.hangTime,n=t.restTime,s=t.breakTime,c=t.hangsPerSet,l=t.totalSets,i=this.props.updateSettings;return r.a.createElement("div",{id:"settings",className:"modal grey lighten-4"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,"Settings"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("input",{type:"number",className:"center",min:"0",value:a,onChange:function(t){return e.changeSettings(t,"hangTime")}}),r.a.createElement("span",{className:"helper-text center","data-error":"wrong","data-success":"right"},"Hang Time")),r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("input",{type:"number",className:"center",min:"0",value:n,onChange:function(t){return e.changeSettings(t,"restTime")}}),r.a.createElement("span",{className:"helper-text center","data-error":"wrong","data-success":"right"},"Rest Time")),r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("input",{type:"number",className:"center",min:"0",value:s,onChange:function(t){return e.changeSettings(t,"breakTime")}}),r.a.createElement("span",{className:"helper-text center","data-error":"wrong","data-success":"right"},"Break Time"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"number",className:"center",min:"0",value:c,onChange:function(t){return e.changeSettings(t,"hangsPerSet")}}),r.a.createElement("span",{className:"helper-text center","data-error":"wrong","data-success":"right"},"Hangs Per Set")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{type:"number",className:"center",min:"0",value:l,onChange:function(t){return e.changeSettings(t,"totalSets")}}),r.a.createElement("span",{className:"helper-text center","data-error":"wrong","data-success":"right"},"Total Sets")))),r.a.createElement("div",{className:"modal-footer grey lighten-4"},r.a.createElement("div",{className:"modal-close waves-effect waves-green btn-flat",onKeyDown:function(){e.resetSettings()},onClick:function(){e.resetSettings()},role:"button",tabIndex:"0"},"Cancel"),r.a.createElement("div",{className:"modal-close waves-effect waves-green btn-flat",onKeyDown:function(){i(e.state)},onClick:function(){i(e.state)},role:"button",tabIndex:"0"},"Save")))}}]),t}(n.Component)),E=(a(23),function(e){var t=e.currentTime;return r.a.createElement("h1",{className:"center blue-grey-text text-darken-2",id:"timer"},function(e){var t=Math.floor(e/60),a=e-60*t;return t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),"".concat(t,":").concat(a)}(t))}),h=function(e){var t=e.isRunning,a=e.previous,n=e.playPause,s=e.skip,c=t?"red accent-1":"green accent-1";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s3 waves-effect waves-light btn-large btn-flat ".concat(c),onClick:a,onKeyDown:a,role:"button",tabIndex:"0"},r.a.createElement("i",{className:"material-icons"},"skip_previous")),r.a.createElement("div",{className:"col s6 row"},r.a.createElement("div",{className:"col s12 waves-effect waves-light btn-large btn-flat ".concat(c),onClick:n,onKeyDown:n,role:"button",tabIndex:"0"},r.a.createElement("i",{className:"material-icons"},t?"pause":"play_arrow"))),r.a.createElement("div",{className:"col s3 waves-effect waves-light btn-large btn-flat ".concat(c),onClick:s,onKeyDown:s,role:"button",tabIndex:"0"},r.a.createElement("i",{className:"material-icons"},"skip_next"))))},b=(a(24),function(e){var t=e.stats,a=t.totalElapsedTime,n=t.currentHang,s=t.currentSet,c=t.settings;return r.a.createElement("div",{className:"section container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4"},r.a.createElement("p",{className:"center-align grey-text"},"Time Elapsed"),r.a.createElement("h4",{className:"center-align grey-text"},function(e){var t=Math.floor(e/60),a=e-60*t;return t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),"".concat(t,":").concat(a)}(a))),r.a.createElement("div",{className:"col s4"},r.a.createElement("p",{className:"center-align grey-text"},"Hang"),r.a.createElement("h4",{className:"center-align grey-text"},"".concat(n," / ").concat(c.hangsPerSet))),r.a.createElement("div",{className:"col s4"},r.a.createElement("p",{className:"center-align grey-text"},"Set"),r.a.createElement("h4",{className:"center-align grey-text"},"".concat(s," / ").concat(c.totalSets)))))}),y=(a(25),function(e){var t=e.currentTimeType,a=e.currentHang,n="";return"rest"===t&&0===a?n="Get Ready":"rest"===t&&a>0?n="Rest":"break"===t?n="Break":"hang"===t&&(n="Hang"),r.a.createElement("div",{className:"section container"},r.a.createElement("h1",{className:"center blue-grey-text text-darken-2",id:"word"},n))}),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={settings:{hangTime:10,restTime:5,breakTime:30,hangsPerSet:6,totalSets:2},currentTimeType:null,currentTime:0,currentHang:0,currentSet:0,interval:null,totalElapsedTime:0,noSleep:new d.a},a.resetTimer=function(){a.setState({currentTimeType:null,currentTime:0,currentHang:0,currentSet:0,totalElapsedTime:0})},a.startSet=function(){var e=a.state,t=e.currentSet,n=e.settings,r=e.currentTimeType;a.setState({currentTimeType:"rest",currentSet:t+1,currentHang:0,currentTime:n.restTime}),r||a.setState({totalElapsedTime:0})},a.resetSet=function(){var e=a.state.settings;a.setState({currentTimeType:"rest",currentHang:0,currentTime:e.restTime})},a.startHang=function(){var e=a.state,t=e.currentHang,n=e.settings;a.setState({currentTimeType:"hang",currentHang:t+1,currentTime:n.hangTime})},a.startRest=function(){var e=a.state.settings;a.setState({currentTimeType:"rest",currentTime:e.restTime})},a.startBreak=function(){var e=a.state.settings;a.setState({currentTimeType:"break",currentHang:0,currentTime:e.breakTime})},a.toggleTimeType=function(){var e=a.state,t=e.currentTimeType,n=e.currentTime,r=e.currentHang,s=e.currentSet,c=e.settings,l=e.noSleep,i=0===n&&s<=c.totalSets,m=t,o="rest"===t,u="hang"===t,g="break"===t,p=r<c.hangsPerSet,d=s<c.totalSets;m||a.startSet(),i&&(o&&p?a.startHang():u&&p?a.startRest():u&&!p&&d?a.startBreak():g&&d?a.startSet():(a.playPause(),a.resetTimer(),l.disable()))},a.timerTick=function(){var e=a.state,t=e.currentTime,n=e.totalElapsedTime;a.setState({currentTime:t-1,totalElapsedTime:n+1})},a.timerIntervalSequence=function(){a.timerTick(),a.toggleTimeType()},a.playPause=function(){var e=a.state,t=e.interval,n=e.noSleep;t?(a.setState({interval:clearInterval(t)}),n.disable()):(a.setState({interval:setInterval(a.timerIntervalSequence,1e3)}),n.enable())},a.calculateAdjustment=function(e){var t=a.state,n=t.currentTime,r=t.currentTimeType,s=t.currentHang,c=t.settings,l="rest"===r,i="hang"===r,m=c.hangsPerSet-s,o=0;switch(e){case"skip":o+=n,l?o+=m*c.hangTime+(m-1)*c.restTime:i&&(o+=m*c.hangTime+m*c.restTime);break;case"previous":o-=l?s*c.hangTime+s*c.restTime+c.restTime-n:i?(m-1)*c.hangTime+m*c.restTime+c.hangTime-n:c.breakTime-n}return o},a.adjustTotalTimeElapsed=function(e){var t=a.state.totalElapsedTime;a.setState({totalElapsedTime:t+e})},a.skip=function(){var e=a.state,t=e.currentTimeType,n=e.currentSet,r=e.settings,s=e.noSleep,c=t,l="rest"===t,i="hang"===t,m="break"===t,o=n<r.totalSets;c&&(a.adjustTotalTimeElapsed(a.calculateAdjustment("skip")),(l||i)&&o?a.startBreak():m?a.startSet():!l&&!i||o||(a.playPause(),a.resetTimer(),s.disable()))},a.previous=function(){var e=a.state,t=e.currentTimeType,n=e.currentSet,r=e.noSleep,s="rest"===t,c="hang"===t,l="break"===t,i=n>1;t&&(a.adjustTotalTimeElapsed(a.calculateAdjustment("previous")),(s||c)&&i?a.resetSet():l?a.startBreak():!s&&!c||i||(a.playPause(),a.resetTimer(),r.disable()))},a.updateSettings=function(e){a.setState({settings:e})},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(l.a)({},this.state);delete e.noSleep,e.interval=null,localStorage.getItem("timer")?this.setState(Object(l.a)({},JSON.parse(localStorage.getItem("timer")),{noSleep:new d.a})):localStorage.setItem("timer",JSON.stringify(e))}},{key:"componentDidUpdate",value:function(){var e=Object(l.a)({},this.state);delete e.noSleep,e.interval=null,localStorage.setItem("timer",JSON.stringify(e))}},{key:"render",value:function(){var e=this.state,t=e.currentTime,a=e.interval,n=e.currentTimeType,s=e.settings,c=e.currentHang;return r.a.createElement("div",{className:"App"},r.a.createElement(T,{currentTimeType:n}),r.a.createElement(f,{updateSettings:this.updateSettings,initSettings:s}),r.a.createElement(E,{currentTime:t}),r.a.createElement(h,{isRunning:a,previous:this.previous,playPause:this.playPause,skip:this.skip}),r.a.createElement(b,{stats:this.state}),r.a.createElement(y,{currentTimeType:n,currentHang:c}))}}]),t}(n.Component);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.dabaa147.chunk.js.map