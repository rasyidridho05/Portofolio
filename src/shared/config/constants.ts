import classNames from "classnames";
import { ProjectTypes } from "./types";

export const cx = classNames;

export const navData = [ "About", "Experience", "Works", "Contact" ]

export const projects : ProjectTypes[] = [
    {
        title : "Daily News Actual",
        description : "A News Website as the final assignment in the Teaching Factory Program (TEFA) at Telkom Indonesia. Developed using Next.js 13 and Tailwind CSS.",
        tech : [ "JavaScript", "Next js", "Tailwind CSS"],
        code : 'https://github.com/Dannaire/NewsWeb',
        live : 'https://daily-news-actual.vercel.app/',
        thumnail : "DNA.png",
        featured : true
    },

    {
        title : "GuideGame (GIGA)",
        description : "GuideGame or GIGA is the design of an online learning website specifically for game development. In addition, this website features asset buying and selling, which will undoubtedly facilitate game developers.",
        tech : [ "Figma","Adobe Illustrator","Adobe Photoshop"],
        live : 'https://www.figma.com/file/3xOTGGOMginFLCLnhkpyEi/GuideGame-(GIGA)?type=design&node-id=0%3A1&mode=design&t=05J35snsvVPHEgi8-1',
        thumnail : "GIGA.png",
        featured : true
    },

    {
        title : "Kelompok 5 Website",
        description : "Group 5 Website is the profile website of the members of Group 5 from Teaching Factory (TEFA) specializing in Front-end. Here, you can find the Group 5 Profile Video, the personal data, and social media of each member, as well as a calculator feature.",
        tech : [ "JavaScript", "React js", "CSS" ],
        code : 'https://github.com/Dannaire/Tubes-Kelompok5',
        live : 'https://kelompok5-react.vercel.app/',
        thumnail : "Kelompok 5.png",
    },
    {
        title : "NextGenCity",
        description : "NextGenCity is a static website used to provide information about Smart Cities, ranging from what the Smart City concept is, what technologies are used in Smart Cities, examples of Smart Cities, and a blog about the development of Smart Cities.",
        tech : [ "HTML", "CSS", "JavaScript", "Figma" ],
        code : "https://github.com/Mindblow-id/NextGenCity",
        live : 'https://nextgencity.vercel.app/',
        thumnail : "NextGenCity.png"
    },
    {
        title : "Miraii Studio",
        description : "Miraii Studio is a website company that was created using only Frontend. On this website, I used the Next.js framework with TypeScript and Tailwind CSS. Before carrying out the development stage, I first designed this website using Figma.",
        tech : [ "TypeScript", "Tailwind CSS", "Next js", "Figma" ],
        code : "https://github.com/rasyidridho05/Miraii-Studio",
        live : 'https://miraii-studio.vercel.app/',
        thumnail : "MiraiiStudio.png"
    },
    {
        title : "{Try/Catch}",
        description : "Try/Catch is a programming learning application. In this app, users can learn programming from basics to advanced levels. There are several premium features in the app, such as AI Assist, Coding Playground, and Certificates. ",
        tech : [ "Figma", "Adobe, Photoshop", "Adobe Illustration"],
        live : 'https://www.figma.com/proto/hKYJJADrhwHJUjadHciNU2/SI-FEST2023?page-id=0%3A1&type=design&node-id=153-215&viewport=67%2C339%2C0.09&t=EfMSzLCP5T2WvcSB-1&scaling=scale-down&starting-point-node-id=153%3A215&mode=design',
        thumnail : "TryCatch.png"
    },
    {
        title : "Pelihara Iwak",
        description : "Pelihara Iwak is a mobile-based game with a Loving and Caring theme. The game features four main sections: Fish Care, Sea Management, Shop, and Mini Games. In Fish Care, you can feed and treat your fish.",
        tech : [ "Figma", "Adobe Photoshop", "Adobe Illustration"],
        live : 'https://www.figma.com/proto/QJf1QfbP8tz1xRhUEAD19H/Pelihara-Iwak?page-id=0%3A1&type=design&node-id=1-2&viewport=183%2C232%2C0.1&t=zVk7hqpBJoEeyYcA-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design',
        thumnail : "PeliharaIwak.png"
    },
    {
        title : "Staycation",
        description : "Staycation, a travel ticket booking application that can be ordered anywhere and anytime, with various features that will help and facilitate tourists. Booking tickets is no longer a hassle, only with Staycation. ",
        tech : [ "Figma", "Adobe, Photoshop", "Adobe Illustration"],
        live : 'https://www.figma.com/proto/bbuSD1vasyY71S2UOfnYFW/Staycation?page-id=0%3A1&type=design&node-id=70-2144&viewport=464%2C321%2C0.03&t=VdQm5eYd1u2LS6Ul-1&scaling=scale-down&starting-point-node-id=1%3A1290&mode=design',
        thumnail : "Staycation.png"
    },

]