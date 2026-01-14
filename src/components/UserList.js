import { FlatList, View } from "react-native"; 
import { useEffect, useState } from "react";
import SingleUser from "./SingleUser"; 

export default function UserList({route, navigation}){
    const [data, setData] = useState([])
  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=20')
        const result = await response.json()
        let formatedUsers = [];
        for(let res of result.results) {
          formatedUsers.push(formatUser(res));
        }
        setData(formatedUsers);
      } catch (err) {
        console.log(err)
      }
    }
    fetchUsers();
  }, [])


  function formatUser(singleUser) {
    let infos = {};
    infos["name"] = singleUser.name.first;
    infos["surname"] = singleUser.name.last;
    infos['gender'] = singleUser.gender;
    infos['thumbnail'] = singleUser.picture.thumbnail;
    infos['large'] = singleUser.picture.large;
    infos['id'] = singleUser.login.uuid; 
    infos['age'] = singleUser.dob.age; 
    return infos;
  }

    return (
        <View>
            <FlatList 
                renderItem = {({item})=> 
                <SingleUser 
                    thumbnail={item.thumbnail}
                    large={item.large} 
                    name={item.name} 
                    surname={item.surname}
                    age={item.age}
                    gender={item.gender}
                    navigation={navigation}
                />
            }
                data = {data}
                keyExtractor = {item => item.id}
            />

        </View>
)

    
}
