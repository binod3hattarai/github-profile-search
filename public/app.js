const gitHubUsernameEl = document.getElementById("github-username");
const submitBtnEl = document.getElementById("submit-btn");
const searchForm = document.getElementById("search-form");

// Init
const gitHub = new GitHubAPI();

// Init
const ui = new UserInterface();

searchForm.addEventListener("submit", function (e) {
  // prevent default
  e.preventDefault();

  const username = gitHubUsernameEl.value.trim();

  if (username !== "") {
    gitHub.getUser(username).then(function (data) {
      if (data.profile.message === "Not Found") {
        // clear profile
        ui.clearProfile();

        // show user not found alert
        document.getElementById("profile").innerHTML = `
          <p class="text-center border border-red-600 p-2 rounded-sm bg-red-300 text-red-700">User Not Found.</p>
        `;
      } else {
        // show profile
        ui.showProfile(data.profile);

        // show repos
        ui.showRepos(data.repos);
      }
    });
    console.log("we will search that username. wait");
  } else {
    // clear profile
    ui.clearProfile();

    // show alert
    ui.showAlert();

    // event listener
    gitHubUsernameEl.addEventListener("focus", function () {
      ui.clearAlert();
    });
  }
});
