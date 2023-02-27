import { Injectable } from '@angular/core';
import { Note } from '../type/note';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc  } from "firebase/firestore"; 
import db from 'src/firebase';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NoteService  {

  constructor(private route: Router) { }
  items: any[] = [];
  note: any = {}
  id: string = "";
  async getNotes(){
   const data = await getDocs(collection(db, "notes"));
   this.items = data.docs.map(doc => ({...doc.data(), id: doc.id}));
  }

  async addNote(note: Note){
    const docRef = await addDoc(collection(db, "notes"), note);
    console.log("Document written with ID: ", docRef.id);
    this.route.navigateByUrl('/')

  }

  async editNote(note: any){
    const noteRef = doc(db, "notes", note.id);
    await updateDoc(noteRef, note);
    this.route.navigateByUrl('/')

  }

  async getSingleNote(item: any){
    this.note = item;
    this.route.navigateByUrl('/edit/'+item)
  }
  async deleteNote(id: any){
    await deleteDoc(doc(db, "notes", id));
    this.route.navigateByUrl('/')
  }
}

