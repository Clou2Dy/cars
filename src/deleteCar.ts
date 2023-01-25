export default function deleteCar(){
    document.addEventListener('click', function(el:any){
        if(el.target.className == 'remove'){
            let i = el.target.id
            let car = document.querySelector(`.blockcar${i}`)
            console.log(car);
            document.querySelector('.cars').removeChild(car)
        }
    })
}