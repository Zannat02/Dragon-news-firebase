// import React from "react";
// import Marquee from "react-fast-marquee";

// const latestHeadlines = [
//   "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
//   "Elon Musk's Starlink Receives Operational License in Bangladesh, Trials Begin",
//   "Bangladesh Launches National AI Strategy Focusing on Ethical Development",
  
// ];

// const LatestNews = () => {
//   return (
//     <div className="flex items-center gap-3 bg-base-200 p-2 md:p-3">
//       <p className="text-base-100 bg-secondary px-3 py-2 text-xs md:text-base whitespace-nowrap shrink-0">
//         Latest
//       </p>

//       <Marquee pauseOnHover={true} speed={60}>
//         {latestHeadlines.map((headline, index) => (
//           <p key={index} className="font-bold mx-8 text-xs md:text-base whitespace-nowrap">
//             {headline}
//           </p>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default LatestNews;

import React from "react";
import * as MarqueeImport from "react-fast-marquee";

// বিভিন্ন module interop কেস হ্যান্ডেল করা
const Marquee =
  MarqueeImport.default?.default ||
  MarqueeImport.default ||
  MarqueeImport.Marquee ||
  MarqueeImport;

const latestHeadlines = [
  "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
  "Elon Musk's Starlink Receives Operational License in Bangladesh, Trials Begin",
  "Bangladesh Launches National AI Strategy Focusing on Ethical Development",
  "Bangladesh National Football Team Prepares for Upcoming International Friendly",
  "Popular Bangladeshi Drama Series Finale Airs Tonight, Fans Eager for Conclusion",
];

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-2 md:p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 text-xs md:text-base whitespace-nowrap shrink-0">
        Latest
      </p>

      <Marquee pauseOnHover={true} speed={60}>
        {latestHeadlines.map((headline, index) => (
          <p key={index} className="font-bold mx-8 text-xs md:text-base whitespace-nowrap">
            {headline}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;