document.getElementById('sendButton').addEventListener('click', validateForm)

function validateForm() {
  if (
    document.getElementById('name').value != '' &&
    document.getElementById('email').value != '' &&
    document.getElementById('phone').value != ''
  ) {
    alert('Obrigado! Em breve você receberá mais informações por e-mail!')
  } else {
    alert('HMM, algum campo não está preenchido. Tente novamente.')
  }
}
