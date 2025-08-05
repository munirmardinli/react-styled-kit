import{r as u,f as Ve,R as X,_ as Ie,b as C,j as N,u as ue,t as J}from"./iframe-jxtUxaR9.js";import{a as le,g as Be,c as Se}from"./createSimplePaletteValueFilter-3gGRDZXa.js";import{s as Q}from"./styled-DVBkpXcY.js";import{c as De,a as Le,_ as we}from"./assertThisInitialized-BjnbojEp.js";function _(e){const t=u.useRef(e);return Ve(()=>{t.current=e}),u.useRef((...n)=>(0,t.current)(...n)).current}function se(...e){const t=u.useRef(void 0),n=u.useCallback(i=>{const s=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const o=r,c=o(i);return typeof c=="function"?c:()=>{o(null)}}return r.current=i,()=>{r.current=null}});return()=>{s.forEach(r=>r?.())}},e);return u.useMemo(()=>e.every(i=>i==null)?null:i=>{t.current&&(t.current(),t.current=void 0),i!=null&&(t.current=n(i))},e)}const oe=X.createContext(null);function ee(e,t){var n=function(r){return t&&u.isValidElement(r)?t(r):r},i=Object.create(null);return e&&u.Children.map(e,function(s){return s}).forEach(function(s){i[s.key]=n(s)}),i}function ke(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var i=Object.create(null),s=[];for(var r in e)r in t?s.length&&(i[r]=s,s=[]):s.push(r);var o,c={};for(var l in t){if(i[l])for(o=0;o<i[l].length;o++){var p=i[l][o];c[i[l][o]]=n(p)}c[l]=n(l)}for(o=0;o<s.length;o++)c[s[o]]=n(s[o]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Ne(e,t){return ee(e.children,function(n){return u.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function je(e,t,n){var i=ee(e.children),s=ke(t,i);return Object.keys(s).forEach(function(r){var o=s[r];if(u.isValidElement(o)){var c=r in t,l=r in i,p=t[r],d=u.isValidElement(p)&&!p.props.in;l&&(!c||d)?s[r]=u.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:k(o,"exit",e),enter:k(o,"enter",e)}):!l&&c&&!d?s[r]=u.cloneElement(o,{in:!1}):l&&c&&u.isValidElement(p)&&(s[r]=u.cloneElement(o,{onExited:n.bind(null,o),in:p.props.in,exit:k(o,"exit",e),enter:k(o,"enter",e)}))}}),s}var $e=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Fe={component:"div",childFactory:function(t){return t}},te=function(e){De(t,e);function t(i,s){var r;r=e.call(this,i,s)||this;var o=r.handleExited.bind(Le(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(s,r){var o=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Ne(s,c):je(s,o,c),firstRender:!1}},n.handleExited=function(s,r){var o=ee(this.props.children);s.key in o||(s.props.onExited&&s.props.onExited(r),this.mounted&&this.setState(function(c){var l=Ie({},c.children);return delete l[s.key],{children:l}}))},n.render=function(){var s=this.props,r=s.component,o=s.childFactory,c=we(s,["component","childFactory"]),l=this.state.contextValue,p=$e(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,r===null?X.createElement(oe.Provider,{value:l},p):X.createElement(oe.Provider,{value:l},X.createElement(r,c,p))},t}(X.Component);te.propTypes={};te.defaultProps=Fe;const ie={};function ce(e,t){const n=u.useRef(ie);return n.current===ie&&(n.current=e(t)),n}const Ue=[];function ze(e){u.useEffect(e,Ue)}class ne{static create(){return new ne}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function Oe(){const e=ce(ne.create).current;return ze(e.disposeEffect),e}function ae(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{static create(){return new G}static use(){const t=ce(G.create).current,[n,i]=u.useState(!1);return t.shouldMount=n,t.setShouldMount=i,u.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ye(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Ae(){return G.use()}function Ye(){let e,t;const n=new Promise((i,s)=>{e=i,t=s});return n.resolve=e,n.reject=t,n}function Xe(e){const{className:t,classes:n,pulsate:i=!1,rippleX:s,rippleY:r,rippleSize:o,in:c,onExited:l,timeout:p}=e,[d,h]=u.useState(!1),M=C(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),P={width:o,height:o,top:-(o/2)+r,left:-(o/2)+s},b=C(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&h(!0),u.useEffect(()=>{if(!c&&l!=null){const S=setTimeout(l,p);return()=>{clearTimeout(S)}}},[l,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=le("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Z=550,Ke=80,We=J`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,He=J`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,_e=J`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ge=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),qe=Q(Xe,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${We};
    animation-duration: ${Z}ms;
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
    animation-name: ${He};
    animation-duration: ${Z}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${_e};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ze=u.forwardRef(function(t,n){const i=ue({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:r={},className:o,...c}=i,[l,p]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),P=Oe(),b=u.useRef(null),S=u.useRef(null),x=u.useCallback(f=>{const{pulsate:E,rippleX:R,rippleY:F,rippleSize:D,cb:U}=f;p(y=>[...y,N.jsx(qe,{classes:{ripple:C(r.ripple,g.ripple),rippleVisible:C(r.rippleVisible,g.rippleVisible),ripplePulsate:C(r.ripplePulsate,g.ripplePulsate),child:C(r.child,g.child),childLeaving:C(r.childLeaving,g.childLeaving),childPulsate:C(r.childPulsate,g.childPulsate)},timeout:Z,pulsate:E,rippleX:R,rippleY:F,rippleSize:D},d.current)]),d.current+=1,h.current=U},[r]),j=u.useCallback((f={},E={},R=()=>{})=>{const{pulsate:F=!1,center:D=s||E.pulsate,fakeElement:U=!1}=E;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const y=U?null:S.current,V=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,T,B;if(D||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)I=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:L}=f.touches&&f.touches.length>0?f.touches[0]:f;I=Math.round(z-V.left),T=Math.round(L-V.top)}if(D)B=Math.sqrt((2*V.width**2+V.height**2)/3),B%2===0&&(B+=1);else{const z=Math.max(Math.abs((y?y.clientWidth:0)-I),I)*2+2,L=Math.max(Math.abs((y?y.clientHeight:0)-T),T)*2+2;B=Math.sqrt(z**2+L**2)}f?.touches?b.current===null&&(b.current=()=>{x({pulsate:F,rippleX:I,rippleY:T,rippleSize:B,cb:R})},P.start(Ke,()=>{b.current&&(b.current(),b.current=null)})):x({pulsate:F,rippleX:I,rippleY:T,rippleSize:B,cb:R})},[s,x,P]),K=u.useCallback(()=>{j({},{pulsate:!0})},[j]),$=u.useCallback((f,E)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{$(f,E)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return u.useImperativeHandle(n,()=>({pulsate:K,start:j,stop:$}),[K,j,$]),N.jsx(Ge,{className:C(g.root,r.root,o),ref:S,...c,children:N.jsx(te,{component:null,exit:!0,children:l})})});function Je(e){return Be("MuiButtonBase",e)}const Qe=le("MuiButtonBase",["root","disabled","focusVisible"]),et=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:s}=e,o=Se({root:["root",t&&"disabled",n&&"focusVisible"]},Je,s);return n&&i&&(o.root+=` ${i}`),o},tt=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Qe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),it=u.forwardRef(function(t,n){const i=ue({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:r=!1,children:o,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:S,onClick:x,onContextMenu:j,onDragLeave:K,onFocus:$,onFocusVisible:f,onKeyDown:E,onKeyUp:R,onMouseDown:F,onMouseLeave:D,onMouseUp:U,onTouchEnd:y,onTouchMove:V,onTouchStart:I,tabIndex:T=0,TouchRippleProps:B,touchRippleRef:z,type:L,...O}=i,A=u.useRef(null),m=Ae(),pe=se(m.ref,z),[w,W]=u.useState(!1);p&&w&&W(!1),u.useImperativeHandle(s,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const fe=m.shouldMount&&!d&&!p;u.useEffect(()=>{w&&M&&!d&&m.pulsate()},[d,M,w,m]);const de=v(m,"start",F,h),he=v(m,"stop",j,h),me=v(m,"stop",K,h),be=v(m,"stop",U,h),ge=v(m,"stop",a=>{w&&a.preventDefault(),D&&D(a)},h),Me=v(m,"start",I,h),Re=v(m,"stop",y,h),Ee=v(m,"stop",V,h),ye=v(m,"stop",a=>{ae(a.target)||W(!1),S&&S(a)},!1),Ce=_(a=>{A.current||(A.current=a.currentTarget),ae(a.target)&&(W(!0),f&&f(a)),$&&$(a)}),q=()=>{const a=A.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},xe=_(a=>{M&&!a.repeat&&w&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),E&&E(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!p&&(a.preventDefault(),x&&x(a))}),Te=_(a=>{M&&a.key===" "&&w&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),x&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&x(a)});let H=l;H==="button"&&(O.href||O.to)&&(H=b);const Y={};H==="button"?(Y.type=L===void 0?"button":L,Y.disabled=p):(!O.href&&!O.to&&(Y.role="button"),p&&(Y["aria-disabled"]=p));const ve=se(n,A),re={...i,centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:w},Pe=et(re);return N.jsxs(tt,{as:H,className:C(Pe.root,c),ownerState:re,onBlur:ye,onClick:x,onContextMenu:he,onFocus:Ce,onKeyDown:xe,onKeyUp:Te,onMouseDown:de,onMouseLeave:ge,onMouseUp:be,onDragLeave:me,onTouchEnd:Re,onTouchMove:Ee,onTouchStart:Me,ref:ve,tabIndex:p?-1:T,type:L,...Y,...O,children:[o,fe?N.jsx(Ze,{ref:pe,center:r,...B}):null]})});function v(e,t,n,i=!1){return _(s=>(n&&n(s),i||e[t](s),!0))}export{it as B,te as T,_ as a,ce as b,ze as c,Oe as d,ne as e,oe as f,ae as i,se as u};
