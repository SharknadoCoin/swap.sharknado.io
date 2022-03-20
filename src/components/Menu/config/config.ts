import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
/* import { nftsBaseUrl } from 'views/Nft/market/constants'

const perpetualLangs = { en: 'en', 'zh-cn': 'zh-CN', ko: 'ko' }
const perpLangMap = (code: string) => {
  if (perpetualLangs[code]) {
    return perpetualLangs[code]
  }
  return 'en'
} */

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], code: string) => ConfigMenuItemsType[] = (t, code) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      } /* 
      {
        label: t('Limit'),
        href: '/limit-orders',
      }, */,
      {
        label: t('Liquidity'),
        href: '/liquidity',
      } /* 
      {
        label: t('Perpetual'),
        href: `https://perp.pancakeswap.finance/${perpLangMap(code)}/futures/BTCUSDT`,
        type: DropdownMenuItemType.EXTERNAL_LINK,
      }, */,
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win'),
    href: 'https://play.sharknado.io',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [
      {
        label: t('Prize Pool'),
        href: 'https://play.sharknado.io',
      },
      /* 
      {
        label: t('Trading Competition'),
        href: '/competition',
      },
      {
        label: t('Prediction (BETA)'),
        href: '/prediction',
      },
      {
        label: t('Lottery'),
        href: '/lottery',
      }, */
    ],
  },
  {
    label: t('NFT'),
    href: `#`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      /* {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
      {
        label: t('Activity'),
        href: `${nftsBaseUrl}/activity`,
      }, */
    ],
  },
  {
    label: '',
    href: '#',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('SHARKO Analytics'),
        href: '#',
      } /* 
      {
        label: t('IFO'),
        href: '/ifo',
      }, */,
      {
        label: t('Voting'),
        href: 'https://vote.sharknado.io',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Landing'),
        href: 'https://sharknado.io',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.sharknado.io',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.sharkando.io',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
