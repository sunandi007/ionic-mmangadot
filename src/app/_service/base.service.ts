import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {ChapterList, DetailComic, MangaList} from '../_model/detail-komic';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  getMangaList(): Observable<MangaList[]> {
    return this.http.get<any>('http://localhost:3000/manga')
      .pipe(map((response: any) => response.data));
  }

  getDetailComic(slug: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/manga/one-piece`)
      .pipe(map((response: any) => response.data));
  }

  getChapterList(): Observable<ChapterList[]> {
    return this.http.get<any>(`http://localhost:3000/chapters`)
      .pipe(map((response: any) => response.data));
  }

  getOnChapter(id: string): Observable<ChapterList[]> {
    return this.http.get<any>(`http://localhost:3000/chapters/${id}`)
      .pipe(map((response: any) => response.data));
  }
}
