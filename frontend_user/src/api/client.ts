const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api/v1';

export interface ApiRequestConfig extends RequestInit {
  url: string;
  params?: Record<string, string | number | boolean | undefined>;
  data?: unknown;
}

export async function customFetch<T>(config: ApiRequestConfig): Promise<T> {
  const url = new URL(`${API_BASE_URL}${config.url}`);
  if (config.params) {
    for (const [key, value] of Object.entries(config.params)) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    }
  }

  const headers = new Headers(config.headers);
  if (config.data !== undefined && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(url.toString(), {
    ...config,
    headers,
    credentials: 'include',
    body: config.data !== undefined ? JSON.stringify(config.data) : config.body,
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return (await response.json()) as T;
}
