function send() {

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let number = document.getElementById("number")
    let message = document.getElementById("massage")

    let result = document.getElementById("result");

     if (name.value == '') {
        result.innerHTML = '❗️Name is required❗️'
        return
    }
  
    if (email.value == '') {
        result.innerHTML = '❗️Email is required❗️'
        return
    }

   
    if (number.value == '') {
        result.innerHTML = '❗️Number is required❗️'
        return
    }

    if (message.value == '') {
        result.innerHTML = '❗️Please write your message2❗️'
        return
    }


}