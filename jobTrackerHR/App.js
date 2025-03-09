import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import NewJobs from './screens/NewJobs'
import AllJob from './screens/AllJob';
import AllApplicants from './screens/AllApplicants';
import ApplicantsDetails from './screens/ApplicantsDetails';

export default function App() {
  return (
    //<View style={styles.container}>
        // <LoginPage />
        // <RegisterPage />
        // <NewJobs /> 
        // <AllJob />
        <AllApplicants /> 
        // <ApplicantsDetails />
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
