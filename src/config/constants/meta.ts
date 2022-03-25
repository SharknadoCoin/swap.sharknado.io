import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Sharknado Coin (SHARKO)',
  description:
    'Built for the Starsharks community from the community. Hold SHARKO tokens to earn $SEA, win Sharks NFT & more...',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Sharknado Swap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Sharknado Swap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Sharknado Swap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Sharknado Swap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Sharknado Swap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Sharknado Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Sharknado Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Sharknado Swap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Sharknado Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Sharknado Swap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Sharknado Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Sharknado Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Sharknado Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Sharknado Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Sharknado Swap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Sharknado Swap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Sharknado Swap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Sharknado Swap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('PancakeSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('PancakeSwap')}`,
      }
    default:
      return null
  }
}
