/**
 * This script counts the number of files and folders in a given TeamDrive.
 * Change the "var TeamDriveID = '0AP9wThnH65b6Uk9PVA'" to the team drive ID you need.
*/ 


function CountTDriveFiles() {
  var TeamFiles;
  var Files;
  var TeamDriveID = '0AP9wThnH65b6Uk9PVA'
  var Options = {corpora:'teamDrive',includeTeamDriveItems:true,supportsTeamDrives:true,teamDriveId:TeamDriveID};
  var count;
  var TotalSize=0;
  var FileID;
  var file;
  var i=0;
  
  TeamFiles = Drive.Files.list(Options);
  Files = TeamFiles.items;
  count = Files.length;
  
  while (TeamFiles.nextPageToken){
    FileID = Files[i].id;
    file = Drive.Files.get(FileID,{supportsTeamDrives:'true'});
    if (Number(file.fileSize)>=0){
      TotalSize = TotalSize + Number(file.fileSize);
    }
    i=i+1;
    
    var NextPage = TeamFiles.nextPageToken;
    var Options2 = {corpora:'teamDrive',includeTeamDriveItems:true,supportsTeamDrives:true,teamDriveId:TeamDriveID,pageToken:NextPage};
    TeamFiles = Drive.Files.list(Options2);
    Files = TeamFiles.items;
    count = count+Files.length;
  }
  
  Logger.log("Number of Files in this TeamDrive is: "+count);
  Logger.log("The size of this TeamDrive is: "+TotalSize);
  Logger.log("i="+i);
}