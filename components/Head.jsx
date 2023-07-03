import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jerome Edward Guban is an avid web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Jerome Edward Guban vscode-portfolio"
      />
      <meta property="og:title" content="Jerome Edward Guban's Portfolio" />
      <meta
        property="og:description"
        content="A Web Developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://i.imgur.com/yiGCQCr.jpg" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jerome Edward Guban',
};
