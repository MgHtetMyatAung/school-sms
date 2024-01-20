import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { cuttingString, formatDate } from "@/lib/helperfuns";
import { deleteAnnouncement } from "@/server/announcement/actions";
import React from "react";

interface Announcement {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

const theads = ["No", "Name", "Description", "CreatedAt", ""];

export default function AnnouncementTable({
  announcements,
}: {
  announcements: any;
}) {
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
        {announcements.map((announcement: Announcement, index: number) => (
          <tr key={announcement.id}>
            <td className="border-b p-3">{index + 1}</td>
            <td className="border-b p-3">
              {cuttingString(announcement.title, 60)}
            </td>

            <td className="border-b p-3">
              {cuttingString(announcement.description, 80)}
            </td>
            <td className="border-b p-3">
              {formatDate(announcement.createdAt)}
            </td>
            <td className="border-b p-3 flex items-center gap-3">
              <DeleteButton
                title="Are you sure to delete ?"
                action={deleteAnnouncement.bind(null, announcement.id)}
              />
              <EditButton
                link={`/dashboard/announcements/edit?id=${announcement.id}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
