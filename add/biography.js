const biographyCity = document.getElementById('biography__city');
const cityHint = document.getElementById('city__hint');
var coord = biographyCity.getBoundingClientRect();



// if (biographyCity.onmousemove == true) {
//     biographyCity.onmousemove = function(event) {
//         cityHint.style.display = 'block';
//         cityHint.style.left = (event.clientX - coord.left) + 'px';
//         cityHint.style.top = (event.clientY - coord.top) + 'px';
//     }
// } else {
//     cityHint.style.display = 'none';
// }

biographyCity.addEventListener("mouseout", function() {

    cityHint.style.display = 'none';

});


biographyCity.onmousemove = function(event) {
    cityHint.style.display = 'block';
    cityHint.style.left = (coord.left) + 'px';
    cityHint.style.top = (coord.top) + 'px';
    console.log(cityHint.style.left);
    console.log(cityHint.style.top);
}


