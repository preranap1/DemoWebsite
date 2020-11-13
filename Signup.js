const signupEmail = document.getElementById("signupEmail");
const createAccountButton = document.getElementById("createAccount");


    createAccountButton.addEventListener("click", (e) => {
        e.preventDefault();

        const Emailadd = signupEmail.value;

        alert('Successful Signup');
        window.location.href = window.location.href + "?Email=" +Emailadd
        location.reload()
    });
