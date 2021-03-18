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
            <p class = "job_type" id = "${e.id}">${e.type}</p>
            <h4 class = "title">${e.title}</h4>
            <p class = "company_name">${e.company}</p>
            <p class = "location">${e.location}</p>
        `;

        card.innerHTML = cont;
        card.addEventListener('click', getId);
        container.append(card);

    });
}


function getId(){
    var job_id = this.getElementsByClassName("job_type")[0].id
    url = `http://127.0.0.1:5500/jobview.html?id=${job_id}`
    location.href = url;
}



function searchFunc(){
    var title = document.getElementById("s-title").value.trim()
    var location = document.getElementById("s-location").value.trim()
    var fullTime = document.getElementById("s-full-time").checked
    var container = document.getElementById("card-body");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
    
        get_data(this.responseText)
        }
    }
    xhttp.open("GET",`https://jobs.github.com/positions.json?title=${title}&location=${location}&full_time=${fullTime}`,true);
    xhttp.send();
    
}