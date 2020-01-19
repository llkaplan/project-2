var db = require("../models/");

// Routes
// =============================================================
module.exports = function (app) {
  //html routes
  var items = [
    {
      name: "Apple Ipad Pro",
      image: "https://images-na.ssl-images-amazon.com/images/I/61%2BWrV0wJsL._SY741_.jpg",
      price: 847.99,
      description: "The new 12. 9-inch iPad Pro features an advanced Liquid Retina display that goes edge to edge. Face ID, so you can securely unlock iPad Pro, log in to apps, and pay with just a glance. The A12X Bionic chip is faster than most PC laptops and easily runs pro apps. All-day battery life.",
      id: 1
    },
    {
      name: "Babolat Tennis Raquet",
      image: "https://images-na.ssl-images-amazon.com/images/I/61glQogq%2BhL._SL1024_.jpg",
      price: 219.00,
      description: "The new for 2018 Babolat Pure Drive. Featuring SMAC visco-elastic material integrated into the frame for soft and comfortable play. Featuring a change in string spacing (FSI Technology) and different shape grommets to give extra power and more spin.",
      id: 2
    },
    {
      name: "Beats On-Ear Headphones",
      image: "https://images-na.ssl-images-amazon.com/images/I/51vb%2BcxGzQL._SL1000_.jpg",
      price: 199.95,
      description: "With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.",
      id: 3
    },
    {
      name: "Dell XPS Laptop",
      image: "https://images-na.ssl-images-amazon.com/images/I/81Yd-xXWdcL._SL1500_.jpg",
      price: 1590.00,
      description: "Xps 9570 8th generation Intel Core i7-8750H Processor, (2x8GB) ddr4-2666 mhz, 512gb M.2 2280 PCIe solid State drive, nvidia GeForce GTX 1050Ti with 4GB gddr5, 15.6in 4K Ultra HD (3840 x 2160) InfinityEdge anti-reflective touch IPS, 100% minimum Adobe RGB 400-nit.",
      id: 4

    },
    {
      name: "Rocky Road See's Candy",
      image: "https://www.sees.com/dw/image/v2/AATS_PRD/on/demandware.static/-/Sites-sees-catalog/default/dwa98ec21d/images/game-day/rocky-road-football-915-candy-box-alt4.jpg?sw=1036&sh=1036",
      price: 15.00,
      description: "Large enough to share at your game day party, our football is handmade with See’s milk chocolate, honey marshmallow and walnuts. Savor this mouthwatering chocolate treat during the big game or any day! Serves 6. Approximately 6in long.",
      id: 5
    },
    {
      name: "Tombow Dual Brush Pen Art Markers",
      image: "https://images-na.ssl-images-amazon.com/images/I/717FzByCecL._SL1500_.jpg",
      price: 16.38,
      description: "Ideal for fine art, brush lettering, faux calligraphy, illustrations, water color illustrations, journaling and more! Set of 9 colors and 1 blender pen, with flexible brush tip and fine tip in one marker. Durable and flexible nylon fiber brush tip, creates medium or bold strokes by changing brush pressure.",
      id: 6
    },
    {
      name: "Shallyshop Bamboo Matcha Brush Bamboo Whisk",
      image: "https://images-na.ssl-images-amazon.com/images/I/614YPHAC6OL._SL1034_.jpg",
      price: 35.00,
      description: "The silo out fine sieve into a bowl of tea powder, injection with boiling water, while stirring rapidly with tea bamboo brush for utensils hitting tea, make foam, foam floating on the soup. With fresh white tea color, and tea foam to keep long residence time as tea superb technical standards.",
      id: 7
    },
    {
      name: "Shea Moisture Coconut & Hibiscus Curl & Style Milk",
      image: "https://images-na.ssl-images-amazon.com/images/I/714MmCN8jVL._SL1500_.jpg",
      price: 8.39,
      description: "It gives you soft, shiny, natural, bouncy hair. Recommended for daily use. It improves manageability.",
      id: 8
    },
    {
      name: "Strathmore 20 Sheet Bristol Pad",
      image: "https://images-na.ssl-images-amazon.com/images/I/71IjZDqvdiL._SL1200_.jpg",
      price: 7.83,
      description: "Strathmore 300 Series STR-342-9. 9inx12in White.Ideal for pen, ink, mechanical drawing, air brush, and marker. 100 lb. / 270 gsm acid free smooth surface perfect for fine detail work.",
      id: 9
    },
    {
      name: "Kindle",
      image: "https://images-na.ssl-images-amazon.com/images/I/61Ww4abGclL._SL1000_.jpg",
      price: 59.99,
      description: "Adjustable front light lets you read comfortably for hours—indoors and outdoors, day and night. Purpose-built for reading, with a 167 ppi glare-free display that reads like real paper, even in direct sunlight. Read distraction-free. Highlight passages, look up definitions, translate words, and adjust text size—without ever leaving the page.",
      id: 10
    },
    {
      name: "Howard the Duck (Special Edition)",
      image: "https://images-na.ssl-images-amazon.com/images/I/91e1fUYburL._SL1500_.jpg",
      price: 5.00,
      descripion: "From executive producer George Lucas and the pages of Marvel Comics comes Howard the Duck, an unbelievably funny comedy about a fast-talking, cigar-chomping, beerloving duck from a parallel universe who crashes to Earth and somehow winds up in Cleveland. As Howard attempts to return to his own planet, he falls in love with rock singer Beverly Switzler (Lea Thompson, Back to the Future) and must battle an evil invader known as the Dark Overlord. This wacky, elaborately produced spoof of life, love, comic books and horror movies featuring out-of-this-world special effects is a treasure the whole family can enjoy.",
      id: 11
    },
    {
      name: "Carousel King Gumball Machine",
      image: "https://images-na.ssl-images-amazon.com/images/I/41HhMONsrnL.jpg",
      price: 70.08,
      description: "Our largest Gumball Bank combines a 7.5(19.05 cm) cast metal base with a 7.5(19.05 cm) clear glass globe for an impressive 15(38.1 cm) height. The solid cast metal base gives it a substantial feel and stability. The internally threaded metal bottom plate can be mounted on top of the cast metal floor stand, which is 23(58.42 cm) tall, bringing the overall height to approximately 38(96.52 cm) with both Gumball Bank and Stand.",
      id: 12
    },
    {
      name: "The Alchemist",
      image: "https://images-na.ssl-images-amazon.com/images/I/516c6gUQLaL._SX329_BO1,204,203,200_.jpg",
      price: 12.99,
      description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined.",
      id: 13
    },
    {
      name: "Big Blue Marble Planet Earth Cool Snow Globe",
      image: "https://images-na.ssl-images-amazon.com/images/I/71BpX9KNnlL._SL1500_.jpg",
      price: 54.80,
      description: "When shaken, brilliant silver flitter surrounds the planet like stars. Big Blue Marble will look fantastic in a study or a reading nook. And remember, in our fast-paced world snow globes make treasured gifts. They give people peaceful quiet moments and cherished memories to last a lifetime.",
      id: 14
    },
    {
      name: "Nongs Khao, Sauce Man Gai, 12 Ounce",
      image: "https://images-na.ssl-images-amazon.com/images/I/81HOwfwL7uL._SL1500_.jpg",
      price: 12.00,
      description: "Nong's Khao Man Gai Sauce has gotten a lot of attention in Portland, OR. This sauce was born in Portland's thriving food cart scene. This sauce can be used as a marinade, a sauce on a sandwhich or a burrito. Why not mix it up? Handmade in Portland, OR. 12 oz.",
      id: 15
    },
    {
      name: "Poop Emoji Farting Plush Toy",
      image: "https://images-na.ssl-images-amazon.com/images/I/71%2BJZuZS2YL._SL1000_.jpg",
      price: 15.95,
      description: "Simply Squeeze Your Fart Buddy’s Cute Tummy & Hear Him Make 7 Different Funny Fart Sounds! Entertain your dog (or yourself) with this super soft and cute Poop Emoji plush toy.",
      id: 16
    },
    {
      name: "Totoro Onesie",
      image: "https://images-na.ssl-images-amazon.com/images/I/61GD6aUxIhL._AC_UY606_.jpg",
      price: 27.99,
      description: "Made of Top Flannel. A Special Blend of Comfort and Fun, These Plush Materials are Very Soft to The Touch and Will Keep You Warm During Those Cold Winter Months.",
      id: 17
    },
    {
      name: "Celeb Luxury Viral Colorditioner: Color Depositing Conditioner",
      image: "https://images-na.ssl-images-amazon.com/images/I/81gNAbUb3WL._SL1500_.jpg",
      price: 40.00,
      description: "Celeb Luxury’s Colorditioners allow you to condition and color your hair at the same time. The semi temporary color lets you keep up your coloring between salon visits and prevents fading so your look is always on point. The vegan formula is safe for regular use and does not contain sulfates, parabens, PPD, ammonia, or peroxide.",
      id: 18
    },
    {
      name: "Blue Light Blocking Glasses",
      image: "https://images-na.ssl-images-amazon.com/images/I/51lv3hfmZWL._AC_UX679_.jpg",
      price: 19.90,
      description: "Glasses lens are designed using the American HEV-Adsorb substrate absorption technology. It can absorb high-energy blue light. The lens was made of a fully transparent base, without adding any pigment, while maintaining high light transmittance. Less reflective, no affect reading, and almost no color difference.",
      id: 19
    },
    {
      name: "Black Forest Gummy Bears Candy",
      image: "https://images-na.ssl-images-amazon.com/images/I/81L3O37JtUL._SL1500_.jpg",
      price: 14.99,
      description: "You know 'em, love 'em, now get your hands on some Black Forest Gummy Bears. Made with real fruit juice, fat-free & gluten-free, each little gummy bear is as delicious as the last & the resealable bag keeps them fresh.",
      id: 20
    },
  ];
  app.get("/", function(req,res){
    var data ={
      items:[]
    };
    for (var i =0; i<items.length ;i+=1){
      data.items.push(items[i]);
    }
    res.render("index",data);
  });

  app.get("/item/:id",function(req,res){
    var indexItem = req.params.id-1;
    console.log(indexItem);
    res.render("itemsDescription",items[indexItem]);
  });

<<<<<<< HEAD
  app.get("/item/:id",function(req,res){
    var indexItem = req.params.id-1;
    console.log(indexItem);
    res.render("itemsDescription",items[indexItem]);
  });

=======
>>>>>>> 86da2519c70cf5e28c2301e123d5cb1c19922d73
  //reviews api route
  app.get("/api/reviews", function(req,res){
    db.Reviews.findAll({}).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  //reviews by item
  app.get("/api/item/:id",function(req,res){
    db.Reviews.findAll({
      where: {
        itemID: req.params.id
      }
    }).then(function(dbReview){
      res.json(dbReview);
    });
  });

  app.post("/api/reviews", function(req, res) {
    db.Reviews.create(req.body).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });
  app.put("/api/reviews", function(req, res) {
    db.Reviews.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });
  app.delete("/api/reviews/:id", function(req, res) {
    db.Reviews.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

};
