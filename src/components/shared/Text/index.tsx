import { classNames } from '@src/utils'

import React, { HTMLAttributes } from 'react'

type Variant = 'bold' | 'semibold' | 'medium' | 'normal' | 'light'
type Color = 'primary' | 'secondary' | 'black' | 'white'
type Size = 'xs' | 'sm' | 'lg' | 'base' | 'xl'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: Variant
  as?: 'p' | 'span' | 'strong' | 'small'
}

const sizes: Record<Size, string> = {
  xl: 'text-lg md:text-xl',
  lg: 'text-base md:text-lg',
  base: 'text-sm md:text-base',
  sm: 'text-xs md:text-sm',
  xs: 'text-[10px] md:text-xs'
}

const colors: Record<Color, string> = {
  white: 'text-white',
  black: 'text-black',
  primary: 'text-primary',
  secondary: 'text-secondary'
}

const variants: Record<Variant, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const Text = ({
  as = 'p',
  size = 'base',
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

export default Text
