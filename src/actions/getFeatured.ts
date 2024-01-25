import getProjects from "./getProjects";

const GetFeatured = async () => {
  try {
    const projects = await getProjects({
      
    });
    const result = projects.result;
    return { result, error: null }; // Returning result and setting error to null if successful
  } catch (error) {
    return { result: null, error }; // Returning null for result and the actual error
  }
};

export default GetFeatured;
