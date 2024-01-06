import { SERVER_URL } from "../consts";
import { INote } from "../interfaces/note";

export default class NoteService {
   
    static async createNote(note: INote) {
        let response = await fetch(`${SERVER_URL}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(note)
        });

        if(response.ok) {
            return response
        } else {
            console.log("Ошибка HTTP: " + response.status);
          }
    }

    static async readNotes () {

        let response = await fetch(`${SERVER_URL}/notes`);

        if (response.ok) {
            let notes = await response.json();
            return notes
        } else {
            console.log("Ошибка HTTP: " + response.status);
          }
    }

    static async deleteNote (id: number) {
        let response = await fetch(`${SERVER_URL}/notes/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

}