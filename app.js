// write code here
const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];

const result = array.map(item => {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const dateParts = item.birth.split('-');
  const formattedDate = `${dateParts[2]} ${months[parseInt(dateParts[1]) - 1]} ${dateParts[0]}`;
  return `<tr><td>${item.name}</td><td>${formattedDate}</td></tr>`;
});

console.log(result);
