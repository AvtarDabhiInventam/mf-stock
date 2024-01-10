export const MAIN_CARD = [
  {
    _id: 1,
    name: "NIFTY 50",
    slug: "nifty50",
    price: "4425.05",
    result: "-269.25",
    ltp: "1.5",
    colorstatus: "text-danger",
  },
  {
    _id: 2,
    name: "SENSEX",
    slug: "sensex",
    price: "23255.66",
    result: "+771.05",
    ltp: "1.54",
    colorstatus: "green-color",
  },
  {
    _id: 3,
    name: "Bank NIFTY",
    slug: "banknifty",
    price: "5434.65",
    result: "-129.15",
    ltp: "1.535",
    colorstatus: "text-danger",
  },
  {
    _id: 4,
    name: "FINNIFTY",
    slug: "finnifty",
    price: "2234.65",
    result: "-78.05",
    ltp: "1.834",
    colorstatus: "text-danger",
  },
  {
    _id: 5,
    name: "NIFTY 100",
    slug: "nifty100",
    price: "58743.66",
    result: "+861.05",
    ltp: "1.54",
    colorstatus: "green-color",
  },
  {
    _id: 6,
    name: "Nifty Midcap Select",
    slug: "niftyMidcapSelect",
    price: "5566.65",
    result: "-19.25",
    ltp: "0.233",
    colorstatus: "text-danger",
  },
];

