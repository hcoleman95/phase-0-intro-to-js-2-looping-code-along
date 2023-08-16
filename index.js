const names  = ["charlie", "Samip", "Ali"]


function writeCards(array, event){
    const greetings = []
  for(let i = 0; i < array.length; i++){
    greetings.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
 return greetings;
}


function countDown(num){
    while(num >= 0){
        console.log(num)
        num--
    }
}