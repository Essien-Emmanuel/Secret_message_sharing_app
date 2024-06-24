document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  const msgInput = document.querySelector('#message-input');
  const encryptedMsg = btoa(msgInput.value);
  
  // toggle message and link card panels visibility
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-link').classList.remove('hide')
  
  const browseerLocalFilePath = window.location;
  const linkInput = document.querySelector('#link-input')
  linkInput.value =`${browseerLocalFilePath}#${encryptedMsg}`;
  
  linkInput.select();


})