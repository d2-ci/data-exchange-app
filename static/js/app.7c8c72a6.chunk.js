"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[2143],{6099:function(e,t,a){a.r(t),a.d(t,{default:function(){return yt}});var n=a(4425),r=a(969),o=a(734),l=a(6822),s=a(4934),i=a(7911);const c=(0,r.createContext)({aggregateDataExchanges:[]});var d=a(3977),u=a(4144),m=a(2912),p=a(6475);const g=()=>r.createElement(m.M,null,r.createElement(p.V,null));var h=a(3274),v="warning_warningBoxWrapper__y0sSL";const E=e=>{let{error:t,title:a,children:n}=e;return r.createElement("div",{className:v},r.createElement(h.f,{error:t,title:a},n))},C={aggregateDataExchanges:{resource:"aggregateDataExchanges",params:{paging:!1,fields:["id","displayName"]}}},x=e=>{let{children:t}=e;const{data:a,loading:n,error:o}=(0,d.u_)(C);if(n)return r.createElement(g,null);if(o)return r.createElement(E,{error:!0,title:u.Z.t("Aggregate data exchange information is not accessible")},r.createElement("span",null,u.Z.t("There was a problem retrieving aggregate data exchanges. Refresh the page to try again.")));const{aggregateDataExchanges:l}=a.aggregateDataExchanges,s={aggregateDataExchanges:l};return r.createElement(c.Provider,{value:s},t)},b=()=>(0,r.useContext)(c);var y=a(5690);const f=(0,r.createContext)({exchange:{},exchangeData:{},refetch:()=>{console.log("exchange context not initialized")}}),_={exchangeId:s.StringParam,requestIndex:s.NumberParam},N=()=>(0,s.useQueryParam)("exchangeId",_.exchangeId),k=()=>(0,s.useQueryParam)("requestIndex",_.requestIndex),D=()=>{const[,e]=(0,s.useQueryParams)(_);return(0,r.useCallback)((()=>{e({exchangeId:void 0,requestIndex:void 0})}),[e])},S={exchange:{resource:"aggregateDataExchanges",id:e=>{let{id:t}=e;return t},params:{paging:!1,fields:["source, target","id","displayName"]}},exchangeData:{resource:"aggregateDataExchanges",id:e=>{let{id:t}=e;return`${t}/sourceData`},params:{paging:!1}}},Z=e=>{let{children:t}=e;const{loading:a,error:n,data:o,called:l,refetch:s}=(0,d.u_)(S,{lazy:!0}),[i]=N(),[,c]=k(),m=(0,r.useCallback)((()=>s({id:i})),[s,i]);if((0,r.useEffect)((()=>{c(0),i&&m()}),[i,m,c]),a)return r.createElement(g,null);if(n)return r.createElement(E,{error:!0,title:u.Z.t("Exchange content not accessible")},r.createElement(y.z,{onClick:m},u.Z.t("Click to refresh")));const{exchange:p,exchangeData:h}=o||{},v={exchange:l?p:null,exchangeData:l?h:null};return r.createElement(f.Provider,{value:v},t)},T=()=>(0,r.useContext)(f);var L=a(585),R="button-with-tooltip_tooltipReference__gHGkH";const w=e=>{let{buttonText:t,tooltipContent:a}=e;return r.createElement("div",{"data-test":"bottom-bar"},r.createElement(L.u,{content:a},(e=>{let{ref:a,onMouseOver:n,onMouseOut:o}=e;return r.createElement("span",{className:R,ref:a,onMouseOver:n,onMouseOut:o},r.createElement(y.z,{primary:!0,disabled:!0},t))})))},U=e=>{let{openSubmitModal:t,dataSubmitted:a}=e;const[n]=N(),{exchangeData:o}=T(),l=null===o||void 0===o?void 0:o.reduce(((e,t)=>{var a;return((null===t||void 0===t||null===(a=t.rows)||void 0===a?void 0:a.length)||0)+e}),0),s=u.Z.t("Submit data");if(!n||!o)return null;if(0===l||a){const e=a?u.Z.t("Data has already been submitted"):u.Z.t("There is no data to submit");return r.createElement(w,{buttonText:s,tooltipContent:e})}return r.createElement("div",{"data-test":"bottom-bar"},r.createElement(y.z,{primary:!0,onClick:t},s))};var M="entry-screen_wrapperDiv__Tco-+",I="entry-screen_innerDiv__ODtk4",W="entry-screen_svgWrapper__Koaxt",q="entry-screen_headingText__kKzBv",A="entry-screen_instructionsText__DgcTC",H="entry-screen_linkText__T5Rps";const z=()=>r.createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{clipPath:"url(#clip0_229_2099)"},r.createElement("path",{d:"M12 20L22.3923 26V38L12 44L1.6077 38V26L12 20Z",fill:"#FBFCFD",stroke:"#404B5A",strokeWidth:"2"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.0001 31.4338V20H13.0001V31.4338L22.5146 37.1425L21.4856 38.8575L12.0001 33.1662L2.51459 38.8575L1.4856 37.1425L11.0001 31.4338Z",fill:"#404B5A"}),r.createElement("path",{d:"M52 20L62.3923 26V38L52 44L41.6077 38V26L52 20Z",fill:"#FBFCFD",stroke:"#404B5A",strokeWidth:"2"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.0001 31.4338V20H53.0001V31.4338L62.5146 37.1425L61.4856 38.8575L52.0001 33.1662L42.5146 38.8575L41.4856 37.1425L51.0001 31.4338Z",fill:"#404B5A"}),r.createElement("path",{d:"M24 44H34",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M29 49L34 44L29 39",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M22 44H20",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M40 44H37",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M44 44H42",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M30 20L40 20",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M35 25L40 20L35 15",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M28 20H24",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M45 20H43",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M34 32H38",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M29 32H32",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M25 32H27",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M10 56L21 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M4 56L8 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M16 61L21 56L16 51",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M26 56L32 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M35 56L38 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M40 56L42 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M21 8L31 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M13 8L17 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M8 8L10 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M26 13L31 8L26 3",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M6 8L3 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M37 8L35 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M41 8L39 8",stroke:"#6C7787",strokeWidth:"2"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_229_2099"},r.createElement("rect",{width:"64",height:"64",fill:"white"})))),O=()=>r.createElement("div",{className:M},r.createElement("div",{className:I},r.createElement("div",{className:W},r.createElement(z,null)),r.createElement("span",{className:q},u.Z.t("Choose a data exchange to get started")),r.createElement("span",{className:A},u.Z.t("Review your data before submitting it to a data exchange.")),r.createElement("span",{className:A},u.Z.t("Choose a data exchange from the top menu.")),r.createElement("a",{className:H,target:"_blank",rel:"noreferrer noopener",href:"https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-exchange.html#data-exchange"},u.Z.t("Learn more about data exchange"))));var B=a(7405),V=a(7958),j=a(8206),$=a(3656),F=a(3019),P=a(3582),Y=a(8255),Q={titleCell:"table_titleCell__mE+vV",labelCellContent:"table_labelCellContent__nkDcC",dataTable:"table_dataTable__bVn-U"};const J=e=>{let{children:t,columns:a}=e;return r.createElement("tr",null,r.createElement("th",{className:Q.titleCell,colSpan:a.toString()},t))},G=e=>{let{title:t,columns:a,rows:n}=e;return r.createElement(r.Fragment,null,r.createElement(V.w,{className:Q.dataTable,width:"auto"},r.createElement(j.s,null,r.createElement(J,{columns:a.length},t),r.createElement($.U,null,r.createElement(F.p,{fixed:!0,left:"0",top:"0",className:Q.cell},r.createElement("span",{className:Q.labelCellContent},a[0])),a.slice(1).map((e=>r.createElement(F.p,{key:e,className:Q.cell},e))))),r.createElement(P.R,null,n.map(((e,t)=>{const[a,...n]=e;return r.createElement($.U,{key:t},r.createElement(Y.W,{fixed:!0,left:"0",className:Q.cell},r.createElement("span",{className:Q.labelCellContent},a)),n.map(((e,t)=>r.createElement(Y.W,{key:t,className:Q.cell},e))))})))))};var K="requests-display_display__QQH4w",X="requests-display_visualizationButton__PCw2B",ee="requests-display_linkNoDecoration__mvZxw";const te=(e,t)=>{for(const a of t)e[a]=e[a]||{},e=e[a]},ae=e=>{var t,a,n,r,o,l,s;const i=["dx","pe","ou","co"],c=null===e||void 0===e?void 0:e.headers.findIndex((e=>"dx"===e.name)),d=null===e||void 0===e?void 0:e.headers.findIndex((e=>"ou"===e.name)),m=null===e||void 0===e?void 0:e.headers.findIndex((e=>"pe"===e.name)),p=null===e||void 0===e?void 0:e.headers.findIndex((e=>"value"===e.name)),g=Object.keys(null===e||void 0===e||null===(t=e.metaData)||void 0===t?void 0:t.dimensions).filter((e=>!i.includes(e))),h=(e=>{let{data:t,dx_index:a,ou_index:n,pe_index:r,value_index:o}=e;const l={};if(Array.isArray(null===t||void 0===t?void 0:t.rows))for(const s of null===t||void 0===t?void 0:t.rows){const e=s[n],t=s[a],i=s[r],c=s[o];te(l,[e,t,i]),l[e][t][i]=c}return l})({data:e,dx_index:c,ou_index:d,pe_index:m,value_index:p}),v=null===(a=e.metaData)||void 0===a||null===(n=a.dimensions)||void 0===n?void 0:n.ou.map((t=>{var a,n;return{id:t,name:null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}}));v.sort(((e,t)=>e.name.localeCompare(t.name)));const E=null===(r=e.metaData)||void 0===r||null===(o=r.dimensions)||void 0===o?void 0:o.dx.map((t=>{var a,n;return{id:t,name:null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}}));E.sort(((e,t)=>e.name.localeCompare(t.name)));let C=null===(l=e.metaData)||void 0===l||null===(s=l.dimensions)||void 0===s?void 0:s.pe.map((t=>{var a,n;return{id:t,name:null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}}));C=C.sort(((e,t)=>e.id.localeCompare(t.id,"en",{numeric:!0})));const x=[];for(const b of v){const t={};t.title=(null===g||void 0===g?void 0:g.length)>0?`${b.name} - ${g.map((t=>{var a,n,r;return null===e||void 0===e||null===(a=e.metaData)||void 0===a||null===(n=a.items)||void 0===n||null===(r=n[t])||void 0===r?void 0:r.name})).join(",")}`:b.name,t.headers=[{name:u.Z.t("Data")},...C.map((e=>{let{name:t}=e;return{name:t}}))];const a=[];for(const e of E){const t=C.map((t=>{var a,n;return(null===h||void 0===h||null===(a=h[b.id])||void 0===a||null===(n=a[e.id])||void 0===n?void 0:n[t.id])||""}));a.push([e.name,...t])}t.rows=a,x.push(t)}return x},ne=e=>{var t,a,n;let{requestIndex:o}=e;const{exchange:l,exchangeData:s}=T(),i=null===(t=l.source)||void 0===t||null===(a=t.requests)||void 0===a?void 0:a[o],c=ae(null===s||void 0===s?void 0:s[o]),{baseUrl:m}=(0,d.zw)();return 0===(null===s||void 0===s||null===(n=s.rows)||void 0===n?void 0:n.length)?r.createElement("div",{className:K},r.createElement(E,{title:u.Z.t("No data")},r.createElement("span",null,u.Z.t("There is no data for this report")))):s?r.createElement("div",{className:K},(null===i||void 0===i?void 0:i.visualization)&&r.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:`${m}/dhis-web-data-visualizer/#/${i.visualization}`,className:ee},r.createElement(y.z,{icon:r.createElement(B.Z,null),className:X,secondary:!0,small:!0},u.Z.t("Open in data visualizer"))),c.map((e=>r.createElement(G,{key:e.title,title:e.title,columns:e.headers.map((e=>e.name)),rows:e.rows})))):null};var re=a(9709),oe=a(7997);const le=e=>{let{requests:t,selected:a,onChange:n}=e;return t&&(null===t||void 0===t?void 0:t.length)>0?r.createElement(re.n,{scrollable:!0},t.map(((e,t)=>r.createElement(oe.O,{key:e.name,onClick:()=>n(t),selected:t===a},e.name)))):null};var se=a(6498),ie=a(997),ce=a(2426),de=a.n(ce),ue="title-bar_titleBar__6Sk58",me="title-bar_workflowName__mWwAj",pe="title-bar_workflowDataSetsCount__fy+TZ",ge="title-bar_analyticsRunStamp__tAS+8";const he=e=>{let{startTimestamp:t,endTimestamp:a}=e;if(!t||!a)return;const n=new Date(t),r=new Date(a);return de()(n).fromNow(r)},ve=e=>{let{timestamp:t,timezone:a}=e;return`${t.substring(0,10)} T ${t.substring(11,16)} ${a}`},Ee=()=>{var e,t;const{systemInfo:a}=(0,d.zw)(),{lastAnalyticsTableSuccess:n,serverDate:o,serverTimeZoneId:l}=a,{exchange:s}=T(),i=null===(e=s.source)||void 0===e||null===(t=e.requests)||void 0===t?void 0:t.length;return r.createElement("div",{className:ue},r.createElement("span",{className:me},null===s||void 0===s?void 0:s.displayName),r.createElement("span",{className:pe},r.createElement(se.Z,null),1===i&&u.Z.t("1 data report",{requestsCount:i}),i>1&&u.Z.t("{{requestsCount}} data reports",{requestsCount:i})),r.createElement("div",{className:ge},r.createElement(ie.Z,null),r.createElement("div",null,r.createElement(L.u,{content:ve({timestamp:n,timezone:l})},r.createElement("span",null,u.Z.t("Analytics tables last generated {{timeDifference}} ago",{timeDifference:he({startTimestamp:n,endTimestamp:o})}))))))},Ce=()=>{var e;const{aggregateDataExchanges:t}=b(),{exchange:a}=T(),[n]=N(),o=null===a||void 0===a||null===(e=a.source)||void 0===e?void 0:e.requests.map((e=>({name:e.name}))),[l,s]=k();return(0,r.useEffect)((()=>{n&&o||s(void 0),n&&!l&&o&&s(0)}),[n,o,l,s]),0===t.length?r.createElement(m.M,null,r.createElement("span",null,u.Z.t("There are no exchanges available to you"))):a&&n?r.createElement(r.Fragment,null,r.createElement(Ee,null),!o&&r.createElement("div",null,r.createElement(E,{error:!0,title:u.Z.t("No data in this exchange")},r.createElement("span",null,u.Z.t("There is not any data to show in this exchange, or you might not have access to the data.")))),!isNaN(l)&&r.createElement(r.Fragment,null,r.createElement(le,{requests:o,selected:l,onChange:s}),r.createElement(ne,{requestIndex:l}))):r.createElement(O,null)};var xe=a(15),be=a(8384),ye=a(7526),fe=a(2200),_e=a(3464),Ne="submit-modal_submitModalSummaryWrapper__fDmVX",ke="submit-modal_loadingWrapper__W+aUn",De="submit-modal_contentStyling__k5fm0",Se=a(5173),Ze=a(4697),Te=a(2357),Le=a(4157),Re=a(5933),we=a(6290),Ue=a(964),Me=a(6268),Ie=a(9817),We=a(6309),qe=a(8382),Ae="conflicts-details-table_label__hOmwo";const He=e=>{let{conflicts:t}=e;return r.createElement(r.Fragment,null,r.createElement("span",{className:Ae},u.Z.t("Conflicts")),r.createElement(Ue.i,null,r.createElement(j.s,null,r.createElement(Me.J,null,r.createElement(Ie.f,null,u.Z.t("Object")),r.createElement(Ie.f,null,u.Z.t("Value")))),r.createElement(P.R,null,t.map(((e,t)=>r.createElement(We.S,{key:`job-summary-conflicts-${e.object}-${t}`},r.createElement(qe.p,null,e.object),r.createElement(qe.p,null,e.value)))))))};var ze={summaryBoxWrapper:"success-content_summaryBoxWrapper__ci5ni",summaryBoxTitle:"success-content_summaryBoxTitle__CHBEU",summaryBox:"success-content_summaryBox__DfiV9",label:"success-content_label__Yi91M",count:"success-content_count__xpqzw",success:"success-content_success__TTgaz success-content_summaryBox__DfiV9",deleted:"success-content_deleted__2pAlM success-content_summaryBox__DfiV9",ignored:"success-content_ignored__DVb7P success-content_summaryBox__DfiV9",copyButton:"success-content_copyButton__91b-i",tagWrapper:"success-content_tagWrapper__-GdnR"};const Oe={imported:{style:"success",text:u.Z.t("imported")},updated:{style:"success",text:u.Z.t("updated")},ignored:{style:"ignored",text:u.Z.t("ignored")}},Be=e=>{let{importType:t,importCount:a}=e;const{text:n,style:o}=Oe[t],l=ze[o];return r.createElement("div",{className:ze.summaryBox},r.createElement("div",{className:l},r.createElement("div",{className:ze.count},a),r.createElement("div",{className:ze.label},r.createElement("span",null,u.Z.t(n)))))},Ve=e=>{var t,a,n,o;let{importSummary:l,exchangeName:s,expandedRows:i,expandToggle:c,hasConflicts:d}=e;const u=(null===(t=l.conflicts)||void 0===t?void 0:t.length)>0,m=d&&!u;return r.createElement($.U,{expanded:i.includes(s),onExpandToggle:u?()=>c(s):void 0,expandableContent:u?r.createElement(He,{conflicts:l.conflicts}):void 0},m&&r.createElement(Y.W,null),r.createElement(Y.W,null,s),r.createElement(Y.W,null,null===(a=l.importCount)||void 0===a?void 0:a.imported),r.createElement(Y.W,null,null===(n=l.importCount)||void 0===n?void 0:n.updated),r.createElement(Y.W,null,null===(o=l.importCount)||void 0===o?void 0:o.ignored))},je=e=>{let{importSummaries:t,summaryCounts:a,hasConflicts:n,dataSubmitted:o}=e;const{exchange:l}=T(),[s,i]=(0,r.useState)([]),c=e=>{s.includes(e)?i(s.filter((t=>t!==e))):i([...s,e])};return r.createElement("div",{"data-test":"success-counts-table"},r.createElement(V.w,null,r.createElement(Se.s,null,r.createElement($.U,null,n&&r.createElement(F.p,null),r.createElement(F.p,null,u.Z.t("Report")),r.createElement(F.p,null,u.Z.t("Imported")),r.createElement(F.p,null,u.Z.t("Updated")),r.createElement(F.p,null,u.Z.t("Ignored")))),r.createElement(Ze.R,null,t.map(((e,t)=>{var a,o,i,d;return r.createElement(Ve,{key:`${null===l||void 0===l||null===(a=l.source)||void 0===a||null===(o=a.requests[t])||void 0===o?void 0:o.name}-summary`,importSummary:e,exchangeName:null===l||void 0===l||null===(i=l.source)||void 0===i||null===(d=i.requests[t])||void 0===d?void 0:d.name,expandedRows:s,expandToggle:c,hasConflicts:n})})))),r.createElement("div",{className:ze.copyButton},r.createElement(y.z,{small:!0,icon:r.createElement(Te.Z,null),onClick:()=>{var e,n,r;(e=>{let{exchangeName:t,exchangeURL:a,importSummaries:n,summaryCounts:r,requests:o,dataSubmitted:l}=e,s="";const i=u.Z.t("Exchange: {{- exchangeName}}",{exchangeName:t,nsSeparator:"-:-"}),c=u.Z.t("Target URL: {{- exchangeURL}}",{exchangeURL:decodeURI(a),nsSeparator:"-:-"});s+=a?`${i}\n${c}`:i,s+="\n"+u.Z.t("Run date: {{- runDate}}",{runDate:l,nsSeparator:"-:-"})+"\n\n\n"+u.Z.t("SUMMARY")+"\n",s+=u.Z.t("Imported: {{importedCount}}, Updated: {{updatedCount}}, Ignored: {{ignoredCount}}",{importedCount:r.imported,updatedCount:r.updated,ignoredCount:r.ignored,nsSeparator:"-:-"})+"\n\n\n"+u.Z.t("DETAILS"),s+=n.reduce(((e,t,a)=>{var n,r,l,s,i,c,d;let m=null!==(n=null===o||void 0===o||null===(r=o[a])||void 0===r?void 0:r.name)&&void 0!==n?n:"";var p;null!==o&&void 0!==o&&null!==(l=o[a])&&void 0!==l&&null!==(s=l.name)&&void 0!==s&&s.includes(",")&&(m=`"${null===o||void 0===o||null===(p=o[a])||void 0===p?void 0:p.name}"`);const g=u.Z.t("Report: {{- requestName}}",{requestName:m,nsSeparator:"-:-"}),h=null===(i=t.importCount)||void 0===i?void 0:i.imported,v=null===(c=t.importCount)||void 0===c?void 0:c.ignored,E=null===(d=t.importCount)||void 0===d?void 0:d.updated;var C;return e+"\n\n"+g+"\n"+u.Z.t("Imported: {{importedCount}}, Updated: {{updatedCount}}, Ignored: {{ignoredCount}}",{importedCount:h,updatedCount:E,ignoredCount:v,nsSeparator:"-:-"})+"\n"+((C=t.conflicts)?C.map((e=>`${e.object}: ${e.value}`)).join("\n"):"")}),""),navigator.clipboard.writeText(s)})({exchangeName:l.displayName,exchangeURL:null===(e=l.target)||void 0===e||null===(n=e.api)||void 0===n?void 0:n.url,importSummaries:t,summaryCounts:a,requests:null===l||void 0===l||null===(r=l.source)||void 0===r?void 0:r.requests,dataSubmitted:o})}},u.Z.t("Copy summary to clipboard"))))},$e=e=>{let{data:t,dataSubmitted:a}=e;const{importSummaries:n}=t,o=n.reduce(((e,t)=>{var a;for(const r in null===t||void 0===t?void 0:t.importCount){var n;e[r]+=(null===(n=t.importCount)||void 0===n?void 0:n[r])||0}return e.conflicts+=(null===(a=t.conflicts)||void 0===a?void 0:a.length)||0,e}),{imported:0,updated:0,ignored:0,deleted:0,conflicts:0});return r.createElement(r.Fragment,null,r.createElement(Le.V,{positive:!0,icon:r.createElement(Re.Z,null)},u.Z.t("Data submitted successfully.")),o.conflicts>0&&r.createElement("span",{className:ze.tagWrapper},r.createElement(Le.V,{negative:!0,icon:r.createElement(we.Z,null)},u.Z.t("Conflicts"))),r.createElement("div",{className:ze.summaryBoxTitle},u.Z.t("Summary")),r.createElement("div",{className:ze.summaryBoxWrapper},r.createElement(Be,{importType:"imported",importCount:o.imported}),r.createElement(Be,{importType:"updated",importCount:o.updated}),r.createElement(Be,{importType:"ignored",importCount:o.ignored})),r.createElement(je,{importSummaries:n,summaryCounts:o,hasConflicts:o.conflicts>0,dataSubmitted:a}))},Fe={data:null,error:null,loading:!1,called:!1,dataSubmitted:null},Pe=(e,t)=>{switch(t.type){case"loading":return{...Fe,loading:!0};case"success":return{data:t.payload,error:null,loading:!1,called:!0,dataSubmitted:de()().format()};case"error":return{data:null,error:t.payload,loading:!1,called:!1,dataSubmitted:null};case"reset":return{...Fe};default:return{...Fe,called:!0}}},Ye=()=>r.createElement(r.Fragment,null,r.createElement(xe.h,null,r.createElement(Ke,null,r.createElement(m.M,null,r.createElement("div",{className:ke},r.createElement(p.V,{small:!0}),r.createElement("span",null,u.Z.t("Submitting...")))))),r.createElement(be.n,null,r.createElement(ye.J,{end:!0},r.createElement(y.z,{disabled:!0},u.Z.t("No, cancel")),r.createElement(y.z,{primary:!0,disabled:!0},u.Z.t("Yes, submit"))))),Qe=e=>{let{error:t,onRetry:a,onClose:n}=e;return r.createElement(r.Fragment,null,r.createElement(xe.h,null,r.createElement(Ke,null,r.createElement(E,{error:!0,title:u.Z.t("There was a problem submitting data")},r.createElement("span",null,t.message)))),r.createElement(be.n,null,r.createElement(ye.J,{end:!0},r.createElement(y.z,{onClick:n},u.Z.t("Close")),r.createElement(y.z,{primary:!0,onClick:a},u.Z.t("Try again")))))},Je=e=>{let{onClose:t,data:a,dataSubmitted:n}=e;return r.createElement(r.Fragment,null,r.createElement(xe.h,null,r.createElement(Ke,null,r.createElement($e,{data:a,dataSubmitted:n}))),r.createElement(be.n,null,r.createElement(ye.J,{end:!0},r.createElement(y.z,{onClick:t},u.Z.t("Close")))))},Ge=e=>{var t,a,n,o;let l,{exchange:s,requests:i,onClose:c,onSubmit:m}=e;const{baseUrl:p}=(0,d.zw)(),g=i.length,h=null===s||void 0===s?void 0:s.displayName,v="INTERNAL"===(null===s||void 0===s||null===(t=s.target)||void 0===t?void 0:t.type)?p:null===s||void 0===s||null===(a=s.target)||void 0===a||null===(n=a.api)||void 0===n?void 0:n.url,E=null===v||void 0===v?void 0:v.split("//")[1];return l="INTERNAL"===(null===s||void 0===s||null===(o=s.target)||void 0===o?void 0:o.type)?i.length>1?u.Z.t("{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}):u.Z.t("{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}):i.length>1?u.Z.t("{{reportCount}} reports to {{-exchangeName}} at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}):u.Z.t("{{reportCount}} report to {{-exchangeName}} at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}),r.createElement(r.Fragment,null,r.createElement(xe.h,null,r.createElement(Ke,null,r.createElement("div",{className:Ne},l,r.createElement("ul",null,i.map((e=>r.createElement("li",{key:e.name},(e=>{const{name:t,orgUnits:a,periods:n}=e,r=1===a.length?u.Z.t("{{orgUnitCount}} organisation unit",{orgUnitCount:a.length}):u.Z.t("{{orgUnitCount}} organisation units",{orgUnitCount:a.length});let o="";return 1===n.length&&(o=u.Z.t("{{periodsCount}} period: {{periods}}",{periodsCount:n.length,periods:n[0],nsSeparator:"-:-"})),n.length>1&&n.length<=3&&(o=u.Z.t("{{periodsCount}} periods: {{periods}}",{periodsCount:n.length,periods:n.join(", "),nsSeparator:"-:-"})),n.length>3&&(o=u.Z.t("3+ periods: {{periods}}, and {{periodsCountLessThree}} more",{periodsCount:n.length,periods:n.slice(0,3).join(", "),periodsCountLessThree:n.length-3,nsSeparator:"-:-"})),`${t}, ${r}, ${o}`})(e)))))),r.createElement("div",null,u.Z.t("Are you sure you want to submit this data?")))),r.createElement(be.n,null,r.createElement(ye.J,{end:!0},r.createElement(y.z,{onClick:c},u.Z.t("No, cancel")),r.createElement(y.z,{primary:!0,onClick:m},u.Z.t("Yes, submit")))))},Ke=e=>{let{children:t}=e;return r.createElement("div",{className:De},t)},Xe=e=>{let{open:t,onClose:a,setDataSubmitted:n}=e;const{exchange:o,exchangeData:l}=T(),[s,i]=(0,r.useState)(!1),c=null===l||void 0===l?void 0:l.map(((e,t)=>{var a,n,r,l,s,i,c;return{name:null===(a=o.source)||void 0===a||null===(n=a.requests)||void 0===n||null===(r=n[t])||void 0===r?void 0:r.name,orgUnits:null===(l=e.metaData)||void 0===l||null===(s=l.dimensions)||void 0===s?void 0:s.ou,periods:null===(i=e.metaData)||void 0===i||null===(c=i.dimensions)||void 0===c?void 0:c.pe.map((t=>{var a,n;return null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}))}})),[m,{called:p,data:g,error:h,loading:v,dataSubmitted:E}]=(e=>{let{id:t}=e;const a=(0,d.bQ)(),[n,o]=(0,r.useReducer)(Pe,Fe),[l,s]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{(async e=>{let{id:t}=e;if(l){o({type:"loading"});try{const e=await a.mutate((e=>{let{id:t}=e;return{resource:`aggregateDataExchanges/${t}/exchange`,type:"create"}})({id:t}));if("ERROR"===(null===e||void 0===e?void 0:e.status)){var n;const t=(null===e||void 0===e||null===(n=e.importSummaries.find((e=>{let{status:t}=e;return"ERROR"===t})))||void 0===n?void 0:n.description)||u.Z.t("Unknown error");throw new Error(t)}s(!1),o({type:"success",payload:e})}catch(h){s(!1),o({type:"error",payload:h})}}})({id:t})}),[t,l,a]),(0,r.useEffect)((()=>()=>{o({type:"reset"})}),[t]),[()=>{s(!0)},n]})({id:null===o||void 0===o?void 0:o.id});return(0,r.useEffect)((()=>{t||i(!1)}),[t]),(0,r.useEffect)((()=>{n(E)}),[E,n]),o?r.createElement(fe.u,{hide:!t,large:!0,position:"middle",onClose:v?null:a},r.createElement(_e.r,null,u.Z.t("Submitting data")),!p&&!v&&!s&&r.createElement(Ge,{exchange:o,requests:c,onClose:a,onSubmit:()=>{i(!0),m()}}),h&&s&&r.createElement(Qe,{error:h,onRetry:m,onClose:a}),g&&r.createElement(Je,{data:g,dataSubmitted:E,onClose:a}),v&&r.createElement(Ye,null)):null};var et=a(4453),tt=a(4285),at=a(924),nt=a(4243),rt="menu-select_menuSelect__iOrzZ";const ot=e=>{let{values:t,selected:a,dataTest:n,onChange:o}=e;return r.createElement("div",{className:rt,"data-test":n},r.createElement(at.v,null,t.map((e=>{let{value:t,label:n}=e;return r.createElement(nt.s,{key:t||n,dataValue:t,label:r.createElement("span",{"data-value":t},n),active:a===t,onClick:()=>o({selected:t})})}))))};ot.defaultProps={dataTest:"menu-select"};const lt=()=>{var e;const{aggregateDataExchanges:t}=b(),[a,n]=N(),[o,l]=(0,r.useState)(!1),s=t.map((e=>({value:e.id,label:e.displayName})));return r.createElement("div",{"data-test":"data-exchange-selector"},r.createElement(tt.E,{label:u.Z.t("Data exchange"),value:null===(e=s.find((e=>e.value===a)))||void 0===e?void 0:e.label,open:o,setOpen:l,noValueMessage:u.Z.t("Choose a data exchange")},r.createElement("div",{"data-test":"data-exchange-selector-contents"},r.createElement(ot,{values:s,selected:a,dataTest:"exchange-selector-menu",onChange:e=>{let{selected:t}=e;n(t),l(!1)}}))))},st=()=>{const e=D();return r.createElement(et.A,{onClearSelectionClick:e},r.createElement(lt,null))};var it="layout_container__WuNXT",ct="layout_content__P4zzF",dt="layout_bottom__Eajo3";function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ut.apply(this,arguments)}const mt=e=>{let{children:t,className:a}=e;return r.createElement("div",{className:a},t)},pt=e=>r.createElement(mt,ut({},e,{className:it})),gt=e=>r.createElement(mt,e),ht=e=>r.createElement(mt,ut({},e,{className:ct})),vt=e=>r.createElement(mt,ut({},e,{className:dt})),Et=e=>{let{router:t}=e;const[a,l]=(0,r.useState)(!1),[c,d]=(0,r.useState)(null);return r.createElement(r.Fragment,null,r.createElement(n.k,{spacers:!0,colors:!0,theme:!0}),r.createElement(t,null,r.createElement(s.QueryParamProvider,{adapter:i.Q,ReactRouterRoute:o.AW},r.createElement(x,null,r.createElement(pt,null,r.createElement(gt,null,r.createElement(st,null)),r.createElement(Z,null,r.createElement(ht,null,r.createElement(Ce,null),r.createElement(Xe,{open:a,onClose:()=>{l(!1)},setDataSubmitted:d})),r.createElement(vt,null,r.createElement(U,{openSubmitModal:()=>{l(!0)},dataSubmitted:c}))))))))};Et.defaultProps={router:l.UT};var Ct=JSON.parse('{"Aggregate data exchange information is not accessible":"Aggregate data exchange information is not accessible","There was a problem retrieving aggregate data exchanges. Refresh the page to try again.":"There was a problem retrieving aggregate data exchanges. Refresh the page to try again.","Submit data":"Submit data","Data has already been submitted":"Data has already been submitted","There is no data to submit":"There is no data to submit","There are no exchanges available to you":"There are no exchanges available to you","No data in this exchange":"No data in this exchange","There is not any data to show in this exchange, or you might not have access to the data.":"There is not any data to show in this exchange, or you might not have access to the data.","Choose a data exchange to get started":"Choose a data exchange to get started","Review your data before submitting it to a data exchange.":"Review your data before submitting it to a data exchange.","Choose a data exchange from the top menu.":"Choose a data exchange from the top menu.","Learn more about data exchange":"Learn more about data exchange","Data":"Data","No data":"No data","There is no data for this report":"There is no data for this report","Open in data visualizer":"Open in data visualizer","1 data report":"1 data report","{{requestsCount}} data reports":"{{requestsCount}} data reports","Analytics tables last generated {{timeDifference}} ago":"Analytics tables last generated {{timeDifference}} ago","Exchange content not accessible":"Exchange content not accessible","Click to refresh":"Click to refresh","Conflicts":"Conflicts","Object":"Object","Value":"Value","Submitting...":"Submitting...","No, cancel":"No, cancel","Yes, submit":"Yes, submit","There was a problem submitting data":"There was a problem submitting data","Close":"Close","Try again":"Try again","{{orgUnitCount}} organisation unit":"{{orgUnitCount}} organisation unit","{{orgUnitCount}} organisation units":"{{orgUnitCount}} organisation units","{{periodsCount}} period: {{periods}}":"{{periodsCount}} period: {{periods}}","{{periodsCount}} periods: {{periods}}":"{{periodsCount}} periods: {{periods}}","3+ periods: {{periods}}, and {{periodsCountLessThree}} more":"3+ periods: {{periods}}, and {{periodsCountLessThree}} more","{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}","{{reportCount}} reports to {{-exchangeName}} at {{-exchangeHostName}}":"{{reportCount}} reports to {{-exchangeName}} at {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}} at {{-exchangeHostName}}":"{{reportCount}} report to {{-exchangeName}} at {{-exchangeHostName}}","Are you sure you want to submit this data?":"Are you sure you want to submit this data?","Submitting data":"Submitting data","imported":"imported","updated":"updated","ignored":"ignored","Exchange: {{- exchangeName}}":"Exchange: {{- exchangeName}}","Target URL: {{- exchangeURL}}":"Target URL: {{- exchangeURL}}","Run date: {{- runDate}}":"Run date: {{- runDate}}","SUMMARY":"SUMMARY","Imported: {{importedCount}}, Updated: {{updatedCount}}, Ignored: {{ignoredCount}}":"Imported: {{importedCount}}, Updated: {{updatedCount}}, Ignored: {{ignoredCount}}","DETAILS":"DETAILS","Report: {{- requestName}}":"Report: {{- requestName}}","Report":"Report","Imported":"Imported","Updated":"Updated","Ignored":"Ignored","Copy summary to clipboard":"Copy summary to clipboard","Data submitted successfully.":"Data submitted successfully.","Summary":"Summary","Unknown error":"Unknown error","Data exchange":"Data exchange","Choose a data exchange":"Choose a data exchange"}'),xt=JSON.parse('{"Aggregate data exchange information is not accessible":"Information sur les \xe9changes de donn\xe9es aggreg\xe9es n\'est pas accesible","There was a problem retrieving aggregate data exchanges. Refresh the page to try again.":"Il\'y a eu un probl\xe8me avec le t\xe9l\xe9chargement des \xe9changes de donn\xe9es aggreg\xe9es. Actualiser la page pour essayer de nouveau.","Submit data":"Envoyer les donn\xe9es","Data has already been submitted":"Ces donn\xe9es ont \xe9t\xe9 envoy\xe9es","There is no data to submit":"Il n\'y a pas de donn\xe9es \xe0 envoyer","Choose a data exchange to get started":"Choisir un \xe9change de donn\xe9es pour commencer","Learn more about data exchange":"Apprendre plus sur l\'\xe9change de donn\xe9es","Data":"Donn\xe9es","Open this data in data visualizer":"Ouvrir avec le visualiseur de donn\xe9es","1 data report":"Un rapport de donn\xe9es","{{requestsCount}} data reports":"{{requestsCount}} rapports de donn\xe9es","Analytics tables last generated {{timeDifference}} ago":"Derni\xe8re fois les tableaux analytiques ont \xe9t\xe9 mis \xe0 jour: il y a {{timeDifference}}","Exchange content not accessible":"L\'\xe9change n\'est pas accessible","Click to refresh":"Cliquer pour mettre \xe0 jour","Submitting...":"Envoyant...","No, cancel":"Non, annuler","Yes, submit":"Oui, envoyer","There was a problem submitting data":"Il y a eu un probl\xe8me avec l\'envoiement des donn\xe9es","Close":"Fermer","Try again":"Essayer de nouveau","{{orgUnitCount}} organisation unit":"{{orgUnitCount}} unit\xe9 d\'organisation","{{orgUnitCount}} organisation units":"{{orgUnitCount}} unit\xe9s d\'organisation","{{periodsCount}} period: {{periods}}":"{{periodsCount}} p\xe9riode: {{periods}}","{{periodsCount}} periods: {{periods}}":"{{periodsCount}} p\xe9riodes: {{periods}}","3+ periods: {{periods}}, and {{periodsCountLessThree}} more":"3+ p\xe9riodes: {{periods}}, et {{periodsCountLessThree}} en plus","{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} rapports pour {{-exchangeName}} en interne \xe0 {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} rapport pour {{-exchangeName}} en interne \xe0 {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}}":"{{reportCount}} rapport pour {{-exchangeName}}","{{reportCount}} reports to {{-exchangeName}}":"{{reportCount}} rapports pour {{-exchangeName}}","{{reportCount}} reports to {{-exchangeName}} at {{-exchangeURL}}":"{{reportCount}} rapports pour {{-exchangeName}} \xe0 {{-exchangeURL}}","{{reportCount}} report to {{-exchangeName}} at {{-exchangeURL}}":"{{reportCount}} rapport pour {{-exchangeName}} \xe0 {{-exchangeURL}}","Are you sure you want to submit this data?":"\xcates-vous sur de vouloir envoyer ces donn\xe9es?","Submitting data":"Envoyer donn\xe9es","Imported":"Import\xe9s","Updated":"Mis-\xe0-jour","Ignored":"Ignor\xe9s","Copy summary to clipboard":"Copier l\'information sommaire vers le presse-papier","Data submitted successfully.":"Les donn\xe9es ont \xe9t\xe9 envoy\xe9es avec succ\xe8s.","Summary":"Sommaire","Clear selection":"Effacer les selections","Unknown error":"Erreur inconnu","Data exchange":"\xc9change de donn\xe9es","Choose a data exchange":"Choisir un \xe9change de donn\xe9es","Exchange: {{- exchangeName}}":"Echange: {{- exchangeName}}","Target URL: {{- exchangeURL}}":"URL destination: {{- exchangeURL}}","Run date: {{- runDate}}":"Date d\'\xe9x\xe9cution: {{- runDate}}","SUMMARY":"SOMMAIRE","Imported: {{importedCount}}, Updated: {{updatedCount}}, Ignored: {{ignoredCount}}":"Import\xe9s: {{importedCount}}, Mis-\xe0-jour: {{updatedCount}}, Ignor\xe9s: {{ignoredCount}}","DETAILS":"DETAILS","Report: {{- requestName}}":"Rapport: {{- requestName}}","Conflicts":"Conflits","imported":"import\xe9s","updated":"mis-\xe0-jour","ignored":"ignor\xe9s","Report":"Rapport","Object":"Objet","Value":"Valeur"}');const bt="default";u.Z.addResources("en",bt,Ct),u.Z.addResources("fr",bt,xt);var yt=()=>r.createElement(Et,null)}}]);
//# sourceMappingURL=app.7c8c72a6.chunk.js.map