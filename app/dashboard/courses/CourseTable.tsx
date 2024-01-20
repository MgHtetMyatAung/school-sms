import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import GoDetailButton from "@/components/actions/GoDetailButton";
import { cuttingString } from "@/lib/helperfuns";
import { deleteCourse } from "@/server/course/actions";
import React from "react";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  startDate: string;
}

const theads = [
  "No",
  "Name",
  "Duration",
  "Description",
  "Start Date",
  "Price",
  "",
];

export default function CourseTable({ courses }: { courses: any }) {
  return (
    <table className=" table-auto w-full border-collapse border-gray-500">
      <thead>
        <tr>
          {theads.map((i) => (
            <th key={i} className=" text-start p-3 border-b">
              {i}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {courses.map((course: Course, index: number) => (
          <tr key={course.id}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">{course.title}</td>
            <td className="border-b p-3">{course.duration}</td>
            <td className="border-b p-3">
              {cuttingString(course.description, 10)}
            </td>
            <td className="border-b p-3">{course.startDate}</td>
            <td className="border-b p-3">{course.price}</td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteCourse.bind(null, course.id)}
              />
              <EditButton link={`/dashboard/courses/edit?id=${course.id}`} />
              <GoDetailButton link={`/dashboard/courses/${course.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
