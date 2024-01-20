import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { deleteStudent } from "@/server/student/actions";
import React from "react";

interface Student {
  id: string;
  name: string;
  father_name: string;
  email: string;
  dob: string;
  phone: string;
  address: string;
  courseId?: string;
}

const theads = [
  "No",
  "Name",
  "Father",
  "Date of Birth",
  "Email",
  "Phone",
  "Address",
  "",
];

export default function StudentTable({ students }: { students: any }) {
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
        {students.map((student: Student, index: number) => (
          <tr key={student.email}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">{student.name}</td>
            <td className="border-b p-3">{student.father_name}</td>
            <td className="border-b p-3">{student.dob}</td>
            <td className="border-b p-3">{student.email}</td>
            <td className="border-b p-3">{student.phone}</td>
            <td className="border-b p-3">{student.address}</td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteStudent.bind(null, student.id)}
              />
              <EditButton link={`/dashboard/students/edit?id=${student.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
