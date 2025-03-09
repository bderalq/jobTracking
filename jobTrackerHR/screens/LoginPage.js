import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient 
      colors={['#1e3c72', '#2a5298']} // Professional blue gradient
      style={styles.container}
    >
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Username'
          placeholderTextColor="#aaa"
        />
        <Ionicons name="person-outline" size={20} color="#aaa" style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Password'
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerHint}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
    height: 55,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#1e3c72',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#fff',
    marginTop: 15,
    fontSize: 14,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  registerHint: {
    color: '#fff',
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
