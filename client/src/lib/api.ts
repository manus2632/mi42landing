import axios from 'axios';

const API_URL = 'http://46.224.9.190:3001/api/trpc';

// Axios-Instanz mit Credentials
const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// tRPC-Format: { "0": { "json": { ...data } } }
function formatTRPCRequest(data: any) {
  return { "0": { "json": data } };
}

// API-Funktionen
export const api = {
  // Freemium-Verfügbarkeit prüfen
  async checkFreemiumAvailability(email: string) {
    const response = await apiClient.post('/auth.checkFreemiumAvailability', 
      formatTRPCRequest({ email })
    );
    return response.data[0].result.data.json;
  },

  // Benutzer registrieren
  async register(data: {
    email: string;
    password: string;
    name: string;
    companyName?: string;
    acceptPrivacy: boolean;
  }) {
    const response = await apiClient.post('/auth.register', 
      formatTRPCRequest(data)
    );
    return response.data[0].result.data.json;
  },

  // Email verifizieren
  async verifyEmail(token: string) {
    const response = await apiClient.post('/auth.verifyEmail', 
      formatTRPCRequest({ token })
    );
    return response.data[0].result.data.json;
  },

  // Freemium-User einer Domain abrufen
  async getFreemiumUsers(domain: string) {
    const response = await apiClient.post('/auth.getFreemiumUsers', 
      formatTRPCRequest({ domain })
    );
    return response.data[0].result.data.json;
  },

  // Login
  async login(username: string, password: string) {
    const response = await apiClient.post('/auth.login', 
      formatTRPCRequest({ username, password })
    );
    return response.data[0].result.data.json;
  },
};

// Error-Handler
export function handleAPIError(error: any): string {
  if (axios.isAxiosError(error)) {
    const errorData = error.response?.data?.[0]?.error;
    if (errorData) {
      const code = errorData.json?.code || errorData.code;
      const message = errorData.json?.message || errorData.message;
      
      // Spezifische Fehlermeldungen
      switch (code) {
        case 'EMAIL_ALREADY_EXISTS':
          return 'Diese E-Mail ist bereits registriert. Bitte melden Sie sich an.';
        case 'FREEMIUM_LIMIT_REACHED':
          return 'Das Freemium-Limit für Ihre Domain wurde erreicht.';
        case 'INVALID_EMAIL':
          return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        case 'PASSWORD_TOO_SHORT':
          return 'Passwort muss mindestens 8 Zeichen lang sein.';
        case 'PRIVACY_NOT_ACCEPTED':
          return 'Bitte akzeptieren Sie die Datenschutzerklärung.';
        case 'INVALID_TOKEN':
          return 'Verifizierungs-Link ungültig. Bitte fordern Sie einen neuen an.';
        case 'EMAIL_ALREADY_VERIFIED':
          return 'Ihre E-Mail ist bereits verifiziert. Sie können sich anmelden.';
        case 'UNAUTHORIZED':
          return 'Benutzername oder Passwort falsch.';
        default:
          return message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
      }
    }
  }
  return 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
}
