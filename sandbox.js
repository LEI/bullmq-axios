const axios = require('axios');

module.exports = async (job) => {
  console.log('Sandboxed job', job.data);
  const url = 'https://httpstat.us/' + job.data;
  const { data } = await axios.get(url);
  return data;
};
