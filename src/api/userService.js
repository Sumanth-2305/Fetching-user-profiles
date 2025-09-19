export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const users = await response.json();
    return users.map(user => ({
      ...user,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}`
      //The url in the assignment is not working as it being outdated, so I have used dicebear's avataaars API to generate avatars based on username.
    }));
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return []; 
  }
};