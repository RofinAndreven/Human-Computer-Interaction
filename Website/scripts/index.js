$(function()
{
    $(".itemBox.promo").hide();
    var currentPromo = $(".itemBox.promo").first();
    var currentIndex = 0;
    currentPromo.show();

    $("#leftBtn").click(function()
    {
        currentPromo.hide();
        if(currentIndex == 0)
        {
            currentIndex = $(".itemBox.promo").length - 1;
            currentPromo = $(".itemBox.promo").last();
        }
        else
        {
            currentIndex--;
            currentPromo = currentPromo.prev();
        }
        currentPromo.show();
        console.log(currentPromo);
    })

    $("#rightBtn").click(function()
    {
        currentPromo.hide();
        if(currentIndex == $(".itemBox.promo").length - 1)
        {
            currentIndex = 0;
            currentPromo = $(".itemBox.promo").first();
        }
        else
        {
            currentIndex++;
            currentPromo = currentPromo.next();
        }
        currentPromo.show();
        console.log(currentPromo);
    })
})