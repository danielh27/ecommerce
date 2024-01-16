const FormItemWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="transition-shadow duration-200 bg-gray-100 rounded-2xl p-4 h-[4.75rem]">
      {children}
    </div>
  )
};

export default FormItemWrapper;