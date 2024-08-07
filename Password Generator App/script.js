function generate(){

    let dictionary = "";
    let password = "";
    let count = 0;

    if(document.getElementById("lowercaseLetters").checked){
        let character = "abcdefghijklmnopqrst";
        dictionary += character;
        const pos = Math.floor(Math.random() * character.length);
        password += character[pos];
        count++;
    }

    if(document.getElementById("uppercaseLetters").checked){
        let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        dictionary += character;
        const pos = Math.floor(Math.random() * character.length);
        password += character[pos];
        count++;
    }

    if(document.getElementById("digits").checked){
        let character = "1234567890";
        dictionary += character;
        const pos = Math.floor(Math.random() * character.length);
        password += character[pos];
        count++;
    }

    if(document.getElementById("symbols").checked){
        let character = "!@#$%^&*";
        dictionary += character;
        const pos = Math.floor(Math.random() * character.length);
        password += character[pos];
        count++;
    }

    const length = document.querySelector('input[type="range"]').value;

    for(let i=count;i<length;i++){
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    // shuffle the password
    let newPassword = password.split('');
    for(let i=0;i<newPassword.length;i++){
        let j = Math.floor(Math.random()*(i+1));
        [newPassword[i],newPassword[j]] = [newPassword[j],newPassword[i]];
    }

    document.querySelector('input[type="text"]').value = newPassword.join('');

}

document.querySelector('input[type="range"]').addEventListener('input',(e)=>{
    document.querySelector('div.range span').innerHTML = e.target.value;
});

document.querySelector('div.password button').addEventListener('click',()=>{
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(()=>{
        document.querySelector('div.password button').innerHTML = "copied";
        setTimeout(()=>{
            document.querySelector("div.password button").innerHTML = "copy";
        },1000);
    });
});