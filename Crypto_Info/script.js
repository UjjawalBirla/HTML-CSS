// About Table And More
const data = {

stocks: `
<table>
<tr>
<th>Company</th>
<th>Share Price</th>
<th>Market Cap</th>
<th>Sector</th>
</tr>

<tr>
<td>Reliance Industries</td>
<td>₹1,520</td>
<td>₹20.6 L Cr</td>
<td>Energy</td>
</tr>

<tr>
<td>Tata Consultancy Services (TCS)</td>
<td>₹3,950</td>
<td>₹14.5 L Cr</td>
<td>Information Technology</td>
</tr>

<tr>
<td>Infosys</td>
<td>₹1,620</td>
<td>₹6.8 L Cr</td>
<td>IT Services</td>
</tr>

<tr>
<td>HDFC Bank</td>
<td>₹1,780</td>
<td>₹13.7 L Cr</td>
<td>Banking</td>
</tr>

<tr>
<td>ICICI Bank</td>
<td>₹1,270</td>
<td>₹9.1 L Cr</td>
<td>Banking</td>
</tr>

<tr>
<td>Bharti Airtel</td>
<td>₹2,045</td>
<td>₹12.4 L Cr</td>
<td>Telecom</td>
</tr>

</table>
`,

mutual: `
<table>
<tr>
<th>Fund Name</th>
<th>Category</th>
<th>5 Year Return</th>
<th>Risk</th>
</tr>

<tr>
<td>SBI Bluechip Fund</td>
<td>Large Cap</td>
<td>15.2%</td>
<td>Low</td>
</tr>

<tr>
<td>Axis Growth Fund</td>
<td>Flexi Cap</td>
<td>17.8%</td>
<td>Medium</td>
</tr>

<tr>
<td>ICICI Prudential Fund</td>
<td>Balanced</td>
<td>13.5%</td>
<td>Low</td>
</tr>

<tr>
<td>Mirae Asset Emerging Bluechip</td>
<td>Mid Cap</td>
<td>19.4%</td>
<td>Medium</td>
</tr>

</table>
`,

crypto: `
<table>
<tr>
<th>Coin</th>
<th>Current Price</th>
<th>24H Change</th>
<th>Market Cap</th>
</tr>

<tr>
<td>Bitcoin (BTC)</td>
<td>$65,000</td>
<td style="color:green;">+2.8%</td>
<td>$1.28T</td>
</tr>

<tr>
<td>Ethereum (ETH)</td>
<td>$3,450</td>
<td style="color:green;">+1.9%</td>
<td>$415B</td>
</tr>

<tr>
<td>Solana (SOL)</td>
<td>$170</td>
<td style="color:red;">-0.8%</td>
<td>$80B</td>
</tr>

<tr>
<td>Binance Coin (BNB)</td>
<td>$590</td>
<td style="color:green;">+1.2%</td>
<td>$88B</td>
</tr>

</table>
`

};

function showData(type, element){

    let table = document.getElementById("tableData");

    table.classList.remove("animate");

    setTimeout(()=>{
        table.innerHTML = data[type];
        table.classList.add("animate");
    },10);

    document.querySelectorAll(".tab-btn").forEach(btn=>{
        btn.classList.remove("active");
    });

    element.classList.add("active");

}

showData("stocks",document.querySelector(".tab-btn"));

