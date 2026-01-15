// Task 4: delUser(number)
export function delUser(id) {
  const serverURL = 'http://localhost:3000';
  
  fetch(serverURL + '/users/' + id, {
    method: 'DELETE'
  });
}