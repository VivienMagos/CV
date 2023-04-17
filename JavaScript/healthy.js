let healthy=document.getElementById("hero-text-healthy");
let zone=document.getElementById('hero-text-zone');
let yang=document.getElementById('yang');
let yin=document.getElementById('yin');
let leaf=document.getElementById('leaf');



window.addEventListener('scroll', ()=>{
    let value=window.scrollY;
    let top=window.scrollY;

    healthy.style.top=value*-1 +'px';
    zone.style.top=value*1+'px';
    yang.style.left=value*-2.5 +'px';
    yin.style.left=value*2.5+'px';
    leaf.style.top=value*-2+'px';
    leaf.style.left=value*3.5+'px';

    if(window.scrollY>300){
        zone.style.display='none';
    }
    if(window.scrollY<400){
        zone.style.display='block'
    }
})