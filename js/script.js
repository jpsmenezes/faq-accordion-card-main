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
