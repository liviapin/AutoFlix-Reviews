import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from './core/core.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        ReactiveFormsModule,
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        SharedModule,
        CommonModule

    ]
})
export class AppModule { }
