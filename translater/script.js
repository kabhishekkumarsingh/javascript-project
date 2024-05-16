let ipStr = document.getElementById("ipStr");
let opStr = document.getElementById("opStr");
let ipLan = document.getElementById("ipLan");
let opLan = document.getElementById("opLan");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (ipStr.value.trim() !== "") {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '11e0d8afb2msh05d90da7fa13bacp1c70f1jsn38f94ea7bcdb',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        q: ipStr.value,
        source: ipLan.value,
        target: opLan.value
      }),
    };

    try {
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          opStr.value = data.data.translations[0].translatedText;
        })
        .catch(error => {
          console.error('Error:', error);
          opStr.placeholder = 'Translation failed. Please try again later.';
        });
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    alert("Input Can't be Empty");
  }
});
function ajaxFun(str) {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key':'11e0d8afb2msh05d90da7fa13bacp1c70f1jsn38f94ea7bcdb', 
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        q: str,
        source: ipLan.value,
        target: opLan.value
      }),
    };
  
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        opStr.value = data.data.translations[0].translatedText;
      })
      .catch(error => {
        console.error('Error:', error);
        opStr.placeholder = '';
      });
  }
