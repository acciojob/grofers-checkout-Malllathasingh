const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";

const table = document.querySelector("table");
table.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll(".price");
    let sum = 0;

    for (let price of prices) {
        sum += Number(price.textContent);
    }

    let row = document.createElement("tr");

    let itemCell = document.createElement("td");
    itemCell.textContent = "Total Price";

    let priceCell = document.createElement("td");
    priceCell.textContent = sum;

    row.appendChild(itemCell);
    row.appendChild(priceCell);

    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);