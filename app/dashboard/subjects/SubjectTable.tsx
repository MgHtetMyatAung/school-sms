import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { cuttingString } from "@/lib/helperfuns";
import { deleteSubject } from "@/server/subject/actions";
import React from "react";

interface Subject {
  id: string;
  title: string;
  description: string;
}

const theads = ["No", "Name", "Description", ""];

export default function SubjectTable({ subjects }: { subjects: any }) {
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
        {subjects.map((subject: Subject, index: number) => (
          <tr key={subject.id}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">{subject.title}</td>
            <td className="border-b p-3">
              {cuttingString(subject.description, 80)}
            </td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteSubject.bind(null, subject.id)}
              />
              <EditButton link={`/dashboard/subjects/edit?id=${subject.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
