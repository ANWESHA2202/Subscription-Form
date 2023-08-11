import {useState} from 'react'
import options from '../plans/options.json';
import Option from '../layout/Option';
import { formContext } from '../../ContextProvider'
import { useContext } from 'react'


const Step3 = () => {
    const {setStep,valuesStep3,setValuesStep3,duration,selectedPlan,setSelectedPlan}=useContext(formContext)
    const [addons,setAddOns]=useState(valuesStep3);
    const [isAdded,setIsAdded]=useState({1:false,2:false,3:false})
    console.log(selectedPlan)

    const handleAddOns = (idx) => {
       
        const selectedAddOn = options[duration][idx];
        
       
        const addonExists = addons.some((ele) => ele.name === selectedAddOn.name);
      
        if (addonExists) {
            setIsAdded((prevIsAdded)=>({...prevIsAdded,[idx]:false}))
            const filteredAddOns = addons.filter((ele) => ele.name != selectedAddOn.name);
            setAddOns(filteredAddOns);
        } else {
            setIsAdded((prevIsAdded)=>({...prevIsAdded,[idx]:true}))
            setAddOns((prevAddOns) => [...prevAddOns, selectedAddOn]);
        }
        
    };
    
    const handleStep3=()=>{
        setValuesStep3(addons)
        setSelectedPlan(prevPlanDetails=>({...prevPlanDetails,"addons":addons}))
        setStep(4);
    }
    const prev3=()=>{
        
        setValuesStep3(addons)
        setStep(2)
    }
  return (
    <div className=' mt-5 w-[60%] h-[95%] flex flex-col justify-center '>
        <div className='w-full h-1/5'>
            <h1 className='text-3xl font-bold text-blue-900'>Pick add-ons</h1>
            <p className='text-gray-300'>Add-ons help enhance your gaming experience.</p>
        </div>


        <div className="w-full flex-col space-y-3">
        {options[duration].map((option, idx) => {
            const added=valuesStep3.some((ele)=>ele.name===option.name)
            
            return (
                <div key={idx}  className='w-full' onClick={()=>handleAddOns(idx)}>
                    <Option
                        name={option.name}
                        description={option.description}
                        price={option.price}
                        isAdded={added?true:isAdded[idx]}
                    />
                </div>
            );
        })}
        </div>


       
        <div className="w-full flex justify-between mt-20">
            <div className='text-left'>
                <button className='p-2 pr-6 pl-6 bg-blue-200 text-gray-500 rounded-lg' onClick={()=>prev3()}>Go Back</button>
            </div>
            <div className='text-right'>
                <button className='p-2 pr-6 pl-6 border-2 border-blue-200 text-white rounded-lg bg-blue-950' onClick={()=>handleStep3()}>Next</button>
            </div>
        </div>
        
    </div>
  )
}

export default Step3