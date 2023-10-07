import classNames from "classnames";
import { ProjectTypes } from "./types";

export const cx = classNames;

export const navData = [ "About", "Experience", "Works", "Contact" ]

export const projects : ProjectTypes[] = [
    {
        title : "Daily News Actual",
        description : "A News Website as the final assignment in the Teaching Factory Program (TEFA) at Telkom Indonesia. Developed using Next.js 13 and Tailwind CSS.",
        tech : [ "Next js", "Tailwind CSS"],
        code : 'https://github.com/Dannaire/NewsWeb',
        live : 'https://daily-news-actual.vercel.app/',
        thumnail : "portfolio-v2.png",
        featured : true
    },

    {
        title : "GuideGame (GIGA)",
        description : "GuideGame or GIGA is the design of an online learning website specifically for game development. In addition, this website features asset buying and selling, which will undoubtedly facilitate game developers.",
        tech : [ "Figma","Adobe Illustrator","Adobe Photoshop"],
        live : 'https://www.figma.com/file/3xOTGGOMginFLCLnhkpyEi/GuideGame-(GIGA)?type=design&node-id=0%3A1&mode=design&t=05J35snsvVPHEgi8-1',
        thumnail : "dg-team.png",
        featured : true
    },

    {
        title : "Kelompok 5 Website",
        description : "Group 5 Website is the profile website of the members of Group 5 from Teaching Factory (TEFA) specializing in Front-end. Here, you can find the Group 5 Profile Video, the personal data, and social media of each member, as well as a calculator feature.",
        tech : [ "React js", "CSS" ],
        live : 'https://kelompok5-react.vercel.app/',
        thumnail : "airebix.png",
    },

    {
        title : "NgantinYuk! Logo",
        description : "NgantinYuk! Logo is the logo used in the NgantinYuk! series at SMK Telkom Malang. This series is about reviewing the food available at the SMK Telkom Malang cafeteria.",
        tech : [ "Adobe Illustrator"],
        live : 'https://amazon-nw.vercel.app/',
        thumnail : "amazon.png"
    },

    {
        title : "NextGenCity",
        description : "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
        tech : [ "HTML", "CSS", "JavaScript", "Figma" ],
        code : "",
        live : 'https://nextgencity.vercel.app/',
        thumnail : "powermall.png"
    },

    {
        title : "WiGo Lern!",
        description : "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
        tech : [ "Figma", "Adobe Photoshop"],
        code : "",
        live : 'https://nextgencity.vercel.app/',
        thumnail : "powermall.png"
    },

    {
        title : "Carrier Bag",
        description : "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
        tech : [ "Next js", "Tailwind CSS" ],
        code : "https://github.com/rasyidridho05/CarrierBag",
        live : 'https://carrier-bag.vercel.app/',
        thumnail : "powermall.png"
    },

    {
        title : "Banner Design",
        description : "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
        tech : ["Figma","Adobe Illustrator","Adobe Photoshop" ],
        thumnail : "powermall.png"
    },
]