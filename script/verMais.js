let adHidden = [...document.querySelectorAll('.hidden')]
let showAd = document.querySelector('#seeAds')
let containerAd = document.querySelector('#servicos')

showAd.addEventListener('click', ()=>{
    showAd.remove()
    adHidden.map((ad)=>{
        ad.classList.toggle('show-ads')
    })
    const hideAd = document.createElement('button')
    hideAd.setAttribute('id', 'hideAd')
    hideAd.setAttribute('class', 'VerMais')
    hideAd.innerHTML="Ver Menos"
    containerAd.appendChild(hideAd)
})

hideAd.addEventListener('click', ()=>{
    hideAd.remove()
    adHidden.map((ad)=>{
        ad.classList.toggle('show-ads')
    })
    let hideAd = document.createElement('button')
    hideAd.setAttribute('id', 'hideAd')
    hideAd.setAttribute('class', 'VerMais')
    hideAd.innerHTML="Ver Menos"
    containerAd.appendChild(hideAd)
    console.log("o evento funciona")
})



//!Erro - Não esconde as informações novamente
/*let avaHidden = [...document.querySelectorAll('.hide')]
let showAva = document.querySelector('#seeAva')

showAva.addEventListener('click', ()=>{
    showAva.remove()
    avaHidden.map((ad)=>{
        ad.classList.toggle('show-ads')
    })

})*/

//!