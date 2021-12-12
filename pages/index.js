import Head from 'next/head'
import Image from 'next/image'
import styles from '../pages/index.module.css'
import Link from 'next/link'

//image imports
import checkMark from '../public/homePage/checkMark.svg'

// images imports
import Suspense from '../public/homePage/Suspense.png'

export default function Home() {
  return (
    <div className={styles.homepage__full}>
      <section className={styles.whatsNew_single}>
        <h1 className={styles.displayNone}>Suspense</h1>
        <div className={styles.whatsNew_single_explenationFull}>
          <h1 className={styles.WhatsNew_title}>Suspense</h1>
          <p className={styles.WhatsNew_explenation}>Suspense is a component that wraps your own custom components. It lets your components communicate to React that they’re waiting for some data to load before the component is rendered. It prevents your components from rendering to the DOM until some asynchronous operationis completed.</p>
          <ul className={styles.benefits}>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Load data asynchronously</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Not load all or nothing!</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>The ability to show the most important content first</li>
          </ul>
          <div className={styles.links}>
            <Link href="/demos/suspense/demo"><a className={styles.links_demo}>View demo</a></Link>
          </div>
        </div>
        <div className={styles.whatsNew__single_image}>
          <Image src={Suspense} alt="Suspense" />
        </div>
      </section>
    </div>
  )
}
