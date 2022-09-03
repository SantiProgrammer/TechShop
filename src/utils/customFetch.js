let is_ok = true;

let customFetch = (task) => {
    return new Promise((resolve, reject)=>{
            if (is_ok) {
                setTimeout(() => {
                        resolve(task)
                }, 500); 
            } else{
                reject("Error")
            }
    });
}

export default customFetch;