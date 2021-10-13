function validate()
{
    var name1 = document.getElementById("register_name").value;
    var email = document.getElementById("register_email").value;
    var male = document.getElementById("register_gender_male").checked;
    var female = document.getElementById("register_gender_female").checked;
    var address = document.getElementById("register_address").value;
    var city = document.getElementById("register_city").value;
    var agree = document.getElementById("register_agreement").checked;
    var errorMsg = document.getElementById("errorMsg");

    var response = validateName(name1);
    if(response == "")
    {
        response = validateEmail(email);
        if(response == "")
        {
            response = validateGender(male, female);
            if(response == "")
            {
                response = validateAddress(address);
                if(response == "")
                {
                    response = validateCity(city);
                    if(response == "")
                    {
                        response = validateAgreement(agree);
                        if(response == "")
                        {
                            response = "Successfully registered!"
                        }
                    }
                }
            }
        }
    }
    //https://www.w3schools.com/js/js_htmldom_css.asp
    if(response == "Successfully registered!")
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

function validateGender(male, female)
{
    if(male == false && female == false)
    {
        return "You must select a gender!"
    }
    return "";
}

function validateAddress(address)
{
    if(address == "")
    {
        return "Address is required!"
    }
    if(address.length < 10)
    {
        return "Address minimum characters are 10!"
    }
    return "";
}

function validateCity(city)
{
    if(city == "")
    {
        return "City is required!"
    }
    return "";
}

function validateAgreement(agree)
{
    if(agree == false)
    {
        return "You need to agree to the terms and conditions";
    }
    return "";
}