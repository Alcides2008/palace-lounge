// AUTO-GERADO por scripts/build-menu.mjs — nao editar a mao.
// Fonte: menu online do Palace Lounge (QRFY). Correr: node scripts/build-menu.mjs

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  priceLabel?: string;
  region?: string;
  signature?: boolean;
};
export type MenuSection = { id: string; title: string; items: MenuItem[] };
export type MenuGroup = { id: string; label: string; tagline?: string; sections: MenuSection[] };

export const menu: MenuGroup[] = [
  {
    "id": "pequeno-almoco",
    "label": "Pequeno-Almoço",
    "tagline": "Para começar o dia como manda a casa.",
    "sections": [
      {
        "id": "angola",
        "title": "Angola",
        "items": [
          {
            "name": "Sopa de Feijão / Cesto de Pão / Água ou Refrigerante",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          }
        ]
      },
      {
        "id": "portugues",
        "title": "Português",
        "items": [
          {
            "name": "Tosta Mista / Pastel de Nata / Sumo Natural / Café",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          }
        ]
      },
      {
        "id": "ingles",
        "title": "Inglês",
        "items": [
          {
            "name": "Ovo, Bacon, Salsicha / Torradas / Tomate Assado",
            "description": "Batata inglesa / feijão agridoce / cogumelos / ice coffee ou iced latte",
            "price": 14000,
            "priceLabel": "14.000 Kz"
          }
        ]
      },
      {
        "id": "fitness",
        "title": "Fitness",
        "items": [
          {
            "name": "Batido ou Detox / Iougurte Caseiro com Fruta e Granola",
            "description": "Papa de aveia com fruta / pão integral",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          }
        ]
      }
    ]
  },
  {
    "id": "principal",
    "label": "Menu Principal",
    "tagline": "Da entrada à sobremesa — terra, mar e fogo.",
    "sections": [
      {
        "id": "entradas",
        "title": "Entradas",
        "items": [
          {
            "name": "Couvert",
            "description": "Azeitonas, mistura de pães, manteiga, e patê de atum ou frango",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Mix de Fritos",
            "description": "Chamuça de frango, croquete de carne",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Gambas ao Alho",
            "description": "Ao alho",
            "price": 22000,
            "priceLabel": "22.000 Kz"
          },
          {
            "name": "Ovos Rotos",
            "description": "Batata frita ovos estrelado com presunto / bacon",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Crispys do Mar",
            "description": "Mistura de choco e lulas fritos",
            "price": 17000,
            "priceLabel": "17.000 Kz"
          },
          {
            "name": "Tartar de Novilho",
            "description": "Carne crua temperada com torradas",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Camarão ao Alho",
            "price": 20000,
            "priceLabel": "20.000 Kz"
          },
          {
            "name": "Pipocas de Garoupa",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Pipocas de Frango",
            "price": 14000,
            "priceLabel": "14.000 Kz"
          },
          {
            "name": "Carpaccio de Salmão",
            "price": 25000,
            "priceLabel": "25.000 Kz"
          },
          {
            "name": "Carpaccio de Polvo",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          },
          {
            "name": "Chouriço Assado",
            "price": 9500,
            "priceLabel": "9.500 Kz"
          },
          {
            "name": "Caranguejo",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Morcela com Ananás",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Ovos Mexido com Farinheira",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Dobradinha",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Mão de Vaca com Grão",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Ovos Rotos de Camarão",
            "price": 20000,
            "priceLabel": "20.000 Kz"
          },
          {
            "name": "Gambas Cozidas",
            "price": 20000,
            "priceLabel": "20.000 Kz"
          },
          {
            "name": "Camarão Cozido",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          }
        ]
      },
      {
        "id": "saladas",
        "title": "Saladas",
        "items": [
          {
            "name": "Salada da Casa",
            "description": "Alface, cebola, molho de iogurte, rabanete e parmesão",
            "price": 11000,
            "priceLabel": "11.000 Kz"
          },
          {
            "name": "Salada Caesar",
            "description": "Alface, parmesão, croutons, molho ceasar, peito de frango e tomate cereja",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          },
          {
            "name": "Salada Tropical",
            "description": "Com gambas, ananás assado, agrião, tomate cereja, pesto, couscous",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          }
        ]
      },
      {
        "id": "sopas",
        "title": "Sopas",
        "items": [
          {
            "name": "Sopa de Peixe",
            "description": "Grouper soup with vegetables",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Canja de Galinha",
            "description": "Com arroz, hortelã e ovo escalfado",
            "price": 14000,
            "priceLabel": "14.000 Kz"
          },
          {
            "name": "Canja de Garoupa",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          }
        ]
      },
      {
        "id": "aperitivos",
        "title": "Aperitivos",
        "items": [
          {
            "name": "Ostras da Tesão",
            "description": "Amêijoas de benguela com limão e picante",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Quitetas à Bulhão Pato",
            "description": "Amêijoas salteadas em molho de alho com limão e coentros",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Picapau de Lombinho",
            "description": "Lombo de vitela frito em pimenta-de-cuba",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          },
          {
            "name": "Carpaccio",
            "description": "Carne crua laminada temperada com azeite e sal",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Amêijoas",
            "price": 13000,
            "priceLabel": "13.000 Kz"
          }
        ]
      },
      {
        "id": "carne",
        "title": "Carne",
        "items": [
          {
            "name": "Bife à Palace",
            "description": "Bife do lombo frito em molho de alho com ovo estrelado e bacon, purê de batata com esparregado",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "signature": true
          },
          {
            "name": "Picanha",
            "description": "Picanha brasileira grelhada com batatas fritas, arroz, feijão preto, banana à milanesa e farofa",
            "price": 24000,
            "priceLabel": "24.000 Kz",
            "signature": true
          },
          {
            "name": "Grelhada Mista",
            "description": "Mista de carnes grelhadas com batatas fritas, arroz, feijão preto e salada",
            "price": 65000,
            "priceLabel": "65.000 Kz"
          },
          {
            "name": "Entrecôte à Moda Parisiense",
            "description": "Entrecôte grelhado com batatas fritas, salada e molho parisiense",
            "price": 40000,
            "priceLabel": "40.000 Kz",
            "signature": true
          },
          {
            "name": "Franguinho à Palace",
            "description": "Frango desossado com batatas fritas ou arroz e salada (meio frango)",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Carré de Borrego",
            "description": "Costeletas de cordeiro com puré de abóbora e molho demi-glace",
            "price": 35000,
            "priceLabel": "35.000 Kz",
            "signature": true
          },
          {
            "name": "Hambúrguer",
            "description": "Feito com carne de vitela, queijo cheddar, fiambre, batatas fritas e um molho especial",
            "price": 14000,
            "priceLabel": "14.000 Kz"
          },
          {
            "name": "T-bone",
            "description": "Bife grelhado com duas guarnições",
            "price": 40000,
            "priceLabel": "40.000 Kz"
          },
          {
            "name": "Ribeye",
            "description": "Bife grelhado com batatas fritas e legumes",
            "price": 40000,
            "priceLabel": "40.000 Kz"
          },
          {
            "name": "Tomahawk",
            "description": "Bife grelhado com duas acompanhamentos",
            "price": 75000,
            "priceLabel": "75.000 Kz",
            "signature": true
          },
          {
            "name": "Febras de Porco Grelhadas",
            "description": "Com batata frita e salada",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Costeletas de Porco",
            "description": "Com batata frita e salada",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Bife à Pimenta",
            "description": "Com batata frita e arroz",
            "price": 30000,
            "priceLabel": "30.000 Kz"
          },
          {
            "name": "Bife à Mostarda",
            "description": "Com batata frita e arroz",
            "price": 30000,
            "priceLabel": "30.000 Kz"
          },
          {
            "name": "Bife ao Alho",
            "price": 30000,
            "priceLabel": "30.000 Kz"
          },
          {
            "name": "Bife Parmagiano",
            "price": 35000,
            "priceLabel": "35.000 Kz"
          }
        ]
      },
      {
        "id": "peixe",
        "title": "Peixe",
        "items": [
          {
            "name": "Bacalhau à Lagareiro",
            "description": "Bacalhau grelhado com batatas assadas",
            "price": 32000,
            "priceLabel": "32.000 Kz",
            "signature": true
          }
        ]
      },
      {
        "id": "marisco",
        "title": "Marisco",
        "items": [
          {
            "name": "Arroz de Marisco",
            "description": "Arroz de marisco (2 pax)",
            "price": 70000,
            "priceLabel": "70.000 Kz",
            "signature": true
          },
          {
            "name": "Gambas Grelhadas",
            "description": "Camarões grelhados com batatas fritas e molho de manteiga com alho",
            "price": 28000,
            "priceLabel": "28.000 Kz"
          },
          {
            "name": "Caril de Gambas",
            "price": 28000,
            "priceLabel": "28.000 Kz"
          },
          {
            "name": "Lagosta Grelhada",
            "description": "Lagosta grelhada com batatas fritas e molho de manteiga",
            "price": 40000,
            "priceLabel": "40.000 Kz",
            "signature": true
          }
        ]
      },
      {
        "id": "italia",
        "title": "Itália",
        "items": [
          {
            "name": "Risotto do Campo",
            "description": "Arroz cozido com cebola e queijo parmesão, peito de frango e cogumelos",
            "price": 32000,
            "priceLabel": "32.000 Kz"
          },
          {
            "name": "Risotto de Maré",
            "description": "Arroz cozido com cebola e queijo parmesão com salmão",
            "price": 34000,
            "priceLabel": "34.000 Kz",
            "signature": true
          },
          {
            "name": "Tagliatelle de Lagosta",
            "description": "Massa tagliatelle com lagosta, temperada com pimenta, azeite e sal",
            "price": 35000,
            "priceLabel": "35.000 Kz",
            "signature": true
          },
          {
            "name": "Carbonara",
            "description": "Massa com molho de natas, fiambre e queijo parmesão",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Spaghetti Vegano",
            "description": "Espaguete com legumes e cogumelos",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Gamberetti",
            "price": 28000,
            "priceLabel": "28.000 Kz"
          }
        ]
      },
      {
        "id": "pizzas",
        "title": "Pizzas",
        "items": [
          {
            "name": "Calzone de Carne",
            "description": "Molho tomate, mussarela, carne em cubos, chourição, cebola, milho e cogumelos",
            "price": 14000,
            "priceLabel": "14.000 Kz"
          },
          {
            "name": "Calzone de Frango",
            "description": "Molho tomate, mussarela, frango desfiado, chourição, cebola, milho e cogumelos",
            "price": 14000,
            "priceLabel": "14.000 Kz"
          },
          {
            "name": "Pizza Romana",
            "description": "Presunto, rúcula e tomate cereja",
            "price": 17000,
            "priceLabel": "17.000 Kz"
          },
          {
            "name": "Pizza 3 Queijos com Trufas",
            "description": "Mussarela, búfala, filadelfia e trufas",
            "price": 17000,
            "priceLabel": "17.000 Kz"
          },
          {
            "name": "Pizza 4 Estações",
            "description": "Molho tomate, mussarela, chourição, atum, fiambre, peito de frango, pimentos, cebola",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Pizza à Palace",
            "description": "Molho tomate, mussarela, camarão, carne desfiada, azeitona, cebola, tomate em cubos",
            "price": 20000,
            "priceLabel": "20.000 Kz"
          }
        ]
      },
      {
        "id": "japao",
        "title": "Japão",
        "items": [
          {
            "name": "Combo de 15 Peças",
            "price": 27000,
            "priceLabel": "27.000 Kz"
          },
          {
            "name": "Combo de 30 Peças",
            "price": 52000,
            "priceLabel": "52.000 Kz"
          },
          {
            "name": "Barco de 50 Peças",
            "price": 85000,
            "priceLabel": "85.000 Kz"
          },
          {
            "name": "Barco de 80 Peças",
            "price": 135000,
            "priceLabel": "135.000 Kz"
          },
          {
            "name": "Makimonos Ebé Panado",
            "price": 13000,
            "priceLabel": "13.000 Kz"
          },
          {
            "name": "Makimonos Fotómak",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Makimonos Horamak Philadelphia",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Hossomak",
            "price": 14000,
            "priceLabel": "14.000 Kz"
          },
          {
            "name": "Hot Philadelphia",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Sashimi Atum",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Sashimi Peixe Branco",
            "price": 11000,
            "priceLabel": "11.000 Kz"
          },
          {
            "name": "Sashimi Salmão",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          },
          {
            "name": "Gunkan Atum",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Gunkan Peixe Branco",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Gunkan Salmão",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Tempura Legumes",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Tempura Salmão",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Temaki Atum",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Temak Skin",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Temak Salmão",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Temak Philadelphia",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Nguiri Atum",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Nguiri Ebé",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Nguiri Peixe Branco",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Nguiri Skin",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Nguiri Salmão 15 Un",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          }
        ]
      },
      {
        "id": "sobremesas",
        "title": "Sobremesas",
        "items": [
          {
            "name": "Petit Gateau",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Mousse de Chocolate",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Mousse Maracujá",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Bolo de Bolacha",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Delícia do Dubai",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Pudim de Ovos",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Arroz Doce",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Molotofe",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          }
        ]
      },
      {
        "id": "shishas",
        "title": "Shishas",
        "items": [
          {
            "name": "Dual",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Simple",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          }
        ]
      }
    ]
  },
  {
    "id": "bebidas",
    "label": "Bar & Bebidas",
    "tagline": "Cocktails de autor, gins, whiskies e mais.",
    "sections": [
      {
        "id": "agua",
        "title": "Água",
        "items": [
          {
            "name": "Água 0.5L",
            "price": 900,
            "priceLabel": "900 Kz"
          },
          {
            "name": "Água 1.5L",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Água Castelo",
            "price": 3000,
            "priceLabel": "3.000 Kz"
          },
          {
            "name": "Água Castelo Limão",
            "price": 3500,
            "priceLabel": "3.500 Kz"
          },
          {
            "name": "Água das Pedras",
            "price": 3000,
            "priceLabel": "3.000 Kz"
          }
        ]
      },
      {
        "id": "refrigerantes",
        "title": "Refrigerantes",
        "items": [
          {
            "name": "Água Tónica",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Compal",
            "price": 2000,
            "priceLabel": "2.000 Kz"
          },
          {
            "name": "Coca Cola",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Coca Cola Zero",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Fanta Laranja",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Ginger Ale",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Pepsi",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Pepsi Zero",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Sprite Zero",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Sumol ( Ananás / Laranja)",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "7UP",
            "price": 1800,
            "priceLabel": "1.800 Kz"
          },
          {
            "name": "Red Bull",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          }
        ]
      },
      {
        "id": "sumos-naturais",
        "title": "Sumos Naturais",
        "items": [
          {
            "name": "Ananás",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          },
          {
            "name": "Beterraba",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          },
          {
            "name": "Limão",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          },
          {
            "name": "Laranja",
            "price": 4500,
            "priceLabel": "4.500 Kz"
          },
          {
            "name": "Melancia",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          },
          {
            "name": "Maracujá",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "Mucúa",
            "price": 3500,
            "priceLabel": "3.500 Kz"
          },
          {
            "name": "Tropical",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          }
        ]
      },
      {
        "id": "granizados",
        "title": "Granizados",
        "items": [
          {
            "name": "Ananás",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Beterraba",
            "price": 4500,
            "priceLabel": "4.500 Kz"
          },
          {
            "name": "Limão",
            "price": 4500,
            "priceLabel": "4.500 Kz"
          },
          {
            "name": "Laranja",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Melancia",
            "price": 4500,
            "priceLabel": "4.500 Kz"
          },
          {
            "name": "Maracujá",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Mucúa",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          },
          {
            "name": "Tropical",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          }
        ]
      },
      {
        "id": "cervejas",
        "title": "Cervejas",
        "items": [
          {
            "name": "Fino",
            "price": 3000,
            "priceLabel": "3.000 Kz"
          },
          {
            "name": "Barrilitro / Reco",
            "price": 2000,
            "priceLabel": "2.000 Kz"
          },
          {
            "name": "Lambreta",
            "price": 2000,
            "priceLabel": "2.000 Kz"
          },
          {
            "name": "Tulipa",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Caneca",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Panaché",
            "price": 3500,
            "priceLabel": "3.500 Kz"
          },
          {
            "name": "Tango",
            "price": 3500,
            "priceLabel": "3.500 Kz"
          },
          {
            "name": "Submarino",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          }
        ]
      },
      {
        "id": "cervejas-enlatadas",
        "title": "Cervejas Enlatadas",
        "items": [
          {
            "name": "Cuca",
            "price": 3000,
            "priceLabel": "3.000 Kz"
          },
          {
            "name": "Eka",
            "price": 3000,
            "priceLabel": "3.000 Kz"
          },
          {
            "name": "Super Bock",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          }
        ]
      },
      {
        "id": "cocktail-s",
        "title": "Cocktail´s",
        "items": [
          {
            "name": "Caipirinha",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Aperol Spritz",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Caipiblack",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Whisky Sour",
            "price": 9500,
            "priceLabel": "9.500 Kz"
          },
          {
            "name": "Mojito",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Daiquiri",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Margarita",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Limoncello Spritz",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Kamikaze",
            "price": 7500,
            "priceLabel": "7.500 Kz"
          },
          {
            "name": "Tequila Sunrise",
            "price": 6500,
            "priceLabel": "6.500 Kz"
          },
          {
            "name": "Pinacolada",
            "price": 7500,
            "priceLabel": "7.500 Kz"
          },
          {
            "name": "Cosmopolitan",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Moscow Mule",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Granizados",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Caipiroska",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Pornstar",
            "price": 13000,
            "priceLabel": "13.000 Kz"
          },
          {
            "name": "Negroni",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Caip Love",
            "price": 13000,
            "priceLabel": "13.000 Kz"
          },
          {
            "name": "Caipirinha de Maracujá",
            "price": 11000,
            "priceLabel": "11.000 Kz"
          },
          {
            "name": "Lagoa Azul",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Express Martini",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Mojito de Maracujá",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Mojito de Frutos Vermelhos",
            "price": 13000,
            "priceLabel": "13.000 Kz"
          },
          {
            "name": "Mimosa",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Old Fashion",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          }
        ]
      },
      {
        "id": "mocktail-s",
        "title": "Mocktail´s",
        "items": [
          {
            "name": "São Francisco",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Pink Panther",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "African Delight",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Virgin Mojito",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          }
        ]
      },
      {
        "id": "sangrias",
        "title": "Sangrias",
        "items": [
          {
            "name": "Sangria Tinta",
            "price": 25000,
            "priceLabel": "25.000 Kz"
          },
          {
            "name": "Sangria Branca",
            "price": 25000,
            "priceLabel": "25.000 Kz"
          },
          {
            "name": "Sangria Espumante",
            "price": 30000,
            "priceLabel": "30.000 Kz"
          },
          {
            "name": "Sangria Espumante com Frutos Vermelhos",
            "price": 35000,
            "priceLabel": "35.000 Kz"
          },
          {
            "name": "Sangria Rosé",
            "price": 35000,
            "priceLabel": "35.000 Kz"
          },
          {
            "name": "Sangria do Éden",
            "price": 35000,
            "priceLabel": "35.000 Kz"
          },
          {
            "name": "Sangria Palace",
            "price": 50000,
            "priceLabel": "50.000 Kz"
          }
        ]
      },
      {
        "id": "licores",
        "title": "Licores",
        "items": [
          {
            "name": "Amarula",
            "price": 7500,
            "priceLabel": "7.500 Kz"
          },
          {
            "name": "Beirão",
            "price": 7500,
            "priceLabel": "7.500 Kz"
          },
          {
            "name": "Amarguinha",
            "price": 7500,
            "priceLabel": "7.500 Kz"
          },
          {
            "name": "Jagermester",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          }
        ]
      },
      {
        "id": "gin-s",
        "title": "Gin´s",
        "items": [
          {
            "name": "Gordon´s",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Beefeater",
            "price": 9500,
            "priceLabel": "9.500 Kz"
          },
          {
            "name": "Beefeater Pink",
            "price": 9500,
            "priceLabel": "9.500 Kz"
          },
          {
            "name": "Gin Mare",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Gin Vigne",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Bombay",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Bulldog",
            "price": 11000,
            "priceLabel": "11.000 Kz"
          },
          {
            "name": "Hendricks",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Tanqueray",
            "price": 9800,
            "priceLabel": "9.800 Kz"
          },
          {
            "name": "Gordon´s Laranja",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Nº Ten",
            "price": 10500,
            "priceLabel": "10.500 Kz"
          },
          {
            "name": "Gin 77",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          },
          {
            "name": "Maruvo Tradicional",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Maruvo Loengo",
            "price": 9500,
            "priceLabel": "9.500 Kz"
          },
          {
            "name": "Axi Caxinde",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          }
        ]
      },
      {
        "id": "aguardente-e-cognac-s",
        "title": "Aguardente e Cognac´s",
        "items": [
          {
            "name": "1920",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "CR&F",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Caxaramba",
            "price": 4500,
            "priceLabel": "4.500 Kz"
          },
          {
            "name": "Courvoisier Vsop",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          },
          {
            "name": "CR&F Reserva",
            "price": 25000,
            "priceLabel": "25.000 Kz"
          },
          {
            "name": "Hennessy",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Remy Martin",
            "price": 16000,
            "priceLabel": "16.000 Kz"
          },
          {
            "name": "São Domingos",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "Dom Zacapa",
            "price": 30000,
            "priceLabel": "30.000 Kz"
          }
        ]
      },
      {
        "id": "aperitivos",
        "title": "Aperitivos",
        "items": [
          {
            "name": "Bacardi Reserva Ocho",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Martini Bianco",
            "price": 6500,
            "priceLabel": "6.500 Kz"
          },
          {
            "name": "Martini Rosso",
            "price": 6500,
            "priceLabel": "6.500 Kz"
          },
          {
            "name": "Patron Silver",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Porto Tawny Branco",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Porto Tawny Tinto",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Capitan Morgan",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "Diplomatico Mantuano",
            "price": 6500,
            "priceLabel": "6.500 Kz"
          },
          {
            "name": "Diplomatico Reserva",
            "price": 12500,
            "priceLabel": "12.500 Kz"
          },
          {
            "name": "Santissima Trindade",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Azul Reposado",
            "price": 40000,
            "priceLabel": "40.000 Kz"
          },
          {
            "name": "Tequila Komos",
            "price": 25000,
            "priceLabel": "25.000 Kz"
          },
          {
            "name": "Tequila Volcan",
            "price": 30000,
            "priceLabel": "30.000 Kz"
          },
          {
            "name": "Don Julio 1942",
            "price": 30000,
            "priceLabel": "30.000 Kz"
          }
        ]
      },
      {
        "id": "whisky",
        "title": "Whisky",
        "items": [
          {
            "name": "Black Label",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Red Label",
            "price": 4500,
            "priceLabel": "4.500 Kz"
          },
          {
            "name": "Blue Label",
            "price": 50000,
            "priceLabel": "50.000 Kz"
          },
          {
            "name": "Gold Label",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Glenfidich",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "Glenfidish 12 Anos",
            "price": 7500,
            "priceLabel": "7.500 Kz"
          },
          {
            "name": "Glenfidish 15 Anos",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Jameson",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "Jameson Black Barrel",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Jack Daniel´s",
            "price": 8500,
            "priceLabel": "8.500 Kz"
          },
          {
            "name": "Chivas Regal",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "Famouse Grouse",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "Canadian Club 12 Anos",
            "price": 5000,
            "priceLabel": "5.000 Kz"
          },
          {
            "name": "Jw Blond",
            "price": 4000,
            "priceLabel": "4.000 Kz"
          },
          {
            "name": "Jw 18 Anos",
            "price": 12000,
            "priceLabel": "12.000 Kz"
          },
          {
            "name": "Jack Daniels Honey",
            "price": 8000,
            "priceLabel": "8.000 Kz"
          },
          {
            "name": "Hibiki",
            "price": 18000,
            "priceLabel": "18.000 Kz"
          },
          {
            "name": "Monkey Shoulder",
            "price": 9000,
            "priceLabel": "9.000 Kz"
          },
          {
            "name": "Nikka Days Jap",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          },
          {
            "name": "Nikka From the Barrel",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Nikka Toilored",
            "price": 34000,
            "priceLabel": "34.000 Kz"
          },
          {
            "name": "Proper Nº Twelve",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Toki",
            "price": 10000,
            "priceLabel": "10.000 Kz"
          }
        ]
      },
      {
        "id": "cervejas-em-garrafas",
        "title": "Cervejas em Garrafas",
        "items": [
          {
            "name": "Heineken",
            "price": 6000,
            "priceLabel": "6.000 Kz"
          },
          {
            "name": "Hunters Cidra",
            "price": 4500,
            "priceLabel": "4.500 Kz"
          }
        ]
      },
      {
        "id": "rum",
        "title": "Rum",
        "items": [
          {
            "name": "El Dorado",
            "price": 7000,
            "priceLabel": "7.000 Kz"
          },
          {
            "name": "1800 Anejo",
            "price": 22000,
            "priceLabel": "22.000 Kz"
          },
          {
            "name": "1800 Reposado",
            "price": 15000,
            "priceLabel": "15.000 Kz"
          },
          {
            "name": "Dom Zacapa",
            "price": 20000,
            "priceLabel": "20.000 Kz"
          }
        ]
      }
    ]
  },
  {
    "id": "vinhos",
    "label": "Vinhos & Espumantes",
    "tagline": "Garrafeira do Alentejo ao Champanhe.",
    "sections": [
      {
        "id": "vinhos-tintos",
        "title": "Vinhos Tintos",
        "items": [
          {
            "name": "Trinca Bolotas",
            "price": 25000,
            "priceLabel": "25.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Paulo Laureano Clássico",
            "price": 20000,
            "priceLabel": "20.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Monte da Peceguina",
            "price": 55000,
            "priceLabel": "55.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Bojador Reserva",
            "price": 40000,
            "priceLabel": "40.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Esporão",
            "price": 28000,
            "priceLabel": "28.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Esporão Reserva",
            "price": 45000,
            "priceLabel": "45.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Segredos São Miguel R",
            "price": 23000,
            "priceLabel": "23.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Mariana",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Pêra-manca",
            "price": 1350000,
            "priceLabel": "1.350.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Bojador",
            "price": 25000,
            "priceLabel": "25.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Sossego",
            "price": 20000,
            "priceLabel": "20.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Duas Quintas",
            "price": 12000,
            "priceLabel": "12.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Tons Duorum",
            "price": 21000,
            "priceLabel": "21.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Esteva",
            "region": "Douro"
          },
          {
            "name": "Papa Figos",
            "price": 26000,
            "priceLabel": "26.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Callabriga",
            "price": 90000,
            "priceLabel": "90.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Barca Velha",
            "price": 1500000,
            "priceLabel": "1.500.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Silk & Spice",
            "price": 25000,
            "priceLabel": "25.000 Kz",
            "region": "Diversos"
          },
          {
            "name": "Cabriz",
            "price": 22000,
            "priceLabel": "22.000 Kz",
            "region": "Diversos"
          },
          {
            "name": "Vale do Bero",
            "price": 22000,
            "priceLabel": "22.000 Kz",
            "region": "Angola"
          },
          {
            "name": "Plaisir de Merle",
            "price": 75000,
            "priceLabel": "75.000 Kz",
            "region": "África do Sul"
          },
          {
            "name": "Nedeburg Barone",
            "price": 20000,
            "priceLabel": "20.000 Kz",
            "region": "África do Sul"
          },
          {
            "name": "4TH Street",
            "price": 20000,
            "priceLabel": "20.000 Kz",
            "region": "África do Sul"
          },
          {
            "name": "Chateau Los Boldos Gr",
            "price": 45000,
            "priceLabel": "45.000 Kz",
            "region": "Chile"
          },
          {
            "name": "Los Boldos la Campana",
            "price": 80000,
            "priceLabel": "80.000 Kz",
            "region": "Chile"
          },
          {
            "name": "Ronco di Sassi",
            "price": 60000,
            "priceLabel": "60.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Brunilde Primitivo",
            "price": 45000,
            "priceLabel": "45.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Brunilde Cabernet",
            "price": 35000,
            "priceLabel": "35.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Primitivo Salento",
            "price": 35000,
            "priceLabel": "35.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Rosso Sicília Reserva",
            "price": 24000,
            "priceLabel": "24.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Soraigh Libet Cl",
            "price": 35000,
            "priceLabel": "35.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Negroamaro",
            "price": 42000,
            "priceLabel": "42.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Gardetta Igt",
            "description": "2020 soraigh",
            "price": 45000,
            "priceLabel": "45.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Merlot Veneto",
            "price": 28000,
            "priceLabel": "28.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Garg-sauv .igt",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Val Rip Super Ripasso",
            "price": 62000,
            "priceLabel": "62.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Poggio",
            "price": 60000,
            "priceLabel": "60.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Nero Marone",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Itália"
          },
          {
            "name": "Calvet Grande Reserve",
            "price": 40000,
            "priceLabel": "40.000 Kz",
            "region": "França"
          },
          {
            "name": "Jp Chenet Merlot",
            "price": 22000,
            "priceLabel": "22.000 Kz",
            "region": "França"
          },
          {
            "name": "Latapie",
            "price": 40000,
            "priceLabel": "40.000 Kz",
            "region": "França"
          }
        ]
      },
      {
        "id": "vinhos-brancos",
        "title": "Vinhos Brancos",
        "items": [
          {
            "name": "Trinca Bolotas",
            "price": 25000,
            "priceLabel": "25.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Paulo Laureano Clássico",
            "price": 20000,
            "priceLabel": "20.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Esporão",
            "price": 28000,
            "priceLabel": "28.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Segredos São Miguel R",
            "price": 23000,
            "priceLabel": "23.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Mariana",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Alentejano"
          },
          {
            "name": "Planalto",
            "price": 12000,
            "priceLabel": "12.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Tons Duorum",
            "price": 21000,
            "priceLabel": "21.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Papa Figos",
            "price": 26000,
            "priceLabel": "26.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Duas Quintas",
            "price": 50000,
            "priceLabel": "50.000 Kz",
            "region": "Douro"
          },
          {
            "name": "Silk & Spice",
            "price": 25000,
            "priceLabel": "25.000 Kz",
            "region": "Diversos"
          },
          {
            "name": "Cabriz",
            "price": 22000,
            "priceLabel": "22.000 Kz",
            "region": "Diversos"
          },
          {
            "name": "Finca Flichman Sweet",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Argentina"
          },
          {
            "name": "Flichman Reserva Chardonnay",
            "price": 40000,
            "priceLabel": "40.000 Kz",
            "region": "Argentina"
          },
          {
            "name": "Framingham C Sauvion",
            "price": 35000,
            "priceLabel": "35.000 Kz",
            "region": "Nova Zelândia"
          },
          {
            "name": "Framingham Nobody´s Heroe",
            "price": 45000,
            "priceLabel": "45.000 Kz",
            "region": "Nova Zelândia"
          },
          {
            "name": "Aimone",
            "price": 24000,
            "priceLabel": "24.000 Kz",
            "region": "Itália"
          }
        ]
      },
      {
        "id": "espumantes-champanhe",
        "title": "Espumantes & Champanhe",
        "items": [
          {
            "name": "Mateus",
            "region": "Vinhos Rosés"
          },
          {
            "name": "Portal",
            "price": 35000,
            "priceLabel": "35.000 Kz",
            "region": "Vinhos Rosés"
          },
          {
            "name": "Papa Figos",
            "price": 26000,
            "priceLabel": "26.000 Kz",
            "region": "Vinhos Rosés"
          },
          {
            "name": "Bico Amarelo",
            "price": 20000,
            "priceLabel": "20.000 Kz",
            "region": "Vinhos Verdes"
          },
          {
            "name": "Gazela",
            "region": "Vinhos Verdes"
          },
          {
            "name": "Bojador",
            "price": 40000,
            "priceLabel": "40.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "Belaire Rosé",
            "price": 65000,
            "priceLabel": "65.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "Mateus Brut",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "Intimista",
            "price": 25000,
            "priceLabel": "25.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "Jc Leroux",
            "price": 28000,
            "priceLabel": "28.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "1935 S / a",
            "price": 26000,
            "priceLabel": "26.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "Allure",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "Voga Italia",
            "price": 30000,
            "priceLabel": "30.000 Kz",
            "region": "Espumantes"
          },
          {
            "name": "Moet Chandon Néctar I",
            "price": 180000,
            "priceLabel": "180.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Moet Chandon Brut",
            "price": 170000,
            "priceLabel": "170.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Krug",
            "price": 900000,
            "priceLabel": "900.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Armand de Brignac",
            "price": 1500000,
            "priceLabel": "1.500.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Ruinart Blanc del Blancs",
            "price": 300000,
            "priceLabel": "300.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Veuve Clicquot Yellow",
            "price": 180000,
            "priceLabel": "180.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Veuve Clicquot Rich",
            "price": 200000,
            "priceLabel": "200.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Mumm Brut",
            "price": 130000,
            "priceLabel": "130.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Mumm Ice",
            "price": 150000,
            "priceLabel": "150.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Dom Pérignon Blanc L",
            "price": 750000,
            "priceLabel": "750.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Perrier Jouet Brut",
            "price": 250000,
            "priceLabel": "250.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Perrier Jouet Blanc de Blancs",
            "price": 300000,
            "priceLabel": "300.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Moet Chandon Ice",
            "price": 190000,
            "priceLabel": "190.000 Kz",
            "region": "Champanhe"
          },
          {
            "name": "Ruinart Brut",
            "price": 250000,
            "priceLabel": "250.000 Kz",
            "region": "Champanhe"
          }
        ]
      }
    ]
  }
];

export const signatureDishes: MenuItem[] = menu
  .flatMap((g) => g.sections)
  .flatMap((s) => s.items)
  .filter((i) => i.signature);
