// The Flavour Fusion Database (35 Recipes)
const recipes = [
    // VEG
    { id: "v1", title: "Palak Paneer", tags: ["Veg", "High Protein"], image: "https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-recipe-featured.jpg", pageLink: "recipe.html", videoLink: "/Videos/palak.mp4",
        ingredients: [ { amount: 250, unit: "grams", name: "Paneer (cubed)" }, { amount: 3, unit: "cups", name: "Spinach leaves" }, { amount: 1, unit: "tbsp", name: "Ghee or Butter" }, { amount: 2, unit: "medium", name: "Onions (finely chopped)" }, { amount: 0.5, unit: "cup", name: "Heavy Cream" }, { amount: 1, unit: "tsp", name: "Garam Masala" } ]
    },
    { id: "v2", title: "Daal Makhani", tags: ["Veg"], image: "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3.jpg", pageLink: "recipe.html", videoLink: "/Videos/dal.mp4",
        ingredients: [ { amount: 1, unit: "cup", name: "Whole Black Lentils (Urad Dal)" }, { amount: 0.25, unit: "cup", name: "Kidney Beans (Rajma)" }, { amount: 3, unit: "tbsp", name: "Butter" }, { amount: 0.5, unit: "cup", name: "Fresh Cream" }, { amount: 2, unit: "cups", name: "Tomato Puree" }, { amount: 1, unit: "tbsp", name: "Ginger-Garlic Paste" } ]
    },
    { id: "v3", title: "Masala Dosa", tags: ["Veg", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRlxWb1ExamU60F5H-yAwW121m6ydqp0MIQ&s", pageLink: "recipe.html", videoLink: "/Videos/dosa.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Dosa Batter" }, { amount: 3, unit: "large", name: "Potatoes (boiled)" }, { amount: 1, unit: "tsp", name: "Mustard Seeds" }, { amount: 10, unit: "leaves", name: "Curry Leaves" }, { amount: 0.5, unit: "tsp", name: "Turmeric Powder" }, { amount: 2, unit: "tbsp", name: "Oil" } ]
    },
    { id: "v4", title: "Rajma Chawal", tags: ["Veg", "High Protein"], image: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg", pageLink: "recipe.html", videoLink: "/Videos/rajma.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Kidney Beans (soaked overnight)" }, { amount: 1, unit: "cup", name: "Basmati Rice" }, { amount: 3, unit: "medium", name: "Tomatoes (pureed)" }, { amount: 2, unit: "medium", name: "Onions (chopped)" }, { amount: 1, unit: "tbsp", name: "Rajma Masala" }, { amount: 2, unit: "tbsp", name: "Ghee" } ]
    },
    
    // NON-VEG
    { id: "nv1", title: "Butter Chicken", tags: ["Non-Veg", "High Protein"], image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg", pageLink: "recipe.html", videoLink: "/Videos/butter_chicken.mp4",
        ingredients: [ { amount: 500, unit: "grams", name: "Boneless Chicken" }, { amount: 2, unit: "cups", name: "Tomato Puree" }, { amount: 4, unit: "tbsp", name: "Butter" }, { amount: 0.5, unit: "cup", name: "Heavy Cream" }, { amount: 1, unit: "tbsp", name: "Kasuri Methi" }, { amount: 1.5, unit: "tbsp", name: "Ginger-Garlic Paste" } ]
    },
    { id: "nv2", title: "Tandoori Chicken", tags: ["Non-Veg", "High Protein"], image: "https://www.kitchensanctuary.com/wp-content/uploads/2025/07/Tandoori-Chicken-Square-FS.jpg", pageLink: "recipe.html", videoLink: "/Videos/tandoori_chicken.mp4",
        ingredients: [ { amount: 800, unit: "grams", name: "Chicken Pieces (bone-in)" }, { amount: 1, unit: "cup", name: "Hung Curd (Yogurt)" }, { amount: 2, unit: "tbsp", name: "Tandoori Masala" }, { amount: 1, unit: "whole", name: "Lemon (juiced)" }, { amount: 1, unit: "tbsp", name: "Mustard Oil" }, { amount: 1, unit: "tsp", name: "Kashmiri Red Chilli Powder" } ]
    },
    { id: "nv3", title: "Mutton Biryani", tags: ["Non-Veg"], image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg", pageLink: "recipe.html", videoLink: "/Videos/mutton.mp4",
        ingredients: [ { amount: 500, unit: "grams", name: "Mutton (bone-in)" }, { amount: 2, unit: "cups", name: "Basmati Rice" }, { amount: 3, unit: "large", name: "Onions (thinly sliced)" }, { amount: 0.5, unit: "cup", name: "Yogurt" }, { amount: 1, unit: "pinch", name: "Saffron strands" }, { amount: 2, unit: "tbsp", name: "Biryani Masala" } ]
    },
    { id: "nv4", title: "Seekh Kabab", tags: ["Non-Veg", "High Protein"], image: "https://spicecravings.com/wp-content/uploads/2021/03/Chicken-Seekh-Kebab-Featured-1-500x500.jpg", pageLink: "recipe.html", videoLink: "/Videos/seekh.mp4",
        ingredients: [ { amount: 500, unit: "grams", name: "Minced Meat" }, { amount: 1, unit: "medium", name: "Onion (grated)" }, { amount: 2, unit: "whole", name: "Green Chillies" }, { amount: 1, unit: "tbsp", name: "Coriander Powder" }, { amount: 1, unit: "tsp", name: "Cumin Powder" }, { amount: 2, unit: "tbsp", name: "Oil (for grilling)" } ]
    },

    // SOUTH INDIAN
    { id: "si1", title: "Idli", tags: ["South Indian", "Veg", "2 Minute Snacks"], image: "https://maayeka.com/wp-content/uploads/2013/10/soft-idli-recipe.jpg", pageLink: "recipe.html", videoLink: "/Videos/idli.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Idli Batter" }, { amount: 1, unit: "tsp", name: "Salt" }, { amount: 1, unit: "tbsp", name: "Oil (for greasing)" }, { amount: 0.5, unit: "cup", name: "Water (for steaming)" }, { amount: 1, unit: "cup", name: "Coconut Chutney" }, { amount: 1, unit: "cup", name: "Sambar" } ]
    },
    { id: "si2", title: "Uttapam", tags: ["South Indian", "Veg"], image: "https://www.awesomecuisine.com/wp-content/uploads/2007/12/Vegetable-Uttapam.jpg", pageLink: "recipe.html", videoLink: "/Videos/uttapam.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Uttapam Batter" }, { amount: 1, unit: "medium", name: "Onion (finely chopped)" }, { amount: 1, unit: "medium", name: "Tomato (finely chopped)" }, { amount: 2, unit: "whole", name: "Green Chillies" }, { amount: 2, unit: "tbsp", name: "Fresh Coriander" }, { amount: 2, unit: "tbsp", name: "Oil or Ghee" } ]
    },
    { id: "si3", title: "Upma", tags: ["South Indian", "Veg", "2 Minute Snacks"], image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-South-Indian-Rava-Upma-Recipe-500x500.jpg", pageLink: "recipe.html", videoLink: "/Videos/upma.mp4",
        ingredients: [ { amount: 1, unit: "cup", name: "Semolina (Rava/Sooji)" }, { amount: 1, unit: "tsp", name: "Mustard Seeds" }, { amount: 2, unit: "tbsp", name: "Roasted Peanuts" }, { amount: 1, unit: "medium", name: "Onion (chopped)" }, { amount: 10, unit: "leaves", name: "Curry Leaves" }, { amount: 2, unit: "tbsp", name: "Ghee" } ]
    },
    { id: "si4", title: "Sambar Vada", tags: ["South Indian", "Veg"], image: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Medu-vada-with-sambar-WS-1.jpg", pageLink: "recipe.html", videoLink: "/Videos/sambar_vada.mp4",
        ingredients: [ { amount: 1, unit: "cup", name: "Urad Dal (soaked overnight)" }, { amount: 2, unit: "cups", name: "Prepared Sambar" }, { amount: 1, unit: "tbsp", name: "Rice Flour" }, { amount: 1, unit: "tsp", name: "Crushed Black Pepper" }, { amount: 1, unit: "inch", name: "Ginger (finely chopped)" }, { amount: 2, unit: "cups", name: "Oil (for deep frying)" } ]
    },
    { id: "si5", title: "Nariyal Chatni", tags: ["South Indian", "Veg", "2 Minute Snacks"], image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-Coconut-Chutney-Recipe.jpg", pageLink: "recipe.html", videoLink: "/Videos/nariyal.mp4",
        ingredients: [ { amount: 1, unit: "cup", name: "Fresh Coconut (grated)" }, { amount: 2, unit: "whole", name: "Green Chillies" }, { amount: 1, unit: "tbsp", name: "Roasted Chana Dal" }, { amount: 0.5, unit: "inch", name: "Ginger" }, { amount: 1, unit: "tsp", name: "Mustard Seeds" }, { amount: 10, unit: "leaves", name: "Curry Leaves" } ]
    },

    // ITALIAN
    { id: "it1", title: "Creamy Pasta", tags: ["Italian", "Veg"], image: "https://www.budgetbytes.com/wp-content/uploads/2020/05/CreamyTomatoSpinachPasta_OverheadPlated-500x500.jpg", pageLink: "recipe.html", videoLink: "/Videos/pasta.mp4",
        ingredients: [ { amount: 250, unit: "grams", name: "Penne Pasta" }, { amount: 1, unit: "cup", name: "Heavy Cream" }, { amount: 0.5, unit: "cup", name: "Parmesan Cheese" }, { amount: 2, unit: "cloves", name: "Garlic (minced)" }, { amount: 1, unit: "cup", name: "Fresh Spinach" }, { amount: 1, unit: "pinch", name: "Black Pepper" } ]
    },
    { id: "it2", title: "Spaghetti Aglio e Olio", tags: ["Italian", "Veg"], image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=500", pageLink: "recipe.html", videoLink: "/Videos/sunda.mp4",
        ingredients: [ { amount: 200, unit: "grams", name: "Spaghetti" }, { amount: 4, unit: "cloves", name: "Garlic (thinly sliced)" }, { amount: 0.25, unit: "cup", name: "Extra Virgin Olive Oil" }, { amount: 1, unit: "tsp", name: "Red Chilli Flakes" }, { amount: 0.25, unit: "cup", name: "Fresh Parsley" }, { amount: 0.5, unit: "cup", name: "Parmesan Cheese" } ]
    },
    { id: "it3", title: "Margherita Pizza", tags: ["Italian", "Veg"], image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500", pageLink: "recipe.html", videoLink: "/Videos/pizza.mp4",
        ingredients: [ { amount: 1, unit: "large", name: "Pizza Crust/Dough" }, { amount: 0.5, unit: "cup", name: "Pizza Sauce" }, { amount: 200, unit: "grams", name: "Fresh Mozzarella Cheese" }, { amount: 10, unit: "leaves", name: "Fresh Basil" }, { amount: 1, unit: "tbsp", name: "Olive Oil" }, { amount: 1, unit: "pinch", name: "Sea Salt" } ]
    },
    { id: "it4", title: "Macaroni & Cheese", tags: ["Italian", "Veg"], image: "https://www.allrecipes.com/thmb/CanMXBeN-9DZyRSzDxLAoy0w-t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg", pageLink: "recipe.html", videoLink: "/Videos/macroni.mp4",
        ingredients: [ { amount: 250, unit: "grams", name: "Macaroni Pasta" }, { amount: 2, unit: "cups", name: "Cheddar Cheese (shredded)" }, { amount: 1.5, unit: "cups", name: "Whole Milk" }, { amount: 2, unit: "tbsp", name: "Butter" }, { amount: 2, unit: "tbsp", name: "All-Purpose Flour" }, { amount: 0.5, unit: "tsp", name: "Smoked Paprika" } ]
    },

    // CHINESE
    { id: "ch1", title: "Veg Chowmein", tags: ["Chinese", "Veg"], image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500", pageLink: "recipe.html", videoLink: "/Videos/sunda.mp4",
        ingredients: [ { amount: 200, unit: "grams", name: "Chowmein Noodles" }, { amount: 1, unit: "cup", name: "Cabbage (shredded)" }, { amount: 0.5, unit: "cup", name: "Carrots (julienned)" }, { amount: 2, unit: "tbsp", name: "Soy Sauce" }, { amount: 1, unit: "tbsp", name: "Vinegar" }, { amount: 1, unit: "tbsp", name: "Green Chilli Sauce" } ]
    },
    { id: "ch2", title: "Veg Manchurian", tags: ["Chinese", "Veg"], image: "https://i.ytimg.com/vi/xkMbJCtaaqA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrMLgdijp9TJ92IUYugdtisp2tIw", pageLink: "recipe.html", videoLink: "/Videos/manchurian.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Cabbage (finely grated)" }, { amount: 0.5, unit: "cup", name: "Carrots (grated)" }, { amount: 0.25, unit: "cup", name: "Corn Flour" }, { amount: 2, unit: "tbsp", name: "Soy Sauce" }, { amount: 4, unit: "cloves", name: "Garlic (minced)" }, { amount: 1, unit: "tbsp", name: "Dark Soy Sauce" } ]
    },
    { id: "ch3", title: "Chilli Paneer", tags: ["Chinese", "Veg", "High Protein"], image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/04/Chilli-Paneer-Thumbnail.jpg", pageLink: "recipe.html", videoLink: "/Videos/chilli_paneer.mp4",
        ingredients: [ { amount: 250, unit: "grams", name: "Paneer (cubed)" }, { amount: 1, unit: "large", name: "Capsicum (diced)" }, { amount: 1, unit: "large", name: "Onion (diced)" }, { amount: 2, unit: "tbsp", name: "Red Chilli Sauce" }, { amount: 1, unit: "tbsp", name: "Soy Sauce" }, { amount: 1, unit: "tbsp", name: "Corn Flour" } ]
    },
    { id: "ch4", title: "Honey Chilli Potato", tags: ["Chinese", "Veg"], image: "https://www.awesomecuisine.com/wp-content/uploads/2015/01/Honey-Chilli-Potato.jpg", pageLink: "recipe.html", videoLink: "/Videos/chilli_potato.mp4",
        ingredients: [ { amount: 3, unit: "large", name: "Potatoes (cut into fries)" }, { amount: 2, unit: "tbsp", name: "Honey" }, { amount: 1, unit: "tbsp", name: "Red Chilli Sauce" }, { amount: 2, unit: "tbsp", name: "Sesame Seeds" }, { amount: 2, unit: "stalks", name: "Spring Onions" }, { amount: 1, unit: "tbsp", name: "Corn Flour" } ]
    },

    // 2 MINUTE SNACKS
    { id: "sn1", title: "Bhel Puri", tags: ["2 Minute Snacks", "Veg"], image: "https://vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions-500x500.jpg", pageLink: "recipe.html", videoLink: "/Videos/bhel_puri.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Puffed Rice (Murmura)" }, { amount: 0.5, unit: "cup", name: "Sev" }, { amount: 2, unit: "tbsp", name: "Tamarind Chutney" }, { amount: 1, unit: "medium", name: "Onion (finely chopped)" }, { amount: 1, unit: "medium", name: "Tomato (finely chopped)" }, { amount: 1, unit: "tbsp", name: "Chaat Masala" } ]
    },
    { id: "sn2", title: "Caramel Popcorn", tags: ["2 Minute Snacks", "Veg", "Desserts"], image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/03/220203.caramel.popcorn-1649.jpg", pageLink: "recipe.html", videoLink: "/Videos/popcorn.mp4",
        ingredients: [ { amount: 0.5, unit: "cup", name: "Popcorn Kernels" }, { amount: 1, unit: "cup", name: "Brown Sugar" }, { amount: 0.5, unit: "cup", name: "Butter" }, { amount: 0.25, unit: "cup", name: "Corn Syrup" }, { amount: 0.5, unit: "tsp", name: "Baking Soda" }, { amount: 1, unit: "tsp", name: "Vanilla Extract" } ]
    },
    { id: "sn3", title: "Masala Maggi", tags: ["2 Minute Snacks", "Veg"], image: "https://i.ytimg.com/vi/VbQ8kyIXqXM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBiux_bN-cri4Ts87ugLJjk1VBjDQ", pageLink: "recipe.html", videoLink: "/Videos/maggie.mp4",
        ingredients: [ { amount: 2, unit: "packets", name: "Maggi Noodles" }, { amount: 2, unit: "packets", name: "Tastemaker" }, { amount: 0.5, unit: "cup", name: "Mixed Veggies" }, { amount: 1, unit: "small", name: "Onion (chopped)" }, { amount: 1, unit: "small", name: "Tomato (chopped)" }, { amount: 1, unit: "whole", name: "Green Chilli" } ]
    },
    { id: "sn4", title: "Masala Oats", tags: ["2 Minute Snacks", "Veg", "High Protein"], image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/masala-oats-recipe.jpg", pageLink: "recipe.html", videoLink: "/Videos/ooats.mp4",
        ingredients: [ { amount: 1, unit: "cup", name: "Rolled Oats" }, { amount: 1, unit: "medium", name: "Onion (chopped)" }, { amount: 1, unit: "medium", name: "Tomato (chopped)" }, { amount: 0.5, unit: "cup", name: "Green Peas" }, { amount: 1, unit: "tsp", name: "Turmeric Powder" }, { amount: 1, unit: "tsp", name: "Garam Masala" } ]
    },
    { id: "sn5", title: "Kanda Poha", tags: ["2 Minute Snacks", "Veg"], image: "https://www.funfoodfrolic.com/wp-content/uploads/2024/04/Kanda-Poha-Blog.jpg", pageLink: "recipe.html", videoLink: "/Videos/poha.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Flattened Rice (Poha)" }, { amount: 1, unit: "large", name: "Onion (sliced)" }, { amount: 0.25, unit: "cup", name: "Peanuts" }, { amount: 1, unit: "tsp", name: "Mustard Seeds" }, { amount: 1, unit: "tsp", name: "Turmeric Powder" }, { amount: 1, unit: "whole", name: "Lemon (juiced)" } ]
    },

    // HIGH PROTEIN
    { id: "hp1", title: "Sprout Salad", tags: ["High Protein", "Veg", "2 Minute Snacks"], image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Sprout-Salad-Thumbnail.jpg", pageLink: "recipe.html", videoLink: "/Videos/salad.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Mixed Sprouts" }, { amount: 1, unit: "medium", name: "Cucumber (chopped)" }, { amount: 1, unit: "medium", name: "Tomato (chopped)" }, { amount: 1, unit: "small", name: "Onion (chopped)" }, { amount: 1, unit: "whole", name: "Lemon (juiced)" }, { amount: 1, unit: "tsp", name: "Chaat Masala" } ]
    },
    { id: "hp2", title: "Paneer Bhurji", tags: ["High Protein", "Veg", "2 Minute Snacks"], image: "https://www.whiskaffair.com/wp-content/uploads/2021/04/Paneer-Bhurji-2-3-1.jpg", pageLink: "recipe.html", videoLink: "/Videos/bhurji.mp4",
        ingredients: [ { amount: 250, unit: "grams", name: "Paneer (crumbled)" }, { amount: 2, unit: "medium", name: "Onions (chopped)" }, { amount: 2, unit: "medium", name: "Tomatoes (chopped)" }, { amount: 2, unit: "whole", name: "Green Chillies" }, { amount: 1, unit: "tsp", name: "Pav Bhaji Masala" }, { amount: 2, unit: "tbsp", name: "Butter" } ]
    },
    { id: "hp3", title: "Soya Chunk Curry", tags: ["High Protein", "Veg"], image: "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-06/Kholapuri-soya-curry-aa230a34658e44feb50e5f1cd79ed9e7.jpg", pageLink: "recipe.html", videoLink: "/Videos/soya_chunk_curry.mp4",
        ingredients: [ { amount: 1, unit: "cup", name: "Soya Chunks (boiled)" }, { amount: 2, unit: "medium", name: "Tomatoes (pureed)" }, { amount: 1, unit: "large", name: "Onion (paste)" }, { amount: 1, unit: "tbsp", name: "Ginger-Garlic Paste" }, { amount: 1, unit: "tsp", name: "Coriander Powder" }, { amount: 1, unit: "tbsp", name: "Oil" } ]
    },
    { id: "hp4", title: "Boiled Egg Chaat", tags: ["High Protein", "Non-Veg", "2 Minute Snacks"], image: "https://www.whiskaffair.com/wp-content/uploads/2020/12/Egg-Chaat-2-1.jpg", pageLink: "recipe.html", videoLink: "/Videos/palak.mp4",
        ingredients: [ { amount: 4, unit: "whole", name: "Boiled Eggs (halved)" }, { amount: 1, unit: "small", name: "Onion (chopped)" }, { amount: 1, unit: "small", name: "Tomato (chopped)" }, { amount: 1, unit: "tsp", name: "Chaat Masala" }, { amount: 1, unit: "tbsp", name: "Green Chutney" }, { amount: 1, unit: "tbsp", name: "Fresh Coriander" } ]
    },

    // DESSERTS
    { id: "ds1", title: "Gulab Jamun", tags: ["Desserts", "Veg"], image: "https://pipingpotcurry.com/wp-content/uploads/2023/12/Gulab-Jamun-Recipe-Piping-Pot-Curry.jpg", pageLink: "recipe.html", videoLink: "/Videos/gulab.mp4",
        ingredients: [ { amount: 1, unit: "cup", name: "Khoya (Mawa)" }, { amount: 0.25, unit: "cup", name: "Paneer (grated)" }, { amount: 2, unit: "tbsp", name: "All-Purpose Flour" }, { amount: 1.5, unit: "cups", name: "Sugar" }, { amount: 2, unit: "cups", name: "Water" }, { amount: 4, unit: "pods", name: "Cardamom" } ]
    },
    { id: "ds2", title: "Ras Malai", tags: ["Desserts", "Veg"], image: "https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe.jpg", pageLink: "recipe.html", videoLink: "/Videos/ras_malai.mp4",
        ingredients: [ { amount: 10, unit: "pieces", name: "Rasgulla Discs" }, { amount: 1, unit: "liter", name: "Full-Fat Milk" }, { amount: 0.5, unit: "cup", name: "Sugar" }, { amount: 1, unit: "pinch", name: "Saffron Strands" }, { amount: 2, unit: "tbsp", name: "Pistachios" }, { amount: 0.5, unit: "tsp", name: "Cardamom Powder" } ]
    },
    { id: "ds3", title: "Kaju Katli", tags: ["Desserts", "Veg"], image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Kaju_katli_sweet.jpg", pageLink: "recipe.html", videoLink: "/Videos/kaju_katli.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Cashew Powder" }, { amount: 1, unit: "cup", name: "Sugar" }, { amount: 0.5, unit: "cup", name: "Water" }, { amount: 1, unit: "tsp", name: "Rose Water" }, { amount: 1, unit: "tbsp", name: "Ghee" }, { amount: 2, unit: "sheets", name: "Edible Silver Foil" } ]
    },
    { id: "ds4", title: "Gajar Pak", tags: ["Desserts", "Veg"], image: "https://anandmukesh.com/wp-content/uploads/2023/12/gajar-halwa-barfi-carrot-pudding-barfee-is-popular-indian-sweet-dish_466689-3946.jpg", pageLink: "recipe.html", videoLink: "/Videos/gajar_paak.mp4",
        ingredients: [ { amount: 1, unit: "kg", name: "Carrots (grated)" }, { amount: 1, unit: "liter", name: "Full-Fat Milk" }, { amount: 1, unit: "cup", name: "Sugar" }, { amount: 0.5, unit: "cup", name: "Ghee" }, { amount: 0.25, unit: "cup", name: "Mixed Nuts" }, { amount: 1, unit: "tsp", name: "Cardamom Powder" } ]
    },
    { id: "ds5", title: "Mathura Peda", tags: ["Desserts", "Veg"], image: "https://static.toiimg.com/photo/75765299.cms", pageLink: "recipe.html", videoLink: "/Videos/mathura_peda.mp4",
        ingredients: [ { amount: 2, unit: "cups", name: "Khoya (Mawa)" }, { amount: 1, unit: "cup", name: "Tagar (Boora Sugar)" }, { amount: 1, unit: "tsp", name: "Cardamom Powder" }, { amount: 2, unit: "tbsp", name: "Ghee" }, { amount: 2, unit: "tbsp", name: "Milk" }, { amount: 1, unit: "pinch", name: "Nutmeg Powder" } ]
    }
];