"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const project = {
  id: "1",
  title: "Redesign Marketing Website",
  description:
    "This project aims to enhance the design of the marketing website to improve user experience and brand alignment.",
  status: "In Progress",
  progress: 45,
  createdDate: "2024-09-15",
  dueDate: "2024-12-01",
  priority: "High",
  team: [
    { name: "Alice", role: "Designer" },
    { name: "Bob", role: "Developer" },
  ],
  milestones: [
    { title: "Wireframe Approval", dueDate: "2024-10-01", status: "Completed" },
    { title: "Prototype Review", dueDate: "2024-11-01", status: "In Progress" },
  ],
  tasks: [
    { taskName: "Initial Wireframe", status: "Completed" },
    { taskName: "Prototype Design", status: "In Progress" },
    { taskName: "Final UI Implementation", status: "Pending" },
  ],
  comments: [
    {
      user: "Alice",
      comment: "Wireframe approved by the team.",
      date: "2024-10-01",
    },
    { user: "Bob", comment: "Working on the prototype.", date: "2024-10-15" },
  ],
};

export default function ProjectDetail() {
  const router = useRouter();

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
          {project.milestones.map((milestone) => (
            <li key={milestone.title} className="mb-2">
              {milestone.title} - Due: {milestone.dueDate} -{" "}
              <Badge>{milestone.status}</Badge>
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold">Tasks</h3>
        <ul>
          {project.tasks.map((task) => (
            <li key={task.taskName} className="mb-1">
              {task.taskName} - <Badge variant="outline">{task.status}</Badge>
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold">Team</h3>
        <ul>
          {project.team.map((member) => (
            <li key={member.name}>
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
