
import classAr from "assets/class-ar.png"
import classBr from "assets/class-br.png"
import classFs from "assets/class-fs.png"
import classGun from "assets/class-gunner.png"
import classSw from "assets/class-sw.png"
import classX3m from "assets/class-x3m.png"
import schoolPhx from "assets/icon-phx.png"
import schoolSg from "assets/icon-sg.png"
import schoolMp from "assets/icon-mp.png"

const SELECTION_CATEGORY = [
    { label: 'PVP Kills', value: 1 },
    { label: 'Contribution', value: 2 },
    { label: 'Level', value: 3 },
    { label: 'Gold', value: 4 },
];

const SELECTION_SCHOOL = [
    { label: 'All', value: 1 },
    { label: 'Sacred Gate', value: 2 },
    { label: 'Mystic Peak', value: 3 },
    { label: 'Phoenix', value: 4 },
];

const SELECTION_CLASS = [
    { label: 'All', value: 1 },
    { label: 'Archer', value: 2 },
    { label: 'Brawler', value: 3 },
    { label: 'Extreme', value: 4 },
    { label: 'Gunner', value: 5 },
    { label: 'Shaman', value: 6 },
    { label: 'Swordsman', value: 7 },
];


const RANKINGS = [
    { 
        name: 'Daedalus', 
        school: schoolSg, 
        class: classBr, 
        kills: '7,123', 
        level: 230 
    },
    { 
        name: 'Valerie', 
        school: schoolMp, 
        class: classFs, 
        kills: '6,882', 
        level: 230 
    },
    { 
        name: 'OneShot`OneKill', 
        school: schoolMp, 
        class: classGun, 
        kills: '6,514', 
        level: 230 
    },
    { 
        name: '-l-`Cheese`-l-', 
        school: schoolSg, 
        class: classSw, 
        kills: '5,114', 
        level: 230 
    },
    { 
        name: 'Luteschia', 
        school: schoolPhx, 
        class: classBr, 
        kills: '5,100', 
        level: 230 
    },
    { 
        name: 'Bruno', 
        school: schoolMp, 
        class: classBr, 
        kills: '4,800', 
        level: 230 
    },
    { 
        name: 'Revelation`', 
        school: schoolPhx, 
        class: classX3m, 
        kills: '4,323', 
        level: 230 
    },
    { 
        name: '-TAGAPASLANG-', 
        school: schoolSg, 
        class: classSw, 
        kills: '4,152', 
        level: 230 
    },
    { 
        name: 'panda03', 
        school: schoolMp, 
        class: classAr, 
        kills: '3,123', 
        level: 230 
    },
    { 
        name: 'chiChar0n', 
        school: schoolPhx, 
        class: classX3m, 
        kills: '3,000', 
        level: 230 
    },
];

export {
    SELECTION_CATEGORY,
    SELECTION_SCHOOL,
    SELECTION_CLASS,
    RANKINGS,
}