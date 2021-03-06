!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{gmZ5:function(o,e,a){"use strict";a.r(e),a.d(e,"DashboardPageModule",(function(){return C}));var c=a("ofXK"),r=a("3Pt+"),i=a("tyNb"),b=a("fXoL"),s=a("1jKG"),l=a("zz81"),d=a("TEn/"),u=a("sYmb");function p(t,n){if(1&t&&(b.Lb(0,"div"),b.dc(1),b.Kb()),2&t){var o=n.$implicit;b.yb(1),b.gc(" ",o.name,", ",o.count," ")}}var h,g,y,f=[{path:"",component:(h=function(){function o(n,e){t(this,o),this.shopService=n,this.goodsOutService=e,this.totalIncomeMoney=0,this.totalPayedIncome=0,this.totalUnPayedIncome=0,this.totalBoxNumber=0}var e,a,c;return e=o,(a=[{key:"ngOnInit",value:function(){this.initApp()}},{key:"initApp",value:function(){var t=this;this.shopService.getShopAnalysis().subscribe((function(n){t.shopCount=n.totalShopCount,t.shopHasCargoCount=n.totalHaveGoodsShopCount,t.dryShopCategoryList=n.results})),this.goodsOutService.getGoodsOutAnalysis().subscribe((function(n){t.totalIncomeMoney=n.totalIncome,t.totalPayedIncome=n.totalPayedIncome,t.totalUnPayedIncome=n.totalUnPayedIncome,t.totalBoxNumber=n.totalBox}))}}])&&n(e.prototype,a),c&&n(e,c),o}(),h.\u0275fac=function(t){return new(t||h)(b.Ib(s.a),b.Ib(l.a))},h.\u0275cmp=b.Cb({type:h,selectors:[["app-dashboard"]],decls:38,vars:37,consts:[["slot","start"],["autoHide","false","color","danger"],[2,"font-size","24px","text-align","center"],[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(b.Lb(0,"ion-header"),b.Lb(1,"ion-toolbar"),b.Lb(2,"ion-buttons",0),b.Jb(3,"ion-menu-button",1),b.Kb(),b.Lb(4,"ion-title"),b.dc(5),b.Ub(6,"translate"),b.Kb(),b.Kb(),b.Kb(),b.Lb(7,"ion-content"),b.Lb(8,"p",2),b.dc(9),b.Ub(10,"translate"),b.Kb(),b.Lb(11,"h2",2),b.dc(12),b.Ub(13,"translate"),b.Kb(),b.Lb(14,"div"),b.Lb(15,"ion-card"),b.dc(16),b.Ub(17,"translate"),b.Kb(),b.Lb(18,"ion-card"),b.dc(19),b.Ub(20,"translate"),b.Kb(),b.Lb(21,"ion-card"),b.dc(22),b.Ub(23,"translate"),b.Kb(),b.Lb(24,"ion-card"),b.dc(25),b.Ub(26,"translate"),b.Kb(),b.Lb(27,"ion-card"),b.dc(28),b.Ub(29,"translate"),b.Kb(),b.Lb(30,"ion-card"),b.dc(31),b.Ub(32,"translate"),b.Kb(),b.Kb(),b.Lb(33,"div"),b.Lb(34,"p"),b.dc(35),b.Ub(36,"translate"),b.Kb(),b.cc(37,p,2,2,"div",3),b.Kb(),b.Kb()),2&t&&(b.yb(5),b.ec(b.Vb(6,17,"dashboard.shop_dashboard")),b.yb(4),b.ec(b.Vb(10,19,"language.browser_language")),b.yb(3),b.ec(b.Vb(13,21,"language.language")),b.yb(4),b.gc(" ",b.Vb(17,23,"dashboard.shop_count"),"\uff1a",n.shopCount," "),b.yb(3),b.gc(" ",b.Vb(20,25,"dashboard.shop_count_include_cargo"),"\uff1a",n.shopHasCargoCount," "),b.yb(3),b.gc(" ",b.Vb(23,27,"dashboard.total_sell"),"\uff1a",n.totalIncomeMoney," "),b.yb(3),b.gc(" ",b.Vb(26,29,"dashboard.sell_payed"),"\uff1a",n.totalPayedIncome," "),b.yb(3),b.gc(" ",b.Vb(29,31,"dashboard.sell_unpaid"),"\uff1a",n.totalUnPayedIncome," "),b.yb(3),b.gc(" ",b.Vb(32,33,"dashboard.sell_count"),"\uff1a",n.totalBoxNumber," \u7bb1 "),b.yb(4),b.ec(b.Vb(36,35,"dashboard.shop_count_by_category")),b.yb(2),b.Yb("ngForOf",n.dryShopCategoryList))},directives:[d.h,d.y,d.d,d.o,d.w,d.f,d.e,c.i],pipes:[u.c],styles:["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),h)}],m=((g=function n(){t(this,n)}).\u0275mod=b.Gb({type:g}),g.\u0275inj=b.Fb({factory:function(t){return new(t||g)},imports:[[i.i.forChild(f)],i.i]}),g),v=a("kCW2"),C=((y=function n(){t(this,n)}).\u0275mod=b.Gb({type:y}),y.\u0275inj=b.Fb({factory:function(t){return new(t||y)},imports:[[c.b,r.d,v.a,m]]}),y)}}])}();