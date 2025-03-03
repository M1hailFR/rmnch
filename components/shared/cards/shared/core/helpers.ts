import { type SharedCardsType, SharedCardsKeysEnum } from './types';

import CardWithIcon from '../../cardWithIcon.vue';
import CardWithIndex from '../../cardWithIndex.vue';
import CardWithImageExample from '../../cardWithImageExample.vue';
import CardWithLink from '../../cardWithLink.vue';
import CardWithStatistic from '../../cardWithStatistic.vue';
import CardWithExtendedStatistic from '../../cardWithExtendedStatistic.vue';

export const getSharedCards = (key: SharedCardsType | undefined) => {
  if (!key) return null;
  switch (key) {
    case SharedCardsKeysEnum.CARD_WITH_ICON:
      return CardWithIcon;
    case SharedCardsKeysEnum.CARD_WITH_INDEX:
      return CardWithIndex;
    case SharedCardsKeysEnum.CARD_WITH_IMAGE_EXAMPLE:
      return CardWithImageExample;
    case SharedCardsKeysEnum.CARD_WITH_LINK:
      return CardWithLink;
    case SharedCardsKeysEnum.CARD_WITH_STATISTIC:
      return CardWithStatistic;
    case SharedCardsKeysEnum.CARD_WITH_EXTENDED_STATISTIC:
      return CardWithExtendedStatistic;
  }
};
