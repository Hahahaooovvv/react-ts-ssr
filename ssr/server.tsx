import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import assetsMainfest from "../build/asset-manifest.json";
// 按需写入文件后缀
require("asset-require-hook")({
  extensions: ["svg", "css", "less", "jpg", "png", "gif"],
});
// eslint-disable-next-line import/first
import AppComponent from "../src/App";

const app = express();

// 托管静态文件
app.use("/assets", express.static("../build"));
app.use("/static/media", express.static("../build/static/media"));


app.get("/*", (req, res) => {
  const _html = `<!doctype html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8" />
      <!-- 这儿 -->
      <link rel="icon" href="http://localhost:8081/assets/favicon.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <!-- 这儿 -->
      <link rel="apple-touch-icon" href="http://localhost:8081/assets/logo192.png" />
      <!-- 这儿 -->
      <link rel="manifest" href="http://localhost:8081/assets/manifest.json" />
      <title>React App</title>
      <!-- 这儿 -->
      <link href="http://localhost:8081/assets/${assetsMainfest.files["main.css"]}" rel="stylesheet">
  </head>
  
  <body><noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
      <!-- 这儿 -->
        ${ReactDOMServer.renderToString(<AppComponent />)}
      </div>
      <script>!function (e) { function r(r) { for (var n, l, a = r[0], f = r[1], i = r[2], p = 0, s = []; p < a.length; p++)l = a[p], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0; for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]); for (c && c(r); s.length;)s.shift()(); return u.push.apply(u, i || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, a = 1; a < t.length; a++) { var f = t[a]; 0 !== o[f] && (n = !1) } n && (u.splice(r--, 1), e = l(l.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function l(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports } l.m = e, l.c = n, l.d = function (e, r, t) { l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, l.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, l.t = function (e, r) { if (1 & r && (e = l(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) l.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, l.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return l.d(r, "a", r), r }, l.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, l.p = "/"; var a = this["webpackJsonpreact-ts-ssr"] = this["webpackJsonpreact-ts-ssr"] || [], f = a.push.bind(a); a.push = r, a = a.slice(); for (var i = 0; i < a.length; i++)r(a[i]); var c = f; t() }([])</script>
      <!-- 这儿 -->
      <script src="http://localhost:8081/assets/${assetsMainfest.files["static/js/2.cd2ce6f0.chunk.js"]}"></script>
      <!-- 这儿 -->
      <script src="http://localhost:8081/assets/${assetsMainfest.files["main.js"]}"></script>
  </body>
  
  </html>`;
  /// 修改这儿
  res.send(_html);
});


app.listen(8081);
