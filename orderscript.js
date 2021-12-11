// Show/hide delivery info

function showDeliveryInfo() {

    const delContainer = document.getElementById('addr-container');

    const sameContainer = document.getElementById('same-container');
    if (document.getElementById('delivery').checked) {
        delContainer.style.display = "block";
        sameContainer.style.display = "block";
    }

}

function hideDeliveryInfo() {
    const delContainer = document.getElementById('addr-container');

    const sameContainer = document.getElementById('same-container');
    if (document.getElementById('pickup').checked) {
        delContainer.style.display = "none";
        sameContainer.style.display = "none";
    }
}

// Autofill billing address

function autofill() {
    // get delivery address value
    const delAddr = document.getElementById('address');
    const delAddrValue = delAddr.value;

    // set billing address value if checkbox is checked

    if (document.getElementById('same').checked && delAddrValue !== "") {
        document.getElementById('bill-address').value = delAddrValue;
    } else if (document.getElementById('same').checked && delAddrValue === "") {
        setErrorFor(delAddr, 'Please enter delivery address first.');
    } else {
        document.getElementById('bill-address').value = "";
    }

}

// Show/hide card info

function showCard() {

    const cardContainer = document.getElementById('card-container');


    if (document.getElementById('online').checked) {
        cardContainer.style.display = "block";

    }

}

function hideCard() {
    const cardContainer = document.getElementById('card-container');

    if (document.getElementById('onpickup').checked) {
        cardContainer.style.display = "none";

    }
}



// Validate Form

const form = document.getElementById('form');
form.addEventListener('submit', e => {
    if (validate() === false) {
        e.preventDefault();
    }
});

function validate() {
    let result = false;
    const pickup = document.getElementById('pickup');
    const delivery = document.getElementById('delivery');
    const delAddr = document.getElementById('address');
    const billAddr = document.getElementById('bill-address');
    const postcode = document.getElementById('postcode');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const payOnline = document.getElementById('online');
    const onPickup = document.getElementById('onpickup');
    const card = document.getElementById('card');
    const cardNum = document.getElementById('card-number');
    const cardExp = document.getElementById('card-expires');
    const cardCvc = document.getElementById('card-cvc');

    //get value

    let delAddrValue = delAddr.value;
    let billAddrValue = billAddr.value;
    let postcodeValue = postcode.value;
    let emailValue = email.value.trim();
    let phoneValue = phone.value.trim();
    let cardValue = card.value;
    let cardNumValue = cardNum.value.trim();
    let cardExpValue = cardExp.value.trim();
    let cardCvcValue = cardCvc.value.trim();

    if (!delivery.checked && !pickup.checked) {
        setErrorFor(delivery, "Please choose delivery or pickup");
    } else if (delivery.checked) {
        if (delAddrValue === '') {

            setErrorFor(delAddr, 'Delivery address cannot be blank');

        } else {

            setSuccessFor(delAddr);

        }
    } else {
        setSuccessFor(pickup);
        setSuccessFor(delAddr);
    }


    if (billAddrValue === '') {

        setErrorFor(billAddr, 'Billing address cannot be blank');
    } else {

        setSuccessFor(billAddr);

    }

    if (postcodeValue === '') {

        setErrorFor(postcode, 'Email cannot be blank');
    } else if (postcodeValue.length != 4) {

        setErrorFor(postcode, 'Postcode must be 4 digits');

    } else {
        setSuccessFor(postcode);

    }

    if (phoneValue === '') {

        setErrorFor(phone, 'Billing address cannot be blank');
    } else {

        setSuccessFor(phone);

    }
    if (emailValue === '') {

        setErrorFor(email, 'Email cannot be blank');
    } else {

        setSuccessFor(email);


    }

    if (!payOnline.checked && !onPickup.checked) {
        setErrorFor(payOnline, "Please select a payment method");
    } else if (payOnline.checked) {
        if (cardValue === '') {
            setErrorFor(card, "Please select a type of card");
        } else {
            setSuccessFor(card);

        }

        if (cardNumValue === '') {
            setErrorFor(cardNum, "Card number cannot be blank");
        } else if ((cardValue === 'mastercard' || cardValue === 'visa') && (cardNumValue.length !== 16)) {
            setErrorFor(cardNum, "Card number must be 16 digits");
        } else if (cardValue === 'american-express' && cardNumValue.length !== 15) {
            setErrorFor(cardNum, "Card number must be 15 digits");
        } else {
            setSuccessFor(cardNum);

        }

        if (cardExpValue === '') {
            setErrorFor(cardExp, "Please enter card expiration");
        } else if (!cardExpValue.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
            setErrorFor(cardExp, "Card expiration must follow MM/YY format");
        } else {
            setSuccessFor(cardExp);

        }

        if (cardCvcValue === '') {
            setErrorFor(cardCvc, "Please enter card CVV/CVC");
        } else if (!cardCvcValue.match(/^[0-9]{3}$/)) {
            setErrorFor(cardCvc, "CVV/CVC must be 3 digits");
        } else {
            setSuccessFor(cardCvc);

        }

    } else {
        setSuccessFor(onPickup);
        setSuccessFor(card);
        setSuccessFor(cardNum);
        setSuccessFor(cardExp);
        setSuccessFor(cardCvc);

    }

    if (document.getElementsByClassName('form-control').length === document.getElementsByClassName('success').length) {
        result = true;

    }
    return result
}

// Set error/ sucess class

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
