

  const linksId = {
    github: "marsc1",
    youtube:"channel/UCDJ0ij65hms-Ajk4UbkkaMg",
    facebook: "",
    instagram: "",
    twitter: ""
  }

  function changeSocialMediaLinks(){
   /* userName.textContent = "jonas" */
    for(let li of socialLinks.children){
      const social = (li.getAttribute('class'))
      li.children[0].href = `http://${social}.com/${linksId[social]}`
    }
  }

  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksId.github}`
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
      })
      
  }

  getGitHubProfileInfos()