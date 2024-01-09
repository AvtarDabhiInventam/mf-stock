export const MAIN_CARD = [
  {
    _id: 1,
    name: "NIFTY 50",
    slug: "nifty50",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.5",
    colorstatus: "text-danger",
  },
  {
    _id: 2,
    name: "SENSEX",
    slug: "sensex",
    price: "58743.66",
    result: "+771.05",
    ltp: "1.54",
    colorstatus: "green-color",
  },
  {
    _id: 3,
    name: "Bank NIFTY",
    slug: "banknifty",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.535",
    colorstatus: "text-danger",
  },
  {
    _id: 4,
    name: "FINNIFTY",
    slug: "finnifty",
    slug: "finnifty",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.5",
    colorstatus: "text-danger",
  },
  {
    _id: 5,
    name: "NIFTY 100",
    slug: "nifty100",
    price: "58743.66",
    result: "+771.05",
    ltp: "1.54",
    colorstatus: "green-color",
  },
  {
    _id: 6,
    name: "Nifty Midcap Select",
    slug: "niftyMidcapSelect",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.535",
    colorstatus: "text-danger",
  },
];

export const ALL_DATA = [
  {
    _id: 1,
    name: "NIFTY 50",
    slug: "nifty50",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.5",
    colorstatus: "green-color",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30%",
      },
      {
        date: "5 Aug 2022",
        value: "47%",
      },
      {
        date: "5 Aug 2022",
        value: "44%",
      },
    ],
    company: [
      {
        _id: 1,
        section: "watchlist",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 2,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },

      {
        _id: 3,
        section: "stocksInNews",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 4,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 5,
        section: "watchlist",
        logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 6,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
      },
      {
        _id: 7,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 8,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 9,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 10,
        section: "watchlist",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 11,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 12,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 13,
        section: "stocksInNews",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 14,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 15,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 16,
        section: "stocksInNews",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 17,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 18,
        section: "stocksInNews",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 19,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 20,
        section: "stocksInNews",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 30, 15, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
    ],
  },
  {
    _id: 2,
    name: "SENSEX",
    slug: "sensex",
    price: "58743.66",
    result: "+771.05",
    ltp: "1.54",
    colorstatus: "green-color",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30%",
      },
      {
        date: "5 Aug 2022",
        value: "47%",
      },
      {
        date: "5 Aug 2022",
        value: "44%",
      },
    ],
    company: [
      {
        _id: 1,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 2,
        section: "stocksInNews",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 3,
        section: "watchlist",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },

      {
        _id: 4,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 5,
        section: "watchlist",
        logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 6,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
      },
      {
        _id: 7,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 8,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 9,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 10,
        section: "watchlist",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 11,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 12,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 13,
        section: "stocksInNews",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 14,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 15,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 16,
        section: "stocksInNews",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 17,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 18,
        section: "stocksInNews",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 19,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 20,
        section: "stocksInNews",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
    ],
  },
  {
    _id: 3,
    name: "Bank NIFTY",
    slug: "banknifty",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.535",
    colorstatus: "text-danger",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30%",
      },
      {
        date: "5 Aug 2022",
        value: "47%",
      },
      {
        date: "5 Aug 2022",
        value: "44%",
      },
    ],
    company: [
      {
        _id: 1,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
      },
      {
        _id: 1,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 2,
        section: "watchlist",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 3,
        section: "stocksInNews",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 4,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 5,
        section: "watchlist",
        logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 6,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
      },
      {
        _id: 6,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 7,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 8,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 9,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-dangerr",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 10,
        section: "watchlist",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 11,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 12,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 13,
        section: "stocksInNews",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 14,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 15,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 16,
        section: "stocksInNews",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 17,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 18,
        section: "stocksInNews",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 19,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 20,
        section: "stocksInNews",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
    ],
  },
  {
    _id: 4,
    name: "FINNIFTY",
    slug: "finnifty",
    slug: "finnifty",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.5",
    colorstatus: "text-danger",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30%",
      },
      {
        date: "5 Aug 2022",
        value: "47%",
      },
      {
        date: "5 Aug 2022",
        value: "44%",
      },
    ],
    company: [
      {
        _id: 1,
        section: "stocksInNews",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 2,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 3,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 4,
        section: "watchlist",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 5,
        section: "watchlist",
        logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 6,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
      },
      {
        _id: 7,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 8,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 9,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 10,
        section: "watchlist",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 11,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 12,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 13,
        section: "stocksInNews",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 14,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 15,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 16,
        section: "stocksInNews",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 17,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 18,
        section: "stocksInNews",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 19,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 20,
        section: "stocksInNews",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
    ],
  },
  {
    _id: 5,
    name: "NIFTY 100",
    slug: "nifty100",
    price: "58743.66",
    result: "+771.05",
    ltp: "1.54",
    colorstatus: "green-color",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30%",
      },
      {
        date: "5 Aug 2022",
        value: "47%",
      },
      {
        date: "5 Aug 2022",
        value: "44%",
      },
    ],
    company: [
      {
        _id: 1,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
      },
      {
        _id: 2,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },

      {
        _id: 3,
        section: "stocksInNews",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 4,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 5,
        section: "watchlist",
        logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 6,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 7,
        section: "watchlist",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 8,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 9,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 10,
        section: "watchlist",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 11,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 12,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 13,
        section: "stocksInNews",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 14,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 15,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 16,
        section: "stocksInNews",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 17,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 18,
        section: "stocksInNews",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 19,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 20,
        section: "stocksInNews",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
    ],
  },
  {
    _id: 6,
    name: "Nifty Midcap Select",
    slug: "niftyMidcapSelect",
    price: "17289.65",
    result: "-269.25",
    ltp: "1.535",
    colorstatus: "text-danger",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30%",
      },
      {
        date: "5 Aug 2022",
        value: "47%",
      },
      {
        date: "5 Aug 2022",
        value: "44%",
      },
    ],
    company: [
      {
        _id: 1,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 2,
        section: "watchlist",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 3,
        section: "stocksInNews",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 4,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 5,
        section: "watchlist",
        logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 6,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
      },
      {
        _id: 7,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 8,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 9,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 10,
        section: "watchlist",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 11,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 12,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 13,
        section: "stocksInNews",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 14,
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 15,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "100.09",
        result: "-30.00",
        ltp: "0.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 16,
        section: "stocksInNews",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 17,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 18,
        section: "stocksInNews",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 19,
        section: "watchlist",
        logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
        name: "Asianpaints",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
      {
        _id: 20,
        section: "stocksInNews",
        logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
        name: "HDFC bank",
        market: "NSE",
        price: "120.30",
        result: "+30.00",
        ltp: "0.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              name: "Desktops",
              data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$30.65",
          low: "$30.65",
          marketCap: "$30.22",
          avgVol: "$30.22",
          shareVol: "$30.22",
        },
        expertRating: {
          buy: "70%",
          sell: "20%",
          hold: "30%",
          totalRate: "70%",
        },
        financials: {
          revenue: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          profit: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
          netWorth: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          },
        },
      },
    ],
  },
];

