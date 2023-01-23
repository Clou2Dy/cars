export default function anim (){
    let width:number = +window.innerWidth - 120
    if (document.querySelector('.start'))
    document.querySelector('.start').addEventListener('click', function(){
        let m:number = 10
        
        let timer = setInterval(function(){
            m=m + 20
            console.log(m);
            
            document.querySelector<HTMLInputElement>('.carImg').style.left=m+'px'
        if(m >= width)clearInterval(timer)
        
    },25) 
})
}