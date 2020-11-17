import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ''): User[] 
  {
    if(searchCriteria == "")
      return users;
  
    let selectedUsers: User[] = [];
    for(let u of users)
    {
      if(u.id.toString().includes(searchCriteria) ||
          u.username.toLowerCase().includes(searchCriteria) ||
          u.firstName.toLowerCase().includes(searchCriteria) ||
          u.lastName.toLowerCase().includes(searchCriteria))
      {
        selectedUsers.push(u);
      }
    }
    return selectedUsers;
  }
}
