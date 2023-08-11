import navbg from "../../assets/navbg.png";
import { formContext } from "../../ContextProvider";
import { useContext } from "react";
const Navbar = () => {
    const {step,setStep}=useContext(formContext)
  const stepInfo = ["YOUR INFO", "SELECT INFO", "ADD-ONS", "SUMMARY"];
    const handleStep=(idx)=>{
        if(step>idx+1) setStep(idx+1);
    }
  return (
    <div className="w-1/4 h-screen flex justify-center items-center select-none">
      <div
        className="w-[96%] h-[98%] rounded-xl flex flex-col items-center"
        style={{ background: `url(${navbg})`, backgroundSize: "contain" }}
      >
        <div className="text-white">
          {stepInfo.map((info,idx)=>{
            return(
                <div className="flex space-x-4 mt-10 cursor-pointer" onClick={()=>handleStep(idx)}>
                    <div className={`w-4 h-4 p-4 flex justify-center items-center border-2 rounded-full ${(idx+1)!==step?'border-blue-300':'bg-blue-300 text-gray-700'}`}>
                        {idx+1}
                    </div>
                    <div>
                        <div className="">Step {idx+1}</div>
                        <div className="">{info}</div>
                    </div>
                </div>
            );
          })}
          <div className="flex space-x-4 mt-10">
                    <div className={`w-3 ${step<5?'animate-pulse':''} h-3 p-3 flex justify-center items-center border-2 rounded-full border-blue-300`}> 
                    <div className={`${step<5?'animate-ping':''} w-3 h-2 p-2 rounded-full bg-blue-600`}></div>
                    </div>
                    <div>
                        <div className="">SUCCESS</div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
