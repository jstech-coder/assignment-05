// bg color function
const changeBg = document
  .getElementById('change-bg-btn')
  .addEventListener('click', function () {
    const colors = [
      '#F8F9FA',
      '#E9ECEF',
      '#DCEEFB',
      '#D1F2EB',
      '#FFE5B4',
      '#E6E6FA ',
    ];
    const changeColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = changeColor;
  });

// completed button functionality

const button = document.getElementById('showTextBtn');
const textParagraph = document.getElementById('text');
const displayText = document.getElementById('displayText');
const increaseNumber = document.getElementById('increase-number');
const decreaseNumber = document.getElementById('decrease-number');
let increaseNum = 23;
let decreaseNum = 6;

button.addEventListener('click', function () {
  alert('Board updated successfully');
  const currentTime = new Date().toLocaleTimeString();
  displayText.innerHTML = `<strong>Fix Mobile Button Issue</strong> <br>
  <p>You have completed the task Fix Mobile Button Issue at ${currentTime}</p>`;
  increaseNum++;
  increaseNumber.textContent = increaseNum;
  decreaseNum--;
  decreaseNumber.textContent = decreaseNum;
  button.disabled = true;
  button.style.backgroundColor = 'lightGray';
});

const secondBtn = document
  .getElementById('second-btn')
  .addEventListener('click', function () {
    alert('Board updated successfully');
    const currentTime = new Date().toLocaleTimeString();
    displayText1.innerHTML = `<strong>Add Dark Mode</strong> <br><p>You have completed the task Add Dark Mode at ${currentTime}</p>`;

    increaseNum++;
    increaseNumber.textContent = increaseNum;
    decreaseNum--;
    decreaseNumber.textContent = decreaseNum;
    const secondBtn = document.getElementById('second-btn');
    secondBtn.disabled = true;
    secondBtn.style.backgroundColor = 'lightGray';
  });
const thirdBtn = document
  .getElementById('third-btn')
  .addEventListener('click', function () {
    alert('Board updated successfully');
    const currentTime = new Date().toLocaleTimeString();
    displayText2.innerHTML = `<strong>Optimize Home page</strong> <br><p>You have completed the task Optimize Home page at ${currentTime}</p>`;

    increaseNum++;
    increaseNumber.textContent = increaseNum;
    decreaseNum--;
    decreaseNumber.textContent = decreaseNum;
    const thirdBtn = document.getElementById('third-btn');
    thirdBtn.disabled = true;
    thirdBtn.style.backgroundColor = 'lightGray';
  });
const fourthBtn = document
  .getElementById('fourth-btn')
  .addEventListener('click', function () {
    alert('Board updated successfully');
    const currentTime = new Date().toLocaleTimeString();
    displayText3.innerHTML = `<strong>Add new emoji 🤲</strong> <br><p>You have completed the task Add new emoji 🤲 at ${currentTime}</p>`;

    increaseNum++;
    increaseNumber.textContent = increaseNum;
    decreaseNum--;
    decreaseNumber.textContent = decreaseNum;
    const fourthBtn = document.getElementById('fourth-btn');
    fourthBtn.disabled = true;
    fourthBtn.style.backgroundColor = 'lightGray';
  });
const fifthBtn = document
  .getElementById('fifth-btn')
  .addEventListener('click', function () {
    alert('Board updated successfully');
    const currentTime = new Date().toLocaleTimeString();
    displayText4.innerHTML = `<strong>Integrate OpenAI API</strong> <br><p>You have completed the task Integrate OpenAI API at ${currentTime}</p>`;

    increaseNum++;
    increaseNumber.textContent = increaseNum;
    decreaseNum--;
    decreaseNumber.textContent = decreaseNum;
    const fifthBtn = document.getElementById('fifth-btn');
    fifthBtn.disabled = true;
    fifthBtn.style.backgroundColor = 'lightGray';
  });
const sixthBtn = document
  .getElementById('sixth-btn')
  .addEventListener('click', function () {
    alert('Board updated successfully');
    alert('congrats!!! you have completed all the tasks ');
    const currentTime = new Date().toLocaleTimeString();
    displayText5.innerHTML = `<strong>Improve Job searching</strong> <br><p>You have completed the task Improve Job searching at ${currentTime}</p>`;

    increaseNum++;
    increaseNumber.textContent = increaseNum;
    decreaseNum--;
    decreaseNumber.textContent = decreaseNum;
    const sixthBtn = document.getElementById('sixth-btn');
    sixthBtn.disabled = true;
    sixthBtn.style.backgroundColor = 'lightGray';
  });
const cleartext = document.getElementById('clear-text');
const clearBtn = document
  .getElementById('clear-btn')
  .addEventListener('click', function () {
    cleartext.style.display = 'none';
  });

const anotherPage = document
  .getElementById('another-html')
  .addEventListener('click', function () {
    window.location.href = 'index1.html';
  });
