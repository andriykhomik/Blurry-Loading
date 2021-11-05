const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');
let load = 0;

function loading(){
    let interval = setInterval(()=>{
        if(load < 100){
            load++;
            loadingText.innerHTML = `${load}%`;
            loadingText.style.opacity = 100 - load +'%';
            // bg.style.filter = `blur(${40 - (load - 60)}px)`;
            // loadingText.style.opacity = scale(load, 0, 100, 1, 0);
            bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
        }else {
            clearInterval(interval);
            loadingText.innerHTML = '';
        }
    }, 30);

}
loading();
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}





