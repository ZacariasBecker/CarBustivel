

let DATA = [
    {
        isExpanded: false,
        id: '3',
        dateTime: new Date(),
        pricePerLiter: '3,30',
        liters: '10,00',
        totalCost: '330,00',
        km: '33'
    },
    {
        isExpanded: false,
        id: '2',
        dateTime: new Date(),
        pricePerLiter: '2,20',
        liters: '10,00',
        totalCost: '220,00',
        km: '22'
    },
    {
        isExpanded: false,
        id: '1',
        dateTime: new Date(),
        pricePerLiter: '1,10',
        liters: '10,00',
        totalCost: '110,00',
        km: '11'
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