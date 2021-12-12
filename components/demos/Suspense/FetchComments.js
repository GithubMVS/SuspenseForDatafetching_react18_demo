import React from 'react'
import styles from '../Suspense/fetchComments.module.css'

import { fetchData } from '../Suspense/Api'
const commentData = fetchData();

const FetchComments = () => {
  const allComments = commentData.comments.read()
  console.log(allComments)

  return (
    <div className={styles.allData}>
      {allComments.map(comment => (
        <div className={styles.allData_group} key={comment.key}>
          <p className={styles.allData_group_mail}>by: {comment.email}</p>
          <p className={styles.allData_group_name}>{comment.name}</p>
          <p className={styles.allData_group_description}>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchComments
