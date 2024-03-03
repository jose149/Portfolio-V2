export const SVG_ICON_TYPE = [
  'Initials',
  'CSS',
  'Html',
  'Javascript',
  'React',
  'RxJs',
  'Statsig',
  'Bitbucket',
  'Chevron',
  'Cypress',
  'Docker',
  'ElasticSearch',
  'Git',
  'GitHubNavigation',
  'Home',
  'Jenkins',
  'Kibana',
  'JavascriptNavigation',
  'Kubernetes',
  'Menu',
  'Netlify',
  'Python',
  'Octopus',
  'Pinia',
  'Phone',
  'TypeScript',
  'GraphQL',
  'Jest',
  'Grafana',
  'Sass',
  'Screen',
  'Server',
  'StoryBook',
  'Figma',
  'GoogleAnalytics',
  'GoogleTagManager',
  'Hotjar',
  'OpenTab',
  'DotNet',
  'CSharp',
  'Vitest',
  'Vue',
  'MailMedia',
  'Linkedin',
  'GitHubMedia',
];

export type SvgIconType = (typeof SVG_ICON_TYPE)[number];

export const SVG_ICON_FILE_NAME_MAP: Record<SvgIconType, string> = {
  // Design: 'Design',
  // Screen: 'screen',
  // Server: 'server',
  // Menu: 'hamburgerMenu',
  // Timer: 'timer',
  // EyePlus: 'eyePlus',
  // Mobile: 'mobile',
  // Rocket: 'rocket',

  // Actions
  Arrow: 'Arrow',
  Chevron: 'Chevron',
  OpenTab: 'OpenTab',
  RightArrow: 'RightArrow',

  // Brand
  Initials: 'Initials',

  // Media
  Phone: 'Phone',
  MailMedia: 'MailMedia',
  Linkedin: 'Linkedin',
  GitHubMedia: 'GitHubMedia',

  // Navigation
  Home: 'Home',
  GitHubNavigation: 'GitHubNavigation',
  JavascriptNavigation: 'JavascriptNavigation',
  Profile: 'Profile',

  // Front end delivery
  CSS: 'CSS',
  Cypress: 'Cypress',
  Html: 'Html',
  Javascript: 'Javascript',
  Jest: 'Jest',
  Pinia: 'Pinia',
  React: 'React',
  RxJs: 'RxJs',
  Sass: 'Sass',
  StoryBook: 'StoryBook',
  TypeScript: 'TypeScript',
  Vitest: 'Vite',
  Vue: 'Vue',

  // Front end discovery
  Figma: 'Figma',
  GoogleAnalytics: 'GoogleAnalytics',
  GoogleTagManager: 'GoogleTagManager',
  Hotjar: 'Hotjar',
  Statsig: 'Statsig',

  // Front end operations
  Bitbucket: 'Bitbucket',
  Git: 'Git',
  GitHub: 'GitHub',
  Jenkins: 'Jenkins',
  Netlify: 'Netlify',

  // Back end delivery
  CSharp: 'CSharp',
  DotNet: 'DotNet',
  GraphQL: 'GraphQL',
  Python: 'Python',

  // Back end operations
  Docker: 'Docker',
  ElasticSearch: 'ElasticSearch',
  Grafana: 'Grafana',
  Kibana: 'Kibana',
  Kubernetes: 'Kubernetes',
  Octopus: 'OctopusDeploy',
};

// NOTE:
// currentColor is CSS currentColor, so icon will have color of surrounding text.
export const SVG_ICON_COLOR = [
  'currentColor',
  'primary',
  'primary-dark',
  'primary-light',
  'transparent',
  'gold',
  'greyedOutGold',
  'grey',
  'white',
  'black',
] as const;

export type SvgIconColor = (typeof SVG_ICON_COLOR)[number];

