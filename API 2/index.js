const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*", credentials: true }));
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const buyStocks = async (req, res) => {
    try {
        const { userCompany, userPrice, userAccountNumber, repoLink } = req.body;

        if (!userCompany || !userPrice || !userAccountNumber || !repoLink) {
            return res.status(400).json({ error: "Invalid input", isSuccess: false });
        }

        const response = {
            isSuccess: true,
            company: userCompany,
            currentPrice: userPrice,
            accountNumber: userAccountNumber,
            githubRepoLink: repoLink,
        };

        res.set("Content-Type", "application/json");
        res.set("bfhl-auth", process.env.BFHL_AUTH);

        res.status(200).json(response);
	    
    } catch (error) {
        res.status(500).json({ error: error.message, isSuccess: false });
    }
};
app.post("/buyStocks", buyStocks);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
