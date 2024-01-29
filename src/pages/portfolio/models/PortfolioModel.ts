import { getMarketOrigin } from "@/libraries";
import { Section } from "./PortfolioViewModel";
import type { Image } from '@/general/viewModel'

export const portfolioSections: Section[] = [
{
  id: '0',
  title: 'Home',
  url: `${getMarketOrigin()}/section-0`
},
{
  id: '1',
  title: 'AboutMe',
  url: `${getMarketOrigin()}/section-1`
},
{
  id: '2',
  title: 'Technologies',
  url: `${getMarketOrigin()}/section-2`
},
{
  id: '3',
  title: 'Projects',
  url: `${getMarketOrigin()}/section-3`
},
{
  id: '4',
  title: 'Contact',
  url: `${getMarketOrigin()}/section-4`
}
]

export function getOwnerLogo():Image{
  return {
    src: '/assets/images/Miniprojects/logo.png',
    alt: 'Owner logo'
  }
}