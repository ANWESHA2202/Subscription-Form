
const Option = ({name,description,price,isAdded}) => {
  return (
    <div className={`cursor-pointer p-4 rounded-lg border-2 flex justify-between ${!isAdded?'border-blue-200':'bg-blue-50 border-blue-300'}`}>
        <div className="flex space-x-4">
            
            <div className="flex-col">
                <div className="font-semibold">{name}</div>
                <div className="text-gray-500 text-sm">{description}</div>
            </div>
        </div>
        <div className="text-blue-400">+${price}</div>  
    </div>
  )
}

export default Option