import { Ionicons } from '@expo/vector-icons'; // إضافة استيراد الأيقونات
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginPage = () => {
  return (
    <LinearGradient 
    //   colors={['#020024', '#090979', '#00d4ff']} // تدرج لوني من البنفسجي إلى الأزرق
    //   colors={['#1b66ab', '#5c82af']} // تدرج لوني من البنفسجي إلى الأزرق
    colors={['#833ab4', '#fd1d1d', '#fcb.045']} 
    // colors={['#eeaeca', '#94bbe9']} 
      style={styles.container}
    >
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
        <TextInput 
          style={styles.email}
          placeholder='Username'
          placeholderTextColor="#888"
        />
      </View>
      background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
        <TextInput 
          style={styles.email}
          placeholder='Password'
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
export default LoginPage

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
  // ... existing styles ...
});