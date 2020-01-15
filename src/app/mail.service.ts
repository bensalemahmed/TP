import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  mode = ''
  constructor() { }
  
  getListe(){

    return JSON.parse(localStorage.getItem("mails")) 
  }
  sendMail(mail){

   let liste = JSON.parse(localStorage.getItem("mails") || '[]') 
   mail ["date"]= Date.now();
   liste.push(mail);
   localStorage.setItem("mails",JSON.stringify(liste))
  }
  deleatMail(index){ 
    console.log(index)
    let liste = JSON.parse(localStorage.getItem("mails")) 
    liste =liste.filter((e,i)=>
      i!==index
    )
    console.log(liste)
    localStorage.setItem("mails",JSON.stringify(liste))
  }
}
