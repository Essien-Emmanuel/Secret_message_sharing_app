document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  const msgInput = document.querySelector('#message-input');
  const encryptedMsg = btoa(msgInput.value);
  
  document.querySelector('#link-input').value = encryptedMsg;
})