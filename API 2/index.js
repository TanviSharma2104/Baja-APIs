const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*", credentials: true }));
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks", (req, res) => {
	try {
		const userCompany = "Bajaj Finserv Ltd";
		const userPrice = "1,577.65";
		const userAccountNumber = "BFHL0018630";
		const repoLink="https://github.com/TanviSharma2104/Bajaj-APIs";

		

		const response = {
			is_success: true,
			company:userCompany,
			currentPrice:userPrice,
			accountNumber:userAccountNumber,
			githubRepoLink:repoLink,
		};
		res.set("Content-Type", "application/json");
		res.set("bfhl-auth", "2110991440");

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message, is_success: false });
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
