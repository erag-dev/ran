
import imgNews01 from "assets/news/n01.jpg"
import imgNews02 from "assets/news/n02.jpg"
import imgNews03 from "assets/news/n03.jpg"

const SELECTION_CATEGORY = [
    { label: 'All', value: 1 },
    { label: 'Event', value: 2 },
    { label: 'Update', value: 3 },
    { label: 'Fixes', value: 4 },
];

const SORT = [
    { label: 'Latest', value: 1 },
    { label: 'Oldest', value: 2 },
    { label: 'Most Viewed', value: 3 },
];

const NEWS_LIST = [
    {
        date: 'Oct. 05, 2024',
        title: 'PK @ SG Hole Showdown IV',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: imgNews01,
    },
    {
        date: 'Sept. 20, 2024',
        title: '3 vs. 3 Tournament - 2024',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: imgNews02,
    },
    {
        date: 'Jun. 10, 2024',
        title: 'Added ‘Kadera’ NPC to celebrate 3rd anniversary',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: imgNews03,
    },
    {
        date: 'Oct. 05, 2024',
        title: 'PK @ SG Hole Showdown IV',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: imgNews01,
    },
    {
        date: 'Sept. 20, 2024',
        title: '3 vs. 3 Tournament - 2024',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: imgNews02,
    },
    {
        date: 'Jun. 10, 2024',
        title: 'Added ‘Kadera’ NPC to celebrate 3rd anniversary',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: imgNews03,
    },
];

export {
    SELECTION_CATEGORY,
    SORT,
    NEWS_LIST,
};