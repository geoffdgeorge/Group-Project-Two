const submitForm = document.querySelector('#entry-submit');
const strengthLevel = document.querySelector('#strength');
const painLevel = document.querySelector('#pain');
const kneeTop = document.querySelector('#knee-top');
const kneeBottom = document.querySelector('#knee-bottom');
const kneeInside = document.querySelector('#knee-inside');
const kneeOutside = document.querySelector('#knee-outside');

function handleEntrySubmit(e) {
  e.preventDefault();
  const { id } = this.dataset;

  const data = {
    pain_level: painLevel.value,
    strength_level: strengthLevel.value,
    pain_top: kneeTop.checked,
    pain_bottom: kneeBottom.checked,
    pain_interior: kneeInside.checked,
    pain_exterior: kneeOutside.checked,
    UserId: id,
  };

  axios
    .post('/api/entries', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

axios
  .get(`/api/entries/${submitForm.dataset.id}`)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

submitForm.addEventListener('submit', handleEntrySubmit);
