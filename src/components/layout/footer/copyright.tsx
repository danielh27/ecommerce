export default function Copyright() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex justify-center items-center py-4 text-neutral-500">
      <p className="text-sm">© {currentYear} Ecommerce. All rights reserved.</p>
    </div>
  )
}