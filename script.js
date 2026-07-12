console.log("YROXE Website Loaded 🚀");


const buttons = document.querySelectorAll(".buttons a");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Button Clicked:", button.innerText);

    });

});



function copyWallet(id) {

    let wallet = document.getElementById(id).innerText;


    navigator.clipboard.writeText(wallet);



    let toast = document.getElementById("toast");


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    },2000);

}