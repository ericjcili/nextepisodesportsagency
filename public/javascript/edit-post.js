async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const title = document.querySelector('input[name="post-title"]').value;
    const post_desc = document.querySelector('textarea[name="post-desc"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;
    const tags = document.querySelector('input[name="post-tags"]').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_text,
          post_desc,
          tags
        }),
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
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);