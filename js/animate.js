

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


function randomize(collection) {
  var randomNumber = Math.floor(Math.random() * collection.length);
  return collection[randomNumber]
}



function confetti() {
  var $confettiItems = $('<div class="confetti"></div>'),
  colors = [
      '#E75624',
      '#E9128C'
  ],
  height = 6.6,
  width = 6.6;

  var scale, $confettiItem;


  for(var i=0; i<80; i++) {
    scale = Math.random() * 1.75 + 2;
    $confettiItem = $('<svg class=\'confetti-item\' width=\'' + width * scale + '\' height=\'' + height * scale + '\' viewbox=\'0 0 ' + width + ' ' + height + '\'>\n  <use transform=\'rotate(' + Math.random() * 360 + ', ' + width / 2 + ', ' + height / 2 + ')\' xlink:href=\'#svg-confetti\' />\n</svg>');
    $confettiItem.css({
      'animation': Math.random() + 2 + 's ' + Math.random() * 2 + 's confetti-fall ease-in both',
      'color': randomize(colors),
      'left': Math.random() * 100 + 'vw'
    });
    $confettiItems.append($confettiItem);
  }
  $('body').append($confettiItems)
}


var cnt=document.getElementById("vTime");
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
var waterLevel
interval=setInterval(function(){
  percent ++;
  cnt.innerHTML = percent;
  water.style.transform='translate(0'+','+(100-((percent)/10))+'%)';
  if(percent==1000){
    clearInterval(interval);
  }

document.getElementById('vText').innerText = 'translate(0'+','+(100-((percent)/10))+'%)';
},100);
