(()=>{"use strict";var e={5167:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addLangs=t.langs=t.alphabetTypes=t.worksheetUrl=t.dictionaryUrlAdd=t.dictionaryUrl=void 0,t.dictionaryUrl="https://docs.google.com/spreadsheets/u/0/d/1N79e_yVHDo-d026HljueuKJlAAdeELAiPzdFzdBuKbY/export?format=tsv",t.dictionaryUrlAdd="https://docs.google.com/spreadsheets/u/2/d/1N79e_yVHDo-d026HljueuKJlAAdeELAiPzdFzdBuKbY/export?format=tsv&id=1N79e_yVHDo-d026HljueuKJlAAdeELAiPzdFzdBuKbY&gid=2005431854",t.worksheetUrl="https://docs.google.com/spreadsheets/d/1N79e_yVHDo-d026HljueuKJlAAdeELAiPzdFzdBuKbY",t.alphabetTypes=[{name:"latin",value:"latin"},{name:"cyrillic",value:"cyrillic"},{name:"glagolitic",value:"glagolitic"}],t.langs=["ru","be","uk","pl","cs","sk","sl","hr","sr","mk","bg"],t.addLangs=["de","nl","eo","cu","csb","dsb","hsb","ia","es","pt","fr","it","he","da"]},6970:function(e,t,n){var s=this&&this.__spreadArray||function(e,t){for(var n=0,s=t.length,r=e.length;n<s;n++,r++)e[r]=t[n];return e};Object.defineProperty(t,"__esModule",{value:!0});var r=n(5167),a="interslavic-dictionary",d=s(s(["index.html","data/basic.txt","data/translateStatistic.json"],r.addLangs.map((function(e){return"data/"+e+".txt"}))),["manifest.json","grammarComponent.js","index.js","sw.js","styles/grammarComponent.css","styles/index.css"]);self.addEventListener("install",(function(e){e.waitUntil(caches.open(a).then((function(e){return e.addAll(d)})))})),self.addEventListener("activate",(function(e){})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request,{ignoreSearch:-1!=e.request.url.indexOf("?")}).then((function(t){var n,s;return t?(n=new Date(t.headers.get("last-modified")))&&Date.now()-n.getTime()>6e5?(s=e.request.clone(),fetch(s).then((function(n){return n&&200===n.status?(caches.open(a).then((function(t){return t.put(e.request,n)})),n.clone()):t})).catch((function(){return t}))):t:fetch(e.request)})))}))}},t={};!function n(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,n),a.exports}(6970)})();