const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white rounded-sm shadow p-6">
      <div className="bg-gray-200 min-h-28 mb-2 rounded-sm"></div>
      <div className="bg-gray-200 h-6 w-3/12 mb-2 rounded-sm"></div>
      <div className="bg-gray-200 h-6 mb-2 rounded-sm"></div>
      <div className="bg-gray-200 h-9 mb-6 rounded-sm"></div>
    </div>
  );
}

export default SkeletonCard;