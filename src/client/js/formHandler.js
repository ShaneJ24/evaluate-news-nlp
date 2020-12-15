function handleSubmit(event) {
  console.log('[handleSubmit]', event, event.target)
    event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.validateURL(formText)

  console.log("::: Form Submitted :::")
    
  postData( formText )

  .then(updateUI)
  
}


    // fetch("http://localhost:8080/newsarticle", {
    //   method: "POST",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "text/plain",
    //   },
    //   body: formText,
    // })
    //   .then((res) => res.json())

    //     document.getElementById("Confidence").innerHTML = `Confidence: ${res.confidence}`;
    //     document.getElementById("Irony").innerHTML = `Irony: ${res.irony}`;
    //     document.getElementById("Subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        

//Function to send the data
const postData = async(url = '') => {
  const response = await fetch('http://localhost:8081/newsarticle', {
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

function updateUI(data) {
  console.log(data)
  document.getElementById('Confidence').innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById('Subjectivity').innerHTML = `Subjectivity: ${data.Subjectivity}`;
  document.getElementById('Irony').innerHTML = `Irony: ${data.Irony}`; 
}}
export {handleSubmit}
