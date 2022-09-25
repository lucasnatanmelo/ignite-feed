import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasnatanmelo.png",
      name: "Lucas Natan",
      role: "Software Enginner",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal, " },
      { type: "paragraph", content: "Acabei de subir conteúdo novo no meu portifólio. " },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Software Enginner",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal, " },
      { type: "paragraph", content: "Acabei de subir conteúdo novo no meu portifólio. " },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maikybrito.png",
      name: "Maiky Brito",
      role: "Software Enginner",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal, " },
      { type: "paragraph", content: "Acabei de subir conteúdo novo no meu portifólio. " },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;
