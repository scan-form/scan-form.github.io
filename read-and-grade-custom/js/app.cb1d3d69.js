(function(t){function e(e){for(var s,r,l=e[0],c=e[1],o=e[2],b=0,h=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/read-and-grade-custom/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"bw",function(){return x}),a.d(s,"bt",function(){return O});a("cadf"),a("551c"),a("f751"),a("097d");var n,i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar",attrs:{role:"navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.navBarIsActive},attrs:{role:"button","data-target":"navbarTarget"},on:{click:function(e){t.navBarIsActive=!t.navBarIsActive}}},[a("span"),a("span"),a("span")])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.navBarIsActive},attrs:{id:"navbarTarget"}},[t._m(1)])]),a("section",{staticClass:"section"},[a("div",{staticClass:"container is-fluid"},[t._m(2),a("div",{staticClass:"field is-horizontal"},[t._m(3),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-narrow"},[a("div",{staticClass:"control"},[a("div",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.bo,expression:"bo"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.bo=e.target.multiple?a:a[0]},t.onTaskChange]}},[a("option",{attrs:{value:"0"}},[t._v("Baca form dan beri nilai")]),a("option",{attrs:{value:"1"}},[t._v("Hanya baca form")])])])])])])]),a("div",{staticClass:"field is-narrow is-horizontal"},[t._m(4),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-narrow has-addons"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formInfo,expression:"formInfo"}],staticClass:"input",attrs:{type:"text",readonly:""},domProps:{value:t.formInfo},on:{input:function(e){e.target.composing||(t.formInfo=e.target.value)}}})]),a("div",{staticClass:"control"},[a("button",{directives:[{name:"show",rawName:"v-show",value:null!==t.cj,expression:"cj!==null"}],staticClass:"button is-danger",on:{click:t.btnTokenClear}},[t._v("Hapus")])]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.sendTokenLoading},on:{click:t.btnTokenInput}},[t._v("Token")])])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(5),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-narrow"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bl,expression:"bl",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",min:"1",max:"100",disabled:t.az||t.bg},domProps:{value:t.bl},on:{input:function(e){e.target.composing||(t.bl=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.bo&&null!==t.cj,expression:"(bo==='0') && (cj!==null)"}],staticClass:"field is-horizontal"},[t._m(6),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control",class:{"is-loading":t.bg}},[a("div",{staticClass:"file has-name"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",id:"anskfile",accept:".png",disabled:t.bf},on:{change:t.onAnsKFCh}}),t._m(7),a("span",{staticClass:"file-name"},[t._v(t._s(t.bh))])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.az,expression:"az"}],staticClass:"control"},[a("button",{staticClass:"button is-small is-danger",on:{click:t.onClrAnsKClick}},[t._v("Hapus")]),a("button",{staticClass:"button is-small is-info",on:{click:function(e){t.ansKLstDlg=!0}}},[t._v("Lihat")])])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(8),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-narrow"},[a("div",{staticClass:"control"},[a("div",{staticClass:"file has-name"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",id:"input-files",multiple:"",accept:".png"},on:{change:t.onInFilesCh}}),t._m(9),a("span",{staticClass:"file-name"},[t._v(t._s(t.inFilesName))])])])])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(10),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field is-narrow is-grouped"},[a("div",{staticClass:"control"},[a("div",{staticClass:"file has-name"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",id:"namelstfile",accept:".csv"},on:{change:t.onNamesFileChange}}),t._m(11),a("span",{staticClass:"file-name"},[t._v(t._s(t.nmListFName))])])]),a("p",{staticClass:"help"},[t._v("* Opsional")])]),a("div",{staticClass:"control"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.useNameLst,expression:"useNameLst"}],staticClass:"button is-small is-danger",on:{click:t.clrNameLst}},[t._v("Hapus")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.useNameLst,expression:"useNameLst"}],staticClass:"button is-small is-info",on:{click:function(e){t.nameLstDlg=!0}}},[t._v("Lihat")])])])])]),a("div",{staticClass:"field is-grouped is-grouped-centered"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-danger",on:{click:function(e){return e.stopPropagation(),t.onBtnResetClick(e)}}},[t._v("Reset")])]),t._m(12),a("div",{directives:[{name:"show",rawName:"v-show",value:t.reqsOK,expression:"reqsOK"}],staticClass:"control"},[a("button",{staticClass:"button is-primary",on:{click:t.br}},[t._v("Proses")])]),a("div",{staticClass:"control"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.bm.length>0,expression:"bm.length>0"}],staticClass:"button is-primary",on:{click:function(e){t.omrResultDlg=!0}}},[t._v("Hasil")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.bp.length>0,expression:"bp.length>0"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"16px"}},[a("h4",{staticClass:"title is-4"},[t._v("File Tidak Terbaca")]),a("p",[t._v(t._s(t.unrecogLst))])])]),t._m(13),t._m(14),a("div",{staticClass:"modal",class:{"is-active":t.ansKLstDlg}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"box"},[a("ol",{staticClass:"anskeylist"},t._l(t.ba,function(e,s){return a("li",{key:s},[t._v(t._s(e))])}),0),a("hr"),a("div",{staticStyle:{"text-align":"center"}},[a("button",{staticClass:"button is-primary",on:{click:function(e){t.ansKLstDlg=!1}}},[t._v("Tutup")])])])])]),a("div",{staticClass:"modal",class:{"is-active":t.nameLstDlg}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content",staticStyle:{width:"400px"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"result-table-wrapper"},[a("table",{staticClass:"sf"},[t._m(15),a("tbody",t._l(Object.keys(t.bj).sort(),function(e,s){return a("tr",{key:e},[a("td",[t._v(t._s(s+1))]),a("td",[t._v(t._s(e))]),a("td",[t._v(t._s(t.bj[e]))])])}),0)])]),a("div",{staticStyle:{"text-align":"center","margin-top":"16px"}},[a("button",{staticClass:"button is-primary",on:{click:function(e){t.nameLstDlg=!1}}},[t._v("Tutup")])])])])]),a("div",{staticClass:"modal",class:{"is-active":t.processingDlg}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content",staticStyle:{width:"360px"}},[a("div",{staticClass:"box"},[a("progress",{staticClass:"progress is-primary",attrs:{max:"100"},domProps:{value:t.omrProgress}},[t._v(t._s(t.omrProgress)+"%")]),a("div",{staticStyle:{"text-align":"center"}},[t._v("Memproses "+t._s(t.procFileName)+" ...")]),a("div",{staticStyle:{"text-align":"center"}},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.bc},on:{click:function(e){t.bc=!0}}},[t._v("Batal")])])])])]),a("div",{staticClass:"modal",class:{"is-active":t.omrResultDlg}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"result-table-wrapper"},[a("table",{staticClass:"sf"},[a("thead",[a("tr",[a("th"),a("th",[t._v("File")]),a("th",[t._v("Nomor ID")]),t.useNameLst?a("th",[t._v("Nama")]):t._e(),"0"===t.bo?[a("th",[t._v("Benar")]),a("th",[t._v("Salah")]),a("th",[t._v("Nilai")])]:t._e(),t._l(t.bk,function(e){return a("th",{key:e},[t._v(t._s(e))])})],2)]),a("tbody",t._l(t.bm,function(e,s){return a("tr",{key:"_"+s},[a("td",[t._v(t._s(1+s))]),a("td",[t._v(t._s(t.bm[s][0]))]),a("td",[t._v(t._s(t.bm[s][1]))]),t.useNameLst?[a("td",[t._v(t._s(t.bm[s][2]))])]:t._e(),"0"===t.bo?[a("td",{staticClass:"stats"},[t._v(t._s(t.bm[s][t.scoreOffset+0]))]),a("td",{staticClass:"stats"},[t._v(t._s(t.bm[s][t.scoreOffset+1]))]),a("td",{staticClass:"stats"},[t._v(t._s(t.bm[s][t.scoreOffset+2].toFixed(2)))])]:t._e(),t._l(t.bm[s].slice(t.respOffset),function(e,n){return a("td",{key:s+"_"+n,staticClass:"response"},[t._v(t._s(e))])})],2)}),0)])])]),a("footer",{staticClass:"modal-card-foot",staticStyle:{"justify-content":"flex-end"}},[a("button",{staticClass:"button is-primary",on:{click:t.bu}},[t._v("Save Hasil")]),a("button",{directives:[{name:"show",rawName:"v-show",value:"0"===t.bn,expression:"bn==='0'"}],staticClass:"button is-primary",on:{click:t.bv}},[t._v("Save Analisis Soal")]),a("button",{staticClass:"button",on:{click:function(e){t.omrResultDlg=!1}}},[t._v("Tutup")])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item"},[a("img",{attrs:{src:"/assets/logo_round.png",alt:"Logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[t._v("Home")]),a("a",{staticClass:"navbar-item is-active"},[t._v("Aplikasi")]),a("a",{staticClass:"navbar-item",attrs:{href:"/doc.html"}},[t._v("Dokumentasi")]),a("a",{staticClass:"navbar-item",attrs:{href:"./#contact"}},[t._v("Kontak")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"title"},[t._v("\n        Scan"),a("span",{staticClass:"sf-green"},[t._v("Form")]),t._v(" Custom Form\n      ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Jenis pekerjaan")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Kode Form")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Jumlah pertanyaan")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Kunci jawaban")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-label"},[t._v("Pilih file...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Form jawaban")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-label"},[t._v("Pilih file...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Daftar nama dan ID")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-label"},[t._v("Pilih file...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("a",{staticClass:"button is-link",attrs:{target:"_blank",href:"./help.html"}},[t._v("Keterangan")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section has-background-grey-lighter"},[a("div",{staticClass:"container is-fluid"},[a("a",{attrs:{name:"contact"}}),a("h2",{staticClass:"title is-4"},[t._v("Hubungi Kami")]),a("div",{staticClass:"content"},[a("p",[t._v("\n          Apabila anda memiliki pertanyaan atau saran untuk perbaikan aplikasi\n          "),a("strong",[t._v("\n            Scan"),a("span",{staticClass:"sf-green"},[t._v("Form")])]),t._v(", hubungi kami dengan menulis pesan\n          di bawah ini. Kami sangat menghargai segala bentuk partisipasi anda dalam\n          pengembangan alat bantu ini.\n        ")])]),a("form",{attrs:{action:"https://formspree.io/scanform.id@gmail.com",method:"POST"}},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",name:"name",placeholder:"Nama anda"}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"email",name:"email",placeholder:"E-mail anda"}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("textarea",{staticClass:"textarea",attrs:{name:"message",placeholder:"Tuliskan pesan anda."}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control has-text-centered"},[a("button",{staticClass:"button is-link",attrs:{type:"submit"}},[t._v("Kirim")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[t._v("\n      © 2019\n      "),a("strong",[t._v("\n        Scan"),a("span",{staticClass:"sf-green"},[t._v("Form")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("No")]),a("th",[t._v("Nomor ID")]),a("th",[t._v("Nama")])])])}],c=a("bd86"),o=(a("7f7f"),a("96cf"),a("3b8d")),u=(a("28a5"),a("369b")),b=a.n(u),h=(a("55dd"),a("f5766"),a("9c29"),a("1b98")),m=a("768b"),d=400,f=1e4,p=15e3,v=.9,g=1.1,k=.5,_=127,C="ABCDEFGHIJKLMNOPQRSTUVWXYZ",w="0123456789",y={n_a:{ci:2244,ch:3272},n_b:{ci:3272,ch:2244}};function x(t){n=t}function N(t,e,a){return j.apply(this,arguments)}function j(){return j=Object(o["a"])(regeneratorRuntime.mark(function t(e,a,s){var i,r,l,c,o,u,b,h,k,C,w,y,x,N,j,O,R,L,I,M,S,F,E,P,A,T,D,B,K,z,$,H,V,J,G,Y;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:i=n.imread(e),r=new n.Mat,n.cvtColor(i,r,n.COLOR_RGBA2GRAY,0),i.delete(),i=r,"a"===a.aq?i.cols>i.rows&&(r=new n.Mat,n.transpose(i,r),i.delete(),i=new n.Mat,n.flip(r,i,1),r.delete()):i.rows>i.cols&&(r=new n.Mat,n.transpose(i,r),i.delete(),i=new n.Mat,n.flip(r,i,1),r.delete()),l=i.cols-d,c=i.rows-d,o=[[0,d,0,d],[l,d,0,d],[0,d,c,d],[l,d,c,d]],r=new n.Mat,n.threshold(i,r,s.bb||_,255,n.THRESH_BINARY_INV),i.delete(),i=r,u={cb:null,cc:null,cd:null,ce:null,cf:0,cg:!1},h=0;case 15:if(!(h<4)){t.next=104;break}b=new n.Rect(o[h][0],o[h][2],o[h][1],o[h][3]),k=i.roi(b),C=new n.MatVector,w=new n.Mat,n.findContours(k,C,w,n.RETR_EXTERNAL,n.CHAIN_APPROX_SIMPLE),y=void 0,x=void 0,N=void 0,j=0;case 25:if(!(j<C.size())){t.next=99;break}if(y=C.get(j),x=n.contourArea(y),!(x<f||x>p)){t.next=30;break}return t.abrupt("continue",96);case 30:if(b=n.boundingRect(y),O=b.width/b.height,!(O<v||O>g)){t.next=34;break}return t.abrupt("continue",96);case 34:if(N=n.moments(y),R=Math.round(N.m10/N.m00),L=Math.round(N.m01/N.m00),I=n.arcLength(y,!0),M=new n.Mat,n.approxPolyDP(y,M,.02*I,!0),6===M.rows||4===M.rows){t.next=42;break}return t.abrupt("continue",96);case 42:if(S=M.size(),F=S.width*S.height,0!==h){t.next=58;break}E=0;case 46:if(!(E<F)){t.next=56;break}if(P=M.intPtr(E),A=Object(m["a"])(P,2),T=A[0],D=A[1],!(T<R&&D<L)){t.next=53;break}return u.cb=[T,D],u.cf++,6===M.rows&&(u.cg=!0),t.abrupt("break",56);case 53:E++,t.next=46;break;case 56:t.next=95;break;case 58:if(1!==h){t.next=71;break}B=0;case 60:if(!(B<F)){t.next=69;break}if(K=M.intPtr(B),z=Object(m["a"])(K,2),T=z[0],D=z[1],!(T>R&&D<L)){t.next=66;break}return u.cc=[T+l,D],u.cf++,t.abrupt("break",69);case 66:B++,t.next=60;break;case 69:t.next=95;break;case 71:if(2!==h){t.next=84;break}$=0;case 73:if(!($<F)){t.next=82;break}if(H=M.intPtr($),V=Object(m["a"])(H,2),T=V[0],D=V[1],!(T<R&&D>L)){t.next=79;break}return u.cd=[T,D+c],u.cf++,t.abrupt("break",82);case 79:$++,t.next=73;break;case 82:t.next=95;break;case 84:if(3!==h){t.next=95;break}J=0;case 86:if(!(J<F)){t.next=95;break}if(G=M.intPtr(J),Y=Object(m["a"])(G,2),T=Y[0],D=Y[1],!(T>R&&D>L)){t.next=92;break}return u.ce=[T+l,D+c],u.cf++,t.abrupt("break",95);case 92:J++,t.next=86;break;case 95:M.delete();case 96:j++,t.next=25;break;case 99:C.delete(),w.delete();case 101:h++,t.next=15;break;case 104:if(i.delete(),!(u.cf<4)){t.next=107;break}return t.abrupt("return",null);case 107:return t.abrupt("return",u);case 108:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function O(t,e,a){return R.apply(this,arguments)}function R(){return R=Object(o["a"])(regeneratorRuntime.mark(function t(e,a,s){var i,r,l,c,o,u,b,h,m,d,f,p,v,g,x,j,O,R,L,I,M,S,F,E,P,A,T,D,B,K,z,$,H,V,J,G,Y,q,U,Z,X,Q,W,tt,et,at,st,nt,it,rt,lt,ct,ot,ut,bt,ht,mt,dt;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i="".concat(a.bz,"_").concat(a.aq),r=y[i],l=Math.max(r.ci,r.ch),c=l-1,t.next=6,N(e,a,s);case 6:if(o=t.sent,null!==o){t.next=9;break}return t.abrupt("return",{code:400,message:"No landmark"});case 9:u=n.imread(e),b=new n.Mat,n.cvtColor(u,b,n.COLOR_RGBA2GRAY,0),u.delete(),u=b,"a"===a.aq?u.cols>u.rows?o.cg?(b=new n.Mat,n.transpose(u,b),u.delete(),u=new n.Mat,n.flip(b,u,0),b.delete()):(b=new n.Mat,n.transpose(u,b),u.delete(),u=new n.Mat,n.flip(b,u,1),b.delete()):o.cg&&(b=new n.Mat,n.flip(u,b,-1),u.delete(),u=b):u.rows>u.cols?o.cg?(b=new n.Mat,n.transpose(u,b),u.delete(),u=new n.Mat,n.flip(b,u,0),b.delete()):(b=new n.Mat,n.transpose(u,b),u.delete(),u=new n.Mat,n.flip(b,u,1),b.delete()):o.cg&&(b=new n.Mat,n.flip(u,b,-1),u.delete(),u=b),o.cg&&(h=[u.cols-1-o.ce[0],u.rows-1-o.ce[1]],m=[u.cols-1-o.cd[0],u.rows-1-o.cd[1]],d=[u.cols-1-o.cc[0],u.rows-1-o.cc[1]],f=[u.cols-1-o.cb[0],u.rows-1-o.cb[1]],o.cb=h,o.cc=m,o.cd=d,o.ce=f),p=n.matFromArray(4,1,n.CV_32FC2,[o.cb[0],o.cb[1],o.cc[0],o.cc[1],o.cd[0],o.cd[1],o.ce[0],o.ce[1]]),v=n.matFromArray(4,1,n.CV_32FC2,[0,0,r.ci-1,0,0,r.ch-1,r.ci-1,r.ch-1]),g=new n.Mat,x=new n.Size(r.ci,r.ch),j=n.getPerspectiveTransform(p,v),n.warpPerspective(u,g,j,x,n.INTER_LINEAR,n.BORDER_CONSTANT,new n.Scalar),u.delete(),b=new n.Mat,n.threshold(g,b,s.bb||_,255,n.THRESH_BINARY_INV),g.delete(),g=b,O=[],R=Math.round(a.an*l),L=2*R,I=n.Mat.zeros(L,L,n.CV_8U),n.circle(I,{x:R,y:R},R,[255,255,255,255],-1),M=n.countNonZero(I),S=s.bi||k,F=Math.round(M*S),E=0;case 36:if(!(E<a.ak.length)){t.next=132;break}P=a.ak[E],A=[],T=0,D=0,"k"===P.ax&&(D=s.bl||0),B=!1,K=0;case 44:if(!(K<P.ad.length)){t.next=128;break}if(z=P.ad[K],$=z.ag.aw,H=z.ag.aa,V=Math.round($[0]*c),J=Math.round($[1]*c),G=Math.round(H[0]*c),Y=Math.round(H[1]*c),q=(G-V)/(z.ae-1),U=(Y-J)/(z.as-1),Z=void 0,Z="h"===z.ac?C:"g"===z.ac?w:"i"===z.ac?z.ab:C,"c"!==z.au){t.next=89;break}X=0;case 58:if(!(X<z.ae)){t.next=87;break}Q="",W=0;case 61:if(!(W<z.as)){t.next=78;break}if(tt=Math.round(z.ag.aw[0]*c+X*q)-R,et=Math.round(z.ag.aw[1]*c+W*U)-R,at=new n.Rect(tt,et,L,L),st=g.roi(at),nt=new n.Mat,n.bitwise_and(st,I,nt),it=n.countNonZero(nt),nt.delete(),st.delete(),!(it>=F)){t.next=75;break}if(Q+=Z[W],P.at){t.next=75;break}return t.abrupt("break",78);case 75:W++,t.next=61;break;case 78:if(0===Q.length&&(Q=" "),A.push(Q),T++,!("k"===P.ax&&D>0&&T===D)){t.next=84;break}return B=!0,t.abrupt("break",87);case 84:X++,t.next=58;break;case 87:t.next=123;break;case 89:if("d"!==z.au){t.next=122;break}rt=0;case 91:if(!(rt<z.as)){t.next=120;break}lt="",ct=0;case 94:if(!(ct<z.ae)){t.next=111;break}if(ot=Math.round(z.ag.aw[0]*c+ct*q)-R,ut=Math.round(z.ag.aw[1]*c+rt*U)-R,bt=new n.Rect(ot,ut,L,L),ht=g.roi(bt),mt=new n.Mat,n.bitwise_and(ht,I,mt),dt=n.countNonZero(mt),mt.delete(),ht.delete(),!(dt>=F)){t.next=108;break}if(lt+=Z[ct],P.at){t.next=108;break}return t.abrupt("break",111);case 108:ct++,t.next=94;break;case 111:if(0===lt.length&&(lt=" "),A.push(lt),T++,!("k"===P.ax&&D>0&&T===D)){t.next=117;break}return B=!0,t.abrupt("break",120);case 117:rt++,t.next=91;break;case 120:t.next=123;break;case 122:"e"===z.au||z.au;case 123:if(!B){t.next=125;break}return t.abrupt("break",128);case 125:K++,t.next=44;break;case 128:O.push(A);case 129:E++,t.next=36;break;case 132:return I.delete(),g.delete(),t.abrupt("return",{code:200,data:O});case 135:case"end":return t.stop()}},t)})),R.apply(this,arguments)}function L(t,e,a){return I.apply(this,arguments)}function I(){return I=Object(o["a"])(regeneratorRuntime.mark(function t(e,a,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,n){var i=new FileReader;i.onload=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(i){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=document.getElementById("ag"),r.onload=Object(o["a"])(regeneratorRuntime.mark(function e(){var i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("ag",a,s);case 3:i=e.sent,200!==i.code?(r=new Error(i.message),n(r)):t(i.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),r.src=i.target.result;case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),i.readAsDataURL(e)}));case 1:case"end":return t.stop()}},t)})),I.apply(this,arguments)}function M(t){return S.apply(this,arguments)}function S(){return S=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,s,n,i,r,l,c,o,u,b;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=new Date,s="0"===e.bn?"data penilaian "+a.toDateString():"data jawaban "+a.toDateString(),t.next=4,prompt("Nama file",s);case 4:if(n=t.sent,null!==n){t.next=7;break}return t.abrupt("return");case 7:for(i={filename:n,sheet:{data:[[{value:"File",type:"string"},{value:"Nomor ID",type:"string"}]]}},e.useNameLst&&i.sheet.data[0].push({value:"Nama",type:"string"}),"0"===e.bn&&i.sheet.data[0].push({value:"Benar",type:"string"},{value:"Salah",type:"string"},{value:"Nilai",type:"string"}),r=0;r<e.bk;r++)i.sheet.data[0].push({value:"".concat(r+1),type:"string"});for(c=0;c<e.bm.length;c++){for(o=e.bm[c],u=[{value:o[0],type:"string"},{value:o[1],type:"string"}],l=2,e.useNameLst&&(u.push({value:o[2],type:"string"}),l=3),"0"===e.bn&&(u.push({value:o[l+0],type:"number"},{value:o[l+1],type:"number"},{value:o[l+2],type:"number"}),l+=3),b=l;b<o.length;b++)u.push({value:o[b],type:"string"});i.sheet.data.push(u)}Object(h["a"])(i);case 13:case"end":return t.stop()}},t)})),S.apply(this,arguments)}function F(t,e,a,s){return E.apply(this,arguments)}function E(){return E=Object(o["a"])(regeneratorRuntime.mark(function t(e,a,s,n){var i,r,l,c,o,u,b,m,d,f,p,v,g,k,_,C,w,y,x,N,j,O,R,L,I,M,S,F,E,P,A,T,D;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=new Date,r="analisis soal "+i.toDateString(),t.next=4,prompt("Nama file?",r);case 4:if(l=t.sent,null!==l){t.next=7;break}return t.abrupt("return");case 7:for(c=[],o=[],u=[],b=[],m={},d=5,s&&(d=6),f=0;f<e.length;f++)for(p=d;p<e[f].length;p++)v=e[f][p],v.length>1&&(v=" "),-1===b.indexOf(v)&&(b.push(v),m[v]=0);for(b=b.sort(),g=0;g<n;g++){for(_ in k={},m)k[_]=0;c.push(k)}for(C=0;C<e.length;C++)for(w=0;w<n;w++)y=e[C][d+w],y.length>1&&(y=" "),c[w][y]+=1;for(x=0;x<n;x++){for(N=0,j=0;j<b.length;j++)N+=c[x][b[j]];for(O={},R=0;R<b.length;R++)O[b[R]]=100*c[x][b[R]]/N;o.push(O),u.push(o[x][a[x]])}for(L={filename:l,sheet:{data:[[{value:"",type:"string"},{value:"Jumlah memilih",type:"string"}]]}},I=1;I<b.length;I++)L.sheet.data[0].push({value:"",type:"string"});for(L.sheet.data[0].push({value:"Persen memilih (%)",type:"string"}),M=1;M<b.length;M++)L.sheet.data[0].push({value:"",type:"string"});for(L.sheet.data[0].push({value:"Persen menjawab (%)",type:"string"}),L.sheet.data.push([{value:"Nomor soal",type:"string"}]),S=0;S<2;S++)for(F=0;F<b.length;F++)E=b[F]," "===E&&(E="Blank/multi"),L.sheet.data[1].push({value:E,type:"string"});for(L.sheet.data[1].push({value:"Benar",type:"string"}),L.sheet.data[1].push({value:"Salah",type:"string"}),P=0;P<n;P++){for(A=[{value:P+1,type:"number"}],T=0;T<b.length;T++)A.push({value:c[P][b[T]],type:"number"});for(D=0;D<b.length;D++)A.push({value:o[P][b[D]],type:"number"});A.push({value:u[P],type:"number"}),A.push({value:100-u[P],type:"number"}),L.sheet.data.push(A)}Object(h["a"])(L);case 30:case"end":return t.stop()}},t)})),E.apply(this,arguments)}function P(){var t=new Uint32Array(2),e=crypto.getRandomValues(t),a="".concat(e[0]).concat(e[1]);return localStorage.setItem("machine_id",a),a}function A(t){var e="".concat(t.getDate());e=e.padStart(2,"0");var a="".concat(t.getMonth()+1);a=a.padStart(2,"0");var s="".concat(t.getFullYear());return e+"/"+a+"/"+s}var T="";T="aHR0cHM6Ly9sb2cubXVrdGkuaWQvc2Z0";var D={name:"app",data:function(){return{cj:null,bo:"0",bl:100,bh:"belum memilih",bg:!1,bf:!1,az:!1,ba:[],inFilesName:"belum memilih",bd:!1,nmListFName:"belum memilih",useNameLst:!1,bj:{},omrProgress:0,procFileName:"",bc:!1,bm:[],bk:100,bn:"0",bp:[],ck:atob(T),sendTokenLoading:!1,machineId:null,omrResultDlg:!1,ansKLstDlg:!1,nameLstDlg:!1,processingDlg:!1,navBarIsActive:!1}},watch:{bl:function(t){(t<1||t>100)&&(this.bl=100)}},computed:{reqsOK:function(){return"0"===this.bo?!!(null!==this.cj&&this.az&&this.bd&&this.bl>0&&this.bl<=100):!!(null!==this.cj&&this.bd&&this.bl>0&&this.bl<=100)},scoreOffset:function(){return this.useNameLst?3:2},respOffset:function(){return this.useNameLst?"0"===this.bo?6:3:"0"===this.bo?5:2},unrecogLst:function(){return 0===this.bp.length?"":this.bp.join(", ")},formInfo:function(){if(null===this.cj)return"";var t=new Date(1e3*this.cj.aj),e=A(t);return"".concat(this.cj.bx," (exp. ").concat(e,")")}},created:function(){this.machineId=localStorage.getItem("machine_id");var t=localStorage.getItem("sf:sft");if(null!==t){var e=t.split(".");this.cj=JSON.parse(atob(e[1]))}},methods:{onTaskChange:function(t){this.bm=[],this.bp=[],"1"===this.bo&&(this.ba=[],this.az=!1,document.getElementById("anskfile").value="",this.onNoAnsKeyF())},onNoAnsKeyF:function(){this.az=!1,this.bh="belum memilih"},onAnsKFCh:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.target.files.length){t.next=3;break}return this.onNoAnsKeyF(),t.abrupt("return");case 3:if(!(this.bl<1||this.bl>100)){t.next=7;break}return document.getElementById("anskfile").value="",this.onNoAnsKeyF(),t.abrupt("return");case 7:if(a=e.target.files[0],"image/png"===a.type){t.next=11;break}return this.onNoAnsKeyF(),t.abrupt("return");case 11:return t.prev=11,this.bh="",this.bg=!0,this.bf=!0,s={bb:127,bl:this.bl},t.next=18,L(a,this.cj,s);case 18:n=t.sent,this.ba=n[1],this.az=!0,this.bg=!1,this.bf=!1,this.bh=a.name,t.next=33;break;case 26:t.prev=26,t.t0=t["catch"](11),console.log(t.t0),this.bg=!1,this.bf=!1,this.onNoAnsKeyF(),document.getElementById("anskfile").value="";case 33:case"end":return t.stop()}},t,this,[[11,26]])}));function e(e){return t.apply(this,arguments)}return e}(),onClrAnsKClick:function(t){document.getElementById("anskfile").value="",this.ba=[],this.az=!1,this.bh="belum memilih"},onInFilesCh:function(t){t.target.files.length>0?(this.bd=!0,this.inFilesName="".concat(t.target.files.length," file dipilih")):(this.bd=!1,this.inFilesName="belum memilih")},onNamesFileChange:function(t){if(this.bm=[],this.bp=[],0===t.target.files.length)return this.useNameLst=!1,this.bj={},void(this.nmListFName="belum memilih");if("text/csv"!==t.target.files[0].type)return document.getElementById("namelstfile").value="",this.useNameLst=!1,this.bj={},void(this.nmListFName="belum memilih");var e=this;b.a.parse(t.target.files[0],{complete:function(a){e.bj={};for(var s=1;s<a.data.length;s++)a.data[s].length<2||(e.bj[a.data[s][0]]=a.data[s][1]);e.useNameLst=!0,e.nmListFName=t.target.files[0].name}})},clrNameLst:function(t){this.bm=[],this.bp=[],document.getElementById("namelstfile").value="",this.bj={},this.useNameLst=!1,this.nmListFName="belum memilih"},br:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,s,n,i,r,l,c,o,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=document.getElementById("input-files"),this.bm=[],this.bp=[],this.bn=this.bo,this.processingDlg=!0,this.bc=!1,this.omrProgress=0,s=0;case 8:if(!(s<a.files.length)){t.next=34;break}if(!this.bc){t.next=11;break}return t.abrupt("break",34);case 11:if("image/png"===a.files[s].type){t.next=13;break}return t.abrupt("continue",31);case 13:return t.prev=13,n={bb:127,bl:this.bl},this.procFileName=a.files[s].name,t.next=18,L(a.files[s],this.cj,n);case 18:if(i=t.sent,r=i[0].join("").trim(),l=[a.files[s].name,r],this.useNameLst&&l.push(this.bj[r]),"0"===this.bo){for(l.push(0,0,0),c=0,o=0;o<i[1].length;o++)" "===this.ba[o]?c+=1:this.ba[o]===i[1][o]&&(c+=1),l.push(i[1][o]);l[this.scoreOffset]=c,l[this.scoreOffset+1]=this.bl-c,l[this.scoreOffset+2]=100*c/this.bl}else for(u=0;u<i[1].length;u++)l.push(i[1][u]);this.bm.push(l),this.omrProgress=Math.round(100*(s+1)/a.files.length),t.next=31;break;case 27:t.prev=27,t.t0=t["catch"](13),console.log("ERROR:",a.files[s].name,t.t0.message),this.bp.push(a.files[s].name);case 31:s++,t.next=8;break;case 34:this.bc?(this.bm=[],this.bp=[]):(this.bk=this.bl,this.omrResultDlg=!0),this.processingDlg=!1,this.bc=!1;case 37:case"end":return t.stop()}},t,this,[[13,27]])}));function e(e){return t.apply(this,arguments)}return e}(),bu:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a={bn:this.bn,useNameLst:this.useNameLst},Object(c["a"])(a,"bn",this.bn),Object(c["a"])(a,"bk",this.bk),Object(c["a"])(a,"bm",this.bm),s=a,M(s);case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),bv:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:F(this.bm,this.ba,this.useNameLst,this.bk);case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onBtnResetClick:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,confirm("Yakin untuk mereset?");case 2:if(e=t.sent,e){t.next=5;break}return t.abrupt("return");case 5:document.getElementById("anskfile").value="",document.getElementById("input-files").value="",document.getElementById("namelstfile").value="",this.bh="belum memilih",this.inFilesName="belum memilih",this.nmListFName="belum memilih",this.bl=100,this.bk=100,this.bo="0",this.bn="0",this.az=!1,this.bd=!1,this.ba=[],this.bj={},this.useNameLst=!1,this.bm=[],this.bp=[];case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),btnTokenInput:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n,i,r,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,prompt("Token akses?");case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:if(""!==e){t.next=7;break}return t.abrupt("return");case 7:return a="".concat(this.ck,"/").concat(e,".sft"),t.prev=8,this.sendTokenLoading=!0,t.next=12,fetch(a);case 12:return s=t.sent,t.next=15,s.text();case 15:n=t.sent,i=n.split("."),this.cj=JSON.parse(atob(i[1])),this.onClrAnsKClick(),localStorage.setItem("sf:sftid",e),localStorage.setItem("sf:sft",n),r=new Date,l=Math.round(r.valueOf()/1e3),localStorage.setItem("sf:sftlastdnld","".concat(l)),this.sendTokenLoading=!1,t.next=31;break;case 27:t.prev=27,t.t0=t["catch"](8),this.sendTokenLoading=!1,alert("Token tidak berlaku!");case 31:case"end":return t.stop()}},t,this,[[8,27]])}));function e(){return t.apply(this,arguments)}return e}(),btnTokenClear:function(){localStorage.removeItem("sf:sftid"),localStorage.removeItem("sf:sft"),this.cj=null}}},B=D,K=(a("034f"),a("2877")),z=Object(K["a"])(B,r,l,!1,null,null,null),$=z.exports,H=a("6d61");a("92c6");function V(){var t=localStorage.getItem("machine_id");null===t&&(t=P())}Object.defineProperty(i["a"].prototype,"$omr",{value:s}),i["a"].config.productionTip=!1;var J=0;V();var G=setInterval(function(){J++;try{H["getBuildInformation"](),clearInterval(G),Object.defineProperty(i["a"].prototype,"$cv",{value:H}),x(H),document.getElementById("logo-loading").style.display="none",new i["a"]({render:function(t){return t($)}}).$mount("#app")}catch(t){J>1e3&&clearInterval(G),alert("Gagal mengunduh aplikasi. Tekan tombol refresh untuk mencoba lagi!")}},25)},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.cb1d3d69.js.map