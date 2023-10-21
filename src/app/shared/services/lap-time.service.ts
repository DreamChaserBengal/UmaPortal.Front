import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JsonSerializer } from '../utils/json-serializer';
import { ApiRequestBase } from './api-request-base';

@Injectable({
  providedIn: 'root'
})
export class LapTimeService extends ApiRequestBase {
  private static readonly domain: string = 'lap-time';

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public getLapTime(): Observable<Object> {
    let requestUrl = this.generateApiRequestUrl(
      LapTimeService.domain,
      "URL"
    );
    return this.sendGetRequest(requestUrl).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
