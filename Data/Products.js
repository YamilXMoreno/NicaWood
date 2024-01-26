export const Products = {
    categories: [
        {
            category: 'Sofas',
            data: [
                {
                    id: 1,
                    name: 'Buchanan Roll',
                    price: 1500,
                    stock: 11,
                    inStock: true,
                    material: 'Synthetic Leather',
                    colors: ['Brown', 'Camel', 'Grey'],
                    sizes: ['M', 'L'],
                    images: {
                        'Brown': {
                            'M': require('../assets/ProductsImages/Sofas/BuchananRoll/BrownMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/BuchananRoll/BrownLarge.jpg'),
                        },
                        'Camel': {
                            'M': require('../assets/ProductsImages/Sofas/BuchananRoll/CamelMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/BuchananRoll/CamelLarge.jpg'),
                        },
                        'Grey': {
                            'M': require('../assets/ProductsImages/Sofas/BuchananRoll/GreyMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/BuchananRoll/GreyLarge.jpg'),
                        },
                    },
                },
                {
                    id: 2,
                    name: 'Cameron Roll',
                    price: 1700,
                    stock: 0,
                    inStock: false,
                    material: 'Cotton',
                    colors: ['Adobe', 'Grey', 'Ivory'],
                    sizes: ['M', 'L'],
                    images: {
                        'Adobe': {
                            'M': require('../assets/ProductsImages/Sofas/CameronRoll/AdobeMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/CameronRoll/AdobeLarge.jpg'),
                        },
                        'Grey': {
                            'M': require('../assets/ProductsImages/Sofas/CameronRoll/GreyMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/CameronRoll/GreyLarge.jpg'),
                        },
                        'Ivory': {
                            'M': require('../assets/ProductsImages/Sofas/CameronRoll/IvoryMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/CameronRoll/IvoryLarge.jpg'),
                        },
                    },
                },
                {
                    id: 3,
                    name: 'Canyon Square',
                    price: 2400,
                    stock: 11,
                    inStock: true,
                    material: 'Leather',
                    colors: ['Adobe', 'Evergreen', 'Grey'],
                    sizes: ['M', 'L'],
                    images: {
                        'Adobe': {
                            'M': require('../assets/ProductsImages/Sofas/CanyonSquare/AdobeMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/CanyonSquare/AdobeLarge.jpg'),
                        },
                        'Evergreen': {
                            'M': require('../assets/ProductsImages/Sofas/CanyonSquare/EvergreenMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/CanyonSquare/EvergreenLarge.jpg'),
                        },
                        'Grey': {
                            'M': require('../assets/ProductsImages/Sofas/CanyonSquare/GreyMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/CanyonSquare/GreyLarge.jpg'),
                        },
                    },
                },
                {
                    id: 4,
                    name: 'York Slope',
                    price: 5000,
                    stock: 11,
                    inStock: true,
                    material: 'Whale Skin',
                    colors: ['Blue', 'Camel', 'Dijon'],
                    sizes: ['M', 'L'],
                    images: {
                        'Blue': {
                            'M': require('../assets/ProductsImages/Sofas/YorkSlope/BlueMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/YorkSlope/BlueLarge.jpg'),
                        },
                        'Camel': {
                            'M': require('../assets/ProductsImages/Sofas/YorkSlope/CamelMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/YorkSlope/CamelLarge.jpg'),
                        },
                        'Dijon': {
                            'M': require('../assets/ProductsImages/Sofas/YorkSlope/DijonMedium.jpg'),
                            'L': require('../assets/ProductsImages/Sofas/YorkSlope/DijonLarge.jpg'),
                        },
                    },
                },
            ],
        },
        {
            category: 'Chairs',
            data: [
                {
                    id: 5,
                    name: 'Ayden Square',
                    price: 700,
                    stock: 11,
                    inStock: true,
                    material: 'Synthetic Leather',
                    colors: ['Brown', 'Camel', 'Rosewood', 'Spice'],
                    sizes: ['M'], // Add sizes array, even if empty
                    images: {
                        'Brown': { 'M': require('../assets/ProductsImages/Chairs/AydenSquare/Brown.jpg')},
                        'Camel': { 'M': require('../assets/ProductsImages/Chairs/AydenSquare/Camel.jpg')},
                        'Rosewood': { 'M': require('../assets/ProductsImages/Chairs/AydenSquare/Rosewood.jpg')},
                        'Spice': { 'M': require('../assets/ProductsImages/Chairs/AydenSquare/Spice.jpg')},
                    },
                },
                {
                    id: 6,
                    name: 'Balboa',
                    price: 170,
                    stock: 11,
                    inStock: true,
                    material: 'Cotton',
                    colors: ['Evergreen', 'Grey', 'Navy'],
                    sizes: ['M', 'L'],
                    images: {
                        'Evergreen': {
                            'M': require('../assets/ProductsImages/Chairs/Balboa/EvergreenMedium.jpg'),
                            'L': require('../assets/ProductsImages/Chairs/Balboa/EvergreenLarge.jpg'),
                        },
                        'Grey': {
                            'M': require('../assets/ProductsImages/Chairs/Balboa/GreyMedium.jpg'),
                            'L': require('../assets/ProductsImages/Chairs/Balboa/GreyLarge.jpg'),
                        },
                        'Navy': {
                            'M': require('../assets/ProductsImages/Chairs/Balboa/NavyMedium.jpg'),
                            'L': require('../assets/ProductsImages/Chairs/Balboa/NavyLarge.jpg'),
                        },
                    },
                },
                {
                    id: 7,
                    name: 'Remmy',
                    price: 390,
                    stock: 11,
                    inStock: true,
                    material: 'Synthetic Leather',
                    colors: ['Blue', 'Green', 'Rosewood', 'Stamping Blue'],
                    sizes: ['M'],
                    images: {
                        'Blue': { 'M': require('../assets/ProductsImages/Chairs/Remmy/Blue.jpg')},
                        'Green': { 'M':  require('../assets/ProductsImages/Chairs/Remmy/Green.jpg')},
                        'Rosewood': { 'M':  require('../assets/ProductsImages/Chairs/Remmy/Rosewood.jpg')},
                        'Stamping Blue': { 'M': require('../assets/ProductsImages/Chairs/Remmy/StampingBlue.jpg')},
                    },
                },
                {
                    id: 8,
                    name: 'TylerSquare',
                    price: 170,
                    stock: 11,
                    inStock: true,
                    material: 'Cotton',
                    colors: ['Pebble', 'Grey', 'Whiskey'],
                    sizes: ['M', 'L'],
                    images: {
                        'Pebble': {
                            'M': require('../assets/ProductsImages/Chairs/TylerSquare/PebbleMedium.jpg'),
                            'L': require('../assets/ProductsImages/Chairs/TylerSquare/PebbleLarge.jpg'),
                        },
                        'Grey': {
                            'M': require('../assets/ProductsImages/Chairs/TylerSquare/GreyMedium.jpg'),
                            'L': require('../assets/ProductsImages/Chairs/TylerSquare/GreyLarge.jpg'),
                        },
                        'Whiskey': {
                            'M': require('../assets/ProductsImages/Chairs/TylerSquare/WhiskeyMedium.jpg'),
                            'L': require('../assets/ProductsImages/Chairs/TylerSquare/WhiskeyLarge.jpg'),
                        },
                    },
                },
                {
                    id: 9,
                    name: 'Willem',
                    price: 170,
                    stock: 11,
                    inStock: true,
                    material: 'Cotton',
                    colors: ['Adobe', 'White', 'DarkBlue'],
                    sizes: ['M'],
                    images: {
                        'Adobe': {
                            'M': require('../assets/ProductsImages/Chairs/Willem/Adobe.jpg'),
                        },
                        'White': {
                            'M': require('../assets/ProductsImages/Chairs/Willem/White.jpg'),
                        },
                        'DarkBlue': {
                            'M': require('../assets/ProductsImages/Chairs/Willem/DarkBlue.jpg'),
                        },
                    },
                },
            ],
        },
        {
            category: 'Living',
            data: [
                {
                    id: 10,
                    name: 'Allen Rectangular',
                    price: 1500,
                    stock: 11,
                    inStock: true,
                    material: 'Synthetic Leather',
                    colors: ['Brown', 'Black'],
                    sizes: ['M'],
                    images: {
                        'Brown': {
                            'M': require('../assets/ProductsImages/Living/AllenRectangular/Brown.jpg'),
                        },
                        'Black': {
                            'M': require('../assets/ProductsImages/Living/AllenRectangular/Black.jpg'),
                        },
                    },
                },
                {
                    id: 11,
                    name: 'Benchwright Round',
                    price: 1700,
                    stock: 11,
                    inStock: true,
                    material: 'Cotton',
                    colors: ['Black', 'Grey', 'Brown', 'Seadrift'],
                    sizes: ['M'],
                    images: {
                        'Black': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightRound/Black.jpg'),
                        },
                        'Grey': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightRound/Grey.jpg'),
                        },
                        'Brown': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightRound/Brown.jpg'),
                        },
                        'Seadrift': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightRound/Seadrift.jpg'),
                        },
                    },
                },
                {
                    id: 12,
                    name: 'Benchwright Square',
                    price: 2400,
                    stock: 11,
                    inStock: true,
                    material: 'Leather',
                    colors: ['Black', 'Grey', 'RusticBrown', 'Seadrift'],
                    sizes: ['M'],
                    images: {
                        'Black': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightSquare/Black.jpg'),
                        },
                        'Grey': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightSquare/Grey.jpg'),
                        },
                        'RusticBrown': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightSquare/RusticBrown.jpg'),
                        },
                        'Seadrift': {
                            'M': require('../assets/ProductsImages/Living/BenchwrightSquare/Seadrift.jpg'),
                        },
                    },
                },
                {
                    id: 13,
                    name: 'Malcom Square',
                    price: 5000,
                    stock: 11,
                    inStock: true,
                    material: 'Whale Skin',
                    colors: ['Glazed Pine', 'Vintage Wash'],
                    sizes: ['M'],
                    images: {
                        'Glazed Pine': {
                            'M': require('../assets/ProductsImages/Living/MalcomSquare/GlazedPine.jpg'),
                        },
                        'Vintage Wash': {
                            'M': require('../assets/ProductsImages/Living/MalcomSquare/VintageWash.jpg'),
                        },
                    },
                },
                {
                    id: 14,
                    name: 'Reed Rectangular',
                    price: 5000,
                    stock: 11,
                    inStock: true,
                    material: 'Whale Skin',
                    colors: ['Atique Umber', 'Warm Black'],
                    sizes: ['M'],
                    images: {
                        'Atique Umber': {
                            'M': require('../assets/ProductsImages/Living/ReedRectangular/AtiqueUmber.jpg'),
                        },
                        'Warm Black': {
                            'M': require('../assets/ProductsImages/Living/ReedRectangular/WarmBlack.jpg'),
                        },
                    },
                },
            ],
        },
    ],
};
