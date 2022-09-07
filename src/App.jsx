import {Post} from './components/Post'
import {Header} from './components/Header'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css'

function App() {

  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>

        <Sidebar/>
        
        <main>
          <Post
            author="Lucas Natan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur architecto totam ullam voluptatibus quia, quo eos aut neque quos ipsum sint molestias impedit hic? Laboriosam molestiae aliquam magni ab illum."
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur architecto totam ullam voluptatibus quia, quo eos aut neque quos ipsum sint molestias impedit hic? Laboriosam molestiae aliquam magni ab illum."
          />
        </main>
      </div>

    </>
  )
}

export default App


