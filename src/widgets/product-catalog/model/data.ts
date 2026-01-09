import type { Product } from "./types"

export const products: Product[] = [
    {
      id: 1,
      title: "Product 1",
      category: 'phone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: '/images/Iphone 14 pro 1 (1).png',
      description: "Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. amet consectetur, adipisicing elit. Incidunt beatae iste voluptas quis cum nobis.",
      price: 120,
      oldPrice: 150,
      rating: 4.5,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 2,
      title: "Product 2",
      category: 'laptop',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7.png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 130,
      oldPrice: 160,
      rating: 4.4,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7.png','/images/Rectangle 7.png','/images/Rectangle 7.png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '25 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '20 hours'
        }
      ]
    },
    {
      id: 3,
      title: "Product 3",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (1).png",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt beatae iste ",
      price: 140,
      oldPrice: 170,
      rating: 4.6,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/hero.png','/images/hero.png','/images/hero.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/hero.png','/images/hero.png','/images/hero.png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 4,
      title: "Product 4",
      category: 'laptop',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Iphone 14 pro 1 (1).png",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id ",
      price: 150,
      oldPrice: 180,
      rating: 4.3,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 5,
      title: "Product 5",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (3).png",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 160,
      oldPrice: 190,
      rating: 4.7,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 6,
      title: "Product 6",
      category: 'phone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Iphone 14 pro 1.png",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores ",
      price: 170,
      oldPrice: 200,
      rating: 5.0,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Iphone 14 pro 1.png','/images/Iphone 14 pro 1.png','/images/Iphone 14 pro 1.png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 7,
      title: "Product 7",
      category: 'phone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Iphone 14 pro 1 (1).png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 175,
      oldPrice: 210,
      rating: 4.5,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 8,
      title: "Product 8",
      category: 'laptop',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7.png",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 180,
      oldPrice: 220,
      rating: 4.1,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7.png','/images/Rectangle 7.png','/images/Rectangle 7.png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 9,
      title: "Product 9",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (1).png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ",
      price: 185,
      oldPrice: 225,
      rating: 4.6,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 10,
      title: "Product 10",
      category: 'laptop',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (2).png",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 190,
      oldPrice: 230,
      rating: 4.3,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (2).png','/images/Rectangle 7 (2).png','/images/Rectangle 7 (2).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 11,
      title: "Product 11",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (3).png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 195,
      oldPrice: 240,
      rating: 4.4,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 12,
      title: "Product 12",
      category: 'phone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Iphone 14 pro 1.png",
      description: "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam  ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 200,
      oldPrice: 250,
      rating: 4.2,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Iphone 14 pro 1.png','/images/Iphone 14 pro 1.png','/images/Iphone 14 pro 1.png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 13,
      title: "Product 13",
      category: 'laptop',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: " /images/Rectangle 7.png",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat Lorem ipsum dolor sit amet consectetur, ",
      price: 205,
      oldPrice: 255,
      rating: 4.6,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7.png','/images/Rectangle 7.png','/images/Rectangle 7.png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 14,
      title: "Product 14",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (1).png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis ",
      price: 210,
      oldPrice: 260,
      rating: 4.3,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 15,
      title: "Product 15",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (3).png",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 215,
      oldPrice: 270,
      rating: 4.5,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 16,
      title: "Product 16",
      category: 'phone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Iphone 14 pro 1.png",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 220,
      oldPrice: 280,
      rating: 4.1,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Iphone 14 pro 1.png','/images/Iphone 14 pro 1.png','/images/Iphone 14 pro 1.png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 17,
      title: "Product 17",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (1).png",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores libero!",
      price: 225,
      oldPrice: 285,
      rating: 4.7,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 18,
      title: "Product 18",
      category: 'laptop',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (2).png",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id veniam facilis maiores ",
      price: 230,
      oldPrice: 290,
      rating: 4.2,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (2).png','/images/Rectangle 7 (2).png','/images/Rectangle 7 (2).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 19,
      title: "Product 19",
      category: 'earphone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Rectangle 7 (3).png",
      description: "Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. sit amet consectetur, adipisicing elit. Numquam asperiores accusantium id",
      price: 235,
      oldPrice: 300,
      rating: 4.4,
      isNew: true,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png','/images/Rectangle 7 (3).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image: ['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
    {
      id: 20,
      title: "Product 20",
      category: 'phone',
      shortDesc: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      image: "/images/Iphone 14 pro 1 (1).png",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores accusantium Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod sed aliquid est repellat architecto quisquam reprehenderit doloribus. ",
      price: 240,
      oldPrice: 310,
      rating: 4.3,
      isNew: false,
      colors:[
        {
          value:'Black',
          hex:'#000',
          image: ['/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png','/images/Iphone 14 pro 1 (1).png'],
          bataries:'35 hours'
        },
        {
          value:'White',
          hex:'#fff',
          image:['/images/img2.png','/images/img2.png','/images/img2.png'],
          bataries: '33 hours'
        },
        {
          value:'Silver',
          hex:'#7A7777',
          image:['/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png','/images/Rectangle 7 (1).png'],
          bataries: '30 hours'
        }
      ]
    },
  ]
  
