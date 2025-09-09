import React from 'react'

function Signup() {
  return (
    <div>
      <h1>Sign Up for TechPulse</h1>
      <p>Join our community of tech enthusiasts and stay updated with the latest news and insights.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
