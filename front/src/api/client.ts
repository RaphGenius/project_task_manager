const BASE_URL = import.meta.env.VITE_API_BASE_URL;
type METHOD = "GET" | "POST" | "PUT" | "DELETE";

export async function fetchAPI<T>(
  url: string,
  { json, method }: { json?: Record<string, unknown>; method?: METHOD } = {}
): Promise<T> {
  method ??= json ? "POST" : "GET";
  const body = json ? JSON.stringify(json) : undefined;
  const response = await fetch(`${BASE_URL}` + url, {
    method,
    credentials: "include",
    body,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  });

  const data = await response.json();

  if (response.ok) {
    return data as Promise<T>;
  }

  throw new ApiError(response.status, await response.json());
}

class ApiError extends Error {
  constructor(public status: number, public data: Record<string, unknown>) {
    super();
  }
}
