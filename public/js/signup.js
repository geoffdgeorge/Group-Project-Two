/* JS for Sign-Up Page */

function validateUser(user) {
  if (user.value.length < 6) {
    console.log('not enough characters');
    error('rgb(189,87,87)');
  } else {
    error('rgb(87,189,130)');
    return true;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add('inactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}

function error(color) {
  document.body.style.backgroundColor = color;
}

function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === 'text' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === 'password' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = 'shake 0.5s ease';
      }
      // get rid of animation
      parent.addEventListener('animationend', () => {
        parent.style.animation = '';
      });
    });
  });
}

animatedForm();

const submitSignUp = document.querySelector('#signup');

function handleSignUp(e) {
  e.preventDefault();

  const data = {
    username: e.target.username.value.trim(),
    password: e.target.password.value.trim(),
  };

  axios
    .post('/signup', data)
    .then((response) => {
      console.log(response.data);
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
