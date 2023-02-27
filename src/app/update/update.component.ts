import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note-list/note.service';
import { Note } from '../type/note';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
   constructor(private noteService : NoteService, private route : ActivatedRoute){}
   id: any = "";
   form: Note = { title: this.noteService.note.title, description: this.noteService.note.description, time: this.noteService.note.time, color: this.noteService.note.color, id: this.noteService.note.id };
  onSubmit(){
    this.noteService.editNote(this.form)
  }
  onClear(){
    this.form = { title: "", description: "", time: "", color: "" };
  }
  ngOnInit(): void {
  }
}
