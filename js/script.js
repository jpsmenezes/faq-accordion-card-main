//versão resumida ou atual
document.querySelectorAll('.accordion').forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.toggle("active");
    const panel = item.nextElementSibling;
    (panel.style.maxHeight) ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";    
  });
});

// versão 02

// const acc = document.querySelectorAll(".accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }









// document.querySelectorAll('.accordion').forEach((item) => {
// 	item.addEventListener('click', (event) => {
// 		console.log('click!');
// 		let accCollapse = item.nextElementSibling;

// 		if (!item.classList.contains('collapsing')) {
// 			// Open accordion item
// 			if (!item.classList.contains('open')) {
// 				console.log('toggle accordion button');

// 				accCollapse.style.display = 'block';
// 				let accHeight = accCollapse.clientHeight;
// 				console.log(accHeight);

// 				setTimeout(() => {
// 					accCollapse.style.height = accHeight + 'px';
// 					accCollapse.style.display = '';
// 				}, 1);

// 				accCollapse.classList = 'right panel collapsing';

// 				setTimeout(() => {
// 					console.log('open accordion content');
// 					accCollapse.classList = 'panel collapse open';
// 				}, 300);
// 			}
// 			// Close accordion item
// 			else {
// 				// Remove "collapse open" from .accordion__collapse, add "collapsing"
// 				accCollapse.classList = 'panel collapsing';

// 				setTimeout(() => {
// 					accCollapse.style.height = '0px';
// 				}, 1);

// 				// After X amount of time, remove "collapsing" class and add "collapse" class
// 				setTimeout(() => {
// 					console.log('close accordion content');
// 					accCollapse.classList = 'panel collapse';
// 					accCollapse.style.height = '';
// 				}, 300);
// 			}

// 			item.classList.toggle('open');
// 		}
// 	});
// });