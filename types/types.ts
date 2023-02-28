export interface ColorPalette {//añadimos algunos estilos a la interfaz para la paleta de colores
    id: string;
    title: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
}

export type ColoRequest = Pick<ColorPalette, "title" | "color1" | "color2" | "color3" | "color4">;//definimos las propiedades que queremos que se hereden a la nueva interfaz