console.log('ciao console');

// const myRow = document.querySelector('row');

for (let i = 1; i <=100; i++) {
    // console.log('tabella :' + i )
    const myRow = document.querySelector('.row');

    if (i % 5 == 0 && i % 3 == 0) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML += 'FizzBuzz';
        newDiv.classList.add('col' , 'badge', 'bg-danger' , 'p-4' , 'm-3')
        myRow.append(newDiv);
        console.log('tabella:' + 'FizzBuzz');
        
    }
    else if (i % 3 == 0) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML += 'fizz';
        newDiv.classList.add('col' , 'badge' , 'bg-success' , 'p-4' , 'm-3')
        myRow.append(newDiv);
        console.log('tabella:' + 'fizz');
        
    } 
    else if (i % 5 == 0) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML += 'buzz';
        newDiv.classList.add('col' , 'badge' , 'bg-warning' , 'p-4' , 'm-3')
        myRow.append(newDiv);
        console.log('tabella:' + 'buzz');
        
    } 
   
    else {
        const newDiv = document.createElement('div');
        newDiv.innerHTML += i;
        newDiv.classList.add('col' , 'badge', 'bg-primary' , 'p-4' , 'm-3')
        myRow.append(newDiv);
        console.log('tabella :' + i );
    }

    
    
}