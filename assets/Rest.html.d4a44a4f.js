import{r as c,o as l,c as r,a as e,b as t,w as p,F as i,e as n,d as s}from"./app.8ddb4509.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},_=n(`<h1 id="rest" tabindex="-1"><a class="header-anchor" href="#rest" aria-hidden="true">#</a> Rest</h1><blockquote><p>A rest manager for the client</p></blockquote><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><p><code>.client</code></p><blockquote><p>The client that instantiated this</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">client</span> <span class="token operator">=</span> Client<span class="token punctuation">;</span>
</code></pre></div>`,6),k=s("See "),h=s("Client"),b=n(`<p><code>.invalidRequests</code></p><blockquote><p>Number of invalid requests done in the last 10 minutes</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">invalidRequests</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre></div>`,3),m=s("See "),g={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},q=s("number"),y=n(`<p><code>.invalidRequestsResetAt</code></p><blockquote><p>When the invalid requests were last reset</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">invalidRequestsResetAt</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre></div>`,3),v=s("See "),f={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},R=s("number"),S=n(`<p><code>.queue</code></p><blockquote><p>A queue for the requests</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">queue</span> <span class="token operator">=</span> AsyncQueue<span class="token punctuation">;</span>
</code></pre></div>`,3),x=s("See "),w={href:"https://www.sapphirejs.dev/docs/Documentation/api-utilities/classes/sapphire_async_queue.AsyncQueue",target:"_blank",rel:"noopener noreferrer"},A=s("AsyncQueue"),N=n(`<p><code>.rateLimits</code></p><blockquote><p>An array of all the rate limit data received from the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">rateLimits</span> <span class="token operator">=</span> RateLimitHandler<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div>`,3),P=s("See "),L=s("RateLimitHandler"),j=n(`<p><code>.requests</code></p><blockquote><p>All requests that have been made so far</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">requests</span> <span class="token operator">=</span> APIRequest<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div>`,3),I=s("See "),W=s("APIRequest"),C=n(`<p><code>.requestsPerSec</code></p><blockquote><p>Number of requests done in the last second</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">requestsPerSec</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre></div>`,3),z=s("See "),G={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},J=s("number"),O=n(`<p><code>.requestsPerSecResetAt</code></p><blockquote><p>When the requests per second were last reset</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">requestPerSecResetAt</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre></div>`,3),U=s("See "),V={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},B=s("number");function E(Q,T){const o=c("RouterLink"),a=c("ExternalLinkIcon");return l(),r(i,null,[_,e("ul",null,[e("li",null,[k,t(o,{to:"/documentation/Client.html"},{default:p(()=>[h]),_:1})])]),b,e("ul",null,[e("li",null,[m,e("a",g,[q,t(a)])])]),y,e("ul",null,[e("li",null,[v,e("a",f,[R,t(a)])])]),S,e("ul",null,[e("li",null,[x,e("a",w,[A,t(a)])])]),N,e("ul",null,[e("li",null,[P,t(o,{to:"/documentation/Types.html#ratelimithandler"},{default:p(()=>[L]),_:1})])]),j,e("ul",null,[e("li",null,[I,t(o,{to:"/documentation/APIRequest.html"},{default:p(()=>[W]),_:1})])]),C,e("ul",null,[e("li",null,[z,e("a",G,[J,t(a)])])]),O,e("ul",null,[e("li",null,[U,e("a",V,[B,t(a)])])])],64)}var D=u(d,[["render",E]]);export{D as default};
