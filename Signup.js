const loginButton = document.getElementById("login-form-submit");
const createAccount = document.getElementById("createAccount");


    loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const Emailadd = createAccount.Email.value;

        alert('Successful Signup');
        location.reload();

    });
