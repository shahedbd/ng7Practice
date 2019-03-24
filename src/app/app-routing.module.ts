import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { CreateauthorComponent } from './author/createauthor/createauthor.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'ProfileEditor', component: ProfileEditorComponent },
  { path: 'Author', component: AuthorComponent },
  { path: 'Author/CreateAuthor', component: CreateauthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
