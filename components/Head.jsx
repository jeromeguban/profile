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
        content="Jerome Edward Guban, nitin, ranganath, web developer portfolio, nitin web developer, nitin developer, mern stack, Jerome Edward Guban portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Jerome Edward Guban's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://previews.dropbox.com/p/thumb/AB_LccY2BT0E-yqRG-vPAIwI7bpsDN-CAndg9i8QKHTj4AN18R6pPGpFK7Co92k9ZdYhhGaoGHHM6X2SQJ2vtc89HUVfxJjPRsb9QX9bGgmzs00_p1gQYsU-H92FLwcI6xwfWG1ELjeaVghxK93U3SYa_xkx4mEqaqhdDG6OBzyURkDvrKi6wLoPRXIfoNwQsIgJ9GUluKHN2ssWkT21JDjPyEnUfQ3Q7kEreHZ7ePrrN89G8lXUg6_yz4zamOuiu-0BLMgsnbS8zQWllb3At1aCqH9LCfqpf4GVKX1LTnZpgkhTp5bRTXFnfXf4RuWCUWwsAvV3GXrhWLltVnU12EpA/p.jpeg" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jerome Edward Guban',
};
