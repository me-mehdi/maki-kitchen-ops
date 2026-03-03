import React, { useState, useMemo } from 'react';
import {
    Flame,
    Leaf,
    Waves,
    ChevronDown,
    ChevronUp,
    Search,
    Info,
    Clock,
    Thermometer,
    Soup
} from 'lucide-react';

const MENU_DATA = [
    {
        id: 1,
        name: "Vegan Chicken Katsu Curry",
        category: "Curry",
        dietary: ["Vegan"],
        cookTime: "5 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Vegan-Chicken-Katsu-Curry.png",
        ingredients: [
            "Fry vegan Chicken Katsu (180c 5 mins)",
            "Rice (200g) moulded",
            "Curry sauce 2 scoop (175 ml)",
            "Red spoon full potato & carrots",
            "Broccoli"
        ],
        sides: ["Miso soup"],
        sauce: "Curry Sauce"
    },
    {
        id: 2,
        name: "Pumpkin Croquettes",
        category: "Sides",
        dietary: ["Vegetarian"],
        cookTime: "4 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Pumpkin-Croquettes.png",
        ingredients: [
            "Pumpkin Croquettes 2 pcs",
            "Fry (180c 4 mins)",
            "Mayo",
            "Togarashi Powder"
        ],
        sauce: "Mayo"
    },
    {
        id: 3,
        name: "Spicy Chicken Teriyaki",
        category: "Sides",
        dietary: ["Spicy"],
        cookTime: "2 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Spicy-Chicken-Teriyaki-.png",
        ingredients: [
            "Chicken Karaage 7 pcs",
            "Fry (180c 2 mins)",
            "Cover with spicy teriyaki sauce",
            "Sesame sprinkle"
        ],
        sauce: "Spicy Teriyaki"
    },
    {
        id: 4,
        name: "Spicy Chicken Karaage Donburi",
        category: "Rice Bowls",
        dietary: ["Spicy"],
        cookTime: "2 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Spicy-Chicken-Teriyaki-Rice-2.png",
        ingredients: [
            "Chicken Karaage 5 pcs",
            "Fry (180c 2 mins)",
            "Cover with spicy teriyaki sauce",
            "Rice (200g)",
            "Broccoli",
            "One red spoon full kimchi",
            "Sesame sprinkle"
        ],
        sides: ["Miso soup"],
        sauce: "Spicy Teriyaki"
    },
    {
        id: 5,
        name: "Cha Shu Yakisoba",
        category: "Noodles",
        dietary: [],
        cookTime: "Wok Fry",
        cookTemp: "Hot",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Cha-Sui-Yakisoba.png",
        ingredients: [
            "Soba Veg handful portion",
            "Soba noodles 16oz cup full",
            "Soba sauce 30 ml * 2",
            "Spring onions",
            "Cha Shu 3 pcs",
            "Bonito Flakes",
            "Sprinkle sesame",
            "Soba sauce on Cha Shu"
        ],
        sauce: "Soba Sauce"
    },
    {
        id: 6,
        name: "Takoyaki",
        category: "Sides",
        dietary: [],
        cookTime: "4-5 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Takoyaki.png",
        ingredients: [
            "Deep fry from Frozen 5 mins",
            "Deep fry from Fridge 4 mins",
            "Mayo",
            "Soba sauce",
            "Spring onions",
            "Bonito Flakes"
        ],
        sauce: "Mayo & Soba Sauce"
    },
    {
        id: 7,
        name: "Pumpkin Katsu Curry",
        category: "Curry",
        dietary: ["Vegetarian"],
        cookTime: "4 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Pumpkin-Katsu-Curry.png",
        ingredients: [
            "Fry Pumpkin Croquettes for 4 mins",
            "Rice (200g) moulded",
            "Curry sauce 2 scoop (175ml)",
            "Red spoon full potato & Carrots",
            "Broccoli",
            "One red spoon full Kimchi"
        ],
        sauce: "Curry Sauce"
    },
    {
        id: 8,
        name: "Chicken Yakisoba",
        category: "Noodles",
        dietary: [],
        cookTime: "Wok Fry",
        cookTemp: "Hot",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Chicken-Yakisoba.png",
        ingredients: [
            "Soba Veg handful portion",
            "Soba noodles 16oz cup full",
            "Soba sauce 30 ml * 2",
            "Spring onions",
            "Chicken Karaage 5 pcs",
            "Bonito Flakes",
            "Sprinkle sesame",
            "Soba sauce on Karaage"
        ],
        sauce: "Soba Sauce"
    },
    {
        id: 9,
        name: "Prawn Tempura",
        category: "Sides",
        dietary: ["Seafood"],
        cookTime: "2 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Prawn-Tempura.png",
        ingredients: [
            "Tempura batter: 700g Flour, 1L water",
            "Fry 2 mins",
            "5 pc prawn tempura",
            "Tempura sauce",
            "Placing with maki ramen paper"
        ],
        sauce: "Tempura Sauce"
    },
    {
        id: 10,
        name: "Chicken Katsu Curry",
        category: "Curry",
        dietary: [],
        cookTime: "5 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Chicken-Katsu-Curry.png",
        ingredients: [
            "Fry Chicken Katsu 180c 5 mins",
            "Rice (200g) moulded",
            "Curry sauce 2 scoop (175ml)",
            "Red spoon full potato & carrots",
            "Broccoli"
        ],
        sides: ["Miso soup"],
        sauce: "Curry Sauce"
    },
    {
        id: 11,
        name: "Yasai Yakisoba",
        category: "Noodles",
        dietary: ["Vegetarian"],
        cookTime: "Wok Fry",
        cookTemp: "Hot",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Veg-Yakisoba.png",
        ingredients: [
            "Veg handful portion",
            "Soba noodles 16oz cup full",
            "Pak Choy * 2",
            "Broccoli * 1",
            "Soba sauce 30 ml * 2",
            "Spring onions",
            "Sprinkle sesame",
            "Tofu 3 pcs"
        ],
        sauce: "Soba Sauce"
    },
    {
        id: 12,
        name: "Squid Tempura",
        category: "Sides",
        dietary: ["Seafood", "Spicy"],
        cookTime: "2.5 mins",
        cookTemp: "180°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Squid-Tempura.png",
        ingredients: [
            "Take 10 pcs squid mix with potato starch",
            "Fry 180c for 2.5 mins",
            "Check is it crispy",
            "Place with maki ramen paper",
            "Sprinkle with togarashi, salt and pepper and serve with grilled lemon wedge, Kale"
        ],
        sauce: "None"
    },
    {
        id: 13,
        name: "Miso Soup",
        category: "Sides",
        dietary: ["Vegetarian"],
        cookTime: "-",
        cookTemp: "> 75°C",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Miso-Soup.png",
        ingredients: [
            "Miso paste: 250gm",
            "Dashi 2 spoons",
            "Water > 75°C",
            "Order:",
            "Spring onion",
            "3 pcs tofu cube",
            "Dry wakame",
            "One ladle of miso soup",
            "Onegaishimasu!"
        ],
        sauce: "None"
    },
    {
        id: 14,
        name: "Edamame",
        category: "Sides",
        dietary: ["Vegan"],
        cookTime: "40 secs",
        cookTemp: "Boil",
        image: "https://www.makiramen.com/wp-content/uploads/2024/11/Edamame.png",
        ingredients: [
            "40 seconds in boiling water"
        ],
        sauce: "None"
    }
];

