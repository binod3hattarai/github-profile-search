class UserInterface {
  constructor() {
    this.profileEl = document.getElementById("profile");
  }

  showProfile(user) {
    this.profileEl.innerHTML = `
        <div class="rounded-sm shadow-md p-3 flex flex-col md:flex-row md:justify-evenly md:items-center md:py-6">
          <div class="flex flex-col items-stretch mb-6 md:mb-0">
            <img class="rounded-md" src="${user.avatar_url}" alt="img">
            <a class="text-center p-2 rounded-full bg-indigo-600 text-gray-50 mt-3" href="${
              user.html_url
            }" target="_blank">
              View Profile
            </a>
          </div>

          <div class="md:ml-5">
            <div class="flex flex-col items-stretch text-center md:flex-row md:justify-between md:items-center">
              <span class="p-2 rounded-lg bg-gray-700 text-gray-50 md:px-5">
                Public Repos: ${user.public_repos}
              </span>
              <span class="p-2 rounded-lg bg-gray-700 text-gray-50 mt-2 md:mt-0 md:ml-2 md:px-5">
                Public Gists: ${user.public_gists}
              </span>
              <span class="p-2 rounded-lg bg-gray-700 text-gray-50 mt-2 md:mt-0 md:ml-2 md:px-5">
                Followers: ${user.followers}
              </span>
              <span class="p-2 rounded-lg bg-gray-700 text-gray-50 mt-2 md:mt-0 md:ml-2 md:px-5">
                Following: ${user.following}
              </span>
            </div>
            
            <ul class="flex flex-col mt-7 pb-4 text-lg">
              <li class="py-4 border-b border-gray-300">
                Company: ${user.company}
              </li>
              <li class="py-4 border-b border-gray-300">
                Website/Blog:
                <a class="underline" href="${user.blog}" target="_blank">
                  ${user.blog}
                </a>
              </li>
              <li class="py-4 border-b border-gray-300">
                Location: ${user.location}
              </li>
              <li class="py-4 border-b border-gray-300">
                Member Since: ${new Date(user.created_at)}
              </li>
            </ul>
          </div>
        </div>

        <h2 class="my-8 text-2xl font-semibold pb-1 text-center md:mt-16 md:mb-14">Latest Repos</h2>
        <div id="repos"></div>
    `;
    console.log(user);
  }

  // Show repos
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
        <div class="rounded-sm shadow-md p-3 flex flex-col mb-7 text-center md:flex-row md:justify-between md:items-center md:p-7 md:mb-14 bg-gray-200">
          <p class="mb-3 text-lg md:mb-0">
            <a class="underline" href="${repo.html_url}" target="_blank">
              ${repo.name}
            </a>
          </p>

          <div class="flex flex-col items-stretch md:flex-row md:justify-start md:items-center">
            <span class="rounded-lg p-2 bg-gray-700 text-gray-50 md:px-5">
              Stars: ${repo.stargazers_count}
            </span>
            <span class="rounded-lg p-2 bg-gray-700 text-gray-50 mt-2 md:mt-0 md:ml-2 md:px-5">
              Watchers: ${repo.watchers_count}
            </span>
            <span class="rounded-lg p-2 bg-gray-700 text-gray-50 mt-2 md:mt-0 md:ml-2 md:px-5">
              Forks: ${repo.forks_count}
            </span>
          </div>
        </div>
      `;
    });
    document.getElementById("repos").innerHTML = output;
    console.log(repos);
  }

  // show bbAlert
  showAlert() {
    gitHubUsernameEl.setAttribute("placeholder", "Enter The Username");
    gitHubUsernameEl.classList.add(
      "border",
      "border-red-600",
      "placeholder-red-300"
    );
  }

  // Clear Alert
  clearAlert() {
    gitHubUsernameEl.setAttribute("placeholder", "GitHub Username");
    gitHubUsernameEl.classList.remove("border-red-600", "placeholder-red-300");
  }

  // Clear Profile
  clearProfile() {
    this.profileEl.innerHTML = "";
  }
}
