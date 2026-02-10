import { createContext, useState, ReactNode } from "react";

type card ={
id: number;

value: string;

flipped: boolean;

matched: boolean;


};

type JuegoContextType ={

cards: card[];

partidas: string[];

iniciarJuego: () => void;

seleccionarCarta: (id: number) => void;


}; 

export const JuegoContext = createContext<JuegoContextType | undefined>(undefined);

export const JuegoProvider = ({children}: {children: ReactNode}) =>{

const [cards, setCards] = useState<card[]>([]);

const [seleccionadas, setSeleccionadas] = useState<card[]>([]);

const [partidas, setPartidas] = useState<string[]>([]); 

const iniciarJuego = () =>{
const valores = ["A", "B", "C", "D"]; 

const baraja = [...valores, ...valores]
.sort(() => Math.random() - 0.5)
.map((val, index) =>({

id: index, 

value: val,

flipped: false,

matched: false,


}));

setCards(baraja);
setSeleccionadas([]);


};


const seleccionarCarta = (id: number) =>{
const carta = cards.find((c) => c.id === id);
if(!carta || carta.flipped || carta.matched) return;

const nuevasCartas = cards.map((c) =>
c.id === id ? {...c, flipped: true} : c


);

setCards(nuevasCartas); 

const nuevasSeleccionadas = [...seleccionadas, {...carta, flipped: true}];
setSeleccionadas(nuevasSeleccionadas);

if(nuevasSeleccionadas.length === 2){
const [c1, c2] = nuevasSeleccionadas;
if(c1.value === c2.value){

setCards((prev) => 
prev.map((c) =>
c.value === c1.value ? {...c, matched: true} : c


)


); 

setPartidas((prev) => [...prev, "Ganaste la partida"]);


}else{

setTimeout(() =>{
setCards((prev) => 
prev.map((c) => 
c.id === c1.id || c.id === c2.id ? {...c, flipped: false} : c


)



);
setPartidas((prev) =>
[...prev, "Perdiste la partida"]);



}, 1000);




}

setSeleccionadas([]);



}


}; 

return(
<JuegoContext.Provider value={{cards, partidas, iniciarJuego, seleccionarCarta}}
> {children}</JuegoContext.Provider>



);


};