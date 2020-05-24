// navbar toggle
const menuBtn = document.querySelector(".navbar-burger-btn");

menuBtn.addEventListener("click", () => {
  nav.dataset.state === "closed" ?
  nav.dataset.state = "open" :
  nav.dataset.state = "closed";
});

const root = document.documentElement;
const hero = document.querySelector(".hero");
const nav = document.querySelector("nav");

const heroOptions = {
  rootMargin: "-70px 0px 0px 0px",
  threshold: [0, 0.25, 0.5, 0.75, 1.0] };

//
const heroObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.75) {
      nav.style.transform = "translateY(0%)";
      root.style.setProperty("--brand-color", "#FFF");

    }
    if (entry.intersectionRatio >= 0.5) {
      nav.classList.remove("fixed-top");
    }
    if (entry.intersectionRatio <= 0.5) {
      nav.style.transform = "translateY(-100%)";
    }
    if (entry.intersectionRatio === 0) {
      nav.style.transform = "translateY(0%)";
      nav.classList.add("fixed-top");
      root.style.setProperty("--brand-color", "#000");
    }
  });
}, heroOptions);
heroObserver.observe(hero, heroObserver);

// Watching the sections and fading them in when needed
const main = document.querySelector("main");
let mainOptions = {
  threshold: 0.1,
  rootMargin: "-50px 0px 0px 0px" };

const mainObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // exit out of the function if not intersecting
      return;
    } else {
      entry.target.classList.add("visible");
      // remove the observer after we have faded in the entry
      observer.unobserve(entry.target);
    }
  });
}, mainOptions);
const parent = Array.from(main.children);
parent.forEach(child => {
  mainObserver.observe(child, mainObserver);
});

// Loading the images
const images = document.querySelectorAll(".placeholder-container");

const setImageSrc = (img, placeholder) => {
  const src = img.dataset.src;
  if (!src) {
    return;
  }
  img.src = src;
  img.onload = () => {
    img.classList.add('loaded');
    // animate the placeholder 
    placeholder.dataset.visible = 'false';
  };
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px" };


const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // exit out of the function if not intersecting
      return;
    } else
    {
      setImageSrc(entry.target.nextElementSibling, entry.target);
      observer.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach(image => {
  imageObserver.observe(image, imageObserver);
});


// Three js stuff
// borrows heavily from https://tympanus.net/codrops/2019/11/05/creative-webgl-image-transitions/
let vertex = `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}`;

let fragment = `
		uniform float progress;
		uniform float intensity;
		uniform sampler2D currentImage;
		uniform sampler2D nextImage;
		uniform vec4 resolution;
		varying vec2 vUv;
		mat2 rotate(float a) {
            float s = sin(a);
			float c = cos(a);
			return mat2(c, -s, s, c);
		}

		void main()	{
			vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

            vec2 uvDivided = fract(newUV*vec2(intensity,1.));
     

			vec2 uvDisplaced1 = newUV - rotate(0.0)*uvDivided*progress*0.05;
			vec2 uvDisplaced2 = newUV - rotate(0.0)*uvDivided*(1. - progress)*0.05;

			vec4 t1 = texture2D(currentImage,uvDisplaced1);
			vec4 t2 = texture2D(nextImage,uvDisplaced2);

			gl_FragColor = mix(t1, t2, progress);

		}

	`;
// scene
let scene = new THREE.Scene();
scene.background = new THREE.Color(0x333333);
// camera
const camera = new THREE.PerspectiveCamera(
70,
window.innerWidth / window.innerHeight,
0.001,
1000);

camera.position.set(0, 0, 2);
// renderer
let renderer = new THREE.WebGLRenderer({
  antialias: true });

// renderer opts
renderer.setSize(hero.offsetWidth, hero.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio || 1);
// append canvas 
hero.appendChild(renderer.domElement);

// images
let loader = new THREE.TextureLoader();
loader.crossOrigin = "anonymous";
const sliderImgs = JSON.parse(hero.getAttribute("data-images"));
const imgArray = [];
// load images and resize
const loadImages = callback => {
  const promises = [];
  // load images as textures
  sliderImgs.forEach((url, i) => {
    let promise = new Promise(resolve => {
      imgArray[i] = loader.load(url, resolve);
    });
    promises.push(promise);
  });
  Promise.all(promises).then(() => {
    callback();
    // remove preloader when loading has finished
    document.body.dataset.loading = "false";
  });
};

const resize = () => {
  let width = hero.offsetWidth;
  let height = hero.offsetHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  // image aspect ratio preserve on resize
  let imageAspect = imgArray[0].image.height / imgArray[0].image.width;
  let a1;
  let a2;
  if (height / width > imageAspect) {
    a1 = width / height * imageAspect;
    a2 = 1;
  } else {
    a1 = 1;
    a2 = height / width / imageAspect;
  }
  mat.uniforms.resolution.value.x = width;
  mat.uniforms.resolution.value.y = height;
  mat.uniforms.resolution.value.z = a1;
  mat.uniforms.resolution.value.w = a2;

  const dist = camera.position.z;
  const FOVheight = 1;
  camera.fov = 2 * (180 / Math.PI) * Math.atan(FOVheight / (2 * dist));

  object.scale.x = camera.aspect;
  object.scale.y = 1;
  camera.updateProjectionMatrix();
};

loadImages(resize);

// create 
let mat = new THREE.ShaderMaterial({
  side: THREE.DoubleSide,
  uniforms: {
    progress: { type: "f", value: 0 },
    intensity: { type: "f", value: 16 },
    currentImage: { type: "f", value: imgArray[0] },
    nextImage: { type: "f", value: imgArray[1] },
    resolution: { type: "v4", value: new THREE.Vector4() } },

  vertexShader: vertex,
  fragmentShader: fragment });

let geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
let object = new THREE.Mesh(geometry, mat);
object.position.set(0, 0, 0);

scene.add(object);

// animate
let animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
// call animate fn
animate();

// resize
window.addEventListener("resize", resize);

// slide animation
const animateSlide = index => {
  mat.uniforms.nextImage.value = imgArray[index];
  gsap.to(mat.uniforms.progress, 0.64, {
    value: 1,
    ease: "sine.inOut",
    onComplete: () => {
      mat.uniforms.currentImage.value = imgArray[index];
      mat.uniforms.progress.value = 0;
    } });

};

// slider
let index = 0;
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const heroBg = document.querySelector(".hero");
const nextSlide = () => {
  if (index < 1) {
    animateSlide(1);
    index += 1;
  }
};

const prevSlider = () => {
  if (index > 0) {
    animateSlide(0);
    index -= 1;
  }
};

nextBtn.addEventListener("click", () => {
  nextSlide();
});
prevBtn.addEventListener("click", () => {
  prevSlider();
});