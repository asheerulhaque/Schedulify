import React, { useState } from "react";
import NavbarComponent from "../../Home/Navbar/Navbar";
import FooterSection from "../../Home/Footer/footer";
import Background from "../../../static/images/animated_shape.png";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function UserLogin() {

  const navigate = useNavigate(); // For navigation

  const LabelColor = "#333745"; // Color for input label and icon

  const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "4rem",
    paddingTop: "0",
    paddingLeft: "3rem",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
  };

  const InputStyle = {
    display: "flex",
    alignItems: "flex-end",
    paddingBottom: "2rem",
  };

  const ButtonStyle = {
    paddingTop: "1.5rem",
    paddingLeft: "1rem",
  };



  const [showPassword, setShowPassword] = useState(false); // For password visibility
  const [loginMode, setLoginMode] = useState(true); // true for login, false for signup

  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    password: ""
  }); // Form data state

  const handleClickShowPassword = () => setShowPassword((show) => !show); // Toggle password visibility

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; // Prevent focus on click

  const handleToggleMode = () => {
    setLoginMode((prevMode) => !prevMode);
     setFormData({ username: "", emailId: "", password: "" }); // Clear form data
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  }; // Update form data on input change
 
 const getFormAction = () => {
  return loginMode
    ? "http://192.168.1.2:5000/user/signin"
    : "http://192.168.1.2:5000/user/signup";
}; // Get form action based on login mode

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const { username, emailId, password } = formData;

  const requestBody = loginMode
    ? { username, password }
    : { username, emailId, password };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(getFormAction(), requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    if(loginMode){
      if( responseData.status === "success" ){
        navigate("/dashboard");
      }
      else{
        alert("Invalid Credentials");
      }
    }
    else{
      if( responseData.status === "success" ){
        navigate("/dashboard");
      }
      else{
        alert("Username or Email Id already exists");
      }
    } 
    

    setFormData({ username: "", emailId: "", password: "" });
  } catch (error) {
    console.error("Error during form submission:", error);
    // Handle errors (e.g., display an error message to the user)
  }
}; // Handle form submission



  return (
    <div>
      <NavbarComponent ShowMenuOptions={true} />
      <div className="flex flex-col items-center justify-center" style={divStyle}>
        <form onSubmit={handleFormSubmit}
        className="flex flex-col items-center justify-center">
            
          <div style={formStyle}>
            <div style={{display:'flex', flexDirection:'column', paddingTop:'1.7em',paddingBottom:'2rem'}}>
                <h1 style={{ color: LabelColor, fontWeight: "bold", fontSize:'3em' }}>
                    Welcome,
                </h1>
                <p>{loginMode ? "Sign In to continue" : "Sign Up to continue"}!</p>
            </div>
            <div style={InputStyle}>
              <AccountCircle sx={{ color: LabelColor, mr: 1, my: 0.5 }} />
              <FormControl sx={{ width: "15em" }} variant="standard">
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" name="username" value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}/>
              </FormControl>
            </div>
            {!loginMode && ( // Render email field only for signup mode
              <div style={InputStyle}>
                <PasswordIcon sx={{ color: LabelColor, mr: 1, my: 0.5 }} />
                <FormControl sx={{ width: "15em" }} variant="standard">
                  <InputLabel htmlFor="emailId">Email Id</InputLabel>
                  <Input id="emailId" name="emailId" value={formData.emailId}
                onChange={(e) => handleInputChange("emailId", e.target.value)} />
                </FormControl>
              </div>
            )}
            <div style={InputStyle}>
              <PasswordIcon sx={{ color: LabelColor, mr: 1, my: 0.5 }} />
              <FormControl variant="standard" sx={{ width: "15em" }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                     onChange={(e) => handleInputChange("password", e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        style={{ color: LabelColor }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div style={ButtonStyle}>
              <Button
                id="SignIn"
                type="submit"
                sx={{
                  width: "20em",
                  height: "3em",
                  backgroundColor: LabelColor,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#C7EFCF",
                    color: "#333745",
                  },
                }}
                variant="contained"
              >
                {loginMode ? "Sign In" : "Sign Up"}
              </Button>
            </div>
            <div style={{ paddingTop: "1.2rem" }}>
              <p >
                {loginMode
                  ? "Don't have an account? "
                  : "Already have an account? "}
                    <span  style={{ cursor:'pointer', color:'#0088e4' , fontWeight:'500' }} onClick={handleToggleMode}>
                  {loginMode ? "Sign Up" : "Sign In"}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>

      <FooterSection />
    </div>
  );
}

export default UserLogin;
