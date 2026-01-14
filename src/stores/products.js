import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      // Outfits with sizes
      { id: 1, name: 'Hottie Nurse Costume', price: '50.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/80859_a44920_white_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L', 'XL'] },
      { id: 2, name: 'Latex Plunge Skater Dress', price: '65.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/70187_a37901_black_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 3, name: 'Siren Fishnet and Wet Look Open-Cup Body', price: '45.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/83787_a46636_black_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L', 'XL'] },
      { id: 4, name: 'Kitty Bondage Hood', price: '15.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/72850_a39764_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['One Size'] },
      { id: 5, name: 'Kitty Open Mouth Bondage Hood', price: '15.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/72851_a39765_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['One Size'] },
      { id: 6, name: 'Leather Body Harness with Cock Ring and Wrist Cuffs', price: '55.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/61300_a34159_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 7, name: 'Leather Collar with Cock Ring', price: '25.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/69259_a37456_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['One Size'] },
      { id: 8, name: 'Puppy Play Hood', price: '60.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/86374_a48527_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['One Size'] },
      { id: 9, name: 'Power Sexy Cop Costume', price: '25.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/60186_a33721_blue_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 10, name: 'Doctor Love Costume', price: '15.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/85901_a48166_white_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 11, name: 'Seaman Costume', price: '25.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/75584_a41523_white_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 12, name: 'Garter Shorts', price: '25.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/33043_a22960_black_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 13, name: 'Leather Harness with Butt Plug and Cock Cage', price: '60.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/68216_a36900_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 14, name: 'Vinyl Naughty Nurse Set (4 Piece)', price: '60.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/83612_a46521_black_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 15, name: 'Golden Angel Costume', price: '40.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/86420_a48571_gold_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 16, name: 'Warrior Goddess Superhero Costume', price: '35.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/77032_a42814_red_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 17, name: 'Cheetah Woman', price: '45.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/85215_a47621_gold_regular_000?$primary$&h=632&w=474&fmt=jpeg&unsharp=0,1,1,7&qlt=55', type: 'outfit', level: 'all', sizes: ['S', 'M', 'L'] },
      { id: 38, name: 'Charm Red Corset', price: '40.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/86033_a48249_red_x-size_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'advanced', sizes: ['S', 'M', 'L', 'XL'] },
      { id: 39, name: 'White Merry Set', price: '22.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/83746_a36251_white_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'advanced', sizes: ['S', 'M', 'L'] },
      { id: 40, name: 'Basque Set With Handcuff', price: '35.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/86578_a48685_black_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'advanced', sizes: ['S', 'M', 'L'] },
      { id: 41, name: 'Luxury Crotchless Body', price: '35.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/83772_a46630_black_regular_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'outfit', level: 'advanced', sizes: ['S', 'M', 'L'] },

      // Toys (no sizes)
      { id: 18, name: 'Couple Mega Bondage Kit', price: '65.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/72394_a39465_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'beginner' },
      { id: 19, name: 'Hard Limit Bed Restraint Kit', price: '50.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/40185_a26084_silver_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'intermediate' },
      { id: 20, name: 'Reversible Colar Leather And Lead', price: '15.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/83667_a46558_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'beginner' },
      { id: 21, name: 'Fantasy Bondage Kit', price: '30.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/72293_a39379_blue_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },
      { id: 22, name: 'Full Bondage Kit', price: '150.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/72395_a39466_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },
      { id: 23, name: 'Ankle Cuff', price: '15.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/57763_a32676_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'beginner' },
      { id: 24, name: 'Bondage Tape', price: '7.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/59251_a71_red_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'intermediate' },
      { id: 25, name: 'Rose Pump Clittoral Stimulation', price: '60.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/86861_a48906_red_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },
      { id: 26, name: 'Clittoris And Nipple Pump', price: '17.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/74217_a40672_clear_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'beginner' },
      { id: 42, name: 'Womanizer Blend Rechargeable G-Spot and Clitoral Stimulator', price: '129.00', image:'https://media.lovehoneyassets.com/i/lovehoney/86486_a48623_blue_000?$primary$&h=742&w=556&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },

      { id: 27, name: 'Autosuction Nipple Pump', price: '60.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/81897_a45439_clear_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'intermediate' },
      { id: 28, name: 'Pussy Pump And Tongue Vibrator Kit', price: '120.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/75341_a41359_purple_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'intermediate' },
      { id: 29, name: 'Pennis Pump', price: '40.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/46571_a28656_clear_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },
      { id: 30, name: 'Spanking paddle', price: '15.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/60059_a33628_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'beginner' },
      { id: 31, name: 'Leather Flogger', price: '15.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/68217_a36901_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'intermediate' },
      { id: 32, name: 'Luxury Large whip', price: '20.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/87394_a49384_red_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'intermediate' },
      { id: 33, name: 'Luxury Whip Combo', price: '40.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/86264_a48435_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },
      { id: 34, name: 'Sting Riding Crop', price: '20.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/40182_a26081_silver_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },
      { id: 35, name: 'Door Hnaging Sex Wing', price: '80.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/87588_a49565_black_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },
      { id: 36, name: 'Sex Position Wedge Ramp Combo ', price: '249.00', image:'https://media.lovehoneyassets.com/i/lovehoney/20864_a8853_black_000?$primary$&h=742&w=556&fmt=auto&qlt=80', type: 'toy', level: 'advanced' },

      
      // Wellness (no sizes)
      { id: 37, name: 'Water Based Lube', price: '10.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/37109_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'wellness', level: 'advanced' },
      { id: 38, name: 'Liquid Silk Lube', price: '12.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/7163_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'wellness', level: 'advanced' },
      { id: 39, name: 'Anal Lube', price: '10.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/45600_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'wellness', level: 'advanced' },
      { id: 40, name: 'Anti Bacterial Cleanser', price: '10.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/37110_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'wellness', level: 'advanced' },
      { id: 41, name: 'Toy Battery', price: '3.00', image: 'https://media.lovehoneyassets.com/i/lovehoney/82362_000?$primary$&h=371&w=278&fmt=auto&qlt=80', type: 'wellness', level: 'advanced' }
    ]
  }),

  getters: {
    byType: (state) => (type) => state.products.filter(p => p.type === type),
    byLevel: (state) => (level) => state.products.filter(p => p.level === level),
    getById: (state) => (id) => state.products.find(p => p.id === id),
  },
});