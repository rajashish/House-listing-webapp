import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-first-listing',
  templateUrl: './first-listing.component.html',
  styleUrls: ['./first-listing.component.css']
})
export class FirstListingComponent implements OnInit {
  @ViewChild('search_type') search_val;
  
  cribs: Array<any>=[];
  jdata: Array<any>;
  error: string;
  sortField: string ='price';
  sortFields: Array<string> =[
    'name',
    'address',
    'area' ,
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  sortDirection: string = 'asc';

  search_type: Array<string>=['All', 'House', 'Condo', 'Duplex'];
  field: string ;
  stype: string ='All';
  sname: string =''; 
  
  
  

  constructor(private http : Http , private cribsService : CribsService , private utilService : UtilService) { }

  ngOnInit() {
  this.cribsService.getAllCribs().subscribe(data=>(this.jdata = data,this.cribs=data),
    error => this.error = error.statusText);
    

    this.cribsService.newCribSubject.subscribe(data => this.jdata.push(data));  
    console.log(this.field);
    // this.filter();
   

  }
  getcrib()
  { 
    
    this.cribs = this.jdata;
    
  }
  
filter()
{
   this.cribs=[];
  
  // for(let v =0;v <this.jdata.length;v++)
  for ( let v in this.jdata)
  {
  
      if(this.jdata[v].type===this.stype || this.stype =='All'){
      this.cribs.push(this.jdata[v]);
    console.log(this.cribs);
      }
   
  }
}

searchname()
{
  this.cribs=[];
  let len=this.sname.length;
  for ( let v in this.jdata)
  {
    let vlen=this.jdata[v].name.substring(0,len);
    if(vlen===this.sname || this.sname ==='')
     {
      this.cribs.push(this.jdata[v]);
    console.log(this.cribs);
      }
   
  }
}
resetname()
{
  this.sname='';
  this.searchname();

}
 
}
  