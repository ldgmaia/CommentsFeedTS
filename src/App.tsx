import './global.css';

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from './App.module.css'

interface PostsProps {
  id: number,
  author: {
    avatarUrl: string,
    name: string,
    role: string,
  },
  content: {
    type: 'paragraph' | 'link';
  content: string;
  }[],
  publishedAt: Date
}[]

const posts: PostsProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: '//github.com/ldgmaia.png',
      name: "Diego Maia",
      role: "CTO"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de inventar isso' },
      { type: 'link', content: 'site.com/idontcare' },
    ],
    publishedAt: new Date('2022-11-14 10:13:43')
  },
  {
    id: 2,
    author: {
      avatarUrl: '//github.com/diego3g.png',
      name: "Diego Fernandes",
      role: "CTO RS"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de inventar isso' },
      { type: 'link', content: 'site.com/idontcare' },
    ],
    publishedAt: new Date('2022-11-10 20:10:30')
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}