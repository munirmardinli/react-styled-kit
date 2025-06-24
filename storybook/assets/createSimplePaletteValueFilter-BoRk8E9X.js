var ve=Object.defineProperty;var De=(e,t,n)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>De(e,typeof t!="symbol"?t+"":t,n);import{t as Le,r as a,R as G,j as N,u as fe,q as Q}from"./iframe-LQwaAxvI.js";import{p as Ne,c as $e,a as je,d as Fe,_ as Ue,s as ee}from"./assertThisInitialized-FjZxxP1b.js";function pe(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=pe(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function C(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=pe(e))&&(r&&(r+=" "),r+=t);return r}const se={theme:void 0};function ze(e){let t,n;return function(o){let s=t;return(s===void 0||o.theme!==n)&&(se.theme=o.theme,s=Ne(e(se)),t=s,n=o.theme),s}}const ie=e=>e,Oe=()=>{let e=ie;return{configure(t){e=t},generate(t){return e(t)},reset(){e=ie}}},Ae=Oe(),Ye={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function de(e,t,n="Mui"){const r=Ye[t];return r?`${n}-${r}`:`${Ae.generate(e)}-${t}`}function yt(e){if(typeof e!="string")throw new Error(Le(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Xe(e,t,n=void 0){const r={};for(const o in e){const s=e[o];let i="",c=!0;for(let l=0;l<s.length;l+=1){const f=s[l];f&&(i+=(c===!0?"":" ")+t(f),c=!1,n&&n[f]&&(i+=" "+n[f]))}r[o]=i}return r}const Et=ze;function he(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=de(e,o,n)}),r}const Ge=typeof window<"u"?a.useLayoutEffect:a.useEffect;function H(e){const t=a.useRef(e);return Ge(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function ae(...e){const t=a.useRef(void 0),n=a.useCallback(r=>{const o=e.map(s=>{if(s==null)return null;if(typeof s=="function"){const i=s,c=i(r);return typeof c=="function"?c:()=>{i(null)}}return s.current=r,()=>{s.current=null}});return()=>{o.forEach(s=>s==null?void 0:s())}},e);return a.useMemo(()=>e.every(r=>r==null)?null:r=>{t.current&&(t.current(),t.current=void 0),r!=null&&(t.current=n(r))},e)}const ue=G.createContext(null);function te(e,t){var n=function(s){return t&&a.isValidElement(s)?t(s):s},r=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function Ke(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var r=Object.create(null),o=[];for(var s in e)s in t?o.length&&(r[s]=o,o=[]):o.push(s);var i,c={};for(var l in t){if(r[l])for(i=0;i<r[l].length;i++){var f=r[l][i];c[r[l][i]]=n(f)}c[l]=n(l)}for(i=0;i<o.length;i++)c[o[i]]=n(o[i]);return c}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function We(e,t){return te(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function qe(e,t,n){var r=te(e.children),o=Ke(t,r);return Object.keys(o).forEach(function(s){var i=o[s];if(a.isValidElement(i)){var c=s in t,l=s in r,f=t[s],d=a.isValidElement(f)&&!f.props.in;l&&(!c||d)?o[s]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:L(i,"exit",e),enter:L(i,"enter",e)}):!l&&c&&!d?o[s]=a.cloneElement(i,{in:!1}):l&&c&&a.isValidElement(f)&&(o[s]=a.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:L(i,"exit",e),enter:L(i,"enter",e)}))}}),o}var He=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},_e={component:"div",childFactory:function(t){return t}},ne=function(e){$e(t,e);function t(r,o){var s;s=e.call(this,r,o)||this;var i=s.handleExited.bind(je(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,s){var i=s.children,c=s.handleExited,l=s.firstRender;return{children:l?We(o,c):qe(o,i,c),firstRender:!1}},n.handleExited=function(o,s){var i=te(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(c){var l=Fe({},c.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,s=o.component,i=o.childFactory,c=Ue(o,["component","childFactory"]),l=this.state.contextValue,f=He(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,s===null?G.createElement(ue.Provider,{value:l},f):G.createElement(ue.Provider,{value:l},G.createElement(s,c,f))},t}(G.Component);ne.propTypes={};ne.defaultProps=_e;const le={};function me(e,t){const n=a.useRef(le);return n.current===le&&(n.current=e(t)),n}const Ze=[];function Je(e){a.useEffect(e,Ze)}class re{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new re}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Qe(){const e=me(re.create).current;return Je(e.disposeEffect),e}function ce(e){try{return e.matches(":focus-visible")}catch{}return!1}class _{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new _}static use(){const t=me(_.create).current,[n,r]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=r,a.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=tt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function et(){return _.use()}function tt(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function nt(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:s,rippleSize:i,in:c,onExited:l,timeout:f}=e,[d,h]=a.useState(!1),M=C(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),V={width:i,height:i,top:-(i/2)+s,left:-(i/2)+o},g=C(n.child,d&&n.childLeaving,r&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const k=setTimeout(l,f);return()=>{clearTimeout(k)}}},[l,c,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:g})})}const b=he("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,rt=80,ot=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,st=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,it=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,at=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ut=ee(nt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ot};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${st};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${it};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,lt=a.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:i,...c}=r,[l,f]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),V=Qe(),g=a.useRef(null),k=a.useRef(null),x=a.useCallback(p=>{const{pulsate:E,rippleX:y,rippleY:F,rippleSize:B,cb:U}=p;f(R=>[...R,N.jsx(ut,{classes:{ripple:C(s.ripple,b.ripple),rippleVisible:C(s.rippleVisible,b.rippleVisible),ripplePulsate:C(s.ripplePulsate,b.ripplePulsate),child:C(s.child,b.child),childLeaving:C(s.childLeaving,b.childLeaving),childPulsate:C(s.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:y,rippleY:F,rippleSize:B},d.current)]),d.current+=1,h.current=U},[s]),$=a.useCallback((p={},E={},y=()=>{})=>{const{pulsate:F=!1,center:B=o||E.pulsate,fakeElement:U=!1}=E;if((p==null?void 0:p.type)==="mousedown"&&M.current){M.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(M.current=!0);const R=U?null:k.current,S=R?R.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,T,I;if(B||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)w=Math.round(S.width/2),T=Math.round(S.height/2);else{const{clientX:z,clientY:v}=p.touches&&p.touches.length>0?p.touches[0]:p;w=Math.round(z-S.left),T=Math.round(v-S.top)}if(B)I=Math.sqrt((2*S.width**2+S.height**2)/3),I%2===0&&(I+=1);else{const z=Math.max(Math.abs((R?R.clientWidth:0)-w),w)*2+2,v=Math.max(Math.abs((R?R.clientHeight:0)-T),T)*2+2;I=Math.sqrt(z**2+v**2)}p!=null&&p.touches?g.current===null&&(g.current=()=>{x({pulsate:F,rippleX:w,rippleY:T,rippleSize:I,cb:y})},V.start(rt,()=>{g.current&&(g.current(),g.current=null)})):x({pulsate:F,rippleX:w,rippleY:T,rippleSize:I,cb:y})},[o,x,V]),K=a.useCallback(()=>{$({},{pulsate:!0})},[$]),j=a.useCallback((p,E)=>{if(V.clear(),(p==null?void 0:p.type)==="touchend"&&g.current){g.current(),g.current=null,V.start(0,()=>{j(p,E)});return}g.current=null,f(y=>y.length>0?y.slice(1):y),h.current=E},[V]);return a.useImperativeHandle(n,()=>({pulsate:K,start:$,stop:j}),[K,$,j]),N.jsx(at,{className:C(b.root,s.root,i),ref:k,...c,children:N.jsx(ne,{component:null,exit:!0,children:l})})});function ct(e){return de("MuiButtonBase",e)}const ft=he("MuiButtonBase",["root","disabled","focusVisible"]),pt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i=Xe({root:["root",t&&"disabled",n&&"focusVisible"]},ct,o);return n&&r&&(i.root+=` ${r}`),i},dt=ee("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ft.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Rt=a.forwardRef(function(t,n){const r=fe({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:i,className:c,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:g="a",onBlur:k,onClick:x,onContextMenu:$,onDragLeave:K,onFocus:j,onFocusVisible:p,onKeyDown:E,onKeyUp:y,onMouseDown:F,onMouseLeave:B,onMouseUp:U,onTouchEnd:R,onTouchMove:S,onTouchStart:w,tabIndex:T=0,TouchRippleProps:I,touchRippleRef:z,type:v,...O}=r,A=a.useRef(null),m=et(),ge=ae(m.ref,z),[D,W]=a.useState(!1);f&&D&&W(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const be=m.shouldMount&&!d&&!f;a.useEffect(()=>{D&&M&&!d&&m.pulsate()},[d,M,D,m]);const Me=P(m,"start",F,h),ye=P(m,"stop",$,h),Ee=P(m,"stop",K,h),Re=P(m,"stop",U,h),Ce=P(m,"stop",u=>{D&&u.preventDefault(),B&&B(u)},h),xe=P(m,"start",w,h),Te=P(m,"stop",R,h),Pe=P(m,"stop",S,h),Ve=P(m,"stop",u=>{ce(u.target)||W(!1),k&&k(u)},!1),Se=H(u=>{A.current||(A.current=u.currentTarget),ce(u.target)&&(W(!0),p&&p(u)),j&&j(u)}),Z=()=>{const u=A.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},we=H(u=>{M&&!u.repeat&&D&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&Z()&&u.key===" "&&u.preventDefault(),E&&E(u),u.target===u.currentTarget&&Z()&&u.key==="Enter"&&!f&&(u.preventDefault(),x&&x(u))}),Ie=H(u=>{M&&u.key===" "&&D&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),y&&y(u),x&&u.target===u.currentTarget&&Z()&&u.key===" "&&!u.defaultPrevented&&x(u)});let q=l;q==="button"&&(O.href||O.to)&&(q=g);const Y={};q==="button"?(Y.type=v===void 0?"button":v,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const ke=ae(n,A),oe={...r,centerRipple:s,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:D},Be=pt(oe);return N.jsxs(dt,{as:q,className:C(Be.root,c),ownerState:oe,onBlur:Ve,onClick:x,onContextMenu:ye,onFocus:Se,onKeyDown:we,onKeyUp:Ie,onMouseDown:Me,onMouseLeave:Ce,onMouseUp:Re,onDragLeave:Ee,onTouchEnd:Te,onTouchMove:Pe,onTouchStart:xe,ref:ke,tabIndex:f?-1:T,type:v,...Y,...O,children:[i,be?N.jsx(lt,{ref:ge,center:s,...I}):null]})});function P(e,t,n,r=!1){return H(o=>(n&&n(o),r||e[t](o),!0))}function ht(e){return typeof e.main=="string"}function mt(e,t=[]){if(!ht(e))return!1;for(const n of t)if(!e.hasOwnProperty(n)||typeof e[n]!="string")return!1;return!0}function Ct(e=[]){return([,t])=>t&&mt(t,e)}export{Rt as B,Ae as C,re as T,he as a,yt as b,C as c,Xe as d,Ct as e,Ge as f,de as g,H as h,Qe as i,ce as j,ue as k,Et as m,ae as u};
