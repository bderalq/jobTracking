import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const RegisterPage = () => {
  return (
        <LinearGradient 
        //   colors={['#020024', '#090979', '#00d4ff']} 
        //   colors={['#090979', '#f9f9f9', '#ffe000']} 
        //   colors={['#1b66ab', '#5c82af']} 
        // colors={['#6a11cb', '#2575fc']} 
              colors={['#833ab4', '#fd1d1d', '#fcb045']} 

          style={styles.container}
        >
          <Text style={styles.title}>Register</Text>
          
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
            <TextInput 
              style={styles.email}
              placeholder='Username'
              placeholderTextColor="#888"
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
            <TextInput 
              style={styles.email}
              placeholder='Password'
              placeholderTextColor="#888"
              secureTextEntry
            />
            
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="clipboard-outline" size={20} color="#888" style={styles.icon} />
            <TextInput 
              style={styles.email}
              placeholder='Employee ID'
              placeholderTextColor="#888"
              secureTextEntry
            />
            
          </View>

    
          <TouchableOpacity
            style={styles.button}
            // onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
    
          <TouchableOpacity onPress={() => {/* navigation.navigate("ForgotPassword"); */}}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
    
          <Text style={styles.align}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.align}>Register</Text>
          </TouchableOpacity>
        </LinearGradient>
      )
    }
    export default RegisterPage
    
     const styles = StyleSheet.create({
        container: {
        flexGrow: 1,
        paddingTop: 90,
        paddingBottom: 30,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        marginBottom: 15,
        paddingLeft: 15,
        width : '100%'
      },
      icon: {
        marginRight: 10,
      },
      email: {
        width: '100%',
        height: 50,
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#333',
      },
      button: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
        alignItems: "center",
        width: '100%',
        marginTop: 10,
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
      },
      forgotPassword: {
        color: '#fff',
        marginTop: 10,
        textDecorationLine: 'underline',
      },
      align: {
        color: '#fff',
        marginTop: 10,
      },
    });
