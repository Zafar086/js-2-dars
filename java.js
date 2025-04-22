const first = prompt("String typedagi ma'lumot kiriting?");
console.log(String(first));

const second = prompt("Number typedagi ma'lumot kiriting?");

const third = prompt("Boolean typedagi ma'lumot kiriting?");

confirm("Hamma ma'lumotlarni to'g'ri kiritganizga ishonchingiz komilmi?");

// alert(`${first} so'zi string typega tegishli `)
alert(`${first} so'zi ${typeof String(first)} typega tegishli. ${second} so'zi ${typeof Number(second)} typega tegishli. ${third} so'zi ${typeof Boolean(third)} typega tegishli.
`);
