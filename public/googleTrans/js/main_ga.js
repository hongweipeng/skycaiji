(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"Aistrigh",1:"Cealaigh",2:"D\u00fan",3:function(a){return"D'aistrigh Google an leathanach seo go huathoibr\u00edoch go: "+a},4:function(a){return"Aistrithe go: "+a},5:"Earr\u00e1id: N\u00ed raibh an freastala\u00ed in ann d'iarratas a chomhl\u00edonadh. Triail ar\u00eds ar ball.",6:"Foghlaim tuilleadh",7:function(a){return"Arna chumhacht\u00fa ag "+a},8:"Aistri\u00fach\u00e1n",9:"Aistri\u00fach\u00e1n ar si\u00fal",10:function(a){return"Ar mhaith leat an leathanach seo a aistri\u00fa go "+
(a+" le Google Translate?")},11:function(a){return"Amharc ar an leathanach seo i: "+a},12:"Taispe\u00e1n an bunleagan",13:"Seolfar inneachar an chomhaid log\u00e1nta seo go Google i gcomhair aistri\u00fach\u00e1in le nasc sl\u00e1n.",14:"Seolfar inneachar an leathanaigh shl\u00e1in seo go Google i gcomhair aistri\u00fach\u00e1in le nasc sl\u00e1n.",15:"Seolfar inneachar an leathanaigh inl\u00edn seo go Google i gcomhair aistri\u00fach\u00e1in le nasc sl\u00e1n.",16:"Roghnaigh Teanga",17:function(a){return"Cas as "+
(a+"an t-aistri\u00fach\u00e1n")},18:function(a){return"Cas as i gcomhair: "+a},19:"Folaigh i gc\u00f3na\u00ed",20:"Bunt\u00e9acs:",21:"Sol\u00e1thair aistri\u00fach\u00e1n n\u00edos fearr",22:"Cuir le",23:"Aistrigh gach rud",24:"Aischur gach rud",25:"Cealaigh gach rud",26:"Aistrigh rann\u00e1in go dt\u00ed mo theanga f\u00e9in",27:function(a){return"Aistrigh gach rud go "+a},28:"Taispe\u00e1in na bunteangacha",29:"Roghanna",30:"Cas as an t-aistri\u00fach\u00e1n i gcomhair an tsu\u00edmh seo",31:null,
32:"Taispe\u00e1in aistri\u00fach\u00e1in mhalartacha",33:"Clice\u00e1il ar na focail thuas chun aistri\u00fach\u00e1in mhalartacha a fh\u00e1il",34:"\u00das\u00e1id",35:"Tarraing leis an eochair iomlaoide chun an t-ord a athr\u00fa",36:"Clice\u00e1il le haghaidh aistri\u00fach\u00e1in mhalartacha",37:"Coinnigh an eochair iomlaoide br\u00faite, clice\u00e1il, agus tarraing na focail thuas chun a n-ord a athr\u00fa.",38:"Go raibh maith agat as aistri\u00fach\u00e1n n\u00edos fearr a mholadh do Google Translate.",
39:"Bainistigh an t-aistri\u00fach\u00e1n le haghaidh an l\u00e1ithre\u00e1in seo",40:"Clice\u00e1il ar fhocal le haghaidh aistri\u00fach\u00e1in mhalartacha, n\u00f3 clice\u00e1il faoi dh\u00f3 chun \u00e9 a chur in eagar go d\u00edreach",41:"Bunt\u00e9acs",42:"Aistri\u00fach\u00e1n",43:"Aistrigh",44:"T\u00e1 do cheart\u00fach\u00e1n curtha isteach.",45:"Earr\u00e1id: N\u00edl tac\u00fa ann do theanga an leathanaigh ghr\u00e9as\u00e1in.",46:"Giuirl\u00e9id aistrigh teanga"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_ga.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