export const ALL_DATA = [
  {
    _id: 1,
    name: "NIFTY 50",
    slug: "nifty50",
    price: "4425.05",
    result: "-269.25",
    ltp: "1.5",
    colorstatus: "text-danger",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "8000.09",
        result: "-1034",
        ltp: "6",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$20.22",
          high: "$40.65",
          low: "$45.65",
          marketCap: "$54.22",
          avgVol: "$35.22",
          shareVol: "$24.22",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "96000 .09",
        result: "+522.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$34.65",
          low: "$84.65",
          marketCap: "$53.22",
          avgVol: "$33.02",
          shareVol: "$95.32",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+21.00",
        ltp: "1.3",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "4000.09",
        result: "+14.00",
        ltp: "1.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$43.22",
          high: "$56.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
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
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "3500.30",
        result: "+20.00",
        ltp: "0.62",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "2000.10",
        result: "+22.00",
        ltp: "0.21",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "2123.12",
        result: "+12.00",
        ltp: "0.023",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1305.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1000.00",
        result: "+10.00",
        ltp: "0.1",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "2500.50",
        result: "-50.00",
        ltp: "0.955",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
        name: "Reliance",
        market: "NSE",
        price: "1200.50",
        result: "+120.00",
        ltp: "0.55",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
        name: "LIC India",
        market: "BSE",
        price: "2222.09",
        result: "+23.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
        name: "TCS",
        market: "NSE",
        price: "8990.09",
        result: "+876.00",
        ltp: "8.9",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
        name: "Bharti Airtel",
        market: "BSE",
        price: "9844.30",
        result: "+232.00",
        ltp: "2.01",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
        name: "Kotak Mahindra",
        market: "NSE",
        price: "1100.09",
        result: "+110.00",
        ltp: "22.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        equityFunds: "Large",
        logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
        name: "Amazon",
        market: "NSE",
        price: "9000.12",
        result: "+190.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
        name: "Titan Company",
        market: "BSE",
        price: "2900.30",
        result: "-18.00",
        ltp: "12.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        equityFunds: "Small",
        logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
        name: "Maruti Suzuki",
        market: "NSE",
        price: "5600.30",
        result: "+450.00",
        ltp: "23.45",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 21,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
        name: "ONGC",
        market: "BSE",
        price: "6700.30",
        result: "-01.04",
        ltp: "7.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 22,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
        name: "Adani Ports",
        market: "NSE",
        price: "4000.70",
        result: "+114.10",
        ltp: "23.09",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 23,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
        name: "Nestle",
        market: "NSE",
        price: "5000.30",
        result: "-15.00",
        ltp: "5.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 24,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
        name: "Wipro",
        market: "BSE",
        price: "3000.91",
        result: "-40.00",
        ltp: "3.02",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 25,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
        name: "Coal India",
        market: "NSE",
        price: "9800.09",
        result: "-10.00",
        ltp: "3.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 26,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
        name: "Hindustan Aeron",
        market: "BSE",
        price: "1300.00",
        result: "+210.00",
        ltp: "2.92",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 27,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
        name: "Jio Financial",
        market: "NSE",
        price: "1200.09",
        result: "+24.00",
        ltp: "1.43",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 28,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
        name: "Hind Zinc",
        market: "NSE",
        price: "7650.30",
        result: "+560.00",
        ltp: "66.78",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 29,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
        name: "IndusInd Bank",
        market: "BSE",
        price: "3900.30",
        result: "+17.00",
        ltp: "2.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 30,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
        name: "Britannia",
        market: "NSE",
        price: "5000.10",
        result: "-42.00",
        ltp: "3.40",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 31,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
        name: "Godrej Consumer",
        market: "BSE",
        price: "675.30",
        result: "-0.14",
        ltp: "1.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 32,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
        name: "Zomato",
        market: "NSE",
        price: "9400.70",
        result: "+29.00",
        ltp: "5.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 33,
        section: "stocksInNews",
        logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
        name: "Cipla",
        market: "BSE",
        price: "3900.40",
        result: "+117.00",
        ltp: "10.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 34,
        section: "stocksInNews",
        logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
        name: "TVS Motor",
        market: "BSE",
        price: "1900.69",
        result: "-7.00",
        ltp: "03.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 35,
        section: "stocksInNews",
        logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
        name: "Union Bank",
        market: "NSE",
        price: "2000.30",
        result: "+27.00",
        ltp: "13.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 36,
        section: "stocksInNews",
        logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
        name: "Torrent Pharma",
        market: "BSE",
        price: "2400.50",
        result: "+67.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 37,
        section: "stocksInNews",
        logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
        name: "Vodafone Idea",
        market: "NSE",
        price: "5670.30",
        result: "+87.00",
        ltp: "23.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
    price: "23255.66",
    result: "+771.05",
    ltp: "1.54",
    colorstatus: "green-color",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "8000.09",
        result: "-1034",
        ltp: "6",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$20.22",
          high: "$40.65",
          low: "$45.65",
          marketCap: "$54.22",
          avgVol: "$35.22",
          shareVol: "$24.22",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "96000 .09",
        result: "+522.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$34.65",
          low: "$84.65",
          marketCap: "$53.22",
          avgVol: "$33.02",
          shareVol: "$95.32",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+21.00",
        ltp: "1.3",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "4000.09",
        result: "+14.00",
        ltp: "1.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$43.22",
          high: "$56.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
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
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "3500.30",
        result: "+20.00",
        ltp: "0.62",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "2000.10",
        result: "+22.00",
        ltp: "0.21",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "2123.12",
        result: "+12.00",
        ltp: "0.023",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1305.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1000.00",
        result: "+10.00",
        ltp: "0.1",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "2500.50",
        result: "-50.00",
        ltp: "0.955",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
        name: "Reliance",
        market: "NSE",
        price: "1200.50",
        result: "+120.00",
        ltp: "0.55",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
        name: "LIC India",
        market: "BSE",
        price: "2222.09",
        result: "+23.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
        name: "TCS",
        market: "NSE",
        price: "8990.09",
        result: "+876.00",
        ltp: "8.9",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
        name: "Bharti Airtel",
        market: "BSE",
        price: "9844.30",
        result: "+232.00",
        ltp: "2.01",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
        name: "Kotak Mahindra",
        market: "NSE",
        price: "1100.09",
        result: "+110.00",
        ltp: "22.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        equityFunds: "Large",
        logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
        name: "Amazon",
        market: "NSE",
        price: "9000.12",
        result: "+190.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
        name: "Titan Company",
        market: "BSE",
        price: "2900.30",
        result: "-18.00",
        ltp: "12.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        equityFunds: "Small",
        logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
        name: "Maruti Suzuki",
        market: "NSE",
        price: "5600.30",
        result: "+450.00",
        ltp: "23.45",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 21,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
        name: "ONGC",
        market: "BSE",
        price: "6700.30",
        result: "-01.04",
        ltp: "7.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 22,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
        name: "Adani Ports",
        market: "NSE",
        price: "4000.70",
        result: "+114.10",
        ltp: "23.09",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 23,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
        name: "Nestle",
        market: "NSE",
        price: "5000.30",
        result: "-15.00",
        ltp: "5.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 24,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
        name: "Wipro",
        market: "BSE",
        price: "3000.91",
        result: "-40.00",
        ltp: "3.02",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 25,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
        name: "Coal India",
        market: "NSE",
        price: "9800.09",
        result: "-10.00",
        ltp: "3.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 26,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
        name: "Hindustan Aeron",
        market: "BSE",
        price: "1300.00",
        result: "+210.00",
        ltp: "2.92",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 27,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
        name: "Jio Financial",
        market: "NSE",
        price: "1200.09",
        result: "+24.00",
        ltp: "1.43",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 28,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
        name: "Hind Zinc",
        market: "NSE",
        price: "7650.30",
        result: "+560.00",
        ltp: "66.78",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 29,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
        name: "IndusInd Bank",
        market: "BSE",
        price: "3900.30",
        result: "+17.00",
        ltp: "2.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 30,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
        name: "Britannia",
        market: "NSE",
        price: "5000.10",
        result: "-42.00",
        ltp: "3.40",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 31,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
        name: "Godrej Consumer",
        market: "BSE",
        price: "675.30",
        result: "-0.14",
        ltp: "1.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 32,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
        name: "Zomato",
        market: "NSE",
        price: "9400.70",
        result: "+29.00",
        ltp: "5.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 33,
        section: "stocksInNews",
        logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
        name: "Cipla",
        market: "BSE",
        price: "3900.40",
        result: "+117.00",
        ltp: "10.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 34,
        section: "stocksInNews",
        logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
        name: "TVS Motor",
        market: "BSE",
        price: "1900.69",
        result: "-7.00",
        ltp: "03.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 35,
        section: "stocksInNews",
        logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
        name: "Union Bank",
        market: "NSE",
        price: "2000.30",
        result: "+27.00",
        ltp: "13.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 36,
        section: "stocksInNews",
        logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
        name: "Torrent Pharma",
        market: "BSE",
        price: "2400.50",
        result: "+67.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 37,
        section: "stocksInNews",
        logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
        name: "Vodafone Idea",
        market: "NSE",
        price: "5670.30",
        result: "+87.00",
        ltp: "23.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
    price: "5434.65",
    result: "-129.15",
    ltp: "1.535",
    colorstatus: "text-danger",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "8000.09",
        result: "-1034",
        ltp: "6",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$20.22",
          high: "$40.65",
          low: "$45.65",
          marketCap: "$54.22",
          avgVol: "$35.22",
          shareVol: "$24.22",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "96000 .09",
        result: "+522.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$34.65",
          low: "$84.65",
          marketCap: "$53.22",
          avgVol: "$33.02",
          shareVol: "$95.32",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+21.00",
        ltp: "1.3",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "4000.09",
        result: "+14.00",
        ltp: "1.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$43.22",
          high: "$56.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
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
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "3500.30",
        result: "+20.00",
        ltp: "0.62",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "2000.10",
        result: "+22.00",
        ltp: "0.21",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "2123.12",
        result: "+12.00",
        ltp: "0.023",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1305.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1000.00",
        result: "+10.00",
        ltp: "0.1",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "2500.50",
        result: "-50.00",
        ltp: "0.955",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
        name: "Reliance",
        market: "NSE",
        price: "1200.50",
        result: "+120.00",
        ltp: "0.55",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
        name: "LIC India",
        market: "BSE",
        price: "2222.09",
        result: "+23.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
        name: "TCS",
        market: "NSE",
        price: "8990.09",
        result: "+876.00",
        ltp: "8.9",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
        name: "Bharti Airtel",
        market: "BSE",
        price: "9844.30",
        result: "+232.00",
        ltp: "2.01",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
        name: "Kotak Mahindra",
        market: "NSE",
        price: "1100.09",
        result: "+110.00",
        ltp: "22.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        equityFunds: "Large",
        logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
        name: "Amazon",
        market: "NSE",
        price: "9000.12",
        result: "+190.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
        name: "Titan Company",
        market: "BSE",
        price: "2900.30",
        result: "-18.00",
        ltp: "12.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        equityFunds: "Small",
        logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
        name: "Maruti Suzuki",
        market: "NSE",
        price: "5600.30",
        result: "+450.00",
        ltp: "23.45",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 21,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
        name: "ONGC",
        market: "BSE",
        price: "6700.30",
        result: "-01.04",
        ltp: "7.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 22,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
        name: "Adani Ports",
        market: "NSE",
        price: "4000.70",
        result: "+114.10",
        ltp: "23.09",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 23,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
        name: "Nestle",
        market: "NSE",
        price: "5000.30",
        result: "-15.00",
        ltp: "5.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 24,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
        name: "Wipro",
        market: "BSE",
        price: "3000.91",
        result: "-40.00",
        ltp: "3.02",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 25,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
        name: "Coal India",
        market: "NSE",
        price: "9800.09",
        result: "-10.00",
        ltp: "3.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 26,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
        name: "Hindustan Aeron",
        market: "BSE",
        price: "1300.00",
        result: "+210.00",
        ltp: "2.92",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 27,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
        name: "Jio Financial",
        market: "NSE",
        price: "1200.09",
        result: "+24.00",
        ltp: "1.43",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 28,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
        name: "Hind Zinc",
        market: "NSE",
        price: "7650.30",
        result: "+560.00",
        ltp: "66.78",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 29,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
        name: "IndusInd Bank",
        market: "BSE",
        price: "3900.30",
        result: "+17.00",
        ltp: "2.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 30,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
        name: "Britannia",
        market: "NSE",
        price: "5000.10",
        result: "-42.00",
        ltp: "3.40",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 31,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
        name: "Godrej Consumer",
        market: "BSE",
        price: "675.30",
        result: "-0.14",
        ltp: "1.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 32,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
        name: "Zomato",
        market: "NSE",
        price: "9400.70",
        result: "+29.00",
        ltp: "5.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 33,
        section: "stocksInNews",
        logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
        name: "Cipla",
        market: "BSE",
        price: "3900.40",
        result: "+117.00",
        ltp: "10.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 34,
        section: "stocksInNews",
        logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
        name: "TVS Motor",
        market: "BSE",
        price: "1900.69",
        result: "-7.00",
        ltp: "03.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 35,
        section: "stocksInNews",
        logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
        name: "Union Bank",
        market: "NSE",
        price: "2000.30",
        result: "+27.00",
        ltp: "13.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 36,
        section: "stocksInNews",
        logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
        name: "Torrent Pharma",
        market: "BSE",
        price: "2400.50",
        result: "+67.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 37,
        section: "stocksInNews",
        logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
        name: "Vodafone Idea",
        market: "NSE",
        price: "5670.30",
        result: "+87.00",
        ltp: "23.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
    price: "2234.65",
    result: "-78.05",
    ltp: "1.834",
    colorstatus: "text-danger",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "8000.09",
        result: "-1034",
        ltp: "6",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$20.22",
          high: "$40.65",
          low: "$45.65",
          marketCap: "$54.22",
          avgVol: "$35.22",
          shareVol: "$24.22",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "96000 .09",
        result: "+522.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$34.65",
          low: "$84.65",
          marketCap: "$53.22",
          avgVol: "$33.02",
          shareVol: "$95.32",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+21.00",
        ltp: "1.3",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "4000.09",
        result: "+14.00",
        ltp: "1.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$43.22",
          high: "$56.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
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
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "3500.30",
        result: "+20.00",
        ltp: "0.62",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "2000.10",
        result: "+22.00",
        ltp: "0.21",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "2123.12",
        result: "+12.00",
        ltp: "0.023",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1305.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1000.00",
        result: "+10.00",
        ltp: "0.1",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "2500.50",
        result: "-50.00",
        ltp: "0.955",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
        name: "Reliance",
        market: "NSE",
        price: "1200.50",
        result: "+120.00",
        ltp: "0.55",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
        name: "LIC India",
        market: "BSE",
        price: "2222.09",
        result: "+23.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
        name: "TCS",
        market: "NSE",
        price: "8990.09",
        result: "+876.00",
        ltp: "8.9",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
        name: "Bharti Airtel",
        market: "BSE",
        price: "9844.30",
        result: "+232.00",
        ltp: "2.01",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
        name: "Kotak Mahindra",
        market: "NSE",
        price: "1100.09",
        result: "+110.00",
        ltp: "22.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        equityFunds: "Large",
        logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
        name: "Amazon",
        market: "NSE",
        price: "9000.12",
        result: "+190.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
        name: "Titan Company",
        market: "BSE",
        price: "2900.30",
        result: "-18.00",
        ltp: "12.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        equityFunds: "Small",
        logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
        name: "Maruti Suzuki",
        market: "NSE",
        price: "5600.30",
        result: "+450.00",
        ltp: "23.45",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 21,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
        name: "ONGC",
        market: "BSE",
        price: "6700.30",
        result: "-01.04",
        ltp: "7.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 22,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
        name: "Adani Ports",
        market: "NSE",
        price: "4000.70",
        result: "+114.10",
        ltp: "23.09",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 23,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
        name: "Nestle",
        market: "NSE",
        price: "5000.30",
        result: "-15.00",
        ltp: "5.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 24,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
        name: "Wipro",
        market: "BSE",
        price: "3000.91",
        result: "-40.00",
        ltp: "3.02",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 25,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
        name: "Coal India",
        market: "NSE",
        price: "9800.09",
        result: "-10.00",
        ltp: "3.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 26,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
        name: "Hindustan Aeron",
        market: "BSE",
        price: "1300.00",
        result: "+210.00",
        ltp: "2.92",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 27,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
        name: "Jio Financial",
        market: "NSE",
        price: "1200.09",
        result: "+24.00",
        ltp: "1.43",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 28,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
        name: "Hind Zinc",
        market: "NSE",
        price: "7650.30",
        result: "+560.00",
        ltp: "66.78",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 29,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
        name: "IndusInd Bank",
        market: "BSE",
        price: "3900.30",
        result: "+17.00",
        ltp: "2.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 30,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
        name: "Britannia",
        market: "NSE",
        price: "5000.10",
        result: "-42.00",
        ltp: "3.40",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 31,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
        name: "Godrej Consumer",
        market: "BSE",
        price: "675.30",
        result: "-0.14",
        ltp: "1.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 32,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
        name: "Zomato",
        market: "NSE",
        price: "9400.70",
        result: "+29.00",
        ltp: "5.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 33,
        section: "stocksInNews",
        logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
        name: "Cipla",
        market: "BSE",
        price: "3900.40",
        result: "+117.00",
        ltp: "10.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 34,
        section: "stocksInNews",
        logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
        name: "TVS Motor",
        market: "BSE",
        price: "1900.69",
        result: "-7.00",
        ltp: "03.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 35,
        section: "stocksInNews",
        logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
        name: "Union Bank",
        market: "NSE",
        price: "2000.30",
        result: "+27.00",
        ltp: "13.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 36,
        section: "stocksInNews",
        logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
        name: "Torrent Pharma",
        market: "BSE",
        price: "2400.50",
        result: "+67.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 37,
        section: "stocksInNews",
        logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
        name: "Vodafone Idea",
        market: "NSE",
        price: "5670.30",
        result: "+87.00",
        ltp: "23.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
    result: "+861.05",
    ltp: "1.54",
    colorstatus: "green-color",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "8000.09",
        result: "-1034",
        ltp: "6",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$20.22",
          high: "$40.65",
          low: "$45.65",
          marketCap: "$54.22",
          avgVol: "$35.22",
          shareVol: "$24.22",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "96000 .09",
        result: "+522.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$34.65",
          low: "$84.65",
          marketCap: "$53.22",
          avgVol: "$33.02",
          shareVol: "$95.32",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+21.00",
        ltp: "1.3",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "4000.09",
        result: "+14.00",
        ltp: "1.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$43.22",
          high: "$56.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
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
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "3500.30",
        result: "+20.00",
        ltp: "0.62",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "2000.10",
        result: "+22.00",
        ltp: "0.21",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "2123.12",
        result: "+12.00",
        ltp: "0.023",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1305.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1000.00",
        result: "+10.00",
        ltp: "0.1",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "2500.50",
        result: "-50.00",
        ltp: "0.955",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
        name: "Reliance",
        market: "NSE",
        price: "1200.50",
        result: "+120.00",
        ltp: "0.55",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
        name: "LIC India",
        market: "BSE",
        price: "2222.09",
        result: "+23.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
        name: "TCS",
        market: "NSE",
        price: "8990.09",
        result: "+876.00",
        ltp: "8.9",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
        name: "Bharti Airtel",
        market: "BSE",
        price: "9844.30",
        result: "+232.00",
        ltp: "2.01",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
        name: "Kotak Mahindra",
        market: "NSE",
        price: "1100.09",
        result: "+110.00",
        ltp: "22.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        equityFunds: "Large",
        logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
        name: "Amazon",
        market: "NSE",
        price: "9000.12",
        result: "+190.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
        name: "Titan Company",
        market: "BSE",
        price: "2900.30",
        result: "-18.00",
        ltp: "12.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        equityFunds: "Small",
        logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
        name: "Maruti Suzuki",
        market: "NSE",
        price: "5600.30",
        result: "+450.00",
        ltp: "23.45",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 21,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
        name: "ONGC",
        market: "BSE",
        price: "6700.30",
        result: "-01.04",
        ltp: "7.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 22,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
        name: "Adani Ports",
        market: "NSE",
        price: "4000.70",
        result: "+114.10",
        ltp: "23.09",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 23,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
        name: "Nestle",
        market: "NSE",
        price: "5000.30",
        result: "-15.00",
        ltp: "5.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 24,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
        name: "Wipro",
        market: "BSE",
        price: "3000.91",
        result: "-40.00",
        ltp: "3.02",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 25,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
        name: "Coal India",
        market: "NSE",
        price: "9800.09",
        result: "-10.00",
        ltp: "3.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 26,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
        name: "Hindustan Aeron",
        market: "BSE",
        price: "1300.00",
        result: "+210.00",
        ltp: "2.92",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 27,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
        name: "Jio Financial",
        market: "NSE",
        price: "1200.09",
        result: "+24.00",
        ltp: "1.43",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 28,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
        name: "Hind Zinc",
        market: "NSE",
        price: "7650.30",
        result: "+560.00",
        ltp: "66.78",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 29,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
        name: "IndusInd Bank",
        market: "BSE",
        price: "3900.30",
        result: "+17.00",
        ltp: "2.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 30,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
        name: "Britannia",
        market: "NSE",
        price: "5000.10",
        result: "-42.00",
        ltp: "3.40",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 31,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
        name: "Godrej Consumer",
        market: "BSE",
        price: "675.30",
        result: "-0.14",
        ltp: "1.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 32,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
        name: "Zomato",
        market: "NSE",
        price: "9400.70",
        result: "+29.00",
        ltp: "5.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 33,
        section: "stocksInNews",
        logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
        name: "Cipla",
        market: "BSE",
        price: "3900.40",
        result: "+117.00",
        ltp: "10.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 34,
        section: "stocksInNews",
        logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
        name: "TVS Motor",
        market: "BSE",
        price: "1900.69",
        result: "-7.00",
        ltp: "03.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 35,
        section: "stocksInNews",
        logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
        name: "Union Bank",
        market: "NSE",
        price: "2000.30",
        result: "+27.00",
        ltp: "13.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 36,
        section: "stocksInNews",
        logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
        name: "Torrent Pharma",
        market: "BSE",
        price: "2400.50",
        result: "+67.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 37,
        section: "stocksInNews",
        logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
        name: "Vodafone Idea",
        market: "NSE",
        price: "5670.30",
        result: "+87.00",
        ltp: "23.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
    price: "5566.65",
    result: "-19.25",
    ltp: "0.233",
    colorstatus: "text-danger",
    chartData: [
      {
        date: "5 Aug 2022",
        value: "30",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
        name: "Apple",
        market: "BSE",
        price: "8000.09",
        result: "-1034",
        ltp: "6",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$20.22",
          high: "$40.65",
          low: "$45.65",
          marketCap: "$54.22",
          avgVol: "$35.22",
          shareVol: "$24.22",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
        name: "Tesla",
        market: "NSE",
        price: "96000 .09",
        result: "+522.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$30.22",
          high: "$34.65",
          low: "$84.65",
          marketCap: "$53.22",
          avgVol: "$33.02",
          shareVol: "$95.32",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
        name: "Spotify",
        market: "BSE",
        price: "120.30",
        result: "+21.00",
        ltp: "1.3",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
        name: "Microsot",
        market: "NSE",
        price: "4000.09",
        result: "+14.00",
        ltp: "1.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$43.22",
          high: "$56.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
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
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
        name: "Amazon",
        market: "NSE",
        price: "3500.30",
        result: "+20.00",
        ltp: "0.62",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "mostBoughtOnMF",
        logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
        name: "Tata steel",
        market: "BSE",
        price: "2000.10",
        result: "+22.00",
        ltp: "0.21",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
        name: "Axis bank",
        market: "NSE",
        price: "2123.12",
        result: "+12.00",
        ltp: "0.023",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1305.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        price: "1000.00",
        result: "+10.00",
        ltp: "0.1",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
        name: "Nike",
        market: "NSE",
        price: "2500.50",
        result: "-50.00",
        ltp: "0.955",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "watchlist",
        logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
        name: "Reliance",
        market: "NSE",
        price: "1200.50",
        result: "+120.00",
        ltp: "0.55",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
        name: "LIC India",
        market: "BSE",
        price: "2222.09",
        result: "+23.00",
        ltp: "0.12",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
        name: "TCS",
        market: "NSE",
        price: "8990.09",
        result: "+876.00",
        ltp: "8.9",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Large",
        logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
        name: "Bharti Airtel",
        market: "BSE",
        price: "9844.30",
        result: "+232.00",
        ltp: "2.01",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
        name: "Kotak Mahindra",
        market: "NSE",
        price: "1100.09",
        result: "+110.00",
        ltp: "22.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
        name: "Meta",
        market: "BSE",
        price: "15.30",
        result: "-0.04",
        ltp: "4.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Medium",
        equityFunds: "Large",
        logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
        name: "Amazon",
        market: "NSE",
        price: "9000.12",
        result: "+190.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
        name: "Titan Company",
        market: "BSE",
        price: "2900.30",
        result: "-18.00",
        ltp: "12.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        section: "topGainers",
        equityFunds: "Small",
        equityFunds: "Small",
        logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
        name: "Maruti Suzuki",
        market: "NSE",
        price: "5600.30",
        result: "+450.00",
        ltp: "23.45",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 21,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
        name: "ONGC",
        market: "BSE",
        price: "6700.30",
        result: "-01.04",
        ltp: "7.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 22,
        section: "topGainers",
        equityFunds: "Small",
        logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
        name: "Adani Ports",
        market: "NSE",
        price: "4000.70",
        result: "+114.10",
        ltp: "23.09",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 23,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
        name: "Nestle",
        market: "NSE",
        price: "5000.30",
        result: "-15.00",
        ltp: "5.72",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 24,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
        name: "Wipro",
        market: "BSE",
        price: "3000.91",
        result: "-40.00",
        ltp: "3.02",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 25,
        section: "topLosers",
        equityFunds: "Large",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
        name: "Coal India",
        market: "NSE",
        price: "9800.09",
        result: "-10.00",
        ltp: "3.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 26,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
        name: "Hindustan Aeron",
        market: "BSE",
        price: "1300.00",
        result: "+210.00",
        ltp: "2.92",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 27,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
        name: "Jio Financial",
        market: "NSE",
        price: "1200.09",
        result: "+24.00",
        ltp: "1.43",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 28,
        section: "topLosers",
        equityFunds: "Medium",
        logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
        name: "Hind Zinc",
        market: "NSE",
        price: "7650.30",
        result: "+560.00",
        ltp: "66.78",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 29,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
        name: "IndusInd Bank",
        market: "BSE",
        price: "3900.30",
        result: "+17.00",
        ltp: "2.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 30,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
        name: "Britannia",
        market: "NSE",
        price: "5000.10",
        result: "-42.00",
        ltp: "3.40",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 31,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
        name: "Godrej Consumer",
        market: "BSE",
        price: "675.30",
        result: "-0.14",
        ltp: "1.94",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 32,
        section: "topLosers",
        equityFunds: "Small",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
        name: "Zomato",
        market: "NSE",
        price: "9400.70",
        result: "+29.00",
        ltp: "5.72",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 33,
        section: "stocksInNews",
        logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
        name: "Cipla",
        market: "BSE",
        price: "3900.40",
        result: "+117.00",
        ltp: "10.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 34,
        section: "stocksInNews",
        logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
        name: "TVS Motor",
        market: "BSE",
        price: "1900.69",
        result: "-7.00",
        ltp: "03.00",
        colorstatus: "text-danger",
        chartData: {
          datasets: [
            {
              data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 35,
        section: "stocksInNews",
        logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
        name: "Union Bank",
        market: "NSE",
        price: "2000.30",
        result: "+27.00",
        ltp: "13.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 36,
        section: "stocksInNews",
        logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
        name: "Torrent Pharma",
        market: "BSE",
        price: "2400.50",
        result: "+67.00",
        ltp: "34.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
        _id: 37,
        section: "stocksInNews",
        logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
        name: "Vodafone Idea",
        market: "NSE",
        price: "5670.30",
        result: "+87.00",
        ltp: "23.00",
        colorstatus: "green-color",
        chartData: {
          datasets: [
            {
              data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
            },
          ],
        },
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fundamental: {
          open: "$40.22",
          high: "$46.65",
          low: "$70.55",
          marketCap: "$32.22",
          avgVol: "$41.22",
          shareVol: "$11.92",
        },
        expertRating: {
          buy: "70",
          sell: "20",
          hold: "30",
          totalRate: "70",
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
    section: "mostBoughtOnMF",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "8000.09",
    result: "-1034",
    ltp: "6",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 2,
    section: "mostBoughtOnMF",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "96000 .09",
    result: "+522.00",
    ltp: "0.12",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 3,
    section: "mostBoughtOnMF",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "+21.00",
    ltp: "1.3",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 4,
    section: "mostBoughtOnMF",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "4000.09",
    result: "+14.00",
    ltp: "1.12",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 5,
    section: "mostBoughtOnMF",
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
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 6,
    section: "mostBoughtOnMF",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "3500.30",
    result: "+20.00",
    ltp: "0.62",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 7,
    section: "mostBoughtOnMF",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "2000.10",
    result: "+22.00",
    ltp: "0.21",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 8,
    section: "watchlist",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "2123.12",
    result: "+12.00",
    ltp: "0.023",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
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
    price: "1305.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
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
    price: "1000.00",
    result: "+10.00",
    ltp: "0.1",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 11,
    section: "watchlist",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
    name: "Nike",
    market: "NSE",
    price: "2500.50",
    result: "-50.00",
    ltp: "0.955",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 12,
    section: "watchlist",
    logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
    name: "Reliance",
    market: "NSE",
    price: "1200.50",
    result: "+120.00",
    ltp: "0.55",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 13,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
    name: "LIC India",
    market: "BSE",
    price: "2222.09",
    result: "+23.00",
    ltp: "0.12",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 14,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
    name: "TCS",
    market: "NSE",
    price: "8990.09",
    result: "+876.00",
    ltp: "8.9",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 15,
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
    name: "Bharti Airtel",
    market: "BSE",
    price: "9844.30",
    result: "+232.00",
    ltp: "2.01",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 16,
    section: "topGainers",
    equityFunds: "Medium",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
    name: "Kotak Mahindra",
    market: "NSE",
    price: "1100.09",
    result: "+110.00",
    ltp: "22.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 17,
    section: "topGainers",
    equityFunds: "Medium",
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
    name: "Meta",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 18,
    section: "topGainers",
    equityFunds: "Medium",
    equityFunds: "Large",
    logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
    name: "Amazon",
    market: "NSE",
    price: "9000.12",
    result: "+190.00",
    ltp: "34.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 19,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
    name: "Titan Company",
    market: "BSE",
    price: "2900.30",
    result: "-18.00",
    ltp: "12.00",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 20,
    section: "topGainers",
    equityFunds: "Small",
    equityFunds: "Small",
    logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
    name: "Maruti Suzuki",
    market: "NSE",
    price: "5600.30",
    result: "+450.00",
    ltp: "23.45",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 21,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
    name: "ONGC",
    market: "BSE",
    price: "6700.30",
    result: "-01.04",
    ltp: "7.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 22,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
    name: "Adani Ports",
    market: "NSE",
    price: "4000.70",
    result: "+114.10",
    ltp: "23.09",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 23,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
    name: "Nestle",
    market: "NSE",
    price: "5000.30",
    result: "-15.00",
    ltp: "5.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 24,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
    name: "Wipro",
    market: "BSE",
    price: "3000.91",
    result: "-40.00",
    ltp: "3.02",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 25,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
    name: "Coal India",
    market: "NSE",
    price: "9800.09",
    result: "-10.00",
    ltp: "3.00",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 26,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
    name: "Hindustan Aeron",
    market: "BSE",
    price: "1300.00",
    result: "+210.00",
    ltp: "2.92",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 27,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
    name: "Jio Financial",
    market: "NSE",
    price: "1200.09",
    result: "+24.00",
    ltp: "1.43",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 28,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
    name: "Hind Zinc",
    market: "NSE",
    price: "7650.30",
    result: "+560.00",
    ltp: "66.78",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 29,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
    name: "IndusInd Bank",
    market: "BSE",
    price: "3900.30",
    result: "+17.00",
    ltp: "2.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 30,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
    name: "Britannia",
    market: "NSE",
    price: "5000.10",
    result: "-42.00",
    ltp: "3.40",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 31,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
    name: "Godrej Consumer",
    market: "BSE",
    price: "675.30",
    result: "-0.14",
    ltp: "1.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 32,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
    name: "Zomato",
    market: "NSE",
    price: "9400.70",
    result: "+29.00",
    ltp: "5.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 33,
    section: "stocksInNews",
    logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
    name: "Cipla",
    market: "BSE",
    price: "3900.40",
    result: "+117.00",
    ltp: "10.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 34,
    section: "stocksInNews",
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
    name: "TVS Motor",
    market: "BSE",
    price: "1900.69",
    result: "-7.00",
    ltp: "03.00",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
  },
  {
    _id: 35,
    section: "stocksInNews",
    logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
    name: "Union Bank",
    market: "NSE",
    price: "2000.30",
    result: "+27.00",
    ltp: "13.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 36,
    section: "stocksInNews",
    logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
    name: "Torrent Pharma",
    market: "BSE",
    price: "2400.50",
    result: "+67.00",
    ltp: "34.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
  {
    _id: 37,
    section: "stocksInNews",
    logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
    name: "Vodafone Idea",
    market: "NSE",
    price: "5670.30",
    result: "+87.00",
    ltp: "23.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
  },
];

export const ALL_STOCK_COMPANY_DATA = [
  {
    _id: 1,
    section: "mostBoughtOnMF",
    logo: "https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_1280.png",
    name: "Apple",
    market: "BSE",
    price: "8000.09",
    result: "-1034",
    ltp: "6",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$20.22",
      high: "$40.65",
      low: "$45.65",
      marketCap: "$54.22",
      avgVol: "$35.22",
      shareVol: "$24.22",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "mostBoughtOnMF",
    logo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG13.png",
    name: "Tesla",
    market: "NSE",
    price: "96000 .09",
    result: "+522.00",
    ltp: "0.12",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$30.22",
      high: "$34.65",
      low: "$84.65",
      marketCap: "$53.22",
      avgVol: "$33.02",
      shareVol: "$95.32",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "mostBoughtOnMF",
    logo: "https://image.similarpng.com/very-thumbnail/2020/05/Flat-logo-Spotify-PNG.png",
    name: "Spotify",
    market: "BSE",
    price: "120.30",
    result: "+21.00",
    ltp: "1.3",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "mostBoughtOnMF",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png",
    name: "Microsot",
    market: "NSE",
    price: "4000.09",
    result: "+14.00",
    ltp: "1.12",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$43.22",
      high: "$56.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "mostBoughtOnMF",
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
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "mostBoughtOnMF",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-1024.png",
    name: "Amazon",
    market: "NSE",
    price: "3500.30",
    result: "+20.00",
    ltp: "0.62",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "mostBoughtOnMF",
    logo: "https://companieslogo.com/img/orig/TATASTLLP.NS-3c0abd6b.png",
    name: "Tata steel",
    market: "BSE",
    price: "2000.10",
    result: "+22.00",
    ltp: "0.21",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "watchlist",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png",
    name: "Axis bank",
    market: "NSE",
    price: "2123.12",
    result: "+12.00",
    ltp: "0.023",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    price: "1305.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    price: "1000.00",
    result: "+10.00",
    ltp: "0.1",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "watchlist",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nile-Symbol.png",
    name: "Nike",
    market: "NSE",
    price: "2500.50",
    result: "-50.00",
    ltp: "0.955",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "watchlist",
    logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
    name: "Reliance",
    market: "NSE",
    price: "1200.50",
    result: "+120.00",
    ltp: "0.55",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://e7.pngegg.com/pngimages/384/1024/png-clipart-life-insurance-corporation-lic-assistant-administrative-officer-exam-labasa-lic-logo-blue-text.png",
    name: "LIC India",
    market: "BSE",
    price: "2222.09",
    result: "+23.00",
    ltp: "0.12",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
    name: "TCS",
    market: "NSE",
    price: "8990.09",
    result: "+876.00",
    ltp: "8.9",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "topGainers",
    equityFunds: "Large",
    logo: "https://logowik.com/content/uploads/images/593_airtel.jpg",
    name: "Bharti Airtel",
    market: "BSE",
    price: "9844.30",
    result: "+232.00",
    ltp: "2.01",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "topGainers",
    equityFunds: "Medium",
    logo: "https://companyurlfinder.com/marketing/assets/img/logos/kotak.com.png",
    name: "Kotak Mahindra",
    market: "NSE",
    price: "1100.09",
    result: "+110.00",
    ltp: "22.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "topGainers",
    equityFunds: "Medium",
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
    name: "Meta",
    market: "BSE",
    price: "15.30",
    result: "-0.04",
    ltp: "4.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "topGainers",
    equityFunds: "Medium",
    equityFunds: "Large",
    logo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-Icon-1.jpg",
    name: "Amazon",
    market: "NSE",
    price: "9000.12",
    result: "+190.00",
    ltp: "34.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://vectorseek.com/wp-content/uploads/2021/02/Titan-Logo-Vector-scaled.jpg",
    name: "Titan Company",
    market: "BSE",
    price: "2900.30",
    result: "-18.00",
    ltp: "12.00",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    section: "topGainers",
    equityFunds: "Small",
    equityFunds: "Small",
    logo: "https://gobharti.com/wp-content/uploads/2023/03/maruti-suzuki-logo.png",
    name: "Maruti Suzuki",
    market: "NSE",
    price: "5600.30",
    result: "+450.00",
    ltp: "23.45",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 21,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://i0.wp.com/allpaisa.com/wp-content/uploads/2021/11/ONGC-LOGO.png?fit=400%2C400&ssl=1",
    name: "ONGC",
    market: "BSE",
    price: "6700.30",
    result: "-01.04",
    ltp: "7.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 22,
    section: "topGainers",
    equityFunds: "Small",
    logo: "https://vectorlogoseek.com/wp-content/uploads/2019/12/adani-ports-and-sez-ltd-apsez-vector-logo.png",
    name: "Adani Ports",
    market: "NSE",
    price: "4000.70",
    result: "+114.10",
    ltp: "23.09",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 23,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.jpg",
    name: "Nestle",
    market: "NSE",
    price: "5000.30",
    result: "-15.00",
    ltp: "5.72",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 24,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://logohistory.net/wp-content/uploads/2023/05/Wipro-Limited-Logo.jpg",
    name: "Wipro",
    market: "BSE",
    price: "3000.91",
    result: "-40.00",
    ltp: "3.02",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 25,
    section: "topLosers",
    equityFunds: "Large",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bharat_Coming_Coal_Limited_logo.jpg",
    name: "Coal India",
    market: "NSE",
    price: "9800.09",
    result: "-10.00",
    ltp: "3.00",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 26,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/80502_profilepicture.png",
    name: "Hindustan Aeron",
    market: "BSE",
    price: "1300.00",
    result: "+210.00",
    ltp: "2.92",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 27,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://cdn.imago-images.com/bild/st/0301957838/s.jpg",
    name: "Jio Financial",
    market: "NSE",
    price: "1200.09",
    result: "+24.00",
    ltp: "1.43",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 28,
    section: "topLosers",
    equityFunds: "Medium",
    logo: "https://s3-symbol-logo.tradingview.com/hindustan-zinc--600.png",
    name: "Hind Zinc",
    market: "NSE",
    price: "7650.30",
    result: "+560.00",
    ltp: "66.78",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 29,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://i.pinimg.com/474x/88/37/79/88377906c1625e0f720ffe3ca3b7e149.jpg",
    name: "IndusInd Bank",
    market: "BSE",
    price: "3900.30",
    result: "+17.00",
    ltp: "2.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 30,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://logowik.com/content/uploads/images/britannia-industries6604.jpg",
    name: "Britannia",
    market: "NSE",
    price: "5000.10",
    result: "-42.00",
    ltp: "3.40",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 31,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://devdiscourse.blob.core.windows.net/devnews/11_04_2022_15_44_02_6958614.jpg",
    name: "Godrej Consumer",
    market: "BSE",
    price: "675.30",
    result: "-0.14",
    ltp: "1.94",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 32,
    section: "topLosers",
    equityFunds: "Small",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zomato_Logo.jpg",
    name: "Zomato",
    market: "NSE",
    price: "9400.70",
    result: "+29.00",
    ltp: "5.72",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 33,
    section: "stocksInNews",
    logo: "https://vectorseek.com/wp-content/uploads/2023/04/Cipla-Logo-Vector.jpg",
    name: "Cipla",
    market: "BSE",
    price: "3900.40",
    result: "+117.00",
    ltp: "10.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 34,
    section: "stocksInNews",
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
    name: "TVS Motor",
    market: "BSE",
    price: "1900.69",
    result: "-7.00",
    ltp: "03.00",
    colorstatus: "text-danger",
    chartData: {
      datasets: [
        {
          data: [5, 0, 15, 60, 30, 0, 66, 77, 90],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 35,
    section: "stocksInNews",
    logo: "https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/union-bank-logo.png",
    name: "Union Bank",
    market: "NSE",
    price: "2000.30",
    result: "+27.00",
    ltp: "13.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 36,
    section: "stocksInNews",
    logo: "https://www.indianpharmapost.com/public/thumbs/news/2021/10/10523/Torrent.jpg",
    name: "Torrent Pharma",
    market: "BSE",
    price: "2400.50",
    result: "+67.00",
    ltp: "34.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
    _id: 37,
    section: "stocksInNews",
    logo: "https://brandlogos.net/wp-content/uploads/2023/10/vodafone_idea-logo_brandlogos.net_wxr3d-512x463.png",
    name: "Vodafone Idea",
    market: "NSE",
    price: "5670.30",
    result: "+87.00",
    ltp: "23.00",
    colorstatus: "green-color",
    chartData: {
      datasets: [
        {
          data: [90, 78, 66, 0, 30, 66, 35, 17, 0],
        },
      ],
    },
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fundamental: {
      open: "$40.22",
      high: "$46.65",
      low: "$70.55",
      marketCap: "$32.22",
      avgVol: "$41.22",
      shareVol: "$11.92",
    },
    expertRating: {
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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
      buy: "70",
      sell: "20",
      hold: "30",
      totalRate: "70",
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

export const NSE_DETAIL = {
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
        data: [5, 15, 35, 50, 70],
      },
    ],
  },
  about:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  fundamental: {
    open: "$98.09",
    high: "$23.45",
    low: "$30.65",
    marketCap: "$57.00",
    avgVol: "$98.16",
    shareVol: "$32.99",
  },
  expertRating: {
    buy: "80",
    sell: "65",
    hold: "35",
    totalRate: "90",
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
};

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
