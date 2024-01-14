"use client";
import { cn } from "@/libs/utils";
import React, { useState } from "react";
import { PlusFilledSvg, TickFilledSvg } from "./icons/svg";

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
      <h3 className=" flex items-start py-3  font-medium md:text-lg">Tags</h3>
      <ul className="flex flex-wrap gap-3">
        {tags.map((tag: Tag) => (
          <li
            className={cn(
              " flex cursor-pointer items-center gap-1 rounded-full bg-gray-200 p-1.5 px-2 text-sm  font-normal",
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
