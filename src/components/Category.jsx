
export default function category({setCardShow}) {
  function handleClick(value){
    setCardShow(value);
  }

  return (
    <section className="overflow-hidden md:w-52 md:h-screen md:fixed ">
      <div className="mt-20 p-5 flex gap-3 justify-center bg-slate-200 md:h-full md:flex-col md:justify-start">
      <button onClick={()=>{handleClick("Semua")}} className="bg-yellow-500 rounded-xl px-2 py-1 text-white hover:-translate-y-1 hover:bg-yellow-400 transition-all ease-in-out">Semua</button>
      <button onClick={()=>{handleClick("Beasiswa")}} className="bg-emerald-500 rounded-xl px-2 py-1 text-white hover:-translate-y-1 hover:bg-emerald-300 transition-all ease-in-out">Beasiswa</button>
      <button onClick={()=>{handleClick("Lomba")}} className="bg-sky-500 rounded-xl px-2 py-1 text-white hover:-translate-y-1 hover:bg-sky-300 transition-all ease-in-out">Lomba</button>
    </div>  
    </section>
  );
}
