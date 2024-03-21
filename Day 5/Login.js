import React, {useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import { dataServiceObj1 } from "C:/Users/abanthia/Downloads/react_assignments/my-project/src/services/data.services1.js";
 
function Login() {  
 
  const [userArray, setUserArray] = useState([]);
 
  // For reading data from user through textboxes
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result,setResult] = useState("");
  const [result1,setResult1] = useState("");
   
    let navigate = useNavigate(); // for navigation using code
    let location = useLocation(); // for reading query string params
 
    function loginButton_click()
    {
      const queryString = location.search; // returns the query string from the current url      
      let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');
 
      if(strReturnUrl == null)
      {
        strReturnUrl = "/";
      }
     
      dataServiceObj1.getAllUsers().then((resData) => {
        setUserArray(resData.data);
    });
    setResult1("Working");
    var i,flag=0;
    for(i=0;i<userArray.length;i++)
    {
        if(username===userArray[i].username && password===userArray[i].password)
        {
            flag=1;
            break;
        }
        if(flag==1)
            break;
    }
   
    if(flag==1)
    {  
      // In real-time apps, we will get the token from the server
      // JWT token is the popular token generation library          
       let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
       sessionStorage.setItem('user-token', token);
       
      // navigate("/Depts");
      navigate(strReturnUrl);
    }
    else
        {
            setResult("Invalid User Id or Password");
        }
    }
   
 
  return (
    <>
   
      <fieldset>
                <legend>User Login</legend>
 
                <label>User Id  : </label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                <br/><br/>
 
                <label>Password  : </label>
                <input type="password"  value={password}  onChange={(args) => setPassword(args.target.value)} />
                <br/><br/>
 
                <input type="button"  onClick={loginButton_click}  value="Login"    />
                <p  style={{color : "red"}}>{result}</p>  
       </fieldset>  
       </>
   
  );
 
}
 
export default Login;
