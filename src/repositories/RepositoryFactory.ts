import regionsRepository from "./regionsRepository"
import pricesRepository from "./pricesRepository"

interface Repositories {
  regions: Record<any, any>;
  prices: Record<any, any>;
}

const repositories: Repositories = {
  regions: regionsRepository,
  prices: pricesRepository,
}

export const RepositoryFactory = {
  get: (name: string) => repositories[name as keyof Repositories]
}