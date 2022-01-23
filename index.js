function invoke_git_api() {   
    var usrName = document.getElementById('username').value;
    let api = 'https://api.github.com/users/'.concat(usrName).concat("/repos");
    var gitrepodetails = document.getElementById("gitrepodetails")
    document.getElementById("inputdetails").remove();
    document.getElementById('btn').remove();

    fetch(api).then((data)=>{
        return data.json();
    }).then((response)=>{

      let html_string = '<p style="font-size:20px;font-family:arial,sans-serif;color:#202124">Git Repos for the user : '.concat(usrName).concat('</p>').concat('<table border = "1"><tr><th>Name</th><th>Description</th><th>html_url</th></tr>');
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

        html_string = html_string.concat('<tr><td>').concat(response[i].name).concat('</td><td>').concat(description).concat('</td><td>').concat(htmlUrl).concat('</td></tr>')

      }

      gitrepodetails.innerHTML=html_string;
    })
  }