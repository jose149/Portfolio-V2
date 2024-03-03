import { getMarketOrigin } from '@/libraries';
import { Section } from '../PortfolioViewModel';
import { Profile } from '@/modules/banner/BannerViewModel';

export const sections: Section[] = [
  {
    id: 'section-1',
    name: 'Home',
    url: `${getMarketOrigin()}/section-0`,
    iconName: 'Home',
    visibilityRatio: 0,
    active: true,
  },
  {
    id: 'section-2',
    name: 'Technologies',
    url: `${getMarketOrigin()}/section-2`,
    iconName: 'JavascriptNavigation',
    visibilityRatio: 0,
    active: false,
  },
  {
    id: 'section-3',
    name: 'Projects',
    url: `${getMarketOrigin()}/section-3`,
    iconName: 'GitHubNavigation',
    visibilityRatio: 0,
    active: false,
  },
  {
    id: 'section-4',
    name: 'About me',
    url: `${getMarketOrigin()}/section-1`,
    iconName: 'Profile',
    visibilityRatio: 0,
    active: false,
  },
  // {
  //   id: 'section-5',
  //   name: 'Contact',
  //   url: `${getMarketOrigin()}/section-4`,
  //   iconName: 'MailMedia',
  //   visibilityRatio: 0,
  //   active: false,
  // },
];

export const PROFILE: Profile = {
  name: 'Jose Crespi Valero',
  job: 'Front end developer',
};
