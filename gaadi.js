let button=document.querySelector('.text1')
let package=document.querySelector('.package')
let marker=document.querySelector('.road-marker')
let tadack=document.querySelector('.tadack')
let batti=document.querySelector('.light')
let order=document.querySelector('.text')
let mathi=document.querySelector('.top')
let tala=document.querySelector('.bottom')

function start(){
    button.classList.add('harayo')
    tadack.classList.add('dekhyo')
    package.classList.add('dekhyo')
    
    setInterval(function(){mathi.classList.add('opentop')},3000)
    setInterval(function(){tala.classList.add('openbottom')},3000)
    setInterval(function(){package.classList.add('packageactive')},4000)
    setInterval(function(){package.classList.add('harayo')},5000)
    setInterval(function(){mathi.classList.add('closetop')},5000)
    setInterval(function(){tala.classList.add('closebottom')},5000)
    setInterval(function(){marker.classList.add('markeractive')},5500)
    setInterval(function(){tadack.classList.add('tadackpachadiaayo')},5500)
    setInterval(function(){batti.classList.add('dekhyo')},6000)
    setInterval(function(){tadack.classList.add('tadackchalyo')},6500)
    setInterval(function(){order.classList.add('dekhyo')},9500)
}

