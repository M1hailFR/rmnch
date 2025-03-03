export interface IFieldsProps<T> {
  fields: T;
  paddingTop?: string | number;
  paddingBottom?: string | number;
}

export type ClassPropType = string | string[];

export enum IconsEnum {
  AccountMiltiple = 'account-multiple',
  ChartArrow = 'chart-arrow',
  Chat = 'chat',
  Check = 'check',
  CheckBox = 'check-box',
  Chevron = 'chevron',
  Cross = 'cross',
  Cup = 'cup',
  Lightbulb = 'lightbulb',
  Mail = 'mail',
  Menu = 'menu',
  Message = 'message',
  Multicase = 'multicast',
  PhoneCall = 'phone-call',
  PlusCircleOutline = 'plus-circle-outline',
  Replace = 'replace',
  Thumb = 'thumb',
  Timer = 'timer',
  TrayArrow = 'tray-arrow',
  UnfoldMore = 'unfold-more',
  Sunny = 'sunny',
  Night = 'night',
  Lang = 'lang'
}

export type IconPropType = `${IconsEnum}` | null;

export enum SizesEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export type SizesType = `${SizesEnum}`;

export enum LinkTargetEnum {
  TARGET = '_target',
  SELF = '_self'
}

export type LinkTargetType = `${LinkTargetEnum}`;

export enum ColorsEnum {
  BRAND_1 = 'brand-1',
  BRAND_2 = 'brand-2',
  NEUTRALS_1 = 'neutrals-1',
  NEUTRALS_2 = 'neutrals-2',
  NEUTRALS_3 = 'neutrals-3',
  NEUTRALS_4 = 'neutrals-4',
  NEUTRALS_5 = 'neutrals-5',
  NEUTRALS_6 = 'neutrals-6',
  SURFACE_1 = 'surface-1',
  SURFACE_2 = 'surface-2',
  SURFACE_3 = 'surface-3',
  DANGER = 'danger',
  BG = 'background'
}

export type ColorsType = `${ColorsEnum}`;

export enum SidesEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export type SidesType = `${SidesEnum}` | null;

export enum ElementVariantsEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export type ElementVariantsTypes = `${ElementVariantsEnum}`;
