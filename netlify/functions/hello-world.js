exports.handler = async function () {
  const date = new Date();
  console.log(`Asking for Hello World at ${date}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!'
    })
  }
}