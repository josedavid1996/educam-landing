// import './button.css'
export type ButtonVariant = 'solid' | 'outline' | 'ghost'

interface ButtonColors {
  white: string
  primary: string
  secondary: string
}

export const variants: Record<ButtonVariant, ButtonColors> = {
  solid: {
    primary:
      'text-white font-normal border-transparent bg-primary hover:bg-primary-700',
    secondary:
      'text-white border-transparent bg-secondary hover:bg-secondary-500',
    white: 'text-secondary border-transparent bg-white hover:bg-gray-200'
  },
  outline: {
    white: 'btn-outline-white',
    primary: 'btn-outline-primary',
    secondary:
      'text-white font-normal border-transparent bg-black hover:bg-white hover:text-black hover:border-black'
  },
  ghost: {
    primary:
      'bg-transparent border-transparent text-primary hover:text-white hover:bg-primary',
    secondary:
      'bg-transparent border-transparent text-secondary hover:text-white hover:bg-secondary',
    white:
      'bg-transparent border-transparent text-white hover:text-secondary-500 hover:bg-white'
  }
}
