import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ChapterList} from '../_model/detail-komic';
import {BaseService} from '../_service/base.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  dataComics$!: Observable<ChapterList[]>;
  id: string;

  constructor(private service: BaseService,
              private route: ActivatedRoute,
              private location: Location) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.dataComics$ = this.service.getOnChapter(this.id);
  }

  back() {
    this.location.back();
  }
}
