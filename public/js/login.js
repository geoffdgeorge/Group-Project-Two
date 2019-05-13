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
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === 'text' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === 'password' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        console.log(parent);

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

const loginSubmit = document.getElementById('login');

loginSubmit.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    username: e.target.username.value.trim(),
    password: e.target.password.value.trim(),
  };

  // Got a hint on how to redirect axios post calls from this resource: https://stackoverflow.com/questions/49601795/making-redirects-after-an-axios-post-request-with-express
  axios
    .post('/login', data)
    .then((response) => {
      console.log(response.request.responseURL);
      if (response.request.responseURL === 'http://localhost:4500/userPage') {
        window.location = '/userPage';
      } else {
        window.location = '/login';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
