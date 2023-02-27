import { Component, OnInit } from '@angular/core';
import { NoteService } from "../note-list/note.service"

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent  implements OnInit {
  constructor(private noteService : NoteService){
      this.noteService.getNotes();
  }
 getAllNotes(){
  return this.noteService.items;
 }
 ngOnInit(): void {
   this.getAllNotes()
 }

}
  
