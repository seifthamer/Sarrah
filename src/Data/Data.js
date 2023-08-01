// Sidebar imports
import {UilEstate,UilClipboardAlt,UilUsersAlt,UilPackage, UilSignOutAlt,} from "@iconscout/react-unicons";
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";
// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link : "/"
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    link : "/orders"
  },
  {
    icon: UilUsersAlt,
    heading: "Messages",
    link : "/messages"
  },
  {
    
    icon: UilPackage,
    heading: 'Service',
    link : "/services"
   
   
  },
  {
    icon :UilSignOutAlt,
    heading :'SignOut' ,
    link : "/logout"
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 80,
    value: "1K",
    png: UilUsdSquare,
    series: [
      {
        name: "Total Revenue",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  
  {
    title: "Total Order",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 50,
    value: "300",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Total Order",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: " New Customers",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 25,
    value: "5",
    png: UilClipboardAlt,
    series: [
      {
        name: "New Customers",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


