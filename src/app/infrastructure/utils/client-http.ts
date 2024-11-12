import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { DefaultSession, getServerSession } from "next-auth";

interface session extends DefaultSession {
  user: {
    id?: string
    token?: string
    name?: string
    email?: string
  };
}

const defaultBaseUrl = "https://beautysalongates-production.up.railway.app/api/v1";

export class HttpClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  async get<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "GET",
      cache: "no-store",
    });

    console.log(response);

    return this.handleResponse(response);
  }

  async post<T, B>(url: string, body: B): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    });

    return this.handleResponse(response);
  }

  async delete<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "DELETE",
    });
    return this.handleResponse(response);
  }

  async put<T, B>(url: string, body: B): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(body),
    });

    return this.handleResponse(response);
  }

  private async getHeader() {
    const sesion = (await getServerSession(authOptions)) as session | null;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (sesion?.user?.token) {
      headers["Authorization"] = `Bearer ${sesion.user.token}`;
    }

    console.log(headers);
    return headers;
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw errorData;
    }
    return await response.json();
  }
}