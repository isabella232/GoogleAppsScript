function findFilesinFolder() {
  var YearBeforeNow = new Date().getTime()-3600*1000*24*365;
    // 365 is the number of days 
    //(3600 seconds = 1 hour, 1000 milliseconds = 1 second, 24 hours = 1 day and 365 days is the duration you wanted
    //needed in yr-month-day format

  var cutOffDate = new Date(YearBeforeNow);
  var cutOffDateAsString = Utilities.formatDate(cutOffDate, "GMT", "yyyy-MM-dd");
  // Logger.log(cutOffDateAsString);

  var folder = DriveApp.getFolderById('12C3Y_MYUJmueBBudbv_p95KO4YkxqWQe')
  var file

   // Logger.log('Foldername = ' + folder.getName());
    files = folder.searchFiles('modifiedDate < "' + cutOffDateAsString + '"')
    while (files.hasNext()) {
        file = files.next()
        file.setTrashed(true)
       // Logger.log('Filename = ' + file.getName());
       // Logger.log('FileID = ' + file.getId());
  }
};