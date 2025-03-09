import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const NewJobs = () => {
  return (
    <View   style={styles.container}>
     {/* <LinearGradient  */}
        {/* //   colors={['#020024', '#090979', '#00d4ff']} 
        //   colors={['#090979', '#f9f9f9', '#ffe000']} 
        //   colors={['#1b66ab', '#5c82af']} 
        // colors={['#6a11cb', '#2575fc']} 
            //   colors={['#fd1d1d', '#fcb045']} 

          style={styles.container}
        > */}
          <Text style={styles.title}>create new job post</Text>
          
          <View style={styles.inputContainer}>
            <Ionicons name="archive-outline" size={20} color="#888" style={styles.icon} />
            <TextInput 
              style={styles.email}
              placeholder='Job Title'
              placeholderTextColor="#888"
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Ionicons name="attach-sharp" size={20} color="#888" style={styles.icon} />
            <TextInput 
              style={styles.email}
              placeholder='Job Description'
              placeholderTextColor="#888"
            //   secureTextEntry
            />
            
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="apps-outline" size={20} color="#888" style={styles.icon} />
            <TextInput 
              style={styles.email}
              placeholder='Requirements'
              placeholderTextColor="#888"
            />
            
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="cash" size={20} color="#888" style={styles.icon} />
            <TextInput 
              style={styles.email}
              placeholder='Salary'
              placeholderTextColor="#888"
            />
            
          </View>

    
          {/* <TouchableOpacity
            style={styles.button}
            // onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>     */}
         <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}

      </View>
      )
    };
    export default NewJobs
    
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
        // color: '#fff',
        marginBottom: 20,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        marginBottom: 15,
        paddingLeft: 15,
        width : '100%',
        // height : 100,
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
      },buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
      },
      align: {
        color: '#fff',
        marginTop: 10,
      },  submitButton: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
        alignItems: "center",
        marginRight: 10,
      },
      cancelButton: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#d9534f',
        alignItems: "center",
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
      }
    
    });
