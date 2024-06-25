import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  link?: string;
}


const Button = ({ type, title, icon, variant, full, link }: ButtonProps) => {
  const buttonContent = (
    <button
      className={`flexCenter gap-3 rounded ${variant} ${full && 'w-full'}`}
      type={type}
    >
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
    </button>
  );

  // Conditionally render Link component if link prop is provided
  return link ? (
    <Link href={link}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
}

export default Button;