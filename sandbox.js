module.exports = async (job) => {
  console.log("Sandboxed job", job.data);
  const error = new Error(job.name);
  const value = {};
  value.ref = value;
  error.custom = value;
  throw error;
};
