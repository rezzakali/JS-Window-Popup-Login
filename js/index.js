// set the display to flex after clicking the login button
document.getElementById('button').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
});

// enble the popup window after clicking the close icon
document.getElementById('close').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'none';
});

// getting the input field data
function formData() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password !== '') {
    if (username === 'rezzak') {
      alert('welcome');
      username.value = '';
      password.value = '';
    } else {
      alert('you are not a user!');
    }
  } else {
    alert('filled the blank');
  }
}
