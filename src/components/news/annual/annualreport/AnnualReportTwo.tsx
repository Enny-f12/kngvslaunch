/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import { FaArrowLeft, FaSchool, FaKitchenSet, FaHeart, FaWater, FaHandsHolding, FaSeedling } from 'react-icons/fa6';
import Link from 'next/link';
import { FaHandsHelping } from 'react-icons/fa';

const Report2023 = () => {
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
        
        {/* Year Navigation */}
        <div className="flex space-x-4 text-sm md:text-base font-semibold">
          <Link
            href="/annual/annualreportone" // Link to 2022 (Previous)
            className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
          >
            &larr; 2022 
          </Link>
        
        </div>
      </div>

      {/* --- Report Title Section --- */}
      <header className="max-w-7xl mx-auto text-center mb-12 pb-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 leading-tight">
          Annual Report <span className="text-green-600">2023</span>
        </h1>
        <p className="text-xl text-green-700 font-semibold italic">
          KNGVS 6.0: The Amplified Edition (Grow it, Cook it, Love it!)
        </p>
      </header>

      {/* --- Main Content Layout (Two Columns on Desktop) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN (Primary Narrative & Stats) --- */}
        <section className="lg:col-span-2 space-y-10">
          
          {/* Section 1: KNGVS 6.0 Overview & Amplified Impact */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <FaHeart className="mr-3 text-green-600"/> Programme Overview: Amplified Edition
            </h2>
            <p className="text-gray-700 leading-relaxed">
              KNGVS™, in its <b>sixth edition</b>, is an innovative, unconventional, and fun-filled annual hands-on garden-to-fork food system transformation program. It is a community service project organized by the Department of Human Nutrition and Dietetics, University of Ibadan (UI), for school-age children and their families during the long vacation in August.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-bold">
              The 2023 edition, tagged ‘Amplified Edition’ with the theme <b>Grow it, Cook it, Love it!</b>, achieved Amplified IMPACT:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mt-4 ml-4">
              <li><b>SEVEN</b> activity locations!</li>
              <li><b>TWO</b> significant collaborations leading to <b>TWO</b> new features: Amplified Nutri-kitchen days and Community KNGVS.</li>
              <li><b>THREE</b> significant product sponsorships from renowned food and beverage companies in Nigeria.</li>
              <li><b>THIRTY-FOUR</b> hands-on garden-based activity sessions.</li>
              <li><b>SIXTEEN</b> Hands-on healthy culinary nutri-kitchen sessions with <b>FOUR</b> Amplified open kitchen sessions.</li>
              <li><b>ONE</b> grand Show-and-Tell Growit, Cookit, Loveit public exhibition.</li>
              <li>Over <b>THREE HUNDRED</b> children and youths reached.</li>
            </ul>
          </div>

          {/* Section 2: Nutri-Garden-2-Fork Adventure */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaSeedling className="mr-3 text-green-600"/> Nutri-Garden-2-Fork Adventure Highlights
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From <b>07 August to 01 September 2023</b>, KNGVS successfully added color and adventure to children’s summer vacation programmes. Activities included:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mt-4 ml-4">
              <li>Hands-on nutri-gardening to grow and harvest four local veggies in their schools.</li>
              <li><b>Amplified Nutri-Kitchen</b> held every Wednesday, in collaboration with O-Beth.</li>
              <li>Interactive nutrition education lessons tied to gardening and kitchen activities.</li>
              <li>Family newsletters for family members to learn along with us in their homes.</li>
              <li><b>Community KNGVS engagement</b> with children in two communities in Ibadan in collaboration with Waste4Skills.</li>
              <li>Growit, Cookit, Loveit public exhibition and family fun day.</li>
            </ul>
          </div>
          
          {/* Section 3: World Food Day Event */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <FaWater className="mr-3 text-green-600"/> World Food Day KNGVS Event
            </h2>
            <p className="text-gray-700 leading-relaxed">
              KNGVS, in collaboration with the Association of Nutrition Science Students (ANSS), participated in the global celebrations of the FAO’s World Food Day (October 16, 2023) with the theme: <b>&#34;Water is Life, Water is Food. Leave No One Behind.&#34;</b>
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              From <b>26 to 30 October 2023</b>, our team of 25 dedicated youth volunteers visited four schools, engaging over <b>200 pupils and 30 teachers</b>. Using FAO communication tools, we conveyed the significance of water through four educative videos, hands-on outdoor gardening, a water filtration experiment, a WFD poster contest, singing, and dancing.
            </p>
            
            <h4 className="font-bold mt-4 text-green-800">Schools Visited for WFD:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed text-sm ml-4">
              <li>Kings and Queens Primary School, Ashi, Ibadan (46 pupils, 10 teachers)</li>
              <li>Bumble Bee Elementary School, New Bodija, Ibadan (50 pupils, 7 teachers)</li>
              <li>VASTAB Mega Primary School, Old Bodija Ibadan (75 pupils, 10 teachers)</li>
              <li>Tekhols Primary School, Bashorun Ibadan (40 pupils, 7 teachers)</li>
            </ul>
          </div>
           {/* Section 4: Activity Locations */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaSchool className="mr-2 text-green-600"/> Activity Locations
            </h3>
            <p className="text-gray-700 font-bold mb-2">KNGVS Activities took place in seven locations:</p>
            <ul className="list-disc list-outside space-y-1 text-gray-700 leading-relaxed text-sm ml-4">
              <li>Bumble Bee Creative Elementary School, New Bodija, Ibadan</li>
              <li>Vastab Mega School, Old Bodija, Ibadan</li>
              <li>Rosegate Nursery and Primary School, Bodija, Ibadan</li>
              <li>Summer Vacation Camp, Church of Ascension, Bodija, Ibadan</li>
              <li>Besty Schools (Waste4Skills Eco Creative Summer Camp), Moniya, Ibadan</li>
              <li>Ebenezer Anglican Pry School (Waste4Skills Eco Creative Summer Camp), Moniya, Ibadan</li>
              <li>Department of Human Nutrition and Dietetics, University of Ibadan (for Nutri-Kitchen)</li>
            </ul>
          </div>

        </section>

        {/* --- RIGHT COLUMN (Locations, Volunteers, Support) --- */}
        <aside className="lg:col-span-1 space-y-8">
          
         
          {/* Section 5: KNG Corps Volunteers */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaHeart className="mr-2 text-green-600"/> KNG Corps Volunteers
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Our well-trained volunteers at KNGVS make us thrive. From <b>19 July to 4 August 2023</b>, they received intensive training and orientation, equipping them with knowledge and skills for technical and administrative tasks. Their dedicated effort throughout August resulted in a vibrant and blissful holiday experience for the schools and the children.
            </p>
          </div>

          {/* Section 6: Amplified Nutri-Kitchen */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaKitchenSet className="mr-2 text-green-600"/> Amplified Nutri-Kitchen
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              This exciting activity took place every Wednesday in August in the Human Nutrition and Dietetic kitchen, in collaboration with <b>O’beth Treats, Ibadan</b>. Mrs. Elizabeth Shotunde, CEO, Master Chef and gardening enthusiast, inspired and brought to life this new feature. It gathered children, youths, and adults (parents) to gain hands-on creative skills to prepare simple, healthy, and tasty meals with veggies and fruits.
            </p>
          </div>

          {/* Section 7: Exhibition Highlights and Attendance */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Exhibition Highlights</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              The &#39;GrowIt, CookIt, LoveIt&#39; public exhibition on <b>01 September 2023</b> was a grand show-and-tell event. Highlights included: a **cook-with-me contest** (supported by Golden Penny Foods), creative presentations, singing with the Provost COMUI, experience sharing, anthropometry checks, display and sales of garden produce, games, and a raffle draw (a new feature!).
            </p>
            <h4 className="font-bold mt-3 text-green-800">Attendance:</h4>
            <p className="text-gray-700 leading-relaxed text-sm">
              The event was graced by Prof. Oluyemisi Bamgbose (DVC RISP, UI), Prof. Olayinka Omigbodun (Provost COMUI), Prof. A.F. Adeniyi (Deputy Provost COMUI), Prof. Oyedunni Arulogun (Director CEI), Deans of Public Health and Agriculture, and over <b>150 persons</b>, including educators, parents, and alumni.
            </p>
          </div>
          
          {/* Section 8: Support, Partnership and Collaboration */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaHandsHelping className="mr-2 text-green-600"/> Support & Collaboration
            </h3>
            <ul className="list-disc list-outside space-y-2 text-gray-700 leading-relaxed text-sm ml-4">
              <li><b>Department of Human Nutrition and Dietetics:</b> Provided classroom and kitchen facilities.</li>
              <li><b>University of Ibadan teaching and research Farm:</b> Provided child-friendly gardening space.</li>
              <li><b>Golden Penny Foods, Peak Choco, and Peak 4-5-6 (Friesland Campina):</b> Generous donation of food products and gifts for sessions and guests.</li>
              <li><b>Nestle Purelife water:</b> Provided water for every attendee.</li>
              <li><b>Integrity digital world:</b> Provided six months of internet data to promote activities on social media.</li>
            </ul>
          </div>
          
          {/* Section 9: Friends of KNGVS (Donors) */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Friends of KNGVS (Donations)</h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <li><b>Root (NGN 50k - 100k):</b> Ms. Nkeiru Enwelum.</li>
              <li><b>Stem (NGN 20k - 49.9k):</b> Mr. Jide Adebisi, Mrs. Yeside Adesiyun, Mrs. Bimbo Dosunmu.</li>
              <li><b>Branch (NGN 10k - 19.9k):</b> Ms. Tope Fagbola, Ms. Aderonke Alabi, Mr. Miracle Owolawi, Mr. Tosin Adeyeye, Ms. Olutayo Toromade, Mrs. Edith Ekun, Mr. Osezua Egbele.</li>
              <li><b>Leaves (NGN 3k - 9.9k):</b> Ms. Kehinde Ogunsola, Dr. Akinyomoju, Mrs. Temabo Egbuiwe, Mr. Paul Omotayo, Ms. Ademidun Martins.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Report2023;