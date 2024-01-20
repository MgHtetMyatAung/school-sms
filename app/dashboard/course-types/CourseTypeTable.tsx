import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { cuttingString } from "@/lib/helperfuns";
import { deleteCourseType } from "@/server/course-type/actions";
import React from "react";

interface CourseType {
  id: string;
  name: string;
  description: string;
}

const theads = ["No", "Name", "Description", ""];

export default function CourseTypeTable({ courseTypes }: { courseTypes: any }) {
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
        {courseTypes.map((type: CourseType, index: number) => (
          <tr key={type.id}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">{type.name}</td>
            <td className="border-b p-3">
              {cuttingString(type.description, 80)}
            </td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteCourseType.bind(null, type.id)}
              />
              <EditButton link={`/dashboard/course-types/edit?id=${type.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
