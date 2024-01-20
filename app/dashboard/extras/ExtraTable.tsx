import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { cuttingString } from "@/lib/helperfuns";
import { deleteExtraData } from "@/server/extra/actions";
import React from "react";

interface Extra {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
}

const theads = ["No", "Name", "Slug", "Description", "Image", ""];

export default function ExtrasTable({ extras }: { extras: any }) {
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
        {extras.map((extra: Extra, index: number) => (
          <tr key={extra.id}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">{extra.title}</td>
            <td className="border-b p-3">{extra.slug}</td>

            <td className="border-b p-3">
              {cuttingString(extra.description, 70)}
            </td>
            <td className="border-b p-3">{cuttingString(extra.image, 40)}</td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteExtraData.bind(null, extra.id)}
              />
              <EditButton link={`/dashboard/extras/edit?id=${extra.id}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
