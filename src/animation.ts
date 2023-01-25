export default function anim (){
    let width = 0 
    setInterval(function(){
       width = +window.innerWidth - 120
    },1000)
    document.addEventListener('click', function(co:any){
        if (co.target.className == 'start'){
            let i = co.target.id
            let m:number = 10
            let timer = setInterval(function(){
                m=m + 20
                document.querySelector<HTMLInputElement>(`.carColor${i}`).style.left=m+'px'
                if(m > width){clearInterval(timer)
                }
                document.addEventListener('click',(so:any)=>{
                if(so.target.className == 'stop'){
                    let s = so.target.id
                    document.querySelector<HTMLInputElement>(`.carColor${s}`).style.left = 45+'px'
                    clearInterval(timer)
                    }
                })
            },25)
        }
        if(co.target.className == 'race'){
            let c = document.querySelector('.cars').childElementCount
            for (let i = 1 ; i <= c ;i++){
                let m = 10
                let timer = setInterval(function(){
                    m=m + 20
                    document.querySelector<HTMLInputElement>(`.carColor${i}`).style.left=m+'px'
                    if(m > width){clearInterval(timer)
                    }
                    document.addEventListener('click',(so:any)=>{
                    if(so.target.className == 'reset'){
                        document.querySelector<HTMLInputElement>(`.carColor${i}`).style.left = 45+'px'
                        clearInterval(timer)
                    }
                })
            },25) 
            document.addEventListener('click',(so:any)=>{
                if(so.target.className == 'stop'){
                    let s = so.target.id
                    console.log(s);
                    document.querySelector<HTMLInputElement>(`.carColor${s}`).style.left = 45+'px'
                    clearInterval(timer)
                    }
                })
    }
        }
    })   
    }

    
    
