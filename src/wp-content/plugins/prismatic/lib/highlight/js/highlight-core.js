/*!
  Highlight.js v11.4.0 (git: 2d0e7c1094)
  (c) 2006-2022 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function t(e){
return e instanceof Map?e.clear=e.delete=e.set=()=>{
throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{var i=e[n]
;"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}
e.exports=t,e.exports.default=t;var n=e.exports;class i{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function r(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.kind
;class a{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=r(e)}openNode(e){if(!o(e))return;let t=e.kind
;t=e.sublanguage?"language-"+t:((e,{prefix:t})=>{if(e.includes(".")){
const n=e.split(".")
;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
}return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){
o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}
addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
return new a(this,this.options).value()}finalize(){return!0}}function g(e){
return e?"string"==typeof e?e:e.source:null}function d(e){return f("(?=",e,")")}
function u(e){return f("(?:",e,")*")}function h(e){return f("(?:",e,")?")}
function f(...e){return e.map((e=>g(e))).join("")}function p(...e){const t=(e=>{
const t=e[e.length-1]
;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
})(e);return"("+(t.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}
function b(e){return RegExp(e.toString()+"|").exec("").length-1}
const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function E(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
;let i=g(e),r="";for(;i.length>0;){const e=m.exec(i);if(!e){r+=i;break}
r+=i.substring(0,e.index),
i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+t):(r+=e[0],
"("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}
const x="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",_="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",k={
begin:"\\\\[\\s\\S]",relevance:0},O={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[k]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[k]},M=(e,t,n={})=>{const i=s({scope:"comment",begin:e,end:t,
contains:[]},n);i.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const r=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return i.contains.push({begin:f(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
},S=M("//","$"),R=M("/\\*","\\*/"),j=M("#","$");var A=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:x,UNDERSCORE_IDENT_RE:w,
NUMBER_RE:y,C_NUMBER_RE:_,BINARY_NUMBER_RE:v,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=f(t,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:t,
end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:k,APOS_STRING_MODE:O,QUOTE_STRING_MODE:N,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:M,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:j,
NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:_,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:v,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[k,{begin:/\[/,end:/\]/,relevance:0,
contains:[k]}]}]},TITLE_MODE:{scope:"title",begin:x,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:w,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function I(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function T(e,t){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function L(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=I,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function B(e,t){
Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function D(e,t){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function H(e,t){
void 0===e.relevance&&(e.relevance=1)}const P=(e,t)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
})),e.keywords=n.keywords,e.begin=f(n.beforeMatch,d(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},C=["of","and","for","in","not","or","if","then","parent","list","value"]
;function $(e,t,n="keyword"){const i=Object.create(null)
;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
Object.assign(i,$(e[n],t,n))})),i;function r(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
return t?Number(t):(e=>C.includes(e.toLowerCase()))(e)?0:1}const z={},K=e=>{
console.error(e)},W=(e,...t)=>{console.log("WARN: "+e,...t)},X=(e,t)=>{
z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
},G=Error();function Z(e,t,{key:n}){let i=0;const r=e[n],s={},o={}
;for(let e=1;e<=t.length;e++)o[e+i]=r[e],s[e+i]=!0,i+=b(t[e-1])
;e[n]=o,e[n]._emit=s,e[n]._multi=!0}function F(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
G
;if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),
G;Z(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
G
;if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),
G;Z(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}})(e)}function V(e){
function t(t,n){
return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(E(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const t=this.matcherRe.exec(e);if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=s(e.classNameAliases||{}),function n(r,o){const a=r
;if(r.isCompiled)return a
;[T,D,F,P].forEach((e=>e(r,o))),e.compilerExtensions.forEach((e=>e(r,o))),
r.__beforeBegin=null,[L,B,H].forEach((e=>e(r,o))),r.isCompiled=!0;let c=null
;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),
c=r.keywords.$pattern,
delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=$(r.keywords,e.case_insensitive)),
a.keywordPatternRe=t(c,!0),
o&&(r.begin||(r.begin=/\B|\b/),a.beginRe=t(a.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),
r.end&&(a.endRe=t(a.end)),
a.terminatorEnd=g(a.end)||"",r.endsWithParent&&o.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+o.terminatorEnd)),
r.illegal&&(a.illegalRe=t(r.illegal)),
r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?s(e,{
starts:e.starts?s(e.starts):null
}):Object.isFrozen(e)?s(e):e))("self"===e?r:e)))),r.contains.forEach((e=>{n(e,a)
})),r.starts&&n(r.starts,o),a.matcher=(e=>{const t=new i
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
const Y=r,Q=s,ee=Symbol("nomatch");var te=(e=>{
const t=Object.create(null),r=Object.create(null),s=[];let o=!0
;const a="Could not find the language '{}', did you forget to load/include a language module?",c={
disableAutodetect:!0,name:"Plain text",contains:[]};let g={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:l};function b(e){
return g.noHighlightRe.test(e)}function m(e,t,n){let i="",r=""
;"object"==typeof t?(i=e,
n=t.ignoreIllegals,r=t.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),
X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
r=e,i=t),void 0===n&&(n=!0);const s={code:i,language:r};N("before:highlight",s)
;const o=s.result?s.result:E(s.language,s.code,n)
;return o.code=s.code,N("after:highlight",o),o}function E(e,n,r,s){
const c=Object.create(null);function l(){if(!O.keywords)return void M.addText(S)
;let e=0;O.keywordPatternRe.lastIndex=0;let t=O.keywordPatternRe.exec(S),n=""
;for(;t;){n+=S.substring(e,t.index)
;const r=y.case_insensitive?t[0].toLowerCase():t[0],s=(i=r,O.keywords[i]);if(s){
const[e,i]=s
;if(M.addText(n),n="",c[r]=(c[r]||0)+1,c[r]<=7&&(R+=i),e.startsWith("_"))n+=t[0];else{
const n=y.classNameAliases[e]||e;M.addKeyword(t[0],n)}}else n+=t[0]
;e=O.keywordPatternRe.lastIndex,t=O.keywordPatternRe.exec(S)}var i
;n+=S.substr(e),M.addText(n)}function d(){null!=O.subLanguage?(()=>{
if(""===S)return;let e=null;if("string"==typeof O.subLanguage){
if(!t[O.subLanguage])return void M.addText(S)
;e=E(O.subLanguage,S,!0,N[O.subLanguage]),N[O.subLanguage]=e._top
}else e=x(S,O.subLanguage.length?O.subLanguage:null)
;O.relevance>0&&(R+=e.relevance),M.addSublanguage(e._emitter,e.language)
})():l(),S=""}function u(e,t){let n=1;for(;void 0!==t[n];){if(!e._emit[n]){n++
;continue}const i=y.classNameAliases[e[n]]||e[n],r=t[n]
;i?M.addKeyword(r,i):(S=r,l(),S=""),n++}}function h(e,t){
return e.scope&&"string"==typeof e.scope&&M.openNode(y.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(M.addKeyword(S,y.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
S=""):e.beginScope._multi&&(u(e.beginScope,t),S="")),O=Object.create(e,{parent:{
value:O}}),O}function f(e,t,n){let r=((e,t)=>{const n=e&&e.exec(t)
;return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e)
;e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return f(e.parent,t,n)}function p(e){
return 0===O.matcher.regexIndex?(S+=e[0],1):(I=!0,0)}function b(e){
const t=e[0],i=n.substr(e.index),r=f(O,e,i);if(!r)return ee;const s=O
;O.endScope&&O.endScope._wrap?(d(),
M.addKeyword(t,O.endScope._wrap)):O.endScope&&O.endScope._multi?(d(),
u(O.endScope,e)):s.skip?S+=t:(s.returnEnd||s.excludeEnd||(S+=t),
d(),s.excludeEnd&&(S=t));do{
O.scope&&M.closeNode(),O.skip||O.subLanguage||(R+=O.relevance),O=O.parent
}while(O!==r.parent);return r.starts&&h(r.starts,e),s.returnEnd?0:t.length}
let m={};function w(t,s){const a=s&&s[0];if(S+=t,null==a)return d(),0
;if("begin"===m.type&&"end"===s.type&&m.index===s.index&&""===a){
if(S+=n.slice(s.index,s.index+1),!o){const t=Error(`0 width match regex (${e})`)
;throw t.languageName=e,t.badRule=m.rule,t}return 1}
if(m=s,"begin"===s.type)return(e=>{
const t=e[0],n=e.rule,r=new i(n),s=[n.__beforeBegin,n["on:begin"]]
;for(const n of s)if(n&&(n(e,r),r.isMatchIgnored))return p(t)
;return n.skip?S+=t:(n.excludeBegin&&(S+=t),
d(),n.returnBegin||n.excludeBegin||(S=t)),h(n,e),n.returnBegin?0:t.length})(s)
;if("illegal"===s.type&&!r){
const e=Error('Illegal lexeme "'+a+'" for mode "'+(O.scope||"<unnamed>")+'"')
;throw e.mode=O,e}if("end"===s.type){const e=b(s);if(e!==ee)return e}
if("illegal"===s.type&&""===a)return 1
;if(A>1e5&&A>3*s.index)throw Error("potential infinite loop, way more iterations than matches")
;return S+=a,a.length}const y=v(e)
;if(!y)throw K(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const _=V(y);let k="",O=s||_;const N={},M=new g.__emitter(g);(()=>{const e=[]
;for(let t=O;t!==y;t=t.parent)t.scope&&e.unshift(t.scope)
;e.forEach((e=>M.openNode(e)))})();let S="",R=0,j=0,A=0,I=!1;try{
for(O.matcher.considerAll();;){
A++,I?I=!1:O.matcher.considerAll(),O.matcher.lastIndex=j
;const e=O.matcher.exec(n);if(!e)break;const t=w(n.substring(j,e.index),e)
;j=e.index+t}return w(n.substr(j)),M.closeAllNodes(),M.finalize(),k=M.toHTML(),{
language:e,value:k,relevance:R,illegal:!1,_emitter:M,_top:O}}catch(t){
if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),
illegal:!0,relevance:0,_illegalBy:{message:t.message,index:j,
context:n.slice(j-100,j+100),mode:t.mode,resultSoFar:k},_emitter:M};if(o)return{
language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:O}
;throw t}}function x(e,n){n=n||g.languages||Object.keys(t);const i=(e=>{
const t={value:Y(e),illegal:!1,relevance:0,_top:c,_emitter:new g.__emitter(g)}
;return t._emitter.addText(e),t})(e),r=n.filter(v).filter(O).map((t=>E(t,e,!1)))
;r.unshift(i);const s=r.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(v(e.language).supersetOf===t.language)return 1
;if(v(t.language).supersetOf===e.language)return-1}return 0})),[o,a]=s,l=o
;return l.secondBest=a,l}function w(e){let t=null;const n=(e=>{
let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
;const n=g.languageDetectRe.exec(t);if(n){const t=v(n[1])
;return t||(W(a.replace("{}",n[1])),
W("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
return t.split(/\s+/).find((e=>b(e)||v(e)))})(e);if(b(n))return
;if(N("before:highlightElement",{el:e,language:n
}),e.children.length>0&&(g.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),g.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;t=e;const i=t.textContent,s=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
;e.innerHTML=s.value,((e,t,n)=>{const i=t&&r[t]||n
;e.classList.add("hljs"),e.classList.add("language-"+i)
})(e,n,s.language),e.result={language:s.language,re:s.relevance,
relevance:s.relevance},s.secondBest&&(e.secondBest={
language:s.secondBest.language,relevance:s.secondBest.relevance
}),N("after:highlightElement",{el:e,result:s,text:i})}let y=!1;function _(){
"loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(w):y=!0
}function v(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}
function k(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
r[e.toLowerCase()]=t}))}function O(e){const t=v(e)
;return t&&!t.disableAutodetect}function N(e,t){const n=e;s.forEach((e=>{
e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
y&&_()}),!1),Object.assign(e,{highlight:m,highlightAuto:x,highlightAll:_,
highlightElement:w,
highlightBlock:e=>(X("10.7.0","highlightBlock will be removed entirely in v12.0"),
X("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{g=Q(g,e)},
initHighlighting:()=>{
_(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
_(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(n,i)=>{let r=null;try{r=i(e)}catch(e){
if(K("Language definition for '{}' could not be registered.".replace("{}",n)),
!o)throw e;K(e),r=c}
r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&k(r.aliases,{
languageName:n})},unregisterLanguage:e=>{delete t[e]
;for(const t of Object.keys(r))r[t]===e&&delete r[t]},
listLanguages:()=>Object.keys(t),getLanguage:v,registerAliases:k,
autoDetection:O,inherit:Q,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)}
}),e.debugMode=()=>{o=!1},e.safeMode=()=>{o=!0
},e.versionString="11.4.0",e.regex={concat:f,lookahead:d,either:p,optional:h,
anyNumberOfTimes:u};for(const e in A)"object"==typeof A[e]&&n(A[e])
;return Object.assign(e,A),e})({});return te}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `csharp` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),
built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],
literal:["default","false","null","true"]},a=e.inherit(e.TITLE_MODE,{
begin:"[a-zA-Z](\\.?\\w)*"}),i={className:"number",variants:[{
begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},s={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
},t=e.inherit(s,{illegal:/\n/}),r={className:"subst",begin:/\{/,end:/\}/,
keywords:n},l=e.inherit(r,{illegal:/\n/}),c={className:"string",begin:/\$"/,
end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/
},e.BACKSLASH_ESCAPE,l]},o={className:"string",begin:/\$@"/,end:'"',contains:[{
begin:/\{\{/},{begin:/\}\}/},{begin:'""'},r]},d=e.inherit(o,{illegal:/\n/,
contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},l]})
;r.contains=[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE],
l.contains=[d,c,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.inherit(e.C_BLOCK_COMMENT_MODE,{
illegal:/\n/})];const g={variants:[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},E={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]
},_=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",b={
begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
end:"$",keywords:{
keyword:"if else elif endif define undef warning error line region endregion pragma checksum"
}},g,i,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,
illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"
},a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
contains:[a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
contains:[a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
className:"string",begin:/"/,end:/"/}]},{
beginKeywords:"new return throw await else",relevance:0},{className:"function",
begin:"("+_+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
contains:[e.TITLE_MODE,E],relevance:0},{match:/\(\)/},{className:"params",
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
contains:[g,i,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},b]}}})()
;hljs.registerLanguage("csharp",e)})();/*! `css` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],o=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],r=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-height","max-width","min-height","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse()
;return a=>{const n=a.regex,l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}
}))(a),s=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE];return{name:"CSS",
case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},
classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,{
begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l.CSS_NUMBER_MODE,{
className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{
className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
begin:":("+i.join("|")+")"},{begin:":(:)?("+o.join("|")+")"}]},l.CSS_VARIABLE,{
className:"attribute",begin:"\\b("+r.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,
contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...s,{
begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]
},l.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",relevance:0,
illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{
begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{
$pattern:/[a-z-]+/,keyword:"and or not only",attribute:t.join(" ")},contains:[{
begin:/[a-z-]+(?=:)/,className:"attribute"},...s,l.CSS_NUMBER_MODE]}]},{
className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}})()
;hljs.registerLanguage("css",e)})();/*! `sas` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex;return{name:"SAS",
case_insensitive:!0,keywords:{
literal:["null","missing","_all_","_automatic_","_character_","_infile_","_n_","_name_","_null_","_numeric_","_user_","_webout_"],
keyword:["do","if","then","else","end","until","while","abort","array","attrib","by","call","cards","cards4","catname","continue","datalines","datalines4","delete","delim","delimiter","display","dm","drop","endsas","error","file","filename","footnote","format","goto","in","infile","informat","input","keep","label","leave","length","libname","link","list","lostcard","merge","missing","modify","options","output","out","page","put","redirect","remove","rename","replace","retain","return","select","set","skip","startsas","stop","title","update","waitsas","where","window","x|0","systask","add","and","alter","as","cascade","check","create","delete","describe","distinct","drop","foreign","from","group","having","index","insert","into","in","key","like","message","modify","msgtype","not","null","on","or","order","primary","references","reset","restrict","select","set","table","unique","update","validate","view","where"]
},contains:[{className:"keyword",begin:/^\s*(proc [\w\d_]+|data|run|quit)[\s;]/
},{className:"variable",begin:/&[a-zA-Z_&][a-zA-Z0-9_]*\.?/},{
begin:[/^\s*/,/datalines;|cards;/,/(?:.*\n)+/,/^\s*;\s*$/],className:{
2:"keyword",3:"string"}},{
begin:[/%mend|%macro/,/\s+/,/[a-zA-Z_&][a-zA-Z0-9_]*/],className:{1:"built_in",
3:"title.function"}},{className:"built_in",
begin:"%"+t.either("bquote","nrbquote","cmpres","qcmpres","compstor","datatyp","display","do","else","end","eval","global","goto","if","index","input","keydef","label","left","length","let","local","lowcase","macro","mend","nrbquote","nrquote","nrstr","put","qcmpres","qleft","qlowcase","qscan","qsubstr","qsysfunc","qtrim","quote","qupcase","scan","str","substr","superq","syscall","sysevalf","sysexec","sysfunc","sysget","syslput","sysprod","sysrc","sysrput","then","to","trim","unquote","until","upcase","verify","while","window")
},{className:"title.function",begin:/%[a-zA-Z_][a-zA-Z_0-9]*/},{
className:"meta",
begin:t.either("abs","addr","airy","arcos","arsin","atan","attrc","attrn","band","betainv","blshift","bnot","bor","brshift","bxor","byte","cdf","ceil","cexist","cinv","close","cnonct","collate","compbl","compound","compress","cos","cosh","css","curobs","cv","daccdb","daccdbsl","daccsl","daccsyd","dacctab","dairy","date","datejul","datepart","datetime","day","dclose","depdb","depdbsl","depdbsl","depsl","depsl","depsyd","depsyd","deptab","deptab","dequote","dhms","dif","digamma","dim","dinfo","dnum","dopen","doptname","doptnum","dread","dropnote","dsname","erf","erfc","exist","exp","fappend","fclose","fcol","fdelete","fetch","fetchobs","fexist","fget","fileexist","filename","fileref","finfo","finv","fipname","fipnamel","fipstate","floor","fnonct","fnote","fopen","foptname","foptnum","fpoint","fpos","fput","fread","frewind","frlen","fsep","fuzz","fwrite","gaminv","gamma","getoption","getvarc","getvarn","hbound","hms","hosthelp","hour","ibessel","index","indexc","indexw","input","inputc","inputn","int","intck","intnx","intrr","irr","jbessel","juldate","kurtosis","lag","lbound","left","length","lgamma","libname","libref","log","log10","log2","logpdf","logpmf","logsdf","lowcase","max","mdy","mean","min","minute","mod","month","mopen","mort","n","netpv","nmiss","normal","note","npv","open","ordinal","pathname","pdf","peek","peekc","pmf","point","poisson","poke","probbeta","probbnml","probchi","probf","probgam","probhypr","probit","probnegb","probnorm","probt","put","putc","putn","qtr","quote","ranbin","rancau","ranexp","rangam","range","rank","rannor","ranpoi","rantbl","rantri","ranuni","repeat","resolve","reverse","rewind","right","round","saving","scan","sdf","second","sign","sin","sinh","skewness","soundex","spedis","sqrt","std","stderr","stfips","stname","stnamel","substr","sum","symget","sysget","sysmsg","sysprod","sysrc","system","tan","tanh","time","timepart","tinv","tnonct","today","translate","tranwrd","trigamma","trim","trimn","trunc","uniform","upcase","uss","var","varfmt","varinfmt","varlabel","varlen","varname","varnum","varray","varrayx","vartype","verify","vformat","vformatd","vformatdx","vformatn","vformatnx","vformatw","vformatwx","vformatx","vinarray","vinarrayx","vinformat","vinformatd","vinformatdx","vinformatn","vinformatnx","vinformatw","vinformatwx","vinformatx","vlabel","vlabelx","vlength","vlengthx","vname","vnamex","vtype","vtypex","weekday","year","yyq","zipfips","zipname","zipnamel","zipstate")+"(?=\\()"
},{className:"string",variants:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},e.COMMENT("\\*",";"),e.C_BLOCK_COMMENT_MODE]}}})()
;hljs.registerLanguage("sas",e)})();/*! `d` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a={
$pattern:e.UNDERSCORE_IDENT_RE,
keyword:"abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
built_in:"bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
literal:"false null true"
},d="((0|[1-9][\\d_]*)|0[bB][01_]+|0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))",n="\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",t={
className:"number",begin:"\\b"+d+"(L|u|U|Lu|LU|uL|UL)?",relevance:0},_={
className:"number",
begin:"\\b(((0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))|((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)))|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))?))([fF]|L|i|[fF]i|Li)?|"+d+"(i|[fF]i|Li))",
relevance:0},r={className:"string",begin:"'("+n+"|.)",end:"'",illegal:"."},i={
className:"string",begin:'"',contains:[{begin:n,relevance:0}],end:'"[cwd]?'
},s=e.COMMENT("\\/\\+","\\+\\/",{contains:["self"],relevance:10});return{
name:"D",keywords:a,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,{
className:"string",begin:'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',relevance:10},i,{
className:"string",begin:'[rq]"',end:'"[cwd]?',relevance:5},{className:"string",
begin:"`",end:"`[cwd]?"},{className:"string",begin:'q"\\{',end:'\\}"'},_,t,r,{
className:"meta",begin:"^#!",end:"$",relevance:5},{className:"meta",
begin:"#(line)",end:"$",relevance:5},{className:"keyword",
begin:"@[a-zA-Z_][a-zA-Z_\\d]*"}]}}})();hljs.registerLanguage("d",e)})();/*! `powershell` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={$pattern:/-?[A-z\.\-]+\b/,
keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"
},s={begin:"`[\\s\\S]",relevance:0},i={className:"variable",variants:[{
begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]
},a={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],
contains:[s,i,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},t={
className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]
},r=e.inherit(e.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,
end:/#>/}],contains:[{className:"doctag",variants:[{
begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
},{
begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
}]}]}),c={className:"class",beginKeywords:"class enum",end:/\s*[{]/,
excludeEnd:!0,relevance:0,contains:[e.TITLE_MODE]},l={className:"function",
begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,
contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",
begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,
className:"params",relevance:0,contains:[i]}]},o={begin:/using\s/,end:/$/,
returnBegin:!0,contains:[a,t,{className:"keyword",
begin:/(using|assembly|command|module|namespace|type)/}]},p={
className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,
relevance:0,contains:[{className:"keyword",
begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,
relevance:0},e.inherit(e.TITLE_MODE,{endsParent:!0})]
},g=[p,r,s,e.NUMBER_MODE,a,t,{className:"built_in",variants:[{
begin:"(Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where)+(-)[\\w\\d]+"
}]},i,{className:"literal",begin:/\$(null|true|false)\b/},{
className:"selector-tag",begin:/@\B/,relevance:0}],m={begin:/\[/,end:/\]/,
excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",g,{
begin:"(string|char|byte|int|long|bool|decimal|single|double|DateTime|xml|array|hashtable|void)",
className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,
relevance:0})};return p.contains.unshift(m),{name:"PowerShell",
aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:n,
contains:g.concat(c,l,o,{variants:[{className:"operator",
begin:"(-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor)\\b"
},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},m)}}})()
;hljs.registerLanguage("powershell",e)})();/*! `gml` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"GML",case_insensitive:!1,
keywords:{
keyword:["begin","end","if","then","else","while","do","for","break","continue","with","until","repeat","exit","and","or","xor","not","return","mod","div","switch","case","default","var","globalvar","enum","function","constructor","delete","#macro","#region","#endregion"],
built_in:["is_real","is_string","is_array","is_undefined","is_int32","is_int64","is_ptr","is_vec3","is_vec4","is_matrix","is_bool","is_method","is_struct","is_infinity","is_nan","is_numeric","typeof","variable_global_exists","variable_global_get","variable_global_set","variable_instance_exists","variable_instance_get","variable_instance_set","variable_instance_get_names","variable_struct_exists","variable_struct_get","variable_struct_get_names","variable_struct_names_count","variable_struct_remove","variable_struct_set","array_delete","array_insert","array_length","array_length_1d","array_length_2d","array_height_2d","array_equals","array_create","array_copy","array_pop","array_push","array_resize","array_sort","random","random_range","irandom","irandom_range","random_set_seed","random_get_seed","randomize","randomise","choose","abs","round","floor","ceil","sign","frac","sqrt","sqr","exp","ln","log2","log10","sin","cos","tan","arcsin","arccos","arctan","arctan2","dsin","dcos","dtan","darcsin","darccos","darctan","darctan2","degtorad","radtodeg","power","logn","min","max","mean","median","clamp","lerp","dot_product","dot_product_3d","dot_product_normalised","dot_product_3d_normalised","dot_product_normalized","dot_product_3d_normalized","math_set_epsilon","math_get_epsilon","angle_difference","point_distance_3d","point_distance","point_direction","lengthdir_x","lengthdir_y","real","string","int64","ptr","string_format","chr","ansi_char","ord","string_length","string_byte_length","string_pos","string_copy","string_char_at","string_ord_at","string_byte_at","string_set_byte_at","string_delete","string_insert","string_lower","string_upper","string_repeat","string_letters","string_digits","string_lettersdigits","string_replace","string_replace_all","string_count","string_hash_to_newline","clipboard_has_text","clipboard_set_text","clipboard_get_text","date_current_datetime","date_create_datetime","date_valid_datetime","date_inc_year","date_inc_month","date_inc_week","date_inc_day","date_inc_hour","date_inc_minute","date_inc_second","date_get_year","date_get_month","date_get_week","date_get_day","date_get_hour","date_get_minute","date_get_second","date_get_weekday","date_get_day_of_year","date_get_hour_of_year","date_get_minute_of_year","date_get_second_of_year","date_year_span","date_month_span","date_week_span","date_day_span","date_hour_span","date_minute_span","date_second_span","date_compare_datetime","date_compare_date","date_compare_time","date_date_of","date_time_of","date_datetime_string","date_date_string","date_time_string","date_days_in_month","date_days_in_year","date_leap_year","date_is_today","date_set_timezone","date_get_timezone","game_set_speed","game_get_speed","motion_set","motion_add","place_free","place_empty","place_meeting","place_snapped","move_random","move_snap","move_towards_point","move_contact_solid","move_contact_all","move_outside_solid","move_outside_all","move_bounce_solid","move_bounce_all","move_wrap","distance_to_point","distance_to_object","position_empty","position_meeting","path_start","path_end","mp_linear_step","mp_potential_step","mp_linear_step_object","mp_potential_step_object","mp_potential_settings","mp_linear_path","mp_potential_path","mp_linear_path_object","mp_potential_path_object","mp_grid_create","mp_grid_destroy","mp_grid_clear_all","mp_grid_clear_cell","mp_grid_clear_rectangle","mp_grid_add_cell","mp_grid_get_cell","mp_grid_add_rectangle","mp_grid_add_instances","mp_grid_path","mp_grid_draw","mp_grid_to_ds_grid","collision_point","collision_rectangle","collision_circle","collision_ellipse","collision_line","collision_point_list","collision_rectangle_list","collision_circle_list","collision_ellipse_list","collision_line_list","instance_position_list","instance_place_list","point_in_rectangle","point_in_triangle","point_in_circle","rectangle_in_rectangle","rectangle_in_triangle","rectangle_in_circle","instance_find","instance_exists","instance_number","instance_position","instance_nearest","instance_furthest","instance_place","instance_create_depth","instance_create_layer","instance_copy","instance_change","instance_destroy","position_destroy","position_change","instance_id_get","instance_deactivate_all","instance_deactivate_object","instance_deactivate_region","instance_activate_all","instance_activate_object","instance_activate_region","room_goto","room_goto_previous","room_goto_next","room_previous","room_next","room_restart","game_end","game_restart","game_load","game_save","game_save_buffer","game_load_buffer","event_perform","event_user","event_perform_object","event_inherited","show_debug_message","show_debug_overlay","debug_event","debug_get_callstack","alarm_get","alarm_set","font_texture_page_size","keyboard_set_map","keyboard_get_map","keyboard_unset_map","keyboard_check","keyboard_check_pressed","keyboard_check_released","keyboard_check_direct","keyboard_get_numlock","keyboard_set_numlock","keyboard_key_press","keyboard_key_release","keyboard_clear","io_clear","mouse_check_button","mouse_check_button_pressed","mouse_check_button_released","mouse_wheel_up","mouse_wheel_down","mouse_clear","draw_self","draw_sprite","draw_sprite_pos","draw_sprite_ext","draw_sprite_stretched","draw_sprite_stretched_ext","draw_sprite_tiled","draw_sprite_tiled_ext","draw_sprite_part","draw_sprite_part_ext","draw_sprite_general","draw_clear","draw_clear_alpha","draw_point","draw_line","draw_line_width","draw_rectangle","draw_roundrect","draw_roundrect_ext","draw_triangle","draw_circle","draw_ellipse","draw_set_circle_precision","draw_arrow","draw_button","draw_path","draw_healthbar","draw_getpixel","draw_getpixel_ext","draw_set_colour","draw_set_color","draw_set_alpha","draw_get_colour","draw_get_color","draw_get_alpha","merge_colour","make_colour_rgb","make_colour_hsv","colour_get_red","colour_get_green","colour_get_blue","colour_get_hue","colour_get_saturation","colour_get_value","merge_color","make_color_rgb","make_color_hsv","color_get_red","color_get_green","color_get_blue","color_get_hue","color_get_saturation","color_get_value","merge_color","screen_save","screen_save_part","draw_set_font","draw_set_halign","draw_set_valign","draw_text","draw_text_ext","string_width","string_height","string_width_ext","string_height_ext","draw_text_transformed","draw_text_ext_transformed","draw_text_colour","draw_text_ext_colour","draw_text_transformed_colour","draw_text_ext_transformed_colour","draw_text_color","draw_text_ext_color","draw_text_transformed_color","draw_text_ext_transformed_color","draw_point_colour","draw_line_colour","draw_line_width_colour","draw_rectangle_colour","draw_roundrect_colour","draw_roundrect_colour_ext","draw_triangle_colour","draw_circle_colour","draw_ellipse_colour","draw_point_color","draw_line_color","draw_line_width_color","draw_rectangle_color","draw_roundrect_color","draw_roundrect_color_ext","draw_triangle_color","draw_circle_color","draw_ellipse_color","draw_primitive_begin","draw_vertex","draw_vertex_colour","draw_vertex_color","draw_primitive_end","sprite_get_uvs","font_get_uvs","sprite_get_texture","font_get_texture","texture_get_width","texture_get_height","texture_get_uvs","draw_primitive_begin_texture","draw_vertex_texture","draw_vertex_texture_colour","draw_vertex_texture_color","texture_global_scale","surface_create","surface_create_ext","surface_resize","surface_free","surface_exists","surface_get_width","surface_get_height","surface_get_texture","surface_set_target","surface_set_target_ext","surface_reset_target","surface_depth_disable","surface_get_depth_disable","draw_surface","draw_surface_stretched","draw_surface_tiled","draw_surface_part","draw_surface_ext","draw_surface_stretched_ext","draw_surface_tiled_ext","draw_surface_part_ext","draw_surface_general","surface_getpixel","surface_getpixel_ext","surface_save","surface_save_part","surface_copy","surface_copy_part","application_surface_draw_enable","application_get_position","application_surface_enable","application_surface_is_enabled","display_get_width","display_get_height","display_get_orientation","display_get_gui_width","display_get_gui_height","display_reset","display_mouse_get_x","display_mouse_get_y","display_mouse_set","display_set_ui_visibility","window_set_fullscreen","window_get_fullscreen","window_set_caption","window_set_min_width","window_set_max_width","window_set_min_height","window_set_max_height","window_get_visible_rects","window_get_caption","window_set_cursor","window_get_cursor","window_set_colour","window_get_colour","window_set_color","window_get_color","window_set_position","window_set_size","window_set_rectangle","window_center","window_get_x","window_get_y","window_get_width","window_get_height","window_mouse_get_x","window_mouse_get_y","window_mouse_set","window_view_mouse_get_x","window_view_mouse_get_y","window_views_mouse_get_x","window_views_mouse_get_y","audio_listener_position","audio_listener_velocity","audio_listener_orientation","audio_emitter_position","audio_emitter_create","audio_emitter_free","audio_emitter_exists","audio_emitter_pitch","audio_emitter_velocity","audio_emitter_falloff","audio_emitter_gain","audio_play_sound","audio_play_sound_on","audio_play_sound_at","audio_stop_sound","audio_resume_music","audio_music_is_playing","audio_resume_sound","audio_pause_sound","audio_pause_music","audio_channel_num","audio_sound_length","audio_get_type","audio_falloff_set_model","audio_play_music","audio_stop_music","audio_master_gain","audio_music_gain","audio_sound_gain","audio_sound_pitch","audio_stop_all","audio_resume_all","audio_pause_all","audio_is_playing","audio_is_paused","audio_exists","audio_sound_set_track_position","audio_sound_get_track_position","audio_emitter_get_gain","audio_emitter_get_pitch","audio_emitter_get_x","audio_emitter_get_y","audio_emitter_get_z","audio_emitter_get_vx","audio_emitter_get_vy","audio_emitter_get_vz","audio_listener_set_position","audio_listener_set_velocity","audio_listener_set_orientation","audio_listener_get_data","audio_set_master_gain","audio_get_master_gain","audio_sound_get_gain","audio_sound_get_pitch","audio_get_name","audio_sound_set_track_position","audio_sound_get_track_position","audio_create_stream","audio_destroy_stream","audio_create_sync_group","audio_destroy_sync_group","audio_play_in_sync_group","audio_start_sync_group","audio_stop_sync_group","audio_pause_sync_group","audio_resume_sync_group","audio_sync_group_get_track_pos","audio_sync_group_debug","audio_sync_group_is_playing","audio_debug","audio_group_load","audio_group_unload","audio_group_is_loaded","audio_group_load_progress","audio_group_name","audio_group_stop_all","audio_group_set_gain","audio_create_buffer_sound","audio_free_buffer_sound","audio_create_play_queue","audio_free_play_queue","audio_queue_sound","audio_get_recorder_count","audio_get_recorder_info","audio_start_recording","audio_stop_recording","audio_sound_get_listener_mask","audio_emitter_get_listener_mask","audio_get_listener_mask","audio_sound_set_listener_mask","audio_emitter_set_listener_mask","audio_set_listener_mask","audio_get_listener_count","audio_get_listener_info","audio_system","show_message","show_message_async","clickable_add","clickable_add_ext","clickable_change","clickable_change_ext","clickable_delete","clickable_exists","clickable_set_style","show_question","show_question_async","get_integer","get_string","get_integer_async","get_string_async","get_login_async","get_open_filename","get_save_filename","get_open_filename_ext","get_save_filename_ext","show_error","highscore_clear","highscore_add","highscore_value","highscore_name","draw_highscore","sprite_exists","sprite_get_name","sprite_get_number","sprite_get_width","sprite_get_height","sprite_get_xoffset","sprite_get_yoffset","sprite_get_bbox_left","sprite_get_bbox_right","sprite_get_bbox_top","sprite_get_bbox_bottom","sprite_save","sprite_save_strip","sprite_set_cache_size","sprite_set_cache_size_ext","sprite_get_tpe","sprite_prefetch","sprite_prefetch_multi","sprite_flush","sprite_flush_multi","sprite_set_speed","sprite_get_speed_type","sprite_get_speed","font_exists","font_get_name","font_get_fontname","font_get_bold","font_get_italic","font_get_first","font_get_last","font_get_size","font_set_cache_size","path_exists","path_get_name","path_get_length","path_get_time","path_get_kind","path_get_closed","path_get_precision","path_get_number","path_get_point_x","path_get_point_y","path_get_point_speed","path_get_x","path_get_y","path_get_speed","script_exists","script_get_name","timeline_add","timeline_delete","timeline_clear","timeline_exists","timeline_get_name","timeline_moment_clear","timeline_moment_add_script","timeline_size","timeline_max_moment","object_exists","object_get_name","object_get_sprite","object_get_solid","object_get_visible","object_get_persistent","object_get_mask","object_get_parent","object_get_physics","object_is_ancestor","room_exists","room_get_name","sprite_set_offset","sprite_duplicate","sprite_assign","sprite_merge","sprite_add","sprite_replace","sprite_create_from_surface","sprite_add_from_surface","sprite_delete","sprite_set_alpha_from_sprite","sprite_collision_mask","font_add_enable_aa","font_add_get_enable_aa","font_add","font_add_sprite","font_add_sprite_ext","font_replace","font_replace_sprite","font_replace_sprite_ext","font_delete","path_set_kind","path_set_closed","path_set_precision","path_add","path_assign","path_duplicate","path_append","path_delete","path_add_point","path_insert_point","path_change_point","path_delete_point","path_clear_points","path_reverse","path_mirror","path_flip","path_rotate","path_rescale","path_shift","script_execute","object_set_sprite","object_set_solid","object_set_visible","object_set_persistent","object_set_mask","room_set_width","room_set_height","room_set_persistent","room_set_background_colour","room_set_background_color","room_set_view","room_set_viewport","room_get_viewport","room_set_view_enabled","room_add","room_duplicate","room_assign","room_instance_add","room_instance_clear","room_get_camera","room_set_camera","asset_get_index","asset_get_type","file_text_open_from_string","file_text_open_read","file_text_open_write","file_text_open_append","file_text_close","file_text_write_string","file_text_write_real","file_text_writeln","file_text_read_string","file_text_read_real","file_text_readln","file_text_eof","file_text_eoln","file_exists","file_delete","file_rename","file_copy","directory_exists","directory_create","directory_destroy","file_find_first","file_find_next","file_find_close","file_attributes","filename_name","filename_path","filename_dir","filename_drive","filename_ext","filename_change_ext","file_bin_open","file_bin_rewrite","file_bin_close","file_bin_position","file_bin_size","file_bin_seek","file_bin_write_byte","file_bin_read_byte","parameter_count","parameter_string","environment_get_variable","ini_open_from_string","ini_open","ini_close","ini_read_string","ini_read_real","ini_write_string","ini_write_real","ini_key_exists","ini_section_exists","ini_key_delete","ini_section_delete","ds_set_precision","ds_exists","ds_stack_create","ds_stack_destroy","ds_stack_clear","ds_stack_copy","ds_stack_size","ds_stack_empty","ds_stack_push","ds_stack_pop","ds_stack_top","ds_stack_write","ds_stack_read","ds_queue_create","ds_queue_destroy","ds_queue_clear","ds_queue_copy","ds_queue_size","ds_queue_empty","ds_queue_enqueue","ds_queue_dequeue","ds_queue_head","ds_queue_tail","ds_queue_write","ds_queue_read","ds_list_create","ds_list_destroy","ds_list_clear","ds_list_copy","ds_list_size","ds_list_empty","ds_list_add","ds_list_insert","ds_list_replace","ds_list_delete","ds_list_find_index","ds_list_find_value","ds_list_mark_as_list","ds_list_mark_as_map","ds_list_sort","ds_list_shuffle","ds_list_write","ds_list_read","ds_list_set","ds_map_create","ds_map_destroy","ds_map_clear","ds_map_copy","ds_map_size","ds_map_empty","ds_map_add","ds_map_add_list","ds_map_add_map","ds_map_replace","ds_map_replace_map","ds_map_replace_list","ds_map_delete","ds_map_exists","ds_map_find_value","ds_map_find_previous","ds_map_find_next","ds_map_find_first","ds_map_find_last","ds_map_write","ds_map_read","ds_map_secure_save","ds_map_secure_load","ds_map_secure_load_buffer","ds_map_secure_save_buffer","ds_map_set","ds_priority_create","ds_priority_destroy","ds_priority_clear","ds_priority_copy","ds_priority_size","ds_priority_empty","ds_priority_add","ds_priority_change_priority","ds_priority_find_priority","ds_priority_delete_value","ds_priority_delete_min","ds_priority_find_min","ds_priority_delete_max","ds_priority_find_max","ds_priority_write","ds_priority_read","ds_grid_create","ds_grid_destroy","ds_grid_copy","ds_grid_resize","ds_grid_width","ds_grid_height","ds_grid_clear","ds_grid_set","ds_grid_add","ds_grid_multiply","ds_grid_set_region","ds_grid_add_region","ds_grid_multiply_region","ds_grid_set_disk","ds_grid_add_disk","ds_grid_multiply_disk","ds_grid_set_grid_region","ds_grid_add_grid_region","ds_grid_multiply_grid_region","ds_grid_get","ds_grid_get_sum","ds_grid_get_max","ds_grid_get_min","ds_grid_get_mean","ds_grid_get_disk_sum","ds_grid_get_disk_min","ds_grid_get_disk_max","ds_grid_get_disk_mean","ds_grid_value_exists","ds_grid_value_x","ds_grid_value_y","ds_grid_value_disk_exists","ds_grid_value_disk_x","ds_grid_value_disk_y","ds_grid_shuffle","ds_grid_write","ds_grid_read","ds_grid_sort","ds_grid_set","ds_grid_get","effect_create_below","effect_create_above","effect_clear","part_type_create","part_type_destroy","part_type_exists","part_type_clear","part_type_shape","part_type_sprite","part_type_size","part_type_scale","part_type_orientation","part_type_life","part_type_step","part_type_death","part_type_speed","part_type_direction","part_type_gravity","part_type_colour1","part_type_colour2","part_type_colour3","part_type_colour_mix","part_type_colour_rgb","part_type_colour_hsv","part_type_color1","part_type_color2","part_type_color3","part_type_color_mix","part_type_color_rgb","part_type_color_hsv","part_type_alpha1","part_type_alpha2","part_type_alpha3","part_type_blend","part_system_create","part_system_create_layer","part_system_destroy","part_system_exists","part_system_clear","part_system_draw_order","part_system_depth","part_system_position","part_system_automatic_update","part_system_automatic_draw","part_system_update","part_system_drawit","part_system_get_layer","part_system_layer","part_particles_create","part_particles_create_colour","part_particles_create_color","part_particles_clear","part_particles_count","part_emitter_create","part_emitter_destroy","part_emitter_destroy_all","part_emitter_exists","part_emitter_clear","part_emitter_region","part_emitter_burst","part_emitter_stream","external_call","external_define","external_free","window_handle","window_device","matrix_get","matrix_set","matrix_build_identity","matrix_build","matrix_build_lookat","matrix_build_projection_ortho","matrix_build_projection_perspective","matrix_build_projection_perspective_fov","matrix_multiply","matrix_transform_vertex","matrix_stack_push","matrix_stack_pop","matrix_stack_multiply","matrix_stack_set","matrix_stack_clear","matrix_stack_top","matrix_stack_is_empty","browser_input_capture","os_get_config","os_get_info","os_get_language","os_get_region","os_lock_orientation","display_get_dpi_x","display_get_dpi_y","display_set_gui_size","display_set_gui_maximise","display_set_gui_maximize","device_mouse_dbclick_enable","display_set_timing_method","display_get_timing_method","display_set_sleep_margin","display_get_sleep_margin","virtual_key_add","virtual_key_hide","virtual_key_delete","virtual_key_show","draw_enable_drawevent","draw_enable_swf_aa","draw_set_swf_aa_level","draw_get_swf_aa_level","draw_texture_flush","draw_flush","gpu_set_blendenable","gpu_set_ztestenable","gpu_set_zfunc","gpu_set_zwriteenable","gpu_set_lightingenable","gpu_set_fog","gpu_set_cullmode","gpu_set_blendmode","gpu_set_blendmode_ext","gpu_set_blendmode_ext_sepalpha","gpu_set_colorwriteenable","gpu_set_colourwriteenable","gpu_set_alphatestenable","gpu_set_alphatestref","gpu_set_alphatestfunc","gpu_set_texfilter","gpu_set_texfilter_ext","gpu_set_texrepeat","gpu_set_texrepeat_ext","gpu_set_tex_filter","gpu_set_tex_filter_ext","gpu_set_tex_repeat","gpu_set_tex_repeat_ext","gpu_set_tex_mip_filter","gpu_set_tex_mip_filter_ext","gpu_set_tex_mip_bias","gpu_set_tex_mip_bias_ext","gpu_set_tex_min_mip","gpu_set_tex_min_mip_ext","gpu_set_tex_max_mip","gpu_set_tex_max_mip_ext","gpu_set_tex_max_aniso","gpu_set_tex_max_aniso_ext","gpu_set_tex_mip_enable","gpu_set_tex_mip_enable_ext","gpu_get_blendenable","gpu_get_ztestenable","gpu_get_zfunc","gpu_get_zwriteenable","gpu_get_lightingenable","gpu_get_fog","gpu_get_cullmode","gpu_get_blendmode","gpu_get_blendmode_ext","gpu_get_blendmode_ext_sepalpha","gpu_get_blendmode_src","gpu_get_blendmode_dest","gpu_get_blendmode_srcalpha","gpu_get_blendmode_destalpha","gpu_get_colorwriteenable","gpu_get_colourwriteenable","gpu_get_alphatestenable","gpu_get_alphatestref","gpu_get_alphatestfunc","gpu_get_texfilter","gpu_get_texfilter_ext","gpu_get_texrepeat","gpu_get_texrepeat_ext","gpu_get_tex_filter","gpu_get_tex_filter_ext","gpu_get_tex_repeat","gpu_get_tex_repeat_ext","gpu_get_tex_mip_filter","gpu_get_tex_mip_filter_ext","gpu_get_tex_mip_bias","gpu_get_tex_mip_bias_ext","gpu_get_tex_min_mip","gpu_get_tex_min_mip_ext","gpu_get_tex_max_mip","gpu_get_tex_max_mip_ext","gpu_get_tex_max_aniso","gpu_get_tex_max_aniso_ext","gpu_get_tex_mip_enable","gpu_get_tex_mip_enable_ext","gpu_push_state","gpu_pop_state","gpu_get_state","gpu_set_state","draw_light_define_ambient","draw_light_define_direction","draw_light_define_point","draw_light_enable","draw_set_lighting","draw_light_get_ambient","draw_light_get","draw_get_lighting","shop_leave_rating","url_get_domain","url_open","url_open_ext","url_open_full","get_timer","achievement_login","achievement_logout","achievement_post","achievement_increment","achievement_post_score","achievement_available","achievement_show_achievements","achievement_show_leaderboards","achievement_load_friends","achievement_load_leaderboard","achievement_send_challenge","achievement_load_progress","achievement_reset","achievement_login_status","achievement_get_pic","achievement_show_challenge_notifications","achievement_get_challenges","achievement_event","achievement_show","achievement_get_info","cloud_file_save","cloud_string_save","cloud_synchronise","ads_enable","ads_disable","ads_setup","ads_engagement_launch","ads_engagement_available","ads_engagement_active","ads_event","ads_event_preload","ads_set_reward_callback","ads_get_display_height","ads_get_display_width","ads_move","ads_interstitial_available","ads_interstitial_display","device_get_tilt_x","device_get_tilt_y","device_get_tilt_z","device_is_keypad_open","device_mouse_check_button","device_mouse_check_button_pressed","device_mouse_check_button_released","device_mouse_x","device_mouse_y","device_mouse_raw_x","device_mouse_raw_y","device_mouse_x_to_gui","device_mouse_y_to_gui","iap_activate","iap_status","iap_enumerate_products","iap_restore_all","iap_acquire","iap_consume","iap_product_details","iap_purchase_details","facebook_init","facebook_login","facebook_status","facebook_graph_request","facebook_dialog","facebook_logout","facebook_launch_offerwall","facebook_post_message","facebook_send_invite","facebook_user_id","facebook_accesstoken","facebook_check_permission","facebook_request_read_permissions","facebook_request_publish_permissions","gamepad_is_supported","gamepad_get_device_count","gamepad_is_connected","gamepad_get_description","gamepad_get_button_threshold","gamepad_set_button_threshold","gamepad_get_axis_deadzone","gamepad_set_axis_deadzone","gamepad_button_count","gamepad_button_check","gamepad_button_check_pressed","gamepad_button_check_released","gamepad_button_value","gamepad_axis_count","gamepad_axis_value","gamepad_set_vibration","gamepad_set_colour","gamepad_set_color","os_is_paused","window_has_focus","code_is_compiled","http_get","http_get_file","http_post_string","http_request","json_encode","json_decode","zip_unzip","load_csv","base64_encode","base64_decode","md5_string_unicode","md5_string_utf8","md5_file","os_is_network_connected","sha1_string_unicode","sha1_string_utf8","sha1_file","os_powersave_enable","analytics_event","analytics_event_ext","win8_livetile_tile_notification","win8_livetile_tile_clear","win8_livetile_badge_notification","win8_livetile_badge_clear","win8_livetile_queue_enable","win8_secondarytile_pin","win8_secondarytile_badge_notification","win8_secondarytile_delete","win8_livetile_notification_begin","win8_livetile_notification_secondary_begin","win8_livetile_notification_expiry","win8_livetile_notification_tag","win8_livetile_notification_text_add","win8_livetile_notification_image_add","win8_livetile_notification_end","win8_appbar_enable","win8_appbar_add_element","win8_appbar_remove_element","win8_settingscharm_add_entry","win8_settingscharm_add_html_entry","win8_settingscharm_add_xaml_entry","win8_settingscharm_set_xaml_property","win8_settingscharm_get_xaml_property","win8_settingscharm_remove_entry","win8_share_image","win8_share_screenshot","win8_share_file","win8_share_url","win8_share_text","win8_search_enable","win8_search_disable","win8_search_add_suggestions","win8_device_touchscreen_available","win8_license_initialize_sandbox","win8_license_trial_version","winphone_license_trial_version","winphone_tile_title","winphone_tile_count","winphone_tile_back_title","winphone_tile_back_content","winphone_tile_back_content_wide","winphone_tile_front_image","winphone_tile_front_image_small","winphone_tile_front_image_wide","winphone_tile_back_image","winphone_tile_back_image_wide","winphone_tile_background_colour","winphone_tile_background_color","winphone_tile_icon_image","winphone_tile_small_icon_image","winphone_tile_wide_content","winphone_tile_cycle_images","winphone_tile_small_background_image","physics_world_create","physics_world_gravity","physics_world_update_speed","physics_world_update_iterations","physics_world_draw_debug","physics_pause_enable","physics_fixture_create","physics_fixture_set_kinematic","physics_fixture_set_density","physics_fixture_set_awake","physics_fixture_set_restitution","physics_fixture_set_friction","physics_fixture_set_collision_group","physics_fixture_set_sensor","physics_fixture_set_linear_damping","physics_fixture_set_angular_damping","physics_fixture_set_circle_shape","physics_fixture_set_box_shape","physics_fixture_set_edge_shape","physics_fixture_set_polygon_shape","physics_fixture_set_chain_shape","physics_fixture_add_point","physics_fixture_bind","physics_fixture_bind_ext","physics_fixture_delete","physics_apply_force","physics_apply_impulse","physics_apply_angular_impulse","physics_apply_local_force","physics_apply_local_impulse","physics_apply_torque","physics_mass_properties","physics_draw_debug","physics_test_overlap","physics_remove_fixture","physics_set_friction","physics_set_density","physics_set_restitution","physics_get_friction","physics_get_density","physics_get_restitution","physics_joint_distance_create","physics_joint_rope_create","physics_joint_revolute_create","physics_joint_prismatic_create","physics_joint_pulley_create","physics_joint_wheel_create","physics_joint_weld_create","physics_joint_friction_create","physics_joint_gear_create","physics_joint_enable_motor","physics_joint_get_value","physics_joint_set_value","physics_joint_delete","physics_particle_create","physics_particle_delete","physics_particle_delete_region_circle","physics_particle_delete_region_box","physics_particle_delete_region_poly","physics_particle_set_flags","physics_particle_set_category_flags","physics_particle_draw","physics_particle_draw_ext","physics_particle_count","physics_particle_get_data","physics_particle_get_data_particle","physics_particle_group_begin","physics_particle_group_circle","physics_particle_group_box","physics_particle_group_polygon","physics_particle_group_add_point","physics_particle_group_end","physics_particle_group_join","physics_particle_group_delete","physics_particle_group_count","physics_particle_group_get_data","physics_particle_group_get_mass","physics_particle_group_get_inertia","physics_particle_group_get_centre_x","physics_particle_group_get_centre_y","physics_particle_group_get_vel_x","physics_particle_group_get_vel_y","physics_particle_group_get_ang_vel","physics_particle_group_get_x","physics_particle_group_get_y","physics_particle_group_get_angle","physics_particle_set_group_flags","physics_particle_get_group_flags","physics_particle_get_max_count","physics_particle_get_radius","physics_particle_get_density","physics_particle_get_damping","physics_particle_get_gravity_scale","physics_particle_set_max_count","physics_particle_set_radius","physics_particle_set_density","physics_particle_set_damping","physics_particle_set_gravity_scale","network_create_socket","network_create_socket_ext","network_create_server","network_create_server_raw","network_connect","network_connect_raw","network_send_packet","network_send_raw","network_send_broadcast","network_send_udp","network_send_udp_raw","network_set_timeout","network_set_config","network_resolve","network_destroy","buffer_create","buffer_write","buffer_read","buffer_seek","buffer_get_surface","buffer_set_surface","buffer_delete","buffer_exists","buffer_get_type","buffer_get_alignment","buffer_poke","buffer_peek","buffer_save","buffer_save_ext","buffer_load","buffer_load_ext","buffer_load_partial","buffer_copy","buffer_fill","buffer_get_size","buffer_tell","buffer_resize","buffer_md5","buffer_sha1","buffer_base64_encode","buffer_base64_decode","buffer_base64_decode_ext","buffer_sizeof","buffer_get_address","buffer_create_from_vertex_buffer","buffer_create_from_vertex_buffer_ext","buffer_copy_from_vertex_buffer","buffer_async_group_begin","buffer_async_group_option","buffer_async_group_end","buffer_load_async","buffer_save_async","gml_release_mode","gml_pragma","steam_activate_overlay","steam_is_overlay_enabled","steam_is_overlay_activated","steam_get_persona_name","steam_initialised","steam_is_cloud_enabled_for_app","steam_is_cloud_enabled_for_account","steam_file_persisted","steam_get_quota_total","steam_get_quota_free","steam_file_write","steam_file_write_file","steam_file_read","steam_file_delete","steam_file_exists","steam_file_size","steam_file_share","steam_is_screenshot_requested","steam_send_screenshot","steam_is_user_logged_on","steam_get_user_steam_id","steam_user_owns_dlc","steam_user_installed_dlc","steam_set_achievement","steam_get_achievement","steam_clear_achievement","steam_set_stat_int","steam_set_stat_float","steam_set_stat_avg_rate","steam_get_stat_int","steam_get_stat_float","steam_get_stat_avg_rate","steam_reset_all_stats","steam_reset_all_stats_achievements","steam_stats_ready","steam_create_leaderboard","steam_upload_score","steam_upload_score_ext","steam_download_scores_around_user","steam_download_scores","steam_download_friends_scores","steam_upload_score_buffer","steam_upload_score_buffer_ext","steam_current_game_language","steam_available_languages","steam_activate_overlay_browser","steam_activate_overlay_user","steam_activate_overlay_store","steam_get_user_persona_name","steam_get_app_id","steam_get_user_account_id","steam_ugc_download","steam_ugc_create_item","steam_ugc_start_item_update","steam_ugc_set_item_title","steam_ugc_set_item_description","steam_ugc_set_item_visibility","steam_ugc_set_item_tags","steam_ugc_set_item_content","steam_ugc_set_item_preview","steam_ugc_submit_item_update","steam_ugc_get_item_update_progress","steam_ugc_subscribe_item","steam_ugc_unsubscribe_item","steam_ugc_num_subscribed_items","steam_ugc_get_subscribed_items","steam_ugc_get_item_install_info","steam_ugc_get_item_update_info","steam_ugc_request_item_details","steam_ugc_create_query_user","steam_ugc_create_query_user_ex","steam_ugc_create_query_all","steam_ugc_create_query_all_ex","steam_ugc_query_set_cloud_filename_filter","steam_ugc_query_set_match_any_tag","steam_ugc_query_set_search_text","steam_ugc_query_set_ranked_by_trend_days","steam_ugc_query_add_required_tag","steam_ugc_query_add_excluded_tag","steam_ugc_query_set_return_long_description","steam_ugc_query_set_return_total_only","steam_ugc_query_set_allow_cached_response","steam_ugc_send_query","shader_set","shader_get_name","shader_reset","shader_current","shader_is_compiled","shader_get_sampler_index","shader_get_uniform","shader_set_uniform_i","shader_set_uniform_i_array","shader_set_uniform_f","shader_set_uniform_f_array","shader_set_uniform_matrix","shader_set_uniform_matrix_array","shader_enable_corner_id","texture_set_stage","texture_get_texel_width","texture_get_texel_height","shaders_are_supported","vertex_format_begin","vertex_format_end","vertex_format_delete","vertex_format_add_position","vertex_format_add_position_3d","vertex_format_add_colour","vertex_format_add_color","vertex_format_add_normal","vertex_format_add_texcoord","vertex_format_add_textcoord","vertex_format_add_custom","vertex_create_buffer","vertex_create_buffer_ext","vertex_delete_buffer","vertex_begin","vertex_end","vertex_position","vertex_position_3d","vertex_colour","vertex_color","vertex_argb","vertex_texcoord","vertex_normal","vertex_float1","vertex_float2","vertex_float3","vertex_float4","vertex_ubyte4","vertex_submit","vertex_freeze","vertex_get_number","vertex_get_buffer_size","vertex_create_buffer_from_buffer","vertex_create_buffer_from_buffer_ext","push_local_notification","push_get_first_local_notification","push_get_next_local_notification","push_cancel_local_notification","skeleton_animation_set","skeleton_animation_get","skeleton_animation_mix","skeleton_animation_set_ext","skeleton_animation_get_ext","skeleton_animation_get_duration","skeleton_animation_get_frames","skeleton_animation_clear","skeleton_skin_set","skeleton_skin_get","skeleton_attachment_set","skeleton_attachment_get","skeleton_attachment_create","skeleton_collision_draw_set","skeleton_bone_data_get","skeleton_bone_data_set","skeleton_bone_state_get","skeleton_bone_state_set","skeleton_get_minmax","skeleton_get_num_bounds","skeleton_get_bounds","skeleton_animation_get_frame","skeleton_animation_set_frame","draw_skeleton","draw_skeleton_time","draw_skeleton_instance","draw_skeleton_collision","skeleton_animation_list","skeleton_skin_list","skeleton_slot_data","layer_get_id","layer_get_id_at_depth","layer_get_depth","layer_create","layer_destroy","layer_destroy_instances","layer_add_instance","layer_has_instance","layer_set_visible","layer_get_visible","layer_exists","layer_x","layer_y","layer_get_x","layer_get_y","layer_hspeed","layer_vspeed","layer_get_hspeed","layer_get_vspeed","layer_script_begin","layer_script_end","layer_shader","layer_get_script_begin","layer_get_script_end","layer_get_shader","layer_set_target_room","layer_get_target_room","layer_reset_target_room","layer_get_all","layer_get_all_elements","layer_get_name","layer_depth","layer_get_element_layer","layer_get_element_type","layer_element_move","layer_force_draw_depth","layer_is_draw_depth_forced","layer_get_forced_depth","layer_background_get_id","layer_background_exists","layer_background_create","layer_background_destroy","layer_background_visible","layer_background_change","layer_background_sprite","layer_background_htiled","layer_background_vtiled","layer_background_stretch","layer_background_yscale","layer_background_xscale","layer_background_blend","layer_background_alpha","layer_background_index","layer_background_speed","layer_background_get_visible","layer_background_get_sprite","layer_background_get_htiled","layer_background_get_vtiled","layer_background_get_stretch","layer_background_get_yscale","layer_background_get_xscale","layer_background_get_blend","layer_background_get_alpha","layer_background_get_index","layer_background_get_speed","layer_sprite_get_id","layer_sprite_exists","layer_sprite_create","layer_sprite_destroy","layer_sprite_change","layer_sprite_index","layer_sprite_speed","layer_sprite_xscale","layer_sprite_yscale","layer_sprite_angle","layer_sprite_blend","layer_sprite_alpha","layer_sprite_x","layer_sprite_y","layer_sprite_get_sprite","layer_sprite_get_index","layer_sprite_get_speed","layer_sprite_get_xscale","layer_sprite_get_yscale","layer_sprite_get_angle","layer_sprite_get_blend","layer_sprite_get_alpha","layer_sprite_get_x","layer_sprite_get_y","layer_tilemap_get_id","layer_tilemap_exists","layer_tilemap_create","layer_tilemap_destroy","tilemap_tileset","tilemap_x","tilemap_y","tilemap_set","tilemap_set_at_pixel","tilemap_get_tileset","tilemap_get_tile_width","tilemap_get_tile_height","tilemap_get_width","tilemap_get_height","tilemap_get_x","tilemap_get_y","tilemap_get","tilemap_get_at_pixel","tilemap_get_cell_x_at_pixel","tilemap_get_cell_y_at_pixel","tilemap_clear","draw_tilemap","draw_tile","tilemap_set_global_mask","tilemap_get_global_mask","tilemap_set_mask","tilemap_get_mask","tilemap_get_frame","tile_set_empty","tile_set_index","tile_set_flip","tile_set_mirror","tile_set_rotate","tile_get_empty","tile_get_index","tile_get_flip","tile_get_mirror","tile_get_rotate","layer_tile_exists","layer_tile_create","layer_tile_destroy","layer_tile_change","layer_tile_xscale","layer_tile_yscale","layer_tile_blend","layer_tile_alpha","layer_tile_x","layer_tile_y","layer_tile_region","layer_tile_visible","layer_tile_get_sprite","layer_tile_get_xscale","layer_tile_get_yscale","layer_tile_get_blend","layer_tile_get_alpha","layer_tile_get_x","layer_tile_get_y","layer_tile_get_region","layer_tile_get_visible","layer_instance_get_instance","instance_activate_layer","instance_deactivate_layer","camera_create","camera_create_view","camera_destroy","camera_apply","camera_get_active","camera_get_default","camera_set_default","camera_set_view_mat","camera_set_proj_mat","camera_set_update_script","camera_set_begin_script","camera_set_end_script","camera_set_view_pos","camera_set_view_size","camera_set_view_speed","camera_set_view_border","camera_set_view_angle","camera_set_view_target","camera_get_view_mat","camera_get_proj_mat","camera_get_update_script","camera_get_begin_script","camera_get_end_script","camera_get_view_x","camera_get_view_y","camera_get_view_width","camera_get_view_height","camera_get_view_speed_x","camera_get_view_speed_y","camera_get_view_border_x","camera_get_view_border_y","camera_get_view_angle","camera_get_view_target","view_get_camera","view_get_visible","view_get_xport","view_get_yport","view_get_wport","view_get_hport","view_get_surface_id","view_set_camera","view_set_visible","view_set_xport","view_set_yport","view_set_wport","view_set_hport","view_set_surface_id","gesture_drag_time","gesture_drag_distance","gesture_flick_speed","gesture_double_tap_time","gesture_double_tap_distance","gesture_pinch_distance","gesture_pinch_angle_towards","gesture_pinch_angle_away","gesture_rotate_time","gesture_rotate_angle","gesture_tap_count","gesture_get_drag_time","gesture_get_drag_distance","gesture_get_flick_speed","gesture_get_double_tap_time","gesture_get_double_tap_distance","gesture_get_pinch_distance","gesture_get_pinch_angle_towards","gesture_get_pinch_angle_away","gesture_get_rotate_time","gesture_get_rotate_angle","gesture_get_tap_count","keyboard_virtual_show","keyboard_virtual_hide","keyboard_virtual_status","keyboard_virtual_height"],
literal:["true","false","all","noone","undefined","pointer_invalid","pointer_null"],
symbol:["other","global","local","path_action_stop","path_action_restart","path_action_continue","path_action_reverse","pi","GM_build_date","GM_version","GM_runtime_version","timezone_local","timezone_utc","gamespeed_fps","gamespeed_microseconds","ev_create","ev_destroy","ev_step","ev_alarm","ev_keyboard","ev_mouse","ev_collision","ev_other","ev_draw","ev_draw_begin","ev_draw_end","ev_draw_pre","ev_draw_post","ev_keypress","ev_keyrelease","ev_trigger","ev_left_button","ev_right_button","ev_middle_button","ev_no_button","ev_left_press","ev_right_press","ev_middle_press","ev_left_release","ev_right_release","ev_middle_release","ev_mouse_enter","ev_mouse_leave","ev_mouse_wheel_up","ev_mouse_wheel_down","ev_global_left_button","ev_global_right_button","ev_global_middle_button","ev_global_left_press","ev_global_right_press","ev_global_middle_press","ev_global_left_release","ev_global_right_release","ev_global_middle_release","ev_joystick1_left","ev_joystick1_right","ev_joystick1_up","ev_joystick1_down","ev_joystick1_button1","ev_joystick1_button2","ev_joystick1_button3","ev_joystick1_button4","ev_joystick1_button5","ev_joystick1_button6","ev_joystick1_button7","ev_joystick1_button8","ev_joystick2_left","ev_joystick2_right","ev_joystick2_up","ev_joystick2_down","ev_joystick2_button1","ev_joystick2_button2","ev_joystick2_button3","ev_joystick2_button4","ev_joystick2_button5","ev_joystick2_button6","ev_joystick2_button7","ev_joystick2_button8","ev_outside","ev_boundary","ev_game_start","ev_game_end","ev_room_start","ev_room_end","ev_no_more_lives","ev_animation_end","ev_end_of_path","ev_no_more_health","ev_close_button","ev_user0","ev_user1","ev_user2","ev_user3","ev_user4","ev_user5","ev_user6","ev_user7","ev_user8","ev_user9","ev_user10","ev_user11","ev_user12","ev_user13","ev_user14","ev_user15","ev_step_normal","ev_step_begin","ev_step_end","ev_gui","ev_gui_begin","ev_gui_end","ev_cleanup","ev_gesture","ev_gesture_tap","ev_gesture_double_tap","ev_gesture_drag_start","ev_gesture_dragging","ev_gesture_drag_end","ev_gesture_flick","ev_gesture_pinch_start","ev_gesture_pinch_in","ev_gesture_pinch_out","ev_gesture_pinch_end","ev_gesture_rotate_start","ev_gesture_rotating","ev_gesture_rotate_end","ev_global_gesture_tap","ev_global_gesture_double_tap","ev_global_gesture_drag_start","ev_global_gesture_dragging","ev_global_gesture_drag_end","ev_global_gesture_flick","ev_global_gesture_pinch_start","ev_global_gesture_pinch_in","ev_global_gesture_pinch_out","ev_global_gesture_pinch_end","ev_global_gesture_rotate_start","ev_global_gesture_rotating","ev_global_gesture_rotate_end","vk_nokey","vk_anykey","vk_enter","vk_return","vk_shift","vk_control","vk_alt","vk_escape","vk_space","vk_backspace","vk_tab","vk_pause","vk_printscreen","vk_left","vk_right","vk_up","vk_down","vk_home","vk_end","vk_delete","vk_insert","vk_pageup","vk_pagedown","vk_f1","vk_f2","vk_f3","vk_f4","vk_f5","vk_f6","vk_f7","vk_f8","vk_f9","vk_f10","vk_f11","vk_f12","vk_numpad0","vk_numpad1","vk_numpad2","vk_numpad3","vk_numpad4","vk_numpad5","vk_numpad6","vk_numpad7","vk_numpad8","vk_numpad9","vk_divide","vk_multiply","vk_subtract","vk_add","vk_decimal","vk_lshift","vk_lcontrol","vk_lalt","vk_rshift","vk_rcontrol","vk_ralt","mb_any","mb_none","mb_left","mb_right","mb_middle","c_aqua","c_black","c_blue","c_dkgray","c_fuchsia","c_gray","c_green","c_lime","c_ltgray","c_maroon","c_navy","c_olive","c_purple","c_red","c_silver","c_teal","c_white","c_yellow","c_orange","fa_left","fa_center","fa_right","fa_top","fa_middle","fa_bottom","pr_pointlist","pr_linelist","pr_linestrip","pr_trianglelist","pr_trianglestrip","pr_trianglefan","bm_complex","bm_normal","bm_add","bm_max","bm_subtract","bm_zero","bm_one","bm_src_colour","bm_inv_src_colour","bm_src_color","bm_inv_src_color","bm_src_alpha","bm_inv_src_alpha","bm_dest_alpha","bm_inv_dest_alpha","bm_dest_colour","bm_inv_dest_colour","bm_dest_color","bm_inv_dest_color","bm_src_alpha_sat","tf_point","tf_linear","tf_anisotropic","mip_off","mip_on","mip_markedonly","audio_falloff_none","audio_falloff_inverse_distance","audio_falloff_inverse_distance_clamped","audio_falloff_linear_distance","audio_falloff_linear_distance_clamped","audio_falloff_exponent_distance","audio_falloff_exponent_distance_clamped","audio_old_system","audio_new_system","audio_mono","audio_stereo","audio_3d","cr_default","cr_none","cr_arrow","cr_cross","cr_beam","cr_size_nesw","cr_size_ns","cr_size_nwse","cr_size_we","cr_uparrow","cr_hourglass","cr_drag","cr_appstart","cr_handpoint","cr_size_all","spritespeed_framespersecond","spritespeed_framespergameframe","asset_object","asset_unknown","asset_sprite","asset_sound","asset_room","asset_path","asset_script","asset_font","asset_timeline","asset_tiles","asset_shader","fa_readonly","fa_hidden","fa_sysfile","fa_volumeid","fa_directory","fa_archive","ds_type_map","ds_type_list","ds_type_stack","ds_type_queue","ds_type_grid","ds_type_priority","ef_explosion","ef_ring","ef_ellipse","ef_firework","ef_smoke","ef_smokeup","ef_star","ef_spark","ef_flare","ef_cloud","ef_rain","ef_snow","pt_shape_pixel","pt_shape_disk","pt_shape_square","pt_shape_line","pt_shape_star","pt_shape_circle","pt_shape_ring","pt_shape_sphere","pt_shape_flare","pt_shape_spark","pt_shape_explosion","pt_shape_cloud","pt_shape_smoke","pt_shape_snow","ps_distr_linear","ps_distr_gaussian","ps_distr_invgaussian","ps_shape_rectangle","ps_shape_ellipse","ps_shape_diamond","ps_shape_line","ty_real","ty_string","dll_cdecl","dll_stdcall","matrix_view","matrix_projection","matrix_world","os_win32","os_windows","os_macosx","os_ios","os_android","os_symbian","os_linux","os_unknown","os_winphone","os_tizen","os_win8native","os_wiiu","os_3ds","os_psvita","os_bb10","os_ps4","os_xboxone","os_ps3","os_xbox360","os_uwp","os_tvos","os_switch","browser_not_a_browser","browser_unknown","browser_ie","browser_firefox","browser_chrome","browser_safari","browser_safari_mobile","browser_opera","browser_tizen","browser_edge","browser_windows_store","browser_ie_mobile","device_ios_unknown","device_ios_iphone","device_ios_iphone_retina","device_ios_ipad","device_ios_ipad_retina","device_ios_iphone5","device_ios_iphone6","device_ios_iphone6plus","device_emulator","device_tablet","display_landscape","display_landscape_flipped","display_portrait","display_portrait_flipped","tm_sleep","tm_countvsyncs","of_challenge_win","of_challen","ge_lose","of_challenge_tie","leaderboard_type_number","leaderboard_type_time_mins_secs","cmpfunc_never","cmpfunc_less","cmpfunc_equal","cmpfunc_lessequal","cmpfunc_greater","cmpfunc_notequal","cmpfunc_greaterequal","cmpfunc_always","cull_noculling","cull_clockwise","cull_counterclockwise","lighttype_dir","lighttype_point","iap_ev_storeload","iap_ev_product","iap_ev_purchase","iap_ev_consume","iap_ev_restore","iap_storeload_ok","iap_storeload_failed","iap_status_uninitialised","iap_status_unavailable","iap_status_loading","iap_status_available","iap_status_processing","iap_status_restoring","iap_failed","iap_unavailable","iap_available","iap_purchased","iap_canceled","iap_refunded","fb_login_default","fb_login_fallback_to_webview","fb_login_no_fallback_to_webview","fb_login_forcing_webview","fb_login_use_system_account","fb_login_forcing_safari","phy_joint_anchor_1_x","phy_joint_anchor_1_y","phy_joint_anchor_2_x","phy_joint_anchor_2_y","phy_joint_reaction_force_x","phy_joint_reaction_force_y","phy_joint_reaction_torque","phy_joint_motor_speed","phy_joint_angle","phy_joint_motor_torque","phy_joint_max_motor_torque","phy_joint_translation","phy_joint_speed","phy_joint_motor_force","phy_joint_max_motor_force","phy_joint_length_1","phy_joint_length_2","phy_joint_damping_ratio","phy_joint_frequency","phy_joint_lower_angle_limit","phy_joint_upper_angle_limit","phy_joint_angle_limits","phy_joint_max_length","phy_joint_max_torque","phy_joint_max_force","phy_debug_render_aabb","phy_debug_render_collision_pairs","phy_debug_render_coms","phy_debug_render_core_shapes","phy_debug_render_joints","phy_debug_render_obb","phy_debug_render_shapes","phy_particle_flag_water","phy_particle_flag_zombie","phy_particle_flag_wall","phy_particle_flag_spring","phy_particle_flag_elastic","phy_particle_flag_viscous","phy_particle_flag_powder","phy_particle_flag_tensile","phy_particle_flag_colourmixing","phy_particle_flag_colormixing","phy_particle_group_flag_solid","phy_particle_group_flag_rigid","phy_particle_data_flag_typeflags","phy_particle_data_flag_position","phy_particle_data_flag_velocity","phy_particle_data_flag_colour","phy_particle_data_flag_color","phy_particle_data_flag_category","achievement_our_info","achievement_friends_info","achievement_leaderboard_info","achievement_achievement_info","achievement_filter_all_players","achievement_filter_friends_only","achievement_filter_favorites_only","achievement_type_achievement_challenge","achievement_type_score_challenge","achievement_pic_loaded","achievement_show_ui","achievement_show_profile","achievement_show_leaderboard","achievement_show_achievement","achievement_show_bank","achievement_show_friend_picker","achievement_show_purchase_prompt","network_socket_tcp","network_socket_udp","network_socket_bluetooth","network_type_connect","network_type_disconnect","network_type_data","network_type_non_blocking_connect","network_config_connect_timeout","network_config_use_non_blocking_socket","network_config_enable_reliable_udp","network_config_disable_reliable_udp","buffer_fixed","buffer_grow","buffer_wrap","buffer_fast","buffer_vbuffer","buffer_network","buffer_u8","buffer_s8","buffer_u16","buffer_s16","buffer_u32","buffer_s32","buffer_u64","buffer_f16","buffer_f32","buffer_f64","buffer_bool","buffer_text","buffer_string","buffer_surface_copy","buffer_seek_start","buffer_seek_relative","buffer_seek_end","buffer_generalerror","buffer_outofspace","buffer_outofbounds","buffer_invalidtype","text_type","button_type","input_type","ANSI_CHARSET","DEFAULT_CHARSET","EASTEUROPE_CHARSET","RUSSIAN_CHARSET","SYMBOL_CHARSET","SHIFTJIS_CHARSET","HANGEUL_CHARSET","GB2312_CHARSET","CHINESEBIG5_CHARSET","JOHAB_CHARSET","HEBREW_CHARSET","ARABIC_CHARSET","GREEK_CHARSET","TURKISH_CHARSET","VIETNAMESE_CHARSET","THAI_CHARSET","MAC_CHARSET","BALTIC_CHARSET","OEM_CHARSET","gp_face1","gp_face2","gp_face3","gp_face4","gp_shoulderl","gp_shoulderr","gp_shoulderlb","gp_shoulderrb","gp_select","gp_start","gp_stickl","gp_stickr","gp_padu","gp_padd","gp_padl","gp_padr","gp_axislh","gp_axislv","gp_axisrh","gp_axisrv","ov_friends","ov_community","ov_players","ov_settings","ov_gamegroup","ov_achievements","lb_sort_none","lb_sort_ascending","lb_sort_descending","lb_disp_none","lb_disp_numeric","lb_disp_time_sec","lb_disp_time_ms","ugc_result_success","ugc_filetype_community","ugc_filetype_microtrans","ugc_visibility_public","ugc_visibility_friends_only","ugc_visibility_private","ugc_query_RankedByVote","ugc_query_RankedByPublicationDate","ugc_query_AcceptedForGameRankedByAcceptanceDate","ugc_query_RankedByTrend","ugc_query_FavoritedByFriendsRankedByPublicationDate","ugc_query_CreatedByFriendsRankedByPublicationDate","ugc_query_RankedByNumTimesReported","ugc_query_CreatedByFollowedUsersRankedByPublicationDate","ugc_query_NotYetRated","ugc_query_RankedByTotalVotesAsc","ugc_query_RankedByVotesUp","ugc_query_RankedByTextSearch","ugc_sortorder_CreationOrderDesc","ugc_sortorder_CreationOrderAsc","ugc_sortorder_TitleAsc","ugc_sortorder_LastUpdatedDesc","ugc_sortorder_SubscriptionDateDesc","ugc_sortorder_VoteScoreDesc","ugc_sortorder_ForModeration","ugc_list_Published","ugc_list_VotedOn","ugc_list_VotedUp","ugc_list_VotedDown","ugc_list_WillVoteLater","ugc_list_Favorited","ugc_list_Subscribed","ugc_list_UsedOrPlayed","ugc_list_Followed","ugc_match_Items","ugc_match_Items_Mtx","ugc_match_Items_ReadyToUse","ugc_match_Collections","ugc_match_Artwork","ugc_match_Videos","ugc_match_Screenshots","ugc_match_AllGuides","ugc_match_WebGuides","ugc_match_IntegratedGuides","ugc_match_UsableInGame","ugc_match_ControllerBindings","vertex_usage_position","vertex_usage_colour","vertex_usage_color","vertex_usage_normal","vertex_usage_texcoord","vertex_usage_textcoord","vertex_usage_blendweight","vertex_usage_blendindices","vertex_usage_psize","vertex_usage_tangent","vertex_usage_binormal","vertex_usage_fog","vertex_usage_depth","vertex_usage_sample","vertex_type_float1","vertex_type_float2","vertex_type_float3","vertex_type_float4","vertex_type_colour","vertex_type_color","vertex_type_ubyte4","layerelementtype_undefined","layerelementtype_background","layerelementtype_instance","layerelementtype_oldtilemap","layerelementtype_sprite","layerelementtype_tilemap","layerelementtype_particlesystem","layerelementtype_tile","tile_rotate","tile_flip","tile_mirror","tile_index_mask","kbv_type_default","kbv_type_ascii","kbv_type_url","kbv_type_email","kbv_type_numbers","kbv_type_phone","kbv_type_phone_name","kbv_returnkey_default","kbv_returnkey_go","kbv_returnkey_google","kbv_returnkey_join","kbv_returnkey_next","kbv_returnkey_route","kbv_returnkey_search","kbv_returnkey_send","kbv_returnkey_yahoo","kbv_returnkey_done","kbv_returnkey_continue","kbv_returnkey_emergency","kbv_autocapitalize_none","kbv_autocapitalize_words","kbv_autocapitalize_sentences","kbv_autocapitalize_characters"],
"variable.language":["self","argument_relative","argument","argument0","argument1","argument2","argument3","argument4","argument5","argument6","argument7","argument8","argument9","argument10","argument11","argument12","argument13","argument14","argument15","argument_count","x|0","y|0","xprevious","yprevious","xstart","ystart","hspeed","vspeed","direction","speed","friction","gravity","gravity_direction","path_index","path_position","path_positionprevious","path_speed","path_scale","path_orientation","path_endaction","object_index","id|0","solid","persistent","mask_index","instance_count","instance_id","room_speed","fps","fps_real","current_time","current_year","current_month","current_day","current_weekday","current_hour","current_minute","current_second","alarm","timeline_index","timeline_position","timeline_speed","timeline_running","timeline_loop","room","room_first","room_last","room_width","room_height","room_caption","room_persistent","score","lives","health","show_score","show_lives","show_health","caption_score","caption_lives","caption_health","event_type","event_number","event_object","event_action","application_surface","gamemaker_pro","gamemaker_registered","gamemaker_version","error_occurred","error_last","debug_mode","keyboard_key","keyboard_lastkey","keyboard_lastchar","keyboard_string","mouse_x","mouse_y","mouse_button","mouse_lastbutton","cursor_sprite","visible","sprite_index","sprite_width","sprite_height","sprite_xoffset","sprite_yoffset","image_number","image_index","image_speed","depth","image_xscale","image_yscale","image_angle","image_alpha","image_blend","bbox_left","bbox_right","bbox_top","bbox_bottom","layer","background_colour","background_showcolour","background_color","background_showcolor","view_enabled","view_current","view_visible","view_xview","view_yview","view_wview","view_hview","view_xport","view_yport","view_wport","view_hport","view_angle","view_hborder","view_vborder","view_hspeed","view_vspeed","view_object","view_surface_id","view_camera","game_id","game_display_name","game_project_name","game_save_id","working_directory","temp_directory","program_directory","browser_width","browser_height","os_type","os_device","os_browser","os_version","display_aa","async_load","delta_time","webgl_enabled","event_data","iap_data","phy_rotation","phy_position_x","phy_position_y","phy_angular_velocity","phy_linear_velocity_x","phy_linear_velocity_y","phy_speed_x","phy_speed_y","phy_speed","phy_angular_damping","phy_linear_damping","phy_bullet","phy_fixed_rotation","phy_active","phy_mass","phy_inertia","phy_com_x","phy_com_y","phy_dynamic","phy_kinematic","phy_sleeping","phy_collision_points","phy_collision_x","phy_collision_y","phy_col_normal_x","phy_col_normal_y","phy_position_xprevious","phy_position_yprevious"]
},
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE]
})})();hljs.registerLanguage("gml",e)})();/*! `xml` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=a.concat(/[A-Z_]/,a.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{
begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,
relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",
begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]},e.COMMENT(/<!--/,/-->/,{
relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{
className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",
begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{
end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{
end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
className:"tag",begin:/<>|<\/>/},{className:"tag",
begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{
className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{
className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}
})();hljs.registerLanguage("xml",e)})();/*! `ruby` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",i={
keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
built_in:"proc lambda",literal:"true false nil"},s={className:"doctag",
begin:"@[A-Za-z]+"},b={begin:"#<",end:">"},r=[e.COMMENT("#","$",{contains:[s]
}),e.COMMENT("^=begin","^=end",{contains:[s],relevance:10
}),e.COMMENT("^__END__","\\n$")],c={className:"subst",begin:/#\{/,end:/\}/,
keywords:i},t={className:"string",contains:[e.BACKSLASH_ESCAPE,c],variants:[{
begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,
end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{
begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,
end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{
begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{
begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{
begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{
begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{
begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
contains:[e.BACKSLASH_ESCAPE,c]})]}]},d="[0-9](_?[0-9])*",g={className:"number",
relevance:0,variants:[{
begin:`\\b([1-9](_?[0-9])*|0)(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`},{
begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"
},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{
begin:"\\b0(_?[0-7])+r?i?\\b"}]},l={className:"params",begin:"\\(",end:"\\)",
endsParent:!0,keywords:i},o=[t,{className:"class",beginKeywords:"class module",
end:"$|;",illegal:/=/,contains:[e.inherit(e.TITLE_MODE,{
begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"}),{begin:"<\\s*",contains:[{
begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE,relevance:0}]}].concat(r)},{
className:"function",begin:n.concat(/def\s+/,n.lookahead(a+"\\s*(\\(|;|$)")),
relevance:0,keywords:"def",end:"$|;",contains:[e.inherit(e.TITLE_MODE,{begin:a
}),l].concat(r)},{begin:e.IDENT_RE+"::"},{className:"symbol",
begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",
begin:":(?!\\s)",contains:[t,{begin:a}],relevance:0},g,{className:"variable",
begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{
className:"params",begin:/\|/,end:/\|/,relevance:0,keywords:i},{
begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{
className:"regexp",contains:[e.BACKSLASH_ESCAPE,c],illegal:/\n/,variants:[{
begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",
end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]
}].concat(b,r),relevance:0}].concat(b,r);c.contains=o,l.contains=o;const _=[{
begin:/^\s*=>/,starts:{end:"$",contains:o}},{className:"meta",
begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
starts:{end:"$",contains:o}}];return r.unshift(b),{name:"Ruby",
aliases:["rb","gemspec","podspec","thor","irb"],keywords:i,illegal:/\/\*/,
contains:[e.SHEBANG({binary:"ruby"})].concat(_).concat(r).concat(o)}}})()
;hljs.registerLanguage("ruby",e)})();/*! `yaml` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",s={
className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},i=e.inherit(s,{
variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={
end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},t={begin:/\{/,
end:/\}/,contains:[l],illegal:"\\n",relevance:0},g={begin:"\\[",end:"\\]",
contains:[l],illegal:"\\n",relevance:0},b=[{className:"attr",variants:[{
begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{
begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---\\s*$",
relevance:10},{className:"string",
begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{
begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",
begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a
},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",
relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
className:"number",
begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
},{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},t,g,s],r=[...b]
;return r.pop(),r.push(i),l.contains=r,{name:"YAML",case_insensitive:!0,
aliases:["yml"],contains:b}}})();hljs.registerLanguage("yaml",e)})();/*! `scala` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={className:"subst",
variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},s={
className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',
illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',
illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,a]},{className:"string",
begin:'[a-z]+"""',end:'"""',contains:[a],relevance:10}]},i={className:"type",
begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},t={className:"title",
begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
relevance:0},l={className:"class",beginKeywords:"class object trait type",
end:/[:={\[\n;]/,excludeEnd:!0,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,
excludeEnd:!0,relevance:0,contains:[i]},{className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[i]},t]},c={
className:"function",beginKeywords:"def",end:n.lookahead(/[:={\[(\n;]/),
contains:[t]};return{name:"Scala",keywords:{literal:"true false null",
keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given"
},
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,i,c,l,e.C_NUMBER_MODE,{
begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},[{
begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}
}],{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{
begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",
begin:"@[A-Za-z]+"}]}}})();hljs.registerLanguage("scala",e)})();/*! `python` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,i=["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],s={
$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,
built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],
literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],
type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]
},t={className:"meta",begin:/^(>>>|\.\.\.) /},r={className:"subst",begin:/\{/,
end:/\}/,keywords:s,illegal:/#/},l={begin:/\{\{/,relevance:0},b={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,t,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
end:/"""/,contains:[e.BACKSLASH_ESCAPE,t,l,r]},{begin:/([uU]|[rR])'/,end:/'/,
relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
contains:[e.BACKSLASH_ESCAPE,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,l,r]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},o="[0-9](_?[0-9])*",c=`(\\b(${o}))?\\.(${o})|\\b(${o})\\.`,d="\\b|"+i.join("|"),g={
className:"number",relevance:0,variants:[{
begin:`(\\b(${o})|(${c}))[eE][+-]?(${o})[jJ]?(?=${d})`},{begin:`(${c})[jJ]?`},{
begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{
begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`
},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${o})[jJ](?=${d})`
}]},p={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:s,
contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},m={
className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,
contains:["self",t,g,b,e.HASH_COMMENT_MODE]}]};return r.contains=[b,g,t],{
name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:s,
illegal:/(<\/|->|\?)|=>/,contains:[t,g,{begin:/\bself\b/},{beginKeywords:"if",
relevance:0},b,p,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{
1:"keyword",3:"title.function"},contains:[m]},{variants:[{
match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],
scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{
className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,m,b]}]}}})()
;hljs.registerLanguage("python",e)})();/*! `python-repl` grammar compiled for Highlight.js 11.4.0 */
(()=>{var a=(()=>{"use strict";return a=>({aliases:["pycon"],contains:[{
className:"meta",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}},
variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]})})()
;hljs.registerLanguage("python-repl",a)})();/*! `elixir` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,i="[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",a={$pattern:i,
keyword:["after","alias","and","case","catch","cond","defstruct","do","else","end","fn","for","if","import","in","not","or","quote","raise","receive","require","reraise","rescue","try","unless","unquote","unquote_splicing","use","when","with|0"],
literal:["false","nil","true"]},s={className:"subst",begin:/#\{/,end:/\}/,
keywords:a},c={match:/\\[\s\S]/,scope:"char.escape",relevance:0},r=[{begin:/"/,
end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{
begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,
end:/>/}],t=e=>({scope:"char.escape",begin:n.concat(/\\/,e),relevance:0}),d={
className:"string",begin:"~[a-z](?=[/|([{<\"'])",
contains:r.map((n=>e.inherit(n,{contains:[t(n.end),c,s]})))},o={
className:"string",begin:"~[A-Z](?=[/|([{<\"'])",
contains:r.map((n=>e.inherit(n,{contains:[t(n.end)]})))},b={className:"regex",
variants:[{begin:"~r(?=[/|([{<\"'])",contains:r.map((i=>e.inherit(i,{
end:n.concat(i.end,/[uismxfU]{0,7}/),contains:[t(i.end),c,s]})))},{
begin:"~R(?=[/|([{<\"'])",contains:r.map((i=>e.inherit(i,{
end:n.concat(i.end,/[uismxfU]{0,7}/),contains:[t(i.end)]})))}]},g={
className:"string",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"""/,
end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{
begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{
begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},l={
className:"function",beginKeywords:"def defp defmacro defmacrop",end:/\B\b/,
contains:[e.inherit(e.TITLE_MODE,{begin:i,endsParent:!0})]},m=e.inherit(l,{
className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",
end:/\bdo\b|$|;/}),u=[g,b,o,d,e.HASH_COMMENT_MODE,m,l,{begin:"::"},{
className:"symbol",begin:":(?![\\s:])",contains:[g,{
begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
}],relevance:0},{className:"symbol",begin:i+":(?!:)",relevance:0},{
className:"number",
begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
relevance:0},{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))"}]
;return s.contains=u,{name:"Elixir",aliases:["ex","exs"],keywords:a,contains:u}}
})();hljs.registerLanguage("elixir",e)})();/*! `gcode` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.inherit(e.C_NUMBER_MODE,{
begin:"([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|"+e.C_NUMBER_RE
}),n=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT(/\(/,/\)/),a,e.inherit(e.APOS_STRING_MODE,{
illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"name",
begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",
begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",
end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{
className:"built_in",
begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",contains:[a],
end:"\\]"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}]
;return{name:"G-code (ISO 6983)",aliases:["nc"],case_insensitive:!0,keywords:{
$pattern:"[A-Z_][A-Z0-9_.]*",
keyword:"IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"
},contains:[{className:"meta",begin:"%"},{className:"meta",begin:"([O])([0-9]+)"
}].concat(n)}}})();hljs.registerLanguage("gcode",e)})();/*! `nginx` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={
className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{\w+\}/},{
begin:n.concat(/[$@]/,e.UNDERSCORE_IDENT_RE)}]},s={endsWithParent:!0,keywords:{
$pattern:/[a-z_]{2,}|\/dev\/poll/,
literal:["on","off","yes","no","true","false","none","blocked","debug","info","notice","warn","error","crit","select","break","last","permanent","redirect","kqueue","rtsig","epoll","poll","/dev/poll"]
},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",
contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/
}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[a]
},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:"\\s\\^",
end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{
begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",
begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{
className:"number",begin:"\\b\\d+[kKmMgGdshdwy]?\\b",relevance:0},a]};return{
name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{
beginKeywords:"upstream location",end:/;|\{/,contains:s.contains,keywords:{
section:"upstream location"}},{className:"section",
begin:n.concat(e.UNDERSCORE_IDENT_RE+n.lookahead(/\s+\{/)),relevance:0},{
begin:n.lookahead(e.UNDERSCORE_IDENT_RE+"\\s"),end:";|\\{",contains:[{
className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:s}],relevance:0}],
illegal:"[^\\s\\}\\{]"}}})();hljs.registerLanguage("nginx",e)})();/*! `lua` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t="\\[=*\\[",a="\\]=*\\]",n={
begin:t,end:a,contains:["self"]
},o=[e.COMMENT("--(?!\\[=*\\[)","$"),e.COMMENT("--\\[=*\\[",a,{contains:[n],
relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
literal:"true false nil",
keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
},contains:o.concat([{className:"function",beginKeywords:"function",end:"\\)",
contains:[e.inherit(e.TITLE_MODE,{
begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
begin:"\\(",endsWithParent:!0,contains:o}].concat(o)
},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
begin:t,end:a,contains:[n],relevance:5}])}}})();hljs.registerLanguage("lua",e)
})();/*! `makefile` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const i={className:"variable",
variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",
contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},a={className:"string",
begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]},n={className:"variable",
begin:/\$\([\w-]+\s/,end:/\)/,keywords:{
built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
},contains:[i]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},r={
className:"section",begin:/^[^\s]+:/,end:/$/,contains:[i]};return{
name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,
keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
},contains:[e.HASH_COMMENT_MODE,i,a,n,s,{className:"meta",begin:/^\.PHONY:/,
end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},r]}}})()
;hljs.registerLanguage("makefile",e)})();/*! `ini` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={className:"number",
relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]
},s=e.COMMENT();s.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={
className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/
}]},t={className:"literal",begin:/\bon|off|true|false|yes|no\b/},r={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",
end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'
},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[s,t,i,r,a,"self"],
relevance:0},c=n.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{
name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
contains:[s,{className:"section",begin:/\[+/,end:/\]+/},{
begin:n.concat(c,"(\\s*\\.\\s*",c,")*",n.lookahead(/\s*=\s*[^#\s]/)),
className:"attr",starts:{end:/$/,contains:[s,l,t,i,r,a]}}]}}})()
;hljs.registerLanguage("ini",e)})();/*! `json` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"JSON",contains:[{
className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{
match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,{
beginKeywords:"true false null"
},e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"})
})();hljs.registerLanguage("json",e)})();/*! `vbnet` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=/\d{1,2}\/\d{1,2}\/\d{4}/,a=/\d{4}-\d{1,2}-\d{1,2}/,i=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,s=/\d{1,2}(:\d{1,2}){1,2}/,r={
className:"literal",variants:[{begin:n.concat(/# */,n.either(a,t),/ *#/)},{
begin:n.concat(/# */,s,/ *#/)},{begin:n.concat(/# */,i,/ *#/)},{
begin:n.concat(/# */,n.either(a,t),/ +/,n.either(i,s),/ *#/)}]
},l=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]
}),o=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]})
;return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,
classNameAliases:{label:"symbol"},keywords:{
keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
literal:"true false nothing"},
illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{
className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,
end:/"/,illegal:/\n/,contains:[{begin:/""/}]},r,{className:"number",relevance:0,
variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{
begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{
className:"label",begin:/^\w+:/},l,o,{className:"meta",
begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
end:/$/,keywords:{
keyword:"const disable else elseif enable end externalsource if region then"},
contains:[o]}]}}})();hljs.registerLanguage("vbnet",e)})();/*! `apache` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"number",
begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/};return{
name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,
contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,
contains:[n,{className:"number",begin:/:\d{1,5}/
},e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",
begin:/\w+/,relevance:0,keywords:{
_:["order","deny","allow","setenv","rewriterule","rewriteengine","rewritecond","documentroot","sethandler","errordocument","loadmodule","options","header","listen","serverroot","servername"]
},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},
contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",
begin:/[\$%]\{/,end:/\}/,contains:["self",{className:"number",begin:/[$%]\d+/}]
},n,{className:"number",begin:/\b\d+/},e.QUOTE_STRING_MODE]}}],illegal:/\S/}}
})();hljs.registerLanguage("apache",e)})();/*! `groovy` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";function e(e,a={}){return a.variants=e,a}
return a=>{
const n=a.regex,t="[A-Za-z0-9_$]+",r=e([a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,a.COMMENT("/\\*\\*","\\*/",{
relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",
begin:"@[A-Za-z]+"}]})]),s={className:"regexp",begin:/~?\/[^\/\n]+\//,
contains:[a.BACKSLASH_ESCAPE]
},i=e([a.BINARY_NUMBER_MODE,a.C_NUMBER_MODE]),l=e([{begin:/"""/,end:/"""/},{
begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10
},a.APOS_STRING_MODE,a.QUOTE_STRING_MODE],{className:"string"}),c={
match:[/(class|interface|trait|enum|extends|implements)/,/\s+/,a.UNDERSCORE_IDENT_RE],
scope:{1:"keyword",3:"title.class"}};return{name:"Groovy",keywords:{
"variable.language":"this super",literal:"true false null",
type:["byte","short","char","int","long","boolean","float","double","void"],
keyword:["def","as","in","assert","trait","abstract","static","volatile","transient","public","private","protected","synchronized","final","class","interface","enum","if","else","for","while","switch","case","break","default","continue","throw","throws","try","catch","finally","implements","extends","new","import","package","return","instanceof"]
},contains:[a.SHEBANG({binary:"groovy",relevance:10}),r,l,s,i,c,{
className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",
begin:t+"[ \t]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,
contains:[r,l,s,i,"self"]},{className:"symbol",
begin:"^[ \t]*"+n.lookahead(t+":"),excludeBegin:!0,end:t+":",relevance:0}],
illegal:/#|<\//}}})();hljs.registerLanguage("groovy",e)})();/*! `plaintext` grammar compiled for Highlight.js 11.4.0 */
(()=>{var t=(()=>{"use strict";return t=>({name:"Plain text",
aliases:["text","txt"],disableAutodetect:!0})})()
;hljs.registerLanguage("plaintext",t)})();/*! `arduino` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t={
type:["boolean","byte","word","String"],
built_in:["KeyboardController","MouseController","SoftwareSerial","EthernetServer","EthernetClient","LiquidCrystal","RobotControl","GSMVoiceCall","EthernetUDP","EsploraTFT","HttpClient","RobotMotor","WiFiClient","GSMScanner","FileSystem","Scheduler","GSMServer","YunClient","YunServer","IPAddress","GSMClient","GSMModem","Keyboard","Ethernet","Console","GSMBand","Esplora","Stepper","Process","WiFiUDP","GSM_SMS","Mailbox","USBHost","Firmata","PImage","Client","Server","GSMPIN","FileIO","Bridge","Serial","EEPROM","Stream","Mouse","Audio","Servo","File","Task","GPRS","WiFi","Wire","TFT","GSM","SPI","SD"],
_hints:["setup","loop","runShellCommandAsynchronously","analogWriteResolution","retrieveCallingNumber","printFirmwareVersion","analogReadResolution","sendDigitalPortPair","noListenOnLocalhost","readJoystickButton","setFirmwareVersion","readJoystickSwitch","scrollDisplayRight","getVoiceCallStatus","scrollDisplayLeft","writeMicroseconds","delayMicroseconds","beginTransmission","getSignalStrength","runAsynchronously","getAsynchronously","listenOnLocalhost","getCurrentCarrier","readAccelerometer","messageAvailable","sendDigitalPorts","lineFollowConfig","countryNameWrite","runShellCommand","readStringUntil","rewindDirectory","readTemperature","setClockDivider","readLightSensor","endTransmission","analogReference","detachInterrupt","countryNameRead","attachInterrupt","encryptionType","readBytesUntil","robotNameWrite","readMicrophone","robotNameRead","cityNameWrite","userNameWrite","readJoystickY","readJoystickX","mouseReleased","openNextFile","scanNetworks","noInterrupts","digitalWrite","beginSpeaker","mousePressed","isActionDone","mouseDragged","displayLogos","noAutoscroll","addParameter","remoteNumber","getModifiers","keyboardRead","userNameRead","waitContinue","processInput","parseCommand","printVersion","readNetworks","writeMessage","blinkVersion","cityNameRead","readMessage","setDataMode","parsePacket","isListening","setBitOrder","beginPacket","isDirectory","motorsWrite","drawCompass","digitalRead","clearScreen","serialEvent","rightToLeft","setTextSize","leftToRight","requestFrom","keyReleased","compassRead","analogWrite","interrupts","WiFiServer","disconnect","playMelody","parseFloat","autoscroll","getPINUsed","setPINUsed","setTimeout","sendAnalog","readSlider","analogRead","beginWrite","createChar","motorsStop","keyPressed","tempoWrite","readButton","subnetMask","debugPrint","macAddress","writeGreen","randomSeed","attachGPRS","readString","sendString","remotePort","releaseAll","mouseMoved","background","getXChange","getYChange","answerCall","getResult","voiceCall","endPacket","constrain","getSocket","writeJSON","getButton","available","connected","findUntil","readBytes","exitValue","readGreen","writeBlue","startLoop","IPAddress","isPressed","sendSysex","pauseMode","gatewayIP","setCursor","getOemKey","tuneWrite","noDisplay","loadImage","switchPIN","onRequest","onReceive","changePIN","playFile","noBuffer","parseInt","overflow","checkPIN","knobRead","beginTFT","bitClear","updateIR","bitWrite","position","writeRGB","highByte","writeRed","setSpeed","readBlue","noStroke","remoteIP","transfer","shutdown","hangCall","beginSMS","endWrite","attached","maintain","noCursor","checkReg","checkPUK","shiftOut","isValid","shiftIn","pulseIn","connect","println","localIP","pinMode","getIMEI","display","noBlink","process","getBand","running","beginSD","drawBMP","lowByte","setBand","release","bitRead","prepare","pointTo","readRed","setMode","noFill","remove","listen","stroke","detach","attach","noTone","exists","buffer","height","bitSet","circle","config","cursor","random","IRread","setDNS","endSMS","getKey","micros","millis","begin","print","write","ready","flush","width","isPIN","blink","clear","press","mkdir","rmdir","close","point","yield","image","BSSID","click","delay","read","text","move","peek","beep","rect","line","open","seek","fill","size","turn","stop","home","find","step","tone","sqrt","RSSI","SSID","end","bit","tan","cos","sin","pow","map","abs","max","min","get","run","put"],
literal:["DIGITAL_MESSAGE","FIRMATA_STRING","ANALOG_MESSAGE","REPORT_DIGITAL","REPORT_ANALOG","INPUT_PULLUP","SET_PIN_MODE","INTERNAL2V56","SYSTEM_RESET","LED_BUILTIN","INTERNAL1V1","SYSEX_START","INTERNAL","EXTERNAL","DEFAULT","OUTPUT","INPUT","HIGH","LOW"]
},r=(e=>{const t=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]
}),n="[a-zA-Z_]\\w*::",a="(?!struct)(decltype\\(auto\\)|"+t.optional(n)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",i={
className:"type",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"string"}),{
className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},c={
className:"title",begin:t.optional(n)+e.IDENT_RE,relevance:0
},d=t.optional(n)+e.IDENT_RE+"\\s*\\(",u={
type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],
keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],
literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
},p={className:"function.dispatch",relevance:0,keywords:{
_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
},
begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))
},m=[p,l,i,r,e.C_BLOCK_COMMENT_MODE,o,s],g={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:m.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:m.concat(["self"]),relevance:0}]),relevance:0},_={className:"function",
begin:"("+a+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
keywords:u,relevance:0},{begin:d,returnBegin:!0,contains:[c],relevance:0},{
begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[s,o]},{
relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:u,
relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,s,o,i,{begin:/\(/,end:/\)/,
keywords:u,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,s,o,i]}]
},i,r,e.C_BLOCK_COMMENT_MODE,l]};return{name:"C++",
aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:u,illegal:"</",
classNameAliases:{"function.dispatch":"built_in"},
contains:[].concat(g,_,p,m,[l,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
end:">",keywords:u,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:u},{
match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
className:{1:"keyword",3:"title.class"}}])}})(e),n=r.keywords
;return n.type=[...n.type,...t.type],
n.literal=[...n.literal,...t.literal],n.built_in=[...n.built_in,...t.built_in],
n._hints=t._hints,r.name="Arduino",r.aliases=["ino"],r.supersetOf="cpp",r}})()
;hljs.registerLanguage("arduino",e)})();/*! `sql` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const r=e.regex,t=e.COMMENT("--","$"),n=["true","false","unknown"],a=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],i=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],o=i,c=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!i.includes(e))),l={
begin:r.concat(/\b/,r.either(...o),/\s*\(/),relevance:0,keywords:{built_in:o}}
;return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
$pattern:/\b[\w\.]+/,keyword:((e,{exceptions:r,when:t}={})=>{const n=t
;return r=r||[],e.map((e=>e.match(/\|\d+$/)||r.includes(e)?e:n(e)?e+"|0":e))
})(c,{when:e=>e.length<3}),literal:n,type:a,
built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
},contains:[{begin:r.either(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,
keyword:c.concat(s),literal:n,type:a}},{className:"type",
begin:r.either("double precision","large object","with timezone","without timezone")
},l,{className:"variable",begin:/@[a-z0-9]+/},{className:"string",variants:[{
begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{
begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,{className:"operator",
begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}}})()
;hljs.registerLanguage("sql",e)})();/*! `scss` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],r=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-height","max-width","min-height","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse()
;return a=>{const n=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}
}))(a),l=r,s=i,d="@[a-z-]+",c={className:"variable",
begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"};return{name:"SCSS",case_insensitive:!0,
illegal:"[=/|']",
contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,n.CSS_NUMBER_MODE,{
className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{
className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0
},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",
begin:"\\b("+e.join("|")+")\\b",relevance:0},{className:"selector-pseudo",
begin:":("+s.join("|")+")"},{className:"selector-pseudo",
begin:":(:)?("+l.join("|")+")"},c,{begin:/\(/,end:/\)/,
contains:[n.CSS_NUMBER_MODE]},n.CSS_VARIABLE,{className:"attribute",
begin:"\\b("+o.join("|")+")\\b"},{
begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
},{begin:/:/,end:/[;}{]/,
contains:[n.BLOCK_COMMENT,c,n.HEXCOLOR,n.CSS_NUMBER_MODE,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,n.IMPORTANT]
},{begin:"@(page|font-face)",keywords:{$pattern:d,keyword:"@page @font-face"}},{
begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,
keyword:"and or not only",attribute:t.join(" ")},contains:[{begin:d,
className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"
},c,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,n.HEXCOLOR,n.CSS_NUMBER_MODE]
},n.FUNCTION_DISPATCH]}}})();hljs.registerLanguage("scss",e)})();/*! `markdown` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={begin:/<\/?[A-Za-z_]/,
end:">",subLanguage:"xml",relevance:0},a={variants:[{begin:/\[.+?\]\[.*?\]/,
relevance:0},{
begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
relevance:2},{
begin:e.regex.concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/
},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
end:"\\]",excludeBegin:!0,excludeEnd:!0}]},i={className:"strong",contains:[],
variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={
className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{
begin:/_(?!_)/,end:/_/,relevance:0}]};i.contains.push(s),s.contains.push(i)
;let c=[n,a]
;return i.contains=i.contains.concat(c),s.contains=s.contains.concat(c),
c=c.concat(i,s),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:c},{
begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
contains:c}]}]},n,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:c,
end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
begin:"^[-\\*]{3,}",end:"$"},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}})()
;hljs.registerLanguage("markdown",e)})();/*! `java` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;var e="\\.([0-9](_*[0-9])*)",a="[0-9a-fA-F](_*[0-9a-fA-F])*",n={
className:"number",variants:[{
begin:`(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:`\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${e})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
begin:`\\b0[xX]((${a})\\.?|(${a})?\\.(${a}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${a})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};function s(e,a,n){return-1===n?"":e.replace(a,(t=>s(e,a,n-1)))}
return e=>{e.regex
;const a="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",t=a+s("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),i={
keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed"],
literal:["false","true","null"],
type:["char","boolean","long","float","int","byte","short","double"],
built_in:["super","this"]},r={className:"meta",begin:"@"+a,contains:[{
begin:/\(/,end:/\)/,contains:["self"]}]},l={className:"params",begin:/\(/,
end:/\)/,keywords:i,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
;return{name:"Java",aliases:["jsp"],keywords:i,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,
className:"string",contains:[e.BACKSLASH_ESCAPE]
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{
1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{
begin:[a,/\s+/,a,/\s+/,/=/],className:{1:"type",3:"variable",5:"operator"}},{
begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},
contains:[l,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"new throw return else",relevance:0},{
begin:["(?:"+t+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
2:"title.function"},keywords:i,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:i,relevance:0,
contains:[r,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,n,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},n,r]}}})()
;hljs.registerLanguage("java",e)})();/*! `bash` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const s=e.regex,t={},n={begin:/\$\{/,
end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{
className:"variable",variants:[{
begin:s.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});const a={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(c);const o={begin:/\$\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
},r=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z._-]+\b/,
keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[r,e.SHEBANG(),l,o,e.HASH_COMMENT_MODE,i,{match:/(\/[a-z._-]+)+/},c,{
className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}}})()
;hljs.registerLanguage("bash",e)})();/*! `shell` grammar compiled for Highlight.js 11.4.0 */
(()=>{var s=(()=>{"use strict";return s=>({name:"Shell Session",
aliases:["console","shellsession"],contains:[{className:"meta",
begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,
subLanguage:"bash"}}]})})();hljs.registerLanguage("shell",s)})();/*! `swift` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function a(e){return t("(?=",e,")")}
function t(...a){return a.map((a=>e(a))).join("")}function n(...a){const t=(e=>{
const a=e[e.length-1]
;return"object"==typeof a&&a.constructor===Object?(e.splice(e.length-1,1),a):{}
})(a);return"("+(t.capture?"":"?:")+a.map((a=>e(a))).join("|")+")"}
const i=e=>t(/\b/,e,/\w$/.test(e)?/\b/:/\B/),s=["Protocol","Type"].map(i),u=["init","self"].map(i),c=["Any","Self"],r=["actor","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],o=["false","nil","true"],l=["assignment","associativity","higherThan","left","lowerThan","none","right"],m=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],p=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],d=n(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),F=n(d,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),b=t(d,F,"*"),h=n(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),f=n(h,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),w=t(h,f,"*"),y=t(/[A-Z]/,f,"*"),g=["autoclosure",t(/convention\(/,n("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",t(/objc\(/,w,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],E=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
;return e=>{const d={match:/\s+/,relevance:0},h=e.COMMENT("/\\*","\\*/",{
contains:["self"]}),v=[e.C_LINE_COMMENT_MODE,h],A={match:[/\./,n(...s,...u)],
className:{2:"keyword"}},N={match:t(/\./,n(...r)),relevance:0
},C=r.filter((e=>"string"==typeof e)).concat(["_|0"]),D={variants:[{
className:"keyword",
match:n(...r.filter((e=>"string"!=typeof e)).concat(c).map(i),...u)}]},k={
$pattern:n(/\b\w+/,/#\w+/),keyword:C.concat(m),literal:o},B=[A,N,D],_=[{
match:t(/\./,n(...p)),relevance:0},{className:"built_in",
match:t(/\b/,n(...p),/(?=\()/)}],S={match:/->/,relevance:0},M=[S,{
className:"operator",relevance:0,variants:[{match:b},{match:`\\.(\\.|${F})+`}]
}],x="([0-9a-fA-F]_*)+",I={className:"number",relevance:0,variants:[{
match:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{
match:`\\b0x(${x})(\\.(${x}))?([pP][+-]?(([0-9]_*)+))?\\b`},{
match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},L=(e="")=>({
className:"subst",variants:[{match:t(/\\/,e,/[0\\tnr"']/)},{
match:t(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),O=(e="")=>({className:"subst",
match:t(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),T=(e="")=>({className:"subst",
label:"interpol",begin:t(/\\/,e,/\(/),end:/\)/}),$=(e="")=>({begin:t(e,/"""/),
end:t(/"""/,e),contains:[L(e),O(e),T(e)]}),j=(e="")=>({begin:t(e,/"/),
end:t(/"/,e),contains:[L(e),T(e)]}),P={className:"string",
variants:[$(),$("#"),$("##"),$("###"),j(),j("#"),j("##"),j("###")]},K={
match:t(/`/,w,/`/)},z=[K,{className:"variable",match:/\$\d+/},{
className:"variable",match:`\\$${f}+`}],q=[{match:/(@|#(un)?)available/,
className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:E,
contains:[...M,I,P]}]}},{className:"keyword",match:t(/@/,n(...g))},{
className:"meta",match:t(/@/,w)}],U={match:a(/\b[A-Z]/),relevance:0,contains:[{
className:"type",
match:t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")
},{className:"type",match:y,relevance:0},{match:/[?!]+/,relevance:0},{
match:/\.\.\./,relevance:0},{match:t(/\s+&\s+/,a(y)),relevance:0}]},Z={
begin:/</,end:/>/,keywords:k,contains:[...v,...B,...q,S,U]};U.contains.push(Z)
;const V={begin:/\(/,end:/\)/,relevance:0,keywords:k,contains:["self",{
match:t(w,/\s*:/),keywords:"_|0",relevance:0
},...v,...B,..._,...M,I,P,...z,...q,U]},W={begin:/</,end:/>/,contains:[...v,U]
},G={begin:/\(/,end:/\)/,keywords:k,contains:[{
begin:n(a(t(w,/\s*:/)),a(t(w,/\s+/,w,/\s*:/))),end:/:/,relevance:0,contains:[{
className:"keyword",match:/\b_\b/},{className:"params",match:w}]
},...v,...B,...M,I,P,...q,U,V],endsParent:!0,illegal:/["']/},R={
match:[/func/,/\s+/,n(K.match,w,b)],className:{1:"keyword",3:"title.function"},
contains:[W,G,d],illegal:[/\[/,/%/]},X={
match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},
contains:[W,G,d],illegal:/\[|%/},H={match:[/operator/,/\s+/,b],className:{
1:"keyword",3:"title"}},J={begin:[/precedencegroup/,/\s+/,y],className:{
1:"keyword",3:"title"},contains:[U],keywords:[...l,...o],end:/}/}
;for(const e of P.variants){const a=e.contains.find((e=>"interpol"===e.label))
;a.keywords=k;const t=[...B,..._,...M,I,P,...z];a.contains=[...t,{begin:/\(/,
end:/\)/,contains:["self",...t]}]}return{name:"Swift",keywords:k,
contains:[...v,R,X,{beginKeywords:"struct protocol class extension enum actor",
end:"\\{",excludeEnd:!0,keywords:k,contains:[e.inherit(e.TITLE_MODE,{
className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...B]
},H,J,{beginKeywords:"import",end:/$/,contains:[...v],relevance:0
},...B,..._,...M,I,P,...z,...q,U,V]}}})();hljs.registerLanguage("swift",e)})();/*! `php` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=e.regex,r="[a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$]))",a=t.concat("([a-zA-Z_\\x7f-\\xff]",r),n=t.concat("([A-Z]",r),o={
scope:"variable",match:"\\$+"+a},c={scope:"subst",variants:[{begin:/\$\w+/},{
begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),l="[ \t\n]",s={scope:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{
illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(c)
}),i,e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
contains:e.QUOTE_STRING_MODE.contains.concat(c)})]},p={scope:"number",
variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{
begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{
begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{
begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
}],relevance:0
},_=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],d=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],b={
keyword:_,literal:(e=>{const t=[];return["false","null","true"].forEach((e=>{
t.push(e),e.toLowerCase()===e?t.push(e.toUpperCase()):t.push(e.toLowerCase())
})),t})(),built_in:d},u=e=>e.map((e=>e.replace(/\|\d+$/,""))),E={variants:[{
match:[/new/,t.concat(l,"+"),t.concat("(?!",u(d).join("\\b|"),"\\b)"),t.concat(/\\?/,a),t.concat(l,"*",/\(/)],
scope:{1:"keyword",4:"title.class"}}]},g={relevance:0,
match:[/\b/,t.concat("(?!fn\\b|function\\b|",u(_).join("\\b|"),"|",u(d).join("\\b|"),"\\b)"),a,t.concat(l,"*"),t.lookahead(/(?=\()/)],
scope:{3:"title.function.invoke"}},I=t.concat(a,"\\b(?!\\()"),h={variants:[{
match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),I],scope:{2:"variable.constant"
}},{match:[/::/,/class/],scope:{2:"variable.language"}},{
match:[n,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{
match:[n,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]};return{
case_insensitive:!1,keywords:b,
contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{
contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,
keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,
contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{
begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{begin:/\?>/}]},{
scope:"variable.language",match:/\$this\b/},o,g,h,{
match:[/const/,/\s/,a,/\s*=/],scope:{1:"keyword",3:"variable.constant"}},E,{
scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,
excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"
},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",
begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:b,
contains:["self",o,h,e.C_BLOCK_COMMENT_MODE,s,p]}]},{scope:"class",variants:[{
beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",
illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{
beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{
beginKeywords:"use",relevance:0,end:";",contains:[{
match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},s,p]}
}})();hljs.registerLanguage("php",e)})();/*! `php-template` grammar compiled for Highlight.js 11.4.0 */
(()=>{var n=(()=>{"use strict";return n=>({name:"PHP template",
subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",
contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{
begin:"b'",end:"'",skip:!0},n.inherit(n.APOS_STRING_MODE,{illegal:null,
className:null,contains:null,skip:!0}),n.inherit(n.QUOTE_STRING_MODE,{
illegal:null,className:null,contains:null,skip:!0})]}]})})()
;hljs.registerLanguage("php-template",n)})();/*! `perl` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=/[dualxmsipngr]{0,12}/,r={$pattern:/[\w.]+/,
keyword:"abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
},s={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:r},i={begin:/->\{/,
end:/\}/},a={variants:[{begin:/\$\d/},{
begin:n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")
},{begin:/[$%@][^\s\w{]/,relevance:0}]
},c=[e.BACKSLASH_ESCAPE,s,a],o=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],g=(e,r,s="\\1")=>{
const i="\\1"===s?s:n.concat(s,r)
;return n.concat(n.concat("(?:",e,")"),r,/(?:\\.|[^\\\/])*?/,i,/(?:\\.|[^\\\/])*?/,s,t)
},l=(e,r,s)=>n.concat(n.concat("(?:",e,")"),r,/(?:\\.|[^\\\/])*?/,s,t),d=[a,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{
endsWithParent:!0}),i,{className:"string",contains:c,variants:[{
begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",
relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{
begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",
begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},{
begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
keywords:"split return print reverse grep",relevance:0,
contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{
begin:g("s|tr|y",n.either(...o,{capture:!0}))},{begin:g("s|tr|y","\\(","\\)")},{
begin:g("s|tr|y","\\[","\\]")},{begin:g("s|tr|y","\\{","\\}")}],relevance:2},{
className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{
begin:l("(?:m|qr)?",/\//,/\//)},{begin:l("m|qr",n.either(...o,{capture:!0
}),/\1/)},{begin:l("m|qr",/\(/,/\)/)},{begin:l("m|qr",/\[/,/\]/)},{
begin:l("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",
end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{
begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",
subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]
}];return s.contains=d,i.contains=d,{name:"Perl",aliases:["pl","pm"],keywords:r,
contains:d}}})();hljs.registerLanguage("perl",e)})();/*! `less` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],r=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-height","max-width","min-height","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse(),n=i.concat(r)
;return a=>{const s=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}
}))(a),l=n,d="([\\w-]+|@\\{[\\w-]+\\})",c=[],g=[],m=e=>({className:"string",
begin:"~?"+e+".*?"+e}),p=(e,t,i)=>({className:e,begin:t,relevance:i}),b={
$pattern:/[a-z-]+/,keyword:"and or not only",attribute:t.join(" ")},u={
begin:"\\(",end:"\\)",contains:g,keywords:b,relevance:0}
;g.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,m("'"),m('"'),s.CSS_NUMBER_MODE,{
begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
excludeEnd:!0}
},s.HEXCOLOR,u,p("variable","@@?[\\w-]+",10),p("variable","@\\{[\\w-]+\\}"),p("built_in","~?`[^`]*?`"),{
className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0
},s.IMPORTANT);const h=g.concat({begin:/\{/,end:/\}/,contains:c}),f={
beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"
}].concat(g)},v={begin:d+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,
contains:[{begin:/-(webkit|moz|ms|o)-/},s.CSS_VARIABLE,{className:"attribute",
begin:"\\b("+o.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,
illegal:"[<=$]",relevance:0,contains:g}}]},w={className:"keyword",
begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
starts:{end:"[;{}]",keywords:b,returnEnd:!0,contains:g,relevance:0}},k={
className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{
begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:h}},y={variants:[{
begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:d,end:/\{/}],returnBegin:!0,
returnEnd:!0,illegal:"[<='$\"]",relevance:0,
contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,f,p("keyword","all\\b"),p("variable","@\\{[\\w-]+\\}"),{
begin:"\\b("+e.join("|")+")\\b",className:"selector-tag"
},s.CSS_NUMBER_MODE,p("selector-tag",d,0),p("selector-id","#"+d),p("selector-class","\\."+d,0),p("selector-tag","&",0),s.ATTRIBUTE_SELECTOR_MODE,{
className:"selector-pseudo",begin:":("+i.join("|")+")"},{
className:"selector-pseudo",begin:":(:)?("+r.join("|")+")"},{begin:/\(/,
end:/\)/,relevance:0,contains:h},{begin:"!important"},s.FUNCTION_DISPATCH]},x={
begin:`[\\w-]+:(:)?(${l.join("|")})`,returnBegin:!0,contains:[y]}
;return c.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,w,k,x,v,y),{
name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:c}}})()
;hljs.registerLanguage("less",e)})();/*! `kotlin` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;var e="\\.([0-9](_*[0-9])*)",n="[0-9a-fA-F](_*[0-9a-fA-F])*",a={
className:"number",variants:[{
begin:`(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:`\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${e})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};return e=>{const n={
keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
literal:"true false null"},i={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
},s={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},t={
className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},r={className:"string",
variants:[{begin:'"""',end:'"""(?=[^"])',contains:[t,s]},{begin:"'",end:"'",
illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
contains:[e.BACKSLASH_ESCAPE,t,s]}]};s.contains.push(r);const l={
className:"meta",
begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
},c={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
end:/\)/,contains:[e.inherit(r,{className:"string"})]}]
},o=a,b=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),E={
variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,
contains:[]}]},d=E;return d.variants[1].contains=[E],E.variants[1].contains=[d],
{name:"Kotlin",aliases:["kt","kts"],keywords:n,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,b,{className:"keyword",
begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
begin:/@\w+/}]}},i,l,c,{className:"function",beginKeywords:"fun",end:"[(]|$",
returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
endsWithParent:!0,contains:[E,e.C_LINE_COMMENT_MODE,b],relevance:0
},e.C_LINE_COMMENT_MODE,b,l,c,r,e.C_NUMBER_MODE]},b]},{className:"class",
beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
illegal:"extends implements",contains:[{
beginKeywords:"public protected internal private constructor"
},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,
excludeBegin:!0,returnEnd:!0},l,c]},r,{className:"meta",begin:"^#!/usr/bin/env",
end:"$",illegal:"\n"},o]}}})();hljs.registerLanguage("kotlin",e)})();/*! `properties` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t="[ \\t\\f]*",n="([^\\\\:= \\t\\f\\n]|\\\\.)+";return{name:".properties",
disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,
contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{
begin:n+"[ \\t\\f]*[:=][ \\t\\f]*"},{begin:n+"[ \\t\\f]+"}],contains:[{
className:"attr",begin:n,endsParent:!0}],starts:{
end:"([ \\t\\f]*[:=][ \\t\\f]*|[ \\t\\f]+)",relevance:0,starts:{
className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{
begin:"\\\\\\n"}]}}},{className:"attr",begin:n+t+"$"}]}}})()
;hljs.registerLanguage("properties",e)})();/*! `applescript` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=e.regex,r=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),i={
className:"params",begin:/\(/,end:/\)/,contains:["self",e.C_NUMBER_MODE,r]
},n=e.COMMENT(/--/,/$/),a=[n,e.COMMENT(/\(\*/,/\*\)/,{contains:["self",n]
}),e.HASH_COMMENT_MODE];return{name:"AppleScript",aliases:["osascript"],
keywords:{
keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
literal:"AppleScript false linefeed return pi quote result space tab true",
built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
},contains:[r,e.C_NUMBER_MODE,{className:"built_in",
begin:t.concat(/\b/,t.either(/clipboard info/,/the clipboard/,/info for/,/list (disks|folder)/,/mount volume/,/path to/,/(close|open for) access/,/(get|set) eof/,/current date/,/do shell script/,/get volume settings/,/random number/,/set volume/,/system attribute/,/system info/,/time to GMT/,/(load|run|store) script/,/scripting components/,/ASCII (character|number)/,/localized string/,/choose (application|color|file|file name|folder|from list|remote application|URL)/,/display (alert|dialog)/),/\b/)
},{className:"built_in",begin:/^\s*return\b/},{className:"literal",
begin:/\b(text item delimiters|current application|missing value)\b/},{
className:"keyword",
begin:t.concat(/\b/,t.either(/apart from/,/aside from/,/instead of/,/out of/,/greater than/,/isn't|(doesn't|does not) (equal|come before|come after|contain)/,/(greater|less) than( or equal)?/,/(starts?|ends|begins?) with/,/contained by/,/comes (before|after)/,/a (ref|reference)/,/POSIX (file|path)/,/(date|time) string/,/quoted form/),/\b/)
},{beginKeywords:"on",illegal:/[${=;\n]/,contains:[e.UNDERSCORE_TITLE_MODE,i]
},...a],illegal:/\/\/|->|=>|\[\[/}}})();hljs.registerLanguage("applescript",e)
})();/*! `go` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],
type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],
literal:["true","false","iota","nil"],
built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]
};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
begin:/\(/,end:/\)/,endsParent:!0,keywords:n,illegal:/["']/}]}]}}})()
;hljs.registerLanguage("go",e)})();/*! `coffeescript` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;const e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;return t=>{const a={
keyword:e.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((i=["var","const","let","function","static"],
e=>!i.includes(e))),literal:n.concat(["yes","no","on","off"]),
built_in:r.concat(["npm","print"])};var i;const s="[A-Za-z$_][0-9A-Za-z$_]*",o={
className:"subst",begin:/#\{/,end:/\}/,keywords:a
},c=[t.BINARY_NUMBER_MODE,t.inherit(t.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",
relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,
contains:[t.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[t.BACKSLASH_ESCAPE]
},{begin:/"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,
contains:[t.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",
end:"///",contains:[o,t.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",
relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+s
},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{
begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c
;const l=t.inherit(t.TITLE_MODE,{begin:s}),d="(\\(.*\\)\\s*)?\\B[-=]>",g={
className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,
end:/\)/,keywords:a,contains:["self"].concat(c)}]},u={variants:[{
match:[/class\s+/,s,/\s+extends\s+/,s]},{match:[/class\s+/,s]}],scope:{
2:"title.class",4:"title.class.inherited"},keywords:a};return{
name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:a,illegal:/\/\*/,
contains:[...c,t.COMMENT("###","###"),t.HASH_COMMENT_MODE,{className:"function",
begin:"^\\s*"+s+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,contains:[l,g]},{
begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:d,
end:"[-=]>",returnBegin:!0,contains:[g]}]},u,{begin:s+":",end:":",
returnBegin:!0,returnEnd:!0,relevance:0}]}}})()
;hljs.registerLanguage("coffeescript",e)})();/*! `diff` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex;return{name:"Diff",
aliases:["patch"],contains:[{className:"meta",relevance:10,
match:a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)
},{className:"comment",variants:[{
begin:a.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),
end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{
className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,
end:/$/}]}}})();hljs.registerLanguage("diff",e)})();/*! `dart` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"subst",variants:[{
begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,
end:/\}/}],keywords:"true false null this is new super"},t={className:"string",
variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",
illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"""',end:'"""',
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:"'",end:"'",illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,a]}]};a.contains=[e.C_NUMBER_MODE,t]
;const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],r=i.map((e=>e+"?"))
;return{name:"Dart",keywords:{
keyword:["abstract","as","assert","async","await","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","inferface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","while","with","yield"],
built_in:i.concat(r).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),
$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},
contains:[t,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0
}),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",
end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,
contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]
},e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}})()
;hljs.registerLanguage("dart",e)})();/*! `objectivec` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=/[a-zA-Z@][a-zA-Z0-9_]*/,_={
$pattern:n,keyword:["@interface","@class","@protocol","@implementation"]}
;return{name:"Objective-C",
aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{$pattern:n,
keyword:["int","float","while","char","export","sizeof","typedef","const","struct","for","union","unsigned","long","volatile","static","bool","mutable","if","do","return","goto","void","enum","else","break","extern","asm","case","short","default","double","register","explicit","signed","typename","this","switch","continue","wchar_t","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","super","unichar","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],
literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],
built_in:["BOOL","dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"]
},illegal:"</",contains:[{className:"built_in",
begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
keywords:{
keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",
begin:"("+_.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:_,
contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,
relevance:0}]}}})();hljs.registerLanguage("objectivec",e)})();/*! `cpp` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,a=e.COMMENT("//","$",{
contains:[{begin:/\\\n/}]
}),n="[a-zA-Z_]\\w*::",r="(?!struct)(decltype\\(auto\\)|"+t.optional(n)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",i={
className:"type",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},c={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"string"}),{
className:"string",begin:/<.*?>/},a,e.C_BLOCK_COMMENT_MODE]},l={
className:"title",begin:t.optional(n)+e.IDENT_RE,relevance:0
},d=t.optional(n)+e.IDENT_RE+"\\s*\\(",u={
type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],
keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],
literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
},p={className:"function.dispatch",relevance:0,keywords:{
_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
},
begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))
},_=[p,o,i,a,e.C_BLOCK_COMMENT_MODE,c,s],m={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:_.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:_.concat(["self"]),relevance:0}]),relevance:0},g={className:"function",
begin:"("+r+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
keywords:u,relevance:0},{begin:d,returnBegin:!0,contains:[l],relevance:0},{
begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[s,c]},{
relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:u,
relevance:0,contains:[a,e.C_BLOCK_COMMENT_MODE,s,c,i,{begin:/\(/,end:/\)/,
keywords:u,relevance:0,contains:["self",a,e.C_BLOCK_COMMENT_MODE,s,c,i]}]
},i,a,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C++",
aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:u,illegal:"</",
classNameAliases:{"function.dispatch":"built_in"},
contains:[].concat(m,g,p,_,[o,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
end:">",keywords:u,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:u},{
match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
className:{1:"keyword",3:"title.class"}}])}}})();hljs.registerLanguage("cpp",e)
})();/*! `http` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n="HTTP/(2|1\\.[01])",a={
className:"attribute",
begin:e.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{
contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",
relevance:0}}]}},s=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}
}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{
begin:"^(?="+n+" \\d{3})",end:/$/,contains:[{className:"meta",begin:n},{
className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,
contains:s}},{begin:"(?=^[A-Z]+ (.*?) "+n+"$)",end:/$/,contains:[{
className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{
className:"meta",begin:n},{className:"keyword",begin:"[A-Z]+"}],starts:{
end:/\b\B/,illegal:/\S/,contains:s}},e.inherit(a,{relevance:0})]}}})()
;hljs.registerLanguage("http",e)})();/*! `c` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,t=e.COMMENT("//","$",{
contains:[{begin:/\\\n/}]
}),s="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",r={
className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{
match:/\batomic_[a-z]{3,6}\b/}]},i={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(i,{className:"string"}),{
className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},c={
className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0
},d=n.optional(s)+e.IDENT_RE+"\\s*\\(",u={
keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],
type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],
literal:"true false NULL",
built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
},g=[o,r,t,e.C_BLOCK_COMMENT_MODE,l,i],m={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:g.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:g.concat(["self"]),relevance:0}]),relevance:0},p={
begin:"("+a+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
keywords:u,relevance:0},{begin:d,returnBegin:!0,contains:[e.inherit(c,{
className:"title.function"})],relevance:0},{relevance:0,match:/,/},{
className:"params",begin:/\(/,end:/\)/,keywords:u,relevance:0,
contains:[t,e.C_BLOCK_COMMENT_MODE,i,l,r,{begin:/\(/,end:/\)/,keywords:u,
relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,i,l,r]}]
},r,t,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C",aliases:["h"],keywords:u,
disableAutodetect:!0,illegal:"</",contains:[].concat(m,p,g,[o,{
begin:e.IDENT_RE+"::",keywords:u},{className:"class",
beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{
beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:o,
strings:i,keywords:u}}}})();hljs.registerLanguage("c",e)})();/*! `typescript` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","module","global"],i=[].concat(r,t,s)
;function o(o){const l=o.regex,d=e,b={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,t=e.input[a]
;if("<"===t||","===t)return void n.ignoreMatch();let s
;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
;return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()),(s=e.input.substr(a).match(/^\s+extends\s+/))&&0===s.index&&n.ignoreMatch()
}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
},u="\\.([0-9](_?[0-9])*)",m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={
className:"number",variants:[{
begin:`(\\b(${m})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
begin:`\\b(${m})\\b((${u})\\b|\\.)?|(${u})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:g,contains:[]},A={begin:"html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},p={
begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={className:"string",
begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,y]},f={className:"comment",
variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
},N=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,A,p,_,E];y.contains=N.concat({
begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(N)})
;const h=[].concat(f,y.contains),v=h.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(h)}]),S={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:v},w={variants:[{
match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,l.concat(d,"(",l.concat(/\./,d),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,
match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...t,...s]}},x={variants:[{
match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],
illegal:/%/},k={
match:l.concat(/\b/,(O=[...r,"super"],l.concat("(?!",O.join("|"),")")),d,l.lookahead(/\(/)),
className:"title.function",relevance:0};var O;const I={
begin:l.concat(/\./,l.lookahead(l.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},C={
match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},S]
},T="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",M={
match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(T)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]}
;return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
PARAMS_CONTAINS:v,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,
contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,A,p,_,f,E,R,{className:"attr",
begin:d+l.lookahead(":"),relevance:0},M,{
begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[f,o.REGEXP_MODE,{
className:"function",begin:T,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,keywords:g,contains:v}]}]},{begin:/,/,relevance:0},{match:/\s+/,
relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:b.begin,
"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{
begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}]},x,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[S,o.inherit(o.TITLE_MODE,{begin:d,
className:"title.function"})]},{match:/\.\.\./,relevance:0},I,{match:"\\$"+d,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[S]},k,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},w,C,{match:/\$[(.]/}]}}return t=>{
const s=o(t),r=["any","void","number","boolean","string","object","never","enum"],l={
beginKeywords:"namespace",end:/\{/,excludeEnd:!0,
contains:[s.exports.CLASS_REFERENCE]},d={beginKeywords:"interface",end:/\{/,
excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},
contains:[s.exports.CLASS_REFERENCE]},b={$pattern:e,
keyword:n.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),
literal:a,built_in:i.concat(r),"variable.language":c},g={className:"meta",
begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},u=(e,n,a)=>{
const t=e.contains.findIndex((e=>e.label===n))
;if(-1===t)throw Error("can not find mode to replace");e.contains.splice(t,1,a)}
;return Object.assign(s.keywords,b),
s.exports.PARAMS_CONTAINS.push(g),s.contains=s.contains.concat([g,l,d]),
u(s,"shebang",t.SHEBANG()),u(s,"use_strict",{className:"meta",relevance:10,
begin:/^\s*['"]use strict['"]/
}),s.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(s,{
name:"TypeScript",aliases:["ts","tsx"]}),s}})()
;hljs.registerLanguage("typescript",e)})();/*! `javascript` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","module","global"],i=[].concat(r,t,s)
;return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,t=e.input[a]
;if("<"===t||","===t)return void n.ignoreMatch();let s
;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
;return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()),(s=e.input.substr(a).match(/^\s+extends\s+/))&&0===s.index&&n.ignoreMatch()
}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
},u="\\.([0-9](_?[0-9])*)",m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={
className:"number",variants:[{
begin:`(\\b(${m})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
begin:`\\b(${m})\\b((${u})\\b|\\.)?|(${u})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},A={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:g,contains:[]},y={begin:"html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"xml"}},N={
begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"css"}},_={className:"string",
begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,A]},f={className:"comment",
variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
},h=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,y,N,_,E];A.contains=h.concat({
begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(h)})
;const v=[].concat(f,A.contains),p=v.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(v)}]),S={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:p},w={variants:[{
match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,
match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...t,...s]}},O={variants:[{
match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],
illegal:/%/},k={
match:l.concat(/\b/,(I=[...r,"super"],l.concat("(?!",I.join("|"),")")),b,l.lookahead(/\(/)),
className:"title.function",relevance:0};var I;const x={
begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},T={
match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},S]
},C="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",M={
match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(C)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]}
;return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
PARAMS_CONTAINS:p,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,
contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,y,N,_,f,E,R,{className:"attr",
begin:b+l.lookahead(":"),relevance:0},M,{
begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[f,o.REGEXP_MODE,{
className:"function",begin:C,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,keywords:g,contains:p}]}]},{begin:/,/,relevance:0},{match:/\s+/,
relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,
"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{
begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},O,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[S,o.inherit(o.TITLE_MODE,{begin:b,
className:"title.function"})]},{match:/\.\.\./,relevance:0},x,{match:"\\$"+b,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[S]},k,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},w,T,{match:/\$[(.]/}]}}})()
;hljs.registerLanguage("javascript",e)})();/*! `avrasm` grammar compiled for Highlight.js 11.4.0 */
(()=>{var r=(()=>{"use strict";return r=>({name:"AVR Assembly",
case_insensitive:!0,keywords:{$pattern:"\\.?"+r.IDENT_RE,
keyword:"adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
built_in:"r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
meta:".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
},contains:[r.C_BLOCK_COMMENT_MODE,r.COMMENT(";","$",{relevance:0
}),r.C_NUMBER_MODE,r.BINARY_NUMBER_MODE,{className:"number",
begin:"\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"},r.QUOTE_STRING_MODE,{className:"string",
begin:"'",end:"[^\\\\]'",illegal:"[^\\\\][^']"},{className:"symbol",
begin:"^[A-Za-z0-9_.$]+:"},{className:"meta",begin:"#",end:"$"},{
className:"subst",begin:"@[0-9]+"}]})})();hljs.registerLanguage("avrasm",r)})();/*! `r` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,i=a.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,t=a.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/)
;return{name:"R",keywords:{$pattern:n,
keyword:"function if in break next repeat else for while",
literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,
starts:{end:a.lookahead(a.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),
endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{
scope:"variable",variants:[{match:n},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0
}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]
}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],
variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',
relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{
1:"operator",2:"number"},match:[s,i]},{scope:{1:"operator",2:"number"},
match:[/%[^%]*%/,i]},{scope:{1:"punctuation",2:"number"},match:[t,i]},{scope:{
2:"number"},match:[/[^a-zA-Z0-9._]|^/,i]}]},{scope:{3:"operator"},
match:[n,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{
match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:t},{begin:"`",end:"`",
contains:[{begin:/\\./}]}]}}})();hljs.registerLanguage("r",e)})();/*! `rust` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,n={
className:"title.function.invoke",relevance:0,
begin:t.concat(/\b/,/(?!let\b)/,e.IDENT_RE,t.lookahead(/\s*\(/))
},a="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bin!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"]
;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",
type:["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"],
keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],
literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
begin:"\\b0b([01_]+)"+a},{begin:"\\b0o([0-7_]+)"+a},{
begin:"\\b0x([A-Fa-f0-9_]+)"+a},{
begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+a}],relevance:0},{
begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{
className:"string",begin:/"/,end:/"/}]},{
begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
3:"keyword",4:"variable"}},{
begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",
3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],
className:{1:"keyword",3:"title.class"}},{
begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],
className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{
keyword:"Self",built_in:i}},{className:"punctuation",begin:"->"},n]}}})()
;hljs.registerLanguage("rust",e)})();