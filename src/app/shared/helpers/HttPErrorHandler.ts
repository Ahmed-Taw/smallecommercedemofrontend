export function localErrorHandler(error){
    switch(error.status){
        case 400:
console.log("400 error")
return;
        case 404:
        console.log("404 not found")
return;
        case 500:
        console.log("500 error")
return;
        default:
console.log("error")
        return;
        
    }
}