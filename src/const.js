export const destinations = [
  `Amsterdam`,
  `Geneva`,
  `Chamonix`,
  `Saint Petersburg`
];

export const MONTH_NAMES = [
  `JAN`,
  `FEB`,
  `MAR`,
  `APR`,
  `MAY`,
  `JUN`,
  `JUL`,
  `AUG`,
  `SEP`,
  `OCT`,
  `NOV`,
  `DEC`,
];

export const offers = [
  {
    type: `luggage`,
    title: `Add luggage`,
    price: 30
  },
  {
    type: `comfort`,
    title: `Switch to comfort class`,
    price: 100
  },
  {
    type: `meal`,
    title: `Add meal`,
    price: 15
  },
  {
    type: `seats`,
    title: `Choose seats`,
    price: 5
  },
  {
    type: `train`,
    title: `Travel by train`,
    price: 40
  }
];

// export const offersByType = {
//   "taxi": [
//     {
//       type: `luggage`,
//       title: `Add luggage`,
//       price: 30
//     },
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     }
//   ],
//   "bus": [
//     {
//       type: `luggage`,
//       title: `Add luggage`,
//       price: 30
//     },
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     },
//     {
//       type: `seats`,
//       title: `Choose seats`,
//       price: 5
//     }
//   ],
//   "train": [
//     {
//       type: `luggage`,
//       title: `Add luggage`,
//       price: 30
//     },
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     },
//     {
//       type: `meal`,
//       title: `Add meal`,
//       price: 15
//     },
//     {
//       type: `seats`,
//       title: `Choose seats`,
//       price: 5
//     },
//     {
//       type: `train`,
//       title: `Travel by train`,
//       price: 40
//     }
//   ],
//   "ship": [
//     {
//       type: `luggage`,
//       title: `Add luggage`,
//       price: 30
//     },
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     },
//     {
//       type: `meal`,
//       title: `Add meal`,
//       price: 15
//     },
//     {
//       type: `seats`,
//       title: `Choose seats`,
//       price: 5
//     }
//   ],
//   "transport": [
//     {
//       type: `luggage`,
//       title: `Add luggage`,
//       price: 30
//     },
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     },
//     {
//       type: `seats`,
//       title: `Choose seats`,
//       price: 5
//     },
//     {
//       type: `train`,
//       title: `Travel by train`,
//       price: 40
//     }
//   ],
//   "drive": [
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     }
//   ],
//   "flight": [
//     {
//       type: `luggage`,
//       title: `Add luggage`,
//       price: 30
//     },
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     },
//     {
//       type: `seats`,
//       title: `Choose seats`,
//       price: 5
//     },
//     {
//       type: `meal`,
//       title: `Add meal`,
//       price: 15
//     }
//   ],
//   "check-in": [
//     {
//       type: `comfort`,
//       title: `Switch to comfort class`,
//       price: 100
//     },
//     {
//       type: `luggage`,
//       title: `Add luggage`,
//       price: 30
//     },
//   ],
//   "sightseeing": [
//     {
//       type: `train`,
//       title: `Travel by train`,
//       price: 40
//     }
//   ],
//   "restaurant": [
//     {
//       type: `seats`,
//       title: `Choose seats`,
//       price: 5
//     },
//     {
//       type: `meal`,
//       title: `Add meal`,
//       price: 15
//     }
//   ]
// };

