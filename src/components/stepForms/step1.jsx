import { Input,InputGroup,InputRightAddon,Text, } from '@chakra-ui/react'
import { formContext } from '../../ContextProvider'
import { usState,useContext } from 'react'
import useForm from '../formController/useForm'
import { step1validate } from '../formController/validate'

const Step1 = () => {
    const {valuesStep1,setValuesStep1,setStep,setSelectedPlan}=useContext(formContext);
    const {handleChange,handleSubmit,errors}=useForm(valuesStep1,setValuesStep1,handleFirstStep,step1validate)
    function handleFirstStep(){
        setSelectedPlan(prevPlanDetails=>({...prevPlanDetails,"personalinfo":valuesStep1}))
        setStep(2);
    }
  return (
    <div className=' mt-5 sm:w-[60%] sm:ml-0 ml-10 w-full h-[95%] flex flex-col justify-center '>
        <div className='w-full h-1/5'>
            <h1 className='text-3xl font-bold text-blue-900'>Personal Info</h1>
            <p className='text-gray-300'>Please provide your your personal informations as asked below</p>
        </div>


        <div className="w-full space-y-5 font-semibold ">
            <div className="">
                <Text className='text-blue-900'>Name</Text>
                <InputGroup>
                <Input
                    placeholder="e.g. Anwesha" 
                    name='username'
                    value={valuesStep1.username || ''}
                    onChange={handleChange}
                    focusBorderColor={errors.username?`red.500`:`blue.500`}
                />
                </InputGroup>
                {errors.username && <p className='text-red-600'>*{errors.username}</p>}
            </div>
            <div className="">
                <Text className='text-blue-900'>Email</Text>
                <InputGroup>
                <Input
                    placeholder="e.g. anwesha@mail.com" 
                    name='email'
                    value={valuesStep1.email || ''}
                    onChange={handleChange}
                    focusBorderColor={errors.email?`red.500`:`blue.500`}
                />
                </InputGroup>
                {errors.email && <p className='text-red-600'>*{errors.email}</p>}

            </div>
            <div className="">
                <Text className='text-blue-900'>Phone Number</Text>
                <InputGroup>
                <Input
                    placeholder="e.g. 9876543210" 
                    name='phone'
                    value={valuesStep1.phone || ''}
                    onChange={handleChange}
                    focusBorderColor={errors.phone?`red.500`:`blue.500`}
                />
                </InputGroup>
                {errors.phone && <p className='text-red-600'>*{errors.phone}</p>}

            </div>
        </div>

        <div className='text-right mt-20'>
            <button className='p-2 pr-6 pl-6 border-2 border-blue-200 text-white rounded-lg bg-blue-950' onClick={handleSubmit}>Next</button>
        </div>
    </div>
  )
}

export default Step1