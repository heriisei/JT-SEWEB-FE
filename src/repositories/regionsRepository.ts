import Repository from "./Repository";

const resource = '/regions';

export default {
  async get(region: string) {
    const response = await Repository.get(`${resource}/regions.json?search=${region ? region : ''}`);
    // Emulate server filtering response data by query
    const dataList = response.data.data
    const mockFilterQuery = dataList.filter((reg: Record<string, any>) => {
      return (reg.full_name as string).toLowerCase().includes(region ? region.toLowerCase() : '')
    })
    return {...response.data, data: mockFilterQuery}
  }
}