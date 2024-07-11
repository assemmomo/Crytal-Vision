const sec3 = document.getElementById("sec3");



function openSec3 (){
    sec3.style.cssText="top:50% !important; transform:translate(-50%,-50%) !important; position:fixed;"
}
function closeSec3 (){
    sec3.style.cssText="top:-700px !important;left:50%;transform:translateX(-50%);"
}


document.querySelectorAll('.fav').forEach(img => {
    const originalSrc = img.src;
    const newSrc = './img/heart.png';

    img.addEventListener('click', function() {
        if(img.src === originalSrc){
            img.src=newSrc
        }else{
            img.src=originalSrc
        }
        // img.src = img.src === originalSrc ? newSrc : originalSrc;
    });
});