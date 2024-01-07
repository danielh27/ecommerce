const SkeletonCard = () => {
  return (
    <div className="animate-pulse flex bg-white py-4 sm:px-4  h-full gap-x-4">
      {/* Image */}
      <div className="bg-gray-200 w-36 min-w-36 rounded-2xl"></div>
        
      <div className="flex flex-col justify-center w-full gap-1">
        {/* Price */}
        <div className="bg-gray-200 h-6 w-3/12 rounded-full"></div>
        
        {/* Name */}
        <div className="bg-gray-200 h-6 rounded-full"></div>
        
        {/* Description */}
        <div className="bg-gray-200 h-6 w-3/4 rounded-full"></div>
        
        {/* Button */}
        <div className="mt-2">
          <div className="bg-gray-200 h-8 w-5/12 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;