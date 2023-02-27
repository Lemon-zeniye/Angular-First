import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note-list/note.service';
import { Note } from '../type/note';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private noteService: NoteService, private route : ActivatedRoute){}
  form: Note = { title: "", description: "", time: "", color: "" };
  onSubmit(){
    this.noteService.addNote(this.form)
  }
  onClear(){
    this.form = { title: "", description: "", time: "", color: "" };
  }
  ngOnInit(): void {
  }
}
