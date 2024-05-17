import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const goTo = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const checkvalid = (event) => {
    event.preventDefault();
    if (email != "" && pass != "") {
      goTo("/");
    } else {
      alert("Fill the details");
    }
  };

  return (
    <div>
      <form onSubmit={checkvalid}>
        <div>Login</div>
        <div>
          <label className="d-block">User Id</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <label className="d-block ">Password</label>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
