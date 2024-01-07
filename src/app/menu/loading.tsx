export default function Loading() {
  return (
    <div className='min-h-dvh bg-stone-100'>
      <div className="py-4 px-6 bg-white">
        <div className="flex items-center overflow-x-auto gap-9">
          
          {Array(6).fill(0).map((_, i) => (
            <div className="flex flex-col items-center justify-between gap-2 pb-2 cursor-pointer" key={i}>
              <div className="w-20 h-4 rounded-full bg-gray-300 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}