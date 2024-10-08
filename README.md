# bullmq-axios

```bash
npm install

docker compose up -d

npm start
```

```
Sandboxed job 500
Worker failed DataCloneError: function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const ha...<omitted>... } could not be cloned.
    at new DOMException (node:internal/per_context/domexception:53:5)
    at ChildProcessor.send (./bullmq-axios/node_modules/bullmq/dist/cjs/classes/main-worker.js:9:69)
    at ./bullmq-axios/node_modules/bullmq/dist/cjs/classes/child-processor.js:77:28
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```

```bash
npx patch-package

npm start
```

```
Sandboxed job 500
Worker failed Request failed with status code 500
```
