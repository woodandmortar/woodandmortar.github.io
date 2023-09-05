// const randInt = (min, max) => {
//   return Math.floor(Math.random() * 
// 	(max - min + 1)) + min;
// }
// function gimme() {
// 	let svg = ``;
// 	for (let i=0; i<30; i++) {
// 		svg += `<circle cx="0" cy="0" r="${randInt(5,30)}" fill="aqua" filter="brightness(${randInt(100,250)}%)">
// 		<animate attributeName="cx" values="0%; 100%; 0%" dur="${randInt(300,400)/10}s" begin="-${randInt(1,400)/10}s" repeatCount="indefinite" />
// 		<animate attributeName="cy" values="0%; 100%; 0%" dur="${randInt(200,350)/10}s" begin="-${randInt(50,200)/10}s" repeatCount="indefinite" />
// 	</circle>`
// 	}
// 	document.body.innerText += svg;
// }
// // gimme();