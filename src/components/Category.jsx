export default function category() {
  return (
    <section className="overflow-x-hidden ">
      <div className="mt-20 p-5 flex gap-3 justify-center bg-slate-200 ">
      <button className="bg-yellow-500 rounded-xl px-2 py-1 text-white hover:-translate-y-1 hover:bg-yellow-400 transition-all ease-in-out">Semua</button>
      <button className="bg-emerald-500 rounded-xl px-2 py-1 text-white hover:-translate-y-1 hover:bg-emerald-300 transition-all ease-in-out">Beasiswa</button>
      <button className="bg-sky-500 rounded-xl px-2 py-1 text-white hover:-translate-y-1 hover:bg-sky-300 transition-all ease-in-out">Lomba</button>
    </div>  
    </section>
  );
}
