import React from 'react';
import styles from './AnnualReportTwo.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const Report2023 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Link href="/report">
          <FaArrowLeft className={styles.backIcon} />
        </Link>
      </div>

      <div className={styles.all}>
        <div className={styles.h}>
          <div className={styles.report}>
            <h1>2023 Report</h1>
            <p>
              KNGVS™, which is in its sixth edition, is a fun-filled, innovative, and unconventional annual
              hands-on garden-to-fork food system transformation programme and community service project
              organised by the Department of Human Nutrition and Dietetics University of Ibadan (UI) Nigeria for
              school-age children and their families during the long vacation of schools in August.
            </p>
            <p>
              This year, KNGVS™ was tagged ‘Amplified Edition’, themed Grow it, Cook it, Love it!
              Amplified IMPACT
              <br /><br />
              ✓ SEVEN activity locations!
              <br />
              ✓ TWO significant collaborations that catalyzed TWO new features of KNGVS 2023 <br />
              ✓ TWO new features as a result of the collaborations: Amplified Nutri-kitchen days and Community KNGVS <br />
              ✓ THREE significant product sponsorships from renowned food and beverage companies in Nigeria <br />
              ✓ THIRTY-FOUR hands-on garden-based activity sessions <br />
              ✓ SIXTEEN Hands-on healthy culinary nutri-kitchen sessions with FOUR Amplified open kitchen sessions <br />
              ✓ ONE grand Show-and-Tell Growit, Cookit, Loveit public exhibition <br />
              ✓ Over THREE HUNDRED children and youths reached
            </p>
          </div>

          <div className={styles.r}>
            <h2>Nutri - Garden - 2 - Fork Adventure</h2>
            <p>
              From 07 August to 01 September, 2023, with support from various sponsors and partners, KNGVS successfully added colour and adventure to children’s summer vacation programme in their respective schools to make their holiday a fun learning experience. <br />
              Activities included:  <br />
              - Hands-on nutri-gardening to grow and harvest four local veggies, in their schools <br />
              - Amplified nutri-kitchen held every Wednesday, in collaboration with O-Beth <br />
              - Interactive nutrition education lessons tied to gardening and kitchen activities <br />
              - Family newsletters for family members to learn along with us in their homes <br />
              - Community KNGVS engagement with children in two communities in Ibadan in collaboration with Waste4Skills <br />
              - Growit, Cookit, Loveit public exhibition and family fun day.
            </p>
          </div>

          <div className={styles.j}>
            <h2>KNGVS Activity Locations</h2>
            <p>
              KNGVS Activities took place in seven locations!
              <br />- Bumble Bee Creative Elementary School, New Bodija, Ibadan
              <br />- Vastab Mega School, Old Bodija, Ibadan
              <br />- Rosegate Nursery and Primary School, Bodija, Ibadan
              <br />- Summer Vacation Camp, Church of Ascension, Bodija, Ibadan
              <br />- Besty Schools, Moniya, Ibadan (Waste4Skills Eco Creative Summer Camp)
              <br />- Ebenezer Anglican Pry School, Moniya (Waste4Skills Eco Creative Summer Camp)
              <br />- Department of Human Nutrition and Dietetics, University of Ibadan
            </p>
          </div>

          {/* Add more sections like the ones above with `styles.j` class for each subsection like Volunteers, Exhibition, etc. */}
        </div>
      </div>
    </div>
  );
};

export default Report2023;
