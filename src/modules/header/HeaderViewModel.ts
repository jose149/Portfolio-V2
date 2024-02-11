export interface HeaderConfig {
  logo: string;
  links: NavigationBarLink[];
}

export interface NavigationBarLink {
  id: string;
  name: string;
  src: string;
  iconName: string;
  isSelected?: boolean;
}
