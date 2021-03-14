import React from 'react'
import {Link} from 'react-router-dom'

import styles from './home.module.scss'

const preventions = [
  {
    title: 'Rajin mencuci tangan',
    description:
      'Setelah berpergian atau memegang benda asing hendaklah segera mencuci tangan.',
  },
  {
    title: 'Memakai masker',
    description:
      'Selalu gunakan masker jika keluar ruangan atau ketika berbicara dengan orang lain.',
  },
  {
    title: 'Menjaga jarak',
    description:
      'Jaga jarak jika berada di keramaian, dan hindari kontak fisik semininal mungkin.',
  },
  {
    title: 'Tetap dirumah',
    description:
      'Lindungi dan gunakan waktu bersama keluarga tercinta dengan tetap stay dirumah.',
  },
]

function Home() {
  return (
    <>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingTitle}>Cek data COVID-19 terbaru</h1>
        <p className={styles.headingDescription}>
          Tetap jaga kesehatan dan Selalu update dengan perkembangan data kasus
          COVID-19 diseluruh dunia
        </p>
        <Link className={styles.campaignLink} to="/check">
          cek data terbaru
        </Link>
      </div>
      <div className={styles.preventionContainer}>
        <h2 className={styles.preventionTitle}>
          bantu cegah penyebaran virus corona
        </h2>
        <div className={styles.preventionItemContainer}>
          {preventions.map((prevention, idx) => (
            <PreventionItem
              key={idx}
              title={prevention.title}
              description={prevention.description}
            />
          ))}
        </div>
      </div>
      <div className={styles.campaignContainer}>
        <p className={styles.campaignMessage}>
          cek data terbaru sekarang juga!
        </p>
        <Link className={styles.campaignLinkOutline} to="/check">
          cek data terbaru
        </Link>
      </div>
    </>
  )
}

function PreventionItem({title, description}) {
  return (
    <div className={styles.preventionItem}>
      <h3 className={styles.preventionItemTitle}>{title}</h3>
      <p className={styles.preventionItemDescription}>{description}</p>
    </div>
  )
}

export default Home
