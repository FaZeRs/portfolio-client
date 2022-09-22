import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import { type UserModule } from '~/types'

declare const PACKAGE_NAME: string
declare const APP_VERSION: string

export const install: UserModule = ({ isClient, app, router }) => {
  if (!isClient)
    return
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN
  if (sentryDsn !== undefined) {
    Sentry.init({
      app,
      environment: import.meta.env.MODE,
      release: `${PACKAGE_NAME}@${APP_VERSION}`,
      dsn: sentryDsn,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.vueRouterInstrumentation(router),
          tracingOrigins: ['localhost', import.meta.env.VITE_BASE_URL, /^\//],
        }),
      ],
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
      trackComponents: true,
    })
  }
}
