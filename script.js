const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let prices=document.quarySelector(".price")
	let sum=0
	for(let key of prices){
		sum+=Number(price.textContext)
	}
	alert("Total Price:" +sum)
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

