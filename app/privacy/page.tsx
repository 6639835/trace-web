import { Separator } from '@/components/ui/separator';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base lg:text-lg">
            How Trace handles your data with complete transparency and privacy-first principles.
          </p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p className="text-xs sm:text-sm">
              <strong>Effective Date:</strong> January 14, 2026
            </p>
            <p className="text-xs sm:text-sm">
              <strong>App Name:</strong> Trace
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Developer/Controller:</strong> Justin
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Contact:</strong>{' '}
              <a href="mailto:epa6643@gmail.com" className="text-foreground hover:underline">
                epa6643@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Introduction */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            This Privacy Policy explains how Trace (&quot;the App&quot;) handles information when
            you use the App on iOS.
          </p>
        </div>
      </section>

      <Separator />

      {/* Summary Section */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">1. Summary</h2>
          <ul className="list-inside list-disc space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li>
              We do not collect, transmit, sell, or share your personal data with us or any third
              parties.
            </li>
            <li>
              The App processes and stores network traffic data on your device only, for your
              debugging and inspection purposes.
            </li>
            <li>
              Data may leave your device only if you choose to export/share it using features
              provided by iOS (e.g., Share Sheet).
            </li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Definitions */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            2. Definitions
          </h2>
          <div className="space-y-4 sm:space-y-5">
            <div>
              <p className="mb-2 text-sm font-semibold sm:text-base">&quot;Capture Data&quot;</p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Means any network traffic content and metadata the App displays or stores, including
                HTTP(S) requests and responses, WebSocket frames, Server-Sent Events (SSE) messages,
                headers, bodies, URLs, query parameters, cookies, tokens, timing, and TLS details.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold sm:text-base">&quot;On-Device&quot;</p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Means stored locally on your iPhone/iPad in the App&apos;s sandbox and/or App Group
                container shared with the App&apos;s extensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Information the App Handles */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            3. Information the App Handles
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="mb-3 text-base font-semibold sm:text-lg">
                3.1 Capture Data (On-Device)
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                The App can capture and store network traffic that passes through a system proxy
                configured by the App&apos;s Network Extension (proxy-only mode). Depending on your
                device and usage, Capture Data may include highly sensitive information, such as:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li>authentication tokens, API keys, session cookies</li>
                <li>personal messages or form inputs</li>
                <li>images, files, and other content in request/response bodies</li>
                <li>hostnames, URLs, and query strings that may reveal personal data</li>
              </ul>
              <div className="mt-4 rounded-lg border bg-muted p-4">
                <p className="mb-2 text-sm font-semibold">Important:</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Capture Data is created by your network activity and by apps/services you use. The
                  App does not create this data; it enables you to view and manage it for debugging.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold sm:text-lg">
                3.2 TLS Decryption and Certificates (On-Device)
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                The App supports on-device TLS interception (&quot;TLS MITM&quot;) for debugging. To
                do this, the App may generate a local root Certificate Authority (CA) and require
                you to install and trust it.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                If you enable TLS interception:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li>encrypted HTTPS content may be decrypted and displayed on-device</li>
                <li>
                  certificate material may be stored using iOS secure storage mechanisms (e.g.,
                  Keychain)
                </li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                You can disable TLS interception and remove the certificate by following the
                App&apos;s instructions and/or removing the certificate from iOS settings.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold sm:text-lg">3.3 App Data (On-Device)</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                The App stores configuration and operational data on-device, which may include:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li>capture sessions and their organization</li>
                <li>filtering/search settings</li>
                <li>
                  rewrite rules, scripts, breakpoints, request maps, host overrides, and presets
                </li>
                <li>import/export artifacts (e.g., HAR files) that you create or import</li>
                <li>UI preferences and other local settings</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                The App uses an iOS App Group container to share data between the main app and its
                extensions (e.g., network extension, widgets) where applicable.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold sm:text-lg">
                3.4 No Analytics, No Accounts, No Server-Side Processing
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We do not:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li>operate servers that receive your Capture Data or personal information</li>
                <li>collect analytics or telemetry</li>
                <li>use advertising SDKs</li>
                <li>use crash reporting services that transmit data to us or third parties</li>
                <li>require accounts or logins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* How Information Is Used */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            4. How Information Is Used
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            The App handles information solely to provide its functionality, including:
          </p>
          <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li>capturing and displaying network traffic for inspection and debugging</li>
            <li>enabling modification, replay, and export of traffic data</li>
            <li>storing your sessions and configuration locally so you can use the App</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Data Sharing and Disclosure */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            5. Data Sharing and Disclosure
          </h2>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <h3 className="mb-2 text-base font-semibold sm:text-lg">
                5.1 No Sale or Sharing by Us
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                We do not sell, rent, share, or disclose your information to third parties because
                we do not collect it on our systems.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-base font-semibold sm:text-lg">
                5.2 User-Initiated Exports/Sharing
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                If you use export or sharing features (e.g., exporting HAR, copying cURL, saving
                files, sharing via iOS Share Sheet), you are directing data to a destination you
                choose (e.g., Files, AirDrop, email, messaging apps, third-party storage). That
                destination&apos;s privacy practices apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Tracking */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">6. Tracking</h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            The App does not track you across apps or websites, and does not use advertising
            identifiers for tracking purposes.
          </p>
        </div>
      </section>

      <Separator />

      {/* Data Retention */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            7. Data Retention
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            All data is stored on your device and retained until you delete it, which you can do by:
          </p>
          <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li>deleting individual sessions or data within the App (where available)</li>
            <li>uninstalling the App (which removes local app storage)</li>
            <li>
              removing certificates you installed for TLS interception via iOS settings (if
              applicable)
            </li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Security */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">8. Security</h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We use reasonable safeguards consistent with an on-device iOS app, including relying on
            iOS security features such as app sandboxing and device encryption. However, no method
            of storage is 100% secure.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            You are responsible for:
          </p>
          <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li>securing access to your device (passcode/biometrics)</li>
            <li>exercising caution when capturing, viewing, or exporting sensitive data</li>
            <li>ensuring you only intercept traffic you are authorized to inspect</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Your Choices and Controls */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            9. Your Choices and Controls
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            You can control the App&apos;s handling of information by:
          </p>
          <ul className="ml-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li>starting/stopping capture at any time</li>
            <li>disabling TLS interception (if enabled)</li>
            <li>deleting sessions and local data</li>
            <li>choosing whether to export/share and what to export/share</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Legal Compliance */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            10. Legal Compliance and Authorized Use
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            The App is intended for debugging and inspection of traffic that you are authorized to
            access and analyze. You agree not to use the App to intercept or monitor communications
            without proper authorization. You are solely responsible for compliance with applicable
            laws, regulations, and third-party terms.
          </p>
        </div>
      </section>

      <Separator />

      {/* Children&apos;s Privacy */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            11. Children&apos;s Privacy
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            The App is not directed to children. We do not knowingly collect personal information
            from children. Because the App does not transmit data to us, we have no practical means
            to identify users&apos; ages.
          </p>
        </div>
      </section>

      <Separator />

      {/* International Users */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            12. International Users
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            The App processes data on-device. If you export/share data, it may be transmitted to
            services or recipients you choose, which may be located outside your country. You are
            responsible for your sharing choices.
          </p>
        </div>
      </section>

      <Separator />

      {/* Changes to This Policy */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            13. Changes to This Policy
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            We may update this Privacy Policy from time to time. If we make changes, we will update
            the Effective Date above and publish the revised policy where it is made available
            (e.g., in the App listing or repository page).
          </p>
        </div>
      </section>

      <Separator />

      {/* Contact Us */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-xl font-bold tracking-tight sm:mb-4 sm:text-2xl">
            14. Contact Us
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            If you have questions about this Privacy Policy, contact:
          </p>
          <a
            href="mailto:epa6643@gmail.com"
            className="text-base font-medium text-foreground hover:underline sm:text-lg"
          >
            epa6643@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
