import { memo, Suspense, forwardRef, SVGProps } from 'react'
import dynamic from 'next/dynamic'

export type IconName =
  | 'start'
  | 'logo'
  | 'menu'
  | 'calendar'
  | 'arrow-down'
  | 'charlasPrincipales'
  | 'inscritos'
  | 'mesasDebate'
  | 'mesasExperiencia'
  | 'presentacionesResultados'
  | 'arrow-right'
  | 'minus'
  | 'star'
  | 'circle'
  | 'globe'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'arrow-left'
  | 'xmark'
  | 'sun'
  | 'moon'

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName
}

// Poner tipo
const icons: Record<IconName, any> = {
  start: dynamic(() => import('@src/assets/icons/star-regular.svg')),
  logo: dynamic(() => import('@src/assets/icons/logo.svg')),
  menu: dynamic(() => import('@src/assets/icons/menu.svg')),
  calendar: dynamic(() => import('@src/assets/icons/calendar.svg')),
  minus: dynamic(() => import('@src/assets/icons/minus.svg')),
  star: dynamic(() => import('@src/assets/icons/star.svg')),
  circle: dynamic(() => import('@src/assets/icons/circle.svg')),
  globe: dynamic(() => import('@src/assets/icons/globe.svg')),
  facebook: dynamic(() => import('@src/assets/icons/facebook.svg')),
  instagram: dynamic(() => import('@src/assets/icons/instagram.svg')),
  linkedin: dynamic(() => import('@src/assets/icons/linkedin.svg')),
  twitter: dynamic(() => import('@src/assets/icons/twitter.svg')),
  youtube: dynamic(() => import('@src/assets/icons/youtube.svg')),
  xmark: dynamic(() => import('@src/assets/icons/xmark-solid.svg')),
  moon: dynamic(() => import('../../../assets/icons/moon-solid.svg')),
  sun: dynamic(() => import('../../../assets/icons/sun-solid.svg')),
  'arrow-down': dynamic(() => import('@src/assets/icons/arrow-down.svg')),
  'arrow-right': dynamic(() => import('@src/assets/icons/arrow-right.svg')),
  'arrow-left': dynamic(() => import('@src/assets/icons/arrow-left.svg')),
  charlasPrincipales: dynamic(
    () => import('@src/assets/icons/charlas-principales.svg')
  ),
  inscritos: dynamic(() => import('@src/assets/icons/inscritos.svg')),
  mesasDebate: dynamic(() => import('@src/assets/icons/mesas-de-debate.svg')),
  mesasExperiencia: dynamic(
    () => import('@src/assets/icons/mesas-de-experiencia.svg')
  ),
  presentacionesResultados: dynamic(
    () => import('@src/assets/icons/presentaciones-de-resultados.svg')
  )
}

const Icon = forwardRef<SVGSVGElement, Props>(
  ({ name, ...props }: Props, ref) => {
    const Component = icons[name]

    return (
      <Suspense fallback={<div />}>
        <Component {...props} ref={ref} />
      </Suspense>
    )
  }
)

export default memo(Icon)
