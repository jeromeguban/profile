import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.code}>
      <h3>A Little Bit About Me</h3>

      <br></br>
      <h4> /* Details */</h4>
      <br></br>

      <p className={styles.line}>
        name:&nbsp;
        <a href="#" rel="noopener">
          Jerome Edward Guban
        </a>
      </p>

      <p className={styles.line}>
        age:&nbsp;
        <a href="#" rel="noopener">
          24
        </a>
      </p>

      <p className={styles.line}>
        contact:&nbsp;
        <a href="#" rel="noopener">
          09615057115
        </a>
      </p>

      <p className={styles.line}>
        address:&nbsp;
        <a href="#" rel="noopener">
          Queens Row East, Bacoor City, Cavite
        </a>
      </p>

      <br></br>
      <h4> /* About */</h4>
      <br></br>

      <p className={styles.line}>
        about:&nbsp;
        <a href="#" rel="noopener">
          I'm a Web Developer for almost four professional year. I love to develop web applications with the use of newest technologies for fast phase development.
        </a>
      </p>
      <br></br>
      <p className={styles.line}>
        objective:&nbsp;
        <a href="#" rel="noopener">
          To obtain new knowledge and experience from a reputable company, Where I can be of best service and can contribute on the improvement and growth of the company.
        </a>
      </p>

      <br></br>
      <h4> /* Work Experience */</h4>
      <br></br>

      <p className={styles.line}>
        company:&nbsp;
        <a href="#" rel="noopener">
          HMR Philippines, Inc.
        </a>
      </p>
      <p className={styles.line}>
        date:&nbsp;
        <a href="#" rel="noopener">
          (July 2019 to Present)
        </a>
      </p>

      <br></br>
      <h4> /* Skills */</h4>
      <br></br>

      <p className={styles.line}>
        &nbsp;html:&nbsp;
        <a href="#" rel="noopener">
          85%
        </a>
      </p>
      <p className={styles.line}>
        javascript:&nbsp;
        <a href="#" rel="noopener">
          80%
        </a>
      </p>
      <p className={styles.line}>
        css:&nbsp;
        <a href="#" rel="noopener">
          65%
        </a>
      </p>
      <p className={styles.line}>
        php:&nbsp;
        <a href="#" rel="noopener">
          90%
        </a>
      </p>
      <p className={styles.line}>
        vue:&nbsp;
        <a href="#" rel="noopener">
          85%
        </a>
      </p>
      <p className={styles.line}>
        laravel:&nbsp;
        <a href="#" rel="noopener">
          90%
        </a>
      </p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}



export default AboutMe;
