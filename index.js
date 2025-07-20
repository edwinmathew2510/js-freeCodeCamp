// async/await

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showSteps() {
  console.log("Step 1");
  await wait(1000); // wait 1 second
  console.log("Step 2");
  await wait(1000);
  console.log("Step 3");
}
showSteps();

/////////////////////

async function getUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let userData = await response.json();
    userData.forEach((user) => {
      console.log(`${user.name} -${user.email} `);
    });
  } catch (error) {
    console.error("Error on Fetching", error);
  }
}

/////////////////////

async function getUserCity() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    let southChristyUsers = users.filter(
      (user) => user.address.city === "South Christy"
    );
    southChristyUsers.forEach((user) => {
      const { street, suite, city, zipcode } = user.address;
      console.log(`${user.name} - ${street}, ${suite}, ${city} - ${zipcode}`);
    });
  } catch (error) {
    console.error("Error while fetching", error);
  }
}
