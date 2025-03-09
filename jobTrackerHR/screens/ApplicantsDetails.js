import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
  } from "react-native";
  import React from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
  
  const ApplicantsDetails = ({ route }) => {
    const applicant = {
      ApplicantName: "Beaver Lodge",
      ApplicantImage:
        "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
      ApplicantCVUrl:
        "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
      ApplicantMajor: "Marine Resource Management",
      ApplicantSkills: "R Studio, ArcGIS, Public Science Education",
      ApplicantDOB: "23/05/1990",
      JobId: "A1",
      ApplicantEmail: "beaver.lodge@email.com",
      ApplicantPhone: "+1 234 567 8900",
      ApplicantLocation: "Oregon, USA",
      ApplicantExperience: "5 years",
      ApplicantEducation: "Master's Degree",
      ApplicantLanguages: "English, Spanish",
      ApplicantStatus: "Active",
    };
  
    const openCV = () => {
      Linking.openURL(applicant.ApplicantCVUrl);
    };
  
    return (
      <ScrollView style={styles.container}>
        {/* <LinearGradient */}
         {/* colors={["#4158D0", "#C850C0", "#FFCC70"]}
          style={styles.headerGradient}
        > */}
        <View style = {styles.headerGradient}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: applicant.ApplicantImage }}
              style={styles.profileImage}
            />
            <View style={styles.statusDot} />

          </View>
  
          <Text style={styles.name}>{applicant.ApplicantName}</Text>
          <Text style={styles.major}>{applicant.ApplicantMajor}</Text>
          <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, styles.rejectButton]}>
                        <Text style={styles.buttonText}>Reject</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={[styles.actionButton, styles.approveButton]}>
                         <Text style={styles.buttonText}>Approve</Text>
                     </TouchableOpacity>
                     {/* <TouchableOpacity style={[styles.actionButton, styles.cvButton]} onPress={openCV}>
              <MaterialIcons name="description" size={24} color="#fff" />
              <Text style={styles.buttonText}> CV</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={[styles.button, styles.contactButton]}onPress={openCV}>
              <MaterialIcons name="description" size={24} color="#fff" />
              <Text style={styles.buttonText}>CV</Text>
            </TouchableOpacity>
          </View>
          </View>
        {/* </LinearGradient> */}
  
        <View style={styles.detailsContainer}>
          {/* Basic Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Basic Information</Text>
            <View style={styles.infoRow}>
              <Ionicons name="location" size={20} color="#666" />
              <Text style={styles.infoText}>{applicant.ApplicantLocation}</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="calendar" size={20} color="#666" />
              <Text style={styles.infoText}>Born: {applicant.ApplicantDOB}</Text>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome5 name="graduation-cap" size={20} color="#666" />
              <Text style={styles.infoText}>{applicant.ApplicantEducation}</Text>
            </View>
          </View>
  
          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <View style={styles.infoRow}>
              <Ionicons name="mail" size={20} color="#666" />
              <Text style={styles.infoText}>{applicant.ApplicantEmail}</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="call" size={20} color="#666" />
              <Text style={styles.infoText}>{applicant.ApplicantPhone}</Text>
            </View>
          </View>
  
          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {applicant.ApplicantSkills.split(",").map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill.trim()}</Text>
                </View>
              ))}
            </View>
          </View>
  
          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.languagesContainer}>
              {applicant.ApplicantLanguages.split(",").map((language, index) => (
                <View key={index} style={styles.languageBadge}>
                  <Text style={styles.languageText}>{language.trim()}</Text>
                </View>
              ))}
            </View>
          </View>
  
          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.experienceBox}>
              <MaterialIcons name="work" size={24} color="#4158D0" />
              <Text style={styles.experienceText}>
                {applicant.ApplicantExperience}
              </Text>
            </View>
          </View>
  
          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.button} onPress={openCV}>
              <MaterialIcons name="description" size={24} color="#fff" />
              <Text style={styles.buttonText}>View CV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.contactButton]}>
              <MaterialIcons name="chat" size={24} color="#fff" />
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default ApplicantsDetails;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
    headerGradient: {
      padding: 20,
      alignItems: "center",
      paddingTop: 60,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    imageContainer: {
      position: "relative",
      marginBottom: 15,
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 4,
      borderColor: "#fff",
    },
    name: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 5,
    },
    major: {
      fontSize: 18,
      color: "#333",
      opacity: 0.9,
      marginBottom: 10,
    },
    jobIdContainer: {
      backgroundColor: "rgba(255,255,255,0.2)",
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 15,
    },
    jobIdText: {
      color: "#fff",
      fontSize: 14,
    },
    detailsContainer: {
      padding: 20,
    },
    section: {
      backgroundColor: "#fff",
      borderRadius: 15,
      padding: 15,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 15,
    },
    infoRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      gap: 10,
    },
    infoText: {
      fontSize: 16,
      color: "#666",
    },
    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
    },
    skillBadge: {
      backgroundColor: "#f0f0f0",
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 20,
    },
    skillText: {
      color: "#666",
      fontSize: 14,
    },
    languagesContainer: {
      flexDirection: "row",
      gap: 10,
    },
    languageBadge: {
      backgroundColor: "#e3f2fd",
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 20,
    },
    languageText: {
      color: "#1976d2",
      fontSize: 14,
    },
    experienceBox: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: "#f8f9fa",
      padding: 15,
      borderRadius: 10,
    },
    experienceText: {
      fontSize: 16,
      color: "#666",
    },
    actionButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 15,
      marginTop: 10,
    },
    button: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
     gap: 10,
      backgroundColor: "#4158D0",
      padding: 15,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    contactButton: {
      backgroundColor: "#C850C0",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },  buttonContainer: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                marginBottom: 30,
            },
            actionButton: {
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 8,
                minWidth: 80,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 3,
            },
            rejectButton: {
                backgroundColor: 'red',
            },
            approveButton: {
                backgroundColor: "#4CAF50",
            },
            cvButton: {
                backgroundColor: 'blue',
            },
            buttonText: {
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
            },
  });
  

