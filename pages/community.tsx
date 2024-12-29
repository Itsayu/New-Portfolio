// import { FC } from "react";
// import Head from "next/head";

// const CommunityEvents: FC = () => {
//   return (
//     <>
//       <Head>
//         <title>Community & Events - Coming Soon</title>
//         <meta
//           name="description"
//           content="Stay tuned for our upcoming community and events page!"
//         />
//       </Head>
//       <div className="flex items-center justify-center min-h-screen communityContainer">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-blue-600 mb-4">
//             Community & Events
//           </h1>
//           <p className="text-gray-700 text-lg">
//             Our Community & Events page is coming soon. Stay tuned!
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CommunityEvents;












// import React from 'react';
// import { Calendar, Users, MapPin, Video, Book, Mic } from 'lucide-react';
// import styles from '../src/styles/scss/Community.module.scss';

// const CommunityPage = () => {
//   const communities = [
//     {
//       name: "D4 Community",
//       role: "Organizer",
//       description: "A vibrant developer community focused on learning and growth",
//       members: "500+",
//       location: "Online & Local",
//       icon: <Users className="w-12 h-12 text-blue-600" />,
//       activities: [
//         { name: "Weekly Meetups", icon: <Calendar className="w-5 h-5" /> },
//         { name: "Code Reviews", icon: <Book className="w-5 h-5" /> },
//         { name: "Tech Talks", icon: <Mic className="w-5 h-5" /> }
//       ]
//     },
//     {
//       name: "ML Chandigarh",
//       role: "Organizer",
//       description: "ML dedicated to machine learning and AI",
//       members: "300+",
//       location: "Chandigarh",
//       icon: <Users className="w-12 h-12 text-green-600" />,
//       activities: [
//         { name: "ML Workshops", icon: <Video className="w-5 h-5" /> },
//         { name: "Study Jams", icon: <Book className="w-5 h-5" /> },
//         { name: "Hackathons", icon: <Calendar className="w-5 h-5" /> }
//       ]
//     }
//   ];

//   const upcomingEvents = [
//     {
//       title: "Introduction to TensorFlow",
//       date: "Next Saturday",
//       type: "Workshop",
//       location: "Online"
//     },
//     {
//       title: "Developer Meetup",
//       date: "Next Tuesday",
//       type: "Networking",
//       location: "Chandigarh"
//     }
//   ];

//   return (
//     <div className={styles.communityBody}>
//       <div className={styles.container}>
//         {/* Hero Section */}
//         <div className={styles.hero}>
//           <h1 className={styles.title}>Building Strong Tech Communities</h1>
//           <p className={styles.subtitle}>
//             Join us in our mission to create inclusive spaces for developers
//           </p>
//         </div>

//         {/* Communities Section */}
//         <div className={styles.section}>
//           <div className={styles.grid}>
//             {communities.map((community) => (
//               <div key={community.name} className={styles.card}>
//                 <div className={styles.cardHeader}>
//                   <div className={styles.icon}>{community.icon}</div>
//                   <div className={styles.headerContent}>
//                     <h2 className={styles.communityName}>{community.name}</h2>
//                     <p className={styles.role}>{community.role}</p>
//                   </div>
//                 </div>
                
//                 <p className={styles.description}>{community.description}</p>
                
//                 <div className={styles.stats}>
//                   <div className={styles.stat}>
//                     <Users className="w-5 h-5" />
//                     <span>{community.members} Members</span>
//                   </div>
//                   <div className={styles.stat}>
//                     <MapPin className="w-5 h-5" />
//                     <span>{community.location}</span>
//                   </div>
//                 </div>
                
//                 <div className={styles.activities}>
//                   <h3 className={styles.activitiesTitle}>Key Activities</h3>
//                   <div className={styles.activitiesList}>
//                     {community.activities.map((activity) => (
//                       <div key={activity.name} className={styles.activity}>
//                         {activity.icon}
//                         <span>{activity.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Events Section */}
//         <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>Upcoming Events</h2>
//           <div className={styles.grid}>
//             {upcomingEvents.map((event) => (
//               <div key={event.title} className={styles.eventCard}>
//                 <div className={styles.eventHeader}>
//                   <div>
//                     <h3 className={styles.eventTitle}>{event.title}</h3>
//                     <p className={styles.eventType}>{event.type}</p>
//                   </div>
//                   <div className={styles.eventMeta}>
//                     <p className={styles.eventDate}>{event.date}</p>
//                     <p className={styles.eventLocation}>{event.location}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;


