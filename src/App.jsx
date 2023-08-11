import Navbar from "./components/layout/Navbar";
import Step1 from "./components/stepForms/step1";
import Step2 from "./components/stepForms/step2";
import Step3 from "./components/stepForms/step3";
import Step4 from "./components/stepForms/step4";
import Success from "./components/stepForms/success";
import { formContext } from "./ContextProvider";
import { useContext } from "react";

function App() {
  const { step } = useContext(formContext);
  switch (step) {
    case 1: {
      return (
        <div className="sm:flex sm:flex-row justify-between flex-col">
          <Navbar />
          <div className="w-3/4 h-screen flex flex-col justify-center items-center">
            <Step1 />
          </div>
        </div>
      );
    }
    case 2: {
      return (
        <div className="flex justify-between">
          <Navbar />
          <div className="w-3/4 h-screen flex flex-col justify-center items-center">
            <Step2 />
          </div>
        </div>
      );
    }
    case 3: {
      return (
        <div className="flex justify-between">
          <Navbar />
          <div className="w-3/4 h-screen flex flex-col justify-center items-center">
            <Step3 />
          </div>
        </div>
      );
    }
    case 4: {
      return (
        <div className="flex justify-between">
          <Navbar />
          <div className="w-3/4 h-screen flex flex-col justify-center items-center">
            <Step4 />
          </div>
        </div>
      );
    }
    case 5: {
      return (
        <div className="flex justify-between">
          <Navbar />
          <div className="w-3/4 h-screen flex flex-col justify-center items-center">
            <Success />
          </div>
        </div>
      );
    }
  }
}

export default App;
