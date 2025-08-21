// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://b5e04e4afc60fd575bdcbb38652748e3@o4509872035004416.ingest.us.sentry.io/4509872042147840",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  // tracesSampleRate: 1.0, // Capture 100% of transactions
});

// Manually call startProfiler and stopProfiler to profile code in between
Sentry.profiler.startProfiler();

// Example transaction that will also be profiled
Sentry.startSpan({
    name: "My First Transaction" 
}, () => {
  // The code executing inside this transaction will be wrapped in a span and profiled
});

// Calls to stopProfiler are optional – if not stopped, it will keep profiling
Sentry.profiler.stopProfiler();
