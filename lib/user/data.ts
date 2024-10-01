export async function getUser(id: string) {
  const url = `http://localhost:8000/users/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const user = await response.json();

    return user as User;
  } catch (error) {
    console.log("hello error");
    console.error(error);
  }
}

export async function getUserFavoritesStories(userID: string) {
  const url = `http://localhost:8000/articles/Favorites/user/${userID}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const FavoritesStories = await response.json();
    return FavoritesStories as post[];
  } catch (error) {
    console.error(error);
  }
}
