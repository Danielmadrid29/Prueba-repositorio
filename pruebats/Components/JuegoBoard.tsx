import { useContext } from "react"
import { JuegoContext } from "./JuegoContext"
import { Button, TouchableOpacity, View, Text } from "react-native"

export const JuegoBoard = () =>{

 const context = useContext(JuegoContext);   
if(!context) return null;

const {cards, iniciarJuego, seleccionarCarta} = context;

return(
<View style={{margin: 20}}> 

<Button title="Iniciar a jugar" onPress={iniciarJuego} />
<View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 20}}>
{cards.map((card) => (

<TouchableOpacity key={card.id} onPress={() => seleccionarCarta(card.id)} style={{
    width: 70,

    height: 100,

    margin: 5, 

    backgroundColor: card.flipped || card.matched ? "#ccc5c5" : "#360505",

    justifyContent: "center", 

    alignItems: "center",
}}>

<Text style={{fontSize: 25, color: "#080808"}}> {card.flipped || card.matched ? card.value : "?"} </Text>





</TouchableOpacity>





))}










</View>






</View>







);








};