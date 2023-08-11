import React,{useState} from 'react'
import App from './App';
import plans from './components/plans/plans.json'

export const formContext=React.createContext();

const ContextProvider = () => {
    const [step,setStep]=useState(1);
    const[duration,setDuration]=useState('mo')
    const [valuesStep1,setValuesStep1]=useState({})
    const [valuesStep2,setValuesStep2]=useState(plans[duration][0])
    const [valuesStep3,setValuesStep3]=useState([])
    const [selectedPlan,setSelectedPlan]=useState({});
    const [total,setTotal]=useState(0)
  return (
    <formContext.Provider value={{step,setStep,valuesStep1,setValuesStep1,duration,setDuration,valuesStep2,setValuesStep2,valuesStep3,setValuesStep3,selectedPlan,setSelectedPlan,total,setTotal}}>
        <App/>
    </formContext.Provider>
  )
}

export default ContextProvider