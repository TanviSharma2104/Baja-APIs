const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*", credentials: true }));
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount", (req, res) => {
	try {
		const user = "Tanvi";
		const userEmail = "tanvi1440.be21@chitkara.edu.in";
		const collegeRollNumber = 2110991440;
        const userPhone=9501277568;

		

		const response = {
            isSuccess:true,
			name: user,
			email: userEmail,
			rollNumber: collegeRollNumber,
			phone:userPhone,
		};

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message, isSuccess:false});
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
