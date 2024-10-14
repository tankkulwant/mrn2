onmessege = function(e){
    let result = 0;
    console.log("hello");
    for (let i=0; i< 1000; i++){ 
        result +=i;
    }  
    postMessage(result);

}