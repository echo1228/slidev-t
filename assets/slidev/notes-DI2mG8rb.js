import{d as F,t as z,Y as N,z as i,E as $,o as c,b as r,e,h as b,B as o,l as a,k as u,x as C,F as B}from"../modules/vue-DfOUTzrx.js";import{u as T,a as E,d,e as D,s as H,f as L}from"../index-jqjjFsvn.js";import{_ as V,C as I}from"./NoteDisplay.vue_vue_type_style_index_0_lang-0sx7xWFm.js";import{_ as f}from"./IconButton.vue_vue_type_script_setup_true_lang-B0nzeBKi.js";import"../modules/shiki-D-1PhLMd.js";const M={class:"h-full pt-2 flex flex-col"},R={class:"flex-none border-t border-main",px3:"",py2:""},Y={class:"flex-none border-t border-main"},j={class:"flex gap-1 items-center px-6 py-3"},q={key:0,class:"i-carbon:minimize"},A={key:1,class:"i-carbon:maximize"},G={class:"p2 text-center"},W=F({__name:"notes",setup(J){T({title:`Notes - ${H}`});const{slides:g,total:m}=E(),{isFullscreen:p,toggle:y}=L,v=z(),s=N("slidev-notes-font-size",18),n=i(()=>d.page),_=i(()=>g.value.find(l=>l.no===n.value));$(n,()=>{var l;(l=v.value)==null||l.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function S(){s.value=s.value+1}function w(){s.value=s.value-1}const x=i(()=>{const l=d.clicks,t=d.clicksTotal;return D(z(l),void 0,t)});return(l,t)=>{var k,h;return c(),r(B,null,[e("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:b({width:`${(n.value-1)/(o(m)-1)*100+1}%`})},null,4),e("div",M,[e("div",{ref_key:"scroller",ref:v,class:"px-5 flex-auto h-full overflow-auto",style:b({fontSize:`${o(s)}px`})},[a(V,{note:(k=_.value)==null?void 0:k.meta.slide.note,"note-html":(h=_.value)==null?void 0:h.meta.slide.noteHTML,placeholder:`No notes for Slide ${n.value}.`,"clicks-context":x.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),e("div",R,[a(I,{"clicks-context":x.value,readonly:""},null,8,["clicks-context"])]),e("div",Y,[e("div",j,[a(f,{title:o(p)?"Close fullscreen":"Enter fullscreen",onClick:o(y)},{default:u(()=>[o(p)?(c(),r("div",q)):(c(),r("div",A))]),_:1},8,["title","onClick"]),a(f,{title:"Increase font size",onClick:S},{default:u(()=>t[0]||(t[0]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1}),a(f,{title:"Decrease font size",onClick:w},{default:u(()=>t[1]||(t[1]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1}),t[2]||(t[2]=e("div",{class:"flex-auto"},null,-1)),e("div",G,C(n.value)+" / "+C(o(m)),1)])])])],64)}}});export{W as default};
