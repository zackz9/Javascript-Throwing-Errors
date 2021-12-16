//Async And Await
// Async is a promise typeObj
//Await keyword stop assigning a value to the constData until the promise had resolved 
//the cleaner way to get data 

//Chain promises together to get the same result
// Throwing Errors


const getDatas = async () => {
    
    const response = await fetch('data/data.json');

    //Checking Status

    if(response.status !== 200) {
        
        throw new Error('Cannot fetch the data...!');

    }
    const data = await response.json();
    
    return data;
    
};


getDatas()
.then(data => { console.log('Resolved : ',data);}).catch(err => {console.log('Rejected :', err.message);});
