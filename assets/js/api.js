// api.js

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Tiago-Salvador/Web-Curriculo/main/assets/data/profile.json';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;
}