function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	
        get_data(this.responseText);
    }
    else
    	alert("no data found");
   
  };
  xhttp.open("GET", "https://jobs.github.com/positions.json?utf-8=true", true);
  xhttp.send();
}

function get_data(data){
    var container = document.getElementById("card-body");
    jobs = JSON.parse(data)
    

    jobs.forEach(e => {
        var card = document.createElement('div');
        card.classList = 'card';
        const cont = `
            <img class = "company_logo" src = "${e.company_logo}">
            <p class = "job_type">${e.type}</p>
            <h4 class = "title">${e.title}</h4>
            <p class = "company_name">${e.company}</p>
            <p class = "location">${e.location}</p>
        `;

        card.innerHTML = cont;

        container.append(card);

    });
}


function searchFunc(){
    var title = document.getElementById("title").value
    var location = document.getElementById("location").value
    var fullTime = document.getElementById("full-time").checked
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        container.innerHTML = "";
        document.getElementsByClassName('load')[0].style.display = "flex"
        get_data(this.responseText)
        }
    }
    xhttp.open("GET",'https://jobs.github.com/positions.json?title=${title}&location=${location}&full_time=${fullTime}',true);
    xhttp.send();
    
}