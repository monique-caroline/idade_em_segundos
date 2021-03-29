//Idade em segundos: Crie um site que peça ao usuário a idade dele 
//em anos, utilizando prompt(), e devolva a idade em segundos, 
//utilizando document.write().

//Criar um arquivo HTML
//Criar um arquivo JavaScript
//Fazer uma estrutura HTML de nossa página
//Perguntar a idade por um prompt()
//Conectar JavaScript com HTML
//Converter idades em segundos
//Mostrar resultado na página web com document.write()


var age = parseInt(prompt("Qual é a sua idade?"))

//Converter idades em segundos
var ageInSeconds = age*365*24*60*60

//Converter idades em segundos
console.log(ageInSeconds);

//Mostrar resultado na página web com document.write()
document.write("Em seus "+ age +" anos de idade, se passaram "+ ageInSeconds + " segundos.");



