import { Link } from "react-router-dom";

const SignIn = () => {
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

        <a href="#">Forgot Password</a>

        <button type="submit">
            Sign In
        </button>

        <div className="footer">
          <p>Didn't have any account?</p>
          <Link to="/sign-up">Sign Up here</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;