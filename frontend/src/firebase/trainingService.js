import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const saveTrainingSession = async (sessionData) => {
  try {
    const docRef = await addDoc(
      collection(db, "trainingSessions"),
      sessionData
    );

    console.log("Training session saved:", docRef.id);
  } catch (error) {
    console.error("Error saving training session:", error);
  }
};
export const getTrainingSessions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "trainingSessions"));

    const sessions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return sessions;
  } catch (error) {
    console.error("Error fetching training sessions:", error);
    return [];
  }
};