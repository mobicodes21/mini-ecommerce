# ✨ PooshaMod

🛍️ Seamless & Modern Online Shopping Experience

PooshaMod is a sleek and modern E-commerce web app built with React + Vite ⚡️
It’s all about fast UI, smooth UX, clean code, and showing off top-tier React skills.

🌐 [Live Demo on Vercel](https://mini-ecommerce-ikko.vercel.app/)

---

🛠 Tech Stack

⚛️ React + Vite – lightning-fast, modern front-end framework

📦 Redux – scalable state management like a pro

🎨 MUI + Styled Components – stylish & responsive UI

🎠 Swiper – smooth product carousels

✅ Formik + Yup – bulletproof form handling & validation

🗄 JSON Server – mock API for dev & testing

🔗 Axios / Fetch – API communication made simple



---

⚡️ Features

🖼 Product listing with carousel & grid views

🛒 Fully functional shopping cart (add/remove)

📱 100% responsive design – works everywhere

📝 Validated forms using Formik + Yup

🔌 Mock API integration for realistic data flow



---

🔔 Notifications

To enhance user experience, **PooshaMod** integrates **react-toastify** for toast notifications.  
These notifications offer real-time feedback on user interactions such as successful signup, login, adding/removing products from the cart, and form validation errors.  
The toast messages appear briefly in the viewport corner, providing clear and immediate communication without interrupting the user flow.

---

PooshaMod/
├─ public/
├─ src/
│  ├─ components/       # Reusable UI components
│  ├─ pages/            # Home, Product, Cart
│  ├─ redux/            # State slices & store
│  ├─ api/              # Axios / fetch requests
│  └─ styles/           # Global & component styles
├─ assets/               # Images & GIFs
│  └─ demo.gif
├─ db.json               # JSON Server mock data
└─ vite.config.js



---

🔄 Data Flow

1. Components dispatch actions → Redux updates store


2. Axios/Fetch hits JSON Server → gets/updates data


3. UI subscribes to store → instant reactivity


4. Forms handled with Formik + Yup → smooth validation & submission




---

## Getting Started

1️⃣ Clone & Install

```bash
git clone https://github.com/mobicodes21/mini-ecommerce.git
cd PooshaMod
npm install
npm run dev



---

💡 Notes

Built as a fullstack React practice project 💻

Redux makes scaling & maintenance easy

MUI + Styled Components keep the UI sharp & responsive

Formik + Yup make forms a breeze

Structured for clean, scalable, maintainable code ✨
