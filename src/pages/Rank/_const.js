
import iconSearch from "assets/search-outline.svg"
import iconBulb from "assets/bulb-outline.svg"
import iconHome from "assets/home-outline.svg"
import imgHelp01 from "assets/help01.png"
import imgHelp02 from "assets/help02.png"
import imgHelp03 from "assets/help03.png"

const INIT_STEPS = [
    {
        icon: iconSearch,
        title: 'Find Your Pet',
        desc: 'Select a pet from our<br/>adoption list.',
    },
    {
        icon: iconBulb,
        title: 'Know Your Pet',
        desc: 'Fill out our form and schedule a visit with the chosen one.',
    },
    {
        icon: iconHome,
        title: 'Take Your Pet Home',
        desc: 'Once you pass our screening process, take your new best friend on the same day.',
    },
];

const HELP_DONATE = [
    {
        img: imgHelp01,
        title: 'Become a Volunteer',
        desc: 'Be part of our community, give the <br/>animals some of your time.',
        btn_lbl: 'Join now'
    },
    {
        img: imgHelp02,
        title: 'Sponsor Meal',
        desc: 'You can help us feed all of our <br/>lovely animals.',
        btn_lbl: 'Donate'
    },
    {
        img: imgHelp03,
        title: 'Adopt',
        desc: 'Because every fur-babies deserves <br/>a fur-ever loving home.',
        btn_lbl: 'Donate'
    },
];

export {
    INIT_STEPS,
    HELP_DONATE,
}