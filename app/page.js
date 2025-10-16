import HomePage from "./_components/pages/HomePage";

export const metadata = {
  title: "Welcome to Trade Go",
  description:
    "Landing page for Trade Go chemical supply company based in the United Kingdom.",
  openGraph: {
    title: "Welcome to Trade Go",
    description:
      "Landing page for Trade Go chemical supply company based in the United Kingdom.",
    url: "https://tradegolimited.co.uk",
    siteName: "Trade Go",
    images: [
      {
        url: "/SmallLogo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-GB",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
