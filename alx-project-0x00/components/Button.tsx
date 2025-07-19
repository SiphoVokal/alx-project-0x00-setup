import { ButtonProps } from "@/interfaces"


const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "md", onClick }) => {
  const sizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-1",
    large: "text-lg px-6 py-1",
  }

  const shapeClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  }

  return (
    <button
      onClick={onClick}
      className={`bg-red-500 text-white font-medium ${sizeClasses[size]} ${shapeClasses[shape]}`}
    >
      {title}
    </button>
  )
}

export default Button
