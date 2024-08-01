import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {CustomerService} from "../services/customer.service";
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";

@Component({
  selector: 'app-customers',
  standalone: true, // Déclare ce composant comme autonome
  imports: [
    HttpClientModule, // HttpClientModule doit être importé pour utiliser HttpClient
    NgForOf,    // Utilisé pour les boucles dans le template
    NgIf,
    AsyncPipe,
    // Utilisé pour les conditions dans le template
  ],
  templateUrl: './customers.component.html', // Chemin vers le template HTML
  styleUrls: ['./customers.component.css']  // Chemin vers le fichier CSS
})
export class CustomersComponent implements OnInit {
// Typiquement, on utiliserait un modèle pour typer cette variable
  customers!: Observable<Array<Customer>>;

  errorMessage! : string;

  constructor(private customerService:CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
}
