import clsx from "clsx";

interface LabelProps {
  title: string;
  size?: string;
  className?: string;
  divider?: boolean;
}

const Label = ({title, size, divider, className}: LabelProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className={clsx(`text-${size || 'base'}`, 'font-medium', className)}>
        {title}
      </span>
      
      {divider && (
        <span className="h-0.5 border inline-block w-full border-current" />
      )}
    </div>
  )
}

export default Label;