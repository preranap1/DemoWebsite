//const loginForm = document.getElementById("login-form");
const twitterButton = document.getElementById("Twitter");
const fbButton = document.getElementById("Facebook");
const instaButton = document.getElementById("Instagram");
const websiteButton = document.getElementById("Website");
const paidsearchButton = document.getElementById("PaidSearch");
const organicsearchButton = document.getElementById("OrganicSearch");
//const loginErrorMsg = document.getElementById("login-error-msg");

twitterButton.addEventListener("click",(e) => {
  e.preventDefault();

  const click_type = twitterButton.value;
  alert(click_type);
})

fbButton.addEventListener("click",(e) => {
  e.preventDefault();

  const click_type = fbButton.value;
  alert(click_type);
})

instaButton.addEventListener("click",(e) => {
  e.preventDefault();

  const click_type = instaButton.value;
  alert(click_type);
})

websiteButton.addEventListener("click",(e) => {
  e.preventDefault();

  const click_type = websiteButton.value;
  alert(click_type);
})

paidsearchButton.addEventListener("click",(e) => {
  e.preventDefault();

  const click_type = paidsearchButton.value;
  alert(click_type);
})

organicsearchButton.addEventListener("click",(e) => {
  e.preventDefault();

  const click_type = organicsearchButton.value;
  alert(click_type);
})


// When the login button is clicked, the following code is executed
//loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
//    e.preventDefault();
    // Get the values input by the user in the form fields
//    const username = loginForm.username.value;
//    const password = loginForm.password.value;

//    if (username === "nfa_analytics" && password === "pwd") {
        // If the credentials are valid, show an alert box and reload the page
//        alert("You have successfully logged in.");
//        location.reload();
//    } else {
        // Otherwise, make the login error message show (change its oppacity)
  //      loginErrorMsg.style.opacity = 1;
    //}
//})
