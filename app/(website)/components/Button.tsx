import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded  ${variant} ${full && 'w-full'}`}
      type={type}
    >
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
    </button>
  )
}

export default Button