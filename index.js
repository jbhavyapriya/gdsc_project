function invoke_git_api() {   
    var usrName = document.getElementById('username').value;
    if(usrName === null || usrName === ""){
      alert("The Github User Name field is empty. Please enter the User Name.");
    }
    else {
    //  document.getElementById("inputdetails").remove();
    //  document.getElementById('btn').remove();
    }
    let api = 'https://api.github.com/users/'.concat(usrName).concat("/repos");
    var gitrepodetails = document.getElementById("gitrepodetails")

    fetch(api).then((data)=>{
        return data.json();
    }).then((response)=>{

//      let html_string = '<p style="font-size:20px;font-family:arial,sans-serif;color:#202124"><b>Git Repos for the user : '.concat(usrName).concat('</p>').concat('<div class="row"><div class="column"><div class="card">Name</div></div><div class="column"><div class="card">Description</div></div><div class="column"><div class="card">html_url</div></div></div></b>');
      let html_string = '';
      for(let i = 0; i < response.length; i++){ 
        console.log(response[i]);
        var description = response[i].description;
        if (description === null) {
          description = '';
        }

        var htmlUrl = response[i].html_url;
        if (htmlUrl === null) {
          htmlUrl = '';
        }
         
        html_string = html_string.concat('<div class="container"><div class="card"><b>Name:</b> ').concat(response[i].name).concat('<br/><b>Description:</b> ').concat(description).concat('<br/><b>html_url:</b> <a href="').concat(htmlUrl).concat('">').concat(htmlUrl).concat('</a></div></div>')
      //  html_string = html_string.concat('<tr><td>').concat(response[i].name).concat('</td><td>').concat(description).concat('</td><td>').concat(htmlUrl).concat('</td></tr>')
      
      }

      gitrepodetails.innerHTML=html_string;
    })
  }