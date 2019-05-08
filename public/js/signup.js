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
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

submitSignUp.addEventListener('submit', handleSignUp);
