const api_url = 'https://api.github.com/users/nostromos/repos';

async function getRepos () {
    let rawResponse = await fetch(api_url);
        let response = await rawResponse.json();
        console.log(response);
    }

getRepos();