// HTML Variables

const submitForm = document.querySelector('#entry-submit');
const strengthLevel = document.querySelector('#strength');
const painLevel = document.querySelector('#pain');
const kneeTop = document.querySelector('#knee-top');
const kneeBottom = document.querySelector('#knee-bottom');
const kneeInside = document.querySelector('#knee-inside');
const kneeOutside = document.querySelector('#knee-outside');
const entryTable = document.querySelector('#entry-table');

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
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

axios
  .get(`/api/entries/${submitForm.dataset.id}`)
  .then((response) => {
    console.log(response);
    const entries = response.data;
    const painData = [];
    const strengthData = [];

    entries.forEach((entry) => {
      const entryDiv = document.createElement('div');
      entryDiv.classList.add('entry');
      const strengthP = document.createElement('p');
      strengthP.textContent = entry.strength_level;
      const painP = document.createElement('p');
      painP.textContent = entry.pain_level;

      const pT = document.createElement('p');
      if (entry.pain_top) {
        pT.textContent = '√';
      }
      const pB = document.createElement('p');
      if (entry.pain_bottom) {
        pB.textContent = '√';
      }
      const pI = document.createElement('p');
      if (entry.pain_interior) {
        pI.textContent = '√';
      }
      const pO = document.createElement('p');
      if (entry.pain_exterior) {
        pO.textContent = '√';
      }

      const unparsedDate = moment(entry.createdAt);
      const date = document.createElement('p');
      date.textContent = unparsedDate.format('MMMM Do YYYY');
      strengthData.push({
        x: new Date(entry.createdAt),
        y: entry.strength_level,
      });
      painData.push({
        x: new Date(entry.createdAt),
        y: entry.pain_level,
      });

      entryDiv.appendChild(strengthP);
      entryDiv.appendChild(painP);
      entryDiv.appendChild(pT);
      entryDiv.appendChild(pB);
      entryDiv.appendChild(pI);
      entryDiv.appendChild(pO);
      entryDiv.appendChild(date);
      entryTable.appendChild(entryDiv);
    });

    console.log(painData);
    console.log(strengthData);

    // Dummy chart attached to the canvas element in userPage.hbs
    const ctx = document.getElementById('graph').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Strength',
            backgroundColor: 'rgba(255, 99, 132, .5)',
            borderColor: 'rgba(265, 99, 132, .5)',
            data: strengthData,
          },
          {
            label: 'Pain',
            backgroundColor: 'rgba(121, 99, 132, .5)',
            borderColor: 'rgba(131, 99, 132, .5)',
            data: painData,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                displayFormats: {
                  hour: 'MMM Do',
                },
              },
              distribution: 'series',
            },
          ],
          yAxes: [
            {
              type: 'linear',
              ticks: {
                beginAtZero: true,
                max: 10,
              },
            },
          ],
        },
      },
    });
  })
  .catch((error) => {
    console.log(error);
  });

submitForm.addEventListener('submit', handleEntrySubmit);
