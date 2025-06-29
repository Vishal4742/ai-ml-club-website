# AI & ML Club Website

A modern, responsive website for the AI & ML Club at Oriental College of Technology, Bhopal. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Team Showcase**: Interactive team member profiles with detailed information
- **Event Management**: Display upcoming and past events with registration links
- **Project Gallery**: Showcase club projects and achievements
- **Contact Forms**: Integrated contact and newsletter signup forms
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **SEO Ready**: Optimized meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Netlify/Vercel ready

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm run preview
```

### Deploy to Netlify

#### Option 1: Drag & Drop (Quick)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to deploy area
4. Your site is live!

#### Option 2: Git Integration (Recommended)
1. Push your code to GitHub
2. Connect repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy automatically on every push

### Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite settings
4. Deploy with one click

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Custom components
│   ├── data/               # Static data and configurations
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   └── assets/             # Images and static assets
├── public/                 # Public assets
├── dist/                   # Build output
└── config files           # Vite, TypeScript, etc.
```

## 🎨 Customization

### Team Members
Update team information in `src/data/team-members.ts`:
```typescript
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Your Name",
    role: "Your Role",
    image: "/path/to/image.jpg",
    bio: "Your bio...",
    skills: ["Skill 1", "Skill 2"],
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

### Events
Update events in `src/components/Events.tsx`:
```typescript
const upcomingEvents = [
  {
    title: "Event Title",
    date: "2024-01-15",
    time: "10:00 AM",
    location: "Location",
    description: "Event description",
    lumaUrl: "https://lu.ma/event-url"
  }
];
```

### Styling
- Colors: Update CSS variables in `src/index.css`
- Components: Modify shadcn/ui components in `src/components/ui/`
- Layout: Edit component structure in respective files

## 📸 Adding Profile Pictures

1. **Prepare images**: 400x400px, JPG/PNG format
2. **Upload to**: `src/assets/images/team/`
3. **Update data**: Modify `image` field in `team-members.ts`
4. **Naming convention**: `firstname-lastname.jpg`

See `UPLOAD_INSTRUCTIONS.md` for detailed guide.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint configuration included
- Prettier formatting recommended
- Component-based architecture

## 🌐 Environment Variables

Create `.env.local` for local development:
```env
VITE_API_URL=your-api-url
VITE_ANALYTICS_ID=your-analytics-id
```

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 3 seconds on 3G
- **SEO**: Fully optimized meta tags

## 🔒 Security

- Security headers configured
- XSS protection enabled
- Content Security Policy ready
- HTTPS enforcement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support:
- **Tech Lead**: Ayush Kumar
- **General Manager**: Prakhar Sahu
- **Email**: [club-email@oct.edu.in]

## 📄 License

This project is maintained by the AI & ML Club at Oriental College of Technology, Bhopal.

---

**Built with ❤️ by the AI & ML Club Team**
