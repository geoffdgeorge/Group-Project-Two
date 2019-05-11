/* JS for Sign-Up Page */

const userInputSignUp = document.querySelector('#username-signup');
const pwInputSignUp = document.querySelector('#password-signup');
const submitSignUp = document.querySelector('#submit-signup');

function handleSignUp(e) {
  e.preventDefault();

  const data = {
    username: userInputSignUp.value.trim(),
    password: pwInputSignUp.value.trim(),
  };

  axios
    .post('/signup', data)
    .then((response) => {
      if (response.status === 200) {
        window.location = '/userPage';
      } else {
        window.location = '/signup';
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

submitSignUp.addEventListener('submit', handleSignUp);
