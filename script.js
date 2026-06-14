const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCount = () => {

        const target = +counter.dataset.target;
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCount,20);

        }else{
            counter.innerText = target;
        }
    };

    updateCount();
});

function calculateDonation(){

    let amount =
    document.getElementById("amount").value;

    document.getElementById("result")
    .innerHTML =
    "Thank you for donating ₹" + amount;
}