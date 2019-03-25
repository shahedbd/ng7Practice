import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './DataService/post.service';
import { CreateauthorComponent } from './author/createauthor/createauthor.component';
import { UpdateauthorComponent } from './author/updateauthor/updateauthor.component';
import { DeleteauthorComponent } from './author/deleteauthor/deleteauthor.component';
import { EditauthorComponent } from './author/editauthor/editauthor.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    NavComponent,
    HomeComponent,
    AuthorComponent,
    CreateauthorComponent,
    UpdateauthorComponent,
    DeleteauthorComponent,
    EditauthorComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
