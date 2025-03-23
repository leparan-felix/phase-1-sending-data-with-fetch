// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(object => {
      document.body.innerHTML += `<p>ID: ${object.id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
  }
  
