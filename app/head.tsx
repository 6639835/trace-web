export default function Head() {
  return (
    <>
      {/* Preconnect to external resources for faster loading */}
      <link rel="preconnect" href="https://github.com" />
      <link rel="preconnect" href="https://testflight.apple.com" />
      <link rel="dns-prefetch" href="https://github.com" />
      <link rel="dns-prefetch" href="https://testflight.apple.com" />
    </>
  );
}
