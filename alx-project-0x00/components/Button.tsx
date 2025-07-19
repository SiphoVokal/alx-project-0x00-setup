import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 text-white font-medium ${styles}`}
    >
      {title}
    </button>
  )
}

export default Button
