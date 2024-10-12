// import React from 'react';
// import styles from '../src/styles/scss/structure/community.module.scss'; 

// import { Cloud, PieChart, Database, Pen, Smartphone } from 'lucide-react';

// const services = [
//   {
//     title: "Cloud",
//     icon: <Cloud size={24} />,
//     className: styles.cloudCard,
//     bgColor: "#3B82F6"
//   },
//   {
//     title: "Analytics",
//     icon: <PieChart size={24} />,
//     className: styles.analyticsCard,
//     bgColor: "#FF6B6B"
//   },
//   {
//     title: "CRM / ERP / ECM / Full Stack / ETL Solutions",
//     icon: <Database size={24} />,
//     className: styles.crmCard,
//     bgColor: "#FFD43B"
//   },
//   {
//     title: "Get Free Quotation & No Consultation Fee!",
//     illustration: true,
//     className: styles.quoteCard,
//     bgColor: "#10B981"
//   },
//   {
//     title: "UI/UX Design",
//     icon: <Pen size={24} />,
//     className: styles.designCard,
//     bgColor: "#FFD8CC"
//   },
//   {
//     title: "Web / Mobile",
//     icon: <Smartphone size={24} />,
//     className: styles.mobileCard,
//     bgColor: "#A78BFA"
//   }
// ];

// const QuotationIllustration = () => (
//   <div className={styles.illustration}>
//     <div className={styles.bulb}>
//       <div className={styles.bulbGlow}></div>
//     </div>
//     <div className={styles.character}></div>
//   </div>
// );

// export default function ServicesGrid() {
//   return (
//    <div className={styles.communityContainer}>
//     <div className={styles.container}>
//       <div className={styles.grid}>
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`${styles.card} ${service.className}`}
//             style={{ backgroundColor: service.bgColor }}
//           >
//             <div className={styles.cardContent}>
//               <div className={styles.header}>
//                 <h3>{service.title}</h3>
//                 {service.icon && (
//                   <div className={styles.iconWrapper}>
//                     {service.icon}
//                   </div>
//                 )}
//               </div>
//               {service.illustration && <QuotationIllustration />}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }








import { FC } from "react";
import Head from "next/head";

const CommunityEvents: FC = () => {
  return (
    <>
      <Head>
        <title>Community & Events - Coming Soon</title>
        <meta
          name="description"
          content="Stay tuned for our upcoming community and events page!"
        />
      </Head>
      <div className="flex items-center justify-center min-h-screen communityContainer">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Community & Events
          </h1>
          <p className="text-gray-700 text-lg">
            Our Community & Events page is coming soon. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
};

export default CommunityEvents;
