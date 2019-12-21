console.clear();

const totalSize = 400,
o = totalSize / 2, // origin
ballSize = totalSize / 2;


const mouth = document.getElementById('mouth');

const moods = {
  ooh: {
    y: 280,
    w: 20,
    wTop: 10,
    wBottom: 12,
    h1: 0,
    h1a: 15,
    h2: 30,
    h2a: 45,
    h3: 60 },

  smile: {
    h1: 102,
    h1a: 43,
    h2: 21,
    h2a: 37,
    h3: 99,
    w: 133,
    wBottom: 88,
    wTop: 88,
    y: 228 },

  bigSmile: {
    y: 220,
    w: 150,
    wTop: 70,
    wBottom: 90,
    h1: 40,
    h1a: 0,
    h2: 50,
    h2a: 100,
    h3: 140 },

  gh: {
    y: 270,
    w: 100,
    wTop: 20,
    wBottom: 50,
    h1: 30,
    h1a: 10,
    h2: 45,
    h2a: 80,
    h3: 50 },

  ggg: {
    y: 240,
    w: 130,
    wTop: 50,
    wBottom: 50,
    h1: 30,
    h1a: 10,
    h2: 45,
    h2a: 80,
    h3: 60 },

  sad: {
    y: 250,
    w: 130,
    wTop: 30,
    wBottom: 70,
    h1: 40,
    h1a: 50,
    h2: 80,
    h2a: 120,
    h3: 60 },

  what: {
    h1: 38,
    h1a: 36,
    h2: 42,
    h2a: 52,
    h3: 44,
    w: 85,
    wBottom: 70,
    wTop: 30,
    y: 245 },

  custom: {
    y: 250,
    w: 130,
    wTop: 30,
    wBottom: 70,
    h1: 40,
    h1a: 50,
    h2: 80,
    h2a: 120,
    h3: 60 } };




function makeMouth(c) {
  const p = {
    a: `${o} ${c.y + c.h1}`,
    a1: `${o - c.wTop} ${c.y + c.h1}`,
    a2: `${o + c.wTop} ${c.y + c.h1}`,
    b: `${o + c.w} ${c.y + c.h2}`,
    b1: `${o + c.w} ${c.y + c.h1a}`,
    b2: `${o + c.w} ${c.y + c.h2a}`,
    c: `${o} ${c.y + c.h3}`,
    c1: `${o + c.wBottom} ${c.y + c.h3}`,
    c2: `${o - c.wBottom} ${c.y + c.h3}`,
    d: `${o - c.w} ${c.y + c.h2}`,
    d1: `${o - c.w} ${c.y + c.h2a}`,
    d2: `${o - c.w} ${c.y + c.h1a}` };

  return [
  `M ${p.a}`,
  `C ${p.a2} ${p.b1} ${p.b}`,
  `C ${p.b2} ${p.c1} ${p.c} `,
  `C ${p.c2} ${p.d1} ${p.d}`,
  `C ${p.d2} ${p.a1} ${p.a}`].
  join('');
}

mouth.setAttribute('d', makeMouth(moods.what));



const timeline = new TimelineMax({
  repeat: 60 });

timeline.add(TweenMax.to("#mouth", .7, { ease: Elastic.easeOut.config(1, 0.6), attr: { d: makeMouth(moods.bigSmile) } }));
// timeline.add( TweenMax.to("#mouth", .6, { attr: { d: makeMouth(moods.smile) } }) );
timeline.add(TweenMax.to("#mouth", .6, { ease: Elastic.easeOut.config(1, 0.9), attr: { d: makeMouth(moods.ooh) } }));
timeline.add(TweenMax.to("#mouth", .7, { ease: Elastic.easeOut.config(1, 0.6), attr: { d: makeMouth(moods.ggg) } }));
timeline.add(TweenMax.to("#mouth", .7, { ease: Elastic.easeOut.config(1, 0.6), attr: { d: makeMouth(moods.gh) } }));

timeline.add(TweenMax.to("#mouth", 1.7, { ease: Elastic.easeOut.config(1, 0.6), attr: { d: makeMouth(moods.what) } }));
timeline.timeScale(.5);
//timeline.stop();


mouth.addEventListener('click', function () {
  // timeline.stop();
});

document.querySelectorAll('input').forEach(item => {
  item.addEventListener('change', function (e) {
    timeline.stop();
    item.title = item.value;
    moods.custom[item.name] = parseInt(item.value);
    console.log(moods.custom);
    mouth.setAttribute('d', makeMouth(moods.custom));
  });
});
