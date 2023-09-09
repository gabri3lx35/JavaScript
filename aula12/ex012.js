var agora = new Date()
var hour = agora.getHours()
console.log(`Agora são exatamente ${hour} Horas.`)
if (hour < 12){
    console.log('Bom dia!')
}else if (hour <= 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}