"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Redesign Marketing Website",
    description:
      "A project focused on updating the marketing website with a modern design.",
    status: "Active",
    progress: 45,
    dueDate: "2024-12-01",
    priority: "High",
    team: ["Alice", "Bob"],
    tags: ["Design", "Marketing"],
  },
];

export default function ProjectDashboard() {
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
