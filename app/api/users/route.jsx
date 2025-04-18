import { db } from "@/config/FirebaseConfig"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server";

export async function POST(req) {
  const {userEmail, userName} = await req.json()
  try{
    // if user already exist
    const docRef = doc(db, "users", userEmail)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
      return NextResponse.json(docSnap.data())
    }
    else{
      const data = {
        name: userName,
        email: userEmail,
        credits: 5,
      }
      await setDoc(doc(db, "users", userEmail),{
        ...data
      })

      return NextResponse.json(data)
    } 


  } catch(e){
    console.error("Error in /api/users:", e); // <-- helpful for debugging
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
} 