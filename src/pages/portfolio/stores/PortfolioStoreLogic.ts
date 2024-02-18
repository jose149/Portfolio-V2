import { Position } from '@/modules/projects/projectsViewModel';
import { TechnologyModuleType } from '../models/data/technologies';

export function shouldShowTechnologyModule(
  module: TechnologyModuleType
): boolean {
  switch (module) {
    case TechnologyModuleType.FrontEnd:
      return false;
    case TechnologyModuleType.BackEnd:
      return false;
    case TechnologyModuleType.UxUi:
      return false;

    default:
      return false;
  }
}

export function getButtonPosition(isSmallDevice: boolean): Position {
  if (isSmallDevice) {
    return Position.Bottom;
  } else {
    return Position.Top;
  }
}
