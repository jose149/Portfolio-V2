export interface Section {
  id: string;
  name: string;
  url: string;
  iconName: string;
  isHighlighted?: boolean;
}

export interface NavigationBarIconItem {
  id: string;
  iconName: string;
  url: string;
  isSelected: boolean;
}
