import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

import { PageHeaderService} from './page-header.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() pageTitle: string;

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit() {
  }

  showCreateForm(){
        this.pageHeaderService.notifyOther({option: 'SHOW-CREATE-FORM', value: this.pageTitle});
  }

  readData(){
        this.pageHeaderService.notifyOther({option: 'READ-DATA', value: this.pageTitle});
  }

}
