import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    result = [];

    //http://localhost:8000/api/albums
    ngOnInit() {
        this.http.get<any>('http://localhost:8000/api/albums').subscribe(data => this.result = data);
    }

}
