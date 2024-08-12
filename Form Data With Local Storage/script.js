let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userMessage = document.getElementById("userMessage");

// reset input field
let resetHandler = function(){
    userName.value = '';
    userEmail.value = '';
    userMessage.value = '';
}

// handle submit
let submitHandler = function(){
    if(userName.value === "" || userEmail.value === "" || userMessage.value === ""){
        alert('Please provide all field');
    }
    else{
        const contactFormData = userName.value + " " + userMessage.value + " " + userEmail.value;
        localStorage.setItem('formData',contactFormData);
        alert("Data Saved Succesfully");
        resetHandler();
    }
}