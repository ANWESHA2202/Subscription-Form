import Step1 from "../components/stepForms/step1"
import Step2 from "../components/stepForms/step2"
import Step3 from "../components/stepForms/step3"
import { formContext } from "../ContextProvider"
import { useContext } from "react"

const Form = () => {
    const {step,setStep,selectedPlandetails,setSelectedPlanDetails}=useContext(formContext)

    switch(step){
        case 1:{
            return(
                <div className='w-3/4 h-screen flex flex-col justify-center items-center'>
                    <Step1/>
                </div>
            )
        }
        case 2:{
            <div className='w-3/4 h-screen flex flex-col justify-center items-center'>
                <Step2/>
            </div>
        }
        case 3:{
            <div className='w-3/4 h-screen flex flex-col justify-center items-center'>
                <Step3/>
            </div>
        }
    }
}

export default Form