import { getMarketOrigin } from '@/libraries';
import { Section } from '../PortfolioViewModel';
import { Profile } from '@/modules/banner/BannerViewModel';

export const sections: Section[] = [
  {
    id: '0',
    name: 'Home',
    url: `${getMarketOrigin()}/section-0`,
    iconName: 'Home',
  },
  {
    id: '1',
    name: 'Technologies',
    url: `${getMarketOrigin()}/section-2`,
    iconName: 'Javascript2',
  },
  {
    id: '2',
    name: 'Projects',
    url: `${getMarketOrigin()}/section-3`,
    iconName: 'GitHub3',
  },
  {
    id: '3',
    name: 'About me',
    url: `${getMarketOrigin()}/section-1`,
    iconName: 'Profile',
  },
  {
    id: '4',
    name: 'Contact',
    url: `${getMarketOrigin()}/section-4`,
    iconName: 'Mail',
    isHighlighted: true,
  },
];

export const PROFILE: Profile = {
  name: 'Jose Crespi Valero',
  job: 'Front end developer',
};
