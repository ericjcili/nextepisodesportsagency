async function editFormHandler(event) {
    event.preventDefault();

let username = document.querySelector('input[name="user-name"]').value.trim();
    if(username.length) username = '"username": "' + username + '"';
    let bio = document.querySelector('input[name="bio"]').value.trim();
    if(bio.length) bio = '"bio": "' + bio + '"';

    const id = document.querySelector('input[name="user-id"]').value;

    let userUpdate = '{' + [username, bio].filter(value => value).join(',') + '}';
    userUpdate = JSON.parse(userUpdate)


    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userUpdate),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    if (response.ok) {
        document.location.replace('/blog');
        } else {
        alert(response.statusText);
        }

  }
  
  document.querySelector('.edit-user-form').addEventListener('submit', editFormHandler);