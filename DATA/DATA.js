let d1 = new Date();
d1.setDate(22);
d1.setMonth(2);
d1.setFullYear(2023);

let d2 = new Date();
d2.setDate(10);
d2.setMonth(3);
d2.setFullYear(2023);

let d3 = new Date();
d3.setDate(14);
d3.setMonth(3);
d3.setFullYear(2023);

let DATA = [
    {
        isExpanded: false,
        id: '3',
        dateTime: d3, // 14 03 2023
        pricePerLiter: '5,36',
        totalCost: '100,00',
        km: '239398'
    },
    {
        isExpanded: false,
        id: '2',
        dateTime: d2, // 10 03 2023
        pricePerLiter: '5,56',
        totalCost: '30,00',
        km: '239352'
    },
    {
        isExpanded: false,
        id: '1',
        dateTime: d1, // 22 02 2023
        pricePerLiter: '4,97',
        totalCost: '145,00',
        km: '239122'
    },
];

const listCreate = (props) => {

    // alert(props);

    const hehe =
    {
        isExpanded: false,
        id: '777',
        dateTime: new Date(),
        pricePerLiter: '7,70',
        liters: '10,00',
        totalCost: '770,00',
        km: '77'
    };

    DATA = [hehe, ...DATA];

    alert(DATA.length);

};

// const listRead = () => {

// };
// const listUpdate = () => {

// };
// const listDelete = () => {

// };



export { DATA, listCreate };