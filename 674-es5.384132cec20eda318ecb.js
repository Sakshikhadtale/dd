!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkrouting=self.webpackChunkrouting||[]).push([[674],{6674:function(n,o,i){i.r(o),i.d(o,{AdminModule:function(){return p}});var a,r=i(8583),Z=i(7716),g=i(1228),d=i(7290),c=((a=function(){function n(e){t(this,n),this.auth=e}return e(n,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.auth.logout()}}]),n}()).\u0275fac=function(t){return new(t||a)(Z.Y36(g.e))},a.\u0275cmp=Z.Xpm({type:a,selectors:[["app-header"]],decls:16,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container"],["href","#",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarResponsive","aria-controls","navbarResponsive","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarResponsive",1,"collapse","navbar-collapse"],[1,"navbar-nav","ml-auto"],["routerLinkActive","active",1,"nav-item"],["routerLink","./home",1,"nav-link"],[1,"sr-only"],["role","button",1,"btn-primary","nav-item","text-white"],[1,"nav-link","text-white",3,"click"]],template:function(t,n){1&t&&(Z.TgZ(0,"nav",0),Z.TgZ(1,"div",1),Z.TgZ(2,"a",2),Z._uU(3,"Admin Header"),Z.qZA(),Z.TgZ(4,"button",3),Z._UZ(5,"span",4),Z.qZA(),Z.TgZ(6,"div",5),Z.TgZ(7,"ul",6),Z.TgZ(8,"li",7),Z.TgZ(9,"a",8),Z._uU(10,"Home "),Z.TgZ(11,"span",9),Z._uU(12,"(current)"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(13,"li",10),Z.TgZ(14,"a",11),Z.NdJ("click",function(){return n.logout()}),Z._uU(15,"logout"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA())},directives:[d.Od,d.yS],styles:[""]}),a),l=function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-footer"]],decls:0,vars:0,template:function(t,n){},styles:['p[_ngcontent-%COMP%]{font-family:"Nunito",sans-serif;font-size:16px;color:#fff;line-height:28px}.animate-border[_ngcontent-%COMP%]{position:relative;display:block;width:115px;height:3px;background:#007bff}.animate-border[_ngcontent-%COMP%]:after{position:absolute;content:"";width:35px;height:3px;left:0;bottom:0;border-left:10px solid #fff;border-right:10px solid #fff;-webkit-animation:animborder 2s linear infinite;animation:animborder 2s linear infinite}@-webkit-keyframes animborder{0%{transform:translate(0)}to{transform:translate(113px)}}@keyframes animborder{0%{transform:translate(0)}to{transform:translate(113px)}}.animate-border.border-white[_ngcontent-%COMP%]:after{border-color:#fff}.animate-border.border-yellow[_ngcontent-%COMP%]:after{border-color:#f5b02e}.animate-border.border-orange[_ngcontent-%COMP%]:after{border-right-color:#007bff;border-left-color:#007bff}.animate-border.border-ash[_ngcontent-%COMP%]:after{border-right-color:#eef0ef;border-left-color:#eef0ef}.animate-border.border-offwhite[_ngcontent-%COMP%]:after{border-right-color:#f7f9f8;border-left-color:#f7f9f8}@-webkit-keyframes primary-short{0%{width:15%}50%{width:90%}to{width:10%}}@keyframes primary-short{0%{width:15%}50%{width:90%}to{width:10%}}@-webkit-keyframes primary-long{0%{width:80%}50%{width:0%}to{width:80%}}@keyframes primary-long{0%{width:80%}50%{width:0%}to{width:80%}}.dk-footer[_ngcontent-%COMP%]{padding:75px 0 0;background-color:#151414;position:relative;z-index:2}.dk-footer[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]{margin-top:0;margin-bottom:30px;padding-left:80px}.dk-footer[_ngcontent-%COMP%]   .contact-us[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{margin-left:50px}.dk-footer[_ngcontent-%COMP%]   .contact-us.contact-us-last[_ngcontent-%COMP%]{margin-left:-80px}.dk-footer[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;top:-15px;position:relative;color:#007bff}.dk-footer-box-info[_ngcontent-%COMP%]{position:absolute;top:-122px;background:#202020;padding:40px;z-index:2}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:24px;margin-bottom:25px}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;width:40px;height:40px;border-radius:50%;text-align:center;line-height:40px;background:#000;margin-right:5px;color:#fff}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-facebook[_ngcontent-%COMP%]{background-color:#3b5998}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-twitter[_ngcontent-%COMP%]{background-color:#55acee}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-google-plus[_ngcontent-%COMP%]{background-color:#dd4b39}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-linkedin[_ngcontent-%COMP%]{background-color:#0976b4}.dk-footer-box-info[_ngcontent-%COMP%]   .footer-social-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-instagram[_ngcontent-%COMP%]{background-color:#b7242a}.footer-awarad[_ngcontent-%COMP%]{margin-top:285px;display:flex;flex:0 0 100%;align-items:center}.footer-awarad[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-weight:700;margin-left:20px;padding-top:15px}.footer-info-text[_ngcontent-%COMP%]{margin:26px 0 32px}.footer-left-widget[_ngcontent-%COMP%]{padding-left:80px}.footer-widget[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]{margin-bottom:35px}.footer-widget[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;color:#fff;position:relative;margin-bottom:15px;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:50%;float:left;list-style:none;margin:0;padding:0}.footer-widget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:18px}.footer-widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:27px}.footer-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#878787;transition:all .3s}.footer-widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#007bff}.footer-widget[_ngcontent-%COMP%]:after{content:"";display:block;clear:both}.dk-footer-form[_ngcontent-%COMP%]{position:relative}.dk-footer-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{padding:14px 28px;border-radius:50px;background:#2E2E2E;border:1px solid #2E2E2E}.dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#878787;font-size:14px}.dk-footer-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:12px 24px 12px 17px;border-top-right-radius:25px;border-bottom-right-radius:25px;border:1px solid #007bff;background:#007bff;color:#fff}.dk-footer-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}.contact-us[_ngcontent-%COMP%]{position:relative;z-index:2;margin-top:65px;display:flex;align-items:center}.contact-icon[_ngcontent-%COMP%]{position:absolute}.contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:36px;top:-5px;position:relative;color:#007bff}.contact-info[_ngcontent-%COMP%]{margin-left:75px;color:#fff}.contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;color:#fff;margin-bottom:0}.copyright[_ngcontent-%COMP%]{padding:28px 0;margin-top:55px;background-color:#202020}.copyright[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#878787;transition:all .3s linear}.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#007bff}.copyright-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{text-align:right;margin:0}.copyright-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding-left:20px}.back-to-top[_ngcontent-%COMP%]{position:relative;z-index:2}.back-to-top[_ngcontent-%COMP%]   .btn-dark[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;padding:0;position:fixed;bottom:20px;right:20px;background:#2e2e2e;border-color:#2e2e2e;display:none;z-index:999;transition:all .3s linear}.back-to-top[_ngcontent-%COMP%]   .btn-dark[_ngcontent-%COMP%]:hover{cursor:pointer;background:#FA6742;border-color:#fa6742}.stick-footer[_ngcontent-%COMP%]{margin-top:auto}']}),n}(),s=[{path:"",component:function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-admin-dashboard"]],decls:3,vars:0,template:function(t,n){1&t&&(Z._UZ(0,"app-header"),Z._UZ(1,"router-outlet"),Z._UZ(2,"app-footer"))},directives:[c,d.lC,l],styles:[""]}),n}(),children:[{path:"home",component:function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-home"]],decls:357,vars:0,consts:[[1,"container","my-5"],[1,"font-weight-bold","text-center","grey-text","text-uppercase","small","mb-4"],[1,"font-weight-bold","text-center","dark-grey-text","pb-2"],[1,"w-header","my-4"],[1,"row","white-text"],[1,"col-xl-3","col-md-6","mb-4"],[1,"card","classic-admin-card"],[1,"card-body","py-3"],[1,"far","fa-money-bill-alt","fa-2x","yellowcolor"],[1,"small"],[1,"progress","md-progress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","grey","darken-3",2,"width","25%"],[1,"card-body","pt-2","pb-3"],[1,"small","mb-0"],[1,"card","classic-admin-card","warning-color"],[1,"fas","fa-chart-line","fa-2x","yellowcolor"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg","grey","darken-3",2,"width","25%"],[1,"card","classic-admin-card","light-blue","lighten-1"],[1,"fas","fa-chart-pie","fa-2x","yellowcolor"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","grey","darken-3",2,"width","75%"],[1,"card","classic-admin-card","red","accent-2"],[1,"fas","fa-chart-bar","fa-2x","yellowcolor"],[1,"container","my-5","py-5"],[1,"card"],[1,"card-body","mr-md-1"],[1,"row","mb-3"],[1,"col-md-8","mb-4"],["id","barChart","height","100"],[1,"col-md-4","mb-1","mb-md-0"],[1,"text-center","font-weight-bold","mb-4"],[1,"d-flex","justify-content-between"],[1,"text-muted"],["role","progressbar","aria-valuenow","55","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","55%"],["role","progressbar","aria-valuenow","80","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","80%"],["role","progressbar","aria-valuenow","45","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","45%"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","100%"],[1,"row","text-center"],[1,"col-md-4","mb-4","mb-md-0"],[1,"text-success","mb-1"],[1,"fas","fa-caret-up","mr-2"],[1,"font-weight-bold","mb-1"],[1,"text-uppercase","mb-md-0"],[1,"text-danger","mb-1"],[1,"fas","fa-caret-down","mr-2"],[1,"col-md-4","mb-0"],[1,"text-dark","mb-1"],[1,"fas","fa-caret-left","mr-2"],[1,"text-uppercase","mb-0"],[1,"container","my-5","pt-5","pb-3","px-4","z-depth-1"],[1,"row"],[1,"col-md-6","mb-4"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","25%"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","50%"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","75%"],[1,"container","my-2","py-2"],[1,"card-body"],[1,"text-center","font-weight-bold","mb-3"],[1,"col-md-6","mb-4","mb-md-0"],["id","color-map",2,"height","300px"],[1,"table"],["scope","col"],["scope","row"],[1,"united","states","flag"],[1,"germany","flag"],[1,"poland","flag"],[1,"france","flag"],[1,"container","pt-5","pb-5"],[1,"col-12"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"card","shadow","mt-2"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary"]],template:function(t,n){1&t&&(Z.TgZ(0,"div",0),Z.TgZ(1,"section"),Z.TgZ(2,"h6",1),Z._uU(3,"Admin"),Z.qZA(),Z.TgZ(4,"h3",2),Z._uU(5,"Statistic Data"),Z.qZA(),Z._UZ(6,"hr",3),Z.TgZ(7,"div",4),Z.TgZ(8,"div",5),Z.TgZ(9,"div",6),Z.TgZ(10,"div",7),Z._UZ(11,"i",8),Z.TgZ(12,"p",9),Z._uU(13,"SALES"),Z.qZA(),Z.TgZ(14,"h4"),Z._uU(15,"2000"),Z.qZA(),Z.qZA(),Z.TgZ(16,"div",10),Z._UZ(17,"div",11),Z.qZA(),Z.TgZ(18,"div",12),Z.TgZ(19,"p",13),Z._uU(20,"Better than last week (25%)"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(21,"div",5),Z.TgZ(22,"div",14),Z.TgZ(23,"div",7),Z._UZ(24,"i",15),Z.TgZ(25,"p",9),Z._uU(26,"SUBSCRIPTIONS"),Z.qZA(),Z.TgZ(27,"h4"),Z._uU(28,"200"),Z.qZA(),Z.qZA(),Z.TgZ(29,"div",10),Z._UZ(30,"div",16),Z.qZA(),Z.TgZ(31,"div",12),Z.TgZ(32,"p",13),Z._uU(33,"Less than last week (25%)"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(34,"div",5),Z.TgZ(35,"div",17),Z.TgZ(36,"div",7),Z._UZ(37,"i",18),Z.TgZ(38,"p",9),Z._uU(39,"TRAFFIC"),Z.qZA(),Z.TgZ(40,"h4"),Z._uU(41,"20000"),Z.qZA(),Z.qZA(),Z.TgZ(42,"div",10),Z._UZ(43,"div",19),Z.qZA(),Z.TgZ(44,"div",12),Z.TgZ(45,"p",13),Z._uU(46,"Better than last week (75%)"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(47,"div",5),Z.TgZ(48,"div",20),Z.TgZ(49,"div",7),Z._UZ(50,"i",21),Z.TgZ(51,"p",9),Z._uU(52,"ORGANIC TRAFFIC"),Z.qZA(),Z.TgZ(53,"h4"),Z._uU(54,"2000"),Z.qZA(),Z.qZA(),Z.TgZ(55,"div",10),Z._UZ(56,"div",11),Z.qZA(),Z.TgZ(57,"div",12),Z.TgZ(58,"p",13),Z._uU(59,"Better than last week (25%)"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(60,"div",22),Z.TgZ(61,"section"),Z.TgZ(62,"div",23),Z.TgZ(63,"div",24),Z.TgZ(64,"div",25),Z.TgZ(65,"div",26),Z._UZ(66,"canvas",27),Z.qZA(),Z.TgZ(67,"div",28),Z.TgZ(68,"h5",29),Z._uU(69,"E-commerce data"),Z.qZA(),Z.TgZ(70,"div",30),Z.TgZ(71,"small",31),Z._uU(72,"Add products to cart"),Z.qZA(),Z.TgZ(73,"small"),Z.TgZ(74,"span"),Z.TgZ(75,"strong"),Z._uU(76,"160"),Z.qZA(),Z.qZA(),Z._uU(77,"/"),Z._UZ(78,"span"),Z._uU(79,"200"),Z.qZA(),Z.qZA(),Z.TgZ(80,"div",10),Z._UZ(81,"div",32),Z.qZA(),Z.TgZ(82,"div",30),Z.TgZ(83,"small",31),Z._uU(84,"Complete Purchase"),Z.qZA(),Z.TgZ(85,"small"),Z.TgZ(86,"span"),Z.TgZ(87,"strong"),Z._uU(88,"310"),Z.qZA(),Z.qZA(),Z._uU(89,"/"),Z._UZ(90,"span"),Z._uU(91,"400"),Z.qZA(),Z.qZA(),Z.TgZ(92,"div",10),Z._UZ(93,"div",33),Z.qZA(),Z.TgZ(94,"div",30),Z.TgZ(95,"small",31),Z._uU(96,"Visit Premium Page"),Z.qZA(),Z.TgZ(97,"small"),Z.TgZ(98,"span"),Z.TgZ(99,"strong"),Z._uU(100,"480"),Z.qZA(),Z.qZA(),Z._uU(101,"/"),Z._UZ(102,"span"),Z._uU(103,"800"),Z.qZA(),Z.qZA(),Z.TgZ(104,"div",10),Z._UZ(105,"div",34),Z.qZA(),Z.TgZ(106,"div",30),Z.TgZ(107,"small",31),Z._uU(108,"Send Inquiries"),Z.qZA(),Z.TgZ(109,"small"),Z.TgZ(110,"span"),Z.TgZ(111,"strong"),Z._uU(112,"250"),Z.qZA(),Z.qZA(),Z._uU(113,"/"),Z._UZ(114,"span"),Z._uU(115,"500"),Z.qZA(),Z.qZA(),Z.TgZ(116,"div",10),Z._UZ(117,"div",35),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(118,"div",36),Z.TgZ(119,"div",37),Z.TgZ(120,"p",38),Z._UZ(121,"i",39),Z._uU(122,"17%"),Z.qZA(),Z.TgZ(123,"p",40),Z._uU(124,"Rs.35 210"),Z.qZA(),Z.TgZ(125,"p",41),Z._uU(126,"Sales"),Z.qZA(),Z.qZA(),Z.TgZ(127,"div",37),Z.TgZ(128,"p",42),Z._UZ(129,"i",43),Z._uU(130,"17%"),Z.qZA(),Z.TgZ(131,"p",40),Z._uU(132,"4 578"),Z.qZA(),Z.TgZ(133,"p",41),Z._uU(134,"Subscriptions"),Z.qZA(),Z.qZA(),Z.TgZ(135,"div",44),Z.TgZ(136,"p",45),Z._UZ(137,"i",46),Z._uU(138,"0%"),Z.qZA(),Z.TgZ(139,"p",40),Z._uU(140,"678 934"),Z.qZA(),Z.TgZ(141,"p",47),Z._uU(142,"Traffic"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(143,"div",48),Z.TgZ(144,"section"),Z.TgZ(145,"div",49),Z.TgZ(146,"div",50),Z.TgZ(147,"h5",29),Z._uU(148,"Today"),Z.qZA(),Z.TgZ(149,"div",30),Z.TgZ(150,"small",31),Z._uU(151,"Add products "),Z.qZA(),Z.TgZ(152,"small"),Z.TgZ(153,"span"),Z.TgZ(154,"strong"),Z._uU(155,"160"),Z.qZA(),Z.qZA(),Z._uU(156,"/"),Z._UZ(157,"span"),Z._uU(158,"200"),Z.qZA(),Z.qZA(),Z.TgZ(159,"div",10),Z._UZ(160,"div",51),Z.qZA(),Z.TgZ(161,"div",30),Z.TgZ(162,"small",31),Z._uU(163,"Complete Purchase"),Z.qZA(),Z.TgZ(164,"small"),Z.TgZ(165,"span"),Z.TgZ(166,"strong"),Z._uU(167,"310"),Z.qZA(),Z.qZA(),Z._uU(168,"/"),Z._UZ(169,"span"),Z._uU(170,"400"),Z.qZA(),Z.qZA(),Z.TgZ(171,"div",10),Z._UZ(172,"div",52),Z.qZA(),Z.TgZ(173,"div",30),Z.TgZ(174,"small",31),Z._uU(175,"Visit Premium Page"),Z.qZA(),Z.TgZ(176,"small"),Z.TgZ(177,"span"),Z.TgZ(178,"strong"),Z._uU(179,"480"),Z.qZA(),Z.qZA(),Z._uU(180,"/"),Z._UZ(181,"span"),Z._uU(182,"800"),Z.qZA(),Z.qZA(),Z.TgZ(183,"div",10),Z._UZ(184,"div",53),Z.qZA(),Z.TgZ(185,"div",30),Z.TgZ(186,"small",31),Z._uU(187,"Send Inquiries"),Z.qZA(),Z.TgZ(188,"small"),Z.TgZ(189,"span"),Z.TgZ(190,"strong"),Z._uU(191,"250"),Z.qZA(),Z.qZA(),Z._uU(192,"/"),Z._UZ(193,"span"),Z._uU(194,"500"),Z.qZA(),Z.qZA(),Z.TgZ(195,"div",10),Z._UZ(196,"div",35),Z.qZA(),Z.qZA(),Z.TgZ(197,"div",50),Z.TgZ(198,"h5",29),Z._uU(199,"Yesterday"),Z.qZA(),Z.TgZ(200,"div",30),Z.TgZ(201,"small",31),Z._uU(202,"Add products to cart"),Z.qZA(),Z.TgZ(203,"small"),Z.TgZ(204,"span"),Z.TgZ(205,"strong"),Z._uU(206,"160"),Z.qZA(),Z.qZA(),Z._uU(207,"/"),Z._UZ(208,"span"),Z._uU(209,"200"),Z.qZA(),Z.qZA(),Z.TgZ(210,"div",10),Z._UZ(211,"div",32),Z.qZA(),Z.TgZ(212,"div",30),Z.TgZ(213,"small",31),Z._uU(214,"Complete Purchase"),Z.qZA(),Z.TgZ(215,"small"),Z.TgZ(216,"span"),Z.TgZ(217,"strong"),Z._uU(218,"310"),Z.qZA(),Z.qZA(),Z._uU(219,"/"),Z._UZ(220,"span"),Z._uU(221,"400"),Z.qZA(),Z.qZA(),Z.TgZ(222,"div",10),Z._UZ(223,"div",33),Z.qZA(),Z.TgZ(224,"div",30),Z.TgZ(225,"small",31),Z._uU(226,"Visit Premium Page"),Z.qZA(),Z.TgZ(227,"small"),Z.TgZ(228,"span"),Z.TgZ(229,"strong"),Z._uU(230,"480"),Z.qZA(),Z.qZA(),Z._uU(231,"/"),Z._UZ(232,"span"),Z._uU(233,"800"),Z.qZA(),Z.qZA(),Z.TgZ(234,"div",10),Z._UZ(235,"div",34),Z.qZA(),Z.TgZ(236,"div",30),Z.TgZ(237,"small",31),Z._uU(238,"Send Inquiries"),Z.qZA(),Z.TgZ(239,"small"),Z.TgZ(240,"span"),Z.TgZ(241,"strong"),Z._uU(242,"250"),Z.qZA(),Z.qZA(),Z._uU(243,"/"),Z._UZ(244,"span"),Z._uU(245,"500"),Z.qZA(),Z.qZA(),Z.TgZ(246,"div",10),Z._UZ(247,"div",35),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(248,"div",54),Z.TgZ(249,"section"),Z.TgZ(250,"div",23),Z.TgZ(251,"div",55),Z.TgZ(252,"h5",56),Z._uU(253,"Geolocation analysis"),Z.qZA(),Z._UZ(254,"hr"),Z.TgZ(255,"div",49),Z.TgZ(256,"div",57),Z._UZ(257,"div",58),Z.qZA(),Z.TgZ(258,"div",57),Z.TgZ(259,"table",59),Z.TgZ(260,"thead"),Z.TgZ(261,"tr"),Z._UZ(262,"th",60),Z.TgZ(263,"th",60),Z._uU(264,"Country"),Z.qZA(),Z.TgZ(265,"th",60),Z._uU(266,"Number"),Z.qZA(),Z.TgZ(267,"th",60),Z._uU(268,"%"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(269,"tbody"),Z.TgZ(270,"tr"),Z.TgZ(271,"th",61),Z._UZ(272,"i",62),Z.qZA(),Z.TgZ(273,"td"),Z._uU(274,"USA"),Z.qZA(),Z.TgZ(275,"td"),Z._uU(276,"45 934"),Z.qZA(),Z.TgZ(277,"td"),Z._uU(278,"45%"),Z.qZA(),Z.qZA(),Z.TgZ(279,"tr"),Z.TgZ(280,"th",61),Z._UZ(281,"i",63),Z.qZA(),Z.TgZ(282,"td"),Z._uU(283,"Germany"),Z.qZA(),Z.TgZ(284,"td"),Z._uU(285,"32 456"),Z.qZA(),Z.TgZ(286,"td"),Z._uU(287,"68%"),Z.qZA(),Z.qZA(),Z.TgZ(288,"tr"),Z.TgZ(289,"th",61),Z._UZ(290,"i",64),Z.qZA(),Z.TgZ(291,"td"),Z._uU(292,"Poland"),Z.qZA(),Z.TgZ(293,"td"),Z._uU(294,"12 344"),Z.qZA(),Z.TgZ(295,"td"),Z._uU(296,"34%"),Z.qZA(),Z.qZA(),Z.TgZ(297,"tr"),Z.TgZ(298,"th",61),Z._UZ(299,"i",65),Z.qZA(),Z.TgZ(300,"td"),Z._uU(301,"France"),Z.qZA(),Z.TgZ(302,"td"),Z._uU(303,"67 477"),Z.qZA(),Z.TgZ(304,"td"),Z._uU(305,"53%"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(306,"div",66),Z.TgZ(307,"div",67),Z.TgZ(308,"div",68),Z.TgZ(309,"div",69),Z.TgZ(310,"div",55),Z.TgZ(311,"h5",70),Z._uU(312,"Admin Component"),Z.qZA(),Z.TgZ(313,"p",71),Z._uU(314,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(315,"a",72),Z._uU(316,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(317,"div",69),Z.TgZ(318,"div",55),Z.TgZ(319,"h5",70),Z._uU(320,"Admin Component"),Z.qZA(),Z.TgZ(321,"p",71),Z._uU(322,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(323,"a",72),Z._uU(324,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(325,"div",69),Z.TgZ(326,"div",55),Z.TgZ(327,"h5",70),Z._uU(328,"Admin Component"),Z.qZA(),Z.TgZ(329,"p",71),Z._uU(330,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(331,"a",72),Z._uU(332,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(333,"div",69),Z.TgZ(334,"div",55),Z.TgZ(335,"h5",70),Z._uU(336,"Admin Component"),Z.qZA(),Z.TgZ(337,"p",71),Z._uU(338,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(339,"a",72),Z._uU(340,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(341,"div",69),Z.TgZ(342,"div",55),Z.TgZ(343,"h5",70),Z._uU(344,"Admin Component"),Z.qZA(),Z.TgZ(345,"p",71),Z._uU(346,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(347,"a",72),Z._uU(348,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(349,"div",69),Z.TgZ(350,"div",55),Z.TgZ(351,"h5",70),Z._uU(352,"Admin Component"),Z.qZA(),Z.TgZ(353,"p",71),Z._uU(354,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(355,"a",72),Z._uU(356,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA())},styles:[".yellowcolor[_ngcontent-%COMP%]{color:#ff002b}"]}),n}()},{path:"about",component:function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-about"]],decls:51,vars:0,consts:[[1,"container","pt-5","pb-5"],[1,"col-12"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"card","shadow","mt-2"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary"]],template:function(t,n){1&t&&(Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z.TgZ(3,"div",3),Z.TgZ(4,"div",4),Z.TgZ(5,"h5",5),Z._uU(6,"About Component"),Z.qZA(),Z.TgZ(7,"p",6),Z._uU(8,'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered. The medium, however, provides little to no value to the end-user without the information and experiences that make up the content.'),Z.qZA(),Z.TgZ(9,"a",7),Z._uU(10,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(11,"div",3),Z.TgZ(12,"div",4),Z.TgZ(13,"h5",5),Z._uU(14,"Admin Component"),Z.qZA(),Z.TgZ(15,"p",6),Z._uU(16,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(17,"a",7),Z._uU(18,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(19,"div",3),Z.TgZ(20,"div",4),Z.TgZ(21,"h5",5),Z._uU(22,"Admin Component"),Z.qZA(),Z.TgZ(23,"p",6),Z._uU(24,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(25,"a",7),Z._uU(26,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(27,"div",3),Z.TgZ(28,"div",4),Z.TgZ(29,"h5",5),Z._uU(30,"Admin Component"),Z.qZA(),Z.TgZ(31,"p",6),Z._uU(32,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(33,"a",7),Z._uU(34,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(35,"div",3),Z.TgZ(36,"div",4),Z.TgZ(37,"h5",5),Z._uU(38,"Admin Component"),Z.qZA(),Z.TgZ(39,"p",6),Z._uU(40,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(41,"a",7),Z._uU(42,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(43,"div",3),Z.TgZ(44,"div",4),Z.TgZ(45,"h5",5),Z._uU(46,"Admin Component"),Z.qZA(),Z.TgZ(47,"p",6),Z._uU(48,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(49,"a",7),Z._uU(50,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA())},styles:[""]}),n}()},{path:"services",component:function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-services"]],decls:59,vars:0,consts:[[1,"container","pt-5","pb-5"],[1,"col-12"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"card","shadow","mt-2"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary"]],template:function(t,n){1&t&&(Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z.TgZ(3,"div",3),Z.TgZ(4,"div",4),Z.TgZ(5,"h5",5),Z._uU(6,"Services Component"),Z.qZA(),Z.TgZ(7,"p",6),Z._uU(8,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(9,"a",7),Z._uU(10,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(11,"div",3),Z.TgZ(12,"div",4),Z.TgZ(13,"h5",5),Z._uU(14,"Services Component"),Z.qZA(),Z.TgZ(15,"p",6),Z._uU(16,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(17,"a",7),Z._uU(18,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(19,"div",3),Z.TgZ(20,"div",4),Z.TgZ(21,"h5",5),Z._uU(22,"Services Component"),Z.qZA(),Z.TgZ(23,"p",6),Z._uU(24,'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered. The medium, however, provides little to no value to the end-user without the information and experiences that make up the content.'),Z.qZA(),Z.TgZ(25,"a",7),Z._uU(26,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(27,"div",3),Z.TgZ(28,"div",4),Z.TgZ(29,"h5",5),Z._uU(30,"Services Component"),Z.qZA(),Z.TgZ(31,"p",6),Z._uU(32,'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered. The medium, however, provides little to no value to the end-user without the information and experiences that make up the content.'),Z.qZA(),Z.TgZ(33,"a",7),Z._uU(34,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(35,"div",3),Z.TgZ(36,"div",4),Z.TgZ(37,"h5",5),Z._uU(38,"Services Component"),Z.qZA(),Z.TgZ(39,"p",6),Z._uU(40,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(41,"a",7),Z._uU(42,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(43,"div",3),Z.TgZ(44,"div",4),Z.TgZ(45,"h5",5),Z._uU(46,"Services Component"),Z.qZA(),Z.TgZ(47,"p",6),Z._uU(48,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(49,"a",7),Z._uU(50,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(51,"div",3),Z.TgZ(52,"div",4),Z.TgZ(53,"h5",5),Z._uU(54,"Services Component"),Z.qZA(),Z.TgZ(55,"p",6),Z._uU(56,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(57,"a",7),Z._uU(58,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA())},styles:[""]}),n}()},{path:"contact",component:function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-contact"]],decls:51,vars:0,consts:[[1,"container","pt-5","pb-5"],[1,"col-12"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"card","shadow","mt-2"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary"]],template:function(t,n){1&t&&(Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z.TgZ(3,"div",3),Z.TgZ(4,"div",4),Z.TgZ(5,"h5",5),Z._uU(6,"Contact Component"),Z.qZA(),Z.TgZ(7,"p",6),Z._uU(8,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(9,"a",7),Z._uU(10,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(11,"div",3),Z.TgZ(12,"div",4),Z.TgZ(13,"h5",5),Z._uU(14,"Contact Component"),Z.qZA(),Z.TgZ(15,"p",6),Z._uU(16,'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered. The medium, however, provides little to no value to the end-user without the information and experiences that make up the content.'),Z.qZA(),Z.TgZ(17,"a",7),Z._uU(18,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(19,"div",3),Z.TgZ(20,"div",4),Z.TgZ(21,"h5",5),Z._uU(22,"Contact Component"),Z.qZA(),Z.TgZ(23,"p",6),Z._uU(24,'Content itself is what the user derives value from. Thus, "content" can refer to the information provided through the medium, the way in which the information was presented, as well as the added features included in the medium in which that information was delivered. The medium, however, provides little to no value to the end-user without the information and experiences that make up the content.'),Z.qZA(),Z.TgZ(25,"a",7),Z._uU(26,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(27,"div",3),Z.TgZ(28,"div",4),Z.TgZ(29,"h5",5),Z._uU(30,"Contact Component"),Z.qZA(),Z.TgZ(31,"p",6),Z._uU(32,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(33,"a",7),Z._uU(34,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(35,"div",3),Z.TgZ(36,"div",4),Z.TgZ(37,"h5",5),Z._uU(38,"Contact Component"),Z.qZA(),Z.TgZ(39,"p",6),Z._uU(40,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(41,"a",7),Z._uU(42,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(43,"div",3),Z.TgZ(44,"div",4),Z.TgZ(45,"h5",5),Z._uU(46,"Contact Component"),Z.qZA(),Z.TgZ(47,"p",6),Z._uU(48,"With supporting text below as a natural lead-in to additional content."),Z.qZA(),Z.TgZ(49,"a",7),Z._uU(50,"Go somewhere"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA())},styles:[""]}),n}()},{path:"",redirectTo:"/admin/home",pathMatch:"full"}]}],u=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[d.Bz.forChild(s)],d.Bz]}),n}(),p=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[r.ez,u]]}),n}()}}])}();