import{_ as a,o as i,c as n,af as e}from"./chunks/framework.DPc1gj_a.js";const E=JSON.parse('{"title":"自定义首页","description":"","frontmatter":{},"headers":[],"relativePath":"商户版/自定义首页.md","filePath":"商户版/自定义首页.md"}'),l={name:"商户版/自定义首页.md"};function t(p,s,o,h,c,r){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="自定义首页" tabindex="-1">自定义首页 <a class="header-anchor" href="#自定义首页" aria-label="Permalink to &quot;自定义首页&quot;">​</a></h1><h2 id="使用模板" tabindex="-1">使用模板 <a class="header-anchor" href="#使用模板" aria-label="Permalink to &quot;使用模板&quot;">​</a></h2><ol><li><p>下载并上传到<code>项目根目录/templates/index/自己命名模板名称</code></p></li><li><ul><li>商户版后台--系统设置--基础信息</li><li>首页类型选择--自定义模板</li><li>首页模板--填写 自己命名模板名称</li></ul></li></ol><hr><p>若没有样式，可能是忘了关键字替换</p><ol><li><p>在宝塔中打开index.html</p></li><li><p>ctrl+h替换</p><ul><li>第一行--<code>assets</code></li><li>第二行--<code>\${.templateAssets}</code></li><li>全局替换（点一次就行了）</li></ul></li></ol><h2 id="开发模板" tabindex="-1">开发模板 <a class="header-anchor" href="#开发模板" aria-label="Permalink to &quot;开发模板&quot;">​</a></h2><h3 id="模板结构" tabindex="-1">模板结构： <a class="header-anchor" href="#模板结构" aria-label="Permalink to &quot;模板结构：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- assets</span></span>
<span class="line"><span>    - css           // 样式文件</span></span>
<span class="line"><span>    - images           // 图片文件</span></span>
<span class="line"><span>    - js            // js文件</span></span>
<span class="line"><span>    - 其他静态文件   // 如字体文件等</span></span>
<span class="line"><span>- index.html        //首页html</span></span>
<span class="line"><span>- 其他页面html文件   //如about.html等</span></span></code></pre></div><h3 id="页内常用配置项" tabindex="-1">页内常用配置项 <a class="header-anchor" href="#页内常用配置项" aria-label="Permalink to &quot;页内常用配置项&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_title&quot; | get_option}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_description&quot; | get_option}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站关键字</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_keywords&quot; | get_option}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站底部（备案号）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_copyright&quot; | get_option}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站favicon图标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_favicon&quot; | get_option}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站logo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_logo&quot; | get_option}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站联系QQ</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_service_qq&quot; | get_option}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">网站联系邮箱</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${&quot;web_service_email&quot; | get_option}</span></span></code></pre></div>`,11)]))}const k=a(l,[["render",t]]);export{E as __pageData,k as default};
