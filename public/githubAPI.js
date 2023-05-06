class GitHubAPI {
  constructor() {
    this.clientId = "b1985b551a4046d7abc3";
    this.clientSecret = "6b65ab52e0a693e87460d113c9d5b3049b3475ea";
    this.reposCount = 5;
    this.reposSort = "created: asc";
  }

  async getUser(user) {
    document.getElementById("profile").innerHTML = `
      <img src="./img/loading-buffering.gif" class="mx-auto mt-6" alt="loading" />
    `;
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
