"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { camelCase } from "change-case/keys";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import withAuth from "@/components/hoc/withAuth";
import { useAuthStore } from "@/stores/authStore";

function ProjectDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Retrieve the token from localStorage
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    // Fetch the list of projects from the API with Authorization header
    fetch("http://localhost:4000/projects", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects.");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data.map((project) => camelCase(project)));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="shadow-lg">
          <CardHeader>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-500">{project.description}</p>
          </CardHeader>
          <CardContent>
            <Badge className="mb-2">{project.status}</Badge>
            <div className="flex justify-between mb-2">
              <span>Due: {project.dueDate}</span>
              <Badge variant="outline">{project.priority}</Badge>
            </div>
            <Progress value={project.progress} className="mb-2" />
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/projects/${project.id}`}>
              <Button variant="outline">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default withAuth(ProjectDashboard);
