const users = [
  { name: "Olha", email: "olha234@gmail.com", age: 25 },
  { name: "Lina", email: "linaxc@gmail.com", age: 44 },
  { name: "Mihailo", email: "mgr@gmail.com", age: 38 },
];
for (const { name, email, age } of users) {
  console.log(`${name}, ${email}, ${age}`);
}