// import React, { useState } from 'react';
// import { Calendar, Users, MapPin, Video, Book, Mic } from 'lucide-react';
// import styles from '../src/styles/scss/Community.module.scss';
// import Link from 'next/link';

// const CommunityPage = () => {
//   const [selectedCommunity, setSelectedCommunity] = useState(null);

//   const communities = [
//     {
//       name: "D4 Community",
//       role: "Organizer",
//       description: "A vibrant developer community focused on learning and growth",
//       members: "500+",
//       location: "Online & Local",
//       icon: <Users className="w-12 h-12 text-blue-600" />,
//       activities: [
//         { name: "Weekly Meetups", icon: <Calendar className="w-5 h-5" /> },
//         { name: "Code Reviews", icon: <Book className="w-5 h-5" /> },
//         { name: "Hackathons", icon: <Calendar className="w-5 h-5" /> },
//       ],
//       contributions: "Led 10+ successful meetups and code review sessions.",
//       joinLink: "https://d4-website-v1.vercel.app/linkpool"
//     },
//     {
//       name: "ML CHANDIGARH",
//       role: "Organizer",
//       description: "ML Chandigarh by Google is a community for developers passionate about learning and AI and exploring Google's machine learning technologies.🤖",
//       members: "300+",
//       location: "Chandigarh",
//       icon: <Users className="w-12 h-12 text-green-600" />,
//       activities: [
//         { name: "ML Workshops", icon: <Video className="w-5 h-5" /> },
//         { name: "Study Jams", icon: <Book className="w-5 h-5" /> },
//         { name: "Tech Talks", icon: <Mic className="w-5 h-5" /> },
//       ],
//       contributions: "Organized 5+ ML workshops and hackathons.",
//       joinLink: "https://www.commudle.com/communities/tfug-chandigarh"
//     }
//   ];

//   const upcomingEvents = [
//     {
//       title: "Introduction to TensorFlow",
//       date: "Next Saturday",
//       type: "Workshop",
//       location: "Online"
//     },
//     {
//       title: "Developer Meetup",
//       date: "Next Tuesday",
//       type: "Networking",
//       location: "Chandigarh"
//     }
//   ];

//   const recentEvents = [
//     {
//       title: "AI Hackathon",
//       date: "Last Month",
//       type: "Hackathon",
//       location: "Chandigarh"
//     },
//     {
//       title: "React Study Jam",
//       date: "Two Weeks Ago",
//       type: "Workshop",
//       location: "Online"
//     }
//   ];

//   const myContributions = [
//     "Organized Generative AI conclave with 100+ attendees.",
//     "Delivered insights on integrating GenAI with mobile apps.",
//     "Hosted a MongoDB meetup on boosting search relevance."
//   ];

//   const handleModalOpen = (community) => setSelectedCommunity(community);
//   const handleModalClose = () => setSelectedCommunity(null);

//   return (
//     <div className={styles.communityBody}>
//       <div className={styles.container}>
//         {/* Hero Section */}
//         <div className={styles.hero}>
//           <h1 className={styles.title}>Building Strong Tech Communities</h1>
//           <p className={styles.subtitle}>
//             Join us in our mission to create inclusive spaces for developers
//           </p>
//         </div>

