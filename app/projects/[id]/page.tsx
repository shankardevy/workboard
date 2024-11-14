"use client";

import React, { useEffect, useState } from "react";
import { camelCase } from "change-case/keys";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";

export default function ProjectDetail() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch project details.");
        }
        return response.json();
      })
      .then((data) => {
        setProject(camelCase(data, 3));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading project details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <Card className="max-w-2xl p-4">
      <CardHeader>
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-sm text-gray-500">{project.description}</p>
      </CardHeader>
      <CardContent>
        <Badge className="mb-2">{project.status}</Badge>
        <Progress value={project.progress} className="mb-4" />
        <p>
          <strong>Due Date:</strong> {project.dueDate}
        </p>
        <p>
          <strong>Priority:</strong> {project.priority}
        </p>

        <h3 className="mt-4 font-semibold">Milestones</h3>
        <ul>
          {project.milestones.map((milestone, index) => (
            <li key={index} className="mb-2">
              {milestone.title} - Due: {milestone.dueDate} -{" "}
              <Badge>{milestone.status}</Badge>
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold">Tasks</h3>
        <ul>
          {project.tasks.map((task, index) => (
            <li key={index} className="mb-1">
              {task.taskName} - <Badge variant="outline">{task.status}</Badge>
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold">Team</h3>
        <ul>
          {project.team.map((member, index) => (
            <li key={index}>
              {member.name} - {member.role}
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold">Comments</h3>
        <ul>
          {project.comments.map((comment, index) => (
            <li key={index} className="mb-2">
              <strong>{comment.user}:</strong> {comment.comment} -{" "}
              <span className="text-xs text-gray-500">{comment.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={() => router.back()}>Back to Projects</Button>
      </CardFooter>
    </Card>
  );
}
