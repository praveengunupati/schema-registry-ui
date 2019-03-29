const testSchema = {
  posts: [
    {
      id: 1,
      title: 'hello'
    }
  ],
  profile: {
    name: 'typicode'
  }
};
export const schemas = [
  {
    id: 1,
    name: 'Hello',
    schema: JSON.stringify({ ...testSchema, ...{ id: 1 } })
  },
  {
    id: 2,
    name: 'Hello',
    schema: JSON.stringify(testSchema)
  },
  { id: 3, name: 'Hello', schema: JSON.stringify(testSchema) },
  {
    id: 4,
    name: 'Hello',
    schema: JSON.stringify(testSchema)
  }
];
