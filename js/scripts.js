console.log('ciao console')

for (let i = 1; i <=100; i++) {
    // console.log('tabella :' + i )

    if (i % 5 == 0 && i % 3 == 0) {
        console.log('tabella:' + 'FizzBuzz')
        
    }
    else if (i % 3 == 0) {
        console.log('tabella:' + 'fizz')
        
    } 
    else if (i % 5 == 0) {
        console.log('tabella:' + 'buzz')
        
    } 
   
    else {
        console.log('tabella :' + i )
    }
    



    // calcolo multipli 
    // if (x % y == 0) {
    //     console.log()
        
    // }
}