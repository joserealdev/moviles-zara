const BASE_API = process.env.API_URL || "";
const API_KEY = process.env.API_KEY || "";

type Response<T> = { data: T; error: null } | { data: null; error: string };

/**
 * Helper function to make HTTP GET requests.
 * @param endpoint - The endpoint to send the GET request to.
 * @param options - Additional fetch options.
 * @returns An object containing the parsed JSON response or an error.
 */
export async function get<T>(
  endpoint: string,
  options?: RequestInit
): Promise<Response<T>> {
  return request<T>(endpoint, { method: "GET", ...options });
}

/**
 * Core function to handle HTTP requests.
 * @param endpoint - The endpoint to send the request to.
 * @param options - Fetch options.
 * @returns An object containing the parsed JSON response or an error.
 */
async function request<T>(
  endpoint: string,
  options: RequestInit
): Promise<Response<T>> {
  try {
    const response = await fetch(`${BASE_API}${endpoint}`, {
      ...options,
      headers: {
        ...options?.headers,
        "x-api-key": API_KEY,
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return {
        data: null,
        error: `HTTP error ${response.status}: ${errorBody}`,
      };
    }

    try {
      const data: T = await response.json();
      return { data, error: null };
    } catch (error) {
      console.log("Error:", error);
      return { data: null, error: "Failed to parse response JSON" };
    }
  } catch (error) {
    console.log("Error:", error);
    return { data: null, error: "Network error or request failed" };
  }
}
