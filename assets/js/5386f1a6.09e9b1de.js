"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={description:"Deleting a promise",title:"Deleting"},a=void 0,s={unversionedId:"main/reference/promises/deleting-a-promise",id:"main/reference/promises/deleting-a-promise",title:"Deleting",description:"Deleting a promise",source:"@site/docs/main/05-reference/03-promises/02-deleting-a-promise.md",sourceDirName:"main/05-reference/03-promises",slug:"/main/reference/promises/deleting-a-promise",permalink:"/docs/main/reference/promises/deleting-a-promise",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/main/05-reference/03-promises/02-deleting-a-promise.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Deleting a promise",title:"Deleting"},sidebar:"mainSidebar",previous:{title:"Promises",permalink:"/docs/main/reference/promises/intro"},next:{title:"Resource Requests",permalink:"/docs/main/reference/resource-requests/intro"}},l={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deleting a promise will cascade delete all the associated Resource Requests.")),(0,i.kt)("p",null,"To delete a promise, run the command below, making sure to replace the\n",(0,i.kt)("inlineCode",{parentName:"p"},"<promise name>")," with the Promise you want to remove:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl delete promises.platform.kratix.io <promise-name>\n")),(0,i.kt)("p",null,"Alternatively you can delete a Promise by providing the Promise definition file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ kubectl delete --filename promise.yaml\n")),(0,i.kt)("p",null,"Deleting a Promise will take a few minutes to complete while Kratix deletes all the\nresources associated with Promise. This includes any Resource Requests and all the\nWorker Cluster Resources."),(0,i.kt)("p",null,"All resources created by the Promise are applied to the work clusters using GitOps.\nThis mean that when Kratix deletes the resources its removing them from the GitOps Repository and\nis delegating the responsibility to delete them on the Worker Cluster to the GitOps\ncontroller. This results in a small delay between the resources being declared\nas deleted and them being actually deleted."))}m.isMDXComponent=!0}}]);