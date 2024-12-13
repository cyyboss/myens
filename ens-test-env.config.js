require('dotenv').config({ path: process.env.INIT_CWD + '/.env.local' })
require('dotenv').config({
  path: process.env.INIT_CWD + '/.env',
  override: true,
})
require('dotenv').config({
  path: process.env.INIT_CWD + '/.env.development.local',
  override: true,
})

process.env.ADDRESS_ETH_REGISTRAR = '0xc5a5C42992dECbae36851359345FE25997F5C42d'
process.env.ADDRESS_NAME_WRAPPER = '0x9E545E3C0baAB3E08CdfD552C960A1050f373042'
process.env.BATCH_GATEWAY_URLS = JSON.stringify([
  'https://universal-offchain-unwrapper.ens-cf.workers.dev/',
])


/**
 * @type {import('@ensdomains/ens-test-env').ENSTestEnvConfig}
 **/
/*module.exports = {
  deployCommand: 'yarn hardhat deploy',
  tenderly: {
    user: 'ens',
    project: 'core',
    key: 'tenderly-key',
  },
  archive: {
    subgraphId: 'QmXxAE7Urtv6TPa8o8XmPwLVQNbH6r35hRKHP63udTxTNa',
    epochTime: 1646894980,
    blockNumber: 12066620,
    baseUrl: 'https://storage.googleapis.com/ens-manager-build-data',
    network: 'mainnet',
  },
  docker: {
    file: './docker-compose.yml',
    sudo: false,
  },
  ethereum: {
    chain: {
      chainId: 0,
    },
    fork: {
      url: 'https://example.com',
    },
    wallet: {
      mnemonic: 'test test test test test test test test test test test junk',
      unlockedAccounts: ['0x0000000000000000000000000000000000000000'],
    },
  },
  graph: {
    bypassLocal: false,
  },
  scripts: [
    {
      command: 'example',
      name: 'example',
      prefixColor: 'blue.bold',
      cwd: path.resolve('./'),
      finishOnExit: true,
      waitForGraph: true,
    },
  ],
  paths: {
    archives: './archives',
    data: './data',
  },
}*/

module.exports = {
  deployCommand: 'pnpm hardhat deploy',
  buildCommand: 'pnpm build:glocal && pnpm export',
  scripts: [
    {
      command: 'pnpm wrangle',
      name: 'wrangler',
      prefixColor: 'magenta.bold',
    },
    {
      command: `pnpm wait-on http://localhost:8788 && ${
        process.env.CI ? `npx playwright test --project=stateless --shard=${process.env.PLAYWRIGHT_SHARD}/${process.env.PLAYWRIGHT_TOTAL}` : 'npx playwright'
      }`,
      name: 'playwright',
      prefixColor: 'yellow.bold',
      env: process.env,
      finishOnExit: true,
    },
  ],
  paths: {
    data: './data',
  },
}