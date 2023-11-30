document.addEventListener('DOMContentLoaded', function () {
    let homeLink = document.getElementById('home');

    homeLink.addEventListener('mouseover', function () {
        homeLink.style.color = '#74dbff';
    });

    homeLink.addEventListener('mouseout', function () {
        homeLink.style.color = '#e4f8ff'; 
    });
});

document.addEventListener('DOMContentLoaded', function(){

let contactLink = document.getElementById('contact');

contactLink.addEventListener('mouseover', function(){

    contactLink.style.color='#74dbff';
});

contactLink.addEventListener('mouseout', function(){

    contactLink.style.color='#e4f8ff';
});

});

document.addEventListener('DOMContentLoaded', function(){

    let serviceLink=document.getElementById('service');

    serviceLink.addEventListener('mouseover', function(){
        serviceLink.style.color='#74dbff';
    })

    serviceLink.addEventListener('mouseout', function(){
        serviceLink.style.color='#e4f8ff';
    })

});