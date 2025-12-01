
'use client'

import styles from '@/components/news/annual/annualreport/AnnualReport.module.css'
import Link from 'next/link'


export default function ReportLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Annual Exhibition</h2>
      </div>
      <div className={styles.paragraph}>
        <p>Click below to view the exhibition over the years:</p>
      </div>
      <div className={styles.years}>
        <Link href="/exhibition" className={styles.yearLink}>2024</Link>
        
      </div>
    </div>
  )
}
