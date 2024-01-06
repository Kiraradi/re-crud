import React, {useEffect, useState} from 'react'
import Button from '../button/button'
import NoteService from '../../services/NoteService'
import Note from '../Note/Note'
import { INote } from '../../interfaces/note'
import NewNote from '../NewNote/NewNote'

import './Notes.css'


// button style: restart_alt  chevron_right cancel

export default function Notes() {
    const [noteList, setNoteList] = useState([] as INote[]);

    const readNote = async () => {
      const list =  await NoteService.readNotes();
      setNoteList(list);
    }

    useEffect(() => {
      readNote();
    },[])

  return (
    <div className='crud'>
        <div className='crud-header'>
            <h2 className='crud-title'>Notes</h2>
            <Button buttonView={'restart_alt'} onClick={readNote}></Button>
        </div>

        <div className='notes'>
          {
            noteList.map((note) => {
              return <Note id={note.id} content={note.content} onDeleteNote={readNote} key={note.id}></Note>
            })
          }
        </div>
        <NewNote onCreateNote={readNote}></NewNote>
        
    </div>
  )
}
