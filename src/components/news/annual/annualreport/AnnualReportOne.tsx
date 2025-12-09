'use client';

import React from 'react';
import { FaArrowLeft, FaSchool, FaHeart, FaHandsHelping, FaSeedling, FaStar } from 'react-icons/fa';
import Link from 'next/link';

export default function Report2022() {
  return (
    <div className="pt-8 pb-20 px-4 md:px-10 bg-gray-50 min-h-screen">
      
      {/* --- Header and Navigation --- */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10 md:mb-16">
        {/* Back Button */}
        <Link 
          href="/annual" 
          className="text-2xl md:text-2xl text-gray-700 hover:text-green-600 transition duration-300 flex items-center group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Reports</span>
        </Link>
        
        {/* Year Navigation (Next/Previous, if applicable) */}
        <Link
          href="/annual/annualreporttwo"
          className="flex items-center text-green-600 hover:text-green-800 transition duration-300 text-sm md:text-base font-semibold"
        >
          2023  &rarr;
        </Link>
      </div>

      {/* --- Report Title Section --- */}
      <header className="max-w-7xl mx-auto text-center mb-12  pb-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 leading-tight">
          Annual Report <span className="text-green-600">2022</span>
        </h1>
        <p className="text-xl text-green-700 font-semibold italic">
          KNGVS 5.0: The Game-Changing Edition
        </p>
      </header>

      {/* --- Main Content Layout (Two Columns on Desktop) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN (Primary Narrative) --- */}
        <section className="lg:col-span-2 space-y-10">
          
          {/* Section 1: KNGVS 5.0 Overview */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <FaSeedling className="mr-3 text-green-600"/> Programme Expansion & Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The <b>Game-Changing Edition KNGVS 5.0 in 2022</b> saw us lay the groundwork to expand to <b>five summer vacation schools in Ibadan</b>. This ambitious initiative enabled us to reach a significantly larger number of young children and empower more families, elementary school teachers, and volunteers in our community. Our philosophy is clear: if we <b>&#39;catch them young&rsquo;</b> by helping them acquire healthy dietary habits and skills in childhood, we will prepare a generation to lead a life free of unprecedented health problems in the future.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              From <b>1 August to 6 September 2022</b>, we engaged the kids in the <b>Nutri-garden™-2-Fork adventure</b>. This involved <b>hands-on gardening</b>, <b>nutrition education</b>, and healthy cooking/food demonstrations, making their vacation school experiences truly worthwhile!
            </p>
          </div>

          {/* Section 2: School Partnerships */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaSchool className="mr-3 text-green-600"/> Our Five Partner Schools
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
              <li>University of Ibadan Staff School, University of Ibadan Campus</li>
              <li>Graceful Oaks Nursery and Primary School, 1 Christ Chapel Street, Ashi, Ibadan</li>
              <li>Bumble Bee Creative Elementary School, 14 Saka Agbaje street, off Aare avenue, New Bodija, Ibadan</li>
              <li>Vastab Mega School, off Osuntokun Avenue, Old Bodija, Ibadan</li>
              <li>The Bassinet Schools, Oshin Street, Bodija, Ibadan</li>
            </ul>
          </div>
          
          {/* Section 3: KNGVS Project Report & Volunteers */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <FaHeart className="mr-3 text-green-600"/> KNG Corps Volunteer Impact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <b>KNGVS volunteers make us thrive!</b> In the 2022 edition, we launched an expanded training for <b>twenty-three young and passionate volunteers</b> (the KNG Corps) to help implement the Nutri-garden™-2-fork adventure. Our Corps dedicated their time throughout August and September to set up and nurture <b>six nutri-gardens</b> to grow local veggies. They helped children link growing food to nutrition concepts that promote well-being and health.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 italic font-semibold border-l-4 border-green-400 pl-3">
              The icing on the cake was the healthy cooking/food demonstration sessions where the KNG Corps assisted the kids to use veggies harvested from the nutri-garden to prepare simple healthy meals and snacks, driving the <b>&#34;From nutri-garden-to-fork!&#34;</b> concept home.
            </p>
            <p className="text-green-800 font-bold mt-4">
                Key Outputs: 
                <em className="block mt-1 text-sm font-normal text-gray-700">Twenty nutri-garden & interactive nutri-education lessons, ten healthy cooking/food demonstrations, six open garden days, ten guest lectures, one excursion, and one garden-2-fork exhibition.</em>
            </p>
          </div>
            {/* Section 6: Support and Collaboration */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaHandsHelping className="mr-2 text-green-600"/> Support & Collaboration
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 leading-relaxed text-sm ml-4">
              <li><b>Human Nutrition & Dietetics Dept:</b> Provided classroom and kitchen utilities.</li>
              <li><b>Biomedical Communication Center, COMUI:</b> Created publicity jingles.</li>
              <li><b>UI Teaching and Research Farm:</b> Provided child-friendly gardening space.</li>
              <li><b>FRIN:</b> Donated 10 bags of organic compost.</li>
              <li><b>NIHORT:</b> Donated three varieties of vegetable seeds.</li>
              <li><b>Golden Penny Foods:</b> Featured in 7/10 cooking demos, provided contest facilities, and generous product donations (18 cartons of Noodles, oil, wheat, etc.).</li>
            </ul>
          </div>
        </section>

        {/* --- RIGHT COLUMN (Attendance, Support, Donations) --- */}
        <aside className="lg:col-span-1 space-y-8">
          
          {/* Section 4: Garden-2-Fork Exhibition Summary */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaStar className="mr-2 text-green-600"/> Garden-2-Fork Exhibition
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              KNGVS 5.0 concluded in grand style with an exhibition and funfair. The event featured a <b>cook-with-me contest</b> (parent and child pair), creative performances, and the sale of fresh veggies and healthy snacks. Exhibitors included Friesland Campina, nutri-preneurs, and agripreneurs. <b>Golden Penny Foods</b> was a major sponsor, adding color to the day.
            </p>
          </div>

          {/* Section 5: Exhibition Attendance */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Exhibition Attendance</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              The event was chaired by <b>Mrs. Fehintola Olatunde-Agbeja</b> (Executive Director, Boff & Co Insurance). Attendees included the Deputy Vice-Chancellor Academic (UI, Prof. Aderonke Baiyeroju), Deputy Provost (COMUI, Prof. Fatai Adeniyi), Director CEI (Prof. Oyedunni Arulogun), Deans of Faculties, various Ministry representatives (Oyo State Ministries of Health, & Education), and Executive Directors from FRIN and NIHORT (represented).
            </p>
          </div>

        
          
          {/* Section 7: Technical Support */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Technical Support</h3>
            <ul className="list-disc list-outside space-y-1 text-gray-700 leading-relaxed text-sm ml-4">
              <li>Erica Krug (Director of Youth Garden Support, Rooted/Wisconsin School Garden Network, USA)</li>
              <li>Nathan Larson (Executive director, Restorative Places, Wisconsin, USA)</li>
              <li>Dr Rachel Scherr (San Francisco State University)</li>
              <li>Mrs Jumoke Olowokere (CEO, Africa Waste Museum)</li>
              <li>Mrs Chisom Mabia (WIFEE Foundation)</li>
              <li>Mr Segun Ojo (KNGVS Master Gardener) and more...</li>
            </ul>
          </div>

          {/* Section 8: Cash Donations */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Cash Donations</h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <li><b>Seed (NGN 100k - 200k):</b> Boff Insurance & Co Limited, Flexglobe, Lagos.</li>
              <li><b>Root (NGN 50k - 99.9k):</b> Mr Babajide Adebisi, Miss Nkeiru Enwelum.</li>
              <li><b>Stem (NGN 20k - 49.9k):</b> Mrs Yeside Adesiyun, Dr Victor Ohuruogu.</li>
              <li><b>Branch (NGN 10k – 19.9k):</b> Miss Olutayo Toromade, Miss Temitope Fagbola, Miss Adejoke Adewusi.</li>
              <li><b>Leaf (NGN 5k – 9.9k):</b> Mr David Ubong, Prof A. Adeolu, Dr Folake Samuel.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}