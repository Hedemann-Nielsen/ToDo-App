const tilføjBtn = document.getElementById('submit');
const nyOpgave = document.getElementById('opgaveIndput');
const addNyOpgave = document.getElementById('opgaveoutput');

tilføjBtn.addEventListener('click', () => {
  const tilføjOpgave = nyOpgave.value;
  const spacer = " ";
  const newLine = document.createElement('div');
  newLine.innerHTML = '<i class="fa-solid fa-circle-xmark" id="removeTask"></i>' + spacer + tilføjOpgave;
  addNyOpgave.appendChild(newLine);
  nyOpgave.value = "";

  const removeTask = newLine.querySelector('#removeTask');
  removeTask.addEventListener('click', () => {
    addNyOpgave.removeChild(newLine);
  });


let isOpgaveAdded = true;
const buttomContainer = document.getElementById('buttom-container');

  if (isOpgaveAdded) {
    buttomContainer.style.display = "block";
    isOpgaveAdded = false;
  }
});


function subscribeToPushNotifications() {
    self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'your_public_key'
    })
    .then(subscription => {
      // Send the subscription object to your server for future use
      sendSubscriptionToServer(subscription);
    })
    .catch(error => {
      // Handle any errors that occur during subscription
    });
  }