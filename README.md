# bullmq-axios

Install and start redis:

```bash
npm install

docker compose up -d
```

Run without worker threads:

```bash
npm start false
```

> ```
> Sandboxed job 500
> Worker failed TypeError: Converting circular structure to JSON
>     --> starting at object with constructor 'ClientRequest'
>     |     property 'res' -> object with constructor 'IncomingMessage'
>     --- property 'req' closes the circle
>     at stringify (<anonymous>)
>     at writeChannelMessage (node:internal/child_process/serialization:159:20)
>     at target._send (node:internal/child_process:852:17)
>     at target.send (node:internal/child_process:752:19)
>     at ./bullmq-axios/node_modules/bullmq/dist/cjs/utils.js:135:18
>     at new Promise (<anonymous>)
>     at asyncSend (./bullmq-axios/node_modules/bullmq/dist/cjs/utils.js:133:12)
>     at childSend (./bullmq-axios/node_modules/bullmq/dist/cjs/utils.js:153:56)
>     at ChildProcessor.send (./bullmq-axios/node_modules/bullmq/dist/cjs/classes/main.js:9:57)
>     at ./bullmq-axios/node_modules/bullmq/dist/cjs/classes/child-processor.js:77:28
> ```

Run with worker threads:

```bash
npm start true
```

> ```
> Sandboxed job 500
> Worker failed DataCloneError: function transformRequest(data, headers) {
>     const contentType = headers.getContentType() || '';
>     const ha...<omitted>... } could not be cloned.
>     at new DOMException (node:internal/per_context/domexception:53:5)
>     at ChildProcessor.send (./bullmq-axios/node_modules/bullmq/dist/cjs/classes/main-worker.js:9:69)
>     at ./bullmq-axios/node_modules/bullmq/dist/cjs/classes/child-processor.js:77:28
>     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
> ```

Apply patch and run with or without worker threads:

```bash
npx patch-package

npm start
```

> ```
> Sandboxed job 500
> Worker failed Error [AxiosError]: Request failed with status code 500
> ```
