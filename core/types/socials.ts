export enum SocialsEnum {
  VK = 'vk',
  WHATSAPP = 'wa',
  TELEGRAM = 'tg',
  INSTAGRAM = 'inst',
  BEHANCE = 'bn'
}

export type SocialsType = `${SocialsEnum}`

export interface ISocialItem {
  name: string;
  shortName: SocialsType;
  link: string;
}
