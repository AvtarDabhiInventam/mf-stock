export const ALL_MF_ORDERS = [
  {
    id: 1,
    name: "SBI small Cap Fund Direct Growth",
    date: "17 Dec '23",
    amount: "₹2200",
    instalment: "SIP Instalment",
    status: "Completed",
  },
  {
    id: 2,
    name: "Axis midcap Direct plan growth",
    date: "15 Dec '23",
    amount: "₹1000",
    instalment: "SIP Instalment",
    status: "In progress",
  },
  {
    id: 3,
    name: "Aditya Birla Sun Life Flexi Cap Fund",
    date: "13 Dec '23",
    amount: "1700",
    instalment: "SIP Instalment",
    status: "Completed",
  },
  {
    id: 4,
    name: "Baroda liquid direct fund growth",
    date: "10 Dec '23",
    amount: "₹1500",
    instalment: "SIP Instalment",
    status: "Completed",
  },
  {
    id: 5,
    name: "Icici prudential technology Direct plan growth",
    date: "06 Dec '23",
    amount: "₹2300",
    instalment: "SIP Instalment",
    status: "Completed",
  },
  {
    id: 6,
    name: "Parag Parikh Flexi Cap Fund Direct Growth",
    date: "03 Dec '23",
    amount: "₹1100",
    instalment: "SIP Instalment",
    status: "In progress",
  },
  {
    id: 7,
    name: "SBI medium Cap Fund",
    date: "10 Nov '23",
    amount: "₹2700",
    instalment: "SIP Instalment",
    status: "Rejected",
  },
  {
    id: 8,
    name: "HDFC flexi Cap Fund Direct Growth",
    date: "15 Nov '23",
    amount: "₹500",
    instalment: "SIP Instalment",
    status: "In progress",
  },
  {
    id: 9,
    name: "Balramour Chini Mills",
    date: "27 Nov '22",
    amount: "₹1500",
    instalment: "SIP Instalment",
    status: "In progress",
  },
  {
    id: 10,
    name: "Trident",
    date: "17 aug '23",
    amount: "₹2100",
    instalment: "SIP Instalment",
    status: "Rejected",
  },
];

export const ALL_STOCKS_ORDERS = [
  {
    id: 1,
    name: "Balramour Chini Mills",
    date: "28 January, 2023",
    time: "10:13 AM",
    total: "50",
    avgAmount: "₹381.20",
    status: "BUY",
    stocktype: "Delivery",
  },
  {
    id: 2,
    name: "Trident",
    date: "22 November, 2023",
    time: "9:31 AM",
    total: "11",
    avgAmount: "₹36.50",
    status: "BUY",
    stocktype: "Delivery",
  },
  {
    id: 3,
    name: "Tata Technologies",
    date: "13 December, 2023",
    time: "9:31 AM",
    total: "11",
    avgAmount: "₹36.50",
    status: "SELL",
    stocktype: "Delivery",
  },
  {
    id: 4,
    name: "Nvidia",
    date: "10 December, 2023",
    time: "10:13 AM",
    total: "50",
    avgAmount: "₹381.20",
    status: "BUY",
    stocktype: "Delivery",
  },
  {
    id: 5,
    name: "Meta Platforms",
    date: "13 December, 2023",
    time: "9:31 AM",
    total: "11",
    avgAmount: "₹36.50",
    status: "BUY",
    stocktype: "Delivery",
  },
  {
    id: 6,
    name: "Tesla",
    date: "09 December, 2023",
    time: "11:17 AM",
    total: "1",
    avgAmount: "₹36.50",
    status: "SELL",
    stocktype: "Interaday",
  },
  {
    id: 7,
    name: "Infosys",
    date: "05 December, 2023",
    time: "11:17 AM",
    total: "1",
    avgAmount: "₹36.50",
    status: "SELL",
    stocktype: "Delivery",
  },
  {
    id: 8,
    name: "Kotak Mahindra",
    date: "04 December, 2023",
    time: "9:50 AM",
    total: "3",
    avgAmount: "₹36.50",
    status: "BUY",
    stocktype: "Delivery",
  },
];

export const PENDING_ORDERS_LIST = [
  {
    id: 1,
    name: "Balramour Chini Mills",
    orderStatus: "BUY",
    status: "PENDING",
    market: "NSE REG LIMIT",
    quantity: 2,
    orderPrice: "2126",
    ltp: "2126.20",
    time: "1 min ago",
    date: "28 January, 2023",
    colorStatus: "yellow",
    orderColorStatus: "blue",
  },
  {
    id: 2,
    name: "Trident",
    orderStatus: "SELL",
    status: "PENDING",
    market: "NSE REG LIMIT",
    quantity: 1,
    orderPrice: "354",
    ltp: "325.20",
    time: "2 min ago",
    date: "28 January, 2023",
    colorStatus: "yellow",
    orderColorStatus: "red",
  },
  {
    id: 3,
    name: "Tata Technologies",
    orderStatus: "BUY",
    status: "PENDING",
    market: "NSE REG LIMIT",
    quantity: 1,
    orderPrice: "468",
    ltp: "400.10",
    time: "5 min ago",
    date: "28 January, 2023",
    colorStatus: "yellow",
    orderColorStatus: "blue",
  },
  {
    id: 4,
    name: "Nvidia",
    orderStatus: "BUY",
    status: "PENDING",
    market: "NSE REG LIMIT",
    quantity: 2,
    orderPrice: "660",
    ltp: "555.20",
    time: "1 min ago",
    date: "28 January, 2023",
    colorStatus: "yellow",
    orderColorStatus: "blue",
  },
];

export const EXECUTED_ORDERS_LIST = [
  {
    id: 1,
    name: "Meta Platforms",
    orderStatus: "BUY",
    status: "COMPLETED",
    market: "NSE REG LIMIT",
    quantity: 2,
    orderPrice: "2126",
    ltp: "2126.40",
    time: "1 min ago",
    date: "28 January, 2023",
    colorStatus: "green",
    orderColorStatus: "blue",
  },
  {
    id: 2,
    name: "Tesla",
    orderStatus: "SELL",
    status: "COMPLETED",
    market: "NSE REG LIMIT",
    quantity: 1,
    orderPrice: "229",
    ltp: "234.20",
    time: "4 min ago",
    date: "28 January, 2023",
    colorStatus: "green",
    orderColorStatus: "red",
  },
  {
    id: 3,
    name: "Infosys",
    orderStatus: "SELL",
    status: "REJECTED",
    market: "NSE REG LIMIT",
    quantity: 2,
    orderPrice: "398",
    ltp: "388.24",
    time: "11 min ago",
    date: "28 January, 2023",
    colorStatus: "red",
    orderColorStatus: "red",
  },
  {
    id: 4,
    name: "Kotak Mahindra",
    orderStatus: "BUY",
    status: "COMPLETED",
    market: "NSE REG LIMIT",
    quantity: 2,
    orderPrice: "566",
    ltp: "523.21",
    time: "29 min ago",
    date: "28 January, 2023",
    colorStatus: "green",
    orderColorStatus: "blue",
  },
  {
    id: 5,
    name: "Adani Ports",
    orderStatus: "BUY",
    status: "REJECTED",
    market: "NSE REG LIMIT",
    quantity: 1,
    orderPrice: "800",
    ltp: "788.10",
    time: "47 min ago",
    date: "28 January, 2023",
    colorStatus: "red",
    orderColorStatus: "blue",
  },
];
