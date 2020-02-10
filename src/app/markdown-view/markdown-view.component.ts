import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-markdown-view',
  templateUrl: './markdown-view.component.html',
  styleUrls: ['./markdown-view.component.css']
})
export class MarkdownViewComponent implements OnInit {
  markdown = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
    - Unordered list
    - Another unordered bullet point
  
  ### Blockquote
  > Blockquote to the max`;

  path = ""
  markArray = []
  titleString = []
  title = ""
  description = ""
  constructor(private http: HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.path = this._Activatedroute.snapshot.paramMap.get("path");
    this.http.get(this.path, {responseType: 'text'})
      .subscribe(mark=>{
        this.titleString = mark.split("--")
        console.log(this.titleString[1])
        let titleInfo = this.titleString[1].split(':')
        console.log(titleInfo)
        this.title = titleInfo[2].replace(/['"]+/g, '').replace("excerpt","")
        this.description = titleInfo[3].replace(/['"]+/g, '').replace("categories","")
        this.markArray = mark.split('\n\n')
        this.markArray.shift()
        let junk = this.markArray[0]
        console.log(junk.replace("-",""))
      });
  }

}
