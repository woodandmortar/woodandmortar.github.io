

if(document.getElementById)
document.write('<style type="text/css">.fins {float:left;display:none;}#zero {display:block;}<\/style>');

function reveal(det){
if(!document.getElementById) return;
if (!document.getElementsByClassName){
document.getElementsByClassName = function(cn){
cn = cn.replace(/ +/g, ' ').split(' ');
var ar = [], testname = function(n){
for (var re, i = cn.length - 1; i > -1; --i){
re = new RegExp('(^|\W)' + cn[i] + '(\W|$)');
if(!re.test(n)) return false;
}
return true;
}
for(var d = document.all || document.getElementsByTagName('*'), i = 0; i < d.length; ++i)
if(testname(d[i].className))
ar[ar.length] = d[i];
return ar;
};
document.getElementsByClassName.spoof = true;
}
for (var d = document.getElementsByClassName('fins'), i = d.length - 1; i > -1; --i)
d[i].style.display = 'none';
document.getElementById(det).style.display = 'block';
if (document.getElementsByClassName.spoof)
document.getElementsByClassName.spoof = document.getElementsByClassName = null;
}
