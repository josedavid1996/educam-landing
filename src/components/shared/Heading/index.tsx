import { classNames } from '@src/utils'

import React, { HTMLAttributes } from 'react'

type Variant = 'bold' | 'semibold' | 'medium' | 'normal' | 'light'
export type Color = 'primary' | 'secondary' | 'black' | 'white' | 'yellow'
type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | 'extra-big'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: 'bold' | 'semibold' | 'medium' | 'normal' | 'light'
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const sizes: Record<Size, string> = {
  'extra-big': 'text-[30px] sm:text-[40px] md:text-[42px] lg:text-[52px]',
  '5xl': 'text-2xl sm:text-4xl md:text-[42px]',
  '4xl': 'text-2xl md:text-4xl',
  '3xl': 'text-xl md:text-3xl',
  '2xl': 'text-xl sm:text-2xl',
  xl: 'title-4',
  lg: 'title-5',
  md: 'title-6',
  sm: 'title-7',
  xs: 'title-8'
}

const colors: Record<Color, string> = {
  white: 'text-white',
  black: 'text-black',
  primary: 'text-primary',
  secondary: 'text-secondary',
  yellow: 'text-[#FBBC05]'
}

const variants: Record<Variant, string> = {
  normal: 'font-normal',
  light: 'font-light',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const Heading = ({
  as = 'h2',
  size = '2xl',
  color = 'black',
  variant = 'normal',
  ...props
}: Props) => {
  return React.createElement(as, {
    ...props,
    className: classNames([
      props.className,
      sizes[size],
      colors[color],
      variants[variant]
    ])
  })
}

export default Heading
