import type { ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Uses git',
    Svg: require('@site/static/img/Git-Logo-1788C.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse nec gravida mi, vel efficitur ex.
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('@site/static/img/rust-logo-blk.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse nec gravida mi, vel efficitur ex.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  let fill = '';
  const { colorMode } = useColorMode()
  if (title === 'Uses git' && colorMode === 'dark') {
    Svg = require('@site/static/img/Git-Logo-White.svg').default
  }
  if (title === 'Powered by Rust' && colorMode === 'dark') {
    Svg = require('@site/static/img/rust-logo-wht.svg').default
  }
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
