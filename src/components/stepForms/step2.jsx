import {useState} from 'react'
import plans from '../plans/plans.json'
import Card from '../layout/Card'
import Switch from '../layout/Switch'
import { formContext } from '../../ContextProvider'
import { useContext } from 'react'

const Step2 = () => {
    const {setStep,duration,setDuration,valuesStep2,setValuesStep2,setSelectedPlan}=useContext(formContext)
   const[activePlan,setActivePlan]=useState(valuesStep2)

   const prev2=()=>{
    setValuesStep2(activePlan)
    setStep(1);
   }
   const handleStep2=()=>{
    setValuesStep2(activePlan)
    setSelectedPlan(prevPlanDetails=>({...prevPlanDetails,"activeplan":activePlan}))
    setStep(3);
   }

  return (
    <div className=' mt-5 w-[60%] h-[95%] flex flex-col justify-center '>
        <div className='w-full h-1/5'>
            <h1 className='text-3xl font-bold text-blue-900'>Select Your Plan</h1>
            <p className='text-gray-300'>You have the option of monthly or yearly billing</p>
        </div>


        <div className="w-full flex space-x-3 h-1/4 ">
        {plans[duration].map((plan, idx) => {
            return (
                <div key={idx} className='w-1/3' onClick={()=>{
                    console.log(plan)
                    setActivePlan(plan)
                }}>
                    <Card
                        logo={plan.logo}
                        logobg={plan.logobg}
                        planName={plan.name}
                        price={plan.price}
                        activePlanName={activePlan.name}
                    
                    />
                </div>
            );
        })}
        </div>


        <div className='mt-10'>
            <Switch duration={duration} setDuration={setDuration}/>
        </div>
        <div className="w-full flex justify-between mt-20">
            <div className='text-left'>
                <button className='p-2 pr-6 pl-6 bg-blue-200 text-gray-500 rounded-lg' onClick={()=>prev2()}>Go Back</button>
            </div>
            <div className='text-right'>
                <button className='p-2 pr-6 pl-6 border-2 border-blue-200 text-white rounded-lg bg-blue-950' onClick={()=>handleStep2()}>Next</button>
            </div>
        </div>
        
    </div>
  )
}

export default Step2