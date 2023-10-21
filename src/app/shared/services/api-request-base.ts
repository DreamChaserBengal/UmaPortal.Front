import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiRequestBase {
    constructor(
        protected httpClient: HttpClient
    ) {
    }

    /**
     * APIへのベースURLを取得
     */
    private static readonly API_BASE = environment.API_BASE;

    /**
     * http通信オプション：レスポンス通常型
     */
    private httpOptions: any = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    /**
     * http通信オプション：レスポンスBLOB型
     */
    private blobTypeHttpOptions: any = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        observe: 'response' as 'body',
        responseType: 'blob' as 'json',
    };

    /**
     * APIへのリクエストURLを生成する
     * @param domain ドメイン               ex)eadnewspaper
     * @param route コントローラへのルート   ex)details
     * @param param クエリパラメータ名       ex)id
     * @param value クエリパラメータ代入値   ex)adminuser001
     * @returns URL ex) https://localhost:37770/eadnewspaper/api/eadnewspaper/details?id=adminuser001
     */
    public generateApiRequestUrl(domain: string, route: string, param?: string, value?: any): string {
        let restApiBaseUrl = ApiRequestBase.API_BASE;
        let requestUrl = restApiBaseUrl + domain + '/' + route;
        if (param && value) {
            requestUrl = requestUrl + '?' + param + '=' + value;
        }
        return requestUrl;
    }

    /**
     * Getリクエスト送信
     * @param URL
     */
    public sendGetRequest(URL: string) {
        return this.httpClient.get(URL, this.httpOptions).pipe(
            tap((res) => {
                console.group('GET');
                console.log('RequestURL %s', URL);
                console.log('Response %o', res);
                console.groupEnd();
            })
        );
    }

    /**
     * Postリクエスト送信
     * @param URL
     * @param body
     */
    public sendPostRequest(URL: string, body: any): Observable<Object> {
        return this.httpClient.post(URL, body, this.httpOptions).pipe(
            tap((res) => {
                console.group('POST');
                console.log('RequestURL %s', URL);
                console.log('RequestBody %o', body);
                console.log('Response %o', res);
                console.groupEnd();
            })
        );
    }

    /**
     * Deleteリクエスト送信
     * @param URL
     */
    public sendDeleteRequest(URL: string): Observable<Object> {
        return this.httpClient.delete(URL, this.httpOptions).pipe(
            tap((res) => {
                console.group('DELETE');
                console.log('RequestURL %s', URL);
                console.log('Response %o', res);
                console.groupEnd();
            })
        );
    }

    /**
     * Postリクエスト送信(blob受信)
     * @param URL
     * @param body
     */
    public sendPostRequestBlobResponse(URL: string, body: any): Observable<Object> {
        return this.httpClient.post(URL, body, this.blobTypeHttpOptions).pipe(
            tap((res: any) => {
                console.group('POST');
                console.log('RequestURL %s', URL);
                console.log('RequestBody %o', body);
                console.log('Response %o', res);
                console.groupEnd();
            })
        );
    }

}
