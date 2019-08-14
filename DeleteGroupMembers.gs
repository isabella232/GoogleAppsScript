//This function searches for members in specific groups and deletes them- Owners and managers are not deleted.

function getGroupMembers() {
  var groupKey01="forumtest@doit-intl.com"; //group name
  var members01=AdminDirectory.Members.list(groupKey01, {roles:'MEMBER'}); //group members array objects
  var groupKey02="bittitan@doit-intl.com"; //group name
  var members02=AdminDirectory.Members.list(groupKey02, {roles:'MEMBER'}); //group members array objects
  
  //Logger.log ("Group: "+ groupKey01);
  //Logger.log (members01);
  //Logger.log (" ");
  
  //Logger.log ("Group: "+ groupKey02);
  //Logger.log (members02);
  //Logger.log (" ");
  
  var theMembers = members01.members //group members emails.
  if (theMembers) {
    for (var i=0 ; i < theMembers.length ; i++)
    {
      AdminDirectory.Members.remove(groupKey01, theMembers[i].email); //Remove the member from the group.
    }
  }
  theMembers = members02.members //group members emails.
  if (theMembers) {
    for (var i=0 ; i < theMembers.length ; i++)
    {
      AdminDirectory.Members.remove(groupKey02, theMembers[i].email); //Remove the member from the group.
    }
  }
 }