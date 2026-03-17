import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconName = keyof typeof Icons;

export interface IconData {
  label: IconName;
  icon: LucideIcon;
}

export const getIcon = (name: IconName): LucideIcon => {
  return Icons[name] as LucideIcon;
};
