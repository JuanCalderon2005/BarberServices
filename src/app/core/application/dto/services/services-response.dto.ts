export interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  offset: number;
  sort: Sort[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface IResponseDataServices {
  totalPages: number;
  totalElements: number;
  pageable: Pageable;
  numberOfElements: number;
  size: number;
  content: Product[];
  number: number;
  sort: Sort[];
  first: boolean;
  last: boolean;
  empty: boolean;
}
