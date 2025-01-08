import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    disabled = false,
}) => {
    const baseClasses = "px-4 py-2 rounded font-semibold transition";
    const variantClasses =
        variant === "primary"
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            {children}
        </button>
    );
};

export default Button;
