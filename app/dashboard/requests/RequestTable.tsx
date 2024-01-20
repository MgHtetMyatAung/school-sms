import AccessButton from "@/components/actions/AccessButton";
import DeleteButton from "@/components/actions/DeleteButton";
import { deleteRequest } from "@/server/request/actions";
import React from "react";

interface Request {
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

export default function RequestTable({ requests }: { requests: any }) {
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
        {requests.map((request: Request, index: number) => (
          <tr key={request.email}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">{request.name}</td>
            <td className="border-b p-3">{request.father_name}</td>
            <td className="border-b p-3">{request.dob}</td>
            <td className="border-b p-3">{request.email}</td>
            <td className="border-b p-3">{request.phone}</td>
            <td className="border-b p-3">{request.address}</td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteRequest.bind(null, request.id)}
              />
              <AccessButton data={request} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
