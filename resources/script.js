// // domain = "samwell9624.xyz";
// // subdomain ={
// //   "www",
// //     "blog",
// //
// // }
//
// // // csp of the website
// // const csp = {
//     // default-src 'none',
//     // script-src 'none',
//     // connect-src 'none',
//     // img-src 'none',
//     // style-src 'none',
//     // font-src 'none',
//     // object-src 'none',
//     // media-src 'none',
//     // frame-src 'none',
//     // worker-src 'none',
//     // child-src 'none',
//     // form-action 'none',
//     // frame-ancestors 'none',
//     // base-uri 'none',
//     // manifest-src 'none',
//     // prefetch-src 'none',
//     // plugin-types 'none',
//     // sandbox 'none',
//     // disown-opener;
//     // reflected-xss block;
//     // require-sri-for script style;
//     // upgrade-insecure-requests;
//     // block-all-mixed-content;
//     // report-uri https://www.samwell9624.xyz/csp-report;
//     // report-to csp-endpoint;
//     // }
// const cors = [
//     'github.com',
//     'cloudflare.com',
//     'samwell9624.xyz',
//     'www.samwell9624.xyz',
//     'blog.samwell9624.xyz',
//     'api.samwell9624.xyz',
//     'analytics.samwell9624.xyz',
//     'api.github.com',
//     'api.cloudflare.com',
//     'static.cloudflareinsights.com',
//     'cdnjs.cloudflare.com',
//     'youtube.com',
//     'www.youtube.com',
//     'google.com',
//     'www.google.com',
//     'google-analytics.com',
//     'www.google-analytics.com',
//     'googleapis.com',
//     'www.googleapis.com',
//     'gstatic.com',
//     'www.gstatic.com',
//     'googleusercontent.com',
//     'www.googleusercontent.com',
//     'googleadservices.com',
//     'www.googleadservices.com',
//     'googletagmanager.com',
//     'www.googletagmanager.com',
//     'googlesyndication.com',
//     'www.googlesyndication.com',
//     'google-analytics.com',
//     'www.google-analytics.com',
//     'googleadservices.com',
//     'www.googleadservices.com',
// ];
//
// var cors == cors;
//
//
// // 設置 Content Security Policy
// const csp = "default-src 'self'; connect-src github.com cloudflare.com ";
// const meta = document.createElement('meta');
// meta.httpEquiv = 'Content-Security-Policy';
// meta.content = csp;
// document.head.appendChild(meta);
//
// // 設置 Subresource Integrity
// const script = document.createElement('script');
// script.src = 'https://samwell9624.xyz/example.js';
// script.integrity = 'sha256-ABCDEFG1234567890';
// document.head.appendChild(script);
//
// // 防止跨站腳本攻擊
// const userInput = '<script>alert("hello world")</script>';
// const encodedInput = encodeURIComponent(userInput);
// const sanitizedInput = encodedInput.replace(/%3C/g, '&lt;').replace(/%3E/g, '&gt;');
// document.write(sanitizedInput);
//
// // 防止 Clickjacking 攻擊
// const xFrameOptions = 'SAMEORIGIN';
// const frame = document.createElement('iframe');
// frame.src = 'https://samwell9624.xyz';
// frame.setAttribute('sandbox', 'allow-same-origin');
// frame.setAttribute('allow-top-navigation', 'true');
// frame.setAttribute('X-Frame-Options', xFrameOptions);
// document.body.appendChild(frame);
//
// // 設置允許跨域的網域和主機
// const cors = [
//     'github.com',
//     'cloudflare.com',
//     'samwell9624.xyz',
//     'www.samwell9624.xyz',
//     'blog.samwell9624.xyz',
//     'api.samwell9624.xyz',
//     'analytics.samwell9624.xyz',
//     'api.github.com',
//     'api.cloudflare.com',
//     'static.cloudflareinsights.com',
//     'cdnjs.cloudflare.com',
//     'youtube.com',
//     'www.youtube.com',
//     'google.com',
//     'www.google.com',
//     'google-analytics.com',
//     'www.google-analytics.com',
//     'googleapis.com',
//     'www.googleapis.com',
//     'gstatic.com',
//     'www.gstatic.com',
//     'googleusercontent.com',
//     'www.googleusercontent.com',
//     'googleadservices.com',
//     'www.googleadservices.com',
//     'googletagmanager.com',
//     'www.googletagmanager.com',
//     'googlesyndication.com',
//     'www.googlesyndication.com',
//     'google-analytics.com',
//     'www.google-analytics.com',
//     'googleadservices.com',
//     'www.googleadservices.com',
// ];
//
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://samwell9624.xyz/data.json', true);
// xhr.setRequestHeader('Access-Control-Allow-Origin', cors);
// xhr.send();
//
// // 設置 Referrer Policy
// const referrerPolicy = 'no-referrer';
// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = 'https://samwell9624.xyz/style.css';
// link.setAttribute('referrerPolicy', referrerPolicy);
// document.head.appendChild(link);
//
// // 設置 XSS 報告
// const reportURI = 'https://samwell9624.xyz/report';
// const xxsMeta = document.createElement('meta');
// xxsMeta.httpEquiv = 'Content-Security-Policy';
// xxsMeta.content = `script-src 'self'; report-uri ${reportURI}`;
// document.head.appendChild(meta);
//
// // cloudflare analytics script or another script
// const staticscript = document.createElement('script');
// staticscript.src = 'https://static.cloudflareinsights.com/beacon.min.js';
// staticscript.setAttribute('data-cf-beacon', '{"token": "1234567890abcdef"}');
// document.head.appendChild(staticscript);
//
// // http header query drops all http headers from 127.0.0.1 to avoid 2FA bypass
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://127.0.0.1', true);
// xhr.onreadystatechange = function() {
//     if (this.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
//         const headers = xhr.getAllResponseHeaders().toLowerCase();
//         if (headers.indexOf('x-forwarded-for: 127.0.0.1') !== -1) {
//             xhr.abort();
//         }
//     }
// };
// xhr.send();
//
// // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
// // integrity='sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=='
// // crossorigin='anonymous';
//
// // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossOrigin="anonymous"></script>
