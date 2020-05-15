import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Location, PopStateEvent} from '@angular/common';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(
    public location: Location,
    private router: Router
  ) { }

  ngOnInit() {}

}
