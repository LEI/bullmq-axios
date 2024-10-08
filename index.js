const path = require('path');
const { Queue, Worker } = require('bullmq');

const args = process.argv;
const useWorkerThreads = JSON.parse(args[2] ?? false);
const statusCode = parseInt(args[3] ?? 500, 10);

const queueName = 'example';
const processorFile = path.join(__dirname, 'sandbox.js');
const queue = new Queue(queueName);
const worker = new Worker(queueName, processorFile, {
  connection: {
    host: '127.0.0.1',
    port: '6379',
  },
  useWorkerThreads,
});

worker.on('failed', (job, err, prev) => {
  console.error('Worker failed', err);
});

worker.on('completed', (job, result) => {
  console.log('Worker completed', result);
});

queue.add('test', statusCode);
