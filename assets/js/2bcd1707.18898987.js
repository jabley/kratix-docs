"use strict";(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[6738],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3914:(e,t,n)=>{n.d(t,{ZP:()=>s,d$:()=>o});var a=n(7462),r=(n(7294),n(4137)),i=n(8094);const o=[{value:"What is a Kratix Promise?",id:"what-is-a-kratix-promise",level:2},{value:"Kratix Promises",id:"kratix-promises",level:2},{value:"Pre-requisites",id:"prerequisites",level:2},{value:"Install the Kratix sample Jenkins Promise",id:"install-the-kratix-sample-jenkins-promise",level:2},{value:"Install the Jenkins Promise",id:"install-the-jenkins-promise",level:3},{value:"Request a Jenkins Instance",id:"request-instance",level:3},{value:"Use your Jenkins instance",id:"use-your-jenkins-instance",level:3},{value:"Summary",id:"summary",level:2},{value:"Tearing it all down",id:"teardown",level:2},{value:"\ud83c\udf89 \xa0 Congratulations!",id:"--congratulations",level:2}],l={toc:o};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this guide, you will")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#what-is-a-kratix-promise"},"learn more about Kratix Promises")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#install-the-kratix-sample-jenkins-promise"},"install Jenkins as a Kratix Promise"))),(0,r.kt)("h2",{id:"what-is-a-kratix-promise"},"What is a Kratix Promise?"),(0,r.kt)("p",null,"Conceptually, Promises are the building blocks of Kratix that allow you to develop your platform incrementally. Technically, a Promise is a YAML document that defines a contract between the Platform and its users. You can explore more about this contract and the internals of a Kratix Promise in the ",(0,r.kt)("a",{parentName:"p",href:"writing-a-promise"},"writing a Promise")," guide."),(0,r.kt)("h2",{id:"kratix-promises"},"Kratix Promises"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enable you to build your platform incrementally and in response to the needs of your users."),(0,r.kt)("li",{parentName:"ul"},"codify the contract between platform teams and application teams for the delivery of a specific service, e.g. a database, an identity service, a supply chain, or a complete development pipeline of patterns and tools."),(0,r.kt)("li",{parentName:"ul"},"are easy to build, deploy, and update."),(0,r.kt)("li",{parentName:"ul"},"are sharable and reusable between platforms, teams, business units, and other organisations."),(0,r.kt)("li",{parentName:"ul"},"add up to a frictionless experience when platform users want to create services that they need to deliver value.")),(0,r.kt)("p",null,"Now that you know more about Kratix Promises, follow the steps below to install a Promise."),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisites"},"Pre-requisites"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you just completed the ",(0,r.kt)("a",{parentName:"p",href:"./installing-kratix"},"Installing Kratix")," step, you can skip this section.")),(0,r.kt)(i.ZP,{mdxType:"PartialPreRequisites"}),(0,r.kt)("h2",{id:"install-the-kratix-sample-jenkins-promise"},"Install the Kratix sample Jenkins Promise"),(0,r.kt)("p",null,"Now that your system is set up, you can install your first Kratix Promise! This guide will follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#install-the-jenkins-promise"},"Install the Jenkins Promise")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#request-instance"},"Request a new Jenkins instance")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#use-your-jenkins-instance"},"Use the instance")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#teardown"},"Tear down your environment"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Overview",src:n(3081).Z,width:"4817",height:"3320"})),(0,r.kt)("h3",{id:"install-the-jenkins-promise"},"Install the Jenkins Promise"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The commands below will refer to a ",(0,r.kt)("inlineCode",{parentName:"p"},"KRATIX_REPO")," env variable. You can either:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"clone Kratix and set it to the path of your local clone:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KRATIX_REPO=/path/to/kratix\n"))),(0,r.kt)("li",{parentName:"ul"},"set it to a remote URL:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export KRATIX_REPO="https://raw.githubusercontent.com/syntasso/kratix/main"\n'))))),(0,r.kt)("p",null,"Installing a Kratix Promise is as simple as applying the Promise YAML definition on your Platform cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl --context kind-platform apply \\\n  --filename "${KRATIX_REPO}/samples/jenkins/jenkins-promise.yaml"\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Verify that your ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," cluster has registered Jenkins as a new available Kratix Promise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context kind-platform get crds jenkins.example.promise.syntasso.io\n")),(0,r.kt)("p",null,"The above command will give an output similar to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                  CREATED AT\njenkins.example.promise.syntasso.io   2021-05-10T12:00:00Z\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"The Jenkins Promise requires the Jenkins Operator to be deployed to the ",(0,r.kt)("code",null,"worker")," clusters. Kratix will deploy the operator when you apply the Promise. You can verify that the Jenkins Operator is now installed",(0,r.kt)("br",null),(0,r.kt)("sub",null,"(This may take a few minutes so ",(0,r.kt)("code",null,"--watch")," will watch the command. Press ",(0,r.kt)("kbd",null,"Ctrl"),"+",(0,r.kt)("kbd",null,"C")," to stop watching)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context kind-worker get pods --watch\n")),(0,r.kt)("p",null,"The above command will give an output similar to (it may take a couple of minutes):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                READY   STATUS    RESTARTS   AGE\njenkins-operator-7886c47f9c-zschr   1/1     Running   0          1m\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\ud83c\udf89  Congratulations! You have installed your first Kratix Promise, which means your application teams can now get on-demand instances of Jenkins from your platform."),(0,r.kt)("h3",{id:"request-instance"},"Request a Jenkins Instance"),(0,r.kt)("p",null,"Application developers using your platform will be issued a Jenkins instance after applying a Kratix Resource Request."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Verify-Instance",src:n(4766).Z,width:"4879",height:"3278"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Test your platform by acting as an application developer and submitting a Resource Request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl --context kind-platform apply \\\n    --filename "${KRATIX_REPO}/samples/jenkins/jenkins-resource-request.yaml"\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Verify that the Resource Request was issued on the ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context kind-platform get jenkins.example.promise.syntasso.io\n")),(0,r.kt)("p",null,"The above command will give an output similar to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                AGE\nexample             1m\n")),(0,r.kt)("p",null,"Eventually (it can take a couple of minutes), a new Jenkins instance should spin up on your ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," cluster. You can verify this by running the following command:"),(0,r.kt)("p",null,"Verify the instance was created on the worker cluster",(0,r.kt)("br",null),(0,r.kt)("sub",null,"(This may take a few minutes so ",(0,r.kt)("code",null,"--watch")," will watch the command. Press ",(0,r.kt)("kbd",null,"Ctrl"),"+",(0,r.kt)("kbd",null,"C")," to stop watching)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --context kind-worker get pods --watch\n")),(0,r.kt)("p",null,"The above command will give an output similar to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                                READY   STATUS    RESTARTS   AGE\njenkins-example                     1/1     Running   0          1m\njenkins-operator-7886c47f9c-zschr   1/1     Running   0          10m\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\ud83c\udf89  Congratulations! You have successfully requested and created an on-demand instance of Jenkins from your platform."),(0,r.kt)("h3",{id:"use-your-jenkins-instance"},"Use your Jenkins instance"),(0,r.kt)("p",null,"Access the Jenkins UI in a browser to ensure the instance is working."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before you can access Jenkins UI, you must port forward from within the Kubernetes cluster to a local port on your computer. Running the ",(0,r.kt)("inlineCode",{parentName:"p"},"port-forward")," command is continuous","\u2014","as long as the command is running, the connection stays open."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Open a new terminal to request the port forward")),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl --context kind-worker port-forward jenkins-example 8080:8080\n"))),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," and log in with the credentials you get from the commands below.\nIn production, you want the credentials to be stored in a secure location where it could be accessed by the application team.\nIn this example, credentials are stored as unencrypted Kubernetes secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'jsx title="username"',jsx:!0,title:'"username"'},"kubectl --context kind-worker get secret jenkins-operator-credentials-example \\\n    -o 'jsonpath={.data.user}' | base64 -d\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'jsx title="password"',jsx:!0,title:'"password"'},"kubectl --context kind-worker get secret jenkins-operator-credentials-example \\\n    -o 'jsonpath={.data.password}' | base64 -d\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"You installed your first Kratix Promise on your platform. Well done!"),(0,r.kt)("p",null,"To recap the steps you took:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Installed the sample Jenkins Promise"),(0,r.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Requested an instance of Jenkins"),(0,r.kt)("li",{parentName:"ol"},"\u2705","\xa0","\xa0","Tested the instance by logging in to the Jenkins UI")),(0,r.kt)("p",null,"This is only the beginning of working with Promises. Next you will deploy three different Promises to provide a complete solution for an application team."),(0,r.kt)("h2",{id:"teardown"},"Tearing it all down"),(0,r.kt)("p",null,"To clean up your environment, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete clusters platform worker\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"--congratulations"},"\ud83c\udf89 ","\xa0"," Congratulations!"),(0,r.kt)("p",null,"\u2705","\xa0","\xa0"," You have installed a Kratix Promise and used it to create on-demand instances of a service. ",(0,r.kt)("br",null),"\n\ud83d\udc49\ud83c\udffe","\xa0","\xa0"," Now you will ",(0,r.kt)("a",{parentName:"p",href:"multiple-promises"},"deploy a web app that uses multiple Kratix Promises"),"."))}s.isMDXComponent=!0},8094:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(4137));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You need a fresh installation of Kratix for this section. The simplest way to do so is by running the quick-start script from within the Kratix directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/quick-start.sh --recreate\n")),(0,r.kt)("p",null,"Alternatively, you can go back to ",(0,r.kt)("a",{parentName:"p",href:"./installing-kratix"},"Installing Kratix")," and follow the appropriate guide."))}o.isMDXComponent=!0},4226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(4137)),i=n(3914);const o={description:"Learn how to install a promise",title:"Installing a Promise",id:"installing-a-promise"},l=void 0,s={unversionedId:"workshop/installing-a-promise",id:"workshop/installing-a-promise",title:"Installing a Promise",description:"Learn how to install a promise",source:"@site/docs/workshop/03-installing-a-promise.md",sourceDirName:"workshop",slug:"/workshop/installing-a-promise",permalink:"/kratix-docs/docs/workshop/installing-a-promise",draft:!1,editUrl:"https://github.com/syntasso/kratix-docs/tree/main/docs/workshop/03-installing-a-promise.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn how to install a promise",title:"Installing a Promise",id:"installing-a-promise"},sidebar:"workshopSidebar",previous:{title:"Installing Kratix",permalink:"/kratix-docs/docs/workshop/installing-kratix"},next:{title:"Using Multiple Promises",permalink:"/kratix-docs/docs/workshop/multiple-promises"}},p={},u=[...i.d$],m={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is Part 2 of ",(0,r.kt)("a",{parentName:"p",href:"intro"},"a series")," illustrating how Kratix works. ",(0,r.kt)("br",null),"\n\ud83d\udc48\ud83c\udffe","\xa0","\xa0"," Previous: ",(0,r.kt)("a",{parentName:"p",href:"installing-kratix"},"Install Kratix")," ",(0,r.kt)("br",null),"\n\ud83d\udc49\ud83c\udffe","\xa0","\xa0"," Next: ",(0,r.kt)("a",{parentName:"p",href:"multiple-promises"},"Using multiple Kratix Promises")),(0,r.kt)("hr",null),(0,r.kt)(i.ZP,{mdxType:"GuideInstallPromise"}))}c.isMDXComponent=!0},4766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Treasure_Trove-Get_an_instance-c6f9862f76b6a6a8d83ef7ff06757b03.jpeg"},3081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Treasure_Trove-Install_a_Promise-49f1334528d84e73a73cf3c4a9dfa6f5.jpeg"}}]);