export const SVG_ICON_COLOR_MAP: Record<SvgIconColor, string> = {
  currentColor: 'currentColor',
  primary: '#db0d28',
  'primary-dark': '#921929',
  'primary-light': '#AB1326',
  transparent: 'transparent',
  gold: '#E1BC2F',
  greyedOutGold: '#413E20',
  grey: '#AAA',
  white: '#FFFFFF',
  black: '#1A191E',
};

export interface SvgIconDefaultSettings {
  width?: number;
  height?: number;
  color?: SvgIconColor;
  colorProperty: 'fill' | 'stroke';
}

export const SVG_ICON_DEFAULT_SETTINGS_MAP: Record<
  SvgIconType,
  Required<SvgIconDefaultSettings>
> = {
  Initials: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  CSS: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Html: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Javascript: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  React: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  RxJs: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Statsig: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Bitbucket: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Chevron: {
    width: 30,
    height: 30,
    color: 'currentColor',
    colorProperty: 'stroke',
  },
  Cypress: {
    width: 120,
    height: 120,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Python: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Design: {
    width: 50,
    height: 50,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Docker: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  ElasticSearch: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Git: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  GitHub: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  GitHubNavigation: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Home: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  JavascriptNavigation: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Jenkins: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Kibana: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Kubernetes: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Menu: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Netlify: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Octopus: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Pinia: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Profile: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  TypeScript: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  GraphQL: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Jest: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Grafana: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Sass: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Screen: {
    width: 50,
    height: 50,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Server: {
    width: 50,
    height: 50,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  StoryBook: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Figma: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  GoogleAnalytics: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  GoogleTagManager: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Hotjar: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  DotNet: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  CSharp: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Arrow: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  RightArrow: {
    width: 18,
    height: 18,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Timer: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  EyePlus: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Mobile: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  OpenTab: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Phone: {
    width: 16,
    height: 16,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Rocket: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Vitest: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  Vue: {
    width: 128,
    height: 128,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  MailMedia: {
    width: 30,
    height: 30,
    color: 'currentColor',
    colorProperty: 'stroke',
  },
  Linkedin: {
    width: 30,
    height: 30,
    color: 'currentColor',
    colorProperty: 'fill',
  },
  GitHubMedia: {
    width: 60,
    height: 60,
    color: 'currentColor',
    colorProperty: 'fill',
  },
};

export interface SvgIconTranslate {
  x?: number;
  y?: number;
  unit?: SvgIconSizeUnit;
}

export enum SvgIconSizeUnit {
  px = 'px',
  '%' = '%',
  rem = 'rem',
  vw = 'vw',
}

export interface SvgIconSize {
  width?: number;
  height?: number;
  unit?: SvgIconSizeUnit;
}

export interface SvgIconTransformedProps {
  width: string;
  height: string;
  viewBox: string;
  style: {
    // NOTE: without display: block on svg wrapping div is a bit larger,
    // which break alignment in general
    display: 'block';
    fill?: SvgIconColor;
    stroke?: SvgIconColor;
    translate?: string;
  };
}

export function transformPropsFormat(
  name: SvgIconType,
  translate?: SvgIconTranslate,
  size?: SvgIconSize,
  color?: SvgIconColor
): SvgIconTransformedProps {
  const defaultSettings = SVG_ICON_DEFAULT_SETTINGS_MAP[name];
  const width = size?.width ?? defaultSettings.width;
  const height = size?.height ?? defaultSettings.height;
  const unit = translate?.unit ?? 'px';
  const x = translate?.x ?? 0;
  const y = translate?.y ?? 0;
  const translateStyle =
    x || y ? { translate: `${x}${unit} ${y}${unit}` } : undefined;

  const style = {
    [defaultSettings.colorProperty]:
      SVG_ICON_COLOR_MAP[color ?? defaultSettings.color],
    ...(!!translateStyle && translateStyle),
    display: 'block' as const,
  };

  return {
    width: `${width}${size?.unit ?? 'px'}`,
    height: `${height}${size?.unit ?? 'px'}`,
    viewBox: `0 0 ${defaultSettings.width} ${defaultSettings.height}`,
    style,
  };
}
