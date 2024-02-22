'use client'
import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import firebase from "firebase/compat/app";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon extension={extension} />
        </div>
      );
    },
  },
  {
    accessorKey: "fileName",
    header: "File Name",
    cell: ({ renderValue, ...props }) => {
      return (
        <div className="w-10">{(renderValue() as string) || "No filename"}</div>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
    cell: ({ renderValue, ...props }) => {
      const timestamp = renderValue();
      if (timestamp) {
        let date;
        if (typeof timestamp === "string") {
          date = new Date(timestamp);
        } else if (timestamp instanceof Date) {
          date = timestamp;
        }
        if (date) {
          return <div className="w-10">{date.toLocaleDateString()}</div>;
        }
      }
      return <div className="w-10">No timestamp</div>;
    },
  },
  {
    accessorKey: "size",
    header: "size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => (
      <a
        href={renderValue() as string}
        target="_blank"
        className="underline text-blue-500 hover-text-blue-600"
      >
        Download
      </a>
    ),
  },
];