export const ALL_STOCK_COMPANY = [
  {
    _id: 1,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 2,
    section: "watchlist",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 3,
    section: "stocksInNews",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 4,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 5,
    section: "watchlist",
    logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
    name: "Meta",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 6,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 7,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 8,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 9,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
    name: "Asianpaints",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 10,
    section: "watchlist",
    logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
    name: "HDFC bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 11,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
    name: "Nike",
    market: "NSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 12,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 13,
    section: "stocksInNews",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 14,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 15,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 16,
    section: "stocksInNews",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 17,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 18,
    section: "stocksInNews",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 19,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
    name: "Asianpaints",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 20,
    section: "stocksInNews",
    logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
    name: "HDFC bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
];

export const ALL_STOCK_COMPANY_DATA = [
  {
    _id: 1,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",

    market: "BSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 2,
    section: "watchlist",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 3,
    section: "stocksInNews",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 4,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 5,
    section: "watchlist",
    logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
    name: "Meta",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 6,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 7,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 8,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 9,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
    name: "Asianpaints",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 10,
    section: "watchlist",
    logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
    name: "HDFC bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 11,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
    name: "Nike",
    market: "NSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 12,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 13,
    section: "stocksInNews",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 14,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 15,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 16,
    section: "stocksInNews",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 17,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 18,
    section: "stocksInNews",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 19,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
    name: "Asianpaints",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
  {
    _id: 20,
    section: "stocksInNews",
    logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
    name: "HDFC bank",
    market: "NSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
];

export const STOCK_DETAILS = [
  {
    _id: 1,
    section: "stocksInNews",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$30.65",
      low: "$30.65",
      marketCap: "$30.22",
      avgVol: "$30.22",
      shareVol: "$30.22",
    },
    expertRating: {
      buy: "70%",
      sell: "20%",
      hold: "30%",
      totalRate: "70%",
    },
    financials: {
      revenue: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      profit: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
      netWorth: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      },
    },
  },
];

export const TOP_GAINERS_LIST = [
  {
    _id: 1,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 2,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 3,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 4,
    section: "topGainers",
    equityFunds: "Medium",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 5,
    section: "topGainers",
    equityFunds: "Medium",
    logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
    name: "Meta",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 6,
    section: "topGainers",
    equityFunds: "Medium",
    equityFunds: "Large",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 7,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 8,
    section: "topGainers",
    equityFunds: "Small",
    equityFunds: "Small",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 9,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
    name: "Asianpaints",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 10,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
    name: "HDFC bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
];

export const TOP_LOOSERS_LIST = [
  {
    _id: 11,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
    name: "Nike",
    market: "NSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 12,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 13,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 14,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 15,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 16,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 17,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 18,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 19,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
    name: "Asianpaints",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 20,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
    name: "HDFC bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
];

export const RECENTLY_VISITED_STOCK = [
  {
    _id: 4,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "100.09",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 5,
    section: "watchlist",
    logo: "https://brandlogos.net/wp-content/uploads/2021/10/meta-logo-768x768.png",
    name: "Meta",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 6,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "120.30",
    result: "+80.00",
    ltp: "0.82",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 7,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "140.30",
    result: "+10.00",
    ltp: "0.12",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 8,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 9,
    section: "watchlist",
    logo: "https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431",
    name: "Asianpaints",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 10,
    section: "watchlist",
    logo: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png",
    name: "HDFC bank",
    market: "NSE",
    price: "120.30",
    result: "+30.00",
    ltp: "0.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 11,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
    name: "Nike",
    market: "NSE",
    price: "120.30",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
  {
    _id: 12,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "100.09",
    result: "-30.00",
    ltp: "0.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 30, 15, 50],
        },
      ],
    },
  },
];
