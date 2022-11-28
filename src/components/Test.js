let promise = new Promise((resolve, reject) => {
    let a = 1+2
    if(a == 3){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

promise.then((message) =>{
    console.log('This ' + message)
}).catch((message) =>{
    console.log('This' + message)
})