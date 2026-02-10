import { useContext } from "react"
import { JuegoContext } from "./JuegoContext"
import { View, Text } from "react-native";

export const JuegoHistory = () => {
const context = useContext(JuegoContext);
if(!context) return null;

const {partidas} = context;

return(
<View style={{margin: 20}}>

<Text style={{fontSize: 18, fontWeight: "bold"}}>Historial:</Text>
{partidas.map((p, index) =>(

<Text key={index}>{p}</Text>


))}



</View>






);




};