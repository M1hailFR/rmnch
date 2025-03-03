import { type IconPropType } from '~/core/types/components';
import { type SizesType } from '~/core/types/components';

export interface ICardWithIconProps {
  icon: IconPropType | null;
  title: string;
  subtitle: string;
}

export interface ICardWithIndexProps {
  index: number;
  text: string;
}

export interface ICardWithLogoProps {
  logo: string;
  value?: string;
  text?: string;
  size?: SizesType;
}

export interface ICardWithImageExampleProps {
  title: string;
  image: string;
}

export interface ICardWithLinkProps {
  icon: IconPropType;
  title: string;
  link: string;
}

export interface ICardWithStatisticProps {
  prependIcon?: IconPropType;
  appendIcon?: IconPropType;
  title: string;
  subtitle: string;
  mobileCenter?: boolean;
  adaptiveText?: boolean;
}

export interface ICardWithExtendedStatisticProps {
  title: string;
  top: ICardWithStatisticProps;
  bottom: ICardWithStatisticProps;
}

export enum SharedCardsKeysEnum {
  CARD_WITH_ICON = 'with-icon',
  CARD_WITH_INDEX = 'with-index',
  CARD_WITH_LINK = 'with-link',
  CARD_WITH_LOGO = 'with-logo',
  CARD_WITH_STATISTIC = 'with-statistic',
  CARD_WITH_IMAGE_EXAMPLE = 'with-image-example',
  CARD_WITH_EXTENDED_STATISTIC = 'with-extended-statistic'
}

export type SharedCardsType = `${SharedCardsKeysEnum}`;
