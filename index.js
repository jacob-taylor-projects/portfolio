async function getProfile() {
    const response = await fetch("https://api.github.com/users/jacob-taylor-projects");
    const data = await response.json();
    return { bio: data.bio, avatar: data.avatar_url };
  }

  getProfile().then((profile) => {
    document.getElementById("bio").innerText = profile.bio;
    document.getElementById("about-me-img").src = profile.avatar;
  });
  
  
