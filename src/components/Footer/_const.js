
import iconFb from "assets/fb.svg"
import iconFbPink from "assets/fb-pink.svg"
import iconYt from "assets/yt.svg"
import iconYtPink from "assets/yt-pink.svg"
import iconMail from "assets/mail.svg"
import iconMailPink from "assets/mail-pink.svg"

const SOCMED = [
    { 
        icon: iconFb,
        icon_2: iconFbPink,
        href: 'https://www.facebook.com/', isMail: false 
    },
    { 
        icon: iconYt,
        icon_2: iconYtPink,
        href: 'https://www.youtube.com/', isMail: false 
    },
    { 
        icon: iconMail,
        icon_2: iconMailPink,
        href: 'hello.engarcia@gmail.com', isMail: true
    },
];

export {
    SOCMED,
}