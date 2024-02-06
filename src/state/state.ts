import type { SvgIconType } from '../libraries/storybook/svgIcon/SvgIconModel'
import { ref, type InjectionKey } from 'vue'

export interface StateProps {
}

export enum Section {
  Banner = 0,
  Technologies = 1,
  Projects = 2,
  AboutMe = 3,
  Contact = 4
}

enum SectionName {
  home = 'Home',
  technologies = 'Technologies',
  projects = 'Projects',
  aboutMe = 'About me',
}

enum SectionId {
  home = '#section-0',
  technologies = '#section-2',
  projects = '#section-3',
  aboutMe = '#section-1',
}
interface ISections {
  name: SectionName
  id: SectionId
  iconName: SvgIconType
  isWatching: boolean
}

export function setUpState () {
  const SMALL_DEVICE_THRESHOLD = 800
  const isSmallDevice = ref<boolean>(window.innerWidth < SMALL_DEVICE_THRESHOLD)
  const isScrollAtTop = ref<boolean>(window.scrollY === 0)

  window.addEventListener(
    'resize',
    () => {
      isSmallDevice.value = window.innerWidth < SMALL_DEVICE_THRESHOLD
    }
  )

  window.addEventListener(
    'scroll',
    () => {
      isScrollAtTop.value = window.scrollY === 0
    }
  )

  const sections = ref<ISections[]>([
    {
      name: SectionName.home,
      id: SectionId.home,
      iconName: 'Home',
      isWatching: true
    },
    {
      name: SectionName.aboutMe,
      id: SectionId.aboutMe,
      iconName: 'Profile',
      isWatching: false
    },
    {
      name: SectionName.technologies,
      id: SectionId.technologies,
      iconName: 'Javascript2',
      isWatching: false
    },
    {
      name: SectionName.projects,
      id: SectionId.projects,
      iconName: 'GitHub3',
      isWatching: false
    }
  ])

  return {
    isSmallDevice,
    isScrollAtTop,
    sections
  }
}

export type State = ReturnType<typeof setUpState>

export const StateSymbol = Symbol('state')
export const StateKey: InjectionKey<State> = StateSymbol