//         {/* Communities Section */}
//         <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>Communities</h2>
//           <div className={styles.grid}>
//             {communities.map((community) => (
//               <div
//                 key={community.name}
//                 className={styles.card}
//                 onClick={() => handleModalOpen(community)}
//               >
//                 <div className={styles.cardHeader}>
//                   <div className={styles.icon}>{community.icon}</div>
//                   <div className={styles.headerContent}>
//                     <h2 className={styles.communityName}>{community.name}</h2>
//                     <p className={styles.role}>{community.role}</p>
//                   </div>
//                 </div>
//                 <p className={styles.description}>{community.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Modal Section */}
//         {selectedCommunity && (
//           <div className={styles.modalOverlay} onClick={handleModalClose}>
//             <div
//               className={styles.modalContent}
//               onClick={(e) => e.stopPropagation()}
//               style={{
//                 position: 'fixed',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 zIndex: 1000,
//                 backgroundColor: 'white',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             >
//               <button
//                 className={styles.closeButton}
//                 onClick={handleModalClose}
//                 style={{
//                   position: 'absolute',
//                   top: '10px',
//                   right: '10px',
//                   background: 'none',
//                   border: 'none',
//                   fontSize: '20px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 &times;
//               </button>
//               <h3 className={styles.modalTitle}>{selectedCommunity.name}</h3>
//               <p className={styles.modalDescription}>{selectedCommunity.description}</p>
//               <p className={styles.modalContributions}>{selectedCommunity.contributions}</p>
//               <div className={styles.activitiesList}>
//                 {selectedCommunity.activities.map((activity) => (
//                   <div key={activity.name} className={styles.activity}>
//                     {activity.icon}
//                     <span>{activity.name}</span>
//                   </div>
//                 ))}
//               <Link
//                 href={selectedCommunity.joinLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.joinButton}
//               >Join</Link>
//               </div>
//             </div>
//             <div
//               style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 zIndex: 999,
//               }}
//             ></div>
//           </div>
//         )}

//         {/* My Contributions Section */}
//         {/* <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>My Contributions</h2>
//           <ul className={styles.contributionsList}>
//             {myContributions.map((contribution, index) => (
//               <li key={index} className={styles.contributionItem}>
//                 {contribution}
//               </li>
//             ))}
//           </ul>
//         </div> */}

//         {/* Upcoming Events Section */}
//         {/* <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>Upcoming Events</h2>
//           <div className={styles.grid}>
//             {upcomingEvents.map((event) => (
//               <div key={event.title} className={styles.eventCard}>
//                 <div className={styles.eventHeader}>
//                   <h3 className={styles.eventTitle}>{event.title}</h3>
//                   <p className={styles.eventType}>{event.type}</p>
//                   <p className={styles.eventDate}>{event.date}</p>
//                   <p className={styles.eventLocation}>{event.location}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Recent Events Section */}
//         {/* <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>Recent Events</h2>
//           <div className={styles.grid}>
//             {recentEvents.map((event) => (
//               <div key={event.title} className={styles.eventCard}>
//                 <div className={styles.eventHeader}>
//                   <h3 className={styles.eventTitle}>{event.title}</h3>
//                   <p className={styles.eventType}>{event.type}</p>
//                   <p className={styles.eventDate}>{event.date}</p>
//                   <p className={styles.eventLocation}>{event.location}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;










import React, { useState } from 'react';
import { Calendar, Users, MapPin, Video, Book, Mic } from 'lucide-react';
import styles from '../src/styles/scss/Community.module.scss';
import Link from 'next/link';

// Define interfaces
interface Activity {
  name: string;
  icon: JSX.Element;
}

interface Community {
  name: string;
  role: string;
  description: string;
  members: string;
  location: string;
  icon: JSX.Element;
  activities: Activity[];
  contributions: string;
  joinLink: string;
}

interface Event {
  title: string;
  date: string;
  type: string;
  location: string;
}

