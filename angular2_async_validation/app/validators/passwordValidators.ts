import {ControlGroup} from 'angular2/common';

export class PasswordValidators{
  static passwordsMustMatch(group: ControlGroup){
    var newpw = group.find('newpassword');
    var confirmpw = group.find('confirmpassword');
    if (newpw.value !== confirmpw.value)
      return	{passwordsMustMatch: true};

    return null;
  }
}
