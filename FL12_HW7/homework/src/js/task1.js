let newPass = '',
    userPassContain = '',
    validationPassword = '';

const userEmailValidation = 5,
      userEmail = prompt('Enter your e-mail', ''),
      passAddLenght = 6;

if (!userEmail) {
  alert('Canceled.');

} else if (userEmail.length < userEmailValidation) {
  alert('I don\'t know any emails having name having name length less than 5 symbols');

} else if (userEmail === 'admin@gmail.com'|| userEmail === 'user@gmail.com') {
  userPassContain = prompt('Enter your password', '');

  if (!userPassContain) {
    alert('Canceled')

  } else if (userEmail === 'user@gmail.com' && userPassContain === 'UserPass' && userPassContain === 'AdminPass'
    || userEmail === 'admin@gmail.com') {

    if (confirm('Do you want to change your password?')) {

      if (prompt('Write your current password', '') === userPassContain) {

        if (!userPassContain) {
          alert('Canceled');

        } else if (userEmail === 'user@gmail.com' && userPassContain === 'UserPass'
          || userPassContain === 'AdminPass' && userEmail === 'admin@gmail.com') {
          newPass = prompt('Write your new password', '');

          if (!newPass) {
            alert('Canceled');

          } else if (newPass.length < passAddLenght) {
            alert('It’s too short password. Sorry.');

          } else {
            validationPassword = prompt('Write your new userPassContain again', '');

            if (!validationPassword) {
              alert('Canceled');

            } else if (validationPassword === newPass) {
              alert('You have successfully changed your password');
              userPassContain = newPass;

            } else {
              alert('You wrote the wrong password');
            }
          }
        }
        
      } else {
        alert('Wrong userPassContain');

      }
    } else {
      alert('You have failed the change');

    }
  } else {
    alert('Wrong userPassContain');

  }
} else {
  alert('I don’t know you');

}