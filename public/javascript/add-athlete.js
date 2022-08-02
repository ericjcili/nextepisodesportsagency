async function newFormHandler(event) {
    event.preventDefault();

    const ath_name = document.querySelector('input[name="ath-name"]').value;
    const ath_desc = document.querySelector('textarea[name="ath-desc"]').value;
    const ath_info = document.querySelector('textarea[name="ath-info"]').value;
    const pic_title = document.querySelector('input[name="pic-title"]').value;

    const response = await fetch(`/api/athletes`, {
      method: 'POST',
      body: JSON.stringify({
        ath_name,
        ath_desc,
        ath_info,
        pic_title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/our-athletes');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-athlete-form').addEventListener('submit', newFormHandler);