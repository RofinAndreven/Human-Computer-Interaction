function validate()
{
    var name1 = document.getElementById("contact_name").value;
    var email = document.getElementById("contact_email").value;
    var msg = document.getElementById("contact_msg").value;
    var errorMsg = document.getElementById("errorMsg");

    var response = validateName(name1);
    if(response == "")
    {
        response = validateEmail(email);
        if(response == "")
        {
            response = validateMsg(msg);
            if(response == "")
            {
                response = "Message successfully sent!"
            }
        }
    }
    //https://www.w3schools.com/js/js_htmldom_css.asp
    if(response == "Message successfully sent!")
    {
        errorMsg.style.color = "lightgreen";
    }
    errorMsg.innerHTML = response;
}

function validateName(name1)
{
    if(name1 == "")
    {
        return "Name is required!";
    }
    return "";
}

function validateEmail(email)
{
    if(email == "")
    {
        return "Email is required!";
    }
    if(email.indexOf("@") == -1)
    {
        return "Email must contains @ (at)!"
    }
    if(email.split("@").length > 2)
    {
        return "Email must contains 1 @ (at) only!"
    }
    return "";
}

function validateMsg(msg)
{
    if(msg == "")
    {
        return "Message is required!"
    }
    if(msg.length < 10)
    {
        return "Message minimum characters are 10!"
    }
    return "";
}