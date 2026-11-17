const getSum = () => {
    let prices = document.querySelectorAll(".price");
    let sum = 0;

    for (let price of prices) {
        sum += Number(price.textContent);
    }

    let table = document.querySelector("table");

    let row = document.createElement("tr");

    let itemCell = document.createElement("td");
    itemCell.textContent = "Total Price";

    let priceCell = document.createElement("td");
    priceCell.textContent = sum;

    row.appendChild(itemCell);
    row.appendChild(priceCell);

    table.appendChild(row);
};