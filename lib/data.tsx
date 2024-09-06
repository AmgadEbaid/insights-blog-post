

export async function fetchAllPosts() {
  const url = "http://localhost:8000/articles?take=10&skip=0";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json as post[];
  } catch (error) {
    console.error(error);
  }
}
export async function FetchAutherPosts(id: string) {
  const url = `http://localhost:8000/articles/user/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json as post[];
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePost(id: string) {
  const url = `http://localhost:8000/articles/${id}`;
  try {
    const response = await fetch(url,
      { cache: 'force-cache' }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log("inside fetch single post")
    return json as singlePost;
  } catch (error) {
    console.error(error);
  }
}

