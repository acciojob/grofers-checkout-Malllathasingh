const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll(".price");
    let sum = 0;

    for (let price of prices) {
        sum += Number(price.textContent);
    }

    alert("Total Price: " + sum);
};

getSumBtn.addEventListener("click", getSum);