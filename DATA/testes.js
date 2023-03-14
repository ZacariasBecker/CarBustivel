let ori = [
    [
        "@storage_Key1",

        "{\"isExpanded\":false,\"id\":\"777\",\"dateTime\":\"2023-03-14T13:40:25.118Z\",\"pricePerLiter\":\"1\",\"liters\":null,\"totalCost\":\"2\",\"km\":\"3\"}"
    ],
    [
        "@storage_Key2",

        "{\"isExpanded\":false,\"id\":\"777\",\"dateTime\":\"2023-03-14T13:40:25.118Z\",\"pricePerLiter\":\"1\",\"liters\":null,\"totalCost\":\"2\",\"km\":\"3\"}"
    ]
];

let hehe = [];

ori.forEach(e =>
    hehe.push(e[1])
);

console.log(hehe);