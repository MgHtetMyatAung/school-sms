import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { deleteTeacher } from "@/server/teacher/actions";
import React from "react";

interface Teacher {
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

export default function TeacherTable({ teachers }: { teachers: any }) {
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
        {teachers.map((teacher: Teacher, index: number) => (
          <tr key={teacher.email}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">{teacher.name}</td>
            <td className="border-b p-3">{teacher.father_name}</td>
            <td className="border-b p-3">{teacher.dob}</td>
            <td className="border-b p-3">{teacher.email}</td>
            <td className="border-b p-3">{teacher.phone}</td>
            <td className="border-b p-3">{teacher.address}</td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteTeacher.bind(null, teacher.id)}
              />
              <EditButton link={`/dashboard/teachers/edit?id=${teacher.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
