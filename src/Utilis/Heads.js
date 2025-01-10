import Head from "next/head";

const Heads = () => {
  return (
    <Head>
      <meta
        property="og:url"
        content="https://fusion-softworks-agency.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Fusion Softworks | Software development agency"
      />
      <meta
        property="og:description"
        content="We are a software agency focused on AI, Blockchain, Web, Mobile App development."
      />
      <title>Fusion Softworks | Software development agency</title>
      <meta
        name="description"
        content="We are a software agency focused on AI, blockchain, web and mobile app development. We build products using cutting edge technologies. Always friendly and provide excellent service."
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="author" content="Siam Ahnaf" />
    </Head>
  );
};

export default Heads;
