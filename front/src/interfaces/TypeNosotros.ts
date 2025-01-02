export interface CardProps {
    name: string;
    role: string;
    imageUrl: string;
  }

export interface detallePorMienbros {
    name: string;
    role: string;
    imageUrl: string;
    nombreCompleto: string;
    imagen: string;
    aportes_en_PFhenrypt21b: string;
    linkedin_link: string;
    github_link: string;
    contacto_directo: string;
  }

  export interface NosotrosDetallesProps {
    detalle: {
      name: string;
      role: string;
      imageUrl: string;
      nombreCompleto: string;
      imagen: string;
      aportes_en_PFhenrypt21b: string;
      linkedin_link: string;
      github_link: string;
      contacto_directo: string;
    } | null;
  }
