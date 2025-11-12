# Mi42 Landing Page

Professionelle Landing Page für Mi42 - KI-gestütztes Marktforschungsportal für die Bauzulieferindustrie.

## Überblick

Diese Landing Page ist die zentrale Marketing- und Registrierungs-Plattform für Mi42. Sie fokussiert sich auf:

- **Marketing**: Produktpräsentation, Features, Pricing, Testimonials
- **Registrierung**: Freemium-Check, Email-Verifizierung, Account-Erstellung
- **Onboarding-Redirect**: Weiterleitung zur Hauptanwendung nach erfolgreicher Registrierung

## Features

### Seiten

- **Homepage** (`/`): Hero-Section, 7 KI-Agenten, Pricing, Testimonials, FAQ
- **Features** (`/features`): Detaillierte Beschreibung aller 7 Agenten + Automated Briefings
- **Pricing** (`/pricing`): Freemium-Modell, Credit-Pakete, Subscriptions
- **About** (`/about`): Über Mi42, Team, Vision
- **Registrierung** (`/register`): Registrierungs-Formular mit Freemium-Check
- **Freemium Exhausted** (`/register/exhausted`): Seite für 3. User (Freemium erschöpft)
- **Email-Verifizierung** (`/verify-email`): Email-Bestätigungs-Seite
- **Login** (`/login`): Login-Formular mit Redirect zur Hauptanwendung

### Freemium-Modell

**Domain-basiertes Freemium-Limit**:
- Pro Firmen-Domain (z.B. `heidelbergcement.de`) sind **2 Freemium-Registrierungen** erlaubt
- Jeder Freemium-User erhält **7 kostenlose Analysen** (alle Agenten mit vorausgefüllten Prompts)
- Zusätzlich **5.000 Credits** für manuelle Analysen
- Der **3. User** aus derselben Firma muss sich **kostenpflichtig registrieren**

### Registrierungs-Flow

1. User gibt Email-Adresse ein
2. System extrahiert Domain und prüft Freemium-Verfügbarkeit
3. Falls verfügbar: Registrierung fortsetzen
4. Falls erschöpft: Redirect zu `/register/exhausted`
5. Nach erfolgreicher Registrierung: Bestätigungs-Email
6. Email-Verifizierung → Redirect zur Hauptanwendung

## Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS 4
- **Komponenten**: shadcn/ui
- **Formular-Validierung**: Native React State
- **SEO**: react-helmet-async
- **Icons**: lucide-react

## Design-System

### Farben

- **Primärfarbe**: Blau (`oklch(0.55 0.18 264)`) - Vertrauen, Professionalität
- **Sekundärfarbe**: Orange (`oklch(0.65 0.20 35)`) - Energie, Innovation
- **Akzentfarbe**: Grün (`oklch(0.70 0.18 160)`) - Erfolg, Wachstum
- **Hintergrund**: Hellgrau (`oklch(0.985 0 0)`)

### Typografie

- **Font**: Inter (Google Fonts)
- **Überschriften**: Bold, 32-48px
- **Fließtext**: Regular, 16-18px
- **CTAs**: Semibold, 16px

## API-Endpoints

Die Landing Page kommuniziert mit der Hauptanwendungs-API:

### Freemium-Check
```
POST http://46.224.9.190:3001/api/auth/check-freemium-availability
Body: { email: string }
Response: { available: boolean; usedSlots: number; limit: number }
```

### Registrierung
```
POST http://46.224.9.190:3001/api/auth/register
Body: { email: string; password: string; companyName: string; acceptPrivacy: boolean }
Response: { success: boolean; userId?: number; error?: string }
```

### Email-Verifizierung
```
POST http://46.224.9.190:3001/api/auth/verify-email
Body: { token: string }
Response: { success: boolean; redirectUrl?: string }
```

### Login
```
POST http://46.224.9.190:3001/api/auth/login
Body: { email: string; password: string }
Response: { success: boolean; redirectUrl?: string }
```

### Freemium-User-Abfrage
```
GET http://46.224.9.190:3001/api/auth/freemium-users?domain=heidelbergcement.de
Response: { users: Array<{ email, name, registeredAt }>; resetDate: string }
```

## Entwicklung

### Lokale Entwicklung

```bash
pnpm install
pnpm dev
```

Die Seite ist dann unter `http://localhost:3000` erreichbar.

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Deployment

Die Landing Page ist für statisches Hosting optimiert und kann auf Vercel, Netlify oder ähnlichen Plattformen deployed werden.

**Wichtig**: Die API-Endpoints müssen in der Produktionsumgebung angepasst werden (aktuell: `http://46.224.9.190:3001`).

## Conversion-Ziele

- **Landing Page → Registrierung**: >15%
- **Registrierung → Email-Verifizierung**: >80%
- **Email-Verifizierung → Onboarding-Abschluss**: >70%

## Viralität

- Freemium-User empfehlen Kollegen (Referral-Rate >40%)
- 3. User kontaktiert bestehende Freemium-User (>50%)
- Viral-Coefficient: >0,8 (jeder Freemium-User bringt fast 1 neuen User)

## Abgrenzung zur Hauptanwendung

| Feature | Landing Page | Hauptanwendung |
|---------|--------------|----------------|
| **Marketing** | ✅ Hero, Features, Pricing, Testimonials | ❌ |
| **Registrierung** | ✅ Formular, Freemium-Check, Email-Verifizierung | ❌ |
| **Login** | ✅ Formular → Redirect zur Hauptanwendung | ✅ Session-Management |
| **Onboarding** | ❌ Redirect zur Hauptanwendung | ✅ 7 automatische Analysen |
| **Agent-Ausführung** | ❌ | ✅ |
| **Briefings** | ❌ | ✅ |
| **Credit-Kauf** | ❌ | ✅ Stripe-Integration |
| **User-Management** | ❌ | ✅ |

## Lizenz

© 2025 Mi42. Alle Rechte vorbehalten.
