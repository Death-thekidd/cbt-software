import { Component } from '@angular/core';

declare function createIndividualSearch(): void;

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  ngAfterViewInit(): void {
    createIndividualSearch();
  }
}
