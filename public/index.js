(()=>{"use strict";var t={607:t=>{var e=window.matchMedia("(prefers-color-scheme: dark)"),n={init:function(){this.get(),this.watch()},watch:function(){e.addEventListener("change",this.get,!1)},teardown:function(){e.removeEventListener("change",this.get,!1)},get:function(){var t=e.matches?"dark":"light",n=new CustomEvent("colorSchemeUpdated",{detail:{theme:t}});window.dispatchEvent(n)}};t.exports=n}},e={};!function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(607)})();