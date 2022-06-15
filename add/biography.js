const biographyCity = document.getElementById('biography__city');
const cityHint = document.getElementById('city__hint');
// var coord = biographyCity.getBoundingClientRect();



// if (biographyCity.onmousemove == true) {
//     biographyCity.onmousemove = function(event) {
//         cityHint.style.display = 'block';
//         cityHint.style.left = (event.clientX - coord.left) + 'px';
//         cityHint.style.top = (event.clientY - coord.top) + 'px';
//     }
// } else {
//     cityHint.style.display = 'none';
// }

// biographyCity.addEventListener("mouseout", function() {

//     cityHint.style.display = 'none';

// });


biographyCity.onmousemove = (e) => {
    cityHint.style.display = 'block';

    const x = e.offsetX;
    const y = e.offsetY;

    cityHint.style.left = x - -10 + 'px';
    cityHint.style.top = y - 155 + 'px';
    console.log(cityHint.style.left);
    console.log(cityHint.style.top);
}

biographyCity.addEventListener('mouseout', function() {
    cityHint.style.display = 'none';
});


