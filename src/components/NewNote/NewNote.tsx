import React, { useState } from 'react';
import Button from '../button/button';
import { INote } from '../../interfaces/note';
import NoteService from '../../services/NoteService';

import './NewNote.css';

export interface INewNote {
  onCreateNote: any;
}

export default function NewNote(props: INewNote) {

  const initNewNote:INote = {
      id: 0,
      content: ''
  };

  const [newNote, setNewNote] = useState(initNewNote);

  const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewNote({...newNote, [name]: value});
  };

  const createNote = async () => {
    const res = await NoteService.createNote(newNote);

    if (res) {
      setNewNote(initNewNote);
      props.onCreateNote();
    }

  };

  return (
    <div className='newNote-wrapper'>
        <h2 className='newNote-title'>New Note</h2>
        <form className='newNote'>
            <textarea
              className='newNote-textarea'
              name='content'
              value={newNote.content}
              onChange={handlerChange}
              required
            ></textarea>
            <Button buttonView={'chevron_right'} onClick={createNote} additionalClass='newNote-button'></Button>
        </form>
        

    </div>
  );
}
