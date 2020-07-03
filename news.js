console.log("Hello Bhomeshwar");
// cfb1219d069f4822ae9781e6deaa5b31

let card = document.getElementById("card");

let apiKey = "cfb1219d069f4822ae9781e6deaa5b31";

const xhr = new XMLHttpRequest();



xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);


// xhr.setRequestHeader('Content-type','application/json');

xhr.onload = function()
    {
        if (this.status === 200)
        {

            let newsArray = JSON.parse(this.responseText);

            let mynews = newsArray.articles;
            let news = "";

            console.log(mynews)

            mynews.forEach(function(element,index) 
            {
                news += 
                `
                <div class="card my-3 mx-3 noteCard">
                <img src="${element.urlToImage}" class="card-img-top" alt="news image">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.content}</p>
                  <a href="${element.url}" class="btn btn-primary">Read more</a>
                </div>
              </div>
                `
            });

            card.innerHTML = news;
        }

        else
        {
            console.log("Some error occurred");
        }
    }

xhr.send();

{/*  */}