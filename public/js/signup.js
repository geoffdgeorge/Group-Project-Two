/* JS for Sign-Up Page */

function error(color) {
  document.body.style.backgroundColor = color;
}

function validateUser(user) {
  if (user.value.length < 6) {
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

  if (validateUser(document.querySelector('[name="password"]'))) {
    const data = {
      username: e.target.username.value.trim(),
      password: e.target.password.value.trim(),
    };

    axios
      .post('/signup', data)
      .then((response) => {
        if (response.request.responseURL === 'http://localhost:4500/userPage') {
          window.location = '/userPage';
        } else {
          document.querySelector('.field-name').classList.add('active');
          document.querySelector('.field-password').classList.remove('active');
          document.querySelector('.field-password').classList.add('inactive');
          document.querySelector('[name="password"]').value = '';
          document.querySelector('[name="username"]').value = '';
          document.querySelector('[name="username"]').placeholder =						'Username is taken. Please choose another';
          error('rgb(189,87,87)');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    document.querySelector('#submit-signup').parentElement.style.animation = 'shake 0.5s ease';
    document.querySelector('#submit-signup').parentElement.addEventListener('animationend', () => {
      document.querySelector('#submit-signup').parentElement.style.animation = '';
    });
  }
}

submitSignUp.addEventListener('submit', handleSignUp);
