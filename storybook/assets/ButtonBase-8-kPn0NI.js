var Bt=Object.defineProperty;var St=(e,t,n)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>St(e,typeof t!="symbol"?t+"":t,n);import{r as a,R as K,j,u as lt,p as Q}from"./iframe-knLkElny.js";import{c as x,a as ct,g as wt,d as Dt}from"./createSimplePaletteValueFilter-CPCKqSWq.js";import{_ as Lt,s as tt}from"./styled-Cm3m7c_-.js";import{c as kt,a as Nt,_ as jt}from"./assertThisInitialized-BjnbojEp.js";const $t=typeof window<"u"?a.useLayoutEffect:a.useEffect;function G(e){const t=a.useRef(e);return $t(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function st(...e){const t=a.useRef(void 0),n=a.useCallback(i=>{const o=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const s=r,c=s(i);return typeof c=="function"?c:()=>{s(null)}}return r.current=i,()=>{r.current=null}});return()=>{o.forEach(r=>r==null?void 0:r())}},e);return a.useMemo(()=>e.every(i=>i==null)?null:i=>{t.current&&(t.current(),t.current=void 0),i!=null&&(t.current=n(i))},e)}const it=K.createContext(null);function et(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},i=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function vt(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var i=Object.create(null),o=[];for(var r in e)r in t?o.length&&(i[r]=o,o=[]):o.push(r);var s,c={};for(var l in t){if(i[l])for(s=0;s<i[l].length;s++){var f=i[l][s];c[i[l][s]]=n(f)}c[l]=n(l)}for(s=0;s<o.length;s++)c[o[s]]=n(o[s]);return c}function N(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Ft(e,t){return et(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:N(n,"appear",e),enter:N(n,"enter",e),exit:N(n,"exit",e)})})}function Ut(e,t,n){var i=et(e.children),o=vt(t,i);return Object.keys(o).forEach(function(r){var s=o[r];if(a.isValidElement(s)){var c=r in t,l=r in i,f=t[r],d=a.isValidElement(f)&&!f.props.in;l&&(!c||d)?o[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:N(s,"exit",e),enter:N(s,"enter",e)}):!l&&c&&!d?o[r]=a.cloneElement(s,{in:!1}):l&&c&&a.isValidElement(f)&&(o[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:N(s,"exit",e),enter:N(s,"enter",e)}))}}),o}var zt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ot={component:"div",childFactory:function(t){return t}},nt=function(e){kt(t,e);function t(i,o){var r;r=e.call(this,i,o)||this;var s=r.handleExited.bind(Nt(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Ft(o,c):Ut(o,s,c),firstRender:!1}},n.handleExited=function(o,r){var s=et(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var l=Lt({},c.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,c=jt(o,["component","childFactory"]),l=this.state.contextValue,f=zt(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?K.createElement(it.Provider,{value:l},f):K.createElement(it.Provider,{value:l},K.createElement(r,c,f))},t}(K.Component);nt.propTypes={};nt.defaultProps=Ot;const at={};function pt(e,t){const n=a.useRef(at);return n.current===at&&(n.current=e(t)),n}const At=[];function Yt(e){a.useEffect(e,At)}class rt{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new rt}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Xt(){const e=pt(rt.create).current;return Yt(e.disposeEffect),e}function ut(e){try{return e.matches(":focus-visible")}catch{}return!1}class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const t=pt(q.create).current,[n,i]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=i,a.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=Wt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function Kt(){return q.use()}function Wt(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});return n.resolve=e,n.reject=t,n}function Ht(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:c,onExited:l,timeout:f}=e,[d,h]=a.useState(!1),M=x(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const w=setTimeout(l,f);return()=>{clearTimeout(w)}}},[l,c,f]),j.jsx("span",{className:M,style:V,children:j.jsx("span",{className:b})})}const g=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,_t=80,Gt=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,qt=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Zt=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Jt=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Qt=tt(Ht,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Gt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${qt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Zt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,te=a.forwardRef(function(t,n){const i=lt({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...c}=i,[l,f]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),V=Xt(),b=a.useRef(null),w=a.useRef(null),T=a.useCallback(p=>{const{pulsate:E,rippleX:R,rippleY:F,rippleSize:D,cb:U}=p;f(y=>[...y,j.jsx(Qt,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:F,rippleSize:D},d.current)]),d.current+=1,h.current=U},[r]),$=a.useCallback((p={},E={},R=()=>{})=>{const{pulsate:F=!1,center:D=o||E.pulsate,fakeElement:U=!1}=E;if((p==null?void 0:p.type)==="mousedown"&&M.current){M.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(M.current=!0);const y=U?null:w.current,I=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,C,S;if(D||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)B=Math.round(I.width/2),C=Math.round(I.height/2);else{const{clientX:z,clientY:L}=p.touches&&p.touches.length>0?p.touches[0]:p;B=Math.round(z-I.left),C=Math.round(L-I.top)}if(D)S=Math.sqrt((2*I.width**2+I.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((y?y.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((y?y.clientHeight:0)-C),C)*2+2;S=Math.sqrt(z**2+L**2)}p!=null&&p.touches?b.current===null&&(b.current=()=>{T({pulsate:F,rippleX:B,rippleY:C,rippleSize:S,cb:R})},V.start(_t,()=>{b.current&&(b.current(),b.current=null)})):T({pulsate:F,rippleX:B,rippleY:C,rippleSize:S,cb:R})},[o,T,V]),W=a.useCallback(()=>{$({},{pulsate:!0})},[$]),v=a.useCallback((p,E)=>{if(V.clear(),(p==null?void 0:p.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{v(p,E)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return a.useImperativeHandle(n,()=>({pulsate:W,start:$,stop:v}),[W,$,v]),j.jsx(Jt,{className:x(g.root,r.root,s),ref:w,...c,children:j.jsx(nt,{component:null,exit:!0,children:l})})});function ee(e){return wt("MuiButtonBase",e)}const ne=ct("MuiButtonBase",["root","disabled","focusVisible"]),re=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:o}=e,s=Dt({root:["root",t&&"disabled",n&&"focusVisible"]},ee,o);return n&&i&&(s.root+=` ${i}`),s},oe=tt("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ne.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ce=a.forwardRef(function(t,n){const i=lt({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:c,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:w,onClick:T,onContextMenu:$,onDragLeave:W,onFocus:v,onFocusVisible:p,onKeyDown:E,onKeyUp:R,onMouseDown:F,onMouseLeave:D,onMouseUp:U,onTouchEnd:y,onTouchMove:I,onTouchStart:B,tabIndex:C=0,TouchRippleProps:S,touchRippleRef:z,type:L,...O}=i,A=a.useRef(null),m=Kt(),ft=st(m.ref,z),[k,H]=a.useState(!1);f&&k&&H(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;a.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const ht=P(m,"start",F,h),mt=P(m,"stop",$,h),bt=P(m,"stop",W,h),gt=P(m,"stop",U,h),Mt=P(m,"stop",u=>{k&&u.preventDefault(),D&&D(u)},h),Rt=P(m,"start",B,h),Et=P(m,"stop",y,h),yt=P(m,"stop",I,h),xt=P(m,"stop",u=>{ut(u.target)||H(!1),w&&w(u)},!1),Tt=G(u=>{A.current||(A.current=u.currentTarget),ut(u.target)&&(H(!0),p&&p(u)),v&&v(u)}),Z=()=>{const u=A.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},Ct=G(u=>{M&&!u.repeat&&k&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&Z()&&u.key===" "&&u.preventDefault(),E&&E(u),u.target===u.currentTarget&&Z()&&u.key==="Enter"&&!f&&(u.preventDefault(),T&&T(u))}),Pt=G(u=>{M&&u.key===" "&&k&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),R&&R(u),T&&u.target===u.currentTarget&&Z()&&u.key===" "&&!u.defaultPrevented&&T(u)});let _=l;_==="button"&&(O.href||O.to)&&(_=b);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Vt=st(n,A),ot={...i,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:C,focusVisible:k},It=re(ot);return j.jsxs(oe,{as:_,className:x(It.root,c),ownerState:ot,onBlur:xt,onClick:T,onContextMenu:mt,onFocus:Tt,onKeyDown:Ct,onKeyUp:Pt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:gt,onDragLeave:bt,onTouchEnd:Et,onTouchMove:yt,onTouchStart:Rt,ref:Vt,tabIndex:f?-1:C,type:L,...Y,...O,children:[s,dt?j.jsx(te,{ref:ft,center:r,...S}):null]})});function P(e,t,n,i=!1){return G(o=>(n&&n(o),i||e[t](o),!0))}export{ce as B,nt as T,$t as a,G as b,Xt as c,rt as d,it as e,ut as i,st as u};
