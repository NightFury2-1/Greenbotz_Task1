import { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const checkvalid = (event) => {
    event.preventDefault();
    if (email != "" && pass != "") {
    } else {
      alert("Fill the details");
    }
  };
  return (
    <div>
      <form onSubmit={checkvalid}>
        <div>
          <label>User Id</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
