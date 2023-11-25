// @desc    Register new user
// @route   /api/users/register
// @access  Public
const registerUser = (req, res) => {
    const {name, email, password} = req.body
    
    // Validation
    if (!name || !email || !password) {
        return res.status(400).status(400).json({message: 'Please include all fields'})
    }
    res.send('Register Route')
}

// @desc    Login a user
// @route   /api/users/login
// @access  Public
const loginUser = (req, res) => {
    res.send('Login Route')
}

module.exports = {
    registerUser,
    loginUser,
}