import { useAuthStore } from '@/stores/auth-store';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reviewstrategies.devapi.app.br/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token de autenticação
apiClient.interceptors.request.use(
  (config) => {
    const { user } = useAuthStore.getState(); // Supondo que os dados do usuário estejam armazenados na Zustand store
    if (user && user.access_token) {
      config.headers['Authorization'] = `Bearer ${user.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
