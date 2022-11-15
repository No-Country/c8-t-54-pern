import { useState } from "react";
import { UserInfo } from "../models/userInfo";

function Login() {
  const [user, setUsername] = useState<UserInfo>({
    username:'',
    password:''
  });
  return <div>
    Login
    <div className="flex">
<form action="" onSubmit={()=>{}}>
    <input placeholder="username" type="text" name="username" />
    <input placeholder="password" type="password" name="password" />

    <button className="bg-red-500">Login</button>
</form>
    </div>

  </div>;
}

export default Login;
