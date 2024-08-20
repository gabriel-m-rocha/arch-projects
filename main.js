let userName = getFirstName("José Almeida de Souza")
console.log("Seja Bem Vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}