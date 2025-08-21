import styles from './AnnualReportOne.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Report2022() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link href="/report">
          <FaArrowLeft className={styles.backIcon} />
        </Link>
      </div>

      <div className={styles.all2}>
        <div className={styles.h}>
          <div className={styles.report}>
            <h1>2022 Report</h1>
            <br />
            <p>
              Game-Changing Edition KNGVS 5.0 2022... (shortened for brevity)
            </p>
            <br />
            <h3>School Partnered With</h3>
            <p>
              University of Ibadan Staff School... (shortened for brevity)
            </p>
          </div>

          <div className={styles.r}>
            <h2>KNGVS Project Report</h2>
            <p>
              KNGVS volunteers make us thrive... (shortened for brevity)
            </p>
          </div>

          <div className={styles.j}>
            <h2>More Progress</h2>
            <p>
              It was even more fun when researchers from different institutions visited... (shortened)
            </p>
            <br />
            <em>
              `&quot;`I am excited that my daughter is learning about gardening...`&quot;`
            </em>
            <br />
            <p>
              We also had exciting new content additions... (shortened)
            </p>
          </div>
        </div>

        <div className={styles.i}>
          <div className={styles.j}>
            <h2>Garden-2-Fork Exhibition</h2>
            <p>
              And it`&apos;`s a wrap!!!! KNGVS 5.0 was concluded in grand style... (shortened)
            </p>
          </div>

          <div className={styles.j}>
            <h2>Exhibition Attendance</h2>
            <p>
              The Executive Director (Finance & Admin)... (shortened)
            </p>
          </div>

          <div className={styles.j}>
            <h2>Support Partnership and Collaboration</h2>
            <p>
              Department of Human Nutrition and Dietetics... (shortened)
            </p>
          </div>

          <div className={styles.j}>
            <h2>Technical Support</h2>
            <br />
            <p>
              Erica Krug - Director of Youth Garden Support... (shortened)
            </p>
          </div>

          <div className={styles.j}>
            <h2>Cash Donations</h2>
            <br />
            <p>
              Seed: NGN 100,000 - NGN 200,000... (shortened)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
