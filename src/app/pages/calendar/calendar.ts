import { Component } from "@angular/core";
import { CommonModule, DatePipe } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ContainerComponent } from "../../components/container/container";
import interactionPlugin from '@fullcalendar/interaction';
import { ModalService } from "../../components/modal/services/modal.service";
import { TransactionCardComponent } from "../../components/transaction-card/transaction-card";
import { Event } from "./types";
import { CreateEventComponent } from './components/create-event/create-event';
import { CardComponent } from "../../components/card/card";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html',
  standalone: true,
  providers: [DatePipe],
  imports: [CommonModule, FullCalendarModule, ContainerComponent, TransactionCardComponent, CardComponent]
})

export class CalendarComponent {

  events: Event[] = [
    {
      title: 'Carro',
      date: '2025-08-06',
      account: 'Debit',
      icon: 'pi pi-minus',
      amount: 6715,
      frequency: 'Monthly',
      color: 'red'
    },
    {
      title: 'Renta',
      date: '2025-08-21',
      account: 'Debit',
      icon: 'pi pi-minus',
      amount: 6000,
      frequency: 'Monthly',
      color: 'red'
    },
    {
      title: 'Nómina',
      date: '2025-08-08',
      account: 'Debit',
      icon: 'pi pi-plus',
      amount: 6400,
      frequency: 'Monthly',
      color: 'green'
    },
    {
      title: 'Nómina',
      date: '2025-08-15',
      account: 'Debit',
      icon: 'pi pi-plus',
      amount: 5400,
      frequency: 'Monthly',
      color: 'green'
    },
    {
      title: 'Nómina',
      date: '2025-08-22',
      account: 'Debit',
      icon: 'pi pi-plus',
      amount: 5400,
      frequency: 'Monthly',
      color: 'green'
    },
    {
      title: 'Nómina',
      date: '2025-08-29',
      account: 'Debit',
      icon: 'pi pi-plus',
      amount: 5400,
      frequency: 'Monthly',
      color: 'green'
    }
  ]

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    height: 'auto',
    buttonText: {
      today: 'Today'
    },
    headerToolbar: {
      right: 'addEventButton,prev,next today',
      left: 'title',
    },
    events: this.events,
    customButtons: {
      addEventButton: {
        text: 'Add Event Today',
        click: (arg) => {
          this.createEventModal();
        }
      }
    },
  };

  constructor(
    private modalService: ModalService,
    private datePipe: DatePipe
  ) { }

  handleDateClick(arg: any) {
    console.log(arg);
    
    this.createEventModal(arg);

  }

  createEventModal(arg: any = null) {
    let date = !arg ? new Date() : arg.date;
    let data = {
      title: `Add Event on ${this.datePipe.transform(date, 'yyyy-MM-dd')}`,
      width: 'w-100',
    };

    this.modalService.open(CreateEventComponent, data);
  }
}