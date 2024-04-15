// pages/api/login.js

  // Example login API endpoint
  export default async function handler(req, res) {
    const { email, password } = req.body;
  
    // Verify user credentials (e.g., check against a database)
    if (email === 'user@example.com' && password === 'password') {
      // Set session cookie or return JWT token upon successful authentication
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  }
  