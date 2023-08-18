import firebaseApp from "../config";
import {
  getFirestore,
  addDoc,
  DocumentData,
  collection,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function addData(
  collectionName: string,
  data: DocumentData
) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, collectionName), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
