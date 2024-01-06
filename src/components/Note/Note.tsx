import React from 'react';
import Button from '../button/button';
import NoteService from '../../services/NoteService';
import { INote } from '../../interfaces/note';

import './Note.css';

export interface INoteComponent extends INote {
  onDeleteNote: any;
}

export default function Note(props: INoteComponent) {

  const deleteNote =  async () => {
    await NoteService.deleteNote(props.id);
    props.onDeleteNote();
  }

  return (
    <div className='note-wrapper'>
        <div className='note'>
            <p className='note-content'>{props.content}</p>
        </div>
        <Button buttonView={'cancel'} onClick={deleteNote} additionalClass='note-button'></Button>
    </div>
  )
}
