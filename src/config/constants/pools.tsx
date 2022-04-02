import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

const pools: SerializedPoolConfig[] = [
  ,
  /* 
  {
    sousId: 1,
    stakingToken: serializedTokens.sharko,
    earningToken: serializedTokens.sea,
    contractAddress: {
      97: '0xB8F8812584B4441C529cc8a284907D4c5A04ba83',
      56: '0xB8F8812584B4441C529cc8a284907D4c5A04ba83',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 0,
    isFinished: false,
  }, */ {
    sousId: 0,
    stakingToken: serializedTokens.sharkolp,
    earningToken: serializedTokens.sharko,
    contractAddress: {
      97: '0x1529fD51D5299c8f47Fa3C6fd9e40c994a00e18E',
      56: '0xB8F8812584B4441C529cc8a284907D4c5A04ba83',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 0,
    isFinished: false,
  },
].filter((p) => !!p.contractAddress[CHAIN_ID])

export default pools
