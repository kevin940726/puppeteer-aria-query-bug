The aria queries in puppeteer fail unexpectedly when used with `waitFor*`.

## Run the script

```sh
yarn
node index.js
```

## Expected
The script exits successfully and outputs the following result to the console.

```
<html><head></head><body><button>Button</button></body></html>
Found: Button
--- Reloaded ---
<html><head></head><body><button>Button</button></body></html>
Found: Button
```

## Received
The scripts exits unexpectedly and throws the following error.

```
<html><head></head><body><button>Button</button></body></html>
Found: Button
--- Reloaded ---
<html><head></head><body><button>Button</button></body></html>
(node:42133) UnhandledPromiseRejectionWarning: TimeoutError: waiting for selector `Button[role="button"]` failed: timeout 30000ms exceeded
    at new WaitTask (/work/puppeteer-aria-query-bug/node_modules/puppeteer/lib/cjs/puppeteer/common/DOMWorld.js:505:34)
    at DOMWorld.waitForSelectorInPage (/work/puppeteer-aria-query-bug/node_modules/puppeteer/lib/cjs/puppeteer/common/DOMWorld.js:416:26)
    at Object.waitFor (/work/puppeteer-aria-query-bug/node_modules/puppeteer/lib/cjs/puppeteer/common/AriaQueryHandler.js:62:21)
    at DOMWorld.waitForSelector (/work/puppeteer-aria-query-bug/node_modules/puppeteer/lib/cjs/puppeteer/common/DOMWorld.js:312:29)
    at Frame.waitForSelector (/work/puppeteer-aria-query-bug/node_modules/puppeteer/lib/cjs/puppeteer/common/FrameManager.js:842:51)
    at Page.waitForSelector (/work/puppeteer-aria-query-bug/node_modules/puppeteer/lib/cjs/puppeteer/common/Page.js:1285:33)
    at main (/work/puppeteer-aria-query-bug/index.js:21:23)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:42133) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:42133) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
