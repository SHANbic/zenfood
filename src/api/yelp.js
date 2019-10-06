import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer qmDzxzMcJ7oHyTJvBE4M9oRvjxcya01rps6L5ZwCp4_VeE1eAwH1qxl6KAC83qf3rhpS6R8KSPaZd14LBcGHXsRapDWaWNG3nXcRbyPEpeCMa34HFHTbCfJ3raGXXXYx'
  }
});
