import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ifcondition';
  iseye=false;
  ismouth=false;
  isear=false;
  fun(){
    if(this.iseye){
      this.iseye=false;
    }
    else{
      this.iseye=true;
    }
  }


    funne(){
      if(this.ismouth)
        {
          this.ismouth=false;
        }
      else
      {
        this.ismouth=true;
      }
    }

    fu(){
      if(this.isear){
        this.isear=false;
      }
      else{
        this.isear=true;
      }

    }

}
