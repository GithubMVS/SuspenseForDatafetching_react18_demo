import Link from 'next/link'
import Image from 'next/image'
import styles from '../suspense/demo.module.css'

import goBack from '../../../public/arrow_goBack.svg'

import { Suspense } from 'react'
import FetchComments from '../../../components/demos/Suspense/FetchComments'

import Animation from '../../../components/demos/Suspense/LoadIcon'

const Demo = () => {
  return (
    <div className={styles.suspenseDemo_full}>
      <div className={styles.goBack__full}>
        <Image src={goBack} alt='goBack' />
        <Link href="/"><a className={styles.links_learnMore}>See other demos</a></Link>
      </div>

      <div className={styles.suspenseDemo_full_article}>
        <div>
          <h1 className={styles.article_title}>Streaming html with Suspense (showed with a demo)</h1>
          <p className={styles.explenationText}>React18 offers a new feature called streaming html, with streaming html the server can send pieces of your components as they get rendered, this works by using Suspense where you say which part of your application will take longer to load and which one’s should be rendered directly. In this example the article with title, photo and text should render immediately but the comments (because there can be 1000’s of them) shouldn’t so in this case we rapped Suspense around the comment component so that the comments can load while the article is already rendered. When some parts of your websites take longer to load you can let them render while other more important parts are already visible</p>
          <div className={styles.why_group_full}>
            <div className={styles.why_group}>
              <h1 className={styles.why_group_title}>Why this example?</h1>
              <p className={styles.why_group_text}>This is an example of a real world use case of Suspense. This example shows that it can already render the most important part of a page while other things (like comments) can render on the side.</p>
            </div>
            <div className={styles.why_group}>
              <h1 className={styles.why_group_title}>How can I see the suspense again?</h1>
              <ul className={styles.list}>
                <li className={styles.why_group_text}>1: Go back to the homepage.</li>
                <li className={styles.why_group_text}>2: Open to the network tab.</li>
                <li className={styles.why_group_text}>3: Put the cache on slow 3G.</li>
                <li className={styles.why_group_text}>4: Scoll down and click on demo.</li>
                <li className={styles.why_group_text}>5: Look at the comments slowly being rendered while the rest of the page is already there.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.commentData_full}>
          <h1 className={styles.commentData_full_title}>Comments on this article</h1>
          <div className={styles.commentData_full_comments}>
            <Suspense fallback={<Animation />}>
              <FetchComments />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
