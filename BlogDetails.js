const BLOGS_DATA = {
    "top-10-flavours": {
        title: "Top 10 Ice Cream Flavours Everyone Loves Around the World",
        titleHTML: "Top 10 Ice Cream <span>Flavours</span> Everyone Loves Around the World",
        category: "Ice Cream Guide",
        date: "July 20, 2026",
        readTime: "5 Min Read",
        author: {
            name: "Chef Marc Antoine",
            role: "Head Pastry Chef & Master Churner",
            bio: "Chef Marc brings over 15 years of culinary expertise from Paris and Milan, specializing in slow-churned sorbets and artisanal ice creams.",
            avatarImg: "images/avatar-chef-marc.jpg"
        },
        coverImg: "images/blog-flavours.png",
        coverCaption: "Artisanal ice cream scoops churned in small batches with organic farm dairy.",
        tags: ["Ice Cream Flavors", "Dessert Guide", "Artisanal", "Bestsellers"],
        related: ["how-milkshakes-are-made", "signature-sundaes-secret", "premium-ingredients"],
        articleHTML: `
            <p class="lead-para">
                Ice cream is universally loved across cultures and generations. From timeless classic Madagascar vanilla to exotic Alphonso mango and dark Belgian cocoa, ice cream brings instant happiness to people of all ages.
            </p>

            <h2>1. Madagascar <span>Vanilla</span> Bean</h2>
            <p>
                Contrary to being simple, true vanilla bean ice cream is the gold standard of ice cream artistry. At Cho'ice World, we infuse real crushed vanilla pods from Madagascar into 100% organic farm sweet cream, yielding a fragrant, velvety texture. The warm floral aroma of genuine vanilla pods, scraped by hand and steeped overnight in cream, produces a complexity that synthetic vanillin could never replicate. This is the base flavor from which all great ice cream artistry begins.
            </p>

            <blockquote class="magazine-quote">
                "Great ice cream starts with respect for raw ingredients. Vanilla is not basic—it is the canvas upon which all dessert masterpieces are painted."
                <footer>— Chef Marc Antoine, Cho'ice World Master Churner</footer>
            </blockquote>

            <h2>2. Rich Belgian <span>Dark</span> Chocolate</h2>
            <p>
                Crafted with 70% dark Belgian cocoa, this flavor satisfies even the most passionate chocoholics. We melt premium cocoa blocks directly into warm sweet cream before slow-churning to eliminate air pockets. The result is a beautifully dense, slightly bitter-sweet scoop with a silky melt that lingers long after each bite. Belgian chocolate ice cream is not just a flavor — it is an intense, multi-dimensional chocolate experience that sets real artisanal quality apart from commercial copies.
            </p>

            <h2>3. Mahabaleshwar Fresh <span>Strawberry</span></h2>
            <p>
                Made with handpicked Mahabaleshwar strawberries blended into natural sweet cream. Every scoop contains real fruit chunks and natural berry seeds — never synthetic flavoring. Sourced at peak ripeness from the lush strawberry farms of Mahabaleshwar, Maharashtra, these berries lend a vibrant natural sweetness balanced with a gentle tartness that keeps each scoop refreshing, not cloying. It is the kind of fruit ice cream that genuinely tastes like fresh-picked berries in every bite.
            </p>

            <div class="inline-gallery">
                <figure>
                    <img src="images/service-tubs.png" alt="Strawberry Scoop">
                    <figcaption>Fresh Strawberry Gelato Scoop</figcaption>
                </figure>
                <figure>
                    <img src="images/blog-ingredients.png" alt="Belgian Cocoa Scoop">
                    <figcaption>Belgian Dark Chocolate Scoop</figcaption>
                </figure>
            </div>

            <h2>4. Alphonso Mango <span>Sorbet</span></h2>
            <p>
                Known as the King of Mangoes, Ratnagiri Alphonso pulp provides a sweet, fragrant tropical burst that defines summer indulgence. Each batch is made exclusively with fresh-pressed Alphonso pulp — never from concentrate or artificial mango essence. The brilliant golden color, luscious custard-like consistency, and intensely floral aroma make this flavor a limited-edition sensation that sells out quickly every summer season. It is summer captured in a single, perfect scoop.
            </p>

            <h2>5. Roasted <span>Butterscotch</span> Crunch</h2>
            <p>
                Caramelized brown sugar butter combined with crunchy cashew praline bites creates a nostalgic texture favorite across India. The slow caramelization of pure butter and brown sugar produces a deeply rich toffee note, while the roasted cashew praline adds a satisfying crunch that contrasts beautifully with the smooth cream base. This flavor is consistently one of the top three bestsellers at Cho'ice World, beloved by children and adults alike for its warm, comforting character.
            </p>

            <div class="tip-box">
                <h4><i class="fa-solid fa-lightbulb"></i> Pro Dessert Tip</h4>
                <p>To experience maximum flavor depth, let frozen ice cream tubs sit at room temperature for 3 minutes before scooping. This softens the fat crystals and releases rich aromatic aromas!</p>
            </div>

            <h2>6. Mint <span>Chocolate</span> Chip</h2>
            <p>
                Refreshing peppermint cream folded with dark chocolate flakes for a crisp, cooling finish. We use natural peppermint oil extracted from fresh mint leaves rather than artificial mint flavoring, giving the ice cream a clean, bright coolness that is invigorating rather than harsh. The shards of dark chocolate layered throughout provide a welcome bittersweet contrast that rounds out the flavor perfectly. It is the ideal palate cleanser between richer dessert courses.
            </p>

            <h2>7. Cookies & <span>Cream</span></h2>
            <p>
                Generous chunks of chocolate sandwich cookies crushed and swirled into silky vanilla gelato. We use premium double-stuffed sandwich cookies and crush them in varying sizes — from fine crumbs to generous chunks — so that every bite delivers a different texture experience. The contrast of the crisp, cocoa-flavored cookie pieces against the smooth, sweet vanilla base is what makes this flavor universally irresistible across every age group.
            </p>

            <h2>8. Salted <span>Caramel</span> Crunch</h2>
            <p>
                Slow-cooked golden caramel with a pinch of Himalayan pink salt and roasted nut brittles. The addition of Himalayan salt to our caramel base transforms what could be an overwhelmingly sweet flavor into a sophisticated, balanced experience that draws you back for one more scoop. The salted caramel ribbon is swirled through at the end of churning to maintain visible, indulgent streaks of golden caramel throughout every serving. Topped with house-made roasted cashew brittle for an irresistible crunch.
            </p>

            <h2>9. Pistachio <span>Supreme</span></h2>
            <p>
                Made with authentic roasted Sicilian pistachio paste — naturally nutty without artificial green dyes. True Sicilian pistachios, recognized as among the finest in the world, provide a deep, complex nut flavor that is earthy, slightly sweet, and remarkably aromatic. We blend the pistachio paste directly into the cream base before churning, creating a naturally pale beige-green scoop that tastes deeply and genuinely of real pistachios rather than artificial nut flavoring.
            </p>

            <h2>10. Ferrero Rocher <span>Hazelnut</span></h2>
            <p>
                Creamy milk chocolate fused with roasted hazelnut butter and crispy wafer bits for the ultimate luxury scoop. This flavor is inspired by the iconic Ferrero Rocher chocolate truffle and delivers every element of that premium experience in a frozen dessert form — the smooth hazelnut cream, the toasted chopped hazelnuts, the thin crispy wafer shell fragments, and the milk chocolate that ties it all together. Every spoonful is a genuine celebration of gourmet flavors at their most indulgent.
            </p>
        `
    },

    "how-milkshakes-are-made": {
        title: "How Our Fresh Milkshakes Are Made Behind the Scenes",
        titleHTML: "How Our Fresh <span>Milkshakes</span> Are Made Behind the Scenes",
        category: "Behind The Scenes",
        date: "July 18, 2026",
        readTime: "4 Min Read",
        author: {
            name: "Elena Rostova",
            role: "Beverage Innovator & Mixologist",
            bio: "Elena specializes in crafting thick milkshakes, craft mocktails, and milk substitutes for international cafe menus.",
            avatarImg: "images/avatar-elena.jpg"
        },
        coverImg: "images/blog-milkshakes.png",
        coverCaption: "Action shot pouring fresh milk and real ice cream scoops into commercial blenders.",
        tags: ["Milkshake Recipes", "Behind The Scenes", "Thick Shakes", "Dairy Fresh"],
        related: ["top-10-flavours", "signature-sundaes-secret", "summer-collection"],
        articleHTML: `
            <p class="lead-para">
                Ever wondered why Cho'ice World milkshakes are so thick, velvety, and irresistible? The secret lies in our strict rule: <strong>3 full scoops of real artisanal ice cream and zero artificial ice dilution.</strong>
            </p>

            <h2>Step 1: Selecting the Cold <span>Dairy</span> Base</h2>
            <p>
                Unlike commercial fast-food outlets that use instant liquid premixes, every shake at Cho'ice World starts with whole farm milk chilled to precisely 2°C. This cold-chain precision ensures that the milk retains its natural fat content and fresh taste without any dilution. We source our dairy exclusively from certified organic farms where cows graze on open pastures, producing milk with a naturally higher cream content that contributes directly to the shake's legendary thickness.
            </p>

            <blockquote class="magazine-quote">
                "Watery milkshakes happen when blenders are packed with ice cubes. We use zero ice—only dense ice cream scoops for pure creaminess!"
                <footer>— Elena Rostova, Beverage Director</footer>
            </blockquote>

            <h2>Step 2: Triple <span>Scoop</span> Blend</h2>
            <p>
                We add 3 heavy scoops of our slow-churned ice cream directly into high-speed vortex blenders along with pure cocoa, fresh berry coulis, or crushed cookies. The triple-scoop rule is non-negotiable at Cho'ice World — it is the fundamental reason our shakes achieve a consistency that you can eat with a spoon rather than sip through a straw. Each scoop is freshly pulled from the display freezer seconds before blending for maximum freshness.
            </p>

            <div class="inline-gallery">
                <figure>
                    <img src="images/milkshake-glass.png" alt="Oreo Freakshake">
                    <figcaption>Loaded Oreo Freakshake</figcaption>
                </figure>
                <figure>
                    <img src="images/service-seasonal.png" alt="Strawberry Shake">
                    <figcaption>Fresh Strawberry Milkshake</figcaption>
                </figure>
            </div>

            <h2>Step 3: Glass <span>Drizzle</span> & Layering</h2>
            <p>
                Before pouring, the inner walls of our chilled glasses are lined with warm Belgian dark chocolate fudge or wild berry syrup for artistic presentation. This layering technique ensures that every sip carries a streak of rich flavor topping even when drinking from the sides. The warm sauce also creates a beautiful visual contrast against the cold shake — a signature Cho'ice World presentation detail that transforms an ordinary glass into a showpiece dessert experience.
            </p>

            <div class="tip-box">
                <h4><i class="fa-solid fa-cookie-bite"></i> Custom Shake Tip</h4>
                <p>Looking for a lighter treat? You can request almond milk or oat milk substitutes combined with our fruit sorbets for a 100% dairy-free shake!</p>
            </div>

            <h2>Step 4: The Whipped <span>Cream</span> Crown</h2>
            <p>
                Each glass is topped with a generous spiral of fresh whipped cream, waffle chips, chocolate sprinkles, and a red cherry topper. The whipped cream is prepared fresh in-house every hour using pure dairy cream and a touch of vanilla sugar — never canned aerosol whipped cream. This final step is where presentation meets flavor, transforming the shake glass into the towering, Instagram-worthy creation that Cho'ice World is celebrated for across the city.
            </p>
        `
    },

    "signature-sundaes-secret": {
        title: "The Secret Behind Our Layered Signature Sundaes",
        titleHTML: "The Secret Behind Our Layered <span>Signature</span> Sundaes",
        category: "Dessert Secrets",
        date: "July 15, 2026",
        readTime: "6 Min Read",
        author: {
            name: "Chef Antonio Rossi",
            role: "Master Dessert Stylist",
            bio: "Chef Antonio brings 12 years of pastry artistry from Florence, designing multi-layered ice cream coupes and chocolate artwork.",
            avatarImg: "images/avatar-antonio.jpg"
        },
        coverImg: "images/service-sundaes.png",
        coverCaption: "Multi-layered signature sundae glass loaded with fudge, brownie chunks, and nuts.",
        tags: ["Sundaes", "Hot Fudge", "Brownie Base", "Dessert Architecture"],
        related: ["top-10-flavours", "how-milkshakes-are-made", "birthday-party-desserts"],
        articleHTML: `
            <p class="lead-para">
                A great sundae is not just ice cream in a bowl—it is an architectural symphony of hot and cold temperatures, crunchy and smooth textures, and contrasting flavors.
            </p>

            <h2>1. The Warm <span>Fudge</span> Base</h2>
            <p>
                Every Cho'ice World sundae begins at the bottom of a crystal glass bowl with a pool of 60°C warm Belgian dark chocolate fudge sauce or caramel drizzle. The heat of the sauce is carefully controlled — warm enough to remain pourable and create that signature hot-cold contrast with the ice cream above, but not so hot as to melt the scoops instantly. This warm fudge base is the most critical element in the sundae's architecture; it provides the flavor foundation that permeates every layered bite from the bottom up.
            </p>

            <blockquote class="magazine-quote">
                "The magic of a sundae happens when the hot chocolate fudge slowly melts the bottom layer of ice cream, creating a luscious dessert sauce."
                <footer>— Chef Antonio Rossi</footer>
            </blockquote>

            <h2>2. The Triple <span>Scoop</span> Stack</h2>
            <p>
                Next, we stack three complementary gelato flavors — for example, Dark Chocolate, Madagascar Vanilla, and Roasted Butterscotch. The art of flavor stacking is not random; the combinations are chosen by Chef Antonio to create a deliberate flavor journey as you eat from top to bottom. The top scoop is typically the lightest and most refreshing flavor, while the bottom scoop is the richest, designed to absorb the warm fudge base and slowly meld with it over the course of eating.
            </p>

            <div class="tip-box">
                <h4><i class="fa-solid fa-award"></i> Sundae Rule</h4>
                <p>Always pair intense dark cocoa scoops with sweet vanilla or berry sorbets to keep the palate refreshed between bites!</p>
            </div>

            <h2>3. Crunchy <span>Layers</span> & Brownie Cubes</h2>
            <p>
                We scatter warm baked fudge brownie cubes, roasted almond flakes, cashews, and crushed waffle cone pieces between each layer. The crunch layers are not just textural additions — they are flavor contributors in their own right. The warm brownie cubes release a fudgy cocoa note that enriches the surrounding ice cream as it slowly melts. The roasted nuts provide an earthy, slightly savory counterpoint that cuts through the sweetness and keeps the palate engaged.
            </p>

            <div class="inline-gallery">
                <figure>
                    <img src="images/service-sundaes.png" alt="Signature Sundae Stack">
                    <figcaption>Layering chocolate fudge and sweet vanilla scoops.</figcaption>
                </figure>
                <figure>
                    <img src="images/ice-cream-bowl.png" alt="Crystal Bowl Presentation">
                    <figcaption>Premium crystal bowl layout loaded with cherry toppings.</figcaption>
                </figure>
            </div>

            <h2>4. The Grand Finale <span>Crown</span></h2>
            <p>
                Finished with a swirl of fresh cream, chocolate curls, and a sweet maraschino cherry on top. The final crown is as much a visual statement as it is a flavor addition. The fresh whipped cream spiral creates height that makes the sundae feel grand and generous. The shaved chocolate curls add a refined, chocolatier-level elegance, while the bright red maraschino cherry is the internationally recognized symbol of the classic sundae — a nod to tradition that never goes out of style.
            </p>
        `
    },

    "premium-ingredients": {
        title: "Why 100% Organic Dairy & Natural Ingredients Matter",
        titleHTML: "Why 100% Organic Dairy & Natural <span>Ingredients</span> Matter",
        category: "Ingredient Quality",
        date: "July 12, 2026",
        readTime: "5 Min Read",
        author: {
            name: "Dr. Sarah Jenkins",
            role: "Nutritionist & Quality Auditor",
            bio: "Dr. Jenkins oversees food safety and organic ingredient sourcing compliance for premium food brands.",
            avatarImg: "images/avatar-sarah.jpg"
        },
        coverImg: "images/blog-ingredients.png",
        coverCaption: "Flatlay of organic farm milk, vanilla pods, cocoa beans, and fresh strawberries.",
        tags: ["Organic Ingredients", "Health Standards", "Zero Preservatives", "Eggless"],
        related: ["top-10-flavours", "how-milkshakes-are-made", "summer-collection"],
        articleHTML: `
            <p class="lead-para">
                In a market filled with synthetic palm oil frozen desserts, Cho'ice World stands firm on its promise: <strong>100% Pure Dairy Cream, Zero Palm Oil, and Zero Artificial Flavors.</strong>
            </p>

            <h2>Real Ice Cream vs. Frozen <span>Desserts</span></h2>
            <p>
                Did you know many cheap store brands cannot legally be called "Ice Cream"? Instead, they are labeled as "Frozen Desserts". The difference is massive: real ice cream uses 100% pure milk fat, whereas frozen desserts substitute it with hydrogenated vegetable oils (like palm oil) and chemical emulsifiers. Reading the ingredient label of your frozen treat carefully is one of the most important steps you can take as a conscious consumer.
            </p>

            <blockquote class="magazine-quote">
                "Your body knows the difference between natural butterfat and synthetic palm oil. Real cream melts cleanly on your tongue without leaving a greasy, waxy residue."
                <footer>— Dr. Sarah Jenkins</footer>
            </blockquote>

            <h2>1. Sourcing Premium <span>Organic</span> Dairy</h2>
            <p>
                The foundation of our ice cream is pure sweet dairy cream sourced daily from local organic pasture farms. Cows fed on natural green grass produce milk with higher nutrient densities and richer fat profiles, giving our ice cream a natural creaminess that cannot be replicated. Our farm partnerships are audited bi-annually to ensure consistent compliance with organic certification standards — no growth hormones, no chemical supplements, and unrestricted open-pasture grazing.
            </p>

            <h2>2. Madagascar Bourbon <span>Vanilla</span> Pods</h2>
            <p>
                Instead of cheap synthetic vanillin, we import premium Madagascar Bourbon vanilla pods. We scrape the seeds by hand and steep them in warm cream, allowing the full complexity of over 250 organic flavor compounds to develop naturally. The cost difference between real vanilla pods and synthetic vanillin is significant, but the sensory difference — the depth, warmth, and rounded complexity of real vanilla — is impossible to replicate with any chemical shortcut.
            </p>

            <div class="inline-gallery">
                <figure>
                    <img src="images/blog-ingredients.png" alt="Pure Vanilla & Organic Cream">
                    <figcaption>Raw organic ingredients sourced fresh daily.</figcaption>
                </figure>
                <figure>
                    <img src="images/service-tubs.png" alt="Artisanal Batch Production">
                    <figcaption>Artisanal ice cream tub packed with pure cream.</figcaption>
                </figure>
            </div>

            <h2>3. Pure Belgian Chocolate & Fresh <span>Fruits</span></h2>
            <p>
                For our chocolate range, we melt premium cocoa butter blocks directly into the mix, avoiding hydrogenated compound chocolate. Similarly, our fruit flavors feature 100% real fruit reductions — like fresh Mahabaleshwar strawberries and Ratnagiri Alphonso mangoes — without any chemical flavoring enhancers. The result is a fruit ice cream whose color comes entirely from the natural pigments of the fruit itself, with a flavor that genuinely tastes of the specific orchard and region.
            </p>

            <div class="tip-box">
                <h4><i class="fa-solid fa-microscope"></i> How to Read Labels</h4>
                <p>Always inspect the ingredient list on packaged desserts. If you see 'hydrogenated vegetable oil', 'palm oil', or 'vanilla flavor' instead of 'vanilla extract', you are eating a synthetic frozen dessert rather than real ice cream.</p>
            </div>

            <h2>4. 100% Vegetarian & <span>Eggless</span> Recipe</h2>
            <p>
                We believe sweet indulgence should be inclusive. All Cho'ice World recipes are meticulously balanced using plant-based stabilizers like organic guar gum, ensuring a silky texture while remaining 100% vegetarian and eggless. Traditional Western ice cream recipes rely on egg yolks for emulsification and richness, but our proprietary formula achieves the same luxurious mouthfeel through carefully selected natural vegetable proteins and organic emulsifiers — making our ice cream accessible to vegetarian and egg-intolerant consumers without any compromise on taste.
            </p>
        `
    },

    "birthday-party-desserts": {
        title: "How to Plan the Ultimate Dessert Bar for Birthday Parties",
        titleHTML: "How to Plan the Ultimate <span>Dessert</span> Bar for Birthday Parties",
        category: "Party Catering",
        date: "July 08, 2026",
        readTime: "7 Min Read",
        author: {
            name: "Priya Sharma",
            role: "Event Specialist & Party Host",
            bio: "Priya has curated over 200 high-profile birthday parties and corporate events across South India.",
            avatarImg: "images/avatar-priya.jpg"
        },
        coverImg: "images/service-party.png",
        coverCaption: "Live ice cream scooping counter setup at a colorful kids birthday party.",
        tags: ["Birthday Catering", "Live Counter", "Sundae Bar", "Party Guide"],
        related: ["signature-sundaes-secret", "how-milkshakes-are-made", "summer-collection"],
        articleHTML: `
            <p class="lead-para">
                Planning a birthday celebration? Nothing excites guests of all ages quite like a live ice cream counter with unlimited scoops and colorful toppings. It turns a standard dessert service into an interactive entertainment show.
            </p>

            <h2>1. Set Up an Interactive DIY <span>Topping</span> Bar</h2>
            <p>
                A dynamic toppings bar is the centerpiece of any successful birthday dessert cart. Include 8 to 12 wide bowls filled with hot dark chocolate fudge, warm salted caramel, rainbow sprinkles, crushed Oreos, gummy bears, roasted nuts, brownie chunks, and waffle cone chips. The visual abundance of a well-stocked topping bar creates an immediate excitement that draws guests in before the first scoop is even served. Arrange toppings by category — sauces first, then crunch toppings, then fresh garnishes — so guests can move through the station intuitively without bottlenecks.
            </p>

            <blockquote class="magazine-quote">
                "An interactive dessert station is more than food—it is a visual event that captures kids' imaginations and lets them become chefs of their own sundae creations."
                <footer>— Priya Sharma, Event Specialist</footer>
            </blockquote>

            <h2>2. Hire Uniformed <span>Scooping</span> Chefs</h2>
            <p>
                Professional, friendly, and uniformed scooping chefs keep the dessert station running smoothly. They ensure correct portion sizes, high hygiene standards, fast service to avoid long queues, and add an element of professional theatrical flair. A well-trained scooper can serve up to 60 guests per hour without creating bottlenecks, ensuring that every child gets their personalized creation quickly and with genuine enthusiasm. The uniform also signals quality and trustworthiness, which parents at children's parties especially appreciate.
            </p>

            <h2>3. Customize Your Signature Milkshake & <span>Sundae</span> Station</h2>
            <p>
                In addition to single scoops, set up a live blending counter for mini thick milkshakes and layered sundaes. Guests can select their favorite ice cream bases, dairy or nut milk bases, and custom drizzle options for hand-spun mocktail milkshakes. Offering a milkshake station alongside the scoop counter dramatically increases the perceived value of your dessert setup — and gives older guests and adults a sophisticated dessert option that feels premium rather than simply sweet.
            </p>

            <div class="inline-gallery">
                <figure>
                    <img src="images/service-party.png" alt="Live Party Cart Setup">
                    <figcaption>Interactive live cart with custom toppings.</figcaption>
                </figure>
                <figure>
                    <img src="images/service-waffles.png" alt="Waffle Baking Station">
                    <figcaption>Fresh waffles baked on-site for party sundaes.</figcaption>
                </figure>
            </div>

            <h2>4. The Waffle Magic: Hot <span>Baking</span> on Venue</h2>
            <p>
                Set up a dedicated Belgian waffle maker that bakes fresh waffles on-demand. The buttery, sweet vanilla aroma filling the party venue is a sensory trigger that naturally draws guests toward the dessert table long before scooping begins. The sight of golden waffles being lifted straight from the iron, drizzled with hot chocolate, and paired with a cold scoop of gelato creates a visual spectacle that is as entertaining as any magic show for young guests.
            </p>

            <div class="tip-box">
                <h4><i class="fa-solid fa-calculator"></i> Portion Calculation Tip</h4>
                <p>For children's parties, plan for 1.5 scoops per child with smaller cups. For adult events, budget 2 full scoops per guest and expect higher fudge and roasted nut consumption.</p>
            </div>

            <h2>5. Branded Custom Packaging & <span>Theme</span> Decor</h2>
            <p>
                Elevate the premium feel by designing custom printed cups, dessert spoons, and napkins themed to match your party. Coordinating the ice cream cart banner with your overall color scheme ties the dessert station perfectly into the party's premium design. Personalized elements like the birthday child's name printed on the cup or a custom flavor named after the birthday theme transform a dessert service into a truly memorable, tailor-made experience that guests talk about long after the party ends.
            </p>
        `
    },

    "summer-collection": {
        title: "Beat the Heat: Summer Special Ice Cream & Sorbet Collection",
        titleHTML: "Beat the Heat: Summer Special Ice Cream & <span>Sorbet</span> Collection",
        category: "Seasonal Release",
        date: "July 04, 2026",
        readTime: "4 Min Read",
        author: {
            name: "Chef Marc Antoine",
            role: "Head Pastry Chef",
            bio: "Chef Marc leads Cho'ice World seasonal fruit harvest creations.",
            avatarImg: "images/avatar-chef-marc.jpg"
        },
        coverImg: "images/service-seasonal.png",
        coverCaption: "Refreshing fruit sorbets and Alphonso mango gelatos served in coconut bowls.",
        tags: ["Summer Specials", "Mango Sorbet", "Tropical Flavors", "Limited Edition"],
        related: ["top-10-flavours", "premium-ingredients", "how-milkshakes-are-made"],
        articleHTML: `
            <p class="lead-para">
                Summer is here! Our limited-edition summer harvest collection features fresh Alphonso mangoes, Mahabaleshwar strawberries, and refreshing coconut lime sorbets. Every scoop is designed to cool you down naturally with organic hydration.
            </p>

            <h2>1. Ratnagiri Alphonso <span>Gelato</span></h2>
            <p>
                Made with 100% pure fresh Alphonso pulp harvested at peak sweetness from the coastal orchards of Maharashtra. Slow-churned to achieve a thick, custard-like texture, it delivers an intense tropical aroma that defines pure summer indulgence. We process the fresh mangoes within 24 hours of harvest to lock in their peak sugar content and vibrant floral aroma — a window that no other manufacturer can match due to our direct farm-to-churn supply chain. Each batch is strictly limited by the day's harvest yield, ensuring uncompromised freshness.
            </p>

            <blockquote class="magazine-quote">
                "Our summer sorbets use the natural sweetness of ripe seasonal fruits as the main ingredient. No artificial sugars, no chemical concentrates—just fresh fruit pulp."
                <footer>— Chef Marc Antoine, Head Churner</footer>
            </blockquote>

            <h2>2. Dairy-Free Passion <span>Fruit</span> Sorbet</h2>
            <p>
                Tart, refreshing, and ultra-hydrating for hot summer afternoons. The passion fruit seeds are strained, and the tangy yellow pulp is blended with organic cane sugar syrup and chilled mineral water before deep freezing. Passion fruit's natural acidity makes this sorbet one of the most palate-cleansing desserts we offer — perfect as a bridge between courses at a summer dinner or as a standalone afternoon refresher on the patio. The vibrant golden color makes it as visually striking as it is delicious.
            </p>

            <h2>3. Himalayan Wild Berry & <span>Mint</span> Slush</h2>
            <p>
                A refreshing blend of wild blackberries, red raspberries, and hand-crushed mint leaves. This iced infusion has a slightly tart finish that cleanses the palate and leaves a cool peppermint aftertaste. The wild berries are sourced from high-altitude organic farms where the cooler temperatures produce berries with a more concentrated tartness and deeper natural pigmentation than commercially grown lowland varieties. The addition of fresh mint crushed moments before blending releases volatile aromatic oils that enhance the cooling sensation dramatically.
            </p>

            <div class="inline-gallery">
                <figure>
                    <img src="images/service-seasonal.png" alt="Tropical Fruit Sorbets">
                    <figcaption>Limited edition sorbet selection in coconut bowls.</figcaption>
                </figure>
                <figure>
                    <img src="images/strawberry-shake.png" alt="Summer Berry Milkshake">
                    <figcaption>Thick wild strawberry milkshake garnished with fresh berries.</figcaption>
                </figure>
            </div>

            <h2>4. Chilled Coconut <span>Lime</span> Swirl</h2>
            <p>
                For those seeking a dairy-free creamy dessert, we press fresh coconut milk and swirl it with grated lime zest and sugarcane juice. It is incredibly rich yet feels light, clean, and completely tropical. The fresh lime zest provides a bright, citrusy punch that cuts through the natural fattiness of the coconut milk, creating a beautifully balanced flavor that feels simultaneously indulgent and refreshing. It is the kind of dessert that tastes like a tropical vacation in every single spoon.
            </p>

            <div class="tip-box">
                <h4><i class="fa-solid fa-temperature-half"></i> Optimal Temperature Tip</h4>
                <p>Sorbet is best enjoyed slightly warmer than dairy ice cream. Let your sorbet scoop rest at room temperature for 4-5 minutes before eating. The fruit flavor notes open up dramatically when softened!</p>
            </div>

            <h2>5. Limited Small-Batch <span>Daily</span> Production</h2>
            <p>
                Since we source fresh fruits daily from organic wholesale markets, our summer collection is produced in highly limited micro-batches. Once the day's batch is scooped out, we close the counter to prepare fresh pulp for the next morning! This means no two batches are ever identical — each day's summer sorbet is a unique, artisanal creation shaped by the exact ripeness of that morning's fruit delivery. This commitment to freshness is what makes our seasonal sorbets truly special and genuinely worth seeking out before they sell out.
            </p>
        `
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    let blogId = urlParams.get("blog");

    if (!blogId || !BLOGS_DATA[blogId]) {
        blogId = "top-10-flavours";
    }

    const data = BLOGS_DATA[blogId];

    document.title = `${data.title} | Cho'ice~World Blog`;

    const breadcrumbActive = document.getElementById("breadcrumbActive");
    if (breadcrumbActive) breadcrumbActive.textContent = data.title;

    const blogCategoryBadge = document.getElementById("blogCategoryBadge");
    if (blogCategoryBadge) blogCategoryBadge.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${data.category}`;

    const blogTitle = document.getElementById("blogTitle");
    if (blogTitle) blogTitle.innerHTML = data.titleHTML || data.title;

    const blogAuthorName = document.getElementById("blogAuthorName");
    if (blogAuthorName) blogAuthorName.textContent = data.author.name;

    const blogDate = document.getElementById("blogDate");
    if (blogDate) blogDate.textContent = data.date;

    const blogReadTime = document.getElementById("blogReadTime");
    if (blogReadTime) blogReadTime.textContent = data.readTime;

    const authorAvatarImg = document.getElementById("authorAvatarImg");
    if (authorAvatarImg && data.author.avatarImg) {
        authorAvatarImg.src = data.author.avatarImg;
        authorAvatarImg.alt = data.author.name;
    }

    const authorName = document.getElementById("authorName");
    if (authorName) authorName.textContent = data.author.name;

    const authorDesignation = document.getElementById("authorDesignation");
    if (authorDesignation) authorDesignation.textContent = data.author.role;

    const authorBio = document.getElementById("authorBio");
    if (authorBio) authorBio.textContent = data.author.bio;

    const authorTags = document.getElementById("authorTags");
    if (authorTags && data.tags) {
        authorTags.innerHTML = data.tags.map(t => `<span class="author-tag">#${t}</span>`).join("");
    }

    const articleCoverImg = document.getElementById("articleCoverImg");
    if (articleCoverImg) {
        articleCoverImg.src = data.coverImg;
        articleCoverImg.alt = data.title;
    }

    const coverCaptionText = document.getElementById("coverCaptionText");
    if (coverCaptionText) coverCaptionText.textContent = data.coverCaption;

    const articleBody = document.getElementById("articleBody");
    if (articleBody) articleBody.innerHTML = data.articleHTML;

    const relatedBlogsGrid = document.getElementById("relatedBlogsGrid");
    if (relatedBlogsGrid && data.related) {
        relatedBlogsGrid.innerHTML = data.related.map(relId => {
            const relData = BLOGS_DATA[relId];
            if (!relData) return "";
            return `
                <article class="blog-card" data-blog="${relId}">
                    <div class="blog-img-wrap">
                        <img src="${relData.coverImg}" alt="${relData.title}">
                        <span class="blog-cat-badge">${relData.category}</span>
                    </div>
                    <div class="blog-card-body">
                        <div class="blog-meta">
                            <span><i class="fa-regular fa-calendar"></i> ${relData.date}</span>
                            <span><i class="fa-regular fa-clock"></i> ${relData.readTime}</span>
                        </div>
                        <h3 class="blog-card-title">${relData.title}</h3>
                        <div class="blog-card-footer">
                            <div class="blog-author">
                                <div class="author-avatar"><img src="${relData.author.avatarImg}" alt="${relData.author.name}"></div>
                                <span>${relData.author.name}</span>
                            </div>
                            <a href="BlogDetails.html?blog=${relId}" class="blog-read-btn">
                                <span>Read Article</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        const cards = relatedBlogsGrid.querySelectorAll(".blog-card");
        cards.forEach(c => {
            c.addEventListener("click", (e) => {
                if (!e.target.closest("a")) {
                    const id = c.getAttribute("data-blog");
                    if (id) window.location.href = `BlogDetails.html?blog=${id}`;
                }
            });
            c.style.cursor = "pointer";
        });
    }

    const commentForm = document.getElementById("commentForm");
    const commentMsg = document.getElementById("commentMsg");

    if (commentForm && commentMsg) {
        commentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("commentName").value;
            commentMsg.textContent = `🎉 Thank you ${name}! Your comment has been submitted for moderation.`;
            commentForm.reset();
            setTimeout(() => {
                commentMsg.textContent = "";
            }, 5000);
        });
    }

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
        threshold: 0.1,
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

    const revealElements = document.querySelectorAll(".author-card, .magazine-layout, .comment-form, .detail-cta-banner");
    revealElements.forEach((el, idx) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `opacity 0.6s ease ${idx * 0.08}s, transform 0.6s ease ${idx * 0.08}s`;
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
