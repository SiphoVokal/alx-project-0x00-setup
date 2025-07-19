export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string
  size?: "small" | "medium" | "large"
  shape?: "sm" | "md" | "full"
  onClick?: () => void
}
