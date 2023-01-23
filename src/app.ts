import './style.scss'
import {win,garage} from './views'
import addingCars from './addCar'
import {startStop, race, reset} from './startStop'
import anim from './animation'

win()
garage()
addingCars()
startStop()
race()
reset()

    // document.addEventListener('click',function(co:any){
    //     if (co.target.id == 'str'){
    //         console.log('YES');
    //     }else {
    //         console.log('NO');
            
    //     }

        
    // })


// alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо <3')
anim()