const SAUCE_DATA = {
    "Curry Sauce": ["Japanese Curry Roux", "Dashi Stock", "Caramelized Onions", "Soy Sauce"],
    "Spicy Teriyaki": ["Soy Sauce", "Mirin", "Sake", "Sugar", "Chili Oil / Gochugaru"],
    "Soba Sauce": ["Worcestershire Sauce", "Oyster Sauce", "Ketchup", "Soy Sauce", "Sugar"],
    "Tempura Sauce": ["100ml Soy Sauce", "1.2L Hot Water", "50g Bonito Flakes", "1 tbsp Kombu Dashi"],
    "Tanamay Sauce": ["Recipe Pending"],
    "Mayo": ["Japanese Kewpie Mayo", "Egg Yolk", "Rice Vinegar"]
};

const CATEGORIES = ["All", "Curry", "Noodles", "Rice Bowls", "Sides"];

export default function App() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedId, setExpandedId] = useState(null);
    const [showSauceInfo, setShowSauceInfo] = useState(false);

    const filteredMenu = useMemo(() => {
        return MENU_DATA.filter(item => {
            const matchesCategory = activeCategory === "All" || item.category === activeCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-bold tracking-tight text-orange-500">KITCHEN OPS</h1>
                    <button
                        onClick={() => setShowSauceInfo(!showSauceInfo)}
                        className="p-2 rounded-full bg-slate-800 text-orange-400 hover:bg-slate-700 transition-colors"
                    >
                        <Info size={20} />
                    </button>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search dishes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500/50 placeholder:text-slate-500"
                    />
                </div>

                {/* Horizontal Category Scroll */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === cat
                                ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20'
                                : 'bg-slate-800 text-slate-400'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="p-4 max-w-md mx-auto space-y-4">
                {filteredMenu.map((item) => (
                    <div
                        key={item.id}
                        className={`group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-black/50 ${expandedId === item.id ? 'ring-1 ring-orange-500/50 bg-slate-800/20' : ''
                            }`}
                    >
                        {/* Dish Image */}
                        <div className="relative w-full h-40 overflow-hidden bg-slate-800 shrink-0">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-3 left-3 flex gap-2">
                                {item.dietary.includes("Vegan") && <span className="bg-green-500/90 text-white p-1.5 rounded-full shadow-lg backdrop-blur-sm"><Leaf size={12} /></span>}
                                {item.dietary.includes("Spicy") && <span className="bg-red-500/90 text-white p-1.5 rounded-full shadow-lg backdrop-blur-sm"><Flame size={12} /></span>}
                                {item.dietary.includes("Seafood") && <span className="bg-blue-500/90 text-white p-1.5 rounded-full shadow-lg backdrop-blur-sm"><Waves size={12} /></span>}
                            </div>
                        </div>

                        <button
                            onClick={() => toggleExpand(item.id)}
                            className="w-full text-left p-4 pt-4 flex items-start justify-between gap-3 active:bg-slate-800/50 focus:outline-none"
                        >
                            <div className="flex-1">
                                <span className="text-[10px] uppercase tracking-wider text-orange-500 font-bold mb-1 block">{item.category}</span>
                                <h3 className="font-bold text-lg leading-tight text-white group-hover:text-orange-400 transition-colors">{item.name}</h3>
                                <div className="flex items-center gap-4 mt-2.5 text-slate-400 text-xs font-medium">
                                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-orange-500/70" /> {item.cookTime}</span>
                                    <span className="flex items-center gap-1.5"><Thermometer size={12} className="text-orange-500/70" /> {item.cookTemp}</span>
                                </div>
                            </div>
                            <div className={`pt-2 text-slate-500 transition-transform duration-300 ${expandedId === item.id ? 'rotate-180 text-orange-500' : ''}`}>
                                <ChevronDown size={20} />
                            </div>
                        </button>

                        {/* Expandable Content */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedId === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-4 pb-4 pt-1 border-t border-slate-800/50 bg-slate-900/30">
                                <div className="py-3 space-y-4">
                                    <div>
                                        <h4 className="text-[10px] uppercase font-black text-slate-500 mb-2.5 flex items-center gap-1">
                                            Ingredients & Portioning
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {item.ingredients.map((ing, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/80 mt-1.5 shrink-0" />
                                                    <span className="leading-snug">{ing}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex gap-4 p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
                                        {item.sauce && item.sauce !== "None" && (
                                            <div className="flex-1">
                                                <h4 className="text-[10px] uppercase font-black text-slate-500 mb-1.5">Sauce</h4>
                                                <span className="text-xs px-2.5 py-1 bg-orange-500/10 text-orange-400 rounded-md border border-orange-500/20 inline-block font-medium">
                                                    {item.sauce}
                                                </span>
                                            </div>
                                        )}
                                        {item.sides && (
                                            <div className="flex-1 border-l border-slate-800 pl-4">
                                                <h4 className="text-[10px] uppercase font-black text-slate-500 mb-1.5">Standard Sides</h4>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                                                    <Soup size={14} className="text-orange-500" /> {item.sides[0]}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredMenu.length === 0 && (
                    <div className="text-center py-24 text-slate-500 flex flex-col items-center gap-3">
                        <Search size={32} className="text-slate-700" />
                        <p className="font-medium">No dishes found matching your search.</p>
                    </div>
                )}
            </main>

            {/* Sauce Guide Overlay */}
            {showSauceInfo && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setShowSauceInfo(false)}
                    />
                    <div className="relative w-full max-w-md bg-slate-900 rounded-t-3xl sm:rounded-3xl border-t sm:border border-slate-800 p-6 animate-in slide-in-from-bottom duration-300 shadow-2xl shadow-black">
                        <div className="w-12 h-1 bg-slate-800 rounded-full mx-auto mb-6 sm:hidden" />
                        <h2 className="text-xl font-bold mb-6 text-orange-500 flex items-center gap-2">
                            <Info size={20} /> Sauce Reference
                        </h2>
                        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 no-scrollbar">
                            {Object.entries(SAUCE_DATA).map(([name, contents]) => (
                                <div key={name} className="border-b border-slate-800 pb-4 last:border-0">
                                    <h3 className="font-bold text-slate-100 mb-2.5">{name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {contents.map((c, i) => (
                                            <span key={i} className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-1 rounded-md uppercase font-bold tracking-wide border border-slate-700/50">
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setShowSauceInfo(false)}
                            className="w-full mt-8 py-3.5 bg-orange-500 text-white font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-orange-500/20 hover:bg-orange-600"
                        >
                            Close Guide
                        </button>
                    </div>
                </div>
            )}

            {/* Footer Nav (Mobile) */}
            <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3.5 flex justify-center items-center text-[10px] text-slate-500 font-black uppercase tracking-widest z-40">
                Kitchen Prep Guide • v1.1
            </footer>
        </div>
    );
}
