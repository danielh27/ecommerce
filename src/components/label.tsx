import clsx from "clsx";

const Label = ({title, size, divider}: {title: string, size?: string, divider?: boolean}) => {
  return (
    <div className="flex items-center gap-3">
      <span className={clsx(`text-${size || 'base'}`, 'font-medium')}>
        {title}
      </span>
      
      {divider && (
        <span className="h-0.5 border inline-block w-full border-current" />
      )}
    </div>
  )
}

export default Label;