export const offersByType = [
  {
    type: `taxi`,
    offers: [
      {
        title: `Upgrade to a business class`,
        price: 190
      },
      {
        title: `Choose the radio station`,
        price: 30
      },
      {
        title: `Choose temperature`,
        price: 170
      },
      {
        title: `Drive quickly, I'm in a hurry`,
        price: 100
      },
      {
        title: `Drive slowly`,
        price: 110
      }
    ]
  },
  {
    type: `bus`,
    offers: [
      {
        title: `Infotainment system`,
        price: 50
      },
      {
        title: `Order meal`,
        price: 100
      },
      {
        title: `Choose seats`,
        price: 190
      }
    ]
  },
  {
    type: `train`,
    offers: [
      {
        title: `Book a taxi at the arrival point`,
        price: 50
      },
      {
        title: `Order a breakfast`,
        price: 80
      },
      {
        title: `Wake me up`,
        price: 140
      }
    ]
  },
  {
    type: `flight`,
    offers: [
      {
        title: `Book a taxi at the arrival point`,
        price: 50
      },
      {
        title: `Order a breakfast`,
        price: 80
      },
      {
        title: `Wake me up`,
        price: 140
      }
    ]
  },
  {
    type: `check-in`,
    offers: [
      {
        title: `Book a taxi at the arrival point`,
        price: 50
      },
      {
        title: `Order a breakfast`,
        price: 80
      },
      {
        title: `Wake me up`,
        price: 140
      }
    ]
  },
  {
    type: `sightseeing`,
    offers: [
      {
        title: `Book a taxi at the arrival point`,
        price: 50
      },
      {
        title: `Order a breakfast`,
        price: 80
      },
      {
        title: `Wake me up`,
        price: 140
      }
    ]
  },
  {
    type: `ship`,
    offers: [
      {
        title: `Book a taxi at the arrival point`,
        price: 50
      },
      {
        title: `Order a breakfast`,
        price: 80
      },
      {
        title: `Wake me up`,
        price: 140
      }
    ]
  },
  {
    type: `transport`,
    offers: [
      {
        title: `Book a taxi at the arrival point`,
        price: 50
      },
      {
        title: `Order a breakfast`,
        price: 80
      },
      {
        title: `Wake me up`,
        price: 140
      }
    ]
  },
  {
    type: `drive`,
    offers: [
      {
        title: `Book a taxi at the arrival point`,
        price: 50
      },
      {
        title: `Order a breakfast`,
        price: 80
      },
      {
        title: `Wake me up`,
        price: 140
      }
    ]
  },
  {
    type: `restaurant`,
    offers: [
      {
        title: `Choose live music`,
        price: 150
      },
      {
        title: `Choose VIP area`,
        price: 70
      }
    ]
  }
];

export const ESC_KEY = `Esc`;
export const ESCAPE_KEY = `Escape`;

export const SortType = {
  SORT_EVENT: `sort-event`,
  SORT_TIME: `sort-time`,
  SORT_PRICE: `sort-price`
};

export const FilterType = {
  ALL: `everything`,
  FUTURE: `future`,
  PAST: `past`
};

export const transferTypes = [
  `taxi`,
  `bus`,
  `train`,
  `ship`,
  `transport`,
  `drive`,
  `flight`
];

export const activityTypes = [
  `check-in`,
  `sightseeing`,
  `restaurant`
];

export const EventType = {
  TAXI: `taxi`,
  BUS: `bus`,
  TRAIN: `train`,
  SHIP: `ship`,
  TRANSPORT: `transport`,
  DRIVE: `drive`,
  FLIGHT: `flight`,
  CHECK: `check-in`,
  SIGHTSEEING: `sightseeing`,
  RESTAURANT: `restaurant`
};

export const eventTypeIcons = {
  [EventType.TAXI]: `🚕`,
  [EventType.BUS]: `🚌`,
  [EventType.TRAIN]: `🚂`,
  [EventType.SHIP]: `🛳️`,
  [EventType.TRANSPORT]: `🚊`,
  [EventType.DRIVE]: `🚗`,
  [EventType.FLIGHT]: `✈️`,
  [EventType.CHECK]: `🏨`,
  [EventType.SIGHTSEEING]: `🏛️`,
  [EventType.RESTAURANT]: `🍴`
};

export const EVENT_TYPES = Object.values(EventType);

export const Destinations = [
  {
    "description": `Chamonix, is a beautiful city, a true asian pearl, with crowded streets.`,
    "name": `Chamonix`,
    "pictures": [
      {
        "src": `http://picsum.photos/300/200?r=0.0762563005163317`,
        "description": `Chamonix parliament building`
      },
      {
        "src": `http://picsum.photos/300/200?r=0.6737960490195023`,
        "description": `Chamonix building`
      }
    ]
  },
  {
    "description": `Saint-Petersburg, aliquam id orci ut lectus varius viverra. Sed sed nisi sed augue convallis suscipit in sed felis.`,
    "name": `Saint Petersburg`,
    "pictures": [
      {
        "src": `http://picsum.photos/248/152?r=0.6737960490195023`,
        "description": `Saint-Petersburg`
      }
    ]
  },
  {
    "description": `Amsterdam, hasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    "name": `Amsterdam`,
    "pictures": [
      {
        "src": `http://picsum.photos/248/152?r=0.24264711939060257`,
        "description": `Amsterdam`
      }
    ]
  },
  {
    "description": `Geneva, liquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    "name": `Geneva`,
    "pictures": [
      {
        "src": `http://picsum.photos/248/152?r=0.5278029974867562`,
        "description": `Geneva`
      }
    ]
  }
];

const getDestinations = () => {
  return Destinations.map((destinationsItem) => {
    return destinationsItem.name;
  });
};

export const DESTINATION_NAMES = getDestinations();

export const Mode = {
  ADDING: `adding`,
  DEFAULT: `default`,
  EDIT: `edit`
};

export const MenuItem = {
  TABLE: `table`,
  STATS: `stats`
};

export const HIDDEN_CLASS = `visually-hidden`;
