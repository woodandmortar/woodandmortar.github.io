const heart = '<svg viewBox="0 0 100.1 86.8"> <path d="M85.3,2.7c-13-5.8-29.5,0-35.3,12.2C44.3,1.9,27-3.8,14.8,2.7C1.2,9.1-5.3,25,5.5,44.4C13.4,58,27,68.1,50,86.8 C73.8,68.1,87.4,58,94.6,44.4C105.4,25.7,98.9,9.1,85.3,2.7z"/> </svg>';
const robot = '<svg viewBox="0 0 100 100"> <circle cx="50" cy="50" r="40" /> <circle cx="35" cy="35" r="5" /> <circle cx="65" cy="35" r="5" /> <rect x="30" y="60" width="40" height="10" /> </svg>';
const lightBulb = '<svg viewBox="0 0 100 100"> <path d="M50 10 Q60 20, 60 40 Q60 60, 70 70 L70 80 L30 80 L30 70 Q40 60, 40 40 Q40 20, 50 10" /> <rect x="45" y="80" width="10" height="10" /> </svg>';
const star = '<svg viewBox="0 0 100.1 99.2"> <path d="M50,2.7l12.8,34.4l36.6,1.6L70.8,61.2l9.9,35.3L50,76.3L19.5,96.5l9.9-35.3L0.7,38.5L37.3,37L50,2.7z"/> </svg>';
const cloud = '<svg viewBox="0 0 100.1 65.1"> <path class="st0" d="M36.6,58.6c0,1.5,1.2,1.7,1.9,1.2c1.8-1.6,15.9-14.6,15.9-14.6h19.3c3.8,0,4.4-0.8,4.4-4.5V9.6 c0-3.7-0.8-4.5-4.4-4.5H26.3c-3.6,0-4.4,0.9-4.4,4.5v31.1c0,3.7,0.7,4.4,4.4,4.4h10.4L36.6,58.6L36.6,58.6z"/></svg>';


const data = [heart, star, cloud, robot, lightBulb];

const max = 50;

let particles = [];


class Ball {
  constructor(shape) {
    this.shape = $(shape);
    this.speed = 2 + Math.random() * 3;
    this.vx = Math.random() * this.speed - Math.random() * this.speed;
    this.vy = Math.random() * this.speed - Math.random() * this.speed;
    this.radius = 10 + Math.round(Math.random() * 50);
    this.w = $(window).width();
    this.h = $(window).height();
    this.x = (this.w - this.radius) / 2;
    this.y = (this.h - this.radius) / 2;

    $(window).on("resize", this.resize.bind(this));
    this.render();
  }

  render() {
    $(this.shape).css({
      width: this.radius,
      height: this.radius });

    $("body").append(this.shape);
  }

  resize() {
    this.w = $(window).width();
    this.h = $(window).height();
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;


    this.shape.css({
      left: this.x,
      top: this.y,
      transform: "rotate(" + this.y + "deg)" });


    if (this.x < 0 || this.x > this.w - this.radius) {
      this.vx = -this.vx;
      $(this.shape).toggleClass("highlight");
      if ($(this.shape).hasClass("highlight")) {
    $(this.shape).find('path, circle, rect').attr('fill', '#D95952');
} else {
    $(this.shape).find('path, circle, rect').attr('fill', ''); // This will reset to the original color
}
    }
    if (this.y < 0 || this.y > this.h - this.radius) {
      this.vy = -this.vy;
      $(this.shape).toggleClass("highlight");
      if ($(this.shape).hasClass("highlight")) {
    $(this.shape).find('path, circle, rect').attr('fill', '#D95952');
} else {
    $(this.shape).find('path, circle, rect').attr('fill', ''); // This will reset to the original color
}
    }
    return this;
  }}



function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


for (let i = 0; i < max; i++) {
  particles.push(
  new Ball(data[randomInt(0, data.length - 1)]));

}

function update() {
  particles = particles.filter(function (p) {
    return p.move();
  });
  requestAnimationFrame(update.bind(this));
}
update();
