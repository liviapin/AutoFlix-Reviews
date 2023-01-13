import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ArrayFiltroPipe } from './core/pipes/array-filtro.pipe';
import { SharedModule } from './shared/shared.module';




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
