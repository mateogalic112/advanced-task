export interface ColorResponse {
  colors: Color[];
  schemes: any[];
  schemes_history: SchemesHistory;
  success: boolean;
  colors_history: ColorsHistory;
  messages: any[];
  new_color: string;
}

export interface Color {
  timestamp?: number;
  hex: string;
  id: number | string;
  tags?: Tag[];
}

interface Tag {
  timestamp: number;
  id: number;
  name: string;
}

interface ColorsHistory {
  edefd8: Edefd8[];
}

interface Edefd8 {
  d_count: number;
  id: string;
  a_count: number;
  name: string;
}

interface SchemesHistory {}
