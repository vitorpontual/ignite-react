import Head from 'next/head'

import styles from './styles.module.scss'

export default function Post() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Create a Monorepo with Lerna & Yarn Workspaces </strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, deleniti consectetur sapiente laudantium, autem ducimus voluptatum obcaecati explicabo voluptas fuga consequatur impedit quae, iusto commodi provident vel facilis consequuntur eius!</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Create a Monorepo with Lerna & Yarn Workspaces </strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, deleniti consectetur sapiente laudantium, autem ducimus voluptatum obcaecati explicabo voluptas fuga consequatur impedit quae, iusto commodi provident vel facilis consequuntur eius!</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Create a Monorepo with Lerna & Yarn Workspaces </strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, deleniti consectetur sapiente laudantium, autem ducimus voluptatum obcaecati explicabo voluptas fuga consequatur impedit quae, iusto commodi provident vel facilis consequuntur eius!</p>
          </a>
        </div>
      </main>
    </>
  )
}