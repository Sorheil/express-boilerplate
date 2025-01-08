//all your models here
const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    //verify if all fields are filled
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'all fields are required' });
    }

    try {
        //verification if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'user already exists' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // save the new user
        await newUser.save();

        // reponse with the new user
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            __v: newUser.__v
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // verify if all fields are filled
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        // find user with the email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Email or password incorrect" });
        }

        // verify if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Email or password incorrect" });
        }

        // Générer un token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token });
    } catch (error) {
        console.error("error occured :", error);
        res.status(500).json({ message: "a internal server error occured" });
    }
};

module.exports = {
    createUser,
    loginUser
}