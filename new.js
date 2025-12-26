document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  const boxes = document.querySelectorAll(".box");
  const imgs = document.querySelectorAll(".img");
  const headings = document.querySelectorAll(".heading");
  const text1 = document.querySelectorAll(".text1");
  const text2 = document.querySelectorAll(".text2");
  const text3 = document.querySelectorAll(".text3");
  const text4 = document.querySelectorAll(".text4");

  boxes.forEach((box, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
      },
    });

    // 1️⃣ Image animation (FIRST)
    tl.from(imgs[i], {
      scale: 1.6,
    });

    // 2️⃣ Heading animation (SECOND)
    tl.from(
      headings[i],
      {
        y: 120,
        opacity: 0,
      },
      "+=0.1"
    );

    // 3️⃣ All texts together (THIRD)
    tl.from(
      [text1[i], text2[i], text3[i], text4[i]],
      {
        y: 80,
        opacity: 0,
        stagger: 0.05,
      },
      "+=0.1"
    );
  });
});

const countries = [
  {
    id: 1,
    name: "China",
    capital: "Beijing",
    population: "140.9 crores",
    president: "Xi Jinping",
    languages: "Mandarin",
    region: "East Asia",
    description:
      "China is a country in East Asia and the world's second-most populous country.",
  },
  {
    id: 2,
    name: "India",
    capital: "New Delhi",
    population: "142.9 crores",
    president: "Droupadi Murmu",
    languages: "Hindi, English",
    region: "South Asia",
    description:
      "India is the world's most populous country, known for its rich cultural heritage.",
  },
  {
    id: 3,
    name: "United States",
    capital: "Washington, D.C.",
    population: "33.9 crores",
    president: "Joe Biden",
    languages: "English",
    region: "North America",
    description:
      "The United States is a federal republic of 50 states with global economic influence.",
  },
  {
    id: 4,
    name: "Canada",
    capital: "Ottawa",
    population: "4 crores",
    president: "N/A",
    languages: "English, French",
    region: "North America",
    description:
      "Canada is known for its vast landscapes and high quality of life.",
  },
  {
    id: 5,
    name: "Brazil",
    capital: "Brasília",
    population: "21.6 crores",
    president: "Luiz Inácio Lula da Silva",
    languages: "Portuguese",
    region: "South America",
    description:
      "Brazil is the largest country in South America, famous for the Amazon rainforest.",
  },
  {
    id: 6,
    name: "United Kingdom",
    capital: "London",
    population: "6.7 crores",
    president: "N/A",
    languages: "English",
    region: "Europe",
    description:
      "The UK is a group of islands known for its historical influence worldwide.",
  },
  {
    id: 7,
    name: "France",
    capital: "Paris",
    population: "6.5 crores",
    president: "Emmanuel Macron",
    languages: "French",
    region: "Europe",
    description:
      "France is known for art, fashion, cuisine, and historical landmarks.",
  },
  {
    id: 8,
    name: "Germany",
    capital: "Berlin",
    population: "8.4 crores",
    president: "Frank-Walter Steinmeier",
    languages: "German",
    region: "Europe",
    description:
      "Germany is Europe’s largest economy and a leader in engineering.",
  },
  {
    id: 9,
    name: "Italy",
    capital: "Rome",
    population: "5.9 crores",
    president: "Sergio Mattarella",
    languages: "Italian",
    region: "Europe",
    description:
      "Italy is famous for its art, architecture, and ancient Roman history.",
  },
  {
    id: 10,
    name: "Spain",
    capital: "Madrid",
    population: "4.8 crores",
    president: "Pedro Sánchez",
    languages: "Spanish",
    region: "Europe",
    description:
      "Spain is known for vibrant culture, food, and historic cities.",
  },

  {
    id: 11,
    name: "Japan",
    capital: "Tokyo",
    population: "12.4 crores",
    president: "Naruhito",
    languages: "Japanese",
    region: "East Asia",
    description:
      "Japan is a technologically advanced country with deep traditions.",
  },
  {
    id: 12,
    name: "South Korea",
    capital: "Seoul",
    population: "5.1 crores",
    president: "Yoon Suk Yeol",
    languages: "Korean",
    region: "East Asia",
    description:
      "South Korea is known for K-pop, technology, and rapid development.",
  },
  {
    id: 13,
    name: "Russia",
    capital: "Moscow",
    population: "14.6 crores",
    president: "Vladimir Putin",
    languages: "Russian",
    region: "Eastern Europe / North Asia",
    description: "Russia is the largest country in the world by land area.",
  },
  {
    id: 14,
    name: "Australia",
    capital: "Canberra",
    population: "2.6 crores",
    president: "N/A",
    languages: "English",
    region: "Oceania",
    description:
      "Australia is known for unique wildlife and vast natural landscapes.",
  },
  {
    id: 15,
    name: "New Zealand",
    capital: "Wellington",
    population: "0.5 crores",
    president: "N/A",
    languages: "English, Māori",
    region: "Oceania",
    description:
      "New Zealand is known for scenic beauty and outdoor adventure.",
  },

  {
    id: 16,
    name: "Mexico",
    capital: "Mexico City",
    population: "12.6 crores",
    president: "Andrés Manuel López Obrador",
    languages: "Spanish",
    region: "North America",
    description:
      "Mexico has a rich history from ancient civilizations to modern culture.",
  },
  {
    id: 17,
    name: "Argentina",
    capital: "Buenos Aires",
    population: "4.6 crores",
    president: "Javier Milei",
    languages: "Spanish",
    region: "South America",
    description: "Argentina is famous for tango, football, and Patagonia.",
  },
  {
    id: 18,
    name: "Chile",
    capital: "Santiago",
    population: "1.9 crores",
    president: "Gabriel Boric",
    languages: "Spanish",
    region: "South America",
    description: "Chile stretches along South America's western edge.",
  },
  {
    id: 19,
    name: "Peru",
    capital: "Lima",
    population: "3.4 crores",
    president: "Dina Boluarte",
    languages: "Spanish",
    region: "South America",
    description: "Peru is home to ancient Incan sites like Machu Picchu.",
  },
  {
    id: 20,
    name: "Colombia",
    capital: "Bogotá",
    population: "5.1 crores",
    president: "Gustavo Petro",
    languages: "Spanish",
    region: "South America",
    description: "Colombia is known for biodiversity and coffee.",
  },

  {
    id: 21,
    name: "South Africa",
    capital: "Pretoria",
    population: "6 crores",
    president: "Cyril Ramaphosa",
    languages: "English, Zulu",
    region: "Africa",
    description: "South Africa is known for diverse cultures and wildlife.",
  },
  {
    id: 22,
    name: "Egypt",
    capital: "Cairo",
    population: "11.2 crores",
    president: "Abdel Fattah el-Sisi",
    languages: "Arabic",
    region: "Africa",
    description: "Egypt is home to ancient pyramids and Nile civilization.",
  },
  {
    id: 23,
    name: "Nigeria",
    capital: "Abuja",
    population: "22.7 crores",
    president: "Bola Tinubu",
    languages: "English",
    region: "Africa",
    description: "Nigeria is Africa's most populous country.",
  },
  {
    id: 24,
    name: "Kenya",
    capital: "Nairobi",
    population: "5.5 crores",
    president: "William Ruto",
    languages: "English, Swahili",
    region: "Africa",
    description: "Kenya is famous for wildlife safaris and landscapes.",
  },
  {
    id: 25,
    name: "Morocco",
    capital: "Rabat",
    population: "3.7 crores",
    president: "N/A",
    languages: "Arabic, French",
    region: "Africa",
    description: "Morocco blends Arab, Berber, and European influences.",
  },

  {
    id: 26,
    name: "Saudi Arabia",
    capital: "Riyadh",
    population: "3.6 crores",
    president: "N/A",
    languages: "Arabic",
    region: "Middle East",
    description: "Saudi Arabia is the birthplace of Islam.",
  },
  {
    id: 27,
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    population: "1 crore",
    president: "N/A",
    languages: "Arabic",
    region: "Middle East",
    description: "UAE is known for modern cities like Dubai.",
  },
  {
    id: 28,
    name: "Turkey",
    capital: "Ankara",
    population: "8.5 crores",
    president: "Recep Tayyip Erdoğan",
    languages: "Turkish",
    region: "Europe / Asia",
    description:
      "Turkey bridges Europe and Asia culturally and geographically.",
  },
  {
    id: 29,
    name: "Iran",
    capital: "Tehran",
    population: "8.9 crores",
    president: "Ebrahim Raisi",
    languages: "Persian",
    region: "Middle East",
    description: "Iran has a long history dating back to ancient Persia.",
  },
  {
    id: 30,
    name: "Israel",
    capital: "Jerusalem",
    population: "0.9 crores",
    president: "Isaac Herzog",
    languages: "Hebrew",
    region: "Middle East",
    description:
      "Israel is a technologically advanced nation in the Middle East.",
  },

  {
    id: 31,
    name: "Pakistan",
    capital: "Islamabad",
    population: "24 crores",
    president: "Asif Ali Zardari",
    languages: "Urdu, English",
    region: "South Asia",
    description: "Pakistan is known for mountainous terrain and rich history.",
  },
  {
    id: 32,
    name: "Bangladesh",
    capital: "Dhaka",
    population: "17.3 crores",
    president: "Mohammed Shahabuddin",
    languages: "Bengali",
    region: "South Asia",
    description: "Bangladesh is a river-rich country in South Asia.",
  },
  {
    id: 33,
    name: "Sri Lanka",
    capital: "Sri Jayawardenepura Kotte",
    population: "2.2 crores",
    president: "Ranil Wickremesinghe",
    languages: "Sinhala, Tamil",
    region: "South Asia",
    description: "Sri Lanka is an island nation with rich biodiversity.",
  },
  {
    id: 34,
    name: "Nepal",
    capital: "Kathmandu",
    population: "3 crores",
    president: "Ram Chandra Poudel",
    languages: "Nepali",
    region: "South Asia",
    description: "Nepal is home to Mount Everest.",
  },
  {
    id: 35,
    name: "Bhutan",
    capital: "Thimphu",
    population: "0.08 crores",
    president: "N/A",
    languages: "Dzongkha",
    region: "South Asia",
    description: "Bhutan prioritizes Gross National Happiness.",
  },

  {
    id: 36,
    name: "Thailand",
    capital: "Bangkok",
    population: "7 crores",
    president: "N/A",
    languages: "Thai",
    region: "Southeast Asia",
    description: "Thailand is famous for beaches and temples.",
  },
  {
    id: 37,
    name: "Vietnam",
    capital: "Hanoi",
    population: "9.8 crores",
    president: "Vo Van Thuong",
    languages: "Vietnamese",
    region: "Southeast Asia",
    description: "Vietnam has a long coastline and rich culture.",
  },
  {
    id: 38,
    name: "Indonesia",
    capital: "Jakarta",
    population: "27.7 crores",
    president: "Joko Widodo",
    languages: "Indonesian",
    region: "Southeast Asia",
    description: "Indonesia is the world's largest island nation.",
  },
  {
    id: 39,
    name: "Philippines",
    capital: "Manila",
    population: "11.4 crores",
    president: "Ferdinand Marcos Jr.",
    languages: "Filipino, English",
    region: "Southeast Asia",
    description: "The Philippines consists of over 7,000 islands.",
  },
  {
    id: 40,
    name: "Malaysia",
    capital: "Kuala Lumpur",
    population: "3.4 crores",
    president: "N/A",
    languages: "Malay",
    region: "Southeast Asia",
    description: "Malaysia is known for rainforests and modern cities.",
  },

  {
    id: 41,
    name: "Singapore",
    capital: "Singapore",
    population: "0.6 crores",
    president: "N/A",
    languages: "English, Malay, Mandarin",
    region: "Southeast Asia",
    description: "Singapore is a global financial and tech hub.",
  },
  {
    id: 42,
    name: "Netherlands",
    capital: "Amsterdam",
    population: "1.7 crores",
    president: "N/A",
    languages: "Dutch",
    region: "Europe",
    description: "Netherlands is famous for canals and cycling.",
  },
  {
    id: 43,
    name: "Belgium",
    capital: "Brussels",
    population: "1.2 crores",
    president: "N/A",
    languages: "Dutch, French",
    region: "Europe",
    description: "Belgium hosts EU headquarters.",
  },
  {
    id: 44,
    name: "Sweden",
    capital: "Stockholm",
    population: "1.1 crores",
    president: "N/A",
    languages: "Swedish",
    region: "Europe",
    description: "Sweden is known for innovation and quality of life.",
  },
  {
    id: 45,
    name: "Norway",
    capital: "Oslo",
    population: "0.5 crores",
    president: "N/A",
    languages: "Norwegian",
    region: "Europe",
    description: "Norway is known for fjords and natural beauty.",
  },

  {
    id: 46,
    name: "Denmark",
    capital: "Copenhagen",
    population: "0.6 crores",
    president: "N/A",
    languages: "Danish",
    region: "Europe",
    description: "Denmark consistently ranks high in happiness.",
  },
  {
    id: 47,
    name: "Finland",
    capital: "Helsinki",
    population: "0.6 crores",
    president: "N/A",
    languages: "Finnish",
    region: "Europe",
    description: "Finland is known for education and innovation.",
  },
  {
    id: 48,
    name: "Poland",
    capital: "Warsaw",
    population: "3.8 crores",
    president: "Andrzej Duda",
    languages: "Polish",
    region: "Europe",
    description: "Poland has a rich history and growing economy.",
  },
  {
    id: 49,
    name: "Ukraine",
    capital: "Kyiv",
    population: "3.7 crores",
    president: "Volodymyr Zelenskyy",
    languages: "Ukrainian",
    region: "Europe",
    description: "Ukraine is the largest country entirely in Europe.",
  },
  {
    id: 50,
    name: "Greece",
    capital: "Athens",
    population: "1.04 crores",
    president: "Katerina Sakellaropoulou",
    languages: "Greek",
    region: "Europe",
    description: "Greece is the birthplace of democracy.",
  },
];

