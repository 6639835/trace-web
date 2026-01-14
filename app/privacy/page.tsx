import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            How Trace handles your data with complete transparency and privacy-first principles.
          </p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p className="text-xs sm:text-sm"><strong>Effective Date:</strong> January 14, 2026</p>
            <p className="text-xs sm:text-sm"><strong>App Name:</strong> Trace</p>
            <p className="text-xs sm:text-sm"><strong>Developer/Controller:</strong> Justin</p>
            <p className="text-xs sm:text-sm"><strong>Contact:</strong> <a href="mailto:epa6643@gmail.com" className="text-foreground hover:underline">epa6643@gmail.com</a></p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Introduction */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            This Privacy Policy explains how Trace ("the App") handles information when you use the App on iOS.
          </p>
        </div>
      </section>

      <Separator />

      {/* Summary Section */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">1. Summary</h2>
          <ul className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside">
            <li>We do not collect, transmit, sell, or share your personal data with us or any third parties.</li>
            <li>The App processes and stores network traffic data on your device only, for your debugging and inspection purposes.</li>
            <li>Data may leave your device only if you choose to export/share it using features provided by iOS (e.g., Share Sheet).</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Definitions */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">2. Definitions</h2>
          <div className="space-y-4 sm:space-y-5">
            <div>
              <p className="text-sm sm:text-base font-semibold mb-2">"Capture Data"</p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Means any network traffic content and metadata the App displays or stores, including HTTP(S) requests and responses, WebSocket frames, Server-Sent Events (SSE) messages, headers, bodies, URLs, query parameters, cookies, tokens, timing, and TLS details.
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold mb-2">"On-Device"</p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Means stored locally on your iPhone/iPad in the App's sandbox and/or App Group container shared with the App's extensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Information the App Handles */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">3. Information the App Handles</h2>
          
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">3.1 Capture Data (On-Device)</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                The App can capture and store network traffic that passes through a system proxy configured by the App's Network Extension (proxy-only mode). Depending on your device and usage, Capture Data may include highly sensitive information, such as:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
                <li>authentication tokens, API keys, session cookies</li>
                <li>personal messages or form inputs</li>
                <li>images, files, and other content in request/response bodies</li>
                <li>hostnames, URLs, and query strings that may reveal personal data</li>
              </ul>
              <div className="mt-4 p-4 rounded-lg bg-muted border">
                <p className="text-sm font-semibold mb-2">Important:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Capture Data is created by your network activity and by apps/services you use. The App does not create this data; it enables you to view and manage it for debugging.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">3.2 TLS Decryption and Certificates (On-Device)</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                The App supports on-device TLS interception ("TLS MITM") for debugging. To do this, the App may generate a local root Certificate Authority (CA) and require you to install and trust it.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                If you enable TLS interception:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
                <li>encrypted HTTPS content may be decrypted and displayed on-device</li>
                <li>certificate material may be stored using iOS secure storage mechanisms (e.g., Keychain)</li>
              </ul>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3">
                You can disable TLS interception and remove the certificate by following the App's instructions and/or removing the certificate from iOS settings.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">3.3 App Data (On-Device)</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                The App stores configuration and operational data on-device, which may include:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
                <li>capture sessions and their organization</li>
                <li>filtering/search settings</li>
                <li>rewrite rules, scripts, breakpoints, request maps, host overrides, and presets</li>
                <li>import/export artifacts (e.g., HAR files) that you create or import</li>
                <li>UI preferences and other local settings</li>
              </ul>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3">
                The App uses an iOS App Group container to share data between the main app and its extensions (e.g., network extension, widgets) where applicable.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">3.4 No Analytics, No Accounts, No Server-Side Processing</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                We do not:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">4. How Information Is Used</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            The App handles information solely to provide its functionality, including:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">5. Data Sharing and Disclosure</h2>
          
          <div className="space-y-4 sm:space-y-5">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">5.1 No Sale or Sharing by Us</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We do not sell, rent, share, or disclose your information to third parties because we do not collect it on our systems.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">5.2 User-Initiated Exports/Sharing</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you use export or sharing features (e.g., exporting HAR, copying cURL, saving files, sharing via iOS Share Sheet), you are directing data to a destination you choose (e.g., Files, AirDrop, email, messaging apps, third-party storage). That destination's privacy practices apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Tracking */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">6. Tracking</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The App does not track you across apps or websites, and does not use advertising identifiers for tracking purposes.
          </p>
        </div>
      </section>

      <Separator />

      {/* Data Retention */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">7. Data Retention</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            All data is stored on your device and retained until you delete it, which you can do by:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
            <li>deleting individual sessions or data within the App (where available)</li>
            <li>uninstalling the App (which removes local app storage)</li>
            <li>removing certificates you installed for TLS interception via iOS settings (if applicable)</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Security */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">8. Security</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            We use reasonable safeguards consistent with an on-device iOS app, including relying on iOS security features such as app sandboxing and device encryption. However, no method of storage is 100% secure.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            You are responsible for:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">9. Your Choices and Controls</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            You can control the App's handling of information by:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc list-inside ml-4">
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">10. Legal Compliance and Authorized Use</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The App is intended for debugging and inspection of traffic that you are authorized to access and analyze. You agree not to use the App to intercept or monitor communications without proper authorization. You are solely responsible for compliance with applicable laws, regulations, and third-party terms.
          </p>
        </div>
      </section>

      <Separator />

      {/* Children's Privacy */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">11. Children's Privacy</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The App is not directed to children. We do not knowingly collect personal information from children. Because the App does not transmit data to us, we have no practical means to identify users' ages.
          </p>
        </div>
      </section>

      <Separator />

      {/* International Users */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">12. International Users</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The App processes data on-device. If you export/share data, it may be transmitted to services or recipients you choose, which may be located outside your country. You are responsible for your sharing choices.
          </p>
        </div>
      </section>

      <Separator />

      {/* Changes to This Policy */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 sm:mb-8">13. Changes to This Policy</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. If we make changes, we will update the Effective Date above and publish the revised policy where it is made available (e.g., in the App listing or repository page).
          </p>
        </div>
      </section>

      <Separator />

      {/* Contact Us */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">14. Contact Us</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy, contact:
          </p>
          <a href="mailto:epa6643@gmail.com" className="text-base sm:text-lg font-medium text-foreground hover:underline">
            epa6643@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
