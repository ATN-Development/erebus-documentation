import{r as c,o as p,c as d,a as t,b as s,w as o,F as u,e as a,d as e}from"./app.8ddb4509.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},h=a(`<h1 id="apirequest" tabindex="-1"><a class="header-anchor" href="#apirequest" aria-hidden="true">#</a> APIRequest</h1><blockquote><p>A class representing a request to the API</p></blockquote><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><p><code>.attachments</code></p><blockquote><p>A list of attachments to send</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">attachments</span> <span class="token operator">=</span> Attachment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div>`,6),_=e("See "),k=e("Attachment"),m=a(`<p><code>.baseUrl</code></p><blockquote><p>The base url of this request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">baseUrl</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div>`,3),g=e("See "),y={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},b=e("string"),f=a(`<p><code>.body</code></p><blockquote><p>The JSON body to send</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">body</span> <span class="token operator">=</span> Json <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre></div>`,3),q=e("See "),v=e("Json"),R=e("See "),x={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",target:"_blank",rel:"noopener noreferrer"},T=e("undefined"),S=a(`<p><code>.headers</code></p><blockquote><p>Headers to be sent in the request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">headers</span> <span class="token operator">=</span> OutgoingHttpHeaders<span class="token punctuation">;</span>
</code></pre></div>`,3),P=e("See "),A={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L76",target:"_blank",rel:"noopener noreferrer"},w=e("OutgoingHttpHeaders"),I=a(`<p><code>.method</code></p><blockquote><p>Method used for this request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">method</span> <span class="token operator">=</span> RequestMethod<span class="token punctuation">;</span>
</code></pre></div>`,3),D=e("See "),L=e("RequestMethod"),O=a(`<p><code>.path</code></p><blockquote><p>The path of this request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">path</span> <span class="token operator">=</span> Path<span class="token punctuation">;</span>
</code></pre></div>`,3),U=e("See "),H=e("Path"),j=a(`<p><code>.query</code></p><blockquote><p>Query applied to the request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">query</span> <span class="token operator">=</span> URLSearchParams<span class="token punctuation">;</span>
</code></pre></div>`,3),J=e("See "),N={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/url.d.ts#L100",target:"_blank",rel:"noopener noreferrer"},E=e("URLSearchParams"),M=a(`<p><code>.rest</code></p><blockquote><p>The rest manager that instantiated this</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">rest</span> <span class="token operator">=</span> Rest<span class="token punctuation">;</span>
</code></pre></div><p><code>.status</code></p><blockquote><p>The status of this request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">status</span> <span class="token operator">=</span> RequestStatus<span class="token punctuation">;</span>
</code></pre></div>`,6),V=e("See "),z=e("RequestStatus"),B=t("li",null,[e("Default value is "),t("code",null,"RequestStatus.Pending")],-1),C=a(`<p><strong>get</strong> <code>.route</code></p><blockquote><p>The route of this request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">route</span> <span class="token operator">=</span> Path<span class="token punctuation">;</span>
</code></pre></div>`,3),F=e("See "),G=e("Path"),W=a(`<p><strong>get</strong> <code>.url</code></p><blockquote><p>The full URL of this request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">url</span> <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">;</span>
</code></pre></div>`,3),Q=e("See "),K={href:"https://nodejs.org/api/url.html#class-url",target:"_blank",rel:"noopener noreferrer"},X=e("URL"),Y=a(`<h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">new</span> <span class="token class-name">APIRequest</span><span class="token punctuation">(</span>rest<span class="token punctuation">,</span> path<span class="token punctuation">,</span> method<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),Z=t("thead",null,[t("tr",null,[t("th",null,"Parameter"),t("th",null,"Default"),t("th",null,"Description"),t("th",null,"Type"),t("th",null,"Required")])],-1),$=t("tr",null,[t("td",null,"rest"),t("td",null,"-"),t("td",null,"The rest that instantiated this"),t("td",null,[t("code",null,"Rest")]),t("td",null,[t("code",null,"true")])],-1),tt=t("td",null,"path",-1),et=t("td",null,"-",-1),st=t("td",null,"The path to request",-1),nt=t("code",null,"Path",-1),ot=t("td",null,[t("code",null,"true")],-1),at=t("td",null,"method",-1),lt=t("td",null,"-",-1),ct=t("td",null,"The method of the request",-1),pt=t("code",null,"RequestMethod",-1),dt=t("td",null,[t("code",null,"true")],-1),ut=t("td",null,"options",-1),rt=t("td",null,[t("code",null,"{}")],-1),it=t("td",null,"Options for this request",-1),ht=t("code",null,"RequestOptions",-1),_t=t("td",null,[t("code",null,"false")],-1),kt=t("h2",{id:"functions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#"),e(" Functions")],-1),mt=t("h3",{id:"addattachments-attachments",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#addattachments-attachments","aria-hidden":"true"},"#"),e(" addAttachments(attachments)")],-1),gt=t("blockquote",null,[t("p",null,"Add some attachments to this request")],-1),yt=t("thead",null,[t("tr",null,[t("th",null,"Parameter"),t("th",null,"Description"),t("th",null,"Type"),t("th",null,"Optional")])],-1),bt=t("td",null,"attachments",-1),ft=t("td",null,"Attachments to add",-1),qt=t("code",null,"Attachment[]",-1),vt=t("td",null,[t("code",null,"false")],-1),Rt=t("p",null,[t("strong",null,"Returns"),e(" the new request")],-1),xt=t("div",{class:"language-typescript ext-ts"},[t("pre",{class:"language-typescript"},[t("code",null,[e("APIRequest"),t("span",{class:"token punctuation"},";"),e(`
`)])])],-1),Tt=e("See "),St=e("APIRequest"),Pt=t("h3",{id:"editheaders-headers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#editheaders-headers","aria-hidden":"true"},"#"),e(" editHeaders(headers)")],-1),At=t("blockquote",null,[t("p",null,"Edit headers for this request")],-1),wt=t("thead",null,[t("tr",null,[t("th",null,"Parameter"),t("th",null,"Description"),t("th",null,"Type"),t("th",null,"Optional")])],-1),It=t("td",null,"headers",-1),Dt=t("td",null,"Headers to add/remove",-1),Lt={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L76",target:"_blank",rel:"noopener noreferrer"},Ot=t("code",null,"OutgoingHttpHeaders",-1),Ut=t("td",null,[t("code",null,"false")],-1),Ht=t("p",null,[t("strong",null,"Returns"),e(" the new request")],-1),jt=t("div",{class:"language-typescript ext-ts"},[t("pre",{class:"language-typescript"},[t("code",null,[e("APIRequest"),t("span",{class:"token punctuation"},";"),e(`
`)])])],-1),Jt=e("See "),Nt=e("APIRequest"),Et=t("h3",{id:"removeattachments-attachments",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#removeattachments-attachments","aria-hidden":"true"},"#"),e(" removeAttachments(attachments)")],-1),Mt=t("blockquote",null,[t("p",null,"Remove some attachments from this request")],-1),Vt=t("thead",null,[t("tr",null,[t("th",null,"Parameter"),t("th",null,"Description"),t("th",null,"Type"),t("th",null,"Optional")])],-1),zt=t("td",null,"attachments",-1),Bt=t("td",null,"Attachments to remove",-1),Ct={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Ft=t("code",null,"string[]",-1),Gt=t("td",null,[t("code",null,"false")],-1),Wt=t("p",null,[t("strong",null,"Returns"),e(" the new request")],-1),Qt=t("div",{class:"language-typescript ext-ts"},[t("pre",{class:"language-typescript"},[t("code",null,[e("APIRequest"),t("span",{class:"token punctuation"},";"),e(`
`)])])],-1),Kt=e("See "),Xt=e("APIRequest"),Yt=a(`<h3 id="send" tabindex="-1"><a class="header-anchor" href="#send" aria-hidden="true">#</a> send()</h3><blockquote><p>Send the request to the API</p></blockquote><p><strong>Returns</strong> a promise with the data received from the API or null if there is no data</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token builtin">Promise</span><span class="token operator">&lt;</span>Response<span class="token operator">&gt;</span>
</code></pre></div>`,4),Zt=e("See "),$t=e("Response");function te(ee,se){const n=c("RouterLink"),l=c("ExternalLinkIcon");return p(),d(u,null,[h,t("ul",null,[t("li",null,[_,s(n,{to:"/documentation/Types.html#attachment"},{default:o(()=>[k]),_:1})])]),m,t("ul",null,[t("li",null,[g,t("a",y,[b,s(l)])])]),f,t("ul",null,[t("li",null,[q,s(n,{to:"/documentation/Types.html#json"},{default:o(()=>[v]),_:1})]),t("li",null,[R,t("a",x,[T,s(l)])])]),S,t("ul",null,[t("li",null,[P,t("a",A,[w,s(l)])])]),I,t("ul",null,[t("li",null,[D,s(n,{to:"/documentation/Types.html#requestmethod"},{default:o(()=>[L]),_:1})])]),O,t("ul",null,[t("li",null,[U,s(n,{to:"/documentation/Types.html#path"},{default:o(()=>[H]),_:1})])]),j,t("ul",null,[t("li",null,[J,t("a",N,[E,s(l)])])]),M,t("ul",null,[t("li",null,[V,s(n,{to:"/documentation/Types.html#requeststatus"},{default:o(()=>[z]),_:1})]),B]),C,t("ul",null,[t("li",null,[F,s(n,{to:"/documentation/Types.html#path"},{default:o(()=>[G]),_:1})])]),W,t("ul",null,[t("li",null,[Q,t("a",K,[X,s(l)])])]),Y,t("table",null,[Z,t("tbody",null,[$,t("tr",null,[tt,et,st,t("td",null,[s(n,{to:"/documentation/Types.html#path"},{default:o(()=>[nt]),_:1})]),ot]),t("tr",null,[at,lt,ct,t("td",null,[s(n,{to:"/documentation/Types.html#requestmethod"},{default:o(()=>[pt]),_:1})]),dt]),t("tr",null,[ut,rt,it,t("td",null,[s(n,{to:"/documentation/Types.html#requestoptions"},{default:o(()=>[ht]),_:1})]),_t])])]),kt,mt,gt,t("table",null,[yt,t("tbody",null,[t("tr",null,[bt,ft,t("td",null,[s(n,{to:"/documentation/Types.html#attachment"},{default:o(()=>[qt]),_:1})]),vt])])]),Rt,xt,t("ul",null,[t("li",null,[Tt,s(n,{to:"/documentation/APIRequest.html"},{default:o(()=>[St]),_:1})])]),Pt,At,t("table",null,[wt,t("tbody",null,[t("tr",null,[It,Dt,t("td",null,[t("a",Lt,[Ot,s(l)])]),Ut])])]),Ht,jt,t("ul",null,[t("li",null,[Jt,s(n,{to:"/documentation/APIRequest.html"},{default:o(()=>[Nt]),_:1})])]),Et,Mt,t("table",null,[Vt,t("tbody",null,[t("tr",null,[zt,Bt,t("td",null,[t("a",Ct,[Ft,s(l)])]),Gt])])]),Wt,Qt,t("ul",null,[t("li",null,[Kt,s(n,{to:"/documentation/APIRequest.html"},{default:o(()=>[Xt]),_:1})])]),Yt,t("ul",null,[t("li",null,[Zt,s(n,{to:"/documentation/Types.html#response"},{default:o(()=>[$t]),_:1})])])],64)}var ae=r(i,[["render",te]]);export{ae as default};