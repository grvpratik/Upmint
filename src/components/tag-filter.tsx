"use client";
import { cn } from "@/libs/utils";
import React, { useState } from "react";
import { PlusFilledSvg, TagsFilledSvg, TickFilledSvg } from "./icons/svg";

// Define the Tag type for the tags array
type Tag = string;

// Define the props interface for TagFilter component
interface TagFilterProps {
  tags: Tag[];
  filter: any;
  onTagSelected: (selectedTags: Tag[]) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  onTagSelected,
  filter,
}) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleTagClick = (tag: Tag) => {
    const newSelectedTags = [...selectedTags];

    // Toggle the tag - remove it if it's already selected, add it if it's not
    if (newSelectedTags.includes(tag)) {
      const index = newSelectedTags.indexOf(tag);
      newSelectedTags.splice(index, 1);
    } else {
      newSelectedTags.push(tag);
    }
    setSelectedTags(newSelectedTags);
    onTagSelected({
      ...filter,
      page: 1,
      tags: newSelectedTags,
    });
  };

  return (
    <div>
      <div>
        <div className=" my-3  flex  items-center gap-2 py-1 font-medium md:text-lg">
          {" "}
          <span className=" text-gray-800"> Tags</span>{" "}
          <TagsFilledSvg className="h-5 w-5  text-gray-800" />
        </div>
      </div>
      <ul className="flex flex-wrap gap-3">
        {tags.map((tag: Tag) => (
          <li
            className={cn(
              " flex cursor-pointer items-center gap-1 rounded-full bg-gray-200 p-1 pl-3 pr-2 text-sm  font-normal",
              selectedTags.includes(tag) && " bg-green-200",
            )}
            key={tag}
            onClick={() => handleTagClick(tag)}
          >
            <span>{tag}</span>
            {selectedTags.includes(tag) ? (
              <TickFilledSvg className="z-10 h-4 w-4 text-green-600/50 " />
            ) : (
              <PlusFilledSvg className="h-4 w-4 text-gray-400" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagFilter;
