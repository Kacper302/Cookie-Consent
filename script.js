document.addEventListener("DOMContentLoaded", function() {
    const acceptButton = document.getElementById("acceptCookies");
    const popupBlock = document.querySelector(".popupBlock");
    const cancelButton = document.querySelector(".cancel")
    if (localStorage.getItem("cookiesAccepted") === "true")
    {
        popupBlock.style.display = "none";
        return
    }

   acceptButton.addEventListener("click", function() {
    popupBlock.style.display = "none";
    localStorage.setItem("cookiesAccepted", "true")
   })
    cancelButton.addEventListener("click", function() {
    popupBlock.style.display = "none";
    })

})