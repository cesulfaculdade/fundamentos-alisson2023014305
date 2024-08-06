
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native"


export function Home() {

    function handleProductAdd(){
        console.log('adicionei o produto')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                Lista de Compras
            </Text>

            <Text style={styles.todaysDate}>
                Segunda-feira, 05 de Agosto de 2024
            </Text>

          <View style={styles.form}>
            <TextInput 
            style={styles.input} 
            placeholder="Nome do Produto"
            placeholderTextColor="#BDBABA"
            keyboardType="default"
            />

            <TouchableOpacity 
            style={styles.button} 
            onPress={handleProductAdd}>

                <Text style={styles.textButton}>
                    +
                </Text>
            </TouchableOpacity>


          </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
  
      flex: 1,
      backgroundColor: '#EAEAEA',
      padding: 24,
      
    },
    input: {
      flex: 1,
      backgroundColor: "#fff",
      fontSize:16,
      borderRadius:5,
      height:56,
      padding: 16,
      marginRight: 16,
    },

    button:{
        backgroundColor: "#31C667",
        width:56,
        height:56,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        
    },
    textButton:{
        fontSize: 24,
        color: "#fff"
    },

    form:{
        width: "100%",
        flexDirection: "row",   
        marginTop: 18,

    },

    tittle:{
        color:"#000",
        fontSize:24,
        fontWeight: 'bold',
        marginTop:48
    },

    todaysDate:{
        color: '#000',
        fontSize: 16,
        fontWeight:"normal",
    }

  
  });