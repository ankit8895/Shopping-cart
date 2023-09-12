const products = [
  {
    _id: 0,
    name: 'Mason & Co',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed7b_1620914328594.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Based out of Auroville, Mason & Co is touted to be the first indie bean-to-bar chocolate brand in India. It was founded by husband and wife duo Jane and Fabien. Made with organically sourced cocoa, their chocolates are vegan, gluten-free, and soy-free. We love their neat and sleek packaging and their flavours range from Dark, Bittersweet and Semi-Sweet to Sourdough Sea Salt, Peppermint, Zesty Orange and more.',
    brand: 'Mason & Co',
    category: 'Food',
    price: 295,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: 1,
    name: 'Naviluna',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed7c_1620914328607.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Another bean-to-bar chocolate maker, this one uses only Indian cacao beans to make its chocolate. Formerly known as Earth Loaf, Navilunas chocolate is handcrafted in Mysore and includes single-origin bars as well as inclusion chocolate bars mixed with flavours that will appeal to your Indian palate. We’re talking about flavours like Mango, Red Capsicum and Chilli chocolate bar, Kerala Single Estate chocolate bar, Spiced Fig & Walnut, Himalayan Fruit and Nut and more. Their packaging is worth a mention too!',
    brand: 'Naviluna',
    category: 'Food',
    price: 390,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: 2,
    name: 'All Things Chocolate',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed75_1620914328063.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'All Things Chocolate is a bean-to-bar chocolate brand uses directly traded cacao and infuses it with fresh local ingredients to create nostalgia-invoking flavours inspired from cities, flowers, colours and even moods. There’s single-origin, dark, milk, and even vegan chocolate that you can get in the form of bars, truffles, baking chocolate, and drinking chocolate (Cocoa Cappuccino is our favourite). The rustic packaging with on-point illustrations that complement the flavour of the chocolate makes the whole experience a real treat.',
    brand: 'All Things Chocolate',
    category: 'Food',
    price: 180,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: 3,
    name: 'Soklet',
    image:
      'https://imgmediagumlet.lbb.in/media/2022/11/637f2b50aadafc2ed15ca63a_1669278544332.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Soklet is a tree-to-bar chocolate brand which means they grow their own cacao plantations and turn them into decadent chocolate thats ready to eat. Single-origin all the way! Their flavours range from 100 per cent dark chocolate and 80 per cent zero sugar milk chocolate to more exotic flavours like Spiced bar, Filter Kaapi, Candied Ginger and even Bhut Jolokia Chilli. They’ve got gourmet baking bars, drinking chocolate and cacao nibs too.',
    brand: 'Soklet',
    category: 'Food',
    price: 200,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: 4,
    name: 'Pascati',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed7d_1620914328631.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'An artisanal dark chocolate maker, Pascati uses only sustainably sourced and organic ingredients to make its chocolate. From sea salt dark and 90 per cent dark chocolate to fruity combinations of mango, blueberry and walnut and mint dark chocolate, they’ve got 12 different types of dark chocolate bars you can choose from. They have got dark chocolate truffle and pralines too.',
    brand: 'Pascati',
    category: 'Food',
    price: 180,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: 5,
    name: 'Darkins',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed78_1620914328070.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'If dark chocolate is all you can think about, then you must try Darkins. A Delhi-based chocolate brand, Darkins offers handcrafted and vegan bean-to-bar chocolate made with cocoa sourced directly from farmers in Andhra Pradesh. You can pick from options like 75% Dark Chocolate, 85% Dark Chocolate with Blueberries, and 65% Coffee Dark Chocolate. The best part — all their chocolates are gluten-free and made without added preservatives.',
    brand: 'Darkins',
    category: 'Food',
    price: 295,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: 6,
    name: 'Paul & Mike',
    image:
      'https://imgmediagumlet.lbb.in/media/2020/07/5f02c3f335308f42a5ac7ce1_1594016755047.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'With flavours like Milk Sitaphal Chocolate, Amazonian Pink Pepper, and Caramelised Sesame Chocolate, Paul And Mike is a farm-to-bar chocolate brand offering bars made with natural ingredients like fruits, nuts, spices, and cocoa beans. We love that their creations are rather exquisite and come in vibrant, colourful packaging. Their flavours range from 87% Dark Chocolate to 41% Fine Milk Chocolate. ',
    brand: 'Paul & Mike',
    category: 'Food',
    price: 500,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: 7,
    name: 'Chockriti',
    image:
      'https://imgmediagumlet.lbb.in/media/2020/07/5f02c3f335308f42a5ac7ce0_1594016755046.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Founded by Pragati Sawhney, a dentist-turned chocolatier, Chockriti offers artisanal chocolates made using sustainably-sourced, organic cacao from South India and Belgium. Their bars and bonbons are a mix of the finest Indian and globally-inspired flavours made with no additives like sugar, butter, oil or preservatives. From Thandai, Goat Cheese, African Rooibos Tea, Zataar and Kaffir lime To Rooh Afza, Kaaju Kulfi, Sencha Green Tea, and Kashmiri Kahwa, you can pick from an array of flavours. The best part is that they are dentist-approved too. Their packaging is too gorgeous to boot.',
    brand: 'Chockriti',
    category: 'Food',
    price: 290,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: 8,
    name: 'Toska',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed7e_1620914328643.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Also a bean-to-bar chocolate brand, Toska offers dark, white and single-origin chocolates made with rather offbeat ingredients like ginger and cardamom along with rose petals, saffron, biscuits, berries, dried fruits and nuts. Take your pick from flavours like Rose & Saffron white chocolate, Smoked Salt & Crystalised Sugar dark chocolate, Madagascar single-origin chocolate and more. They have got chocolate jars and chocolate-coated nuts as well.',
    brand: 'Toska',
    category: 'Food',
    price: 290,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: 9,
    name: 'Zevic',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3099fedbcd581b25ed7f_1620914329010.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Love chocolate but really want to cut back on sugar? Zevic lets you indulge in chocolates guilt-free offering bars made from the more popular sugar alternative, stevia. You can choose from around 16 flavours which include roasted almonds, dark chocolates, orange zest, roasted coffee, Turkish hazelnut, Himalayan pink salt and more.',
    brand: 'Zevic',
    category: 'Food',
    price: 135,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: 10,
    name: 'La Folie',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed7a_1620914328533.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Popularly known for its wide array of freshly baked goods and chocolate creations, La Folies chocolate bars are worth indulging in at least once. With flavours like Maple & Chunky Almond Butter, Smoked Pink Himalayan Salt, Crunchy Cocoa Nib, Intense Black Jaggery, Sea Salt Caramel, Ecuador Single Origin and more, we bet you will have a hard time choosing your favourite.',
    brand: 'La Folie',
    category: 'Food',
    price: 280,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: 11,
    name: 'Choko La',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed76_1620914328065.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Founded by Vasudha Munjal. Choko La offers artisan chocolates in the form of chocolate minis, chocolate bars, vegan chocolates, bonbons and more. Classic milk chocolate bars, sugar-free chocolate bars, hazelnut chocolate marbles, mini chocolate squares in flavours like orange, mint, chocolate chip and more are on offer. They have also got some delicious hot chocolate blends and chocolate lollipops that you can choose from.',
    brand: 'Choko La',
    category: 'Food',
    price: 260,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: 12,
    name: 'Entisi Chocolatier',
    image:
      'https://imgmediagumlet.lbb.in/media/2019/07/5d1c67838078da1a777ec063_1562142595403.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Another Mumbai-based chocolatier, Entisis pralines have our heart! They are available in four varieties — pistachio praline, hazelnut praline, marzipan, and hazelnut gianduja, which come with 72-78 per cent centre filling (yum!). If you like to keep a check on your sugar intake, their espresso or zero chocolate bars with 55 per cent cocoa might suit your taste buds better. Of course, their hot chocolate mix is a must-try!',
    brand: 'Entisi Chocolatier',
    category: 'Food',
    price: 295,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: 13,
    name: 'Ether Atelier',
    image:
      'https://imgmediagumlet.lbb.in/media/2021/05/609d3098fedbcd581b25ed77_1620914328067.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'We can not get over how unbelievably smooth Ether Ateliers chocolate is. All their chocolate is single-origin and not only the packaging is delightfully classy, but the actual chocolate is also stunning, too. Go for the Noir bar if you like clean dark chocolate with a sprinkling of sea salt, or check out their preserves, too. If we had to describe their chocolate collection, we did call it a high-fashion dessert.',
    brand: 'Ether Atelier',
    category: 'Food',
    price: 575,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: 14,
    name: 'Bombay Sweet Shop',
    image:
      'https://imgmediagumlet.lbb.in/media/2022/07/62c2951bc52a7103ff4d5a36_1656919323080.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'Bombay Sweet Shop brings you the Indie Bar, which will make you ask the question is it chocolate? Or is it mithai? We hear it is the best of both worlds. The decadent, 100% vegetarian bar is made of all things delicious — layers of fluffy coconut, sticky and gooey pepper caramel, and melt-in-your-mouth patissa (a quintessentially Indian, crisp and flaky mithai, made with gram flour, sugar and ghee), and a rich 54% dark chocolate that wraps everything together. It is sinful and a must-try. ',
    brand: 'Bombay Sweet Shop',
    category: 'Food',
    price: 150,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: 15,
    name: 'Savorworks',
    image:
      'https://imgmediagumlet.lbb.in/media/2022/11/637f28b5aadafc2ed15ca39e_1669277877190.jpg?fm=webp&w=750&h=500&dpr=1',
    description:
      'All of Savorworks offerings are made from scratch. They have bean-to-cup coffees and bean-to-bar chocolates. They love to experiment and have fun with chocolate, which explains why they have over eight flavours. If you like dark chocolate, do try their 57% Dark Milk variant. It is super smooth and tastes perfect.',
    brand: 'Savorworks',
    category: 'Food',
    price: 200,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
];

export default products;
