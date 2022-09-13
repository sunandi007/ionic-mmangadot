import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../_service/base.service';
import {ChapterList, DetailComic} from '../_model/detail-komic';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  dataDescription$!: Observable<DetailComic>;
  chapterList$!: Observable<ChapterList[]>;
  slugUrl: string;

  constructor(private service: BaseService,
              private router: Router,
              private route: ActivatedRoute) {
    this.slugUrl = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.dataDescription$ = this.service.getDetailComic(this.slugUrl);
    this.chapterList$ = this.service.getChapterList();
  }

  goToChapter(id: string) {
    console.log(id);
    this.router.navigateByUrl(`tabs/chapter/${id}`);
  }
}
