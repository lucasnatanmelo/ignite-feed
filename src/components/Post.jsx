import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lucasnatanmelo.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Natan</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="06 de setembro de 2022 às 20:46" dateTime="2022-09-06 20:46:10">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Oi pessoal, acabei de subir conteúdo novo no meu portifólio.</p> {''}
        <p>
          <a href="">Link</a> {''}
          <a href="">#Novo projeto #vem </a> {''}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>

      </form>
    </article>
  )
}