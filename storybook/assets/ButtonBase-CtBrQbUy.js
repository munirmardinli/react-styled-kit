var Bt=Object.defineProperty;var St=(e,t,n)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>St(e,typeof t!="symbol"?t+"":t,n);import{r as u,f as Dt,R as K,_ as Lt,b as x,j,u as lt,t as Q}from"./iframe-x9hckUsm.js";import{a as ct,g as wt,c as kt}from"./createSimplePaletteValueFilter-Cew3ydXT.js";import{s as tt}from"./styled-DlipnhvF.js";import{c as Nt,a as jt,_ as $t}from"./assertThisInitialized-BjnbojEp.js";function G(e){const t=u.useRef(e);return Dt(()=>{t.current=e}),u.useRef((...n)=>(0,t.current)(...n)).current}function ot(...e){const t=u.useRef(void 0),n=u.useCallback(i=>{const s=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const o=r,c=o(i);return typeof c=="function"?c:()=>{o(null)}}return r.current=i,()=>{r.current=null}});return()=>{s.forEach(r=>r==null?void 0:r())}},e);return u.useMemo(()=>e.every(i=>i==null)?null:i=>{t.current&&(t.current(),t.current=void 0),i!=null&&(t.current=n(i))},e)}const it=K.createContext(null);function et(e,t){var n=function(r){return t&&u.isValidElement(r)?t(r):r},i=Object.create(null);return e&&u.Children.map(e,function(s){return s}).forEach(function(s){i[s.key]=n(s)}),i}function vt(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var i=Object.create(null),s=[];for(var r in e)r in t?s.length&&(i[r]=s,s=[]):s.push(r);var o,c={};for(var l in t){if(i[l])for(o=0;o<i[l].length;o++){var f=i[l][o];c[i[l][o]]=n(f)}c[l]=n(l)}for(o=0;o<s.length;o++)c[s[o]]=n(s[o]);return c}function N(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Ft(e,t){return et(e.children,function(n){return u.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:N(n,"appear",e),enter:N(n,"enter",e),exit:N(n,"exit",e)})})}function Ut(e,t,n){var i=et(e.children),s=vt(t,i);return Object.keys(s).forEach(function(r){var o=s[r];if(u.isValidElement(o)){var c=r in t,l=r in i,f=t[r],d=u.isValidElement(f)&&!f.props.in;l&&(!c||d)?s[r]=u.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:N(o,"exit",e),enter:N(o,"enter",e)}):!l&&c&&!d?s[r]=u.cloneElement(o,{in:!1}):l&&c&&u.isValidElement(f)&&(s[r]=u.cloneElement(o,{onExited:n.bind(null,o),in:f.props.in,exit:N(o,"exit",e),enter:N(o,"enter",e)}))}}),s}var zt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ot={component:"div",childFactory:function(t){return t}},nt=function(e){Nt(t,e);function t(i,s){var r;r=e.call(this,i,s)||this;var o=r.handleExited.bind(jt(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(s,r){var o=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Ft(s,c):Ut(s,o,c),firstRender:!1}},n.handleExited=function(s,r){var o=et(this.props.children);s.key in o||(s.props.onExited&&s.props.onExited(r),this.mounted&&this.setState(function(c){var l=Lt({},c.children);return delete l[s.key],{children:l}}))},n.render=function(){var s=this.props,r=s.component,o=s.childFactory,c=$t(s,["component","childFactory"]),l=this.state.contextValue,f=zt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,r===null?K.createElement(it.Provider,{value:l},f):K.createElement(it.Provider,{value:l},K.createElement(r,c,f))},t}(K.Component);nt.propTypes={};nt.defaultProps=Ot;const at={};function pt(e,t){const n=u.useRef(at);return n.current===at&&(n.current=e(t)),n}const At=[];function Yt(e){u.useEffect(e,At)}class rt{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new rt}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Xt(){const e=pt(rt.create).current;return Yt(e.disposeEffect),e}function ut(e){try{return e.matches(":focus-visible")}catch{}return!1}class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const t=pt(q.create).current,[n,i]=u.useState(!1);return t.shouldMount=n,t.setShouldMount=i,u.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=Wt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function Kt(){return q.use()}function Wt(){let e,t;const n=new Promise((i,s)=>{e=i,t=s});return n.resolve=e,n.reject=t,n}function Ht(e){const{className:t,classes:n,pulsate:i=!1,rippleX:s,rippleY:r,rippleSize:o,in:c,onExited:l,timeout:f}=e,[d,h]=u.useState(!1),M=x(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),V={width:o,height:o,top:-(o/2)+r,left:-(o/2)+s},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&h(!0),u.useEffect(()=>{if(!c&&l!=null){const D=setTimeout(l,f);return()=>{clearTimeout(D)}}},[l,c,f]),j.jsx("span",{className:M,style:V,children:j.jsx("span",{className:b})})}const g=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,_t=80,Gt=Q`
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
`,te=u.forwardRef(function(t,n){const i=lt({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:r={},className:o,...c}=i,[l,f]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),V=Xt(),b=u.useRef(null),D=u.useRef(null),T=u.useCallback(p=>{const{pulsate:E,rippleX:R,rippleY:F,rippleSize:L,cb:U}=p;f(y=>[...y,j.jsx(Qt,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:F,rippleSize:L},d.current)]),d.current+=1,h.current=U},[r]),$=u.useCallback((p={},E={},R=()=>{})=>{const{pulsate:F=!1,center:L=s||E.pulsate,fakeElement:U=!1}=E;if((p==null?void 0:p.type)==="mousedown"&&M.current){M.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(M.current=!0);const y=U?null:D.current,I=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,C,S;if(L||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)B=Math.round(I.width/2),C=Math.round(I.height/2);else{const{clientX:z,clientY:w}=p.touches&&p.touches.length>0?p.touches[0]:p;B=Math.round(z-I.left),C=Math.round(w-I.top)}if(L)S=Math.sqrt((2*I.width**2+I.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((y?y.clientWidth:0)-B),B)*2+2,w=Math.max(Math.abs((y?y.clientHeight:0)-C),C)*2+2;S=Math.sqrt(z**2+w**2)}p!=null&&p.touches?b.current===null&&(b.current=()=>{T({pulsate:F,rippleX:B,rippleY:C,rippleSize:S,cb:R})},V.start(_t,()=>{b.current&&(b.current(),b.current=null)})):T({pulsate:F,rippleX:B,rippleY:C,rippleSize:S,cb:R})},[s,T,V]),W=u.useCallback(()=>{$({},{pulsate:!0})},[$]),v=u.useCallback((p,E)=>{if(V.clear(),(p==null?void 0:p.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{v(p,E)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return u.useImperativeHandle(n,()=>({pulsate:W,start:$,stop:v}),[W,$,v]),j.jsx(Jt,{className:x(g.root,r.root,o),ref:D,...c,children:j.jsx(nt,{component:null,exit:!0,children:l})})});function ee(e){return wt("MuiButtonBase",e)}const ne=ct("MuiButtonBase",["root","disabled","focusVisible"]),re=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:s}=e,o=kt({root:["root",t&&"disabled",n&&"focusVisible"]},ee,s);return n&&i&&(o.root+=` ${i}`),o},se=tt("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ne.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ce=u.forwardRef(function(t,n){const i=lt({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:r=!1,children:o,className:c,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:D,onClick:T,onContextMenu:$,onDragLeave:W,onFocus:v,onFocusVisible:p,onKeyDown:E,onKeyUp:R,onMouseDown:F,onMouseLeave:L,onMouseUp:U,onTouchEnd:y,onTouchMove:I,onTouchStart:B,tabIndex:C=0,TouchRippleProps:S,touchRippleRef:z,type:w,...O}=i,A=u.useRef(null),m=Kt(),ft=ot(m.ref,z),[k,H]=u.useState(!1);f&&k&&H(!1),u.useImperativeHandle(s,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;u.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const ht=P(m,"start",F,h),mt=P(m,"stop",$,h),bt=P(m,"stop",W,h),gt=P(m,"stop",U,h),Mt=P(m,"stop",a=>{k&&a.preventDefault(),L&&L(a)},h),Rt=P(m,"start",B,h),Et=P(m,"stop",y,h),yt=P(m,"stop",I,h),xt=P(m,"stop",a=>{ut(a.target)||H(!1),D&&D(a)},!1),Tt=G(a=>{A.current||(A.current=a.currentTarget),ut(a.target)&&(H(!0),p&&p(a)),v&&v(a)}),Z=()=>{const a=A.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Ct=G(a=>{M&&!a.repeat&&k&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),E&&E(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),T&&T(a))}),Pt=G(a=>{M&&a.key===" "&&k&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),T&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&T(a)});let _=l;_==="button"&&(O.href||O.to)&&(_=b);const Y={};_==="button"?(Y.type=w===void 0?"button":w,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Vt=ot(n,A),st={...i,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:C,focusVisible:k},It=re(st);return j.jsxs(se,{as:_,className:x(It.root,c),ownerState:st,onBlur:xt,onClick:T,onContextMenu:mt,onFocus:Tt,onKeyDown:Ct,onKeyUp:Pt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:gt,onDragLeave:bt,onTouchEnd:Et,onTouchMove:yt,onTouchStart:Rt,ref:Vt,tabIndex:f?-1:C,type:w,...Y,...O,children:[o,dt?j.jsx(te,{ref:ft,center:r,...S}):null]})});function P(e,t,n,i=!1){return G(s=>(n&&n(s),i||e[t](s),!0))}export{ce as B,nt as T,G as a,pt as b,Yt as c,Xt as d,rt as e,it as f,ut as i,ot as u};
