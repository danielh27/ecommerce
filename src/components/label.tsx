import clsx from "clsx";

interface LabelProps {
  title: string;
  textClass?: string;
  dividerClass?: string;
  divider?: boolean;
}

const Label = ({title, divider, textClass, dividerClass}: LabelProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className={clsx(textClass)}>
        {title}
      </span>
      
      {divider && (
        <span className={clsx("h-0.5 border inline-block w-full border-current", dividerClass)} />
      )}
    </div>
  )
}

export default Label;