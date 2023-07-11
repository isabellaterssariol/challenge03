import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <header className="header">
        <span>Audio</span>
        <p>It's a modular and designed to last</p>
      </header>

      <form>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit">
            Sign Up
        </button>

        <div className="footer">
          <p>If you have an account?</p>
          <Link to="/">Sign In here</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;