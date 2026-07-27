const SERVICES_DATA = {
    "tubs": {
        title: "Premium Ice Cream Tubs",
        titleHTML: "Premium Ice Cream <span>Tubs</span>",
        tagline: "Artisanal gourmet tubs crafted with 100% natural cream and real ingredients.",
        image: "images/service-tubs.png",
        badge: "Artisanal Selection",
        longDesc: "Our Premium Ice Cream Tubs are handcrafted in small batches to preserve ultra-dense texture and intense natural flavor. We blend 100% organic farm-fresh milk, premium cream, Madagascar vanilla, and authentic cocoa to create an unforgettable dessert experience right in your freezer.",
        highlights: [
            "100% Natural Farm Cream & Eggless Recipe",
            "Zero Artificial Flavors or Preservatives",
            "Insulated Cold-Lock Packaging Included",
            "Over 24 Signature & Exotic Flavors Available"
        ],
        ingredients: "Organic Whole Milk, Sweet Cream, Cane Sugar, Natural Fruits & Cocoa",
        quality: "Small-Batch Churned (ISO Certified)",
        bestFor: "Home Cravings, Family Movie Nights, Dinner Gifts",
        availability: "Fresh Batch Daily (500ml & 1 Liter Tubs)",
        timeline: [
            { step: "01", icon: "fa-cow", title: "Organic Dairy", desc: "Fresh whole farm milk and sweet cream arrive every morning." },
            { step: "02", icon: "fa-seedling", title: "Natural Flavoring", desc: "Infused with pure vanilla pods, roasted nuts, and cocoa." },
            { step: "03", icon: "fa-snowflake", title: "Slow Churning", desc: "Slow-churned to eliminate air bubbles for maximum rich density." },
            { step: "04", icon: "fa-box", title: "Cold Seal", desc: "Sealed in eco-friendly insulated tubs with temperature monitoring." }
        ],
        pairings: [
            { badge: "Classic Duo", title: "Madagascar Vanilla & Hot Fudge", desc: "Classic rich vanilla paired with warm Belgian dark chocolate drizzle.", tags: ["Hot Fudge", "Roasted Cashews", "Waffle Chips"] },
            { badge: "Berry Delight", title: "Wild Strawberry & White Chocolate", desc: "Fresh strawberry ice cream swirled with crushed white chocolate flakes.", tags: ["Berry Coulis", "White Choco", "Mint Leaf"] },
            { badge: "Decadent Nut", title: "Belgian Chocolate & Hazelnut", desc: "Ultra-dense cocoa tub layered with caramelized roasted hazelnut chunks.", tags: ["Hazelnut Paste", "Brownie Bits", "Choco Powder"] }
        ],
        pricing: [
            { name: "Single Scoop Tub", price: "₹149", sub: "350ml Tub", popular: false, features: ["Choice of 1 Flavor", "Eco-friendly Spoon", "Insulated Pack", "Standard Delivery"] },
            { name: "Double Delights", price: "₹279", sub: "500ml Tub", popular: true, features: ["Mix Up to 2 Flavors", "Free Waffle Cone", "Cold-Lock Pouch", "Express Delivery"] },
            { name: "Family Gourmet", price: "₹499", sub: "1000ml Tub", popular: false, features: ["Choice of 3 Flavors", "2 Free Toppings", "Insulated Box", "Priority Delivery"] },
            { name: "Party Box (4 Tubs)", price: "₹1,699", sub: "4 x 1000ml", popular: false, features: ["Custom Flavor Box", "Assorted Waffle Cones", "Free Hot Fudge Jar", "Scheduled Delivery"] }
        ],
        gallery: [
            { image: "images/service-tubs.png", title: "Gourmet Artisanal Tub", badge: "Handcrafted" },
            { image: "images/choco-chunk.png", title: "Belgian Choco Chunks", badge: "Premium" },
            { image: "images/strawberry-icecream.png", title: "Real Strawberry Scoop", badge: "100% Natural" },
            { image: "images/chocolate-icecream.png", title: "Dark Chocolate Gelato", badge: "Decadent" },
            { image: "images/ice-cream-bowl.png", title: "Fresh Sundae Base", badge: "Signature" },
            { image: "images/service-family.png", title: "Multi-Flavor Tub Pack", badge: "Sharing" }
        ],
        faqs: [
            { q: "How long do the ice cream tubs stay frozen during delivery?", a: "We use double-walled insulated thermal bags packed with dry ice. Your ice cream is guaranteed to arrive perfectly frozen and firm for up to 45 minutes of transit." },
            { q: "Are all your ice cream tubs 100% eggless?", a: "Yes! All Cho'ice World ice creams are 100% vegetarian and eggless, made strictly with pure farm dairy and natural plant-based ingredients." },
            { q: "Can I request custom flavor combinations in one tub?", a: "xml:space='preserve' Absolutely! Our 500ml and 1000ml tubs allow you to select up to 3 custom flavor layers of your choice." },
            { q: "How should I store the ice cream tub after opening?", a: "Store the tub in your freezer at -18°C or colder. For optimal softness, let it sit at room temperature for 2-3 minutes before scooping." },
            { q: "What is the shelf life of Cho'ice World ice cream tubs?", a: "Unopened tubs remain fresh in deep freeze for up to 90 days. Once opened, we recommend enjoying within 14 days for peak flavor freshness." }
        ],
        ctaTitle: "Craving Gourmet Ice Cream Right Now?"
    },

    "milkshakes": {
        title: "Classic Milkshakes",
        titleHTML: "Classic <span>Milkshakes</span>",
        tagline: "Thick, velvety hand-blended shakes topped with whipped cream and crunch.",
        image: "images/milkshake-glass.png",
        badge: "Hand-Blended Masterpiece",
        longDesc: "Indulge in our signature thick milkshakes, blended to creamy perfection using real ice cream scoops and rich whole milk. Loaded with crushed Oreos, Belgian chocolate, fresh strawberries, and topped with a generous swirl of whipped cream.",
        highlights: [
            "Made with Real Ice Cream Scoops (No Powder Mixes)",
            "Rich & Extra Thick Velvety Consistency",
            "Customizable Sweetness & Dairy Alternatives",
            "Served in Spill-Proof Chilled Cups"
        ],
        ingredients: "Real Ice Cream, Fresh Milk, Whipped Cream, Crushed Toppings",
        quality: "Blended Fresh Upon Order",
        bestFor: "On-the-go Treat, Youth Hangouts, Evening Snack",
        availability: "Served Hot & Chilled All Day",
        timeline: [
            { step: "01", icon: "fa-ice-cream", title: "Scoop Base", desc: "Generous scoops of artisanal ice cream added to the blender." },
            { step: "02", icon: "fa-blender", title: "Creamy Blend", desc: "Blended with chilled dairy milk for 45 seconds to achieve silky thickness." },
            { step: "03", icon: "fa-whiskey-glass", title: "Drizzle & Fill", desc: "Glasses lined with warm chocolate fudge or berry coulis." },
            { step: "04", icon: "fa-wand-magic-sparkles", title: "Crown Topping", desc: "Finished with whipped cream, sprinkles, and a crispy waffle stick." }
        ],
        pairings: [
            { badge: "Crunch Lover", title: "Oreo Overload & Vanilla Cream", desc: "Crushed Oreo cookies blended with Madagascar vanilla ice cream.", tags: ["Crushed Oreos", "Whipped Cream", "Choco Syrup"] },
            { badge: "Fruity Burst", title: "Strawberry Cream & White Choco", desc: "Fresh strawberry reduction blended with thick vanilla gelato.", tags: ["Strawberry Slice", "White Choco Drizzle", "Wafer Stick"] },
            { badge: "Nutty Fusion", title: "Nutella Hazelnut & Cocoa", desc: "Creamy Nutella churned with dark chocolate scoops and hazelnut paste.", tags: ["Nutella Swirl", "Roasted Hazelnut", "Cocoa Powder"] }
        ],
        pricing: [
            { name: "Classic Shake", price: "₹129", sub: "300ml Glass", popular: false, features: ["Vanilla, Chocolate or Strawberry", "Whipped Cream", "Spill-Proof Lid", "Standard Delivery"] },
            { name: "Thick Freakshake", price: "₹199", sub: "450ml Glass", popular: true, features: ["Loaded Oreo or Nutella", "Brownie & Waffle Topping", "Free Choco Chip Sprinkles", "Express Delivery"] },
            { name: "Twin Combo", price: "₹349", sub: "2 x 450ml", popular: false, features: ["Any 2 Thick Shakes", "Double Toppings", "Cold Pouch", "Priority Delivery"] },
            { name: "Party Shake Bar (10 Pack)", price: "₹1,499", sub: "10 x 300ml", popular: false, features: ["Assorted Favorites", "Straw & Lid Pack", "Insulated Delivery", "Event Box"] }
        ],
        gallery: [
            { image: "images/milkshake-glass.png", title: "Signature Thick Shake", badge: "Bestseller" },
            { image: "images/oreo-shake.png", title: "Loaded Oreo Freakshake", badge: "Customer Fav" },
            { image: "images/strawberry-shake.png", title: "Fresh Strawberry Shake", badge: "Real Fruit" },
            { image: "images/service-sundaes.png", title: "Whipped Cream Crown", badge: "Decadent" },
            { image: "images/choco-chunk.png", title: "Choco Fudge Drizzle", badge: "Rich Cocoa" },
            { image: "images/service-party.png", title: "Party Shake Station", badge: "Event Ready" }
        ],
        faqs: [
            { q: "Do you offer vegan or dairy-free milkshake options?", a: "Yes! We offer almond milk and oat milk substitutes combined with our dairy-free vegan sorbets for a delicious plant-based shake." },
            { q: "How do you prevent milkshakes from melting during shipping?", a: "Our milkshakes are made extra thick with dense ice cream scoops and transported in thermal freeze-jackets so they stay ice-cold." },
            { q: "Are the milkshakes made with real ice cream scoops or powder?", a: "Every Cho'ice World milkshake is blended with 3 full scoops of real ice cream and fresh farm milk — never reconstituted powders." },
            { q: "Can I customize sweetness levels or request extra whipped cream?", a: "Yes, you can request custom sweetness, extra toppings, or low-sugar options when placing your order." },
            { q: "What spill-proof packaging do you use for milkshake delivery?", a: "We seal our cups with airtight foil lids and place them in sturdy cardboard bottle carriers inside thermal delivery bags." }
        ],
        ctaTitle: "Ready for the Thickest Shake in Town?"
    },

    "sundaes": {
        title: "Signature Sundaes",
        titleHTML: "Signature <span>Sundaes</span>",
        tagline: "Multi-layered dessert bowls overflowing with fudge, nuts, and cherries.",
        image: "images/service-sundaes.png",
        badge: "Showstopper Desserts",
        longDesc: "Our Signature Sundaes are a feast for both the eyes and the palate. Featuring layers of rich ice cream scoops, hot fudge chocolate, roasted almonds, brownie cubes, and topped with maraschino cherries.",
        highlights: [
            "3 to 5 Layered Gourmet Creations",
            "Warm Belgian Chocolate Drizzle Included",
            "Crispy Roasted Nuts & Brownie Chunk Additions",
            "Served in Premium Crystal Glass Bowls"
        ],
        ingredients: "Ice Cream Scoops, Hot Fudge, Roasted Almonds, Cherries, Brownie",
        quality: "Handcrafted Layering",
        bestFor: "Celebrations, Romantic Dates, Dessert Lovers",
        availability: "Dine-In & Takeaway Kits",
        timeline: [
            { step: "01", icon: "fa-bowl-food", title: "Fudge Base", desc: "Warm Belgian chocolate sauce poured into the base." },
            { step: "02", icon: "fa-ice-cream", title: "Triple Scoop", desc: "Three complementary ice cream flavors stacked carefully." },
            { step: "03", icon: "fa-cookie", title: "Crunch Layers", desc: "Crushed cookies, roasted cashews, and brownie bits scattered." },
            { step: "04", icon: "fa-heart", title: "Cherry Top", desc: "Crown topping with fresh cream, wafer cones, and a cherry." }
        ],
        pairings: [
            { badge: "Chocolate Mania", title: "Triple Chocolate & Warm Brownie", desc: "Dark chocolate gelato over warm fudge brownie chunks.", tags: ["Warm Brownie", "Fudge Sauce", "Choco Chips"] },
            { badge: "Royal Nut", title: "Caramel Gold & Roasted Cashews", desc: "Butterscotch scoops drizzled with salted caramel and cashews.", tags: ["Caramel Sauce", "Cashews", "Wafer Cone"] },
            { badge: "Berry Crunch", title: "Strawberry Sorbet & Vanilla Dip", desc: "Refreshing berry scoops layered with whipped cream and sprinkles.", tags: ["Berry Syrup", "Rainbow Sprinkles", "Cherry"] }
        ],
        pricing: [
            { name: "Mini Sundae", price: "₹169", sub: "Single Portion", popular: false, features: ["2 Scoops Ice Cream", "Hot Fudge & Nuts", "Cherry Top", "Standard Box"] },
            { name: "Royal Sundae Bowl", price: "₹269", sub: "Double Portion", popular: true, features: ["3 Scoops Ice Cream", "Warm Brownie Base", "Roasted Almonds", "Wafer Cone Insert"] },
            { name: "Death by Chocolate", price: "₹349", sub: "Super Portion", popular: false, features: ["4 Scoops Chocolate", "Nutella & Fudge", "Brownie & Choco Chips", "Feeds 2 People"] },
            { name: "Family Sundae Bucket", price: "₹799", sub: "Mega Bucket", popular: false, features: ["6 Huge Scoops", "Assorted Toppings Box", "Hot Fudge Squeezer", "Feeds 4-6 People"] }
        ],
        gallery: [
            { image: "images/service-sundaes.png", title: "Royal Sundae Bowl", badge: "Signature" },
            { image: "images/choco-chunk.png", title: "Warm Brownie Sundae", badge: "Decadent" },
            { image: "images/ice-cream-bowl.png", title: "Fruit & Berry Bowl", badge: "Fresh" },
            { image: "images/chocolate-icecream.png", title: "Death By Chocolate", badge: "Must Try" },
            { image: "images/service-waffles.png", title: "Waffle Sundae Combo", badge: "Hot & Cold" },
            { image: "images/service-tubs.png", title: "Takeaway Sundae Kit", badge: "DIY Fun" }
        ],
        faqs: [
            { q: "Can I customize the scoops in my sundae?", a: "Yes, you can swap any scoop flavor with your favorite choice from our display freezer!" },
            { q: "Is the hot chocolate fudge served separately for delivery?", a: "Yes, for takeaway and delivery orders, we pack the hot fudge in a separate container so your sundae stays crisp and frozen." },
            { q: "What crunchy toppings are included in signature sundaes?", a: "Our sundaes come with roasted almonds, crushed cashews, brownie chunks, wafer cones, and maraschino cherries." },
            { q: "Do you offer sugar-free or low-calorie sundae options?", a: "Yes! We offer low-sugar vanilla and dark chocolate sorbet bases topped with fresh fruit slices and roasted nuts." },
            { q: "Are sundaes suitable for takeaway and home delivery?", a: "Yes! We pack sundaes in sturdy multi-compartment boxes with ice gel packs so toppings stay separated until eating." }
        ],
        ctaTitle: "Experience the Ultimate Sundae Magic!"
    },

    "waffles": {
        title: "Belgian Waffles",
        titleHTML: "Belgian <span>Waffles</span>",
        tagline: "Crispy golden waffles served warm with chocolate, berries, and ice cream.",
        image: "images/service-waffles.png",
        badge: "Freshly Baked",
        longDesc: "Baked fresh to order, our Belgian Waffles feature a light, crispy exterior and fluffy center. Drizzled generously with melted Belgian milk chocolate, dark chocolate, fresh strawberry slices, and served with a side scoop of vanilla ice cream.",
        highlights: [
            "Baked Fresh On-Demand in 4 Minutes",
            "Made with Original Belgian Waffle Batter",
            "Pure Melted Chocolate (No Syrups)",
            "Paired with Premium Vanilla Gelato"
        ],
        ingredients: "Belgian Batter, Melted Chocolate, Strawberries, Vanilla Scoop",
        quality: "Made Fresh to Order",
        bestFor: "Breakfast Treats, Afternoon Tea, Desserts",
        availability: "Made Fresh Every 5 Mins",
        timeline: [
            { step: "01", icon: "fa-stroopwafel", title: "Fresh Batter", desc: "Whisked organic batter poured onto cast iron waffle plates." },
            { step: "02", icon: "fa-fire", title: "Golden Bake", desc: "Baked at precise 200°C for crisp golden grid lines." },
            { step: "03", icon: "fa-fill-drip", title: "Chocolate Drizzle", desc: "Generously drizzled with melted milk and dark chocolate." },
            { step: "04", icon: "fa-ice-cream", title: "Ice Cream Pair", desc: "Served hot alongside a cold scoop of Madagascar vanilla." }
        ],
        pairings: [
            { badge: "Ultimate Cocoa", title: "Double Belgian Choco & Vanilla", desc: "Golden waffle loaded with milk chocolate and cold vanilla gelato.", tags: ["Belgian Milk Choco", "Vanilla Scoop", "Butter Crunch"] },
            { badge: "Berry Fresh", title: "Strawberry Drizzle & Dark Choco", desc: "Fresh strawberries paired with rich 70% dark Belgian chocolate.", tags: ["Fresh Strawberry", "Dark Choco", "Powdered Sugar"] },
            { badge: "Nutty Bliss", title: "Caramel Cashew & Brown Sugar", desc: "Salted caramel drizzle with roasted cashew crunch and whipped cream.", tags: ["Caramel Drizzle", "Roasted Cashews", "Whipped Cream"] }
        ],
        pricing: [
            { name: "Single Waffle Slice", price: "₹149", sub: "1 Quarter", popular: false, features: ["Chocolate Drizzle", "Butter Crunch", "Paper Tray", "Takeaway Ready"] },
            { name: "Classic Waffle & Scoop", price: "₹249", sub: "Half Waffle", popular: true, features: ["Melted Chocolate", "1 Vanilla Scoop", "Fresh Strawberries", "Eco Box"] },
            { name: "Triple Choco Waffle", price: "₹329", sub: "Full Waffle", popular: false, features: ["Dark, Milk & White Choco", "2 Ice Cream Scoops", "Choco Chips", "Feeds 2 People"] },
            { name: "Waffle Party Box", price: "₹899", sub: "4 Full Waffles", popular: false, features: ["4 Assorted Waffles", "4 Ice Cream Scoops", "Toppings Tray", "Event Box"] }
        ],
        gallery: [
            { image: "images/service-waffles.png", title: "Belgian Chocolate Waffle", badge: "Freshly Baked" },
            { image: "images/strawberry-half.png", title: "Strawberry Waffle Delight", badge: "Real Fruit" },
            { image: "images/choco-chunk.png", title: "Triple Choco Waffle", badge: "Decadent" },
            { image: "images/ice-cream-bowl.png", title: "Hot Waffle & Cold Gelato", badge: "Perfect Combo" },
            { image: "images/milkshake-glass.png", title: "Waffle & Shake Combo", badge: "Popular Pair" },
            { image: "images/service-party.png", title: "Live Waffle Station", badge: "Event Special" }
        ],
        faqs: [
            { q: "How do you ensure waffles stay crispy when delivered?", a: "We use specially vented thermal boxes that allow steam to escape while holding heat, ensuring your waffle arrives warm and crisp." },
            { q: "Are the waffles eggless and baked fresh to order?", a: "Yes! Our Belgian waffles are 100% eggless and baked fresh on cast-iron irons within 4 minutes of your order." },
            { q: "Can I order extra toppings, melted chocolate, or gelato scoops?", a: "Yes, you can add extra Belgian chocolate drizzles, roasted nuts, or additional ice cream scoops when ordering." },
            { q: "How long does it take to bake a fresh waffle order?", a: "Each waffle is freshly baked in 4-5 minutes, ensuring a golden crispy crust and fluffy warm center." },
            { q: "Can waffles be reheated if consumed later at home?", a: "Yes! Pop the waffle in an oven or toaster for 90 seconds at 180°C to restore crispness before pouring syrup." }
        ],
        ctaTitle: "Treat Yourself to Hot Golden Waffles!"
    },

    "family-packs": {
        title: "Family Combo Packs",
        titleHTML: "Family Combo <span>Packs</span>",
        tagline: "Curated celebration boxes packed with tubs, popsicles, cones, and crunch.",
        image: "images/service-family.png",
        badge: "Value Celebration",
        longDesc: "Bring the whole family together with our specially curated Family Combo Packs. Includes an assortment of 1L ice cream tubs, waffle cones, gourmet topping jars, and fruity popsicles designed for ultimate sharing joy.",
        highlights: [
            "Saves 25% Compared to Individual Purchases",
            "Includes Tubs, Cones, Syrups & Toppings",
            "Free Heavy-Duty Thermal Ice Cooler Box",
            "Feeds 4 to 12 Family Members"
        ],
        ingredients: "Assorted Tubs, Fresh Cones, Topping Jars, Popsicles",
        quality: "Curated Value Pack",
        bestFor: "Family Dinners, Sunday Reunions, Weekend Treats",
        availability: "Pre-Packed & Ready to Ship",
        timeline: [
            { step: "01", icon: "fa-boxes-packing", title: "Pack Selection", desc: "Selecting bestselling tub flavor combinations." },
            { step: "02", icon: "fa-ice-cream", title: "Cone & Topping", desc: "Adding fresh waffle cones and jarred topping condiments." },
            { step: "03", icon: "fa-snowflake", title: "Dry-Ice Seal", desc: "Packing in heavy-duty cooler bags with dry ice." },
            { step: "04", icon: "fa-truck-fast", title: "Fast Dispatch", desc: "Dispatched straight to your home doorstep." }
        ],
        pairings: [
            { badge: "Family Favorite", title: "Vanilla, Choco & Mango Tubs", desc: "3 crowd-pleasing flavors packed together for kids and parents.", tags: ["3 x 1L Tubs", "12 Waffle Cones", "Hot Fudge Jar"] },
            { badge: "Party Sharing", title: "Sundae Bucket & Cookie Kit", desc: "Build-your-own sundae kit with brownie bits and crunch toppings.", tags: ["Sundae Bucket", "Crushed Oreos", "Sprinkles Jar"] },
            { badge: "Kids Joy Pack", title: "Popsicles & Mini Sundaes", desc: "Assorted fruity popsicles paired with mini sundae cups for kids.", tags: ["6 Popsicles", "4 Sundae Cups", "Rainbow Sprinkles"] }
        ],
        pricing: [
            { name: "Mini Family Treat", price: "₹449", sub: "Feeds 2-3", popular: false, features: ["1 x 500ml Tub", "2 Waffle Cones", "1 Mini Fudge Bottle", "Standard Delivery"] },
            { name: "Small Family Pack", price: "₹699", sub: "Feeds 3-4", popular: false, features: ["1 x 1000ml Tub", "4 Waffle Cones", "1 Topping Jar", "Insulated Bag"] },
            { name: "Grand Family Combo", price: "₹1,199", sub: "Feeds 6-8", popular: true, features: ["2 x 1000ml Tubs", "8 Waffle Cones", "2 Topping Jars", "Free Hot Fudge Jar"] },
            { name: "Mega Celebration Box", price: "₹1,899", sub: "Feeds 10-12", popular: false, features: ["3 x 1000ml Tubs", "12 Cones & Popsicles", "3 Topping Jars", "Free Cooler Box"] }
        ],
        gallery: [
            { image: "images/service-family.png", title: "Grand Family Combo Box", badge: "Family Pack" },
            { image: "images/service-tubs.png", title: "Assorted 1000ml Tubs", badge: "Great Value" },
            { image: "images/service-party.png", title: "Kids Party Treat Kit", badge: "Fun Sharing" },
            { image: "images/ice-cream-bowl.png", title: "Build Your Own Sundae", badge: "Interactive" },
            { image: "images/oreo-shake.png", title: "Popsicles & Shake Addons", badge: "Family Treat" },
            { image: "images/service-sundaes.png", title: "Sundae Sharing Bucket", badge: "Party Favorite" }
        ],
        faqs: [
            { q: "Can we substitute flavors in the family pack?", a: "Yes! You can choose your preferred tub flavors when placing your order." },
            { q: "How many people does a Family Combo Pack typically feed?", a: "Our Small Pack feeds 3-4 people, Grand Combo feeds 6-8, and Mega Celebration Box feeds 10-12 family members." },
            { q: "Is a thermal ice cooler box included free with the pack?", a: "Yes! All Family Combo Packs are delivered inside a reusable heavy-duty thermal cooler box with dry ice." },
            { q: "Can I order a family pack for a weekend picnic or road trip?", a: "Absolutely! The dry-ice seal keeps the ice cream frozen solid for up to 3 hours during transport." },
            { q: "Do family packs include waffle cones and topping jars?", a: "Yes, every combo pack comes complete with crisp waffle cones, spoons, and jarred fudge toppings." }
        ],
        ctaTitle: "Bring Home the Ultimate Family Ice Cream Box!"
    },

    "birthday-party": {
        title: "Birthday Party Orders",
        titleHTML: "Birthday <span>Party</span> Orders",
        tagline: "Live ice cream stalls, custom dessert bars, and endless smiles for your party.",
        image: "images/service-party.png",
        badge: "Party Catering",
        longDesc: "Make your birthday unforgettable! We set up a live Cho'ice World ice cream counter at your party venue, complete with professional uniformed scoopers, customizable topping stations, milkshake machines, and waffle cones.",
        highlights: [
            "Live On-Site Ice Cream Scooping Counter",
            "Uniformed Catering Staff & Equipment Included",
            "Over 12 Interactive Toppings Bar",
            "Custom Branded Cups & Napkins"
        ],
        ingredients: "Fresh Ice Creams, Cones, Live Toppings Bar, Milkshake Stations",
        quality: "5-Star Catering Service",
        bestFor: "Kid's Birthdays, Milestones, Theme Parties",
        availability: "Advance Booking Required (3 Days Prior)",
        timeline: [
            { step: "01", icon: "fa-calendar-check", title: "Menu Planning", desc: "Selecting flavor lists and guest headcounts." },
            { step: "02", icon: "fa-truck-ramp-box", title: "Venue Setup", desc: "Setting up our portable refrigerated display cart." },
            { step: "03", icon: "fa-wand-magic-sparkles", title: "Live Scooping", desc: "Scooping fresh ice cream for your guests." },
            { step: "04", icon: "fa-broom", title: "Clean Up", desc: "Complete post-event cleanup by our team." }
        ],
        pairings: [
            { badge: "Kid's Favorite", title: "Interactive Sundae & Shake Bar", desc: "Live scooping stall with 8 colorful toppings and milkshake blenders.", tags: ["Live Scooper", "12 Toppings", "Mini Shakes"] },
            { badge: "Teen Party", title: "Freakshake & Waffle Counter", desc: "Live Belgian waffle baking station served with thick loaded freakshakes.", tags: ["Hot Waffles", "Freakshakes", "Photo Wall"] },
            { badge: "Grand Celebration", title: "Mega Ice Cream Cart & Live DJ", desc: "Custom ice cream carts decorated according to your birthday theme.", tags: ["Theme Cart", "Live DJ Setup", "Custom Napkins"] }
        ],
        pricing: [
            { name: "Silver Birthday", price: "₹4,999", sub: "Up to 30 Guests", popular: false, features: ["4 Flavors Ice Cream", "Waffle Cones & Cups", "2 Topping Bowls", "1 Scooping Staff"] },
            { name: "Gold Party Package", price: "₹8,999", sub: "Up to 60 Guests", popular: true, features: ["6 Flavors Ice Cream", "Live Waffle Counter", "4 Topping Bowls", "2 Scooping Staff"] },
            { name: "Platinum Extravaganza", price: "₹14,999", sub: "Up to 100 Guests", popular: false, features: ["8 Flavors + Milkshakes", "Live Waffles & Sundaes", "Full Topping Bar", "3 Scooping Staff"] },
            { name: "Ultimate Royal Feast", price: "₹24,999", sub: "Up to 150 Guests", popular: false, features: ["10 Flavors + Shakes + Waffles", "Unlimited Sundae Station", "Custom Theme Decorations", "4 Scooping Staff Included"] }
        ],
        gallery: [
            { image: "images/service-party.png", title: "Live Scooping Cart", badge: "Event Catering" },
            { image: "images/milkshake-glass.png", title: "Party Milkshake Station", badge: "Live Bar" },
            { image: "images/service-waffles.png", title: "Live Baked Waffles", badge: "Hot & Cold" },
            { image: "images/service-sundaes.png", title: "Kids Topping Bar", badge: "Fun Experience" },
            { image: "images/strawberry-shake.png", title: "Mini Party Shakes", badge: "Popular" },
            { image: "images/service-tubs.png", title: "Take-Home Gift Tubs", badge: "Party Favor" }
        ],
        faqs: [
            { q: "How far in advance should we book for a birthday party?", a: "We recommend booking at least 3 to 5 days in advance to secure your date and customize your menu." },
            { q: "Is uniformed scooping staff included with the party cart?", a: "Yes! All party packages include professional, background-checked catering staff to serve your guests." },
            { q: "How many guests can a live ice cream counter serve?", a: "Our standard counters comfortably serve 30 to 200+ guests with fast, continuous scooping." },
            { q: "Can we customize the flavor menu and topping selection?", a: "Yes! You can choose your favorite 4 to 8 ice cream flavors and up to 12 toppings from our catering menu." },
            { q: "What power or equipment requirements are needed at the venue?", a: "We only require a standard 15A electrical socket. Our team brings all display freezers, scoops, cups, and toppings!" }
        ],
        ctaTitle: "Book Cho'ice World Live Counter for Your Birthday!"
    },

    "corporate-orders": {
        title: "Bulk Corporate Orders",
        titleHTML: "Bulk <span>Corporate</span> Orders",
        tagline: "Customized branded gift hampers and dessert catering for corporate events.",
        image: "images/service-corporate.png",
        badge: "Corporate Catering",
        longDesc: "Impress clients, celebrate company milestones, and reward staff with luxury Cho'ice World dessert hampers. We offer custom logo packaging, dry-ice office deliveries, and grand corporate dessert counter installations.",
        highlights: [
            "Custom Logo Branding on Tubs & Gift Boxes",
            "GST Invoicing & Bulk Volume Discounts",
            "Pan-City Office Delivery in Cold Boxes",
            "Dedicated Corporate Account Manager"
        ],
        ingredients: "Gourmet Tubs, Artisan Chocolates, Customized Packaging",
        quality: "Executive Standard",
        bestFor: "Office Parties, Festival Gifts, Product Launches",
        availability: "Year-Round Bulk Supply",
        timeline: [
            { step: "01", icon: "fa-handshake", title: "Consultation", desc: "Discussing branding, headcount, and budget." },
            { step: "02", icon: "fa-pen-ruler", title: "Custom Branding", desc: "Printing company logo on tub labels and boxes." },
            { step: "03", icon: "fa-industry", title: "Batch Production", desc: "Fresh batch production in certified facility." },
            { step: "04", icon: "fa-building-shield", title: "Office Delivery", desc: "Direct delivery to your office reception in cold packs." }
        ],
        pairings: [
            { badge: "Executive Gift", title: "Branded Gourmet Tub Box", desc: "Customized 500ml ice cream tubs with your company logo and gift ribbon.", tags: ["Company Logo Sleeve", "Gourmet Flavors", "Dry Ice Pack"] },
            { badge: "Office Celebration", title: "Live Office Dessert Counter", desc: "Uniformed scooping counter setup in your office cafeteria.", tags: ["Live Catering", "6 Flavors", "GST Invoice"] },
            { badge: "Client Delight", title: "Custom Gift Hamper Basket", desc: "Premium wicker baskets filled with artisanal ice cream tubs and dry ice.", tags: ["Wicker Basket", "Logo Engraved", "Thank You Card"] }
        ],
        pricing: [
            { name: "Tier 1 Bulk", price: "₹9,999", sub: "50 Gift Packs", popular: false, features: ["500ml Branded Tubs", "Custom Sleeve Logo", "GST Invoice", "Single Location Drop"] },
            { name: "Tier 2 Corporate", price: "₹18,999", sub: "100 Gift Packs", popular: true, features: ["500ml Tubs + Chocolates", "Custom Ribbon & Card", "GST Invoice", "Multi-Floor Drop"] },
            { name: "Grand Office Event", price: "₹34,999", sub: "250+ Employees", popular: false, features: ["Live Counter Setup", "8 Flavors + Sundaes", "Full Catering Staff", "Custom Branding"] },
            { name: "Elite Executive Gala", price: "₹59,999", sub: "500+ Employees", popular: false, features: ["Double Live Counters", "All 12 Bestseller Flavors", "Branded Premium Cooler Boxes", "4 Dedicated Event Managers"] }
        ],
        gallery: [
            { image: "images/service-corporate.png", title: "Executive Gift Hampers", badge: "Branded" },
            { image: "images/service-tubs.png", title: "Custom Logo Tubs", badge: "Corporate" },
            { image: "images/service-party.png", title: "Office Party Counter", badge: "Live Setup" },
            { image: "images/service-sundaes.png", title: "VIP Dessert Platter", badge: "Luxury" },
            { image: "images/choco-chunk.png", title: "Artisan Chocolate Boxes", badge: "Gifting" },
            { image: "images/milkshake-glass.png", title: "Office Shake Bar", badge: "Refreshment" }
        ],
        faqs: [
            { q: "Can you print our company logo on the ice cream tub labels?", a: "Yes! We provide custom co-branded sleeves and tub stickers for orders above 30 units." },
            { q: "Do you provide GST invoices for corporate expense tax claims?", a: "Yes, all corporate invoices include full GST compliance for easy accounting and tax filing." },
            { q: "What is the minimum order quantity for custom corporate gift hampers?", a: "Our minimum order for custom branded hampers is 25 units." },
            { q: "Can you deliver to multiple office floors or branch locations pan-city?", a: "Yes! We coordinate scheduled multi-floor deliveries across multiple office locations simultaneously." },
            { q: "Are there volume discounts for large corporate events over 200 guests?", a: "Yes! We offer tiered volume discounts up to 30% off for large corporate gatherings and employee events." }
        ],
        ctaTitle: "Elevate Your Corporate Event with Cho'ice World!"
    },

    "seasonal-specials": {
        title: "Seasonal Specials",
        titleHTML: "Seasonal <span>Specials</span>",
        tagline: "Limited-edition recipes featuring rare seasonal fruits and holiday spices.",
        image: "images/service-seasonal.png",
        badge: "Limited Edition",
        longDesc: "Celebrate the changing seasons with our exclusive Limited-Edition Specials! Crafted with Alphonso mangoes in summer, fresh strawberries in winter, and festive spiced caramel during holidays.",
        highlights: [
            "100% Real Fresh Seasonal Fruit Chunks",
            "Available Only for 60 Days Per Season",
            "Exotic Spice & Berry Infusions",
            "Chef's Secret Recipe Batches"
        ],
        ingredients: "Seasonal Fresh Fruits, Organic Cream, Spices, Honey Drizzle",
        quality: "Limited Micro-Batch",
        bestFor: "Gourmet Foodies, Seasonal Treats, Gifting",
        availability: "Limited Stock Per Day",
        timeline: [
            { step: "01", icon: "fa-apple-whole", title: "Fruit Sourcing", desc: "Handpicking peak-season fresh fruits from orchards." },
            { step: "02", icon: "fa-blender", title: "Fresh Churn", desc: "Blending fresh fruit pulp directly with cold cream." },
            { step: "03", icon: "fa-star", title: "Garnish Addition", desc: "Garnishing with fruit slices, mint, and natural honey." },
            { step: "04", icon: "fa-certificate", title: "Specialty Seal", desc: "Numbered limited edition tub packaging." }
        ],
        pairings: [
            { badge: "Summer Delight", title: "Alphonso Mango & Coconut Gelato", desc: "Pure ratnagiri alphonso pulp churned with coconut cream.", tags: ["Alphonso Mango", "Coconut Flakes", "Mint"] },
            { badge: "Winter Magic", title: "Fresh Strawberry & White Choco", desc: "Fresh mahabaleshwar strawberries with melted white chocolate.", tags: ["Fresh Strawberry", "White Choco", "Vanilla"] },
            { badge: "Festive Joy", title: "Holiday Spiced Caramel & Apple", desc: "Spiced holiday caramel gelato layered with organic baked apple chunks.", tags: ["Holiday Spices", "Caramel Drizzle", "Baked Apple"] }
        ],
        pricing: [
            { name: "Single Seasonal Scoop", price: "₹189", sub: "350ml Tub", popular: false, features: ["Choice of 1 Seasonal Flavor", "Eco-friendly Spoon", "Insulated Pack", "Standard Delivery"] },
            { name: "Seasonal Tub (500ml)", price: "₹329", sub: "Single Tub", popular: true, features: ["Current Season Flavor", "Real Fruit Chunks", "Special Edition Tub", "Express Delivery"] },
            { name: "Trio Seasonal Box", price: "₹899", sub: "3 x 500ml", popular: false, features: ["All 3 Season Flavors", "Free Honey Drizzle", "Gift Packaging", "Priority Delivery"] },
            { name: "Festive Party Bundle", price: "₹1,699", sub: "4 x 500ml Tubs", popular: false, features: ["Mix Seasonal Flavors", "Assorted Waffle Cones", "Free Honey & Fudge Jar", "Scheduled Delivery"] }
        ],
        gallery: [
            { image: "images/service-seasonal.png", title: "Exotic Fruit Sorbet Dish", badge: "Summer Special" },
            { image: "images/strawberry-icecream.png", title: "Winter Strawberry Scoop", badge: "100% Real Fruit" },
            { image: "images/ice-cream-bowl.png", title: "Artisanal Seasonal Platter", badge: "Micro-Batch" },
            { image: "images/service-tubs.png", title: "Limited Edition Tub Seal", badge: "Collector's Pack" },
            { image: "images/strawberry-half.png", title: "Fresh Fruit Harvest", badge: "Organic" },
            { image: "images/chocolate-icecream.png", title: "Spiced Cocoa Special", badge: "Winter Edition" }
        ],
        faqs: [
            { q: "What is current seasonal flavor available?", a: "Currently, our Alphonso Mango Sorbet and Fresh Winter Strawberry Cream are in season!" },
            { q: "How long are seasonal special flavors available in stock?", a: "Each seasonal flavor is available strictly for 60 days while fresh fruit harvests last." },
            { q: "Are real fresh fruits used in seasonal recipes?", a: "Yes! We use 100% authentic fresh orchard fruits sourced directly from local organic growers." },
            { q: "Can seasonal specials be ordered in bulk or party packs?", a: "Yes, you can include seasonal special tubs in your family packs and party catering orders." },
            { q: "Do seasonal specials contain artificial colors or flavorings?", a: "Never! All vibrant colors and natural aromas come directly from real fresh fruit pulps and spices." }
        ],
        ctaTitle: "Try Our Limited-Edition Flavors Before They're Gone!"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    let serviceId = urlParams.get("service");

    if (!serviceId || !SERVICES_DATA[serviceId]) {
        serviceId = "tubs";
    }

    const data = SERVICES_DATA[serviceId];

    document.title = `${data.title} | Cho'ice~World Services`;

    const breadcrumbs = document.getElementById("breadcrumbActive");
    if (breadcrumbs) breadcrumbs.textContent = data.title;

    const titleEl = document.getElementById("serviceTitle");
    if (titleEl) titleEl.innerHTML = data.titleHTML || data.title;

    const taglineEl = document.getElementById("serviceTagline");
    if (taglineEl) taglineEl.textContent = data.tagline;

    const categoryBadge = document.getElementById("serviceCategoryBadge");
    if (categoryBadge) categoryBadge.innerHTML = `<i class="fa-solid fa-award"></i> ${data.badge}`;

    const mainImg = document.getElementById("serviceMainImg");
    if (mainImg) {
        mainImg.src = data.image;
        mainImg.alt = data.title;
    }

    const badgeEl = document.getElementById("serviceBadge");
    if (badgeEl) badgeEl.textContent = data.badge;

    const nameHeader = document.getElementById("serviceNameHeader");
    if (nameHeader) nameHeader.innerHTML = data.titleHTML || data.title;

    const longDesc = document.getElementById("serviceLongDescription");
    if (longDesc) longDesc.textContent = data.longDesc;

    const highlightsList = document.getElementById("highlightsList");
    if (highlightsList) {
        highlightsList.innerHTML = data.highlights.map(h => `
            <li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>
        `).join("");
    }

    document.getElementById("specIngredients").textContent = data.ingredients;
    document.getElementById("specQuality").textContent = data.quality;
    document.getElementById("specBestFor").textContent = data.bestFor;
    document.getElementById("specAvailability").textContent = data.availability;

    const timelineEl = document.getElementById("prepareTimeline");
    if (timelineEl) {
        timelineEl.innerHTML = data.timeline.map(item => `
            <div class="prep-card">
                <span class="prep-step-num">${item.step}</span>
                <div class="prep-icon"><i class="fa-solid ${item.icon}"></i></div>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        `).join("");
    }

    const pairingsGrid = document.getElementById("pairingsGrid");
    if (pairingsGrid && data.pairings) {
        pairingsGrid.innerHTML = data.pairings.map(item => `
            <div class="pairing-card">
                <span class="pairing-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> ${item.badge}</span>
                <h3 class="pairing-title">${item.title}</h3>
                <p class="pairing-desc">${item.desc}</p>
                <div class="pairing-tags">
                    ${item.tags.map(t => `<span class="tag-item"><i class="fa-solid fa-plus"></i> ${t}</span>`).join("")}
                </div>
            </div>
        `).join("");
    }

    const pricingGrid = document.getElementById("pricingGrid");
    if (pricingGrid) {
        pricingGrid.innerHTML = data.pricing.map(plan => `
            <div class="pricing-card ${plan.popular ? 'popular' : ''}">
                ${plan.popular ? '<span class="popular-badge">Most Popular</span>' : ''}
                <div class="pricing-header">
                    <h3 class="pricing-title">${plan.name}</h3>
                    <div class="pricing-price">${plan.price} <small>/ ${plan.sub}</small></div>
                </div>
                <ul class="pricing-features">
                    ${plan.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}
                </ul>
                <a href="tel:+919876543210" class="${plan.popular ? 'btn-primary' : 'btn-secondary'}">
                    <span>Order Now</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `).join("");
    }

    const galleryGrid = document.getElementById("galleryGrid");
    if (galleryGrid && data.gallery) {
        galleryGrid.innerHTML = data.gallery.map(item => `
            <div class="gallery-card">
                <div class="gallery-img-box">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="gallery-overlay-content">
                    <span class="gallery-badge">${item.badge}</span>
                    <h4 class="gallery-title">${item.title}</h4>
                </div>
            </div>
        `).join("");
    }

    const faqContainer = document.getElementById("faqAccordion");
    if (faqContainer) {
        faqContainer.innerHTML = data.faqs.map((faq, index) => `
            <div class="accordion-item ${index === 0 ? 'active' : ''}">
                <button class="accordion-header" type="button">
                    <span>${faq.q}</span>
                    <span class="accordion-icon"><i class="fa-solid fa-chevron-down"></i></span>
                </button>
                <div class="accordion-content">
                    <p>${faq.a}</p>
                </div>
            </div>
        `).join("");

        const headers = faqContainer.querySelectorAll(".accordion-header");
        headers.forEach(header => {
            header.addEventListener("click", () => {
                const item = header.parentElement;
                const isActive = item.classList.contains("active");

                faqContainer.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

                if (!isActive) {
                    item.classList.add("active");
                }
            });
        });
    }

    const ctaHeading = document.getElementById("ctaHeading");
    if (ctaHeading) ctaHeading.textContent = data.ctaTitle;

    const heroSec = document.querySelector(".detail-hero");
    const decos = document.querySelectorAll(".floating-deco");
    if (heroSec && window.innerWidth > 900) {
        heroSec.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 24;
            const y = (e.clientY / window.innerHeight - 0.5) * 24;
            decos.forEach((d, i) => {
                d.style.transform = `translate(${x * (i + 1) * 0.4}px, ${y * (i + 1) * 0.4}px)`;
            });
        });
    }

    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".prep-card, .pairing-card, .pricing-card, .gallery-card, .accordion-item");
    revealElements.forEach((el, idx) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `opacity 0.6s ease ${idx * 0.06}s, transform 0.6s ease ${idx * 0.06}s`;
        revealObserver.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
