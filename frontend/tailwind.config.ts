import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			// Enhanced Typography Scale
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
				'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
				'base': ['1rem', { lineHeight: '1.5', letterSpacing: '0em' }],
				'lg': ['1.125rem', { lineHeight: '1.625', letterSpacing: '0em' }],
				'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0em' }],
				'2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0em' }],
				'3xl': ['1.875rem', { lineHeight: '1.375', letterSpacing: '0em' }],
				'4xl': ['2.25rem', { lineHeight: '1.375', letterSpacing: '-0.025em' }],
				'5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
				'6xl': ['3.75rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
				'7xl': ['4.5rem', { lineHeight: '1.375', letterSpacing: '-0.025em' }],
				'8xl': ['6rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
				'9xl': ['8rem', { lineHeight: '1.25', letterSpacing: '-0.05em' }],
			},
			fontFamily: {
				'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'monospace'],
				'display': ['Inter', 'sans-serif'],
			},
			fontWeight: {
				'thin': '100',
				'extralight': '200',
				'light': '300',
				'normal': '400',
				'medium': '500',
				'semibold': '600',
				'bold': '700',
				'extrabold': '800',
				'black': '900',
			},
			lineHeight: {
				'tight': '1.25',
				'snug': '1.375',
				'normal': '1.5',
				'relaxed': '1.625',
				'loose': '2',
			},
			letterSpacing: {
				'tighter': '-0.05em',
				'tight': '-0.025em',
				'normal': '0em',
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(34, 197, 94, 0.8)' 
					}
				},
				'scroll-horizontal': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'liquid-blob-1': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
					'25%': { transform: 'translate(30px, -20px) scale(1.1) rotate(90deg)' },
					'50%': { transform: 'translate(-20px, 30px) scale(0.9) rotate(180deg)' },
					'75%': { transform: 'translate(-30px, -10px) scale(1.05) rotate(270deg)' }
				},
				'liquid-blob-2': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
					'33%': { transform: 'translate(-25px, 20px) scale(1.2) rotate(120deg)' },
					'66%': { transform: 'translate(35px, -15px) scale(0.8) rotate(240deg)' }
				},
				'liquid-blob-3': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
					'20%': { transform: 'translate(20px, 25px) scale(1.3) rotate(72deg)' },
					'40%': { transform: 'translate(-30px, 10px) scale(0.7) rotate(144deg)' },
					'60%': { transform: 'translate(15px, -20px) scale(1.1) rotate(216deg)' },
					'80%': { transform: 'translate(-10px, -25px) scale(0.9) rotate(288deg)' }
				},
				'liquid-blob-4': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
					'50%': { transform: 'translate(-40px, -30px) scale(1.4) rotate(180deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'scroll-horizontal': 'scroll-horizontal 15s linear infinite',
				'liquid-blob-1': 'liquid-blob-1 20s ease-in-out infinite',
				'liquid-blob-2': 'liquid-blob-2 25s ease-in-out infinite',
				'liquid-blob-3': 'liquid-blob-3 18s ease-in-out infinite',
				'liquid-blob-4': 'liquid-blob-4 22s ease-in-out infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
