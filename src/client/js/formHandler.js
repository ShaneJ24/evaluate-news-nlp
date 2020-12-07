function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }


//Function to send the data
const postData = async(url = '') => {
    const response = await fetch('http://localhost:8080/article', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
         'Content-Type': 'text/plain',
      },
      body: url,
    });
    
    try {
      const newData = await response.json();
      console.log(newData)
      return newData
    } catch (error) {
      console.log('error', error);
    }
  }
  
  //Update UI with collected data
  function updateUI(data) {
    console.log(data)
    polarity.innerHTML = "Polarity: " + polarityText(data.score_tag);
    confidence.innerHTML = `Subjectivity: ${data.Subjectivity}`;
    subjectivity.innerHTML = `Irony: ${data.Irony}`;
  }