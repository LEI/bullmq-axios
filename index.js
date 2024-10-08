const path = require('path');
const { Queue, Worker } = require('bullmq');

const queueName = 'example';
const processorFile = path.join(__dirname, 'sandbox.js');
const queue = new Queue(queueName);
const worker = new Worker(queueName, processorFile, {
  connection: {
    host: '127.0.0.1',
    port: '6379',
  },
  useWorkerThreads: true,
});

worker.on('failed', (job, err, prev) => {
  console.error('Worker failed', err.message || err);
});

worker.on('completed', (job, result) => {
  console.log('Worker completed', result);
});

queue.add('test', 500);
