const axios = require('axios');


class DynatraceService {
  constructor(environment, cluster, token) {
    this.environment = environment;
    this.cluster = cluster;
    this.token  = token;
  }

  /**
   * Fetch all services from the Dynatrace API
   */
  async getEvents() {
    const url = `${this.baseUrl}/events`;
    const result = await axios.get(url, this.axiosConfig);
    if(result.data) return result.data;
    return [];
  }



  get baseUrl() {
    return `https://${this.environment}.${this.cluster}/api/v1`;
  };

  get axiosConfig() {
    return {
      headers: { 'Authorization': ' Api-Token ' + this.token },
    }
  }

}

module.exports = DynatraceService;