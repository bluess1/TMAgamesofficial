import { NextSeoProps } from 'next-seo'

const TITLE = 'TMA Games Gartic Phone' // Or whatever you want your game's title to be
const DESCRIPTION = 'Play Gartic Phone with friends on TMA Games!' // Your description
const BASE_URL = 'https://tmagames.vercel.app' // <--- YOUR VERCEL URL

const SEO: NextSeoProps = {
  title: TITLE,
  description: DESCRIPTION,
  canonical: BASE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    site_name: TITLE,
    images: [{ url: `${BASE_URL}/social.jpeg`, alt: TITLE }],
  },
  twitter: {
    handle: 'hi',
    cardType: 'summary_large_image',
  },
}

export default SEO
