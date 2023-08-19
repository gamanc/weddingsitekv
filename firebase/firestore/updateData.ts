import firebaseApp from "../config";
import {
  getFirestore,
  DocumentData,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function updateData(
  collectionName: string,
  id: string,
  data: DocumentData
) {
  let result = null;
  let error = null;

  try {
    const docRef = doc(db, collectionName, id);
    result = await setDoc(docRef, data, { merge: true });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
