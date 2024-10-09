# bullmq-sandbox

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
> Sandboxed job {}
> Worker failed TypeError: Converting circular structure to JSON
>     --> starting at object with constructor 'Object'
>     --- property 'ref' closes the circle
>     at stringify (<anonymous>)
>     at writeChannelMessage (node:internal/child_process/serialization:159:20)
>     at target._send (node:internal/child_process:851:17)
>     at target.send (node:internal/child_process:751:19)
>     at ./node_modules/bullmq/dist/cjs/utils.js:134:18
>     at new Promise (<anonymous>)
>     at asyncSend (./node_modules/bullmq/dist/cjs/utils.js:132:12)
>     at childSend (./node_modules/bullmq/dist/cjs/utils.js:152:56)
>     at ChildProcessor.send (./node_modules/bullmq/dist/cjs/classes/main.js:9:57)
>     at ./node_modules/bullmq/dist/cjs/classes/child-processor.js:77:28
> ```

Run with worker threads:

```bash
npm start true
```

> ```
> Sandboxed job {}
> Worker failed Error: test
>     at module.exports (./sandbox.js:3:17)
>     at ChildProcessor.processor (./node_modules/bullmq/dist/cjs/classes/child-processor.js:47:40)
>     at ./node_modules/bullmq/dist/cjs/classes/child-processor.js:70:43
>     at ChildProcessor.start (./node_modules/bullmq/dist/cjs/classes/child-processor.js:86:11)
>     at MessagePort.<anonymous> (./node_modules/bullmq/dist/cjs/classes/main-base.js:19:42)
>     at [nodejs.internal.kHybridDispatch] (node:internal/event_target:816:20)
>     at MessagePort.<anonymous> (node:internal/per_context/messageport:23:28) {
>   custom: <ref *1> { ref: [Circular *1] }
> }
> ```

Apply patch and run with or without worker threads:

```bash
npx patch-package

npm start
```

> ```
> Sandboxed job {}
> Worker failed Error: test
>     at module.exports (./sandbox.js:3:17)
>     at ChildProcessor.processor (./node_modules/bullmq/dist/cjs/classes/child-processor.js:47:40)
>     at ./node_modules/bullmq/dist/cjs/classes/child-processor.js:70:43
>     at ChildProcessor.start (./node_modules/bullmq/dist/cjs/classes/child-processor.js:86:11)
>     at MessagePort.<anonymous> (./node_modules/bullmq/dist/cjs/classes/main-base.js:19:42)
>     at [nodejs.internal.kHybridDispatch] (node:internal/event_target:816:20)
>     at MessagePort.<anonymous> (node:internal/per_context/messageport:23:28) {
>   custom: {}
> }
> ```
