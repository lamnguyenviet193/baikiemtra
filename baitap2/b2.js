window.addEventListener("load", ()=>{


    const colorItems = document.querySelectorAll('.color-item')
    colorItems.forEach( item => {
        item.addEventListener('click', function (){
            const idSelected = this.id; 
            document.body.className = idSelected
        })
    })
})