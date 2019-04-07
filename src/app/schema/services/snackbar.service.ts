import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig
  } from '@angular/material';
  

  @Injectable({
    providedIn: 'root'
  })
export class CustomSnackbarService {

    constructor(
      public snackBar: MatSnackBar
    ) {}

    public open(message, action = 'success', duration = 5000) {
        this.snackBar.open(message, action, { duration });
    }

    public inprogress(message, action = 'success', duration = 5000) {
        this.snackBar.open("<mat-spinner></mat-spinner>", action, { duration });
    }

}