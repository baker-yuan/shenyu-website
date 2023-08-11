"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61640],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=o(t),d=a,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||s;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30021:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={description:"Consul",title:"Consul Example"},i=void 0,l={unversionedId:"consul",id:"consul",isDocsHomePage:!1,title:"Consul Example",description:"Consul",source:"@site/shenyuClientGolang/consul.md",sourceDirName:".",slug:"/consul",permalink:"/shenyuClientGolang/next/consul",version:"current",lastUpdatedBy:"lianjunwei",lastUpdatedAt:1691734052,formattedLastUpdatedAt:"8/11/2023",frontMatter:{description:"Consul",title:"Consul Example"},sidebar:"community",next:{title:"Etcd Example",permalink:"/shenyuClientGolang/next/etcd"}},c=[{value:"The Consul type Register",id:"the-consul-type-register",children:[]},{value:"Entire Success log",id:"entire-success-log",children:[]}],o={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-consul-type-register"},"The Consul type Register"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.Fist make sure your Consul env is correct,the set this necessary param.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //Create ShenYuConsulClient  start\n    ccp := &consul_client.ConsulClientParam{\n        Host:  "127.0.0.1",  //require user provide\n        Port:  8500,         //require user provide\n        Token: "",\n        }\n    \n    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.CONSUL_CLIENT)\n    client, createResult, err := sdkClient.NewClient(ccp)\n    \n    if !createResult && err != nil {\n    logger.Fatal("Create ShenYuConsulClient error : %v", err)\n    }\n    \n    scc := client.(*consul_client.ShenYuConsulClient)\n    //Create ShenYuConsulClient end\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Prepare your service metaData to register")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//metaData is necessary param, this will be register to shenyu gateway to use\n    uuid1, _ := uuid.GenerateUUID()\n    uuid2, _ := uuid.GenerateUUID()\n    uuid3, _ := uuid.GenerateUUID()\n\n    //RegisterServiceInstance start\n    //init MetaDataRegister\n    metaData1 := &model.MetaDataRegister{\n        ServiceId: uuid1,\n        AppName:   "testMetaDataRegister1", //require user provide\n        Path:      "/your/path1",           //require user provide\n        Enabled:   true,                    //require user provide\n        Host:      "127.0.0.1",             //require user provide\n        Port:      "8080",                  //require user provide\n        RPCType:   "http",                  //require user provide\n    }\n    \n    metaData2 := &model.MetaDataRegister{\n        ServiceId: uuid2,\n        AppName:   "testMetaDataRegister2", //require user provide\n        Path:      "/your/path2",           //require user provide\n        Enabled:   true,                    //require user provide\n        Host:      "127.0.0.1",             //require user provide\n        Port:      "8181",                  //require user provide\n        RPCType:   "http",                  //require user provide\n    }\n    \n    metaData3 := &model.MetaDataRegister{\n        ServiceId: uuid3,\n        AppName:   "testMetaDataRegister3", //require user provide\n        Path:      "/your/path3",           //require user provide\n        Enabled:   true,                    //require user provide\n        Host:      "127.0.0.1",             //require user provide\n        Port:      "8282",                  //require user provide\n        RPCType:   "http",                  //require user provide\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.use client to invoke RegisterServiceInstance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'   //register multiple metaData\n    registerResult1, err := scc.RegisterServiceInstance(metaData1)\n    if !registerResult1 && err != nil {\n    logger.Fatal("Register consul Instance error : %v", err)\n    }\n    \n    registerResult2, err := scc.RegisterServiceInstance(metaData2)\n    if !registerResult2 && err != nil {\n    logger.Fatal("Register consul Instance error : %v", err)\n    }\n    \n    registerResult3, err := scc.RegisterServiceInstance(metaData3)\n    if !registerResult3 && err != nil {\n    logger.Fatal("Register consul Instance error : %v", err)\n    }\n//RegisterServiceInstance end\n    //do your logic\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.use client to invoke DeregisterServiceInstance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //your can chose to invoke,not require\n    //DeregisterServiceInstance start\n    logger.Info("> DeregisterServiceInstance start")\n    deRegisterResult1, err := scc.DeregisterServiceInstance(metaData1)\n    if err != nil {\n    panic(err)\n    }\n    \n    deRegisterResult2, err := scc.DeregisterServiceInstance(metaData2)\n    if err != nil {\n    panic(err)\n    }\n    \n    deRegisterResult3, err := scc.DeregisterServiceInstance(metaData3)\n    if err != nil {\n    panic(err)\n    }\n    \n    if deRegisterResult1 && deRegisterResult2 && deRegisterResult3 {\n    logger.Info("DeregisterServiceInstance success !")\n    }\n    //DeregisterServiceInstance end\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.use client to GetServiceInstanceInfo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    //GetServiceInstanceInfo start\n    instanceDetail, err := scc.GetServiceInstanceInfo(metaData1)\n    nodes1, ok := instanceDetail.([]*model.MetaDataRegister)\n        if !ok {\n        logger.Fatal("get consul client metaData error %v:", err)\n    }\n    \n    //range nodes\n    for index, node := range nodes1 {\n    nodeJson, err := json.Marshal(node)\n    if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n    \n    instanceDetail2, err := scc.GetServiceInstanceInfo(metaData2)\n    nodes2, ok := instanceDetail2.([]*model.MetaDataRegister)\n        if !ok {\n        logger.Fatal("get consul client metaData error %v:", err)\n    }\n    \n    //range nodes2\n    for index, node := range nodes2 {\n    nodeJson, err := json.Marshal(node)\n    if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n\n    //range nodes3\n    instanceDetail3, err := scc.GetServiceInstanceInfo(metaData3)\n    nodes3, ok := instanceDetail3.([]*model.MetaDataRegister)\n    if !ok {\n        logger.Fatal("get consul client metaData error %v:", err)\n        }\n    \n    for index, node := range nodes3 {\n    nodeJson, err := json.Marshal(node)\n    if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n//GetServiceInstanceInfo end\n')),(0,a.kt)("h2",{id:"entire-success-log"},"Entire Success log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:77] Create default consul client success!\n2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:160] RegisterServiceInstance,result:true\n2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:160] RegisterServiceInstance,result:true\n2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:160] RegisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:121] GetServiceInstanceInfo,instance:&{AppName:testMetaDataRegister1 Path: ContextPath: RuleName: RPCType: Enabled:false Host:172.22.0.5 Port:8080 PluginNames:[] RegisterMetaData:false TimeMillis:0 ServiceId:testMetaDataRegister1}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:115] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister1","path":"","contextPath":"","ruleName":"","rpcType":"","enabled":false,"host":"172.22.0.5","port":"8080","pluginNames":null,"registerMetaData":false,"timeMillis":0,"serviceId":"testMetaDataRegister1"}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:121] GetServiceInstanceInfo,instance:&{AppName:testMetaDataRegister2 Path: ContextPath: RuleName: RPCType: Enabled:false Host:172.22.0.5 Port:8181 PluginNames:[] RegisterMetaData:false TimeMillis:0 ServiceId:testMetaDataRegister2}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:129] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister2","path":"","contextPath":"","ruleName":"","rpcType":"","enabled":false,"host":"172.22.0.5","port":"8181","pluginNames":null,"registerMetaData":false,"timeMillis":0,"serviceId":"testMetaDataRegister2"}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:121] GetServiceInstanceInfo,instance:&{AppName:testMetaDataRegister3 Path: ContextPath: RuleName: RPCType: Enabled:false Host:172.22.0.5 Port:8282 PluginNames:[] RegisterMetaData:false TimeMillis:0 ServiceId:testMetaDataRegister3}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:143] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister3","path":"","contextPath":"","ruleName":"","rpcType":"","enabled":false,"host":"172.22.0.5","port":"8282","pluginNames":null,"registerMetaData":false,"timeMillis":0,"serviceId":"testMetaDataRegister3"}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:150] > DeregisterServiceInstance start\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:100] DeregisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:100] DeregisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:100] DeregisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:167] DeregisterServiceInstance success !\n')))}g.isMDXComponent=!0}}]);