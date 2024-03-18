const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createAccount = async (req, res) => {
    try {
        const { user, userEmail, collegeRollNumber, userPhone } = req.body;

        if (!user || !userEmail || !collegeRollNumber || !userPhone) {
            return res.status(400).json({ error: "Invalid input", isSuccess: false });
        }

        const response = {
            isSuccess: true,
            name: user,
            email: userEmail,
            rollNumber: collegeRollNumber,
            phone: userPhone,
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message, isSuccess: false });
    }
};

app.post("/createAccount", createAccount);

app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message, isSuccess: false });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
