function extractEmails(str) {
  let pattern =
    /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([a-zA-Z0-9]+)(@)([a-zA-Z0-9]+([\.\-][a-zA-Z0-9]+)+))(\b|(?=\s))/g;
  let matches = str.match(pattern);

  for (const element of matches) {
    console.log(element);
  }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails(
  'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'
);
extractEmails(
  'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'
);
