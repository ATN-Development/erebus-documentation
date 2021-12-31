import{r as o,o as c,c as r,a as n,b as e,w as l,F as i,e as t,d as s}from"./app.8ddb4509.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},k=t(`<h1 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h1><h2 id="typings" tabindex="-1"><a class="header-anchor" href="#typings" aria-hidden="true">#</a> Typings</h2><h3 id="advancedheartbeatinfo-extends-heartbeatinfo" tabindex="-1"><a class="header-anchor" href="#advancedheartbeatinfo-extends-heartbeatinfo" aria-hidden="true">#</a> AdvancedHeartbeatInfo extends <a href="#HeartbeatInfo">HeartbeatInfo</a></h3><blockquote><p>Advanced information for a heartbeat</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AdvancedHeartbeatInfo</span> <span class="token punctuation">{</span>
  intervalTime<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  interval<span class="token operator">:</span> NodeJS<span class="token punctuation">.</span>Timeout <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),h=s("See "),m={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},b=s("number"),_=s("See "),g={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/globals.d.ts#L547",target:"_blank",rel:"noopener noreferrer"},f=s("NodeJS.Timeout"),y=s("See "),v={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",target:"_blank",rel:"noopener noreferrer"},S=s("null"),q=t(`<h3 id="anyguildchannel" tabindex="-1"><a class="header-anchor" href="#anyguildchannel" aria-hidden="true">#</a> AnyGuildChannel</h3><blockquote><p>Type definition for all guild channel classes</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AnyGuildChannel</span> <span class="token operator">=</span>
  <span class="token operator">|</span> NewsChannel
  <span class="token operator">|</span> StageChannel
  <span class="token operator">|</span> StoreChannel
  <span class="token operator">|</span> TextChannel
  <span class="token operator">|</span> VoiceChannel<span class="token punctuation">;</span>
</code></pre></div><h3 id="attachment" tabindex="-1"><a class="header-anchor" href="#attachment" aria-hidden="true">#</a> Attachment</h3><blockquote><p>An attachment to send to the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Attachment</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * The name of this attachment
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The data for this buffer
   */</span>
  data<span class="token operator">:</span> Buffer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),T=s("See "),x={href:"https://nodejs.org/api/buffer.html#buffer",target:"_blank",rel:"noopener noreferrer"},R=s("Buffer"),I=s("See "),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},A=s("string"),P=t(`<h3 id="clientoptions" tabindex="-1"><a class="header-anchor" href="#clientoptions" aria-hidden="true">#</a> ClientOptions</h3><blockquote><p>Options to instantiate a client</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ClientOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * The token of this client
   * This defaults to \`p<wbr>rocess.env.DISCORD_TOKEN\` if none is provided
   */</span>
  token<span class="token operator">?</span><span class="token operator">:</span> Token<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Total number of members where the gateway will stop sending offline members in the guild member list
   */</span>
  largeThreshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Intents to use for this client
   */</span>
  intents<span class="token operator">:</span> Intents<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * An optional user agent to add in the requests to the API
   * <span class="token keyword">@see</span> https://discord.com/developers/docs/reference#user-agent
   */</span>
  userAgent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),O=s("See "),J={href:"https://discord.com/developers/docs/reference#user-agent",target:"_blank",rel:"noopener noreferrer"},j=s("Discord's API User Agent documentation"),H=n("li",null,[s("See "),n("a",{href:"#intents"},"Intents")],-1),C=s("See "),U={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},D=s("number"),G=s("See "),W={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},z=s("string"),N=n("li",null,[s("See "),n("a",{href:"#token"},"Token")],-1),L=t(`<h3 id="clientstatus" tabindex="-1"><a class="header-anchor" href="#clientstatus" aria-hidden="true">#</a> ClientStatus</h3><blockquote><p>The state of the client connection</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> ClientStatus <span class="token punctuation">{</span>
  Disconnected<span class="token punctuation">,</span>
  Connecting<span class="token punctuation">,</span>
  Connected<span class="token punctuation">,</span>
  Reconnecting<span class="token punctuation">,</span>
  Resuming<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="heartbeatinfo" tabindex="-1"><a class="header-anchor" href="#heartbeatinfo" aria-hidden="true">#</a> HeartbeatInfo</h3><blockquote><p>Data about an heartbeat</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">HeartbeatInfo</span> <span class="token punctuation">{</span>
  first<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  acknowledged<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),M=s("See "),E={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"},B=s("boolean"),V=t(`<h3 id="intents" tabindex="-1"><a class="header-anchor" href="#intents" aria-hidden="true">#</a> Intents</h3><blockquote><p>Intents to send to the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Intents <span class="token punctuation">{</span>
  guilds <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  guildMembers <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  guildBans <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>
  guildEmojis <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span>
  guildIntegrations <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">,</span>
  guildWebhooks <span class="token operator">=</span> <span class="token number">32</span><span class="token punctuation">,</span>
  guildInvites <span class="token operator">=</span> <span class="token number">64</span><span class="token punctuation">,</span>
  guildVoiceStates <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">,</span>
  guildPresences <span class="token operator">=</span> <span class="token number">256</span><span class="token punctuation">,</span>
  guildMessages <span class="token operator">=</span> <span class="token number">512</span><span class="token punctuation">,</span>
  guildMessageReactions <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">,</span>
  guildMessageTyping <span class="token operator">=</span> <span class="token number">2048</span><span class="token punctuation">,</span>
  directMessages <span class="token operator">=</span> <span class="token number">4096</span><span class="token punctuation">,</span>
  directMessageReactions <span class="token operator">=</span> <span class="token number">8192</span><span class="token punctuation">,</span>
  directMessageTyping <span class="token operator">=</span> <span class="token number">16384</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> Json</h3><blockquote><p>Any JSON data</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Json</span> <span class="token operator">=</span> Json<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>property<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Json <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h3><blockquote><p>The path for a request to the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Path</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><h3 id="ratelimithandler" tabindex="-1"><a class="header-anchor" href="#ratelimithandler" aria-hidden="true">#</a> RateLimitHandler</h3><blockquote><p>Data about ratelimits related to a bucket</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RateLimitHandler</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * A unique string denoting the rate limit being encountered
   */</span>
  bucket<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The number of requests that can be made
   */</span>
  limit<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The number of remaining requests that can be made
   */</span>
  remaining<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Epoch time (seconds) at which the rate limit resets
   */</span>
  reset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Routes that share the same bucket
   */</span>
  routes<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>RequestMethod<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,12),$=s("See "),F={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},K=s("number"),Q=n("li",null,[s("See "),n("a",{href:"#path"},"Path")],-1),X=n("li",null,[s("See "),n("a",{href:"#requestmethod"},"RequestMethod")],-1),Y=s("See "),Z={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},nn=s("string"),sn=t(`<h3 id="requestmethod" tabindex="-1"><a class="header-anchor" href="#requestmethod" aria-hidden="true">#</a> RequestMethod</h3><blockquote><p>The method of a request to the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">RequestMethod</span> <span class="token operator">=</span> <span class="token string">&quot;DELETE&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;GET&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;PATCH&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;POST&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="requestoptions" tabindex="-1"><a class="header-anchor" href="#requestoptions" aria-hidden="true">#</a> RequestOptions</h3><blockquote><p>The options for this request</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RequestOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * The base url for this request
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The query of this request
   */</span>
  query<span class="token operator">?</span><span class="token operator">:</span> URLSearchParams<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Headers to be sent for this request
   */</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> OutgoingHttpHeaders<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Attachments to add to the body of this request
   */</span>
  attachments<span class="token operator">?</span><span class="token operator">:</span> Attachment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The JSON body of this request
   */</span>
  body<span class="token operator">?</span><span class="token operator">:</span> Json<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),en=n("li",null,[s("See "),n("a",{href:"#attachment"},"Attachment")],-1),an=n("li",null,[s("See "),n("a",{href:"#json"},"Json")],-1),tn=s("See "),on={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L76",target:"_blank",rel:"noopener noreferrer"},pn=s("OutgoingHttpHeaders"),cn=s("See "),rn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},ln=s("string"),un=s("See "),dn={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/url.d.ts#L100",target:"_blank",rel:"noopener noreferrer"},kn=s("URLSearchParams"),hn=t(`<h3 id="requeststatus" tabindex="-1"><a class="header-anchor" href="#requeststatus" aria-hidden="true">#</a> RequestStatus</h3><blockquote><p>The status of a request to the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> RequestStatus <span class="token punctuation">{</span>
  Pending<span class="token punctuation">,</span>
  InProgress<span class="token punctuation">,</span>
  Finished<span class="token punctuation">,</span>
  Failed<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h3><blockquote><p>A response received from the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Response</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * The received data
   */</span>
  data<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The status code received for this request
   */</span>
  statusCode<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Headers received from the API
   */</span>
  headers<span class="token operator">:</span> IncomingHttpHeaders<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The status message received for this request
   */</span>
  status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The APIRequest object that instantiated this
   */</span>
  request<span class="token operator">:</span> APIRequest<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),mn=s("See "),bn=s("APIRequest"),_n=s("See "),gn={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L7",target:"_blank",rel:"noopener noreferrer"},fn=s("IncomingHttpHeaders"),yn=s("See "),vn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",target:"_blank",rel:"noopener noreferrer"},Sn=s("null"),qn=s("See "),Tn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},xn=s("number"),Rn=s("See "),In={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},wn=s("string"),An=t(`<h3 id="snowflake" tabindex="-1"><a class="header-anchor" href="#snowflake" aria-hidden="true">#</a> Snowflake</h3><blockquote><p>Represents a DIscord&#39;s snowflake</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Snowflake</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div>`,3),Pn=s("See "),On={href:"https://discord.com/developers/docs/reference#snowflakes",target:"_blank",rel:"noopener noreferrer"},Jn=s("Discord API Snowflakes Reference"),jn=s("See "),Hn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Cn=s("string"),Un=t('<h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h3><blockquote><p>A valid token for the API</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Token</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre></div>',3),Dn=s("See "),Gn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Wn=s("string");function zn(Nn,Ln){const a=o("ExternalLinkIcon"),p=o("RouterLink");return c(),r(i,null,[k,n("ul",null,[n("li",null,[h,n("a",m,[b,e(a)])]),n("li",null,[_,n("a",g,[f,e(a)])]),n("li",null,[y,n("a",v,[S,e(a)])])]),q,n("ul",null,[n("li",null,[T,n("a",x,[R,e(a)])]),n("li",null,[I,n("a",w,[A,e(a)])])]),P,n("ul",null,[n("li",null,[O,n("a",J,[j,e(a)])]),H,n("li",null,[C,n("a",U,[D,e(a)])]),n("li",null,[G,n("a",W,[z,e(a)])]),N]),L,n("ul",null,[n("li",null,[M,n("a",E,[B,e(a)])])]),V,n("ul",null,[n("li",null,[$,n("a",F,[K,e(a)])]),Q,X,n("li",null,[Y,n("a",Z,[nn,e(a)])])]),sn,n("ul",null,[en,an,n("li",null,[tn,n("a",on,[pn,e(a)])]),n("li",null,[cn,n("a",rn,[ln,e(a)])]),n("li",null,[un,n("a",dn,[kn,e(a)])])]),hn,n("ul",null,[n("li",null,[mn,e(p,{to:"/documentation/APIRequest.html"},{default:l(()=>[bn]),_:1})]),n("li",null,[_n,n("a",gn,[fn,e(a)])]),n("li",null,[yn,n("a",vn,[Sn,e(a)])]),n("li",null,[qn,n("a",Tn,[xn,e(a)])]),n("li",null,[Rn,n("a",In,[wn,e(a)])])]),An,n("ul",null,[n("li",null,[Pn,n("a",On,[Jn,e(a)])]),n("li",null,[jn,n("a",Hn,[Cn,e(a)])])]),Un,n("ul",null,[n("li",null,[Dn,n("a",Gn,[Wn,e(a)])])])],64)}var Bn=u(d,[["render",zn]]);export{Bn as default};
