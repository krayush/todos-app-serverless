const response = [
  {
    id: 1,
    name: "Some content goes here",
  },
  {
    id: 2,
    name: "Some other content goes here",
  },
  {
    id: 3,
    name: "Some other content goes here too!",
  },
];

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(response),
  };
  return response;
};