const CommunityPage = () => {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);

  const communities: Community[] = [
    {
      name: "D4 Community",
      role: "Organizer",
      description: "A vibrant developer community focused on learning and growth",
      members: "500+",
      location: "Online & Local",
      icon: <Users className="w-12 h-12 text-blue-600" />,
      activities: [
        { name: "Weekly Meetups", icon: <Calendar className="w-5 h-5" /> },
        { name: "Code Reviews", icon: <Book className="w-5 h-5" /> },
        { name: "Hackathons", icon: <Calendar className="w-5 h-5" /> },
      ],
      contributions: "Led 10+ successful meetups and code review sessions.",
      joinLink: "https://d4-website-v1.vercel.app/linkpool"
    },
    {
      name: "ML CHANDIGARH",
      role: "Organizer",
      description: "ML Chandigarh by Google is a community for developers passionate about learning and AI and exploring Google's machine learning technologies.🤖",
      members: "300+",
      location: "Chandigarh",
      icon: <Users className="w-12 h-12 text-green-600" />,
      activities: [
        { name: "ML Workshops", icon: <Video className="w-5 h-5" /> },
        { name: "Study Jams", icon: <Book className="w-5 h-5" /> },
        { name: "Tech Talks", icon: <Mic className="w-5 h-5" /> },
      ],
      contributions: "Organized 5+ ML workshops and hackathons.",
      joinLink: "https://www.commudle.com/communities/tfug-chandigarh"
    }
  ];

  const upcomingEvents: Event[] = [
    {
      title: "Introduction to TensorFlow",
      date: "Next Saturday",
      type: "Workshop",
      location: "Online"
    },
    {
      title: "Developer Meetup",
      date: "Next Tuesday",
      type: "Networking",
      location: "Chandigarh"
    }
  ];

  const recentEvents: Event[] = [
    {
      title: "AI Hackathon",
      date: "Last Month",
      type: "Hackathon",
      location: "Chandigarh"
    },
    {
      title: "React Study Jam",
      date: "Two Weeks Ago",
      type: "Workshop",
      location: "Online"
    }
  ];

  const myContributions = [
    "Organized Generative AI conclave with 100+ attendees.",
    "Delivered insights on integrating GenAI with mobile apps.",
    "Hosted a MongoDB meetup on boosting search relevance."
  ];

  const handleModalOpen = (community: Community) => setSelectedCommunity(community);
  const handleModalClose = () => setSelectedCommunity(null);

  return (
    <div className={styles.communityBody}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.title}>Building Strong Tech Communities</h1>
          <p className={styles.subtitle}>
            Join us in our mission to create inclusive spaces for developers
          </p>
        </div>

        {/* Communities Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Communities</h2>
          <div className={styles.grid}>
            {communities.map((community) => (
              <div
                key={community.name}
                className={styles.card}
                onClick={() => handleModalOpen(community)}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.icon}>{community.icon}</div>
                  <div className={styles.headerContent}>
                    <h2 className={styles.communityName}>{community.name}</h2>
                    <p className={styles.role}>{community.role}</p>
                  </div>
                </div>
                <p className={styles.description}>{community.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Section */}
        {selectedCommunity && (
          <div className={styles.modalOverlay} onClick={handleModalClose}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <button
                className={styles.closeButton}
                onClick={handleModalClose}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                }}
              >
                &times;
              </button>
              <h3 className={styles.modalTitle}>{selectedCommunity.name}</h3>
              <p className={styles.modalDescription}>{selectedCommunity.description}</p>
              <p className={styles.modalContributions}>{selectedCommunity.contributions}</p>
              <div className={styles.activitiesList}>
                {selectedCommunity.activities.map((activity) => (
                  <div key={activity.name} className={styles.activity}>
                    {activity.icon}
                    <span>{activity.name}</span>
                  </div>
                ))}
                <Link
                  href={selectedCommunity.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.joinButton}
                >Join</Link>
              </div>
            </div>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
              }}
            ></div>
          </div>
        )}

        {/* My Contributions Section */}
        {/* <div className={styles.section}>
          <h2 className={styles.sectionTitle}>My Contributions</h2>
          <ul className={styles.contributionsList}>
            {myContributions.map((contribution, index) => (
              <li key={index} className={styles.contributionItem}>
                {contribution}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Upcoming Events Section */}
        {/* <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <div className={styles.grid}>
            {upcomingEvents.map((event) => (
              <div key={event.title} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventType}>{event.type}</p>
                  <p className={styles.eventDate}>{event.date}</p>
                  <p className={styles.eventLocation}>{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Recent Events Section */}
        {/* <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Recent Events</h2>
          <div className={styles.grid}>
            {recentEvents.map((event) => (
              <div key={event.title} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventType}>{event.type}</p>
                  <p className={styles.eventDate}>{event.date}</p>
                  <p className={styles.eventLocation}>{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CommunityPage;
