
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../lib/firebase";

// Collection names
const CONTACTS_COLLECTION = "contacts";
const SUBSCRIBERS_COLLECTION = "subscribers";

// Contact interface
export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  timestamp?: Date;
  id?: string; // Add optional id property
}

// Subscriber interface
export interface Subscriber {
  email: string;
  timestamp?: Date;
  id?: string; // Add optional id property
}

// Add a new contact submission
export const submitContactForm = async (data: ContactSubmission) => {
  try {
    const docRef = await addDoc(collection(db, CONTACTS_COLLECTION), {
      ...data,
      timestamp: new Date()
    });
    console.log("Contact form submitted with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    return { success: false, error };
  }
};

// Add a new subscriber
export const addSubscriber = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, SUBSCRIBERS_COLLECTION), {
      email,
      timestamp: new Date()
    });
    console.log("Subscriber added with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding subscriber: ", error);
    return { success: false, error };
  }
};

// Get recent contact submissions (for admin purposes)
export const getRecentContacts = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, CONTACTS_COLLECTION),
      orderBy("timestamp", "desc"),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    const contacts: ContactSubmission[] = [];
    querySnapshot.forEach((doc) => {
      // Safely combine document data with ID
      const data = doc.data() as Omit<ContactSubmission, 'id'>;
      contacts.push({ 
        id: doc.id, 
        ...data 
      });
    });
    return contacts;
  } catch (error) {
    console.error("Error getting contacts: ", error);
    return [];
  }
};
