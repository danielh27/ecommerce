interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({title, children}: FooterSectionProps) {
  return (
    <div className="w-full py-6">
      <h3 className="mb-4 font-bold">{title}</h3>
      <div className="text-sm">
        {children}
      </div>
    </div>
  )
}