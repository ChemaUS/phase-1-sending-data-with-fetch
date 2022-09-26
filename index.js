// Add your code here
function submitData (name,email){
   return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com'
        })
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const li = document.createElement('li')
        li.innerHTML = object.id
        document.body.appendChild(li)
       //console.log(error.message)
    
    
      })
      .catch(function ( error ) {
        document.body.innerHTML= error.message
       alert('Unauthorized Access')
        console.log(error.message)
        })}
    
        
//const li = document.createElement('li')
        //li.innerHTML = error
        //document.body.appendChild(li)
       //console.log(error.message)
    