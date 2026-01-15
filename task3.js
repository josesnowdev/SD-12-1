// Task 3: addUser(first_name, last_name, email)
export function addUser(firstName, lastName, email) {
  const serverURL = 'http://localhost:3000';
  
  fetch(serverURL + '/users')
    .then(response => response.json())
    .then(users => {
      const newId = Math.max(...users.map(u => u.id)) + 1;
      
      const newUser = {
        id: newId,
        firstName: firstName,
        lastName: lastName,
        email: email
      };
      
      fetch(serverURL + '/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
    });
}