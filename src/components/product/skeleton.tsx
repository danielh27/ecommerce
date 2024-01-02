const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white flex flex-col rounded-sm shadow p-6 max-w-80">
      {/* Image */}
      <div className="bg-gray-200 aspect-square mb-2 rounded-sm"></div>
      
      {/* Price */}
      <div className="bg-gray-200 h-6 w-3/12 mb-2 rounded-sm"></div>
      
      {/* Name */}
      <div className="bg-gray-200 h-6 w-3/4 mb-2 rounded-sm"></div>
      
      {/* Description */}
      <div className="bg-gray-200 mt-auto h-9 mb-6 rounded-sm"></div>
    </div>
  );
}

export default SkeletonCard;