import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllJobCard from '../src/components/AllJobCard';

const AllJob = () => {
    // const [search, setSearch] = useState('');
    const [jobs, setJobs] = useState([
        {id: 1, title : 'IT Officer', description: 'develop fullstack applications', salary:'2000'},
        {id: 2, title : 'Salary Officer', description: 'check all salaries', salary:'1240'},
        {id: 3, title : 'IT Officer', description: 'develop fullstack applications', salary:'2000'}

    ]);

    // const jobsfilter = jobs.filter(job => 
    //     job.title.toLowerCase().includes(search.toLowerCase)
    // )
  return (
    <View style= {styles.container}>
        <Text style={styles.title}>
            All Jobs
        </Text>
        <FlatList
        data={jobs}
        renderItem={({ item }) => <AllJobCard job={item} />}
        />
      <Text>AllJob</Text>
    </View>
  )
}

export default AllJob

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
    })