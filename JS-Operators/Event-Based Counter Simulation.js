let count = 0;

function increment(){
    count++;
    console.log("Count:",count);

     function showInside() {
        console.log("Inside nested function, count =", count);
    }

    showInside(); 
}

function decrement(){
    count--;
    console.log("Count:",count);
}


increment();  
decrement();  
increment();  
increment();  
increment();  
decrement();  