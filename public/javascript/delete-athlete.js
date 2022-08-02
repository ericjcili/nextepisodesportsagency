async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ];
    const response = await fetch(`/api/athletes/${id}`, {
        method: 'DELETE'
      });
    if (response.ok) {
        document.location.replace('/our-athletes');
        // otherwise, display the error
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);