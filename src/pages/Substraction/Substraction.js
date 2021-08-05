import { Button } from "@material-ui/core";
import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Substraction.css";

const Substraction = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const clearHandler = () => {
    setResult("");
    setCalc("");
}


  const deletelast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </Button>
      );
    }
    return digits;
  };

  return (
    <div className="add">
        <Helmet>
            <title>Substraction</title>
        </Helmet>
      <div classNam="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operators">
          <Button onClick={() => updateCalc("-")}>-</Button>
          <hr />
          <Button onClick={deletelast}>Delete</Button>
          <hr />
          <Button onClick={clearHandler}>Clear</Button>
        </div>
        <div className="digits">
          {createDigits()}
          <Button onClick={() => updateCalc("0")}>0</Button>
          <hr />
          <Button onClick={() => updateCalc(".")}>.</Button>
          <hr />
          <Button onClick={calculate}>=</Button>
        </div>
      </div>
    </div>
  );
};

export default Substraction;
