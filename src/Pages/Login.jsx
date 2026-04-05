import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInputText from "../Input/MyInputText";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { username, password } = form;

    if (username === password) {
      navigate("/courses");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h3>Login Form</h3>

      <form onSubmit={onSubmitHandler}>
        <MyInputText
          myname="username"
          mylabel="Username"
          myvalue={form.username}
          myOnChange={onChangeHandler}
        />

        <MyInputText
          mytype="password"
          myname="password"
          mylabel="Password"
          myvalue={form.password}
          myOnChange={onChangeHandler}
        />

        <input type="submit" value="Login Now" />
      </form>
    </div>
  );
}

export default Login;