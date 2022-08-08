function readNumber() {
    let str;
    do {
        str = +prompt(); 
    } while ( isNaN(str) );
    return str ? str : null;    
} 
alert ( readNumber() );