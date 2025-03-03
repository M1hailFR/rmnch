import { type IconPropType, IconsEnum } from '~/core/types/components';
import * as icon from '~/components/icons';

export const getIconByKey = (key: IconPropType) => {
  switch (key) {
    case IconsEnum.AccountMiltiple:
      return icon.IconAccountMultiple;
    case IconsEnum.ChartArrow:
      return icon.IconChartArrow;
    case IconsEnum.Chat:
      return icon.IconChat;
    case IconsEnum.Check:
      return icon.IconCheck;
    case IconsEnum.CheckBox:
      return icon.IconCheckBox;
    case IconsEnum.Chevron:
      return icon.IconChevron;
    case IconsEnum.Cross:
      return icon.IconCross;
    case IconsEnum.Cup:
      return icon.IconCup;
    case IconsEnum.Lightbulb:
      return icon.IconLightbulb;
    case IconsEnum.Mail:
      return icon.IconMail;
    case IconsEnum.Menu:
      return icon.IconMenu;
    case IconsEnum.Message:
      return icon.IconMessage;
    case IconsEnum.Multicase:
      return icon.IconMulticast;
    case IconsEnum.PhoneCall:
      return icon.IconPhoneCall;
    case IconsEnum.PlusCircleOutline:
      return icon.IconPlusCircleOutline;
    case IconsEnum.Replace:
      return icon.IconReplace;
    case IconsEnum.Thumb:
      return icon.IconThumb;
    case IconsEnum.Timer:
      return icon.IconTimer;
    case IconsEnum.TrayArrow:
      return icon.IconTrayArrow;
    case IconsEnum.UnfoldMore:
      return icon.IconUnfoldMore;
    case IconsEnum.Sunny:
      return icon.IconSunny;
    case IconsEnum.Night:
      return icon.IconNight;
    case IconsEnum.Lang:
      return icon.IconLang;
  }
};
