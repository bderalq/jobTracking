import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient"; 
import AllApplicantsCard from "../src/components/AllApplicantsCard";

const applicant = [
    {
    // ApplicationId = '1',
    ApplicantName : "Beaver Lodge",
    ApplicantImage : "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
    ApplicantCVUrl : "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
    ApplicantMajor : "Marine e Resource Management",
    ApplicantSkills : "R Studio, ArcGIS, Public Science Education",
    ApplicantDOB : '23/05/1990',
    JobId : 'A1',
    },
    {
        // ApplicationId = '1',
        ApplicantName : "Beaver Lodge",
        ApplicantImage : "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
        ApplicantCVUrl : "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
        ApplicantMajor : "Marine e Resource Management",
        ApplicantSkills : "R Studio, ArcGIS, Public Science Education",
        ApplicantDOB : '23/05/1990',
        JobId : 'A1',
        },
        {
            // ApplicationId = '1',
            ApplicantName : "Beaver Lodge",
            ApplicantImage : "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
            ApplicantCVUrl : "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
            ApplicantMajor : "Marine e Resource Management",
            ApplicantSkills : "R Studio, ArcGIS, Public Science Education",
            ApplicantDOB : '23/05/1990',
            JobId : 'A1',
            },

  ]
const AllApplicants = () => {
   
  return (
    <View style= {styles.container}>
    <Text style={styles.title}>
        All Jobs
    </Text>
    <FlatList
    data={applicant}
    renderItem={({ item }) => <AllApplicantsCard applicant={item} />}
    />
  <Text>AllJob</Text>
</View>  );
};
export default AllApplicants;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: '#f9f9f9',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
});
