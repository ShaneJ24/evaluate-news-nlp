function handleSubmit(event) {
  console.log('[handleSubmit]', event, event.target)
    event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.validateURL(formText)

  console.log("::: Form Submitted :::")
    
  postData( formText )
    
  .then (updateUI()
  )
}
export {handleSubmit}


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
  const response = await fetch('http://localhost:8081/article', {
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
  
  
//Update UI with the data from the Meaningcloud API
const updateUI = async () => {
  const request = await fetch('/newsarticle');
  try{
    const allData = await request.json();
    document.getElementById('Confidence').innerHTML = allData.confidence;
    document.getElementById('Irony').innerHTML = allData.irony;
    document.getElementById('Subjectivity').innerHTML = allData.subjectivity;
  
  }catch(error){
    console.log("error", error);
  }
