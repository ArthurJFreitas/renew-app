# 🌱 Renew App

A modern web application for monitoring and managing ecological sites with biodiversity and environmental metrics.

## 📋 Overview

Renew App is a Next.js-based dashboard that provides comprehensive tracking of environmental sites. Monitor biodiversity scores, soil quality, CO2 emissions, vegetation health, and bird species data all in one place. Built with modern technologies and a focus on user experience.

## ✨ Features

- **User Authentication**: Secure login and registration with Supabase
- **Site Management**: View and manage multiple ecological sites
- **Real-time Metrics**: Track biodiversity, soil quality, and endangered species
- **Environmental Tracking**:
  - CO2 emissions and recovery trends
  - Vegetation health index
  - Bird species monitoring
  - Soil moisture tracking
  - Map visualization
- **Interactive Charts**: Beautiful, responsive charts using Recharts
- **User Profile**: Profile section with logout functionality
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Professional UI**: Built with shadcn/ui components and Radix UI

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.7
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication**: Supabase Auth
- **UI Components**: 
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Radix UI](https://radix-ui.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd renew-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
renew-app/
├── app/                           # Next.js app directory
│   ├── (auth)/                   # Authentication pages
│   ├── dashboard/                # Dashboard pages
│   │   ├── page.tsx             # Main dashboard
│   │   └── [id]/                # Site details pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home/landing page
│   └── globals.css              # Global styles
├── components/
│   ├── Header.tsx               # Main header with logo and profile
│   ├── PasswordField.tsx         # Password input component
│   ├── cards/                   # Card components
│   │   ├── MetricCard.tsx
│   │   ├── SiteCard.tsx
│   │   ├── CO2Card.tsx
│   │   └── BirdSpeciesCard.tsx
│   ├── charts/                  # Chart components
│   │   ├── VegetationChart.tsx
│   │   ├── CO2Chart.tsx
│   │   └── SoilMoistureChart.tsx
│   └── ui/                      # Shadcn UI components
├── features/                     # Feature modules
│   └── sites/
│       ├── services/            # API services
│       ├── hooks/               # Custom hooks
│       ├── context/             # React Context
│       └── components/          # Feature components
├── lib/
│   ├── db/                      # Database clients
│   │   ├── browser-client.ts   # Supabase browser client
│   │   └── server-client.ts    # Supabase server client
│   └── utils.ts                # Utility functions
├── assets/
│   ├── logos/                  # Logo files
│   └── icons/                  # Icon files
└── public/                      # Static files
```

## 🔑 Key Components

### Header Component
Located at `components/Header.tsx` - Displays:
- App logo (links to dashboard)
- User profile section with email
- Logout functionality
- Responsive design

### Dashboard
Main dashboard at `app/dashboard/page.tsx` displays:
- Site list
- Quick access to site details
- Responsive grid layout

### Site Details
Detailed site view at `app/dashboard/[id]/SiteDetailsClient.tsx` shows:
- Biodiversity metrics
- Soil quality indicators
- Endangered species count
- CO2 tracking charts
- Vegetation health graphs
- Bird species data
- Map visualization

## 🔐 Authentication

The app uses Supabase for authentication with features:
- Email/password login and registration
- OAuth integration (Google, GitHub)
- Secure session management
- Protected routes

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start              # Start production server

# Linting
npm run lint           # Run ESLint
```

## 📊 Database Schema

The app uses Supabase with the following main table:

**sites table**
- `id`: Unique site identifier
- `name`: Site name
- `biodiversity_score`: Biodiversity rating
- `soil_quality`: Soil quality metric
- `endangered_species`: Count of endangered species
- `species`: Array of bird species
- `co2_estimated`: Estimated CO2 levels
- `co2_recovery`: CO2 recovery trend data
- `vegetation_index`: Vegetation health data
- `map_url`: URL to site map image
- Additional environmental metrics

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration:
- Responsive breakpoints
- Custom color schemes
- Smooth transitions and animations
- Modern utility-first approach

## 🚀 Deployment

The app is ready to deploy on:
- [Vercel](https://vercel.com/) (Recommended for Next.js)
- [Netlify](https://netlify.com/)
- Any Node.js-compatible hosting

### Deploy on Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Environment Variables

Required environment variables in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Arthur** - [@ArthurJFreitas](https://github.com/ArthurJFreitas)

## 📞 Support

For support, please open an issue on the repository or contact the author.

---

Built with ❤️ using Next.js and Supabase
