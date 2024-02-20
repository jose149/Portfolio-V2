import { Position } from '@/modules/projects/projectsViewModel';
import { TechnologyModuleType } from '../models/data/technologies';

export function shouldCollapseTechnologyModule(
  module: TechnologyModuleType
): boolean {
  switch (module) {
    case TechnologyModuleType.FrontEndDelivery:
      return false;
    case TechnologyModuleType.FrontEndDiscovery:
      return false;
    case TechnologyModuleType.BackEnd:
      return false;
    case TechnologyModuleType.Others:
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
