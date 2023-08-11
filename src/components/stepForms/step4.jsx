import { useContext,useEffect,useState } from "react"
import { formContext } from "../../ContextProvider"
const Step4 = () => {
    const {duration,selectedPlan,total,setTotal,setStep}=useContext(formContext)
    
    useEffect(()=>{
        let numbers=[];
        let sum=0;
        numbers.push(parseInt(selectedPlan.activeplan.price.split('/')[0]));
        selectedPlan?.addons?.map((addon)=>{
            numbers.push(parseInt(addon.price.split('/')[0]))
        })
        numbers.forEach(num => {
            sum+=num;
            console.log(sum)
        });
        console.log(numbers)
        setTotal(sum)
    },[])

    const prev4=()=>{
        setStep(3);
    }
    const handleStep4=()=>{
        setStep(5);
    }
  return (
    <div className=' mt-5 w-[60%] h-[95%] flex flex-col justify-center '>
        <div className='w-full h-1/5'>
            <h1 className='text-3xl font-bold text-blue-900'>Finishing Up</h1>
            <p className='text-gray-300'>Double Check everything looks ok before confirming</p>
        </div>

        <div className="w-full bg-blue-50 p-6 flex-col space-y-10">
            <div className="flex justify-between items-center">
                <div className="">
                    <div className="text-blue-800 font-bold">{selectedPlan.activeplan.name}{duration=='mo'?'(Monthly)':'(Yearly)'}</div>
                    <div className="text-gray-400 cursor-pointer underline" onClick={()=>setStep(2)}>Change</div>
                </div>
                <div className="font-bold text-blue-900">${selectedPlan.activeplan.price}</div>
            </div>
            <hr />
            <div className="space-y-4 text-gray-400">
                {selectedPlan?.addons?.map((addon,idx)=>{
                    return(
                        <div className="w-full flex justify-between">
                            <div className="">{addon.name}</div>
                            <div className="">+${addon.price}</div>
                        </div>
                    );
                })}
            </div>
            
        </div>

        <div className="w-full flex p-6 justify-between">
            <div className="text-gray-400">Total{duration=='mo'?'(per month)':'(per year)'}</div>
            <div className="font-semibold text-lg text-blue-500">${total}/{duration}</div>
        </div>
        
        <div className="w-full flex justify-between mt-20">
            <div className='text-left'>
                <button className='p-2 pr-6 pl-6 bg-blue-200 text-gray-500 rounded-lg' onClick={()=>prev4()}>Go Back</button>
            </div>
            <div className='text-right'>
                <button className='p-2 pr-6 pl-6 border-2 border-blue-200 text-white rounded-lg bg-blue-950' onClick={()=>handleStep4()}>Next</button>
            </div>
        </div>
        
    </div>
  )
}

export default Step4