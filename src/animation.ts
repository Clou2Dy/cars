export default function anim (){
    let width:number = +window.innerWidth - 120
    document.addEventListener('click', function(co:any){
        if (co.target.className == 'start'){
            let m:number = 10
            let i = co.target.id
            console.log(co.target.className);
            
            let timer = setInterval(function(){
                m=m + 20
                console.log(m);
                
                document.querySelector<HTMLInputElement>(`.carColor${i}`).style.left=m+'px'
                if(m >= width)clearInterval(timer)
            },25) 
            }else {
                return
            }  
    })
    }