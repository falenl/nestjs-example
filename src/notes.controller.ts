import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { Note } from './types/note';

@Controller('notes')
export class NotesController {
  notes: Note[] = [
    {
      id: 1,
      description: 'test',
    },
    {
      id: 2,
      description: 'notes 2',
    },
    {
      id: 3,
      description: 'notes 4',
    },
  ];

  @Get()
  getHello(): Note[] {
    return this.notes;
  }

  @Get(':id')
  getNoteDetail(@Param('id') id): Note {
    console.log(id);
    return this.notes.find((note) => note.id == id);
  }

  @Post()
  createNote(@Body() note: Note): Note {
    const id = this.notes[this.notes.length - 1].id + 1;

    const newNote: Note = {
      id: id,
      description: note.description,
    };

    this.notes.push(newNote);
    return newNote;
  }
}
