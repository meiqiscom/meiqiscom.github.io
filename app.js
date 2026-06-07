function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;");}
function card(key,h){var L=window.LABELS||{},F=window.FIELDS||[];
  if(!h) return '<div class="card"><span class="code">'+esc(key)+'</span> '+esc(L.miss||"")+'</div>';
  var p='<div class="card"><span class="code">'+esc(h.name||key)+'</span> <small>'+esc(h.cat||"")+'</small>';
  for(var i=0;i<F.length;i++){var f=F[i]; if(h[f[0]]) p+='<div class="label">'+esc(f[1])+'</div><div>'+esc(h[f[0]])+'</div>';}
  return p+'</div>';}
function find(raw){var C=window.CODES||{}; raw=(raw||"").trim().toLowerCase(); if(!raw)return null;
  for(var k in C){if(k.toLowerCase()===raw)return[k,C[k]];}
  for(var k2 in C){var hay=(k2+" "+(C[k2].alias||"")+" "+(C[k2].name||"")).toLowerCase();
    if(hay.indexOf(raw)>=0)return[k2,C[k2]];}
  return[raw,null];}
function go(){var raw=document.getElementById("q").value,o=document.getElementById("out");
  if(!raw.trim()){o.innerHTML="";return;}var r=find(raw);o.innerHTML=card(r[0],r[1]);}
function table(){var C=window.CODES||{},H=window.THEAD||[];
  var rows=Object.keys(C).map(function(k){var h=C[k];
    return '<tr><td class="code">'+esc(h.name||k)+'</td><td>'+esc(h.cat||"")+'</td><td>'+esc(h.official||"-")+'</td><td>'+esc(h.cause||"-")+'</td></tr>';}).join("");
  document.getElementById("tbl").innerHTML='<tr><th>'+H.join("</th><th>")+'</th></tr>'+rows;}
document.getElementById("go").addEventListener("click",go);
document.getElementById("q").addEventListener("keydown",function(e){if(e.key==="Enter")go();});
table();
