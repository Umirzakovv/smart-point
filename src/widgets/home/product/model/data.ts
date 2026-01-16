import type { Product } from "./types"

export const products: Product[] = [
    {
      id: 1,
      title: "Xiaomi Smart Air Purifier 4 Pro",
      shortDesc: "Breath Clean, Live Healthy. Coverage up to 60m².",
      image: "/images/lite.png",
      description: "Experience the ultimate in air purification for larger rooms up to 60m², removing 99.97% of airborne particles. Smart control and OLED display ensure your home remains a sanctuary of health.",
      originalPrice: 229,
      discountPrice: 209,
      highlights: [
        { title: 'Coverage', value: 'Up to 60m²' },
        { title: 'Filtration', value: '99.97%' },
        { title: 'Smart Control', value: 'App/Voice' }
      ],
    },
    {
      id: 2,
      title: "Xiaomi Smart Air Purifier 4 Lite",
      shortDesc: "Compact Design, Powerful Purification.",
      image: "/images/pro.png",
      description: "Compact elegance meets powerful performance, delivering 6,330 liters of purified air per minute. Ideal for bedrooms, its antibacterial filter ensures whisper-quiet, clean air.",
      originalPrice: 189,
      discountPrice: 149,
      highlights: [
        { title: 'Coverage', value: '43m²' },
        { title: 'CADR', value: '360m³/h' },
        { title: 'Noise', value: 'Low Noise' }
      ],
    },
    {
      id: 3,
      title: "Xiaomi Electric Shaver S301",
      shortDesc: "Smart Shaving, Effortless Performance.",
      image: "/images/shaver.png",
      description: "Achieve the perfect shave with dual-track foils and ceramic blades that adapt to your facial contours. Smart speed control and IPX7 waterproofing make grooming effortless.",
      originalPrice: 39,
      discountPrice: 33,
      highlights: [
        { title: 'Blades', value: 'Ceramic' },
        { title: 'Rating', value: 'IPX7 Waterproof' },
        { title: 'Charging', value: 'USB-C' }
      ],
    },
    {
      id: 4,
      title: "Xiaomi Nose Hair Trimmer",
      shortDesc: "Precision Trimming, Safe & Gentle.",
      image: "/images/nose_trimmer.png",
      description: "Grooming made simple and safe with a hypoallergenic, dual-edge blade system. Compact, waterproof, and easy to clean—your perfect travel companion.",
      originalPrice: 25,
      discountPrice: 21,
      highlights: [
        { title: 'Blade', value: 'Dual-edge' },
        { title: 'Motor', value: 'High-speed' },
        { title: 'Washable', value: 'Yes' }
      ],
    },
    {
      id: 5,
      title: "Xiaomi Compact Hair Dryer H101",
      shortDesc: "Foldable, Lightweight, Ion Technology.",
      image: "/images/hair_dryer.png",
      description: "Salon-quality drying in a portable package with negative ion technology to reduce frizz. Foldable handle and two air modes make it perfect for travel.",
      originalPrice: 22,
      highlights: [
        { title: 'Speed', value: '15m/s' },
        { title: 'Feature', value: 'Negative Ions' },
        { title: 'Design', value: 'Foldable' }
      ],
    },
    {
      id: 6,
      title: "Redmi Buds 5 Pro",
      shortDesc: "Immersive Audio, 52dB Active Noise Cancellation.",
      image: "/images/buds5.png",
      description: "Immerse yourself in high-fidelity sound with LDAC support and industry-leading 52dB active noise cancellation. Enjoy up to 38 hours of battery life with the charging case.",
      originalPrice: 59,
      highlights: [
        { title: 'Audio', value: 'LDAC/Hi-Res' },
        { title: 'ANC', value: '52dB' },
        { title: 'Battery', value: '38h Total' }
      ],
    },
  ]
  