// ===============================
// IMAGE PATH BUILDER
// rule: lowercase + hyphen + .jpg
// ===============================
function getCountryImage(name) {
  const fileName = name.toLowerCase().replace(/\s+/g, "-");
  return `./src/img/${fileName}.jpg`;
}

// ===============================
// RENDER HTML
// ===============================
const wrapper = document.getElementById("countryWrapper");

wrapper.innerHTML = countries
  .map(
    (c) => `
  <div class="relative h-[80dvh] flex justify-center items-center box overflow-hidden">
    <img
      src="./src/img/gallery02.jpg"
      class="block w-full h-full absolute top-0 left-0 object-cover img"
      alt="${c.name}"
      loading="lazy"
    />
    <div class="overflow-hidden">
      <h3 class="font-extrabold text-8xl text-center relative z-10 uppercase heading">
        ${c.name}
      </h3>
    </div>
    <div>
      <p class="text-sm absolute top-2 left-2 z-10 text1">
        Capital: ${c.capital}<br />
        Population: ${c.population}<br />
        President: ${c.president}<br />
        Official languages: ${c.languages}
      </p>
      <p class="text-base absolute top-2 right-2 z-10 text2">
        ${c.region}
      </p>
      <p class="text-xl uppercase absolute bottom-2 left-2 z-10 text3">
        Country ${String(c.id).padStart(2, "0")}
      </p>
      <p class="text-sm text-end max-w-md absolute bottom-2 right-2 z-10 text4">
        ${c.description}
      </p>
    </div>
  </div>
`
  )
  .join("");
