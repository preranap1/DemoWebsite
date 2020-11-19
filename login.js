const loginEmail = document.getElementById("loginEmail");
const loginAccountButton = document.getElementById("loginAccount");


    loginAccountButton.addEventListener("click", (e) => {
        e.preventDefault();

        const Emailadd = loginEmail.value;

        alert('You have successfully logged in.');
        //window.location.href = window.location.href + "Email=" +Emailadd
        //location.reload();
    });
