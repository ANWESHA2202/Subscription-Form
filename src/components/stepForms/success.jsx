import { useToast } from '@chakra-ui/react'
import {useEffect,useContext} from 'react';
import { formContext } from '../../ContextProvider';
import controller from '../../assets/controller.png'
const Success = () => {
    const toast=useToast();
    const {setStep,setSelectedPlan}=useContext(formContext)
    useEffect(()=>{
        toast({
            title: "Congratulations🎉",
            description: 'Subcription Activated!!',
            duration: 9000,
            isClosable: true,
          })
    },[])

    const resetForm=()=>{
        setSelectedPlan({});
        setStep(1);
    }
  return (
    <div className="w-full h-full flex flex-col  justify-center items-center">
        <div className="w-1/2 h-1/2  flex flex-col justify-center items-center ">
            <img className='animate-bounce' src={controller} alt="" width={100} height={100}/>
            <div className="text-2xl font-bold text-blue-900">Congratuations Gamer!</div>
            <div className="text-purple-400">There you Go with your Gaming Adventure</div>
            <div className="text-gray-300 underline cursor-pointer mt-5" onClick={()=>resetForm()}>Go Back</div>
        </div>
    </div>
  )
}

export default Success