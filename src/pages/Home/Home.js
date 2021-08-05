import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import ErrorMessage from "../../components/ErrorMessage";

const Home = (props) => {

  const [error, setError] = useState("");
  const [name, setName] = useState("");

    const history = useHistory();


    const additionSubmitHandler = () => {
      if(!name) {
        setError(true);
        return;
      } else {
        setError(false);
        history.push("/Addition");
      }

    };
    const substractionSubmitHandler = () => {
      if(!name) {
        setError(true);
        return;
      } else {
        setError(false);
      }history.push("/Substraction");
        

    };
    const multiplicationSubmitHandler = () => {
      if(!name) {
        setError(true);
        return;
      } else {
        setError(false);
        history.push("/Multiplication");
        
      }

    };
    const divisionSubmitHandler = () => {
      if(!name) {
        setError(true);
        return;
      } else {
        setError(false);
        history.push("/Division");
      }

    };
  
  
    return (
    <div className="container">
      <span style={{ fontSize: 30 }}>Welcome To The Calculator App</span>
      {error && <ErrorMessage>Please Enter A Name To Start</ErrorMessage>}
      <div className="home">
        <TextField
          label="Enter Your Name To Start"
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          style={{ marginBottom: 25 }}
         
        />

       


      </div>
      <div className ="button">
        
        <Button variant="outlined" color="primary" onClick ={additionSubmitHandler} cursor="pointer">Addition</Button>
        <Button variant="outlined" color="primary" onClick ={substractionSubmitHandler} cursor="pointer">Subtraction</Button> 
        <Button variant="outlined" color="primary" onClick ={multiplicationSubmitHandler} cursor="pointer">Multiplication</Button>
        <Button variant="outlined" color="primary" onClick ={divisionSubmitHandler} cursor="pointer">Division</Button>
        
        </div>
    </div>
  );
};

export default Home;
