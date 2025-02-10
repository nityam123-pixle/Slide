import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: {
    variant: 'primary' | 'secondary' | 'text';
    iconAfter?: ReactNode;
    } & 
    ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {className, children,variant, iconAfter,  ...rest } = props;
    return (
        <button className={twMerge(
            "font-medium h-11 p-6 rounded-xl border border-[#3352CC] uppercase inline-flex items-center gap-2 transition duration-1000 relative group/button",
            variant === 'primary' && "bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-white", 
            variant === 'secondary' && "hover:bg-gradient-to-br from-[#3352CC] to-[#1C2D70] hover:text-white", 
            variant === 'text' && "h-auto px-0 border border-transparent after:transition-all after:duration-500  after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-gradient-to-br from-[#3352CC] to-[#1C2D70] hover:after:w-full", 
            className
            )} 
            {...rest}>
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    )
}

export default Button