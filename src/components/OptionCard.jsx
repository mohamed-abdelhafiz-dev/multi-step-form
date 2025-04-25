export default function OptionCard({ option, planData, setPlanData }) {
  return (
    <div
      onClick={() =>
        setPlanData({
          ...planData,
          plan: option.name,
        })
      }
      className={`p-8 border-1 border-myGray cursor-pointer
     ${
       planData.plan === option.name
         ? "text-white bg-[#6259ff]"
         : " hover:text-white hover:bg-[#6259ff]"
     }
      transition-all duration-400 rounded-[5px] flex flex-col items-center`}
    >
      <img
        src={`/src/assets/images/${option.icon}`}
        className="w-[50px] mb-5"
        alt={`${option.name} option`}
      />
      <h2 className="text-center">{option.name}</h2>
      <span className="text-myGray mt-1">{option.price}</span>
    </div>
  );
}
