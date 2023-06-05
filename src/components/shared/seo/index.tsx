import NextHead from 'next/head'

import { IDataSeo } from '@src/interface'

export const Seo = ({
  description,
  domain,
  img,
  keywords,
  link,
  tittlePage,
  url
}: IDataSeo) => (
  <NextHead>
    <title>{tittlePage}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    <meta property="og:site_name" content={link} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={tittlePage} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={img} />
    <meta property="og:locale" content="es_LA" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={tittlePage} />
    <meta name="twitter:description" content={description} />
    <meta property="twitter:domain" content={domain} />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:image" content={img} />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
  </NextHead>
)
