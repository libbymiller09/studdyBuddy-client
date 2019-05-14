(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports=n(256)},142:function(e,t,n){},143:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",function(){return k}),n.d(a,"submitForm",function(){return w}),n.d(a,"fetchMeetups",function(){return C}),n.d(a,"deleteMeetup",function(){return M});var r=n(0),o=n.n(r),c=n(25),l=n.n(c),u=n(15),i=n(6),s=n(105),p=(n(77),n(8)),m=n(9),h=n(11),d=n(10),f=n(12),b=n(260),v=n(261),E=n(20),y=n.n(E),g=n(38),j=n(26),O=n.n(j),k=function(){return function(){var e=Object(g.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(g.a)(y.a.mark(function n(a){var r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.post("/api/meetups",e);case 2:r=n.sent,t.push("/meetups"),a({type:"fetch_user",payload:r.data});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},C=function(){return function(){var e=Object(g.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/meetups");case 2:n=e.sent,t({type:"fetch_meetups",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},M=function(){return function(){var e=Object(g.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("/api/meetups/:id");case 2:n=e.sent,t({type:"delete_meetup",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=(n(40),n(257)),S=n(106),L=(n(142),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"renderContent",value:function(){switch(this.props&&this.props.auth){case null:return;case!1:return o.a.createElement("li",{id:"loginButton"},o.a.createElement("a",{href:"/auth/google"},"Login with Google"));default:return[o.a.createElement("li",{key:"1"},o.a.createElement(N.a,{to:"/"},"Home")),o.a.createElement("li",{key:"3"},o.a.createElement(N.a,{to:"/meetups"},"Meetups")),o.a.createElement("li",{key:"4"},o.a.createElement(N.a,{to:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement(S.a,{menuOpenButton:o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-bars"})),menuCloseButton:o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-times"})),changeMenuOn:"500px",largeMenuClassName:"large-menu-className",smallMenuClassName:"small-menu-className",menu:o.a.createElement("ul",null,o.a.createElement("li",{className:"authLink"},o.a.createElement(N.a,{to:(this.props.auth,"/")},"StudyBuddy")),this.renderContent())}))}}]),t}(r.Component));var x=Object(u.b)(function(e){return{auth:e.auth}})(L),_=(n(143),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"landingContainer"},o.a.createElement("header",null,o.a.createElement("h2",null,"How to use this app!")),o.a.createElement("div",null,o.a.createElement("p",null,"  Finding people to study with is hard."),o.a.createElement("p",null,"  With this application, easily find and connect with 'Study Buddies' near you!"),o.a.createElement("h3",null," You can... "),o.a.createElement("h2",null," Checkout the listed meetups!"),o.a.createElement("p",null," To find study sessions in your area!"),o.a.createElement("h2",null," Or create your own custom meetup! "),o.a.createElement("p",null," Select your own time, place, and subject you want to study. "),o.a.createElement("h2",null,"Look for a Buddy now!"),o.a.createElement("p",null," Start by clicking the login button!  Then head over to Meetups."),o.a.createElement("h2",null," Don't have a google account yet? "),o.a.createElement("p",null," No problem, use this demo account to try out the app! "),o.a.createElement("h4",null,"Username: demoTesting2019000@gmail.com"),o.a.createElement("h4",null,"Password: DemoTester")))}}]),t}(o.a.Component)),D=n(54),P={position:"absolute",bottom:"8%",right:"25%",width:"50%",height:"65%",padding:"10px",margin:"auto",border:"3px solid #94618E",borderRadius:"5px"},T=function(e){function t(e){var n;Object(p.a)(this,t);var a=(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).props.initialCenter,r=a.lat,o=a.lng;return n.state={currentLocation:{lat:r,lng:o}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var n=t.coords;e.setState({currentLocation:{lat:n.latitude,lng:n.longitude}})}),this.loadMap()}},{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"loadMap",value:function(){if(this.props&&this.props.google){var e=this.props.google.maps,t=this.refs.map,n=l.a.findDOMNode(t),a=this.props.zoom,r=this.state.currentLocation,o=r.lat,c=r.lng,u=new e.LatLng(o,c),i=Object.assign({},{center:u,zoom:a});this.map=new e.Map(n,i)}}},{key:"recenterMap",value:function(){var e=this.map,t=this.state.currentLocation,n=this.props.google.maps;if(e){var a=new n.LatLng(t.lat,t.lng);e.panTo(a)}}},{key:"renderChildren",value:function(){var e=this,t=this.props.children;if(t)return o.a.Children.map(t,function(t){if(t)return o.a.cloneElement(t,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})})}},{key:"render",value:function(){var e=Object.assign({},P);return o.a.createElement("div",null,o.a.createElement("div",{style:e,ref:"map"},"Loading map..."),this.renderChildren())}}]),t}(o.a.Component),I=T;T.defaultProps={zoom:14,initialCenter:{lat:45.5122,lng:-122.6587},centerAroundCurrentLocation:!1,visible:!0};var A=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},n.onMarkerClick=function(e,t,a){return n.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},n.onClose=function(e){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mapContainer"},o.a.createElement(I,{centerAroundCurrentLocation:!0,google:this.props.google},o.a.createElement(D.Marker,{onClick:this.onMarkerClick,name:"current location"}),o.a.createElement(D.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},o.a.createElement("div",null,o.a.createElement("h4",null,this.state.selectedPlace.name)))))}}]),t}(r.Component),B=Object(D.GoogleApiWrapper)({apiKey:"AIzaSyDjOba9SSlIOMl_9NUCIRV18-GuB-F7ln0"})(A),W=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"mapComponent"},o.a.createElement("h2",null,"Check the map!"),o.a.createElement(B,null)))}}]),t}(o.a.Component),F=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMeetups()}},{key:"componentDidUpdate",value:function(e){e.meetups!==this.props&&this.props.meetups&&this.props.fetchMeetups()}},{key:"renderMeetups",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"meetupContent"},(this.props.meetups||[]).map(function(e){return o.a.createElement("div",{key:e._id},o.a.createElement("h3",{className:"subject"},"Subject: ",e.subject),o.a.createElement("h3",{className:"time"},"Time: ",e.time),o.a.createElement("h3",{className:"place"},"Place: ",e.place),o.a.createElement("button",{onClick:function(){var t;t=e._id,fetch("/api/meetups/"+t,{method:"DELETE"})},className:"check-toggle",type:"button"},"Completed"))})))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Current Scheduled Meetups"),o.a.createElement("div",{className:"meetupListContainer"},this.renderMeetups()))}}]),t}(r.Component);var U=Object(u.b)(function(e){return{meetups:e.meetups}},{fetchMeetups:C})(F),z=n(259),G=n(258),J=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"onSubmit",value:function(e){return fetch("/api/meetups",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log("Success")}).catch(function(e){return console.error("error")})}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.props.handleSubmit(function(t){return e.onSubmit(t)})},o.a.createElement("label",{htmlFor:"subject"},"Study Subject"),o.a.createElement(z.a,{name:"subject",id:"subject",type:"text",component:"input",placeholder:"Node.js"}),o.a.createElement("label",{htmlFor:"time"},"Time"),o.a.createElement(z.a,{name:"time",id:"time",type:"text",component:"input",placeholder:"3pm"}),o.a.createElement("label",{htmlFor:"place"},"Place"),o.a.createElement(z.a,{name:"place",id:"place",type:"text",component:"input",placeholder:"Prince Coffee"}),o.a.createElement("button",{type:"submit",className:"submitButton",disabled:this.props.pristine||this.props.submitting},"Add"))}}]),t}(o.a.Component),H=Object(G.a)({form:"addMeetupForm"})(J),R=(n(253),function(){return o.a.createElement("div",null,o.a.createElement(U,null),o.a.createElement("div",null,o.a.createElement("h2",null,"Add your own meetup!"),o.a.createElement(H,null)))});n(254);function q(e){return o.a.createElement("footer",null,"Created by ",o.a.createElement("a",{href:"https://github.com/libbymiller09"},"Elisabeth Miller "),"2019")}var K=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return o.a.createElement(b.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(x,null),o.a.createElement(v.a,{exact:!0,path:"/",component:_}),o.a.createElement(v.a,{exact:!0,path:"/map",component:W}),o.a.createElement(v.a,{path:"/meetups",component:R}),o.a.createElement(v.a,{path:"/meetups/:id",component:M}),o.a.createElement(q,null)))}}]),t}(r.Component),V=Object(u.b)(null,a)(K),Y=n(262),Q=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}},form:Y.a,meetups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_meetups":return t.payload;default:return e}},delete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"delete_meetup":return t.payload;default:return e}}});window.axios=O.a;var X=Object(i.d)(Q,{},Object(i.a)(s.a));l.a.render(o.a.createElement(u.a,{store:X},o.a.createElement(V,null)),document.querySelector("#root"))},40:function(e,t,n){},77:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.07d08686.chunk.js.map