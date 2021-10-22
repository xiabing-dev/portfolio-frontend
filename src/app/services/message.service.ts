import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import Message from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private dbPath = '/messages';

  messagesRef: AngularFireList<Message>;

  constructor(private db: AngularFireDatabase) {
    this.messagesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Message> {
    return this.messagesRef;
  }

  create(message: Message): any {
    return this.messagesRef.push(message);
  }

  update(key: string, value: any): Promise<void> {
    return this.messagesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.messagesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.messagesRef.remove();
  }
}