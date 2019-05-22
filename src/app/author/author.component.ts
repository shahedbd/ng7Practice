import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';
import { Observable } from 'rxjs';
import Post from '../DataService/post';
import { PostService } from '../DataService/post.service';
import swal from 'sweetalert';
import { SweetAlertService } from 'angular-sweetalert-service';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})


export class AuthorComponent implements OnInit {
  searchText: any;

  //sorting
  key: string = 'id'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  data: any;
  posts: Post[];
  title = 'angular-confirmation-dialog';

  constructor(private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.postService
      .getPostsInfo()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  async deletePosts(id) {
    let itemDelete = false;

    await swal({
      title: 'Are you sure to delete it?',
      // text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: [
        'No',
        'Yes'
      ],
      dangerMode: true,
    }).then(async function (isConfirm) {
      if (isConfirm) {
        itemDelete = true;
        swal({
          title: 'Deleted',
          // text: 'Candidates are successfully shortlisted!',
          icon: 'success'
        }).then((result) => {
          if (result.value) {
          } else {
          }
        });
      } else {
        swal('Cancelled', '', 'error');
      }
    });

    if (itemDelete) {
      this.route.params.subscribe(async params => {
        this.postService.deletePosts(id);
        await delay(1);
        this.ngOnInit();
      });
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }

}
