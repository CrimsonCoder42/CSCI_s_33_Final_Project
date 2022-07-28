document.addEventListener('DOMContentLoaded', function () {

  const sign_in_button = document.querySelector('#login-button');
  const sign_up_button = document.querySelector('#register-button');
  const container = document.querySelector('.container');

  sign_up_button.addEventListener('click', () => {
    container.classList.add('sign-up-mode')
  });

  sign_in_button.addEventListener('click', () => {
    container.classList.remove('sign-up-mode')
  });

});

