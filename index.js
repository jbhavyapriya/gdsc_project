var input = document.getElementById("username");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});

function invoke_git_api() {   
    var usrName = document.getElementById('username').value;
    if(usrName === null || usrName === ""){
        alert("The Github User Name field is empty. Please enter the User Name.");
    }

    let api = 'https://api.github.com/users/'.concat(usrName).concat("/repos");
    var gitrepodetails = document.getElementById("gitrepodetails")

    fetch(api).then((data)=>{
        return data.json();
    }).then((response)=>{
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
        
        }

        gitrepodetails.innerHTML=html_string;
    })
}