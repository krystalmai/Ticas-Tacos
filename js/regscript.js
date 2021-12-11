// Validate Form

const form = document.getElementById('form');
form.addEventListener('submit', e => {
    if (validate() === false) {
        e.preventDefault();
    }
});

// Validate Function
function validate() {
    let result = false;

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const username = document.getElementById('uname');
    const password = document.getElementById('pwd1');
    const password2 = document.getElementById('pwd2');
    const genderm = document.getElementById('genm');
    const genderf = document.getElementById('genf');
    const filling = document.querySelector('input[type="checkbox"]');
    const shell = document.getElementById('shell');




    //get value
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value;
    const password2Value = password2.value;
    const shellValue = shell.value;


    //validate conditions

    if (fnameValue === '') {

        setErrorFor(fname, 'First name cannot be blank');

    } else {

        setSuccessFor(fname);

    }

    if (lnameValue === '') {

        setErrorFor(lname, 'Last name cannot be blank');

    } else {

        setSuccessFor(lname);

    }
    if (usernameValue === '') {

        setErrorFor(username, 'Username cannot be blank');
    } else {

        setSuccessFor(username);

    }


    if (passwordValue === '') {

        setErrorFor(password, 'Password cannot be blank');

    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password must be at least 8 characters')
    } else {
        //add success class
        setSuccessFor(password);

    }
    if (password2Value === '') {

        setErrorFor(password2, 'Username cannot be blank');

    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Password does not match');

    } else {

        setSuccessFor(password2);

    }

    if (!genderf.checked && !genderm.checked) {

        setErrorFor(genderf, 'Please select a  gender');


    } else {

        setSuccessFor(genderf);


    }

    if (!document.getElementById('taco1').checked && !document.getElementById('taco2').checked && !document.getElementById('taco3').checked && !document.getElementById('taco4').checked) {

        setErrorFor(filling, 'Please choose at least 1 filling');
    } else {
        setSuccessFor(filling);
    }

    if (shellValue === '') {

        setErrorFor(shell, 'Please select a type of shell');

    } else {

        setSuccessFor(shell);
    }
    if (document.getElementsByClassName('form-control').length === document.getElementsByClassName('success').length) {
        result = true;

    }
    return result
}

// Set error/success class

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //show error
    small.innerHTML = message;

    //add error class
    formControl.className = 'form-control error';

}

//add success class
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
