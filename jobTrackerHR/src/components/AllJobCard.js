import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AllJobCard = ({job}) => {
  return (
    <View style = {styles.card}>

      <View style = {styles.infoContainer}>
      <Text style={styles.jobTitle}>Job Title : {job.title}</Text>
      <Text style={styles.jobDescription}>Description : {job.description}</Text>
      <Text style={styles.jobSalary}>Salary : {job.salary}</Text>
       <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.buttonText}>View Applicants</Text>
              </TouchableOpacity>
      </View>

      <View style = {styles.infoContainer}>

      {/* <Text style={styles.viewMenu}>VIEW DETAILS</Text> */}
      </View>

      </View>
  )
}

export default AllJobCard

const styles = StyleSheet.create({ 
    card: {
    alignSelf: 'center', 
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: '90%', 
    borderWidth: 1,
    borderColor: '#746574',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
},
  infoContainer: {
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobDescription: {
    fontSize: 16,
    marginBottom: 6,
  },
  jobSalary: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  submitButton: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    alignItems: "center",
    marginRight: 10
},
})