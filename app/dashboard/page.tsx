import { prisma } from "@/utils/prisma";
import React from "react";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("@/components/charts/BarChart"), {
  ssr: false,
});

const ColumnChart = dynamic(() => import("@/components/charts/ColumnChart"), {
  ssr: false,
});

const DonutChart = dynamic(() => import("@/components/charts/DonutChart"), {
  ssr: false,
});

export default async function DashboardPage() {
  const courses = await prisma.course.findMany({
    include: {
      students: true,
    },
  });

  const coursesOfTeacher = await prisma.course.findMany({
    include: {
      teachers: true,
    },
  });

  const courseDatas = courses.map((course) => ({
    x: course.title,
    y: course?.students?.length,
    z: `B ${course.batch}`,
  }));
  const courseTeacherDatas = coursesOfTeacher.map((course) => ({
    x: course.title,
    y: course?.teachers?.length,
  }));

  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Dashboard</h1>
      </div>
      {courses.length > 0 && (
        <div className=" grid lg:grid-cols-3 gap-5 mt-5">
          <div className=" p-3 rounded shadow border">
            <ColumnChart
              series={courseDatas.map((data) => data.y)}
              labels={courseDatas.map((data) => data.x)}
            />
          </div>
          <div className=" p-3 rounded shadow border">
            <BarChart
              seriesdata={courseDatas.map((data) => data.y)}
              labels={courseDatas.map((data) => data.z)}
            />
          </div>
          <div className=" p-3 rounded shadow border">
            <DonutChart
              labels={courseTeacherDatas.map((data) => data.x)}
              series={courseTeacherDatas.map((data) => data.y)}
            />
          </div>
        </div>
      )}
    </main>
  );
}
