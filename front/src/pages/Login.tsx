import React, { FormEvent, useState } from "react";

function Login() {
  const [email, setEmail] = useState("a@b.com");
  const [password, setPassword] = useState("abc");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-red-200"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <input
            type="text"
            required
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
