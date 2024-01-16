const promisOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log('Async task is completed');
        resolve();
    }, 1000);
})


promisOne.then(function(){
    console.log('promise consumed');
});