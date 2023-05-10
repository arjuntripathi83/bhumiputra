import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import app from "../firebaseConfig";

import { collection, getDocs, getFirestore } from "firebase/firestore";

const Equipmentsbrowser = () => {

  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEquipmentData = () => {
    setLoading(true);
    const db = getFirestore(app);
    const ref = collection(db, "equipment");
    getDocs(ref).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        obj: doc.data(),
      }));
      // console.log(data[0].obj.name);
      setEquipmentList(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchEquipmentData();
  }, [])
  


  return (
    <View>
      <Text>Equipmentsbrowser</Text>
    </View>
  );
};

export default Equipmentsbrowser;
