import { LitElement, css } from "lit-element";
export default css`


.login-box {
  width: 320px;
  height: auto;
  background: #000000;
  color: #fff;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 20px 30px;
}

.login-box .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
}

.login-box h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}

.login-box label {
  margin: 0;
  padding: 0;
  font-weight: bold;
  display: block;
}
.login-box input {
  background: transparent;
  width: 100%;
  margin-bottom: 20px;
}

.token {
  border: 1px solid #000;
  padding: 10px; 
  overflow-wrap: break-word ; 
}

.token span {
  font-size: 20px;
}


.login-box input[type="text"], .login-box input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.login-box button {
  border: none;
  outline: none;
  height: 40px;
  background: #b80f22;
  color: #fff;
  font-size: 18px;
  border-radius: 6px;
  width: 100%
}

.login-box button:hover {
  cursor: pointer;
  background: #ffc107;
  color: #000;
}

.login-box  {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgrey;
}
.logo{
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
}

.login-box a:hover {
  color: #fff;
}
`