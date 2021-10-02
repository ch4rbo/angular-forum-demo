!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cRhG:function(t,n,r){"use strict";r.r(n),r.d(n,"ProfileModule",(function(){return I}));var o,c,s,a,u,f,l=r("ey9i"),b=r("JIr8"),p=r("fXoL"),v=r("tyNb"),d=((o=function(){function t(i,n){e(this,t),this.profilesService=i,this.router=n}return i(t,[{key:"resolve",value:function(e,t){var i=this;return this.profilesService.get(e.params.username).pipe(Object(b.a)((function(e){return i.router.navigateByUrl("/")})))}}]),t}()).\u0275fac=function(e){return new(e||o)(p.Ob(l.d),p.Ob(v.c))},o.\u0275prov=p.Db({token:o,factory:o.\u0275fac}),o),g=r("M0ag"),h=r("juF/"),m=((s=function(){function t(i,n){e(this,t),this.route=i,this.router=n,this.articlesConfig={type:"all",filters:{}}}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.data.subscribe((function(t){e.profile=t.profile,e.articlesConfig={type:"all",filters:{}},e.articlesConfig.filters.author=e.profile.username}))}}]),t}()).\u0275fac=function(e){return new(e||s)(p.Hb(v.a),p.Hb(v.c))},s.\u0275cmp=p.Bb({type:s,selectors:[["app-profile-articles"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,t){1&e&&p.Ib(0,"app-article-list",0),2&e&&p.Zb("limit",10)("config",t.articlesConfig)},directives:[h.a],encapsulation:2}),s),y=((c=function(){function t(i,n){e(this,t),this.route=i,this.router=n,this.favoritesConfig={type:"all",filters:{}}}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.data.subscribe((function(t){e.profile=t.profile,e.favoritesConfig.filters.favorited=e.profile.username}))}}]),t}()).\u0275fac=function(e){return new(e||c)(p.Hb(v.a),p.Hb(v.c))},c.\u0275cmp=p.Bb({type:c,selectors:[["app-profile-favorites"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,t){1&e&&p.Ib(0,"app-article-list",0),2&e&&p.Zb("limit",10)("config",t.favoritesConfig)},directives:[h.a],encapsulation:2}),c),k=r("bOdf"),J=r("vkgz"),w=r("UCte"),K=function(){return["/settings"]},O=function(){return{exact:!0}},j=function(e){return["/profile",e]},C=function(e){return["/profile",e,"favorites"]},L=[{path:":username",component:(a=function(){function t(i,n){e(this,t),this.route=i,this.userService=n}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.route.data.pipe(Object(k.a)((function(t){return e.profile=t.profile,e.userService.currentUser.pipe(Object(J.a)((function(t){e.currentUser=t,e.isUser=e.currentUser.username===e.profile.username})))}))).subscribe()}},{key:"onToggleFollowing",value:function(e){this.profile.following=e}}]),t}(),a.\u0275fac=function(e){return new(e||a)(p.Hb(v.a),p.Hb(l.f))},a.\u0275cmp=p.Bb({type:a,selectors:[["app-profile-page"]],decls:26,vars:18,consts:[[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],[3,"hidden","profile","toggle"],[1,"btn","btn-sm","btn-outline-secondary","action-btn",3,"routerLink","hidden"],[1,"ion-gear-a"],[1,"articles-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions","routerLink"]],template:function(e,t){1&e&&(p.Kb(0,"div",0),p.Kb(1,"div",1),p.Kb(2,"div",2),p.Kb(3,"div",3),p.Kb(4,"div",4),p.Ib(5,"img",5),p.Kb(6,"h4"),p.jc(7),p.Jb(),p.Kb(8,"p"),p.jc(9),p.Jb(),p.Kb(10,"app-follow-button",6),p.Rb("toggle",(function(e){return t.onToggleFollowing(e)})),p.Jb(),p.Kb(11,"a",7),p.Ib(12,"i",8),p.jc(13," Edit Profile Settings "),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Kb(14,"div",2),p.Kb(15,"div",3),p.Kb(16,"div",4),p.Kb(17,"div",9),p.Kb(18,"ul",10),p.Kb(19,"li",11),p.Kb(20,"a",12),p.jc(21," My Posts "),p.Jb(),p.Jb(),p.Kb(22,"li",11),p.Kb(23,"a",12),p.jc(24," Favorited Posts "),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Ib(25,"router-outlet"),p.Jb(),p.Jb(),p.Jb(),p.Jb()),2&e&&(p.xb(5),p.Zb("src",t.profile.image,p.gc),p.xb(2),p.kc(t.profile.username),p.xb(2),p.kc(t.profile.bio),p.xb(1),p.Zb("hidden",t.isUser)("profile",t.profile),p.xb(1),p.Zb("routerLink",p.ac(11,K))("hidden",!t.isUser),p.xb(9),p.Zb("routerLinkActiveOptions",p.ac(12,O))("routerLink",p.bc(13,j,t.profile.username)),p.xb(3),p.Zb("routerLinkActiveOptions",p.ac(15,O))("routerLink",p.bc(16,C,t.profile.username)))},directives:[w.a,v.e,v.d,v.g],encapsulation:2}),a),resolve:{profile:d},children:[{path:"",component:m},{path:"favorites",component:y}]}],x=((f=function t(){e(this,t)}).\u0275mod=p.Fb({type:f}),f.\u0275inj=p.Eb({factory:function(e){return new(e||f)},imports:[[v.f.forChild(L)],v.f]}),f),I=((u=function t(){e(this,t)}).\u0275mod=p.Fb({type:u}),u.\u0275inj=p.Eb({factory:function(e){return new(e||u)},providers:[d],imports:[[g.a,x]]}),u)}}])}();