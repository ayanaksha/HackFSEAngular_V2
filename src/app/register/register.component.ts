import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloworldmsgService } from '../service/data/helloworldmsg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: any;
  responseMsg: String;

  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service: HelloworldmsgService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name'])
    this.username = this.route.snapshot.params['name']
  }

  getmsg(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulRequest(response),
      error => this.handleErrorResponse(error)
      // response => console.log(response)
    );

    // console.log("Last line of register....");
    // console.log("Your Contents are being prepared .....");
  }

  getmsgwithparam(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServicePathVariable(this.username).subscribe(
      response => this.handleSuccessfulRequest(response),
      error => this.handleErrorResponse(error)
      // response => console.log(response)
    );  
  }

  handleSuccessfulRequest(response){
    // console.log(response);
    // console.log(response.message);
    this.responseMsg = response.message;
  }

  handleErrorResponse(error){
    // console.log(response);
    // console.log(response.message);
    this.responseMsg = error.error.message;
  }


}
