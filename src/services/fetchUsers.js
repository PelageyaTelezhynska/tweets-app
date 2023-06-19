export const fetchUsers = async () => {
    const response = await fetch(`https://63de5938f1af41051b117835.mockapi.io/users`);
    return response.json();
  };