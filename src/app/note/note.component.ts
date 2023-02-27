import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note-list/note.service';
import { Note } from '../type/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
   constructor(private noteService : NoteService, private route : ActivatedRoute){}
    @Input() item : Note =  {} as Note;
    ngOnInit(): void {}
    editNote(item: any){
      this.noteService.getSingleNote(item);
    }
    deleteNote(id: any){
      this.noteService.deleteNote(id);
    }
    
}
