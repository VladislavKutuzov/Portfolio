const biographyCity = document.getElementById('biography__city');
const cityHint = document.getElementById('city__hint');

biographyCity.onmousemove = (e) => {
    cityHint.style.opacity = '1';
    // cityHint.style.transform = 'scaleX(-1)';

    const x = e.offsetX;
    const y = e.offsetY;

    cityHint.style.left = x  + 'px';
    cityHint.style.top = y - 160 + 'px';
    console.log(cityHint.style.left);
    console.log(cityHint.style.top);
}

biographyCity.addEventListener('mouseout', function() {
    cityHint.style.opacity = '0';
});


