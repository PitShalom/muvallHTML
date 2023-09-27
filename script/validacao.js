//*Variáveis------------------------
const btn_cadastro = document.querySelector('#cadastrar-bttn')
let age = document.querySelector('#data')
let nowadays = new Date()
console.log(nowadays.getSeconds())
//*---------------------------------

//!Validação idade do usuário--------------------------------------------
btn_cadastro.addEventListener('click', ()=>{
    let data_number = Date.parse(age.value)
    let user_birth = new Date(data_number)
    console.log(user_birth.getMilliseconds())
    let full_date = [
        user_birth.getDate()+1 <10?user_birth.getDate(): user_birth.getDate()+1,
        user_birth.getMonth()+1 <10? user_birth.getMonth(): user_birth.getMonth()+1, 
        user_birth.getFullYear()
    ]
    if(nowadays.getTime() - user_birth.getTime()  <= 567648000000){
        alert("Você não pode concluir o cadastro pois é menor de idade!")
    }
})
//! ----------------------------------------------------------------------


