function requiredReading(numberOfPages, pagesPerHour, daysForRead) {
  let hourForWholeBook = numberOfPages / pagesPerHour;
  let HourForRead = hourForWholeBook / daysForRead;
  console.log(HourForRead);
}

requiredReading(212, 20, 2);
