import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment as env } from './../environments/environment';

@Injectable()
export class JenkinsBuildService {

	jenkinsServer: string;
	username: string;
	password: string;

  constructor(
    private http: HttpClient
  ) { }

  requestForServerConfig(): Observable<any> {
		let url = `${env.jenkins.server}/api/xml`
		const headersOptions = new HttpHeaders({
			'Authorization': 'Basic ' + btoa('sitdh:asdfjklo'),
			'Content-Type': 'application/xml'
		})
		
		return this.http.get(
			url, 
			{
				headers: headersOptions, 
				responseType: 'application/xml'
			}
		)
  }

}
