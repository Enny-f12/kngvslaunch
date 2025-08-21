// components/Reports/ReportLinks.tsx
'use client'

import styles from './AnnualReport.module.css'
import Link from 'next/link'

export default function ReportLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Report Over the Years</h2>
      </div>
      <div className={styles.paragraph}>
        <p>Click below to view the report over the years:</p>
      </div>
      <div className={styles.years}>
        <Link href="/annual/annualreportone" className={styles.yearLink}>2022</Link>
        <Link href="/annual/annualreporttwo" className={styles.yearLink}>2023</Link>
      </div>
    </div>
  )
}
