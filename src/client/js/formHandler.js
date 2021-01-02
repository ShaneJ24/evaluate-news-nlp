function handleSubmit(event) {
  console.log('[handleSubmit]', event, event.target)
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.validateURL(formText)

  console.log("::: Form Submitted :::")

  postData(formText)
}

//Function to send the data
const postData = (url = '') => {
  const response = fetch('http://localhost:8081/newsarticle', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: url,
  }).then(res => res.json())
    .then(newData => updateUI(newData))
    .catch((error) => {
      console.log('error', error);
    });
}

function updateUI(newData) {
  console.log(newData.status.msg)
  document.getElementById('Confidence').innerHTML = `Confidence: ${newData.confidence}`;
  document.getElementById('Subjectivity').innerHTML = `Subjectivity: ${newData.subjectivity}`;
  document.getElementById('Irony').innerHTML = `Irony: ${newData.irony}`;
}
export { handleSubmit }
