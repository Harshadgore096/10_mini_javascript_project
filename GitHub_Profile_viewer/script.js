
function gotoGithub()
{
    const myurl=document.getElementById("myurl").value
    
    if(!myurl)
    {
        window.alert("Enter the URL Please.....");
        return;
    }
   
      fetch(`https://api.github.com/user/${myurl}`)
        .then(response=>{
          if(!response.ok)
            {
                throw new Error('Network Response is Not Ok');
            }  
            return response.json();
        })
        .then(data=>{
            displayProfile(data);
        })
        .catch( err=>{
            console.error("There Was a proble With Fetch Operation...".err);
        })

        function displayProfile(datavalue)
        {
          const profiledata= document.getElememtById("profile");
          profiledata.innerHTML=`<h2>${datavalue.login}</h2>`;
        }
}