import ProjectDetails from "@/actions/getProjectDetails";
import MarginX from "@/components/margin-container";
import OptImage from "@/components/ui/optimised-image";
import React from "react";

const ProjectDetailsPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const mintDetails = await ProjectDetails(slug);

  return (
    <MarginX>
      <div className="grid w-full  grid-cols-1 lg:grid-cols-4">
        <div className="col-span-full flex flex-col gap-2 md:col-span-3">
          {" "}
          <OptImage
            className=" h-32 overflow-hidden rounded-lg"
            src={mintDetails.bannerUrl}
            alt=""
          />{" "}
          <div className="flex gap-2">
            <OptImage
              className="relative h-12 w-12 overflow-hidden rounded-full md:w-16 md:h-16"
              src={mintDetails.imageUrl}
              alt=""
            />
            <div className="flex flex-col">
              <div>{mintDetails.name}</div>
              <div>{mintDetails.currFollower}</div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {" "}
            <div>image a</div>
            <div>nd detail</div>
          </div>
        </div>
        <div>suggestion</div>
      </div>
    </MarginX>
  );
};

export default ProjectDetailsPage;
