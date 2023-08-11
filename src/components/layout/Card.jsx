import arcade from '../../assets/joystick.png'
import advanced from '../../assets/video-game.png'
import pro from '../../assets/game.png'

const Card = ({logo,logobg,planName,price,activePlanName}) => {
  return (
    <div className={`cursor-pointer w-full h-full rounded-lg border-2 ${planName!==activePlanName?'border-blue-100':'bg-blue-50 border-blue-400'} flex justify-center items-center`}>
        <div className="w-[85%] h-[85%] flex flex-col justify-between">
            {logo=='arcade' && <div className={`w-[35%] h-[40%] rounded-full bg-orange-400 flex justify-center items-center`}>
                <img src={arcade} alt="logo" width={30} height={30}/>
            </div>}
            {logo=='advanced' && <div className={`w-[35%] h-[40%] rounded-full bg-red-400 flex justify-center items-center`}>
                <img src={advanced} alt="logo" width={30} height={30}/>
            </div>}
            {logo=='pro' && <div className={`w-[35%] h-[40%] rounded-full bg-blue-400 flex justify-center items-center`}>
                <img src={pro} alt="logo" width={30} height={30}/>
            </div>}
            <div className="">
                <div className='font-semibold text-blue-900'>{planName}</div>
                <div className='text-sm text-gray-500'>${price}</div>
            </div>
        </div>
    </div>
  )
}

export default Card