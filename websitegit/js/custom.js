document.addEventListener("DOMContentLoaded",function() {

  fetch('https://animechan.vercel.app/api/quotes')//fetch a rest api
      .then(function (response) {
          return response.json();//return the data as a json object
      })
      .then(function (data) {
          appendData(data);//make data readable
      })
      .catch(function (err) {
          console.log('error: ' + err);//error exception
          alert("API failed!");
      });
  function appendData(data) {//call fucntion to add all the quotes
      var mainContainer = document.getElementById("output");
      for (var i = 0; i < data.length; i++) {//loop throught all the given json objects
          var div = document.createElement("div");
          div.innerHTML = 'Anime: ' + data[i].anime + ': Character: ' + data[i].character + ': Quote: ' + data[i].quote; + '\n'
          mainContainer.appendChild(div);//edit and apply new divs
      }
  } 

});
