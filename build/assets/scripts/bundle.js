(()=>{var e={825:e=>{const n=document.querySelectorAll("#slides .slide"),t=document.getElementById("next"),l=document.getElementById("previous"),o=document.querySelectorAll(".controls");let c=0;function s(e){n[c].className="slide",c=(e+n.length)%n.length,n[c].className="slide showing"}e.exports=function(){0!==n.length&&(t.onclick=function(){s(c+1)},l.onclick=function(){s(c-1)},function(){for(var e=0;e<o.length;e++)o[e].style.display="inline-block"}())}}},n={};!function t(l){var o=n[l];return void 0!==o||(o=n[l]={exports:{}},e[l](o,o.exports,t)),o.exports}(825)()})();