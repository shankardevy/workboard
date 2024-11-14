import axiosInstance from "@/services/axiosInstance";

// Fetch the list of all projects
export const fetchProjects = async () => {
  try {
    const response = await axiosInstance.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Fetch details for a specific project by ID
export const fetchProjectById = async (projectId) => {
  try {
    const response = await axiosInstance.get(`/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project ${projectId}:`, error);
    throw error;
  }
};
