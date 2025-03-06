
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* USER REGISTER */
router.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Basic validation to check if all required fields are provided
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check if user already exists in the database
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "User already exists!" });
    }

    // Hash password before saving to DB
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({
      email: email,
      password: hashedPassword,  // Save the hashed password
      name: name
    });

    // Save the new user to the database
    await newUser.save();

    // Return success message
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error occurred during registration" });
  }
});

/* USER LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required!" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist!" }); // Corrected status code
    }

    // Compare the password with the hashed password
    // const isMatch = await bcrypt.compare(password, user.password);  // user.password is the hashed password from DB
   
    const isMatch = (password === user.password) ? true : false;
     if (!isMatch) {
      return res.status(400).json({ message: "Email or Password is incorrect" });
    }
    // Generate JWT token (with a secret from environment variables)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Remove the password field from the response (never send the password back)
    delete user.password;

    // Respond with the token and user info (without password)
    res.status(200).json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error occurred during login" });
  }
});




router.get('/loginuser', async (req, res) => {
    try {
        const gameuser = await User.find();  
        return res.status(200).json(gameuser);  
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;



