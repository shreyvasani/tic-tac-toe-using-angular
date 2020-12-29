import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMesaage:string ='';

  isCross=false;

  itemArray:string[] = new Array(9).fill('empty')

  constructor(private toastr: ToastrService) {}
  

  handleClick=(itemNumber:string)=>{

    if(this.winMesaage){
      return this.toastr.success(this.winMesaage)
    }
    
    
    if(this.itemArray[itemNumber] === "empty"){
        this.itemArray[itemNumber] = this.isCross?'cross':'circle';
        this.isCross = !this.isCross
    }
    else if(this.winMesaage === ""){
      this.draw()
    //   //  return this.toastr.warning("Already filled");
       
    }
    else{
      return this.toastr.warning("Already filled");
    }
 
      this.isWinner()
     
      // var win = this.isWinner()
      // console.log(win)
      // if(win ==undefined){
      //   this.draw()
      // }
  }


  reloadGame = () => {
    this.winMesaage = '';
    this.isCross=false;
    this.itemArray=new Array(9).fill('empty');
  }
  isWinner = () => {
   
    if(
      this.itemArray[0]===this.itemArray[1] && 
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ){
      return this.winMesaage=`${this.itemArray[0]} is winner`
    }
    else if(
        this.itemArray[3]===this.itemArray[4] && 
        this.itemArray[3] === this.itemArray[5] &&
        this.itemArray[3] !== 'empty'
    )
    {
      return   this.winMesaage = `${this.winMesaage[3]} is winner`
    }
    else if(
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[6] === this.itemArray[8] &&
      this.itemArray[6] !== 'empty'
    ){
      return this.winMesaage = `${this.winMesaage[6]} is winner`
    }
    else if(
        this.itemArray[0] === this.itemArray[3] &&
        this.itemArray[0] === this.itemArray[6] &&
        this.itemArray[0] !== 'empty'
    ){
     return  this.winMesaage = `${this.itemArray[0]} is winner`
    }
    else if(
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[1] === this.itemArray[7] &&
      this.itemArray[1] !== 'empty'
    ){
      return this.winMesaage = `${this.itemArray[1]} is winner`
    }
    else if(
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[2] === this.itemArray[8] &&
      this.itemArray[2] !== 'empty'
    ){
      return this.winMesaage = `${this.itemArray[2]} is winner`
    }
    else if(
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[0] === this.itemArray[8] &&
      this.itemArray[0] !== 'empty'
    ){
      return this.winMesaage = `${this.itemArray[0]} is winner`
    }
    else if(
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[2] === this.itemArray[6] &&
      this.itemArray[2] !== 'empty'
    ){
      return this.winMesaage = `${this.itemArray[2]} is winner`
    }
    console.log(this.winMesaage)
   
  }

  draw(){
     this.winMesaage = "game draw"
     console.log(this.winMesaage);
  }

}

