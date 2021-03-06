import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; // importing the module
import {NgxPaginationModule} from 'ngx-pagination';
import { PersonalInfoModuleModule } from './personal-info-module/personal-info-module.module';


import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { SingleSelectionExampleComponent } from './dropdown/single-selection-example/single-selection-example.component';
import { ExportdataComponent } from './jsPDF/exportdata/exportdata.component';

import { ExportAsModule } from 'ngx-export-as';
import { JspdftestComponent } from './jsPDF/jspdftest/jspdftest.component';
import { UserModule } from './user/user.module';


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
    SingleSelectionExampleComponent,
    ExportdataComponent,
    JspdftestComponent
  ],
  imports: [
    PersonalInfoModuleModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    ExportAsModule,
    UserModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
