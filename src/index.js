document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  const msgInput = document.querySelector('#message-input');
  const encryptedMsg = btoa(msgInput.value);
  
  const browseerLocalFilePath = window.location;
  const linkInput = document.querySelector('#link-input')
  linkInput.value =`${browseerLocalFilePath}#${encryptedMsg}`;
  linkInput.select()
})