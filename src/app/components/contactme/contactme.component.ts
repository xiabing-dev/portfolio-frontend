import { Component, OnInit, Inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import Message from 'src/app/models/message';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {

  message: Message = new Message();

  constructor(private messageService: MessageService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  saveMessage(): void {
    if (this.message.name && this.message.email && this.message.message) {
      this.messageService.create(this.message).then(() => {
        this.dialog.open(ContactmeDialog);
      });
      this.message.name = '';
      this.message.email = '';
      this.message.message = '';
    }
  }
}

@Component({
  selector: 'contactme-dialog',
  templateUrl: 'dialog.component.html',
})
export class ContactmeDialog {}
