import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { CreateauthorComponent } from './author/createauthor/createauthor.component';
import { EditauthorComponent } from './author/editauthor/editauthor.component';
import { PersonalInfoComponent } from './personal-info-module/personal-info/personal-info.component';
import { CreatePersonalInfoComponent } from './personal-info-module/create-personal-info/create-personal-info.component';
import { EditpersonalinfoComponent } from './personal-info-module/editpersonalinfo/editpersonalinfo.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'ProfileEditor', component: ProfileEditorComponent },
  { path: 'Author', component: AuthorComponent },
  { path: 'Author/CreateAuthor', component: CreateauthorComponent },
  { path: 'Author/EditAuthor/:id', component: EditauthorComponent},
  { path: 'PersonalInfo', component: PersonalInfoComponent},
  { path: 'PersonalInfo/CreatePersonalInfo', component: CreatePersonalInfoComponent },
  { path: 'PersonalInfo/EditPersonalInfo/:id', component: EditpersonalinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
