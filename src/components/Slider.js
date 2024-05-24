
import { dotSlide, nextSlide,prevSlide } from "../redux/features/sliderSlice"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { sliderData } from "../assets/data/dummyData"

export const Slider = () => {
    const dispatch = useDispatch();

    const val = useSelector((state) => state.sliderName.value);
  const handleNext = () => {
    dispatch(nextSlide(val+1));
  }
  const handlePrev = () => {
    dispatch(prevSlide(val-1));
  }
    console.log( val)

    return (
        <>
      
<div className="relative pb-4">
{
sliderData.map((data,index) => {
    return(
        <div key={data.id} 
        className={parseInt(data.id) === val 
          ? "opacity-100 duration-700 ease-in-out scale-100"
          : "opacity-0 duration-700 ease-in-out scale-95"
      }
        >
            <div>
              {parseInt(data.id) === val && (
                <img className="h-[600px] w-full object-cover" width={800} height={300} src={data.img} />
              )}
                </div>
                <div>
                    <p className="absolute top-44 mx-auto inset-x-1/4 text-white text-4xl font-inter font-bold">
                      {parseInt(data.id) === val &&
                      data.text
                      }
                      </p>
                </div>
             </div>
    )
})
}
</div>
<div className="flex absolute bottom-10 left-[45%]">
  {sliderData.map((dot,index) => {
    return (
      <div className="mr-4" key={index}>
        <div
        className={index === val 
? "bg-green-500 rounded-full p-2 cursor-pointer"
: "bg-white rounded-full p-2 cursor-pointer"
        }
      onClick={() => dispatch(dotSlide(index))}  >
        </div>
      </div>
    )
  })}


</div>
<div className="absolute top-50 right-2 hover:text-red-500">
<button  onClick={()=> handleNext()}>
<svg className="w-20 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
  </button>
  </div>
  <div className="absolute top-50 left-2 hover:text-red-500">
        <button onClick={()=> handlePrev()}>
        <svg className="w-20 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
          </button>
</div>
        </>
    )
}



