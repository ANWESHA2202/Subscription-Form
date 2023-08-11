const Switch = ({duration,setDuration}) => {
    const durationChange=()=>{
        if(duration=='yr') setDuration('mo');
        else setDuration('yr')
       
    }
  return (
    <div className="bg-blue-50 w-full pt-3 pb-3 flex flex-col rounded-lg justify-center items-center">
        <div className="flex space-x-4 items-center cursor-pointer">
            <span className={duration === 'mo' ? 'font-semibold' : 'text-gray-500'}>Monthly</span>
            <div className={`h-5 w-12 bg-black rounded-xl flex ${duration=='yr'?'justify-end':''} items-center`} onClick={()=>durationChange()}>
                <div className="h-4 m-2 w-4 rounded-full text-right bg-white"></div>
            </div>
            <span className={duration === 'yr' ? 'font-semibold' : 'text-gray-500'}>Yearly</span>
        </div>
    </div>
  )
}

export default Switch