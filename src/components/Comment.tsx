import { set } from 'date-fns';
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css';

interface CommentPorps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentPorps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(comment: string) {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={'//github.com/diego3g.png'} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Maia</strong>
              <time title='15 de Agosto as 18:45' dateTime='2022-08-15 18:45:23'>Cerca de 1h hora atras</time>
            </div>

            <button title='Delete comment' onClick={() => handleDeleteComment(content)}>
              <Trash size={24}></Trash>
            </button>
          </header>

          <p>{content}</p>

        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir {likeCount > 0 && (<span>{likeCount}</span>)}
          </button>
        </footer>
      </div>
    </div>
  )
}
