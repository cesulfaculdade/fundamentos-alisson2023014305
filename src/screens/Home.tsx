
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Alert} from "react-native"
import { Product } from "../components/Product";


export function Home() {

    const products = ["Arroz",
    "Feijão",
    "Macarrão",
    "Farinha de Trigo",
    "Açúcar",
    "Sal",
    "Óleo de Soja",
    "Leite",
    "Ovos",
    "Pão",
    "Café",
    "Chá",
    "Manteiga",
    "Queijo",
    "Presunto",
    "Frango",
    "Carne Bovina",
    "Peixe",
    "Frutas",
    "Legumes",
    "Verduras",
    "Batata",
    "Cebola",
    "Alho",
    "Tomate",
    "Cenoura",
    "Banana",
    "Maçã",
    "Laranja",
    "Uva",
    "Refrigerante",
    "Suco",
    "Água Mineral",
    "Biscoitos",
    "Cereais",
    "Molho de Tomate",
    "Condimentos",
    "Iogurte",
    "Sorvete",
    "Chocolate"];

    function handleProductAdd(){
        if(products.includes('Arroz')){
            Alert.alert("Produto já cadastrado","Já existe um produto na lista com esse nome.")
        }
        
    }

    function handleProductRemove(name: string){
        console.log(`Produto Removido! ${name}`);
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

            <Text style={styles.listTitle}>Compras Pendentes</Text>

        <FlatList 
            data={products}
            keyExtractor={item => item} 
            renderItem={({item})=> (
            <Product name={item} onRemove={()=> handleProductRemove(item)}/>
        )} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={products.length <= 0 && styles.list}
            ListEmptyComponent={()=>(
                
                <Text style={styles.listEmptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text>

            )}
        />



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
        marginBottom: 36,
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
    },
    listTitle:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        
    },
    listEmptyText:{
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    list:{
        flex: 1,
        justifyContent: 'center',

    }

  
  });