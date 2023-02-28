var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
getColors();
function getColors() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('/getAll'); //
            const json = (yield res.json()); //automaticamente json va aser colorpalette
            if (json && json.length > 0) { //si json existe y es mayor que 0 procesa
                const items = json.map((item) => {
                    const colorsContainer = document.createElement('div'); //capa
                    colorsContainer.classList.add('colorContainer'); //añadiendo estilos
                    const div1 = document.createElement('div');
                    div1.classList.add('color'); //añadimos la clase al contenedor 
                    div1.textContent = item.color1; //el contenido del texto es igual a color 1
                    div1.style.backgroundColor = item.color1; //definimos el fondo de la capa
                    const div2 = document.createElement('div');
                    div2.classList.add('color');
                    div2.textContent = item.color2;
                    div2.style.backgroundColor = item.color2;
                    const div3 = document.createElement('div');
                    div3.classList.add('color');
                    div3.textContent = item.color3;
                    div3.style.backgroundColor = item.color3;
                    const div4 = document.createElement('div');
                    div4.classList.add('color');
                    div4.textContent = item.color4;
                    div4.style.backgroundColor = item.color4;
                    const div5 = document.createElement('div');
                    div5.textContent = item.title;
                    div5.classList.add("title");
                    const container = document.createElement('div'); //contenedor padre
                    colorsContainer.append(div1, div2, div3, div4);
                    container.append(div5, colorsContainer);
                    return container; //devolvemos el contenedor padre
                });
                (_a = document.querySelector('#items')) === null || _a === void 0 ? void 0 : _a.append(...items); //para no tener problemas a la hora de cargar la información
            }
        }
        catch (error) { }
    });
}
export {};
