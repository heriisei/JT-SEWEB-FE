import Repository from "./Repository";

const resource = '/prices';

export default {
  async get(regionId: number) {
    const response = await Repository.get(`${resource}/shrimp_prices.json?search=${regionId ? regionId : ''}`);
    // Emulate server filtering response data by query
    const dataList = response.data.data
    const mockFilterQuery = dataList.filter((reg: Record<string, any>) => {
      return regionId ? (reg.id as number) === regionId : dataList
    })
    return {...response.data, data: mockFilterQuery}
  }
}