import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AllApplicantsCard = ({applicant}) => {
  return (
    <View style = {styles.card}>
   
         <View style = {styles.infoContainer}>
         <Image 
         source={{ uri: applicant.ApplicantImage }} 
         style={styles.image} 
         resizeMode="contain"
       />
         <Text style={styles.applicantName}>Name : {applicant.ApplicantName}</Text>
         <Text style={styles.major}>Description : {applicant.ApplicantMajor}</Text>
         <Text style={styles.skills}>Skills : {applicant.ApplicantSkills}</Text>
         <Text style={styles.dob}>Date of Birth : {applicant.ApplicantDOB}</Text>
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

export default AllApplicantsCard

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
      applicantName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      major: {
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
    image: {
        width: '100%', 
        height: 250, 
        borderRadius: 15, 
        marginBottom: 15,

    },

})