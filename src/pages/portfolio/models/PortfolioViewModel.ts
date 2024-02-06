export interface Section {
  id: string
  title: string
  url: string
}

export interface NavigationBarItem {
  id: string
  title: string
  url: string
  isSelected: boolean
}

export interface NavigationBarTextItem {
  id: string
  text: string
  url: string
  isSelected?: boolean
}

export interface NavigationBarIconItem {
  id: string
  iconName: string
  url: string
  isSelected: boolean
}
