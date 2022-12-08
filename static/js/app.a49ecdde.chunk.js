"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[2143],{6099:function(e,t,a){a.r(t),a.d(t,{default:function(){return bt}});var n=a(4425),r=a(969),l=a(734),o=a(6822),s=a(4934),i=a(7911);const c=(0,r.createContext)({aggregateDataExchanges:[]});var d=a(3977),u=a(4144),m=a(2912),p=a(6475);const g=()=>r.createElement(m.M,null,r.createElement(p.V,null));var h=a(3274),v="warning_warningBoxWrapper__y0sSL";const E=e=>{let{error:t,title:a,children:n}=e;return r.createElement("div",{className:v},r.createElement(h.f,{error:t,title:a},n))},x={aggregateDataExchanges:{resource:"aggregateDataExchanges",params:{paging:!1,fields:["id","displayName"]}}},C=e=>{let{children:t}=e;const{data:a,loading:n,error:l}=(0,d.u_)(x);if(n)return r.createElement(g,null);if(l)return r.createElement(E,{error:!0,title:u.Z.t("Aggregate data exchange information is not accessible")},r.createElement("span",null,u.Z.t("There was a problem retrieving aggregate data exchanges. Refresh the page to try again.")));const{aggregateDataExchanges:o}=a.aggregateDataExchanges,s={aggregateDataExchanges:o};return r.createElement(c.Provider,{value:s},t)},y=()=>(0,r.useContext)(c);var b=a(5690);const f=(0,r.createContext)({exchange:{},exchangeData:{},refetch:()=>{console.log("exchange context not initialized")}}),_={exchangeId:s.StringParam,requestIndex:s.NumberParam},N=()=>(0,s.useQueryParam)("exchangeId",_.exchangeId),k=()=>(0,s.useQueryParam)("requestIndex",_.requestIndex),Z=()=>{const[,e]=(0,s.useQueryParams)(_);return(0,r.useCallback)((()=>{e({exchangeId:void 0,requestIndex:void 0})}),[e])},D={exchange:{resource:"aggregateDataExchanges",id:e=>{let{id:t}=e;return t},params:{paging:!1,fields:["source, target","id","displayName"]}},exchangeData:{resource:"aggregateDataExchanges",id:e=>{let{id:t}=e;return`${t}/sourceData`},params:{paging:!1}}},w=e=>{let{children:t}=e;const{loading:a,error:n,data:l,called:o,refetch:s}=(0,d.u_)(D,{lazy:!0}),[i]=N(),[,c]=k(),m=(0,r.useCallback)((()=>s({id:i})),[s,i]);if((0,r.useEffect)((()=>{c(0),i&&m()}),[i,m,c]),a)return r.createElement(g,null);if(n)return r.createElement(E,{error:!0,title:u.Z.t("Exchange content not accessible")},r.createElement(b.z,{onClick:m},u.Z.t("Click to refresh")));const{exchange:p,exchangeData:h}=l||{},v={exchange:o?p:null,exchangeData:o?h:null};return r.createElement(f.Provider,{value:v},t)},T=()=>(0,r.useContext)(f);var S=a(585),L="button-with-tooltip_tooltipReference__gHGkH";const W=e=>{let{buttonText:t,tooltipContent:a}=e;return r.createElement("div",{"data-test":"bottom-bar"},r.createElement(S.u,{content:a},(e=>{let{ref:a,onMouseOver:n,onMouseOut:l}=e;return r.createElement("span",{className:L,ref:a,onMouseOver:n,onMouseOut:l},r.createElement(b.z,{primary:!0,disabled:!0},t))})))},R=e=>{let{openSubmitModal:t,dataSubmitted:a}=e;const[n]=N(),{exchangeData:l}=T(),o=null===l||void 0===l?void 0:l.reduce(((e,t)=>{var a;return((null===t||void 0===t||null===(a=t.rows)||void 0===a?void 0:a.length)||0)+e}),0),s=u.Z.t("Submit data");if(!n||!l)return null;if(0===o||a){const e=a?u.Z.t("Data has already been submitted"):u.Z.t("There is no data to submit");return r.createElement(W,{buttonText:s,tooltipContent:e})}return r.createElement("div",{"data-test":"bottom-bar"},r.createElement(b.z,{primary:!0,onClick:t},s))};var M="entry-screen_wrapperDiv__Tco-+",U="entry-screen_innerDiv__ODtk4",I="entry-screen_svgWrapper__Koaxt",H="entry-screen_headingText__kKzBv",z="entry-screen_instructionsText__DgcTC",q="entry-screen_linkText__T5Rps";const A=()=>r.createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{clipPath:"url(#clip0_229_2099)"},r.createElement("path",{d:"M12 20L22.3923 26V38L12 44L1.6077 38V26L12 20Z",fill:"#FBFCFD",stroke:"#404B5A",strokeWidth:"2"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.0001 31.4338V20H13.0001V31.4338L22.5146 37.1425L21.4856 38.8575L12.0001 33.1662L2.51459 38.8575L1.4856 37.1425L11.0001 31.4338Z",fill:"#404B5A"}),r.createElement("path",{d:"M52 20L62.3923 26V38L52 44L41.6077 38V26L52 20Z",fill:"#FBFCFD",stroke:"#404B5A",strokeWidth:"2"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.0001 31.4338V20H53.0001V31.4338L62.5146 37.1425L61.4856 38.8575L52.0001 33.1662L42.5146 38.8575L41.4856 37.1425L51.0001 31.4338Z",fill:"#404B5A"}),r.createElement("path",{d:"M24 44H34",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M29 49L34 44L29 39",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M22 44H20",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M40 44H37",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M44 44H42",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M30 20L40 20",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M35 25L40 20L35 15",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M28 20H24",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M45 20H43",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M34 32H38",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M29 32H32",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M25 32H27",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M10 56L21 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M4 56L8 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M16 61L21 56L16 51",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M26 56L32 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M35 56L38 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M40 56L42 56",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M21 8L31 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M13 8L17 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M8 8L10 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M26 13L31 8L26 3",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M6 8L3 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M37 8L35 8",stroke:"#6C7787",strokeWidth:"2"}),r.createElement("path",{d:"M41 8L39 8",stroke:"#6C7787",strokeWidth:"2"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_229_2099"},r.createElement("rect",{width:"64",height:"64",fill:"white"})))),B=()=>r.createElement("div",{className:M},r.createElement("div",{className:U},r.createElement("div",{className:I},r.createElement(A,null)),r.createElement("span",{className:H},u.Z.t("Choose a data exchange to get started")),r.createElement("span",{className:z},u.Z.t("Review your data before submitting it to a data exchange.")),r.createElement("span",{className:z},u.Z.t("Choose a data exchange from the top menu.")),r.createElement("a",{className:q,target:"_blank",rel:"noreferrer noopener",href:"https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-exchange.html#data-exchange"},u.Z.t("Learn more about data exchange"))));var O=a(7405),V=a(7958),j=a(8206),F=a(3656),P=a(3019),$=a(3582),Q=a(8255),J={titleCell:"table_titleCell__mE+vV",labelCellContent:"table_labelCellContent__nkDcC",dataTable:"table_dataTable__bVn-U"};const Y=e=>{let{children:t,columns:a}=e;return r.createElement("tr",null,r.createElement("th",{className:J.titleCell,colSpan:a.toString()},t))},G=e=>{let{title:t,columns:a,rows:n}=e;return r.createElement(r.Fragment,null,r.createElement(V.w,{className:J.dataTable,width:"auto"},r.createElement(j.s,null,r.createElement(Y,{columns:a.length},t),r.createElement(F.U,null,r.createElement(P.p,{fixed:!0,left:"0",top:"0",className:J.cell},r.createElement("span",{className:J.labelCellContent},a[0])),a.slice(1).map((e=>r.createElement(P.p,{key:e,className:J.cell},e))))),r.createElement($.R,null,n.map(((e,t)=>{const[a,...n]=e;return r.createElement(F.U,{key:t},r.createElement(Q.W,{fixed:!0,left:"0",className:J.cell},r.createElement("span",{className:J.labelCellContent},a)),n.map(((e,t)=>r.createElement(Q.W,{key:t,className:J.cell},e))))})))))};var K="requests-display_display__QQH4w",X="requests-display_visualizationButton__PCw2B",ee="requests-display_linkNoDecoration__mvZxw";const te=(e,t)=>{for(const a of t)e[a]=e[a]||{},e=e[a]},ae=e=>{var t,a,n,r,l,o,s;const i=["dx","pe","ou","co"],c=null===e||void 0===e?void 0:e.headers.findIndex((e=>"dx"===e.name)),d=null===e||void 0===e?void 0:e.headers.findIndex((e=>"ou"===e.name)),m=null===e||void 0===e?void 0:e.headers.findIndex((e=>"pe"===e.name)),p=null===e||void 0===e?void 0:e.headers.findIndex((e=>"value"===e.name)),g=Object.keys(null===e||void 0===e||null===(t=e.metaData)||void 0===t?void 0:t.dimensions).filter((e=>!i.includes(e))),h=(e=>{let{data:t,dx_index:a,ou_index:n,pe_index:r,value_index:l}=e;const o={};if(Array.isArray(null===t||void 0===t?void 0:t.rows))for(const s of null===t||void 0===t?void 0:t.rows){const e=s[n],t=s[a],i=s[r],c=s[l];te(o,[e,t,i]),o[e][t][i]=c}return o})({data:e,dx_index:c,ou_index:d,pe_index:m,value_index:p}),v=null===(a=e.metaData)||void 0===a||null===(n=a.dimensions)||void 0===n?void 0:n.ou.map((t=>{var a,n;return{id:t,name:null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}}));v.sort(((e,t)=>e.name.localeCompare(t.name)));const E=null===(r=e.metaData)||void 0===r||null===(l=r.dimensions)||void 0===l?void 0:l.dx.map((t=>{var a,n;return{id:t,name:null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}}));E.sort(((e,t)=>e.name.localeCompare(t.name)));let x=null===(o=e.metaData)||void 0===o||null===(s=o.dimensions)||void 0===s?void 0:s.pe.map((t=>{var a,n;return{id:t,name:null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}}));x=x.sort(((e,t)=>e.id.localeCompare(t.id,"en",{numeric:!0})));const C=[];for(const y of v){const t={};t.title=(null===g||void 0===g?void 0:g.length)>0?`${y.name} - ${g.map((t=>{var a,n,r;return null===e||void 0===e||null===(a=e.metaData)||void 0===a||null===(n=a.items)||void 0===n||null===(r=n[t])||void 0===r?void 0:r.name})).join(",")}`:y.name,t.headers=[{name:u.Z.t("Data")},...x.map((e=>{let{name:t}=e;return{name:t}}))];const a=[];for(const e of E){const t=x.map((t=>{var a,n;return(null===h||void 0===h||null===(a=h[y.id])||void 0===a||null===(n=a[e.id])||void 0===n?void 0:n[t.id])||""}));a.push([e.name,...t])}t.rows=a,C.push(t)}return C},ne=e=>{var t,a,n;let{requestIndex:l}=e;const{exchange:o,exchangeData:s}=T(),i=null===(t=o.source)||void 0===t||null===(a=t.requests)||void 0===a?void 0:a[l],c=ae(null===s||void 0===s?void 0:s[l]),{baseUrl:m}=(0,d.zw)();return 0===(null===s||void 0===s||null===(n=s.rows)||void 0===n?void 0:n.length)?r.createElement("div",{className:K},r.createElement(E,{title:u.Z.t("No data")},r.createElement("span",null,u.Z.t("There is no data for this report")))):s?r.createElement("div",{className:K},(null===i||void 0===i?void 0:i.visualization)&&r.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:`${m}/dhis-web-data-visualizer/#/${i.visualization}`,className:ee},r.createElement(b.z,{icon:r.createElement(O.Z,null),className:X,secondary:!0,small:!0},u.Z.t("Open in data visualizer"))),c.map((e=>r.createElement(G,{key:e.title,title:e.title,columns:e.headers.map((e=>e.name)),rows:e.rows})))):null};var re=a(9709),le=a(7997);const oe=e=>{let{requests:t,selected:a,onChange:n}=e;return t&&(null===t||void 0===t?void 0:t.length)>0?r.createElement(re.n,{scrollable:!0},t.map(((e,t)=>r.createElement(le.O,{key:e.name,onClick:()=>n(t),selected:t===a},e.name)))):null};var se=a(6498),ie=a(997),ce=a(2426),de=a.n(ce),ue="title-bar_titleBar__6Sk58",me="title-bar_workflowName__mWwAj",pe="title-bar_workflowDataSetsCount__fy+TZ",ge="title-bar_analyticsRunStamp__tAS+8";const he=e=>{let{startTimestamp:t,endTimestamp:a}=e;if(!t||!a)return;const n=new Date(t),r=new Date(a);return de()(n).fromNow(r)},ve=e=>{let{timestamp:t,timezone:a}=e;return`${t.substring(0,10)} T ${t.substring(11,16)} ${a}`},Ee=()=>{var e,t;const{systemInfo:a}=(0,d.zw)(),{lastAnalyticsTableSuccess:n,serverDate:l,serverTimeZoneId:o}=a,{exchange:s}=T(),i=null===(e=s.source)||void 0===e||null===(t=e.requests)||void 0===t?void 0:t.length;return r.createElement("div",{className:ue},r.createElement("span",{className:me},null===s||void 0===s?void 0:s.displayName),r.createElement("span",{className:pe},r.createElement(se.Z,null),1===i&&u.Z.t("1 data report",{requestsCount:i}),i>1&&u.Z.t("{{requestsCount}} data reports",{requestsCount:i})),r.createElement("div",{className:ge},r.createElement(ie.Z,null),r.createElement("div",null,r.createElement(S.u,{content:ve({timestamp:n,timezone:o})},r.createElement("span",null,u.Z.t("Analytics tables last generated {{timeDifference}} ago",{timeDifference:he({startTimestamp:n,endTimestamp:l})}))))))},xe=()=>{var e;const{aggregateDataExchanges:t}=y(),{exchange:a}=T(),[n]=N(),l=null===a||void 0===a||null===(e=a.source)||void 0===e?void 0:e.requests.map((e=>({name:e.name}))),[o,s]=k();return(0,r.useEffect)((()=>{n&&l||s(void 0),n&&!o&&l&&s(0)}),[n,l,o,s]),0===t.length?r.createElement(m.M,null,r.createElement("span",null,u.Z.t("There are no exchanges available to you"))):a&&n?r.createElement(r.Fragment,null,r.createElement(Ee,null),!l&&r.createElement("div",null,r.createElement(E,{error:!0,title:u.Z.t("No data in this exchange")},r.createElement("span",null,u.Z.t("There is not any data to show in this exchange, or you might not have access to the data.")))),!isNaN(o)&&r.createElement(r.Fragment,null,r.createElement(oe,{requests:l,selected:o,onChange:s}),r.createElement(ne,{requestIndex:o}))):r.createElement(B,null)};var Ce=a(15),ye=a(8384),be=a(7526),fe=a(2200),_e=a(3464),Ne="submit-modal_submitModalSummaryWrapper__fDmVX",ke="submit-modal_loadingWrapper__W+aUn",Ze="submit-modal_contentStyling__k5fm0",De=a(5173),we=a(4697),Te=a(2357),Se=a(4157),Le=a(5933),We=a(6290),Re=a(964),Me=a(6268),Ue=a(9817),Ie=a(6309),He=a(8382),ze="conflicts-details-table_label__hOmwo";const qe=e=>{let{conflicts:t}=e;return r.createElement(r.Fragment,null,r.createElement("span",{className:ze},u.Z.t("Conflicts")),r.createElement(Re.i,null,r.createElement(j.s,null,r.createElement(Me.J,null,r.createElement(Ue.f,null,u.Z.t("Object")),r.createElement(Ue.f,null,u.Z.t("Value")))),r.createElement($.R,null,t.map(((e,t)=>r.createElement(Ie.S,{key:`job-summary-conflicts-${e.object}-${t}`},r.createElement(He.p,null,e.object),r.createElement(He.p,null,e.value)))))))};var Ae={summaryBoxWrapper:"success-content_summaryBoxWrapper__ci5ni",summaryBoxTitle:"success-content_summaryBoxTitle__CHBEU",summaryBox:"success-content_summaryBox__DfiV9",label:"success-content_label__Yi91M",count:"success-content_count__xpqzw",success:"success-content_success__TTgaz success-content_summaryBox__DfiV9",deleted:"success-content_deleted__2pAlM success-content_summaryBox__DfiV9",ignored:"success-content_ignored__DVb7P success-content_summaryBox__DfiV9",copyButton:"success-content_copyButton__91b-i",tagWrapper:"success-content_tagWrapper__-GdnR"};const Be={imported:{style:"success",text:u.Z.t("Imported")},updated:{style:"success",text:u.Z.t("Updated")},ignored:{style:"ignored",text:u.Z.t("Ignored")}},Oe=e=>{let{importType:t,importCount:a}=e;const{text:n,style:l}=Be[t],o=Ae[l];return r.createElement("div",{className:Ae.summaryBox},r.createElement("div",{className:o},r.createElement("div",{className:Ae.count},a),r.createElement("div",{className:Ae.label},r.createElement("span",null,n.toLowerCase()))))},Ve=e=>{var t,a,n,l;let{importSummary:o,exchangeName:s,expandedRows:i,expandToggle:c,hasConflicts:d}=e;const u=(null===(t=o.conflicts)||void 0===t?void 0:t.length)>0,m=d&&!u;return r.createElement(F.U,{expanded:i.includes(s),onExpandToggle:u?()=>c(s):void 0,expandableContent:u?r.createElement(qe,{conflicts:o.conflicts}):void 0},m&&r.createElement(Q.W,null),r.createElement(Q.W,null,s),r.createElement(Q.W,null,null===o||void 0===o||null===(a=o.importCount)||void 0===a?void 0:a.imported),r.createElement(Q.W,null,null===o||void 0===o||null===(n=o.importCount)||void 0===n?void 0:n.updated),r.createElement(Q.W,null,null===o||void 0===o||null===(l=o.importCount)||void 0===l?void 0:l.ignored))},je=e=>{let{importSummaries:t,hasConflicts:a}=e;const{exchange:n}=T(),[l,o]=(0,r.useState)([]),s=e=>{l.includes(e)?o(l.filter((t=>t!==e))):o([...l,e])};return r.createElement("div",{"data-test":"success-counts-table"},r.createElement(V.w,null,r.createElement(De.s,null,r.createElement(F.U,null,a&&r.createElement(P.p,null),r.createElement(P.p,null,u.Z.t("Report")),r.createElement(P.p,null,u.Z.t("Imported")),r.createElement(P.p,null,u.Z.t("Updated")),r.createElement(P.p,null,u.Z.t("Ignored")))),r.createElement(we.R,null,t.map(((e,t)=>{var o,i,c,d;return r.createElement(Ve,{key:`${null===n||void 0===n||null===(o=n.source)||void 0===o||null===(i=o.requests[t])||void 0===i?void 0:i.name}-summary`,importSummary:e,exchangeName:null===n||void 0===n||null===(c=n.source)||void 0===c||null===(d=c.requests[t])||void 0===d?void 0:d.name,expandedRows:l,expandToggle:s,hasConflicts:a})})))),r.createElement("div",{className:Ae.copyButton},r.createElement(b.z,{small:!0,icon:r.createElement(Te.Z,null),onClick:()=>{var e;(e=>{let{importSummaries:t,requests:a}=e;const n=[u.Z.t("Report"),u.Z.t("Imported"),u.Z.t("Updated"),u.Z.t("Ignored")].join(),r=t.reduce(((e,t,n)=>{var r,l,o,s,i,c,d;let u=null!==(r=null===a||void 0===a||null===(l=a[n])||void 0===l?void 0:l.name)&&void 0!==r?r:"";var m;return null!==a&&void 0!==a&&null!==(o=a[n])&&void 0!==o&&null!==(s=o.name)&&void 0!==s&&s.includes(",")&&(u=`"${null===a||void 0===a||null===(m=a[n])||void 0===m?void 0:m.name}"`),e+"\n"+[u,null===t||void 0===t||null===(i=t.importCount)||void 0===i?void 0:i.imported,null===t||void 0===t||null===(c=t.importCount)||void 0===c?void 0:c.updated,null===t||void 0===t||null===(d=t.importCount)||void 0===d?void 0:d.ignored].join()}),n);navigator.clipboard.writeText(r)})({importSummaries:t,requests:null===n||void 0===n||null===(e=n.source)||void 0===e?void 0:e.requests})}},u.Z.t("Copy summary to clipboard"))))},Fe=e=>{let{data:t}=e;const{importSummaries:a}=t,n=a.reduce(((e,t)=>{var a;for(const r in null===t||void 0===t?void 0:t.importCount){var n;e[r]+=(null===(n=t.importCount)||void 0===n?void 0:n[r])||0}return e.conflicts+=(null===(a=t.conflicts)||void 0===a?void 0:a.length)||0,e}),{imported:0,updated:0,ignored:0,deleted:0,conflicts:0});return r.createElement(r.Fragment,null,r.createElement(Se.V,{positive:!0,icon:r.createElement(Le.Z,null)},u.Z.t("Data submitted successfully.")),n.conflicts>0&&r.createElement("span",{className:Ae.tagWrapper},r.createElement(Se.V,{negative:!0,icon:r.createElement(We.Z,null)},u.Z.t("Conflicts"))),r.createElement("div",{className:Ae.summaryBoxTitle},u.Z.t("Summary")),r.createElement("div",{className:Ae.summaryBoxWrapper},r.createElement(Oe,{importType:"imported",importCount:n.imported}),r.createElement(Oe,{importType:"updated",importCount:n.updated}),r.createElement(Oe,{importType:"ignored",importCount:n.ignored})),r.createElement(je,{importSummaries:a,hasConflicts:n.conflicts>0}))},Pe={data:null,error:null,loading:!1,called:!1,dataSubmitted:null},$e=(e,t)=>{switch(t.type){case"loading":return{...Pe,loading:!0};case"success":return{data:t.payload,error:null,loading:!1,called:!0,dataSubmitted:!0};case"error":return{data:null,error:t.payload,loading:!1,called:!1,dataSubmitted:!1};case"reset":return{...Pe};default:return{...Pe,called:!0}}},Qe=()=>r.createElement(r.Fragment,null,r.createElement(Ce.h,null,r.createElement(Ke,null,r.createElement(m.M,null,r.createElement("div",{className:ke},r.createElement(p.V,{small:!0}),r.createElement("span",null,u.Z.t("Submitting...")))))),r.createElement(ye.n,null,r.createElement(be.J,{end:!0},r.createElement(b.z,{disabled:!0},u.Z.t("No, cancel")),r.createElement(b.z,{primary:!0,disabled:!0},u.Z.t("Yes, submit"))))),Je=e=>{let{error:t,onRetry:a,onClose:n}=e;return r.createElement(r.Fragment,null,r.createElement(Ce.h,null,r.createElement(Ke,null,r.createElement(E,{error:!0,title:u.Z.t("There was a problem submitting data")},r.createElement("span",null,t.message)))),r.createElement(ye.n,null,r.createElement(be.J,{end:!0},r.createElement(b.z,{onClick:n},u.Z.t("Close")),r.createElement(b.z,{primary:!0,onClick:a},u.Z.t("Try again")))))},Ye=e=>{let{onClose:t,data:a}=e;return r.createElement(r.Fragment,null,r.createElement(Ce.h,null,r.createElement(Ke,null,r.createElement(Fe,{data:a}))),r.createElement(ye.n,null,r.createElement(be.J,{end:!0},r.createElement(b.z,{onClick:t},u.Z.t("Close")))))},Ge=e=>{var t,a,n,l;let o,{exchange:s,requests:i,onClose:c,onSubmit:m}=e;const{baseUrl:p}=(0,d.zw)(),g=i.length,h=null===s||void 0===s?void 0:s.displayName,v="INTERNAL"===(null===s||void 0===s||null===(t=s.target)||void 0===t?void 0:t.type)?p:null===s||void 0===s||null===(a=s.target)||void 0===a||null===(n=a.api)||void 0===n?void 0:n.url,E=null===v||void 0===v?void 0:v.split("//")[1];return o="INTERNAL"===(null===s||void 0===s||null===(l=s.target)||void 0===l?void 0:l.type)?i.length>1?u.Z.t("{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}):u.Z.t("{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}):i.length>1?u.Z.t("{{reportCount}} reports to {{-exchangeName}} at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}):u.Z.t("{{reportCount}} report to {{-exchangeName}} at {{-exchangeHostName}}",{reportCount:g,exchangeName:h,exchangeHostName:E}),r.createElement(r.Fragment,null,r.createElement(Ce.h,null,r.createElement(Ke,null,r.createElement("div",{className:Ne},o,r.createElement("ul",null,i.map((e=>r.createElement("li",{key:e.name},(e=>{const{name:t,orgUnits:a,periods:n}=e,r=1===a.length?u.Z.t("{{orgUnitCount}} organisation unit",{orgUnitCount:a.length}):u.Z.t("{{orgUnitCount}} organisation units",{orgUnitCount:a.length});let l="";return 1===n.length&&(l=u.Z.t("{{periodsCount}} period: {{periods}}",{periodsCount:n.length,periods:n[0],nsSeparator:"-:-"})),n.length>1&&n.length<=3&&(l=u.Z.t("{{periodsCount}} periods: {{periods}}",{periodsCount:n.length,periods:n.join(", "),nsSeparator:"-:-"})),n.length>3&&(l=u.Z.t("3+ periods: {{periods}}, and {{periodsCountLessThree}} more",{periodsCount:n.length,periods:n.slice(0,3).join(", "),periodsCountLessThree:n.length-3,nsSeparator:"-:-"})),`${t}, ${r}, ${l}`})(e)))))),r.createElement("div",null,u.Z.t("Are you sure you want to submit this data?")))),r.createElement(ye.n,null,r.createElement(be.J,{end:!0},r.createElement(b.z,{onClick:c},u.Z.t("No, cancel")),r.createElement(b.z,{primary:!0,onClick:m},u.Z.t("Yes, submit")))))},Ke=e=>{let{children:t}=e;return r.createElement("div",{className:Ze},t)},Xe=e=>{let{open:t,onClose:a,setDataSubmitted:n}=e;const{exchange:l,exchangeData:o}=T(),[s,i]=(0,r.useState)(!1),c=null===o||void 0===o?void 0:o.map(((e,t)=>{var a,n,r,o,s,i,c;return{name:null===(a=l.source)||void 0===a||null===(n=a.requests)||void 0===n||null===(r=n[t])||void 0===r?void 0:r.name,orgUnits:null===(o=e.metaData)||void 0===o||null===(s=o.dimensions)||void 0===s?void 0:s.ou,periods:null===(i=e.metaData)||void 0===i||null===(c=i.dimensions)||void 0===c?void 0:c.pe.map((t=>{var a,n;return null===(a=e.metaData)||void 0===a||null===(n=a.items[t])||void 0===n?void 0:n.name}))}})),[m,{called:p,data:g,error:h,loading:v,dataSubmitted:E}]=(e=>{let{id:t}=e;const a=(0,d.bQ)(),[n,l]=(0,r.useReducer)($e,Pe),[o,s]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{(async e=>{let{id:t}=e;if(o){l({type:"loading"});try{const e=await a.mutate((e=>{let{id:t}=e;return{resource:`aggregateDataExchanges/${t}/exchange`,type:"create"}})({id:t}));if("ERROR"===(null===e||void 0===e?void 0:e.status)){var n;const t=(null===e||void 0===e||null===(n=e.importSummaries.find((e=>{let{status:t}=e;return"ERROR"===t})))||void 0===n?void 0:n.description)||u.Z.t("Unknown error");throw new Error(t)}s(!1),l({type:"success",payload:e})}catch(h){s(!1),l({type:"error",payload:h})}}})({id:t})}),[t,o,a]),(0,r.useEffect)((()=>()=>{l({type:"reset"})}),[t]),[()=>{s(!0)},n]})({id:null===l||void 0===l?void 0:l.id});return(0,r.useEffect)((()=>{t||i(!1)}),[t]),(0,r.useEffect)((()=>{n(E)}),[E,n]),l?r.createElement(fe.u,{hide:!t,large:!0,position:"middle",onClose:v?null:a},r.createElement(_e.r,null,u.Z.t("Submitting data")),!p&&!v&&!s&&r.createElement(Ge,{exchange:l,requests:c,onClose:a,onSubmit:()=>{i(!0),m()}}),h&&s&&r.createElement(Je,{error:h,onRetry:m,onClose:a}),g&&r.createElement(Ye,{data:g,onClose:a}),v&&r.createElement(Qe,null)):null};var et=a(4453),tt=a(4285),at=a(924),nt=a(4243),rt="menu-select_menuSelect__iOrzZ";const lt=e=>{let{values:t,selected:a,dataTest:n,onChange:l}=e;return r.createElement("div",{className:rt,"data-test":n},r.createElement(at.v,null,t.map((e=>{let{value:t,label:n}=e;return r.createElement(nt.s,{key:t||n,dataValue:t,label:r.createElement("span",{"data-value":t},n),active:a===t,onClick:()=>l({selected:t})})}))))};lt.defaultProps={dataTest:"menu-select"};const ot=()=>{var e;const{aggregateDataExchanges:t}=y(),[a,n]=N(),[l,o]=(0,r.useState)(!1),s=t.map((e=>({value:e.id,label:e.displayName})));return r.createElement("div",{"data-test":"data-exchange-selector"},r.createElement(tt.E,{label:u.Z.t("Data exchange"),value:null===(e=s.find((e=>e.value===a)))||void 0===e?void 0:e.label,open:l,setOpen:o,noValueMessage:u.Z.t("Choose a data exchange")},r.createElement("div",{"data-test":"data-exchange-selector-contents"},r.createElement(lt,{values:s,selected:a,dataTest:"exchange-selector-menu",onChange:e=>{let{selected:t}=e;n(t),o(!1)}}))))},st=()=>{const e=Z();return r.createElement(et.A,{onClearSelectionClick:e},r.createElement(ot,null))};var it="layout_container__WuNXT",ct="layout_content__P4zzF",dt="layout_bottom__Eajo3";function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ut.apply(this,arguments)}const mt=e=>{let{children:t,className:a}=e;return r.createElement("div",{className:a},t)},pt=e=>r.createElement(mt,ut({},e,{className:it})),gt=e=>r.createElement(mt,e),ht=e=>r.createElement(mt,ut({},e,{className:ct})),vt=e=>r.createElement(mt,ut({},e,{className:dt})),Et=e=>{let{router:t}=e;const[a,o]=(0,r.useState)(!1),[c,d]=(0,r.useState)(null);return r.createElement(r.Fragment,null,r.createElement(n.k,{spacers:!0,colors:!0,theme:!0}),r.createElement(t,null,r.createElement(s.QueryParamProvider,{adapter:i.Q,ReactRouterRoute:l.AW},r.createElement(C,null,r.createElement(pt,null,r.createElement(gt,null,r.createElement(st,null)),r.createElement(w,null,r.createElement(ht,null,r.createElement(xe,null),r.createElement(Xe,{open:a,onClose:()=>{o(!1)},setDataSubmitted:d})),r.createElement(vt,null,r.createElement(R,{openSubmitModal:()=>{o(!0)},dataSubmitted:c}))))))))};Et.defaultProps={router:o.UT};var xt=JSON.parse('{"Aggregate data exchange information is not accessible":"Aggregate data exchange information is not accessible","There was a problem retrieving aggregate data exchanges. Refresh the page to try again.":"There was a problem retrieving aggregate data exchanges. Refresh the page to try again.","Submit data":"Submit data","Data has already been submitted":"Data has already been submitted","There is no data to submit":"There is no data to submit","There are no exchanges available to you":"There are no exchanges available to you","No data in this exchange":"No data in this exchange","There is not any data to show in this exchange, or you might not have access to the data.":"There is not any data to show in this exchange, or you might not have access to the data.","Choose a data exchange to get started":"Choose a data exchange to get started","Review your data before submitting it to a data exchange.":"Review your data before submitting it to a data exchange.","Choose a data exchange from the top menu.":"Choose a data exchange from the top menu.","Learn more about data exchange":"Learn more about data exchange","Data":"Data","No data":"No data","There is no data for this report":"There is no data for this report","Open in data visualizer":"Open in data visualizer","1 data report":"1 data report","{{requestsCount}} data reports":"{{requestsCount}} data reports","Analytics tables last generated {{timeDifference}} ago":"Analytics tables last generated {{timeDifference}} ago","Exchange content not accessible":"Exchange content not accessible","Click to refresh":"Click to refresh","Conflicts":"Conflicts","Object":"Object","Value":"Value","Submitting...":"Submitting...","No, cancel":"No, cancel","Yes, submit":"Yes, submit","There was a problem submitting data":"There was a problem submitting data","Close":"Close","Try again":"Try again","{{orgUnitCount}} organisation unit":"{{orgUnitCount}} organisation unit","{{orgUnitCount}} organisation units":"{{orgUnitCount}} organisation units","{{periodsCount}} period: {{periods}}":"{{periodsCount}} period: {{periods}}","{{periodsCount}} periods: {{periods}}":"{{periodsCount}} periods: {{periods}}","3+ periods: {{periods}}, and {{periodsCountLessThree}} more":"3+ periods: {{periods}}, and {{periodsCountLessThree}} more","{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}","{{reportCount}} reports to {{-exchangeName}} at {{-exchangeHostName}}":"{{reportCount}} reports to {{-exchangeName}} at {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}} at {{-exchangeHostName}}":"{{reportCount}} report to {{-exchangeName}} at {{-exchangeHostName}}","Are you sure you want to submit this data?":"Are you sure you want to submit this data?","Submitting data":"Submitting data","Imported":"Imported","Updated":"Updated","Ignored":"Ignored","Report":"Report","Copy summary to clipboard":"Copy summary to clipboard","Data submitted successfully.":"Data submitted successfully.","Summary":"Summary","Unknown error":"Unknown error","Data exchange":"Data exchange","Choose a data exchange":"Choose a data exchange"}'),Ct=JSON.parse('{"Aggregate data exchange information is not accessible":"Information sur les \xe9changes de donn\xe9es aggreg\xe9es n\'est pas accesible","There was a problem retrieving aggregate data exchanges. Refresh the page to try again.":"Il\'y a eu un probl\xe8me avec le t\xe9l\xe9chargement des \xe9changes de donn\xe9es aggreg\xe9es. Actualiser la page pour essayer de nouveau.","Submit data":"Envoyer les donn\xe9es","Data has already been submitted":"Ces donn\xe9es ont \xe9t\xe9 envoy\xe9es","There is no data to submit":"Il n\'y a pas de donn\xe9es \xe0 envoyer","Choose a data exchange to get started":"Choisir un \xe9change de donn\xe9es pour commencer","Learn more about data exchange":"Apprendre plus sur l\'\xe9change de donn\xe9es","Data":"Donn\xe9es","Open this data in data visualizer":"Ouvrir avec le visualiseur de donn\xe9es","1 data report":"Un rapport de donn\xe9es","{{requestsCount}} data reports":"{{requestsCount}} rapports de donn\xe9es","Analytics tables last generated {{timeDifference}} ago":"Derni\xe8re fois les tableaux analytiques ont \xe9t\xe9 mis \xe0 jour: il y a {{timeDifference}}","Exchange content not accessible":"L\'\xe9change n\'est pas accessible","Click to refresh":"Cliquer pour mettre \xe0 jour","Submitting...":"Envoyant...","No, cancel":"Non, annuler","Yes, submit":"Oui, envoyer","There was a problem submitting data":"Il y a eu un probl\xe8me avec l\'envoiement des donn\xe9es","Close":"Fermer","Try again":"Essayer de nouveau","{{orgUnitCount}} organisation unit":"{{orgUnitCount}} unit\xe9 d\'organisation","{{orgUnitCount}} organisation units":"{{orgUnitCount}} unit\xe9s d\'organisation","{{periodsCount}} period: {{periods}}":"{{periodsCount}} p\xe9riode: {{periods}}","{{periodsCount}} periods: {{periods}}":"{{periodsCount}} p\xe9riodes: {{periods}}","3+ periods: {{periods}}, and {{periodsCountLessThree}} more":"3+ p\xe9riodes: {{periods}}, et {{periodsCountLessThree}} en plus","{{reportCount}} reports to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} rapports pour {{-exchangeName}} en interne \xe0 {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}} internally at {{-exchangeHostName}}":"{{reportCount}} rapport pour {{-exchangeName}} en interne \xe0 {{-exchangeHostName}}","{{reportCount}} report to {{-exchangeName}}":"{{reportCount}} rapport pour {{-exchangeName}}","{{reportCount}} reports to {{-exchangeName}}":"{{reportCount}} rapports pour {{-exchangeName}}","{{reportCount}} reports to {{-exchangeName}} at {{-exchangeURL}}":"{{reportCount}} rapports pour {{-exchangeName}} \xe0 {{-exchangeURL}}","{{reportCount}} report to {{-exchangeName}} at {{-exchangeURL}}":"{{reportCount}} rapport pour {{-exchangeName}} \xe0 {{-exchangeURL}}","Are you sure you want to submit this data?":"\xcates-vous sur de vouloir envoyer ces donn\xe9es?","Submitting data":"Envoyer donn\xe9es","Imported":"Import\xe9s","Updated":"Mis-\xe0-jour","Ignored":"Ignor\xe9s","Copy summary to clipboard":"Copier l\'information sommaire vers lcde presse-papier","Data submitted successfully.":"Les donn\xe9es ont \xe9t\xe9 envoy\xe9es avec succ\xe8s.","Summary":"Sommaire","Clear selection":"Effacer les selections","Unknown error":"Erreur inconnu","Data exchange":"\xc9change de donn\xe9es","Choose a data exchange":"Choisir un \xe9change de donn\xe9es"}');const yt="default";u.Z.addResources("en",yt,xt),u.Z.addResources("fr",yt,Ct);var bt=()=>r.createElement(Et,null)}}]);
//# sourceMappingURL=app.a49ecdde.chunk.js.map