
import express, { Express, Request, Response } from 'express';//importando tipos de express para el servidor
import { randomUUID } from 'crypto';//para generar nuestros ID's
import { ColoRequest, ColorPalette } from './types/types';//importamos estas propiedades del archivo types en la carpeta types 

const app: Express = express();//estancia para poder configurar la app


app.use(express.static('./public'));//donde queremos que nos sirvan los archivos de la carpeta public
app.use(express.urlencoded());//Lo utilizamos para poder tratar los datos que me envian los datos http (body) como si fuera un objeto 

const colors: ColorPalette[] = [];//guardamos en memoria la variable

app.post('/register', (req: Request, res: Response) => {//colocamos la ruta de la app con parametros de pregunta y respuesta 
    const { title, color1, color2, color3, color4 }: ColoRequest = req.body;//desestructuramos las propiedas que esperamos recibir de la solicitud con la propiedas de colorequest
    const values = [color1, color2, color3, color4];//creamos el arreglo 
    const map: Map<string, number> = new Map();//creamos map para mapear a la lista de colores

    values.forEach(value => {//iterando mis valores
        if (map.has(value)) {//si existe map sacamos la referencia
            const ref = map.get(value);
            ref && map.set(value, ref + 1)//incrementamos el valor de map para que no se repitan los colores
        } else {
            map.set(value, 1);//si existe mas de un colo significa que el color ya se repitió
        }
    });
    let repeated = false;//
    map.forEach((value, key) => {//evaluamos si value es mayor que 1
        if (value > 1) {
            repeated = true;
        }
    });
    if (repeated) {
        res.redirect("/error.html");//si se repite emite el mensaje de la pagina error.html
    } else {
        colors.push({// si no se repite añadimos a la paleta colors la nueva paleta de colores
            id: randomUUID(),
            title,
            color1,
            color2,
            color3,
            color4,
        });
        res.redirect("/");
    }
});
app.get('/getAll', (req: Request, res: Response) => {//implementamos funcion que nos permite obtener la lista de colores
    res.json(colors);
})

app.listen(3000, () => {//marcamos el puerto 3000 como puerto de escucha del servidor local
    console.log("Servidor iniciado..");
});