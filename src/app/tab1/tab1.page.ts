import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MangaList} from '../_model/detail-komic';
import {BaseService} from "../_service/base.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  mangaList$!: Observable<MangaList[]>;

  constructor(private service: BaseService) {}

  ngOnInit() {
    this.mangaList$ = this.service.getMangaList();
  }

}
