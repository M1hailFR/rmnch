import { type ISocialItem } from '~/core/types/socials';
import { type IFormCallbackSettings } from '~/components/shared';

interface IMenuItem {
  text: string;
  link: string;
}

type IContactValue = {
  label: string;
  value: string;
};

type IProjectItem = {
  name: string;
  link: string;
};

interface IContactsData {
  title: string;
  subtitle: string;
  info: Array<{
    label: string;
    value?: string;
    items?: Array<ISocialItem | IProjectItem>;
  }>;
}

export interface IHeaderDefaultProps {
  logo?: string;
  text?: string;
  menu?: IMenuItem[];
  phone?: string;
  email?: string;
  socials?: ISocialItem[];
  buttonMenu?: string;
  buttonText?: string;
  formSettings: IFormCallbackSettings;
}

export interface IHeaderIndividualProps {
  logo?: string;
  text?: string;
  menu?: IMenuItem[];
  contacts?: IContactsData;
  buttonForm?: string;
  buttonClose?: string;
  buttonOpen?: string;
  formSettings: IFormCallbackSettings;
}
